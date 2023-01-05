# 변수 선언

- 자료형 + 변수명

```java
int age;
String name;
```

- 숫자로 시작 X, 특수 문자는 $, _ 만 포함가능

# 자료형

|       | 정수형  | 문자형  | 실수형  |  논리형 |
|:-----:|:-------:|:------:|:------:|:-------:|
| 1byte |   byte  |    -   |    -   | boolean |
| 2byte |  short  |  char  |    -   |    -    |
| 4byte |   int   |    -   |  float |    -    |
| 8byte |   long  |    -   | double |    -    |

## 정수

- byte: 1바이트 단위의 자료형 동영상,음악 파일, 실행 파일의 자료를 처리할 때 사용
- short: 2바이트 단위의 자료형 C/C++ 언어와 호환 시 사용
- int
  - Java에서 사용하는 정수에 대한 기본 자료 형
  - 4바이트 단위의 자료형
  - 프로그램에서 사용하는 모든 숫자는 int
- long

```java
int age = 20;
long num = 1234568973321L;
```

## 진수

```java
int num = 10; //4byte = 32bit
int binaryNum = 0B1010;
int oNum = 012;
int xNum = 0XA;
```

## 실수

- 부동 소수점 방식으로 표현
- 지수부와 가수부로 표현
- 컴퓨터에서는 밑수를 2로 사용
- 정규화
  - 가수가 밑수보다 작은 한자리까지 가수로 표현 되는 것
  - 컴퓨터에서는 밑수가 2이므로 정규화를 하게 되면 가수부분의 첫 번째 자리 숫자는 항상 1
  - ex) $0.4*2^-1$ 는 정규화 하면 $1.6*2^-3$

```java
double dNum = 3.14;
float fNum = 3.14F;
```

### 부동 소수점의 오류

```java
double dNum = 1;
for(int i = 0; i<10000; i++){
    dnum = dnum + 0.1;
}
```

## 문자

- 문자도 정수로 표현 ex) ASKII, utf-8, utf-16
  - A -> 65 : encoding, 65->A : decoding
  - ASKII: 1byte
- Java에서는 UNICODE를 사용, utf-16 인코딩을 사용(모든 문자를 2바이트로 표시)

## 논리형

- true,false
- 1byte

## 지역 변수 자료형 없이 사용하기

- Local variable type inference
- 추론 가능한 변수에 대한 자료형을 선언하지 않음
- 한번 선언하여 추론 된 변수는 다른 타입의 값을 대입 할 수 없음
- 지역 변수만 사용 가능
- Java 10이상에 대해서만

```java
var i = 10;
var j = 10.0;
var str = "hello";
str = "test";
```

# 상수

- 변하지 않는 수
- $\pi$, 1년, 12개월 등
- `final` 예약어를 사용하여 선언
- 인식하기 쉽고, 여러 부분을 수정 할 필요가 없음

## literal 리터럴

- 프로그램에서 사용하는 숫자, 문자, 논리값을 뜻함
- literal은 constant pool에 있음
- 정수 리터럴은 int 실수는 double로 저장
- 정수가 범위를 넘어나는 경우 L, float으로 쓰고 싶으면 f 식별자를 마지막에 추가

## 형변환(type conversion)
- 서로 다른 자료형 간에 연산 수행을 위해 하나의 자료형으로 통일하는 것
- 묵시적 형 변환(explicit type conversion, 자동 형 변환)과 명시적 형 변환(implicit type conversion)이 있음
- 바이트 크기가 작은 자료형에서 큰 자료형으로 형 변환은 자동으로
- 덜 정밀한 자료에서 더 정밀한 자료형으로 형 변환은 자동

