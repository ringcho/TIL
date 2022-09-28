## DFS(depth first search)

- 비선형구조인 그래프의 모든 자료를 빠짐없이 검색하는 법

```
시작 정점 v를 결정하여 방문한다.
정점 v에 인접한 정점 중에서
    1. 방문하지 않은 정점 w가 있으면, 정점 v를 스택에 push하고 정점 w를 방문한다.
    2. 방문하지 않은 정점이 없으면, 탐색의 방향을 바꾸기 위해서 스택을 pop하여 받은 가장 마지막 방문정점을 v로 하여 다시 반복한다.
스택이 공백이 될 때까지 반복한다.
visited[], stack[] initialization
DFS(v)
    #시작점 v 방문
    vistied[v] == True
    while:
        if (v의 인접 node중 거치지 않은 node w가 있으면)
            push v
            v = w   # w에 방문
            vistied[w]
        else
            if 스택이 비어 있지 않으면
                v = pop(stack)
            else
                break
return
```

```python
'''
dfs 재귀
'''
visited= []    # 방문체그
adjlist = [[]] # 인접리스트
dfs(v):
    visited[v] = 1
    for w in adjlist[v]:
        if visited[w] == 0:
            dfs(w)

```

### Backtracking

- 해를 찾는 도중에 막히면 되돌아가서 다시 해를 찾아가는 기법
- optimization 문제와 decision 문제를 해결
- node의 promising(유망)을 확인 후, 해답의 가능성이 없으면 고려하지 않는다.(pruning 가지치기)

### Backtracking vs dfs

- 어떤 노드에서 출발하는 경로가 더이상 정답으로 향하지 않는다면, 경로를 따라가지 않음으로 시도의 횟수를 줄임(Prunning 가지치기)
- dfs는 모든 경로 탐색, backtracking은 불필요한 경로 차단
- backtracking 역시 최악의 경우에는 Exponential Time을 요한다.

```python
'''
powerset with backtracking
'''
def powerset(i, N):
    if i == N:
        for i in range(N):
            if bit[i]:
                print(A[i], end=' ')
        print()
    else:
        bit[i] = 1                      # A[i] 가 부분집합에 포함
        powerset(i+1, N)
        bit[i] = 0                      # A[i] 가 부분집합에 미포함
        powerset(i+1, N)
A = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
bit = [0] * 10
'''
permutation with backtracking
'''
def npr(i, N):
    if i == N:
        print(P)
    else:
        for j in range(i, N):    #P[i]에 들어갈 숫자 P[j]결정
            P[i], P[j] = P[j], P[i]
            npr(i+1, N)
            P[i], P[j] = P[j], P[i]

P = [1, 2, 3]
npr(0, 3)
```

## BFS(Breadth First Search)

- bfs는 탐색 시작점의 인접한 정점들을 먼저 모두 차례로 방문한 후에, 방문했던 정점을 시작점으로 하여 다시 인접한 정점들을 방문

```python
'''
pseudo code
'''
def BFS(v, G): #v: 탐색 지작점 G: 그래프
    visitied = [0]*len(G)
    Q = [v]
    while Q:
        v = Q.popleft()
        '''
        내가 원하는 일
        '''
        if v == nodeK:
            return 1
        for w in adjList[v]:
            if visited[w] == 0:
                q.append(w)
                visited[w] = visited[v] + 1
```