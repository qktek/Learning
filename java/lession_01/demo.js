console.log('Demo')


const trichyeuEle = document.getElementById('txtTrichyeu');
const pricelEle = document.getElementById('txtPrice');
const currencyEle = document.getElementById('txtCurrency');

const btnAdd = document.getElementById('btnAdd');
const btnEdit = document.getElementById('btnEdit');
///const inputEles = document.querySelectorAll('.input-row');

// btnAdd.addEventListener('click', function () {
//     Array.from(inputEles).map((ele) =>
//         ele.classList.remove('success', 'error')
//     );
//     let isValid = checkValidate();

//     if (isValid) {
//         alert('Gửi đăng ký thành công');
//     }
// });

function checkValidate() {
    let trichyeuValue = txtTrichyeu.value;
    let priceValue = txtPrice.value;
    let currencyValue = txtCurrency.value;
    let isCheck = true;

    if (trichyeuValue == '') {
        setError(trichyeuEle, 'Không được để trống');
        isCheck = false;
    } else {
        setSuccess(trichyeuEle);
    }

    if (pricelEle == '') {
        setError(pricelEle, 'Không được để trống');
        isCheck = false;
    } else if (!isPrice(priceValue)) {
        setError(pricelEle, 'Không đúng định dạng');
        isCheck = false;
    } else {
        setSuccess(pricelEle);
    }

    if (currencyEle == '') {
        setError(currencyEle, 'Không được để trống');
        isCheck = false;
    } else {
        setSuccess(currencyEle);
    }

    return isCheck;
}

function isPrice(number) {
    return /(84|0[3|5|7|8|9])+([0-9]{8})\b/.test(number);
}

// function setSuccess(ele) {
//     ele.parentNode.classList.add('success');
// }

// function setError(ele, message) {
//     let parentEle = ele.parentNode;
//     parentEle.classList.add('error');
//     parentEle.querySelector('small').innerText = message;
// }

// function isEmail(email) {
//     return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
//         email
//     );
// }

// add botton
function btnAdd_onclick(){
    if(true){
    Grid2402Obj.addRow();
      Grid2402Obj.clearBinding();
      return true;
    }else{
      return false;
    }
  }
  function btnEdit_onclick(){
    if(true){
      Grid2402Obj.editRow();
      Grid2402Obj.clearBinding();
      return true;
    }else{
      return false;
    }
  }
  function btnRemove_onclick(){
    if(true){
      Grid2402Obj.deleteRow();
      Grid2402Obj.clearBinding();
      return true;
    }else{
      return false;
    }
  }
  