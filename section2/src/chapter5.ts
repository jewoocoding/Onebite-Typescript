// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
// 자동으로 숫자 할당
// javascript의 객체로 변환됨
enum Role {
    ADMIN = 10, // 숫자형 enum
    USER,
    GUEST,
}

enum Language {
    korean  = 'ko',
    english = 'en'
}

const user1 = {
    name : "이정환",
    role : Role.ADMIN, // 0 <- 관리자
    Language: Language.korean,
}
const user2 = {
    name : "홍길동",
    role : Role.USER, // 1 <- 일반유저
    Language: Language.english,
}
const user3 = {
    name : "아무개",
    role : Role.GUEST // 2 <- 게스트
}

console.log(user1, user2, user3);