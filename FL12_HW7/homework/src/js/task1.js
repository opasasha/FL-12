let userEmail;
let userPass;
let changePass;
let userNewPass;
let userNewPassConfirm;
let predicted = {
    'user@gmail.com': 'UserPass',
    'admin@gmail.com': 'AdminPass'
};
const minLogin = 5;
const minPass = 6;

userEmail = prompt(`Please enter your email:`, `email@gmail.com`);
if(userEmail === null){
    alert(`Canceled`);
} else if(userEmail.length < minLogin){
    alert('I don\'t know any emails having name length less than 5 symbols');
} else if(predicted[userEmail]){
    userPass = prompt('Please enter your password:');
    if(userPass === null){
        alert('Canceled');
    } else if(userPass !== predicted[userEmail]) {
        alert('Wrong password');
    } else{
        alert('I don\'t know you');
    }
    if(predicted[userEmail]) {
        changePass = confirm('Do you want to change your password?');

        if (changePass === false) {
            alert('You have failed the change.');
        } else {
            userPass = prompt('Please enter your old password:');
            if (userPass === null) {
                alert('Canceled');
            } else if (userPass !== predicted[userEmail]) {
                alert('Wrong password');
            } else {
                userNewPass = prompt('Please enter your *new* password:');

                if (userNewPass === null) {
                    alert('Canceled');
                } else if (userNewPass.length < minPass) {
                    alert('It\'s too short password. Sorry.')
                } else {
                    userNewPassConfirm = prompt('Please enter your *new* password again:');

                    if (userNewPassConfirm !== userNewPass) {
                        alert('You wrote the wrong password.');
                    } else {
                        alert('You have successfully changed your password.');
                    }
                }
            }
        }
    }
}