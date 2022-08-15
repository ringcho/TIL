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

### binray search

- 자료의 중앙에 있는 원소를 고른다.
- 중앙의 원소의 값과 찾고자 하는 목표의 값을 비교한다.
- 목표의 값이 중앙 원소의 값보다 작으면 왼쪽 반, 크다면 오른쪽 반에 대해서 새로 검색을 수행
- 찾을 때 까지 반복 

```python
def binary_search(arr, num):
    start = 0
    end = len(arr) - 1
    while start <= end:
        c = int((start+end)//2)
        if arr[c] == num:
            return arr[c]
            break
        elif arr[c] > num:
            end = c - 1
        elif arr[c] < num:
            start = c + 1

    return 0
```
