# Web
- 경험적, 시각적 요소가 중요, 다른 웹페이지를 뜯어보거나 많은 코딩을 통해 확인
## 웹사이트의 구성요소
- HTML : 구조 CSS : 표현 Javascript : 동작
## 웹 표준과 크로스 브라우징
- 브라우저마다 동작이 달라서 문제가 생김(파편화) => 해결책으로 웹 표준이 등장
- 어떤 브라우저든 웹페이지가 동일하게 보이도록(크로스 브라우징)
- WHATWG,W3C
- [CanIuse](https://caniuse.com)
# HTML
- Hyper Text Markup Language
- 웹페이지를 작성하기 위한 언어 .html
## Hyper Text(이론)
- Hyper link를 통해 user가 다른 문서로 즉시 접근할 수 있는 Text
## HTML 스타일 가이드
```html
<body>
    <h1> 웹문서 </h1>
    <ul>
        <li>HTML</li>
        <li>CSS</li>
    </ul>
</body>
```
## HTML 기본구조
- html : 문서의 최상위(root)요소
- head : 문서 메타데이터 요소
> `<title><meta><link><script><style>`
- 문서 제목, 인코딩, 스타일, 외부파일로딩
- 브라우저에 일반적으로 나타나지 않음
- body
### 요소 (element)
- html 요소는 시작태그와 종료 태그 그리고 태그 사이에 위치한 내용으로 구성
`<h1>contents</h1>`

