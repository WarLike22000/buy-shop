export const validation = (value) => {
    const errors = {};

    if(!value.name.trim()) {
        errors.name = 'لطفا نام خود را وارد کنید'
    } else if(value.name.length <= 1) {
        errors.name = 'لطفا بین 1 تا 20 کاراکتر وارد کنید'
    } else {
        delete errors.name
    }

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

    if(!value.lastName.trim()) {
        errors.lastName = 'لطفا نام خانوادگی خود را وارد کنید'
    } else if(value.lastName.length <= 1 ) {
        errors.lastName = 'لطفا بین 1 تا 20 کاراکتر وارد کنید'
    } else {
        delete errors.lastName
    }

    if(!value.numberPhone) {
        errors.numberPhone = 'لطفا شماره خود را وارد کنید'
    } else if(!/09(1[0-9]|3[1-9]|2[1-9]|9[0-9])-?[0-9]{3}-?[0-9]{4}/.test(value.numberPhone)) {
        errors.numberPhone = 'لطفا شماره معتبر وارد کنید'
    } else {
        delete errors.numberPhone
    }

    if(!value.confirmPassword) {
        errors.confirmPassword = 'لطفا رمز عبور خود را وارد کنید'
    } else if(value.confirmPassword != value.password) {
        errors.confirmPassword = 'لطفا رمز خود را تایید کنید'
    } else {
        delete errors.confirmPassword
    }

    if(value.isAccepted) {
        delete errors.isAccepted
    } else {
        errors.isAccepted = 'لطفا قوانین را بپزیرید'
    }

    return errors;
};