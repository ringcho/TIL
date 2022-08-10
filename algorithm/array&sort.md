# Array & Sort

## Array

### Array의 필요성

    - 여러개의 변수가 필요할 때, 하나의 선언으로 여러개의 변수 지정 가능

### 2차원 Array에 대한 접근

    - 열 우선 순회
    - 행 우선 순회
    - 지그재그 순회
    - 델타를 이용한 2차원 배열 탐색

### 비트 연산자

    - &: 비트 단위로 and 연산
    - |: 비트 단위로 or 연산
    - <<: 피연산자의 비트 열을 왼쪽으로 이동
    > 1 100 10000 이므로 1<<3 은 1<<2보다 2배 더큼
    - >>: 피연산자의 비트 열을 오른쪽으로 이동
    > 2배 작아짐
    big endian & little endian

```python
# N 개의 항목을 가진 list에 대해 부분집합 생성
n = len(arr)
for i in range(1<<n): #모든 부분집합의 경우의 수에 대해
    for j in range(n):
        if i & (1<<j): # 같은 자리에 1이 있으면 
            print(arr[j], end=", ")
    print()
print()
```

## Sort

    - ascending, descending에 따라 Array를 재배열 하는 것

### Kinds of Sort

    - [Bubble Sort](#bubble-sort)
    - [Counting Sort](#counting-sort)
    - Selection Sort
    - Quick Sort
    - Insertion Sort
    - Merge Sort

### Bubble sort

    - 인접한 두개의 원소를 비교하며 자리를 교환하는 방식
    - O(n^2^)

```python
def BubbleSort(arr, N): #정렬할 list, 원소 수
    for i in range(N-1, 0, -1): # 정렬될 구간의 끝
        for j in range(i): # 비교할 원소 중 왼쪽 원소의 인덱스
            if a[j] > a[j+1]: #왼쪽 원소가 더 크면
                a[j], a[j+1] = a[j+1], a[j] # 오른쪽 원소와 교환

```

### Counting Sort

    - 항목들의 순서를 결정하기 위해 집합에 각 항목이 몇 개씩 있는지 세는 작업을 하여, 선형 시간에 정렬
    - 정수나 정수로 표현할 수 있는 자료에 대해서만 적용가능
    - O(n+k)

```python
def CountingSort(A, B, k)
# A[] 입력 배열 (1~k 의 정수)
# B[] 정렬된 배열
# C[] 카운트 배열
    C = [0] * (k+1) # 0부터 k까지의 정수를 나열

    for i in range(len(A)): #A의 원소들을 C에 개수만큼 나열
        C[A[i]] += 1 # A의 원소를  C에 하나씩 추가
    for i in range(len(C)):
        C[i] += C[i-1] #C를 ~0의 개수 ~1의 개수 ... ~k의 개수로 변경
    for i in range(len(B)-1, -1 ,-1): #큰수 부터 작은수로 정렬
        C[A[i]] -= 1 # C의 개수를 줄인 후
        B[C[A[i]]] = A[i] # B에 해당 원소를 배열
```
### Selection Sort

    - 주어진 리스트에서 최솟값을 찾는다
    - 제일 앞의 값과 교환한다.
    - 다시 찾는다.
    - 정렬되지 않은 리스트중 제일 앞의 값과 교환한다.
    - O(N^2^)

```python
def select(arr, k):
    for i in range(0, k):
        minIndex = i
        for j in range(i+1, len(arr)):
            if arr[minIndex] > arr[j]:
                minIndex = j
        arr[i], arr[minIndex] = arr[minIndex], arr[i]
    return arr[k-1]
```