import { $GET } from '@/utils/index'

// 更新数据
let searchJson: any[] = [];
const getSearchJson = async () => (searchJson = await $GET('/vh-search.json'))

// 搜索
const searchFn = async (value: string) => {
  if (!searchJson.length) await getSearchJson();
  // 渲染页面
  renderSearch(findAndModifyElements(searchJson, value))
}

// 关键词匹配
const findAndModifyElements = (arr: any[], keyword: string) => {
  if ((keyword || '') == '') return []
  
  // 检查是否是类别搜索（格式：cat:分类名）
  const categoryMatch = keyword.match(/^cat:(.+)$/i);
  if (categoryMatch) {
    const categoryName = categoryMatch[1].trim().toLowerCase();
    return arr
      .filter(item => item.categories && item.categories.toLowerCase() === categoryName)
      .map(item => ({ ...item, content: `<span class="search-tag">分类: ${item.categories}</span> ${item.content}` }));
  }
  
  // 检查是否是标签搜索（格式：tag:标签名）
  const tagMatch = keyword.match(/^tag:(.+)$/i);
  if (tagMatch) {
    const tagName = tagMatch[1].trim().toLowerCase();
    return arr
      .filter(item => item.tags && Array.isArray(item.tags) && 
              item.tags.some((tag: string) => tag.toLowerCase() === tagName))
      .map(item => {
        const matchedTags = item.tags
          .filter((tag: string) => tag.toLowerCase() === tagName)
          .map((tag: string) => `<span class="search-tag">${tag}</span>`)
          .join(' ');
        return { ...item, content: `${matchedTags} ${item.content}` };
      });
  }
  
  // 普通关键词搜索
  return arr
    .filter(item => 
      item.content.includes(keyword) || 
      item.title.includes(keyword) ||
      (item.categories && item.categories.includes(keyword)) ||
      (item.tags && Array.isArray(item.tags) && 
       item.tags.some((tag: string) => tag.includes(keyword)))
    )
    .map(item => {
      let result = { ...item };
      
      // 如果内容中包含关键词，高亮显示
      if (item.content.includes(keyword)) {
        const content = item.content;
        const keywordIndex = content.indexOf(keyword);
        const start = Math.max(0, keywordIndex - 50);
        const end = Math.min(content.length, keywordIndex + keyword.length + 50);
        let newContent = content.substring(start, end);
        newContent = newContent.replace(new RegExp(keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), "g"), `<span>${keyword}</span>`);
        result.content = newContent;
      }
      
      // 如果匹配了分类或标签，添加到结果中
      let prefixContent = '';
      if (item.categories && item.categories.includes(keyword)) {
        prefixContent += `<span class="search-tag">分类: ${item.categories}</span> `;
      }
      
      if (item.tags && Array.isArray(item.tags)) {
        const matchedTags = item.tags
          .filter((tag: string) => tag.includes(keyword))
          .map((tag: string) => `<span class="search-tag">${tag}</span>`)
          .join(' ');
        if (matchedTags) {
          prefixContent += matchedTags + ' ';
        }
      }
      
      if (prefixContent) {
        result.content = prefixContent + result.content;
      }
      
      return result;
    });
}

// 渲染页面
let searchHTML = '';
const renderSearch = (arr: any[]) => {
  searchHTML = !arr.length ? '<em>未找到相关内容，可以尝试以下搜索方式:<br>1. 普通搜索: 直接输入关键词<br>2. 分类搜索: 输入 cat:分类名<br>3. 标签搜索: 输入 tag:标签名</em>' : 
    arr.map(i => `<a class="vh-search-item" href="${i.url}"><span class="vh-ellipsis">${i.title}</span><p class="vh-ellipsis line-3">${i.content}</p></a>`).join('');
  document.querySelector('.vh-header>.main>.vh-search>main>.vh-search-list')!.innerHTML = searchHTML;
}

// 截流
let fnTimer: any = null;
const searchInputChange = (v: any) => {
  const value = v.target.value;
  if (fnTimer) clearTimeout(fnTimer);
  fnTimer = setTimeout(() => searchFn(value), 266);
}

// 初始化搜索框
const vhSearchInit = () => {
  const searchDOM: any = document.querySelector(".vh-header>.main>nav>span.search-btn");
  const searchMainDOM: any = document.querySelector(".vh-header>.main>.vh-search>main");
  const searchListDOM: any = document.querySelector(".vh-header>.main>.vh-search");
  const addActive = () => setTimeout(() => {
    searchListDOM.classList.add("active");
    searchListDOM.querySelector(".search-input>input").focus();
  });
  const removeActive = () => setTimeout(() => searchListDOM.classList.remove("active"));
  // 禁止默认事件
  searchMainDOM.addEventListener("click", (e: Event) => e.stopPropagation());
  searchDOM.addEventListener("click", addActive);
  searchListDOM.addEventListener("click", removeActive);
  // 搜索框初内容变化
  searchListDOM.querySelector(".search-input>input").addEventListener("input", searchInputChange);
};

export { searchFn, searchInputChange, vhSearchInit };