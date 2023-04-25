export const validationSignIn = (value) => {
    const errors = {};

    if(!value.email) {
        errors.email = 'لطفا ایمیل خود را وارد کنید'
    } else if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(value.email)) {
        errors.email = 'ایمیل شما معتبر نیست'
    } else {
        delete errors.email
    }

    if(!value.password) {
        errors.password = 'لطفا رمز خود را وارد کنید'
    } else if(value.password.length < 6) {
        errors.password = 'رمز عبور باید بیشتر از 6 کاراکتر باشد'
    } else {
        delete errors.password
    }

    if(!value.numberPhone) {
        errors.numberPhone = 'لطفا شماره خود را وارد کنید'
    } else if(!/09(1[0-9]|3[1-9]|2[1-9]|9[0-9])-?[0-9]{3}-?[0-9]{4}/.test(value.numberPhone)) {
        errors.numberPhone = 'لطفا شماره معتبر وارد کنید'
    } else {
        delete errors.numberPhone
    }

    return errors;
};