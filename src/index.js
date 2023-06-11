// TODO: 이 곳에 정답 코드를 작성해주세요.

// 1. Autofocus
// 브라우저 접속시(window) -> ID 입력창에 대한 포커싱
// 페이지(window) 로드 이벤트 활용
// ID 입력창의 id = id이므로 이를 DOM에서 조작

// dollar sign($) : DOM element를 조작한 변수를 의미함(관습)
const $id = document.getElementById('id')
const $pw = document.getElementById('pw')
const $pwCheck = document.getElementById('pw-check')
const $submit = document.getElementById('submit')

window.addEventListener('load', () => {
    $id.focus() // ID 입력창 자동 포커싱
})

// 2. ID, PW, PW 확인 유효성 검사 로직 구현
// 이벤트 : input의 focus out & 가입하기 버튼 click
// 핸들러 : focus out 시 유효성 검사 & 가입하기 버튼 클릭 시 모든 필드에 대해 유효성 검사
// 비밀번호 input의 id = pw

// ID 핸들러
// 유효성 검사 패턴
// 유효성 검사를 진행할 때는 주로 정규표현식을 이용하여 구현함.
// ID: 5~20자. 영문 소문자, 숫자. 특수기호(_),(-)만 사용 가능
// 비밀번호: 8~16자. 영문 대/소문자, 숫자 사용 가능
// 비밀번호 확인: 비밀번호와 일치
const ID_REGEX = new RegExp('^[a-z0-9_-]{5,20}$')
const PW_REGEX = new RegExp('^[a-zA-Z0-9]{8,16}$')

const validateID = (value) => {
    const isValidId = ID_REGEX.test(value) // ID 유효성 검사
    console.log('ID', isValidId)
}

const validatePW = (value) => {
    // console.log($pw.value) 값 체크용
    const isValidPW = PW_REGEX.test(value) // PW 유효성 검사
    console.log('PW', isValidPW)
}

const validatePWCheck = (value) => {
    const isValidPWCheck = $pw.value === value // PW 체크 검사
    console.log('PW Check', isValidPWCheck)
}

$id.addEventListener('focusout', () => validateID($id.value))
$pw.addEventListener('focusout', () => validatePW($pw.value))
$pwCheck.addEventListener('focusout', () => validatePWCheck($pwCheck.value))
$submit.addEventListener('click', (event) => {
    // 가입하기 버튼의 id = submit
    // ID, PW, PW 확인 3개 필드의 유효성을 확인해야함
    event.preventDefault()
    validateID($id.value)
    validatePW($pw.value)
    validatePWCheck($pwCheck.value)
})
