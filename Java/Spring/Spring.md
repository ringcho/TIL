# Spring 삼각형

## IoC/DI : 의존 관계 주입

### IoC : Inversion Of Control

스프링에서 일반적인 Java 객체를 new로 생성하지 않고 Spring Container에 모두 맡긴다.
개발자 -> 프레임워크로 제어의 객제 관리 관한이 옮겨갔으므로, "제어의 역전(IoC)"

### DI : Dependency Injection

DI의 장점

- 의존성으로부터 격리시켜 코드 테스트에 용이
- DI를 통하여, 불가능한 상황을 Mock와 같은 기술을 통하여, 안정적으로 테스트 가능
- 코드를 확장하거나 변경 할 때 영향을 최소화(추상화)
- 순환참조를 막을 수 있다.

## AOP: 관점 중심 프로그램

## PSA: 이식 가능한 추상화

## POJO: