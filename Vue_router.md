# Vue Router

## Routing

* 네트워크에서 경로를 선택하는 프로세스

### routing on web service

* 유저가 방문한 URL에 대해 적절한 결과를 응답

### Routing in SSR

* Server가 모든 routing 통제
* URL로 요청이 들어오면 응답으로 완성된 HTML 제공
* Routing(URL)에 대한 결정권을 서버가 가짐

### Routing in SPA/CSR

* 서버는 하나의 HTML만을 제공(index.html)
* 이후 모든 동작은 하나의 HTML 문서 위에서 JS코드를 활용
* DOM을 그리는데 필요한 데이터는 AJAX요청을 통해 데이터를 처리
* 하나의 URL만을 가짐

#### 왜 SPA/CSR에서 Routing이 필요한가?

* 유저의 사용성 관점 때문에 필요
* Routing이 없다면
  - URL을 통한 페이지의 변화를 감지할 수 없음
  - 페이지가 무엇을 Rendering 중인지 알 수 없음
  - 새로고침 시 최조의 페이지로 돌아감
  - 링크 공유시 하나의 페이지만 공유 가능
  - 뒤로가지 사용 불가능

## Vue Router

* Vue에서 제공하는 공식 Router
* SPA 상에서 Routing을 쉽게 구현할 수 있도록 도와주는 도구
* 라우트(routes)에 컴포넌트를 매핑한 후, 어떤 URL에서 렌더링 할 것 인지에 대한 정보 제공
* SPA를 MPA처럼 URL을 이동하며 사용 가능

### Vue Router with Vue CLI

```bash
$ vue create vue-router-app   // make Vue project with Vue CLI 

$ cd vue-router-app           // move to dir

$ vue add router              // add Vue Router in Vue CLI

? Use history mode ~~~  (y/n)
```

* History Mode

  - Browser의 History API 사용
  - 새로고침 없이 URL 이동 기록을 남김
  - ex) `https://localhost:8080/index`

  - 만약 history mode를 사용하지 않는다면 => hash mode로 설정 (`#`을 통해 URL을 구분)
  - ex) `https://localhost:8080#index`