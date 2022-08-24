# Queue

- 뒤에서는 삽입, 앞에서는 삭제
- First in First out (FIFO)
- 삭제는 Front 삽입은 Rear
- `enQueue, deQueue` : 삽입, 삭제
- 네트워크, 버퍼 등에 활용

## Linear Queue

- 1-d array
- size of Queue == size of array
- front: idx of first element
- rear: idx of last element


### linear queue의 구현

- initial : front = rear = -1
- empty : front == rear
- full : rear == n-1 (n: size of array, n-1: last idx of array)

```python

def enqueue(item):
    '''
    enqueue(item)
    rear += 1
    rear에 해당하는 array의 idx에 item 해당
    '''
    global rear
    if isFull():
        print("Q is full")
    else:
        rear +=1
        Q[rear] = item

def dequeue():
    '''
    front += 1
    return Q[front]
    '''
    global front
    if isEmpty():
        print('Q is empty')
    else:
        front += 1
        return Q[front]

def isEmpty():
    return front == rear

def Full():
    return rear == len(Q) - 1
```

### linear Queue의 문제점

- 잘못된 포화상태 인식 : 배열의 앞부분에 활용할 수 있는 공간이 있을에도 포화상태로 인식 (rear == n-1)
- 이를 해결하기 위해 저장된 원소를 배열안에서 이동시키면, 큐의 효율성이 떨어짐

## circular queue

- index를 mod를 활용
- rear = (rear + 1) mod n
- front = (front + 1) mod n
- initial : front = rear = 0
- empty : front == rear
- full : (rear+1) mod n == front (n: size of array, n-1: last idx of array)

## Priority Queue

- FiFo가 아닌 우선순위가 높은 순서대로 나간다.