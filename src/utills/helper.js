const isLoggedIn = () => {
    if (sessionStorage.getItem('user') == null){
        return false;
    }
    return true;
}

export default {isLoggedIn};