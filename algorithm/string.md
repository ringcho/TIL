# String

- 문자열
- 패턴매칭
- 문자열 암호화
- 문자열 압축

## string in python

- 시퀀스 => 인덱싱, 슬라이싱 사용가능
- immutable

## 패턴매칭

-  Brute Force
-  카프-라빈
-  KMP
-  보이어-무어

### Brute Force

- 완전탐색
- 처음부터 끝까지 차례대로 순회하며 모든 문자들을 일일이 비교
- 시간복잡도 O(MN)

```python
p = 'is'
t = 'This is a book~!'
M = len(p)
N = len(t)
def bruteforce(p,t):
    i = 0 #t의 인덱스
    j = 0 #p의 인덱스
    while j < M and i < N:
        if t[i] != p[j]: #다른 경우
            i = i-j
            j = -1
        i = i + 1 # 일단 증가
        j = j + 1
    if j == M: return i-M # 검색성공
    else : return -1 #검색실패
```

### KMP

- 불일치가 발생한 부분에 대해 다시 비교하지 않고 매칭을 수행
- 추가적인 배열이 필요함(어느 부분까지 일치, 불일치를 판별하기 위함)
- pre process 중요함 `'abcdabcef' => [-1,0,0,0,0,1,2,3,0]`

```python
def pre_process(pattern):
    # 전처리를 위한 테이블 (LPS table longest prefix suffix)
    lps = [0] * len(pattern)
    j = 0  # lps를 만들기 위한 prefix index
    for i in range(1, len(pattern)): # index 0는 확인할 필요 없음

        # prefix index 위치에 있는 문자와 비교
        if pattern[i] == pattern[j]:  # 제일 앞과 i번째 앞의 위치와 비교
            lps[i] = j + 1
            j = j + 1  # j는 중복된 글자의 자리
        else:
            j = 0
            # 0으로 이동한 다음 prefix idx비교 를 한번 더 해야함 ex)abaab [0,0,1,1,2]
            if pattern[i] == pattern[j]:
                lps[i] = j + 1
                j = j + 1
    return lps

def kmp(text, pattern):
    lps = pre_process(pattern)  # 전처리로 lps 생성
    i = 0
    j = 0
    while i < len(text):  # i는 text j는 pattern
        if pattern[j] == text[i]:  # 같은 문자라면 다음꺼 비교
            i += 1
            j += 1
        else:
            if j != 0:
                j = lps[j - 1]
            else:
                i += 1

        if j == len(pattern):
            return i - j

    return -1
```
