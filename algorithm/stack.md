# stack

- 스택에 저장된 자료는 선형구조
- Last in Firtst out
- 마지막에 삽입한 자료를 가장 먼저 꺼낸다
- 마지막 삽입된 원소의 위치를 top & stack pointer라고 부른다.

## 자료구조 & 연산

- 선형으로 저장 가능한 자료구조
- 마지막 삽입된 원소의 위치를 stack pointer or top이라 부른다.
- push, pop : 삽입 삭제
- isEmpty: 공백인지 아닌지 확인
- peek: stack pointer의 item을 반환

## 구현

- 1차원 배열을 이용하면 용이하지만 스택의 크기를 변경하기 어렵다.
- 동적 연결리스트를 사용하여 메모리를 효율적으로 사용가능하다.

```python
def push(item):
    top +=1
    stack[top] = item
def pop(item):
    top -=1
    return stack[top+1]
```

## 스택의 응용: function call

- 가장 마지막에 호출된 함수가 가장 먼저 실행을 완료하고 복귀하는 후입선출 구조

![functioncall](../img/funtion%20call.png)
