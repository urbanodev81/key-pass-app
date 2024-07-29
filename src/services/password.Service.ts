export default function generatePass(){
    let resultPassword: string = ''
    const length = 8;
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    for (let i = 0, n = charset.length; i < length; ++i) {
        resultPassword += charset.charAt(Math.floor(Math.random() * n));
    }

    return resultPassword
}

// export default generatePass;