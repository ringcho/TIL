# Python basic
## OOP(Object Oriented Programming)
## code style guide
- [PEP8](https://peps.python.org/pep-0008/)
- [Google Style guide](https://google.github.io/styleguide/pyguide.html)
> Space sensitve (four spacebar)
## Datatype
### Boolean Type
- True/False
- not>and>or
### Numeric Typle
- Int/Float/Complex
- immutable
- in Float type : floating point
```python
print(3.2-3.1) != print(1.2-1.1)
```
> cuz, computer computing with using binary
> need to use epsilon or math modulw
### String Type
- immutable
- Escape sequence ![Escape sequence](../img/escape_sequence.png)
- String Interpolation
```python
name = 'Kim'
score = 4.5
# %-floating
print('Hello, %s' % name) # Hello, Kime
print('내 성적은 %d' % score) # 내 성적은 4
print('내 성적은 %f' % score) # 내 성적은 4.500000
# str.formoat()
print('Hello, {}! 성적은 {}' .format(name,score)) #Hello, Kim! 성적은 4.5
# f-strings : python 3.6 +
print(f'Hello, {name}! 성적은 {score}') #Hello, Kim! 성적은 4.5
```


## f string/ String Interpolation(문자열을 변수를 활용하여 만드는 법)
``` python
name = "kim'
score = 4.5
print(f'Hello, {name}! 성적은 {score}')
```
## datetime
``` python
import datetime
today - datetime.datetime.now()
print(today)
print(f'오늘은 {today:%y}년 {today:m}월 {today:%d일}')
pi=3.141592
print(f'원주율을 {pi:.3}, 반지름이 2일 때 원의 넓이는 {pi*2*2})
```