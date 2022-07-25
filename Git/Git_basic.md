# cli

## 명령어

- `touch` : 파일만들기.확장자
- `mkdir` : 폴더만들기
- `ls`: 폴더 내부의 리스트
- `cd`: 위치변경
  - 절대경로 : `C:/Users/smc96/Desktop`
  - 상대경로 : `./`현재폴더 `../`상위폴더
- `start`: 파일열기
- `rm`: 파일삭제
  - -`rf` :폴더삭제
    
    # markdown
  - markdown cheet sheet
  - mattermost, notion, jupyter notebook, discord
  - 링크 삽입, 코드 삽입, 사진 삽입 등 다양한 기능 
  - 코드 리뷰 부탁할때 markdown 이용해서!
  - ```python
    print("Hello World!")
    import random
    random.sample()
    ```
    
    # git
  - 분산버전 관리 프로그램
  - 최종파일 + 변경내역
    
    ## README.md
- 설명,소프트웨어와 함께 배포
- 마크다운을 이용해 작성
- 프로젝트마다 하나씩
  
  ## git의 세가지 영역
- working dirctory : 내가 작업하고 있는 실제 디렉토리 (untracked): 버전관리대상이 아닌 file
- staging area : commit으로 남기고 싶은, 특정 버전으로 관리하고 싶은 파일이 있는곳
  - 필요한 이유가 뭘까? 개발 완료된 파일과 안된 파일 간의 서버의 업로드 및 관리가 편하니까!
- repository : commit 들이 저장되는 곳
  - 버전 관리하는 저장소
  - local/remote
    - local : 내 컴퓨터
    - remote : github,gitlab
  - working directory에서 staging area로 버전 관리 하고 싶은 파일들만 옮김 -> staging area 에서 repository로 저장

## 함수

- `git init` -> 로컬저장소 생성
- `git add` : working directory(이하 WD)의 파일을  staging area(이하 SA)로 옮김
  - `.` : 현재경로의 파일 모두를 옮김
  - `file name` : 해당 파일만 SA추가
- `git rm` : SA에서 제거
- `git status` : WD,SA,repo 확인가능 + modified file 확인 가능
  - git에 대한 대부분의 정보를 제공 하므로 헷갈리면 돌려보기
- `git commit` : SA-> repositoty
  - 뒤에 아무것도 없을 때 => vim 이라는 text editor로 이동
  - vim
    1. command mod 탈출 저장 `esc :wq`
    2. edit mod => `insert` 키를 통해 모드 변경가능 커밋 메시지 작성
  - committed의 원본이 수정되면 modifed로 변경 다시 add,commit 진행해야 repo 변경
- `git pull 레포별명 브랜치명`: remote repo에 있는 버전과 동일한 버전으로, 반드시 remote에 대한 정보 필요
- `git push 레포별명 브랜치명`: local repo의 최신 수정파일을 git에 업로드
- `git config --help` : remote sever와 연결
- `git log` : commit history
- `git diff A B`: A,B에는 hash를 입력해서 비교 
- `git remote add origin 주소` :
  - `remote -v` : check

## How to connect to git hub

* `git remote add 레포별명(보통은 origin) 레포주소`
* `git push 레포별명 브랜치명` : 업로드
* `git pull 레포별명 브랜치명` : 다운
* pull 수정 add commit push
* 집과 강의장 오갈 때 순서!
* git config --global user.name
* git config --global user.email 

git clone {remote_repo} 깃헙의 레포를 로컬로 복사, .git을 같이 복사=> remote주소도 같이 복사=> 따로 init, remote add 필요없음
