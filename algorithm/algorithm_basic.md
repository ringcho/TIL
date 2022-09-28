# APS

## 시간복잡도(Time Complexity)

    - 실제 걸리는 시간을 측정
    - 실행되는 명령뭉의 개수를 계산

``` python
# sum의 방법
def calsum(n): # 2n+1
    sum = 0
    for i in range(1,n+1):
        sum += i
    return sum
def calsum2(n): # 3번
    return n*(n+1)//2
```

### big-O Notation

    - 시간 복잡도 함수 중에서 가장 큰 영향력을 주는 n에 대한 항만을 표시
    - 계수는 생략
    ![bigo](../img/bigonotation.png)

## 알고리즘의 우선순위

    1. 정확성 : 얼마나 정확하게 동작
    2. 작업량 : 얼마나 적은 연산으로 원하는 결과
    3. 메모리 사용량 : 얼마나 적은 메모리
    4. 단순성 : 얼마나 단순
    5. 최적성 : 더 이상 개선할 여지가 없는가

## 완전검색 + Brute Force

- 문제의 해법으로 생각할 수 있는 모든 경우의 수를 나열해보고 확인
- 모든 경우의 수를 테스트한 후, 최종 해법 도출
- 일반적으로 경우의 수가 상대적으로 작을 때
- 우선 완전 검색으로 정답을 찾고, 다른 알고리즘을 통해 성능 개선

## Greedy algorithm

- 최적해를 구하는 데 사용되는 근시안적 방법
- 순간 마다 최적이라고 생각되는 것을 선택
- 일반적으로, 머릿속에 떠오르는 생각을 검증없이 구현하면 greedy

## Recursion 재귀

- 자기 자신을 호출하여 순환 수행

```python
def factorial(n):
    if n == 1:
        return 1
    else:
        return n*factorial(n-1)
def fibo(n):
    if n < 2:
        return n
    else:
        return fibo(n-1) + fibo(n-2)
```

- 해당 방식과 같은 피보나치 수열의 호출은 O(2^n^)의 시간 복잡도를 가진다.

## Memoization

- 프로그램을 실행할 때 이전에 계산한 값을 메모리에 저장해서 매번 다시 계산하지 않도록 하여 전체적인 실행속도를 빠르게 함
- dynamic programming의 핵심
- Memoization을 사용하면 실행시간을 :theta:(n)으로 줄일 수 있다.

```python
def fibo(n):
    memo = [0,1]
    if n >= 2:
        memo.append(fibo(n-1)+fibo(n-2))
    return memo[n]
```

## DP(Dynamic Programming)

- Greedy algorithm 과 같이 최적화 문제를 해결
- 입력크기 작은것 -> 큰 크기의 부분 문제로 해결

```python
# fibonachi with dp
def fibo(n):
    f = [0,1]

    for i in range(2, n+1):
        f.append(f[i-1] + f[i-2])
    return f
```