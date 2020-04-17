
export const signup = user => (
    $.ajax({
        url: '/api/users',
        method: 'POST',
        data: {user}
    })
);

export const login = user => (
    $.ajax({
        url: '/api/session',
        method: 'POST',
        data: {user}
    })
);

export const logout = () => (
    $.ajax({
        url: '/api/session',
        method: 'DELETE'
    })
);

export const verify = (email) => {
    // debugger
    return $.ajax({
        method: "POST",
        url: "api/verify_user",
        data: { user: { email: email } }
    })
}

