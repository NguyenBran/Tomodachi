

const isLoggedIn = () => {
    console.log('check login');
    if (sessionStorage.getItem('user') == null){
        return false;
    }
    return true;
}


export default {isLoggedIn};