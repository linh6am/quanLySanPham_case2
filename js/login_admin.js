document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username === 'admin' && password === 'Admin6868') {
        alert('Đăng nhập thành công!');
        window.location.href = 'admin.html';
    } else {
        alert('Tên đăng nhập hoặc mật khẩu không đúng!');
    }
});

