# Data 구조

- method 활용 `data. method()` for example : `input.split()`
- python 에서 변수의 지정은 메모리 주소의 변수
  
  ```python
  word = 'ssafy'
  print(word)
  print(id(word)) # 메모리 주소 확인
  word = 'test'
  print(word)
  print(id(word)) # 메모리 주소 확인
  ```

## String type

- 조회/탐색 및 검증 method
  - `s.find(x)` : x의 첫 번째 위치 반환, **없으면 -1**
  - `s.index(x)` : x의 첫 번째 위치 반환, **없으면 오류**
  - `s.isalpha` : 알파벳 문자여부
    - 단순알파벳이 아닌 유니코드상 letter(한국어 포함)
  - `s.isupper()` : 대문자
  - `s.islower()` : 소문자
- 문자열 변경 method
  - `s.replace(old,new[,count])` : 바꿀대상 글자를 새로운 글자
  - `s.strip([chars])` : 공백이나 특정문자 제거
  - `s.split(sep=None,maxsplit=-1)`:
  - `'spliter'.join('string')`: spliter가 문자열 사이 (리스트 공백넣기등에 쓰임)
  - 위의 코드에서 보듯 문자열은 불변형 => 새로운 주소를 만듬
    
## List
    
    List method
- - `L.append(x)` : 마지막에 x를 추가
  - `L.insert(i,x)` : index i를 x로 대체
  - `L.remove(x)` : 가장 왼쪽 x를 제거, 없을경우 **ValueError**
  - `L.pop(i)` : index i 반환 후 제거
  - `L.reverse` : List 거꾸로
  - `L.count(x)` : x 개수 반환
  - L.sort() : 원본 리스트 정렬 , sorted(L) 원본+정렬된 복사본
    
## Operatior(연산자)
  - in, not in : 포함여부 True, False로 반환
    
## Set
    
  ### Set method
  - s.copy():얕은 복사본을 반환
  - s.add(x):항목x가 셋 s에 없다면 추가
  - s.update(*others):여러 값을 추가
  - s.pop(): 랜덤항목 반환 후, 해당항목 제거
  - s.remove(x): 항목 x를 set s에서 삭제 항목이 존재하지 않을 경우 , KeyError
    
## Dictionary
- key는 변경불가
  
  ### Dictionary method
  - d.keys()
  - d.values()
  - d.items()
  - d.get(key[,default]):없으면 None, default 값이 있으면 default 반환 + key 값 있으면 value 반환
  - d['key']:값이없으면 KeyError
  - d.pop(key[,default]):있으면 제거하고 해당 값 반환, 없으면 default, default 없으면 keyError

## 얕은 복사와 깊은복사

  ### 할당(assignment)

  #### 대입연산자

    - 대입연산자를 통한 복사는 해당 객체에 대한 객체 참조를 복사
  
  ```python
  original_list =[1,2,3]
  copy_list = original_list
  print(copy_list,original_list)
  
  
  copy_list[0]='hello'
  print(original_list, copy_list)
  ```

  #### 얕은 복사 (shallow copy)
  - slice 연산자를 통해 해결
 ```python
original_list =[1,2,3]
copy_list = original_list[:]
print(copy_list,original_list)
copy_list[0]='hello'
print(original_list, copy_list)
 ```
- 주의사항 2차원의 경우 불가능
```python
import copy
 a = [1,2,['a','b']]
 b = a[:]
 b = copy.copy(a)
 print(a,b)
 b[2][0] = 0
 print(a,b)
 ```
 

  #### 깊은 복사 (deepcopy)
 ```python
    import copy
    a = [1,2,['a','b']]
    b = copy.deepcopy(a)
    print(a,b)
    b[2][0] = 0
    print(a,b)
 ```