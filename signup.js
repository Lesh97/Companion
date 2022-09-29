/** 휴대폰 번호 입력 부분 */

/** 문자인증 , 타이머 부분 */

/** 가입정보 부분 */
function signUpCheck() {
  /** 회원가입 기재해야할 정보 변수 */
  let email = document.getElementById("email").value;
  let name = document.getElementById("name").value;
  let password = document.getElementById("password").value;
  let passwordCheck = document.getElementById("passwordCheck").value;
  let area = document.getElementById("area").value;
  let gender_man = document.getElementById("gender_man").checked;
  let gender_woman = document.getElementById("gender_woman").checked;
  let check = true;

  /**이메일 확인 부분 */
  if (email.includes("@")) {
    let emailId = email.split("@")[0];
    let emailServer = email.split("@")[1];
    if (emailId === "" || emailServer === "") {
      document.getElementById("emailError").innerHTML =
        "이메일이 올바르지 않습니다.";
      check = false;
    } else {
      document.getElementById("emailError").innerHTML = "";
    }
  } else {
    document.getElementById("emailError").innerHTML =
      "이메일이 올바르지 않습니다.";
    check = false;
  }

  /** 이름 확인 부분 */
  if (name === "") {
    document.getElementById("nameError").innerHTML =
      "이름이 올바르지 않습니다.";
    check = false;
  } else {
    document.getElementById("nameError").innerHTML = "";
  }

  /** 비밀번호 확인 부분 */
  if (password !== passwordCheck) {
    document.getElementById("passwordError").innerHTML = "";
    document.getElementById("passwordCheckError").innerHTML =
      "비밀번호가 동일하지 않습니다.";
  } else {
    document.getElementById("passwordError").innerHTML = "";
    document.getElementById("passwordCheckError").innerHTML = "";
  }

  if (password === "") {
    document.getElementById("passwordError").innerHTML =
      "비밀번호를 입력해주세요.";
    check = false;
  } else {
    document.getElementById("passwordError").innerHTML = "";
  }

  if (passwordCheck === "") {
    document.getElementById("passwordCheckError").innerHTML =
      "비밀번호를 다시 입력해주세요.";
    check = false;
  } else {
    document.getElementById("passwordCheckError").innerHTML = "";
  }

  /** 지역선택 확인 부분 */
  if (area === "지역을 선택하세요.") {
    document.getElementById("areaError").innerHTML = "지역을 선택해주세요.";
    check = false;
  } else {
    document.getElementById("areaError").innerHTML = "";
  }

  /** 성별 확인 부분 */
  if (!gender_man && !gender_woman) {
    document.getElementById("genderError").innerHTML = "성별을 선택해주세요.";
    check = false;
  } else {
    document.getElementById("genderError").innerHTML = "";
  }

  /** 전체 체크 */

  if (check) {
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("nameError").innerHTML = "";
    document.getElementById("passwordError").innerHTML = "";
    document.getElementById("passwordCheckError").innerHTML = "";
    document.getElementById("areaError").innerHTML = "";
    document.getElementById("genderError").innerHTML = "";

    /** 가입완료 처리 알림 */
    setTimeout(function () {
      alert("회원가입이 완료되었습니다.");
    }, 0);
  }
}
