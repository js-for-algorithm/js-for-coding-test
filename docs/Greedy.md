# 그리디 (Greedy)

> :bulb: 당장 좋은 것만 선택하는 알고리즘

greedy라는 이름답게 탐욕적으로 **지금 당장 좋은 것만 고르는 방법**이다.

⇒ 단순히 현재 상황에서 가장 좋아 보이는 것만을 선택해도 풀 수 있는지 파악이 필요하다.

Hint) 문제에서 '가장 큰 순서대로', '가장 작은 순서대로' 같은 기준을 제시함

<br/>

## 📝 그리디를 사용하는 이유

1. 탐욕법을 사용해도 항상 최적해를 구할 수 있는 문제라면 탐욕법이 동적 계획법보다 훨씬 빠르다
2. 시간/공간 제약으로 인하여 다른 방법으로 최적해를 찾기 어렵다면 최적해 대신 근사해를 찾는 것으로 타협할 수 있다. 탐욕법은 근사해를 구하는 용도로 유용하게 쓰인다.

<br/>


## 📝 그리디 알고리즘의 정당성

> 그리디 알고리즘에서는 최소한의 아이디어를 떠올리고 이것이 정당한지 검토할 수 있어야 한다.

대부분의 문제에서 그리디를 사용했을때 최적의 해를 찾을 수 없을 가능성이 많다.

하지만 '가장 큰 순서대로' 주는 등의 조건이 붙는다면 탐욕적으로 접근했을때 답을 찾을 확률이 높다.

<br/>



###  정당성의 증명

탐욕적 알고리즘의 정당성 증명은 일정한 패턴을 가진다. 탐욕법이 항상 최적해를 찾을 수 있다는 것을 두 가지 속성을 증명하여 보일 수 있다.


**1. 탐욕적 선택 속성 (greedy choice property)**

- 탐욕적으로만 선택하더라도 최적해를 구할 수 있음.
- 탐욕적으로 해서 손해볼일은 없다

**2. 최적 부분 구조 (optimal substructure)**

- 부분 문제의 최적해에서 전체 문제의 최적해를 만들 수 있음을 보여야 함.
- 첫번째 선택을 하고 나서 남는 부분 문제는 최적이 아닌 방법으로 풀어야 하는 경우는 최적부분구조를 만족하지 않는다.
- 항상 최적의 선택만을 내려서 전체 문제의 최적해를 얻을 수 있어야 '최적부분구조'를 만족함!


<br/>

### 정당성 증명 예

- a) 화폐 단위가 500, 100, 50, 10원인 경우 800원을 거슬러주는 문제
- b) 화폐 단위가 500, 400, 100원인 경우 800원을 거슬러주는 문제

a)의 경우는 그리디로 풀 수 있다. *큰 단위의 동전이 항상 작은 단위의 배수이므로,작은 단위의 동전들을 종합해 다른 해가 나올 수 없기 때문이다.* 즉 작은 단위 동전을 여러개 모아봤자 큰 단위 동전 하나가 나오니 큰 동전부터 뽑는 것이 낫다.

b)의 경우는 그리디로 풀 수 없다. 그리디로 큰 단위동전부터 뽑으면 500+100+100+100이 나오나, 사실 최적의 해는 400+400이다. 이런 경우는 DP로 풀 수 있다.

<br/>

## 탐욕적 알고리즘 레시피

1. 문제의 답을 만드는 과정을 여러 조각으로 나눈다.
2. 각 조각마다 어떤 우선순위로 선택을 내려야 할지 결정한다
3. 그리디 정당성을 증명한다
    - 탐욕적 선택 속성: 항상 각 단계에서 우리가 선택한 답을 포함하는 최적해가 존재함. 귀류법 이용.
    - 최적 부분 구조: 각 단계에서 항상 최적의 선택만을 했을때 전체 최적해를 구할 수 있는가

<br/>

## 📝 그리디 대표 문제

- 활동 선택 문제 (activity selection problem)
    - 회의실 배정 <https://www.acmicpc.net/problem/1931>
    - 강의실 배정 <https://www.acmicpc.net/problem/11000>

<br/>


## 참고글

- 동빈북
- 종만북