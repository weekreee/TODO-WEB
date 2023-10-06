<template>
    <!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
    <link rel="stylesheet" href="PageNotFound.css">
  </head>
  <body>
    <div class="container">
      <h2>Oops! Page not found.</h2>
      <h1>404</h1>
      <p>We can't find the page you're looking for.</p>
      <RouterLink to="/">Go Home</RouterLink>
    </div>
  </body>
</html>

</template>
<script>
import './PageNotFound.css';
export default {
    name:"PageNotFound"
}
</script>