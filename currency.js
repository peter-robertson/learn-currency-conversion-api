$(function () {
  /*

    API DOCS: http://fixer.io/

    make a get request to the following: https://api.fixer.io/latest?base=CAD

    On form submit, do the conversion and display the converted amount to the user
  */

  $.get('https://api.fixer.io/latest?base=CAD')
    .done(function (res) {
      console.log(res.rates)
    })
    .fail(function (err) {
      //
    });

    /*  add stuff here? */
});
