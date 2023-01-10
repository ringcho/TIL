# 조건문

- 주어진 조건에 따라 다른 실행

## if-else

```java
if(조건1){
    수행1;
}
else if(조건2){
    수행2;
}
else {
    수행3;
}
```

## switch-case

- `if-else`를 사용할 때 번거로운 부분을 가독성 좋게
- 비교 조건이 특정 값이나 문자열
- break 문을 사용하여 switch 블록을 빠져나옴

```java
switch (month){
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        day = 31;
        break;
    case 2:
        day = 28;
        break;
    case 4: case 6: case 9: case 11:
        day = 30;
        break;
    default:
        System.out.println("존재하지 않는 달입니다.");
        day = -1;

// After Java 14

public static void main(String[] args) {
    
    int month = 3;
    
    int day = switch (month) {
        case 1, 3, 5, 7, 8, 10,12 -> {
            31;
        }
        case 4,6,9,11 -> {
            30;
        }
        case 2 ->{
            28;
        }
        default->{
            // 수행문 이후 반환 값이 존재하면 yield
            System.out.println("존재하지 않는 달 입니다."); 
            yield 0;
        }
    };
    System.out.println(month + "월은 " + day + "일입니다.");
}
}
```

# 반복문

## while

- 조건이 true 이면 계속 수행

```java
while(조건){
    수행;
}
```

### do-while

- 조건과 상관없이 수행을 한 번 하고나서 조건을 체크

```java
do{
    수행1;
} while(조건){
    수행2;
}
```

## for

```java
for (초기화식; 조건식; 증감식){
    수행문;
}
int num;
for (num=1; num<=5; num++){
    System.out.println(num);
}
```