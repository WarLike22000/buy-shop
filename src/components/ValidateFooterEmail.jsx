export const validateFooterEmail = (value) => {
    const errors = {};

    if(!value.email) {
        errors.email = 'لطفا ایمیل خود را وارد کنید'
    } else if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(value.email)) {
        errors.email = 'ایمیل شما معتبر نیست'
    } else {
        delete errors.email
    }

    return errors;
};