# Vue CLI

## 프로젝트 구조

![vue_cli_project_structure](./img/vue_cli_structure.png)

`vue create q1`을 실행했을 때

### node_modules

* node.js환경의 의존성 모듈
* python의 venv와 같은 의미 .gitignore에 추가

#### node_modules-babel

* JS compiler
* ES6+ 코드를 구버전으로 번역/변화 해주는 도구

#### node_modules-Webpack

* static module bundler
* 모듈간의 의존성 문제를 해결하기 위한 도구
* 프로젝트에 필요한 모든 모듈을 매핑하고 내부적으로 종속성 그래프를 빌드

### package.json

* 프로젝트의 종속성 목록과 지원되는 브라우저에 대한 구성 옵션

### package-lock.json

* python의 `requirements.txt와 유사`
* node_modules에 설치되는 모듈과 관련된 모든 의존성을 설정 및 관리
* 협업 및 배포 환경에서 정확히 동일한 종속성을 설치하도록 보장
* 사용할 패키지의 버전을 고정
* 의존성 패캐지 충돌 방지

### public/index.html

* Vue 앱의 뼈대가 되는 html
* Vue 앱과 연결될 요소가 있음

```html
<!DOCTYPE html>
<html lang="">
    <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <link rel="icon" href="<%= BASE_URL %>favicon.ico">
    <title><%= htmlWebpackPlugin.options.title %></title>
  </head>
  <body>
      <noscript>
          <strong>We're sorry but <%= htmlWebpackPlugin.options.title %> doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>        
    </noscript>
    <div id="app"></div>
    <!-- built files will be auto injected -->
  </body>
</html>
```
### src

* `src/assets`: 정적 파일을 저장하는 dir
* `src/components`: 하위 components
* `src/App.vue`: root component, [public/index.html과 연결](#publicindexhtml)
* `src/main.js`: webpack이 빌드를 시작할 때, 가장 먼저 불러오는 entry point
* public/index.html과 src/App.vue를 연결시키는 작업이 이루어지는 곳

## Module

* 개발하는 app의 크기가 커지고 복잡해지면 파일 하나에 모든 기능을 담기 어려워짐
* 파일을 여러 개로 분리하여 관리를 하게 되고, 분리된 파일 각각이 모듈, `js`파일 하나가 하나의 모듈
* 기능 단위로 분리하며, 클래스 하나 혹은 특정한 목적을 가진 복수의 함수로 구성된 라이브러리 하나

## Bundler

* Module의 의존성 문제를 해결하기 위한 도구
* 모듈을 하나로 묶어주고, 묶인 파일은 하나로
* Bundling된 결과물은 개별 모듈의 실행 순서에 영향 받지 않고 동작
* Vue CLI는 Babel, Webpack에 대한 초기설정이 되어있음

## Component

* UI를 독립적이고 재사용 가능한 조각들로 나눈 것
* CS에서는 다시 사용할 수 있는 범용성을 위해 개발된 소프트웨어 구성 요소를 의미
* 컴포넌트는 유지보수를 쉽게 만들어 줄 뿐만 아니라 재사용성의 측면에서도 강력한 기능 제공

### SFC(Single File Component)

* `.vue` 파일 하나가 하나의 Vue instance이고, component
* Vue instance를 하나의 기능 단위로 작성

```Vue
<template>
  <div id="app">
    <h1>이곳은 App.vue입니다.</h1>
    <img alt="Vue logo" src="./assets/logo.png">
    <hr>
    <HelloWorld msg="이곳은 HelloWorld.vue입니다."/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
```
#### template

* HTML의 body tag
* 눈으로 보여지는 요소 작성
* 다른 컴포넌트를 HTML 요소처럼 추가 가능

#### script

* js 코드가 작성되는 곳
* component, data, methods 등 Vue instance를 구성하는 대부분의 정보

#### style

* CSS가 작성되며 컴포넌트의 스타일을 담당


### emit 

* component에 eventlistener `v-on == @`이 붙어 있으면, emit event로 생각 따라서, 실제 해당 component가 인식을 하게 하려면 `@click.native`와 같이 `.native`를 붙여주면 해결