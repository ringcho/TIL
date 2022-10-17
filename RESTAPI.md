## HTTP

- HyperText Transfer Protocol
- HTML 문서와 같은 리소스들을 가져올 수 있도록 하는 프로토콜
- 웹 상에서 컨텐츠롤 전송하기 위한 약속
- 웹에서 이루어지는 모든 데이터 교환의 기초가 됨
- '클라이언트-서버 프로토콜'이라고도 부름
- 클라이언트와 서버는 다음과 같은 개별적인 메시지 교환에 의해 통신
    * request : 클라이언트에 의해 전송되는 메시지
    * response : 서버에서 응답으로 전송되는 메시지

### Stateless

- 동일한 connection에서 연속적으로 수행되는 두 요청 사이 링크가 없음
- 즉, 응답을 마치고 연결을 끊는 순간 클라이언트와 서버 간의 통신이 끝나면 상태 정보가 유지되지 않음
- cookie 와 session을 사용해 서버 상태를 요청과 연결하도록 함

### HTTP Request Method

- HTTP verbs라고도 불림
- 리소스에 대한 행위를 정의
- GET, POST, PUT, DELETE

|GET|POST|PUT|DELETE|
|---|----|---|------|
|서버에 리소스의 표현을 요청,GET을 사용하는 요청은 검색만|데이터를 지정된 리소스에 제출, 서버의 상태를 변경| 요청한 주소의 리소스를 수정|지정된 리소스를 삭제|

### HTTP response status codes

- 특정 HTTP 요청이 성공적으로 완료했는지 여부
    - Informational responses(1__)
    - Sucessful responses(2__)
    - Redirection messages(3__)
    - Client error responses(4__)
    - Server error responses(5__)