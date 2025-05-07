---
title: "TS与JS区别"
categories: Tech
tags: ['TS','JS']
id: "1abbb1583539ca3b"
date: 2025-05-07 19:00:00
cover: "https://wp-cdn.4ce.cn/v2/Irshyas.png"
---

:::note{type='warning'}
JS 和 TS 对比
:::


| 框架 | JavaScript | TypeScript |
| :--: | :--: | :--: |
| 类型系统 | 弱类型 | 强类型 |
| 静态类型检查 | 无 | 有 |
| 可选类型注解 | 无 | 有 |
| 类型推断 | 有 | 有 |
| 接口 | 无 | 有 |
| 继承 | 基于原型的继承 | 基于类的继承 |
| 泛型 | 无 | 支持 |
| 支持装饰器 | 无 | 支持 |
| 编译时类型检查 | 不支持 | 支持 |
| 编译后代码可读性 | 高 | 低 |

-- --
>TypeScript 是 JavaScript 的超集，它在 JavaScript 的基础上添加了<strong>强类型、接口、类、泛型</strong> 等特性，并提供了静态类型检查等工具，让开发者能够在编写代码时更加安全、高效、可靠。与 JavaScript 相比，TypeScript 具有更强的类型系统、更严格的类型检查、更好的代码可读性和维护性等优点。此外，TypeScript 的社区活跃度也非常高，它被越来越多的开发者和公司所采用。

## 1.TypeScript 特性
TypeScript 是 Microsoft 开发和维护的一种面向对象的编程语言。它是 JavaScript 的超集，包含了 JavaScript 的所有元素，可以载入 JavaScript 代码运行，并扩展了 JavaScript 的语法。

推荐先精通JS的的前提下再学习TS；这样更有利于同时学习两门语言

TS一般用于大型项目，就像微信小程序底层库是用TS实现的，而微信小程序自身即应用层却是以JS来实现的。

### 1.1 特点
**TypeScript 具有以下特点**：

TypeScript 增加了静态类型、类、模块、接口和类型注解（强调代码的模块化，面向对象）

TypeScript 更适合用于开发大型的应用（大型应用=模块的集成，大型应用优先需要易于维护，小应用优先需要开发效率）

### 1.2 差异
> JavaScript 和 TypeScript 的主要差异

TypeScript 从核心语言方面和类概念的模塑方面对 JavaScript 对象模型进行了扩展。

JavaScript 代码可以在无需任何修改的情况下与 TypeScript 一同工作，同时可以使用编译器将 TypeScript 代码转换为 JavaScript。

TypeScript 通过类型注解提供编译时的静态类型检查。

TypeScript提供了很多数据类型，通过类型对变量进行限制，称之为类型注解，使用类型注解后，就不能够随意变更变量的类型。
项目较大时，变量类型被变更的频率就会增加，出错的概率就会提高，因此TS时强类型的面向对象的。

TypeScript 中的数据要求带有明确的类型，JavaScript不要求。

TypeScript 为函数提供了缺省参数值。

> 缺省参数使用主要规则：调用时你只能从最后一个参数开始进行省略，换句话说，如果你要省略一个参数，你必须省略它后面所有的参数。

TypeScript 引入了 JavaScript 中没有的“类”概念。

TypeScript 中引入了模块的概念，可以把声明、数据、函数和类封装在模块中。

学过.NET 的同学也许会突然发现，TS和C# 有点类似，没错；这两门语言都出自 微软之手。。

### 1.3 优势
TypeScript 比 JavaScript 更好吗？

#### 1.3.1 JavaScript优势
根据我的描述，TS 似乎只是JS的一个更好的版本。

所以你可能会认为TS会在不久的将来取代JavaScript。其实不然，我仍然相信JavaScript会有用武之地。

例如我们用TS开发微信小程序难免会推迟项目的开发周期，而用JS则更快完成。

复杂性是一个需要考虑的关键因素。

JavaScript 非常适合更简单的应用程序，因为它可以在所有平台（跨平台）上运行并且非常轻量级。另外，与JS的最小开销相比，编译TS代码需要的时间和CPU资源对项目而言会更麻烦。

#### 1.3.2 TypeScript优势
与JavaScript相比，TypeScript有很多好处。

TS 使代码重构变得更加容易，并且更强调显式类型，使开发人员能够掌握各种组件的交互方式。由于它支持编译时调试，对于处理大型复杂应用程序的团队来说，有一定的好处。

为任何项目设置TypeScript都是容易的。一些框架，如Angular，默认使用TypeScript。因此，在我看来TypeScript更胜一筹。

什么时候应该将项目迁移到TypeScript？

当代码的大小、复杂性和出错率增加时，需要在编译过程中确定具体问题时，就可以使用TypeScript。
TypeScript 还具有接口和访问修饰符，允许开发人员在单个代码库上进行协作和交互。因此，最好在项目一开始就使用TypeScript。
但是你如果喜欢像Ember.js或Glimmer.js这样的框架，那你就不会喜欢TypeScript，这些框架的首选是JavaScript。

## 2.代码对比
typescript 定义学生类

```ts
class Student{
   name:string;
   age:number;
}
var s1=new Student();
s1.name="Jim";
s1.age=20;
document.write("name:"+s1.name+" age:"+s1.age);
```


我们再来看用TypeScript编译以后的JavaScript代码：

```ts
var Student = (function () {
    function Student() {
    }
    return Student;
})();
var s1 = new Student();
s1.name = "Jim";
s1.age = 20;
document.write("name:" + s1.name + " age:" + s1.age);
```

通过对代码的对比，TypeScript代码更简洁，更好理解，更易于维护。与C#,Java,C++类似。

### 2.1 DEMO案列
先来看一个经典的程序Hello World。代码如下：

```js
<script type="text/typescript">
  var hw:string="Hello World!";     //定义一个字符串变量
  document.write(<h1>"+hw+"</h1>);  //将结果显示在页面上，这句话是不是很熟悉呢。
</script>
```


我们可以把javascript的代码用到TypeScript里面运行。上面的代码是写在script标签中，类型是typescript。如果想在页面上直接编译看到结果，还需要引用typescript.min.js与typescript.compile.min.js。

### 2.2如何引用

```html
<html>
<head>
  <title>demo</title>
</head>
<body>
  <script type="text/typescript">
     // TypeScript代码
  </script>
  <script src="lib/typescript.min.js"></script>
  <script src="lib/typescript.compile.min.js"></script>
</body>
</html>
```

## 3.语法区别
### 3.1TypeScript 的基本数据类型
> TypeScript 的基本数据类型有boolean、number 、string 、 array 、 enum 、any 、void。

如定义一个boolean的变量:
var isDone: boolean = false;

1. JS与TS中的所有数值都是浮点型，而在TS中定义为“number”型。声明一个number类型的变量：

```
var isNumber:number=6;
var isfloat:number=6.01;
```

2. 使用一对双引号(")或一对单引号(')来表示字符串

```
var name: string = "bob";
var family_name: string = 'Green';
```
3. TypeScript 中数组使用“[]”来声明，代码如下:
```
var list: number[] = [1, 2, 3];
var name: string[] = ["阿龙","阿猫","阿狗"];

// 访问方式 
var list: number[] = [1, 2, 3];
alert(list[0]));

// 定义任意类型的数组，关键字为Array.
var arr:Array = [1,2,3,"a","b","c"]; // 任意类型数组
alert(arr[1]);
```

#### 3.1.1 enum
> 枚举类型是 TypeScript 中新添加的，而 JavaScript 中是没有这个类型的。用关键字enum来声明。代码示例如下：

```
enum Color {
  Red,　　　//枚举元素列表
  Green,
  Blue
};
var c: Color = Color.Green;
```
假如我们有一个数值，但是我们不知道枚举类型中是否有定义，可以用以下方式来获取，代码如下:

```
enum Color {
  Red = 1,
  Green,
  Blue
};
var colorName: string = Color[2]; //访问第二个枚举子元素Green
alert(colorName);
colorName = Color[4];
alert(colorName);
```

那么将会输出Green和undefined。因为Green的值是 2，而没有一个枚举定义的值是 4，所以返回undefined。


#### 3.1.2 任意类型 any
和 JavaScript 中变量的默认类型一样，指代是动态的，能够赋予任意类型。例如：
```
var notSure: any = 4;
notSure = "maybe a string instead";
notSure = false;  // 定义为boolen型
```

定义为any后，将失去语法感知的功能，就相当于写JavaScript 一样。值得一提的是，any可以配合数组来使用，代码如下:
```
var list: any[] = [1, true, "free"];
list[1] = 100; //更改list[1]的值
```
请注意，不要滥用 any，如果任何值都指定为 any 类型，那么 TypeScript 将失去它的意义。失去了type的script将是没有意义的。

#### 3.3.3 类型void
> void 和 any 相反，any 是表示任意类型，而 void 是表示没有任意类型，就是什么类型都不是，这在我们定义函数，函数没有返回值时会用到
```
const consoleText = (text: string): void => {
  console.log(text);
};
```
> void 类型的变量只能赋值为 undefined 和 null，其他类型不能赋值给 void 类型的变量。

#### 3.3.4 never类型
never 类型指那些永不存在的值的类型，它是那些总会抛出异常或根本不会有返回值的函数表达式的返回值类型，当变量被永不为真的类型保护所约束时，该变量也是 never 类型。

这个类型比较难理解，我们先来看几个例子：
```
const errorFunc = (message: string): never => {
  throw new Error(message);
};
```
这个 errorFunc 函数总是会抛出异常，所以它的返回值类型是 never，用来表明它的返回值是永不存在的。
```
const infiniteFunc = (): never => {
  while (true) {}
};
```
### 3.2 函数的定义与调用
> 在TypeScript中定义函数的语法为：
```
function function_name(arg:number,arg1:number,....):return_type{
  code 函数要执行的代码;
  return data;
}
```
其中 function 为声明函数的关键字，function_name 为自定义函数的名字，arg为参数列表，_returntype为该函数的返回值类型，code为函数被调用时要执行的代码，使用return关键字返回数据，data为要返回的数据，要使用“{}”括起来。函数的调用就很简单了，如下代码：
```
function add(x: number, y: number): number {  //定义返回值为number类型的函数
    return x+y;
}
add(5,6); //调用函数
```

**匿名函数：**
匿名函数是没有名称只有主体的函数，不需要指定返回类型，它的返回值类型是从函数主体内的 return 语句推断的。如下代码：
```
var myAdd = function(x:number, y:number) { //定义匿名函数
  return x+y;
  };
myAdd(3,4); //调用匿名函数
```
**可选与默认参数**
可选参数：在参数名后面，冒号前面添加一个问号，则表明该参数是可选的。如下代码：
```
function buildName(firstName: string, lastName?: string) { //lastName为可选参数
  if (lastName)
      return firstName + " " + lastName;
  else
      return firstName;
}
var result1 = buildName("Bob");  //正确调用 Bob
var result2 = buildName("Bob", "Adams"); //正确调用 Bob Adams
```
默认参数：在参数名后直接给定一个值，如果这个值没有被传入，那么将会被赋值为默认值。如下代码：
```
function buildName(firstName: string, lastName = "Smith") {
  return firstName + " " + lastName;
}

var result1 = buildName("Bob");  //没有传入第二个参数，则被赋值为默认的smith,结果为:Bob Smith
var result2 = buildName("Bob", "Adams");  //结果为:Bob Adams
```
>注：可选参数和默认参数必须在参数列表的最后。

### 3.3 TS的类
#### 3.3.1 类的结构及声明
JavaScript语言基于函数和原型链继承机制的方式构建可重用的组件。这对于面向对象编程来说显得比较笨拙。

在下一代的JavaScript标准将为我们提供基于class base的面向对象的设计方式。但在TypeScript中可以使用这种方式，它将编译为目前大多数浏览器能允许的普通JavaScript代码.

所以我们不用在等下一代Javascript标准的到来了。

类是面向对象编程的核心基础，是属性和方法的集合，类不能真接编写程序时引用，必须实例化后才能使用。

> 创建一个TypeScript类时，必须使用关键字class进行声明，该关键字后紧跟类的名称，之后用大括号将类体进行封装，类的基本声明格式如下。
```
class 类名{
    //类体
}
```
创建完成类的基本结构后就可以编写类体。类体中主要包括属性和方法的声明及定义，当然也可能在类体中只定义属性或只定义方法，甚至类体内可以不定义任何属性。完整的类的定义格式如下。
```
class 类名{
  name:string;  //定义类的属性
  fun(){ //定义类的方法
           //定义该方法所要实现的功能
  }
}
```
 为什么可以不定义任何属性？
 类可以被继承，它的方法和属性可以在子类中被继承
 未定义任何方法的空类可以作为泛型类
 综上未定义任何方法的空类其名称具有价值
**构造函数**
```
class student{  //定义student类
  name:string;  //定义类的属性
  constructor(myname:string){ //定义构造函数
      this.name=myname;
  }
  study(){ //定义类的方法
           //定义该方法所要实现的功能
  }
}
```
用这种方式定义出来的类，感觉在写C#、Java或C++的程序，没错，TS就是面向对象的。

#### 3.3.2 类的实例化
> 一般情况下，创建一个类后并不能直接的对属性和方法进行引用，必须对类进行实例化，即创建一个对象。TypeScript中用new 关键字创建对象。实例化后通过“.”来访问属性和方法。实例代码如下：
```
class student{  //定义student类
  name:string;  //定义类的属性
  constructor(myname:string){ //定义带参数的构造函数
      this.name=myname;
  }
   study(){ //定义类的方法
      document.write("<h1> My name is "+this.name+".</h1>");
  }
   write():string{
           return "write name:"+this.name;
  }
}
```
**类的使用**
```
var s1=new student("Jim");
document.write("<h1>"+s1.name+"</h1>"); //获取name属性
s1.study();   // 调用study方法  
document.write("<h1>"+s1.write()+"</h1>");
```
### 3.4 TS的模块
我们先举个例子，比如数据验证，我们需要验证用户数字的内容是否是数字或者字母时，需要使用正则表达式。
```
var lettersRegexp = / ^ [A-Za-z]+$/;

var numberRegexp = / ^ [0-9]+$/;
```
数据验证可改善用户体验防止输入错误的信息，在学了前面的知识，我们很可能会写出以下代码：
```
// 验证的封装
interface StringValidator {  //定义验证接口
  isAcceptable(s: string): boolean;
}

var lettersRegexp = /^[A-Za-z]+$/;
var numberRegexp = /^[0-9]+$/;

class LettersOnlyValidator implements StringValidator {　//实现接口
  isAcceptable(s: string) {
    return lettersRegexp.test(s);
  }
}

class ZipCodeValidator implements StringValidator {   //实现接口
  isAcceptable(s: string) {
    return s.length === 5 && numberRegexp.test(s);
  }
}

// 验证的过程
var strings = ['Hello', '98052', '101'];
var validators: { [s: string]: StringValidator; } = {};
validators['ZIP code'] = new ZipCodeValidator();  //实例化类
validators['Letters only'] = new LettersOnlyValidator(); //实例化类
for(var i=0;i&ltstrings.length;i++){
    for (var name in validators) {
       document.write('"' + strings[i] + '" ' + (validators[name].isAcceptable(strings[i]) ? ' matches ' : ' does not match ') + name+"<br>"); //调用类的方法
    }
}
```

 那么这段代码最大的问题是什么呢？
 一个是没法复用，验证的封装interface StringValidator LettersOnlyValidator ZipCodeValidator 和验证的过程即 下面的 方法 在同一个文件，验证的封装已经是可以复用的。
 另一个是接口和两个实现的类都直接挂接在全局变量上，假如数量一多的话，将会影响整个全局变量，如果把类的内部类和类的内部方法分离开，就会提高模块化，强化面向对象特征。
 而TypeScritp中模块的出现给我们解决了这一问题。
 使用 module 关键字来定义模块，并在末尾加花括号即可用；
 用export 关键字使接口、类等成员对模块外可见。
 ```
module Validation {   //定义模块
  export interface StringValidator {  //声明接口对外部可以使用
    isAcceptable(s: string): boolean;
  }

  var lettersRegexp = /^[A-Za-z]+$/;
  var numberRegexp = /^[0-9]+$/;

  export class LettersOnlyValidator implements StringValidator {  //声明类对外部可用
    isAcceptable(s: string) {
      return lettersRegexp.test(s);
    }
  }

  export class ZipCodeValidator implements StringValidator {
    isAcceptable(s: string) {
      return s.length === 5 && numberRegexp.test(s);
    }
  }
}
```
#### 3.4.1 模块内容的调用
在前面一节中我学习了模块的声明，而在模块声明完成以后，我们就可以调用这个模块了，调用模块中的接口、类、方法等。调用方法简单，就是用模块名后面跟一个点来调用类、接口、方法等。如下代码：
```
var strings = ['Hello', '98052', '101'];
var validators: { [s: string]: Validation.StringValidator; } = {};
validators['ZIP code'] = new Validation.ZipCodeValidator();  //使用模块中的类
validators['Letters only'] = new Validation.LettersOnlyValidator();
// 显示匹配结果
for(var i=0;i&ltstrings.length;i++){
  for (var name in validators) {
     document.write('"' + strings[i] + '" ' + (validators[name].isAcceptable(strings[i]) ? ' matches ' : ' does not match ') + name+"<br>"); // 使用方法
    }
}
```
#### 3.4.2 分隔模块到多个文件
随着我们项目的扩展，我们的代码总不可能只写在一个文件里。为了更好地维护项目，我们会将特定功能放到一个文件里，然后加载多个文件实现我们想需要的功能。现在我们先将上面的代码分割到多个文件里。

文件一 Validation.ts
```
module Validation {
  export interface StringValidator {
      isAcceptable(s: string): boolean;
  }
}
```
文件二 LettersOnlyValidator.ts
```
/// <reference path="Validation.ts" />
module Validation {
  var lettersRegexp = /^[A-Za-z]+$/;
  export class LettersOnlyValidator implements StringValidator {
      isAcceptable(s: string) {
        return lettersRegexp.test(s);
      }
  }
}
```
文件三 ZipCodeValidator.ts
```
/// <reference path="Validation.ts" />
module Validation {
  var numberRegexp = /^[0-9]+$/;
  export class ZipCodeValidator implements StringValidator {
    isAcceptable(s: string) {
      return s.length === 5 && numberRegexp.test(s);
    }
  }
}
```
文件四 Test.ts
```
/// <reference path="Validation.ts" />
/// <reference path="LettersOnlyValidator.ts" />
/// <reference path="ZipCodeValidator.ts" />

var strings = ['Hello', '98052', '101'];
var validators: { [s: string]: Validation.StringValidator; } = {};
validators['ZIP code'] = new Validation.ZipCodeValidator();
validators['Letters only'] = new Validation.LettersOnlyValidator();
for(var i=0;i&ltstrings.length;i++){
  for (var name in validators) {
     document.write('"' + strings[i] + '" ' + (validators[name].isAcceptable(strings[i]) ? ' matches ' : ' does not match ') + name+"<br>"); //调用类的方法
    }
}
```
在项目中新建好以上四个文件，然后我们编译项目，如果我们代码编写没错的话，是能够编译通过的。

我们可以见到后面三个文件开头有类似于 C# 的文档注释，

/// < reference path=“Validation.ts” />
/// < reference path=“LettersOnlyValidator.ts” />
/// < reference path=“ZipCodeValidator.ts” />

这是告诉 TypeScript 编译器该文件依赖于哪些文件，假如依赖的文件不存在的话，编译就会不通过。当然我们不写也是可以的，只不过编译器在编译时不会帮我们检查，一般来说，还是建议写上。

#### 3.4.3 TS的编译
我们知道.js的文件可以直接在浏览器中运行的，而.ts或者.tsx却不行，所以我们在运行TS项目时需要编译成浏览器引擎可以识别的JS语言。同时为了提高编译速度，我们可以将稳定的module提前编译成js文件放到工程中，这样下次编译就会直接跳过该nodule的编译。在引用编译生成的 JavaScript 文件时，我们需要注意好顺序。以上面的代码为例，我们在 Html 代码中这么引用。
```
<script src="Validation.js" type="text/javascript"/>
<script src="LettersOnlyValidator.js" type="text/javascript"/>
<script src="ZipCodeValidator.js" type="text/javascript"/>
<script src="Test.js" type="text/javascript"/>
```