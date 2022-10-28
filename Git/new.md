# GIT undoing

- working directory
- staging area
- repository

## GIT restore

- Working Directory에서 수정한 파일을 수정전으로
- 이미 git에 등록되어 있어야 함
- restore 이후에 다시 복구는 불가능
- `git restore {filename}`

## GIT stash

- `git stash` : 내가 수정한 작업물을 stash에 임시보관
- `git stash apply`: stash의 내용을 불러오기

## Staging Area 작업단계 되돌리기

- git add 를 잘못한 경우
- root-commit 이 없는 경우 = 한 번도 commit을 안한 경우: `git rm --cached {filename}`
- root-commit 이 있는 경우: `git restore --staged {filename}`
  - the contents are restored from HEAD

## Repository 작업단계 수정하기 

- `git commit --amend`: 상황별로 2가지 기능
  - hash 값을 수정하므로, 팀으로 사용하는 상황에서는 주의!, 팀 작업시 사용 지양새
  - Staging Area에 올라온 내용이 없다면, 직전의 커밋 메시지만 수정
  - Staging Area에 내용이 있다면, 직전 커밋을 덮어쓰기
  - 이전 commit을 완전히 고쳐서 새 커밋으로 변경, 이전 commit은 일어나지 않은 일이 되며 history에 남지 않음을 유의


# GIT reset & revert

- 특정 시간으로 되돌리기
- reset: 해당 커밋으로 돌아감 revert: 해당 커밋을 취소
- commit 유무의 차이

## GIT reset

- 프로젝트를 특정 버전으로 되돌림
- 되돌아 갔을 때, 해당 commit 이후의 commit은 모두 사라짐
- `git reset {option} {commit id}`:
 - option은 `soft, mixed, hard`
 - `--soft`: 해당 commit version으로 돌아가고, 이후의 file들은 Staging Area로 돌려놓음
 - `--mixed`: 해당 commit version으로 돌아가고, 이후의 file들은 Working Directory로 돌려놓음, option의 default value
 - `--hard`: 해당 commit version으로 돌아가고, 이후의 file들은 Working Directory에서 삭제
   - `git reflog`를 통해 해쉬를 알아내서 다시 돌아갈 수는 있음
 - commit id는 되돌아 가고 싶은 version의 commit id==hash

## GIT revert

- `git revert {commit id}`:commit id로 취소하고, 취소결과를 commit으로 남김

## GIT branch & merge

1. branch
- 독립 공간을 형성, master에 대해 안전, 하나의 작업은 하나의 브랜치에 나누어 진행, 체계적 개발

조회
 - `git branch`: local의 branch
 - `git branch -r`: 원격에 있는 branch 까지
생성
 - `git branch {branchname}`: 새로운 브랜치생성
 - `git branch {branchname} {commitid}`: 특정 커밋 기준으로 브랜치 생성
삭제
 - `git branch -d {branchname}`: merge된 branch만 삭제 // 기능 개발을 완료 했다면 해당 brach는 삭제
 - `git branch -D {branchname}`: 강제 삭제
이동
 - `git switch {branchname}`: 이동
 - `git switch -c {branchname}`: 생성 및 이동
 - `git switch -c {branchname} {commitid}`: 특정 커밋 기준으로 생성 및 이동

2. merge

 - `git merge {합칠브랜치이름}`: master가 선택된 상태에서 다른 branch를 부름
 - 1. Fast-Forward 
   - 빨리 감기 처럼 master에는 변화 없고 다른 브랜치의 변화만 있어서 해당 commit으로 HEAD가 이동하는 것 처럼 보임
 - 2. 3-way merge
   - 각 브랜치의 commit 2개를 공통 조상 하나를 사용하여 merge
 - 3. merge conflict
   - 같은 부분을 수정한 경우

# Git WorkFlow

1. 소유권이 있는 경우 -> Pull request
2. 소유권이 없는 경우 -> Fork Pull

## Pull Request

- repo가 자신의 소유 or collaborator
- master에 개발이 아닌, 기능별로 branch
- repo를 클론 기능별로 branch를 만들어 해당 branch에 push
- Pull Request를 통해 master에 merging
- merge가 완료된 master을 pull 받음
- 개발 완료된 개별 branch는 삭제

## Full Pork

- 원본 원격 저장소를 내 원격 저장소에 복제(Fork)
- 기능 완성 후 내 원격 저장소에 Push
- 이후 Pull Request를 통해 원본 원격 저장소에 반영될 수 있도록 요청
- fork 이후 upstream을 fetch


# Git flow
- master는 당장 출시가능한 
- develop: 다음 출시 버전을 개발
- feature: 기능을 개발
- release: 이번 출시 버전을 준비
- hotfix: 출시 버전에서 발생한 버그를 수정 