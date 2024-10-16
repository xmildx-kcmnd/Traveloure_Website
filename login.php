<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>Login</title>
</head>
<body>
    <div class="container">
        <div class="box form-box"></div>
        <header>Login</header>
        <form action="" method="post">
            <div class="field input">
                <label for="username">Username</label>
                <input type="password" name="password" id="password" required>
            </div>

            <div class="field input">
                <label for="password">Password</label>
                <input type="text" name="username" id="username" required>
            </div>

            <div class="field">
                <input type="submit" name="submit" value="Login" required>
            </div>
            <div class="links">
                Don't have account? <a href="register.html">Sign Up Here</a>
            </div>
        </form>
    </div>
</body>
</html>