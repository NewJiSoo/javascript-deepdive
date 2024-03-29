// var 키워드로 선언한 전역 변수 value는 전역 객체의 프로퍼티다
var value = 1;

// const 키워드로 선언한 value는 전역 객체의 프로퍼티가 아니다

const obj = {
    value: 100,
    foo() {
        console.log('foo는: ', this); // {value:100, foo:f}
        console.log('foo 값은: ', this.value); // 100

        // 메서드 내에서 정의한 중첩 함수
        function bar() {
            console.log('bar는: ', this); // window
            console.log('bar 값은: ', this.value); // 1
        }
        // 메서드 내에서 정의한 중첩 함수도 일반 함수로 호출되면
        // 중첩 함수 내부의 this에는 전역 객체가 바인딩된다.
        bar();
    }
};
obj.foo();