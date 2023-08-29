async function getUsers(token) {
    const res = await axios.get('https://hack-or-snooze-v3.herokuapp.com/users', { params: { token } });
    console.log(res);
}

async function signUp(username, password, name) {
    const res = await axios.post('https://hack-or-snooze-v3.herokuapp.com/signup', {user: {name, username, password} })
    // console.log(res);
}

async function logIn(username, password) {
    const res = await axios.post('https://hack-or-snooze-v3.herokuapp.com/login', {user: {username, password} })
    // console.log(res);
    return res.data.token;
}

// getUsers();
// signUp('butterschickennnnnn', '238197sad', 'butters the chicken')


async function getUsersWithAuth(){
    const token = await logIn('butterschickennnnnn', '238197sad')
    getUsers(token);
}
getUsersWithAuth();