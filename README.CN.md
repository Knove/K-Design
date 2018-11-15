<h1 align="center">K Design</h1>
<div align="center">

[React](http://facebook.github.io/react/) 组件设计 


</div>

[English](./README.md) | 简体中文

## Why use K-Design?

- 针对大型```复杂```应用的企业级React组件库.
- 最小的 ```体积```, 最少的 ```依赖包```,  ``` 所有 ```都是最少的.

## Installation

```sh
// with npm
npm install kdesign

// with yarn
yarn add kdesign
```

## Usage

这里有个让您快速上手的例子

```jsx
import { Button } from 'kdesign';

function App() {
  return (
    <Button tType="primary">
      Hello World
    </Button>
  );
}

ReactDOM.render(<App />, mountNode);
```


## Why not...
**[Antd](https://github.com/ant-design/ant-design/)**
- antd [package.json](https://github.com/ant-design/ant-design/blob/master/package.json) -> 依赖包非常的多....
- antd是个重量级组件语言库，功能丰富，但性能相对较低。
