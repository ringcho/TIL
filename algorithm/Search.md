# Search

    - 목적하는 탐색 키를 가진 항목을 찾는 것

## Kinds of search

    - 순차 검색(sequential search)
    - 이진 검색(binary search)
    - 해쉬(hash)

## 순차 검색(Sequential Search)

    - 자료를 순서대로 검색
    - 간단하고, 직관적
    - 배열, 연결 리스트 등 순차구조의 자료에서 유용
    - 구현이 쉽지만, O(n)의 복잡도

### 정렬되지 않은 자료에 대한 순차 검색

    - 첫 번째 원소부터 마지막 원소까지 비교
    - 동일한 것을 찾으면 인덱스 반환
    - 마지막에 이르러 검색 대상을 찾지 못하면 검색 실패

```
def sequentialSearch(a, n, key)
    i <- 0
    while i<n and a[i] !=key:
        i = i+1
    if i<n : return i
    else: return -1
```

### Binary Search

    - 자료의 가운데에 있는 항목의 키 값과 비교하여 다음 검색의 위치를 결정하고 검색을 계속 진행하는 방법
    - 자료가 정렬되어야만 이진 검색 가능
    - 중앙에 있는 원소를 고른다.
    - 목표 값과 비교한다.
    - 작다면 시작~ 중간값-1 사이에서 가운데
    - 크다면 중간값 ~ 끝 사이에서 가운데