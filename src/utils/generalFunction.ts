export const calculateAge = (date: Date) => {
    var today = new Date();
    var birthDate = new Date(date);
    var age_now = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age_now--;
    }
    return age_now;
}

export const getDateBefore = (years: number) => {
    let eighteenYearsAgo = new Date();
    eighteenYearsAgo.setFullYear(eighteenYearsAgo.getFullYear() - years);
    return eighteenYearsAgo;
}