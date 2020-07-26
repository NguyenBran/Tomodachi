const isLoggedIn = () => {
    if (sessionStorage.getItem('id') == null){
        return false;
    }
    return true;
}

export default {isLoggedIn};