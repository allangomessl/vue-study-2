<template lang="pug">
section.col-md-12.col-offset-250
  .bs-component
    nav.navbar.navbar-default
      .container-fluid
        .navbar-header
          a.navbar-brand(href='#') {{ title }}
        #bs-example-navbar-collapse-1.navbar-form.navbar-right
          .form-group
            input.form-control(type='text', placeholder='Procurar')
  slot
</template>

<style lang="stylus">

</style>
