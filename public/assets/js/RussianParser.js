// Initialize Web Speech API
let synth;
try {
  synth = window.speechSynthesis;
} catch (e) {
  console.error('Speech Synthesis API is not available:', e);
  // Create a fallback synth object with empty methods
  synth = {
    speaking: false,
    cancel: () => {},
    speak: () => { console.log('Speech synthesis not available'); },
    getVoices: () => []
  };
}

// Speaker SVG icon HTML
const speakerIconSvg = `<svg class="speaker-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5L6 9H2v6h4l5 4zm5.54 3.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>`;

// Delete icon HTML
const deleteIconSvg = `<svg class="delete-icon" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>`;

// Initialize songs from local storage
function loadSongs() {
  try {
    const savedSongs = localStorage.getItem('russianSongs');
    return savedSongs ? JSON.parse(savedSongs) : [];
  } catch (e) {
    console.error('Error loading songs from local storage:', e);
    return [];
  }
}

// Save songs to local storage
function saveSongs(songs) {
  try {
    localStorage.setItem('russianSongs', JSON.stringify(songs));
  } catch (e) {
    console.error('Error saving songs to local storage:', e);
  }
}

// Render the song list
function renderSongList() {
  try {
    const songList = document.getElementById('songList');
    if (!songList) {
      console.error('Song list element not found');
      return;
    }
    
    const songs = loadSongs();
    
    if (songs.length === 0) {
      songList.innerHTML = '<p class="empty-message">还没有保存的歌曲</p>';
      return;
    }
    
    songList.innerHTML = '';
    
    songs.forEach((song, index) => {
      const songElement = document.createElement('div');
      songElement.className = 'song-item';
      songElement.innerHTML = `
        <span class="song-title">${song.title}</span>
        <span class="song-actions">
          <button class="play-song-btn" data-index="${index}" aria-label="播放歌曲">${speakerIconSvg}</button>
          <button class="delete-song-btn" data-index="${index}" aria-label="删除歌曲">${deleteIconSvg}</button>
        </span>
      `;
      songList.appendChild(songElement);
    });
    
    // Add event listeners for song actions
    document.querySelectorAll('.play-song-btn').forEach(button => {
      button.addEventListener('click', (e) => {
        try {
          const index = e.currentTarget.getAttribute('data-index');
          const songs = loadSongs();
          const song = songs[index];
          
          const russianText = document.getElementById('russianText');
          if (!russianText) return;
          
          // Load the song text into the textarea
          russianText.value = song.text;
          
          // Parse the text
          parseText();
        } catch (e) {
          console.error('Error playing song:', e);
        }
      });
    });
    
    document.querySelectorAll('.delete-song-btn').forEach(button => {
      button.addEventListener('click', (e) => {
        try {
          const index = e.currentTarget.getAttribute('data-index');
          const songs = loadSongs();
          
          // Remove the song
          songs.splice(index, 1);
          saveSongs(songs);
          
          // Update the UI
          renderSongList();
        } catch (e) {
          console.error('Error deleting song:', e);
        }
      });
    });
  } catch (e) {
    console.error('Error rendering song list:', e);
  }
}

// Function to add a new song
function addSong(title, text) {
  try {
    const songs = loadSongs();
    
    // Check if a song with this title already exists
    const existingIndex = songs.findIndex(song => song.title === title);
    
    if (existingIndex >= 0) {
      // Update existing song
      songs[existingIndex].text = text;
    } else {
      // Add new song
      songs.push({ title, text });
    }
    
    saveSongs(songs);
    renderSongList();
  } catch (e) {
    console.error('Error adding song:', e);
  }
}

// Function to parse text (for play song button)
function parseText() {
  try {
    const russianText = document.getElementById('russianText');
    if (!russianText) return;
    
    const text = russianText.value;
    
    if (text.trim().length === 0) {
      alert('请输入俄语文本');
      return;
    }
    
    renderWords();
    renderSentences();
  } catch (e) {
    console.error('Error parsing text:', e);
  }
}

// Simple Russian-Chinese dictionary for common words
const russianChineseDict = {
  'я': '我',
  'ты': '你',
  'он': '他',
  'она': '她',
  'оно': '它',
  'мы': '我们',
  'вы': '你们',
  'они': '他们',
  'привет': '你好',
  'здравствуйте': '您好',
  'спасибо': '谢谢',
  'пожалуйста': '请',
  'да': '是',
  'нет': '否',
  'хорошо': '好的',
  'плохо': '不好',
  'люблю': '爱',
  'дом': '家',
  'работа': '工作',
  'школа': '学校',
  'студент': '学生',
  'учитель': '老师',
  'книга': '书',
  'друг': '朋友',
  'мама': '妈妈',
  'папа': '爸爸',
  'брат': '兄弟',
  'сестра': '姐妹',
  'кошка': '猫',
  'собака': '狗',
  'вода': '水',
  'еда': '食物',
  'хлеб': '面包',
  'молоко': '牛奶',
  'чай': '茶',
  'кофе': '咖啡',
  'утро': '早晨',
  'день': '白天',
  'вечер': '晚上',
  'ночь': '夜晚',
  'сегодня': '今天',
  'завтра': '明天',
  'вчера': '昨天',
  'год': '年',
  'месяц': '月',
  'неделя': '周',
  'время': '时间',
  'один': '一',
  'два': '二',
  'три': '三',
  'четыре': '四',
  'пять': '五',
  'большой': '大的',
  'маленький': '小的',
  'новый': '新的',
  'старый': '旧的',
  'красивый': '漂亮的',
  'счастливый': '快乐的',
  'грустный': '悲伤的',
  'говорить': '说话',
  'видеть': '看见',
  'слышать': '听见',
  'знать': '知道',
  'думать': '思考',
  'идти': '走',
  'бежать': '跑',
  'стоять': '站立',
  'сидеть': '坐',
  'спать': '睡觉',
  'есть': '吃',
  'пить': '喝',
  'читать': '阅读',
  'писать': '写',
  'учиться': '学习',
  'работать': '工作'
};

// Function to check if a language is available
function isLanguageAvailable(langCode) {
  const voices = synth.getVoices();
  return voices.some(voice => voice.lang.includes(langCode));
}

// Function to get Russian voice
function getRussianVoice() {
  try {
    if (!synth || typeof synth.getVoices !== 'function') {
      console.error('Speech synthesis voices not available');
      return null;
    }
    
    const voices = synth.getVoices();
    
    if (!voices || voices.length === 0) {
      console.log('No speech synthesis voices available');
      return null;
    }
    
    // First try to find a Russian voice
    const russianVoice = voices.find(voice => voice.lang && voice.lang.includes('ru-RU'));
    
    // If Russian voice exists, return it
    if (russianVoice) return russianVoice;
    
    // Otherwise return the first available voice
    return voices[0];
  } catch (e) {
    console.error('Error getting voices:', e);
    return null;
  }
}

// Function to speak text in Russian
function speakRussian(text) {
  try {
    if (!synth || typeof synth.speaking === 'undefined') {
      console.error('Speech synthesis not available');
      return;
    }
    
    if (synth.speaking) {
      synth.cancel();
    }
    
    const utterance = new SpeechSynthesisUtterance(text);
    try {
      utterance.voice = getRussianVoice();
      utterance.lang = 'ru-RU';
      utterance.rate = 0.9;
      utterance.pitch = 1;
      
      synth.speak(utterance);
    } catch (e) {
      console.error('Error when trying to speak:', e);
    }
  } catch (e) {
    console.error('Speech synthesis error:', e);
  }
}

// Function to get Chinese translation for a Russian word
function getChineseTranslation(word) {
  // Convert word to lowercase and remove any punctuation
  const cleanWord = word.toLowerCase().replace(/[.,!?;:()]/g, '');
  
  // Return translation if available, otherwise return a default message
  return russianChineseDict[cleanWord] || '无翻译';
}

// Function to parse Russian text into words
function parseWords(text) {
  // Remove any extra whitespace and split by spaces
  return text.trim().split(/\s+/).filter(word => word.length > 0);
}

// Function to parse Russian text into sentences
function parseSentences(text) {
  // Improved sentence splitting that handles multiple line breaks and different punctuation
  const sentences = [];
  const lines = text.split(/\n+/).filter(line => line.trim().length > 0);
  
  lines.forEach(line => {
    // For lines with punctuation
    if (/[.!?]/.test(line)) {
      // Split by sentence-ending punctuation
      const parts = line.split(/([.!?]+)/).filter(part => part.trim().length > 0);
      
      // Reconstruct sentences with their punctuation
      for (let i = 0; i < parts.length; i += 2) {
        let sentence = parts[i];
        if (i + 1 < parts.length) {
          sentence += parts[i + 1];
        }
        if (sentence.trim().length > 0) {
          sentences.push(sentence.trim());
        }
      }
    } else {
      // If the line doesn't have sentence-ending punctuation, treat it as one sentence
      if (line.trim().length > 0) {
        sentences.push(line.trim());
      }
    }
  });
  
  // Handle the case when splitting didn't work as expected
  if (sentences.length === 0 && text.trim().length > 0) {
    // Fallback: treat each line as a sentence
    return lines;
  }
  
  return sentences.filter(sentence => sentence.trim().length > 0);
}

// Function to show tooltip
function showTooltip(element, text) {
  // Remove any existing tooltips
  const existingTooltip = document.querySelector('.word-tooltip');
  if (existingTooltip) {
    existingTooltip.remove();
  }
  
  // Create tooltip
  const tooltip = document.createElement('div');
  tooltip.className = 'word-tooltip';
  tooltip.textContent = text;
  
  // Position tooltip near the word
  const rect = element.getBoundingClientRect();
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  
  // Calculate position to center the tooltip above the word
  const tooltipLeft = rect.left + (rect.width / 2);
  tooltip.style.left = `${tooltipLeft}px`;
  tooltip.style.top = `${rect.top + scrollTop - 40}px`;
  tooltip.style.transform = 'translateX(-50%)';
  
  // Add tooltip to body
  document.body.appendChild(tooltip);
  
  // Remove tooltip after 3 seconds
  setTimeout(() => {
    if (document.body.contains(tooltip)) {
      tooltip.remove();
    }
  }, 3000);
}

// Function to render parsed words
function renderWords() {
  const russianText = document.getElementById('russianText');
  // const wordOutput = document.getElementById('wordOutput');
  
  const text = russianText.value;
  const words = parseWords(text);
  
  // wordOutput.innerHTML = '<h4>单词</h4>';
  
  const wordElements = words.map(word => {
    const cleanWord = word.replace(/[.,!?;:()]/g, '');
    if (cleanWord.length === 0) return '';
    
    const translation = getChineseTranslation(cleanWord);
    return `<span class="word" data-text="${cleanWord}" data-translation="${translation}">${word}</span>`;
  });
  
  // wordOutput.innerHTML += wordElements.join(' ');
  
  // Add click event listeners to words
  document.querySelectorAll('.word').forEach(wordEl => {
    wordEl.addEventListener('click', () => {
      // Remove highlight from all words
      document.querySelectorAll('.word').forEach(el => el.classList.remove('active'));
      
      // Highlight the current word
      wordEl.classList.add('active');
      
      // Get word and translation
      const text = wordEl.getAttribute('data-text');
      const translation = wordEl.getAttribute('data-translation');
      
      // Play pronunciation
      speakRussian(text);
      
      // Show tooltip
      showTooltip(wordEl, translation);
    });
  });
}

// Function to render parsed sentences
function renderSentences() {
  const russianText = document.getElementById('russianText');
  const sentenceOutput = document.getElementById('sentenceOutput');
  
  const text = russianText.value;
  const sentences = parseSentences(text);
  
  sentenceOutput.innerHTML = '<h4>句子</h4>';
  
  const sentenceElements = sentences.map((sentence, index) => {
    if (sentence.trim().length === 0) return '';
    
    // For each sentence, break it down into words but keep it as a sentence
    const words = parseWords(sentence);
    const wordSpans = words.map(word => {
      const cleanWord = word.replace(/[.,!?;:()]/g, '');
      if (cleanWord.length === 0) return word;
      
      const translation = getChineseTranslation(cleanWord);
      return `<span class="sentence-word" data-text="${cleanWord}" data-translation="${translation}">${word}</span>`;
    });
    
    // Create a div for each sentence with a speaker icon button
    return `
      <div class="sentence-container">
        <button class="speaker-button" data-text="${sentence.trim()}" aria-label="播放发音">
          ${speakerIconSvg}
        </button>
        <div class="sentence-text">${wordSpans.join(' ')}</div>
      </div>
    `;
  });
  
  sentenceOutput.innerHTML += sentenceElements.join('');
  
  // Add click event listeners to speaker buttons
  document.querySelectorAll('.speaker-button').forEach(button => {
    button.addEventListener('click', () => {
      const text = button.getAttribute('data-text');
      speakRussian(text);
      
      // Add active class to show it's playing
      button.classList.add('active');
      // Remove active class after a delay
      setTimeout(() => {
        button.classList.remove('active');
      }, 2000);
    });
  });
  
  // Add click event listeners to words within sentences
  document.querySelectorAll('.sentence-word').forEach(wordEl => {
    wordEl.addEventListener('click', (e) => {
      e.stopPropagation(); // Prevent triggering sentence click
      
      // Remove highlight from all words
      document.querySelectorAll('.sentence-word').forEach(el => el.classList.remove('active'));
      
      // Highlight the current word
      wordEl.classList.add('active');
      
      // Get word and translation
      const text = wordEl.getAttribute('data-text');
      const translation = wordEl.getAttribute('data-translation');
      
      // Play pronunciation
      speakRussian(text);
      
      // Show tooltip
      showTooltip(wordEl, translation);
    });
  });
}

// Function to initialize the Russian parser
function initRussianParser() {
  try {
    // 获取DOM元素
    const parseButton = document.getElementById('parseButton');
    const saveButton = document.getElementById('saveButton');
    const confirmSaveButton = document.getElementById('confirmSaveButton');
    const cancelSaveButton = document.getElementById('cancelSaveButton');
    const songInput = document.querySelector('.song-input');
    const songTitle = document.getElementById('songTitle');
    
    if (!parseButton) {
      console.error('Parse button not found');
      return;
    }
    
    // 初始化歌曲列表
    try {
      renderSongList();
    } catch (e) {
      console.error('Error rendering song list:', e);
    }
    
    // Event handler for parse button
    parseButton.addEventListener('click', () => {
      try {
        const russianText = document.getElementById('russianText');
        if (!russianText) {
          console.error('Russian text element not found');
          return;
        }
        
        const text = russianText.value;
        
        if (text.trim().length === 0) {
          alert('请输入俄语文本');
          return;
        }
        
        renderWords();
        renderSentences();
      } catch (e) {
        console.error('Error parsing text:', e);
        alert('文本解析出错，请检查浏览器控制台');
      }
    });
    
    // 保存歌曲相关功能
    if (saveButton) {
      saveButton.addEventListener('click', () => {
        try {
          const russianText = document.getElementById('russianText');
          if (!russianText || !songInput) return;
          
          if (russianText.value.trim().length === 0) {
            alert('请先输入文本再保存');
            return;
          }
          
          // Show the song input form
          songInput.style.display = 'flex';
          if (songTitle) songTitle.focus();
        } catch (e) {
          console.error('Error saving song:', e);
        }
      });
    }
    
    if (confirmSaveButton) {
      confirmSaveButton.addEventListener('click', () => {
        try {
          const russianText = document.getElementById('russianText');
          if (!russianText || !songTitle || !songInput) return;
          
          const title = songTitle.value.trim();
          const text = russianText.value.trim();
          
          if (title.length === 0) {
            alert('请输入歌曲名称');
            return;
          }
          
          // Save the song
          addSong(title, text);
          
          // Hide the song input form
          songInput.style.display = 'none';
          songTitle.value = '';
        } catch (e) {
          console.error('Error confirming song save:', e);
        }
      });
    }
    
    if (cancelSaveButton) {
      cancelSaveButton.addEventListener('click', () => {
        try {
          if (!songInput || !songTitle) return;
          // Hide the song input form
          songInput.style.display = 'none';
          songTitle.value = '';
        } catch (e) {
          console.error('Error canceling song save:', e);
        }
      });
    }
    
    // Initialize voices list if Speech Synthesis is available
    if (synth && typeof synth.addEventListener === 'function') {
      try {
        synth.addEventListener('voiceschanged', () => {
          getRussianVoice();
        });
      } catch (e) {
        console.error('Error setting up speech synthesis:', e);
      }
    }
  } catch (e) {
    console.error('Error initializing Russian parser:', e);
  }
}

// Initialize the parser when the document is loaded
document.addEventListener('DOMContentLoaded', () => {
  try {
    initRussianParser();
  } catch (e) {
    console.error('Error loading Russian parser:', e);
  }
}); 