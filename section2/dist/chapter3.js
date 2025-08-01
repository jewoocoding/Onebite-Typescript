// object
// 객체 리터럴 타입
// 구조를 기준으로 타입을 지정 : 구조적 타입 시스템(Property based type system)
// 이름을 기준을 타입을 지정 : 명목적 타입 시스템(C, JAVA...)
let user = {
    id: 1,
    name: "이정환",
};
let dog = {
    name: "돌돌이",
    color: "brown",
};
user.id;
let config = {
    apiKey: "My Api Key",
};
export {};
// config.apiKey = 'hacked';
