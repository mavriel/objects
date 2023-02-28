# UML 표기법

1. 접근제어자

   - public +
   - private -
   - protected #
   - packaged ~

2. 의존관계
   ```typescript
   class Screening {
     buyTicket(movie: Movie) {
       const baseFee = movie.getFee();
     }
   }
   ```
3. 연관관계
   ```typescript
   class Movie {
     private discountPolicy: DiscountPolicy;
   }
   ```

# 들어가며

- 이 책의 목적
  - 객체지향 패러다임이라는 용어를 사용할 때 어느 정도 유사한 그림을 머릿속에 그릴 수 있는 기반 제공
  - 객체지향 프로그래밍을 하는 개발자들이 동일한 규칙과 표준에 따라 프로그램을 작성할 수 있게 만듦

# 1. 객체, 설계
