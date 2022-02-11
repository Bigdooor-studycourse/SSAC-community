
// 변수 설정
const _userPicture =document.querySelector(".my_page_user_pic__personal-picture");
const _userName = document.querySelector(".my_page_user-info__current-name");
const _changeCampus = document.querySelector(".my_page_change_campus");
const _changeProcess = document.querySelector(".my_page_change_process");



// API

const page_url = `https://d0ab52b3-193e-4494-a62f-48f4a76231e4.mock.pstmn.io/`


const setCampus = () => {};

const setProcess = () => {};

const firstinit = (e) => {
    fetch(page_url)
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        _userName.placeholder = data[0].nickname;
        setCampus();
        setProcess();

    })
    .catch((err) => console.log(err));
}

firstinit();