////////////////  Collapsable divs ////////////////
      $(".collapse > a,  .collapse > p > a, .collapse .trigger").click(function () {
        if ($(this).closest(".collapse").children("div").hasClass("active")) {

          $(this).closest(".collapse").children("div").removeClass("active");
          $(this).closest(".collapse").children("a").removeClass("active");

          $(this).closest(".collapse").children("div").hide(500);

        } else {

          $(this).closest(".collapse").children("div").not("active").hide(500);
          $(this).closest(".collapse").children(".collapse").not("active").hide(500);

          $(this).closest(".collapse").children("div").removeClass("active");
          $(this).closest(".collapse").children("a").removeClass("active");

          $(this).closest(".collapse").children("div").addClass("active");
          $(this).closest(".collapse").children("a").addClass("active");

          $(this).closest(".collapse").children("div").show(500);



          $(this).closest(".collapse").siblings(".collapse").children("div").hide(500);
          $(this).closest(".collapse").siblings(".collapse").children("div").removeClass("active");
          $(this).closest(".collapse").siblings(".collapse").children("a").removeClass("active");

        }



        $(".collapse > div").children("div").show(); // keeps all nested divs from collapsing.

        $(".collapse > div").children("ul").show(); // keeps all nested divs from collapsing.

      });
      ////////////////  ENDCollapsable divs ////////////////