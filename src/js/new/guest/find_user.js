// helper함수
const _get = (target) => {
  return document.querySelector(target)
}

// ID 찾기 form DOM 들고오기
const _findIdForm = _get('.find-id')
const _findIdFormInput = _get('.find_user_find-id__id-phone-input')
const _findIdFormBtn = _get('.find_user_find-id__id-phone-btn')

// password 찾기 form DOM 들고오기
const _findPwForm = _get('.find-pw')

const _findPwFormPhoneInput = _get('.find_user_find-pw__pw-phone-input')
const _findPwFormPhoneBtn = _get('.find_user_find-pw__pw-phone-btn')

const _findPwFormCodeInput = _get('.find_user_find-pw__pw-code-input')
const _findPwFormCodeBtn = _get('.find_user_find-pw__pw-code-btn')

const _findPwFormResetInput = _get('.find_user_find-pw__pw-reset-input')
const _findPwFormResetBtn = _get('.find_user_find-pw__pw-reset-btn')



const _findId = () => {
  
}

const _bindIdFIndBtn = () => {
  _findIdForm.addEventListener('submit', _findId)
}

const AllFindUser = () => {

}

const _init = () => {
  window.addEventListener('DOMContentLoaded', AllFindUser)
}

_init();