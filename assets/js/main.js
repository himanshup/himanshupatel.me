$.fn.extend({
  animateCss: function(animationName, callback) {
    var animationEnd = (function(el) {
      var animations = {
        animation: "animationend",
        OAnimation: "oAnimationEnd",
        MozAnimation: "mozAnimationEnd",
        WebkitAnimation: "webkitAnimationEnd"
      };

      for (var t in animations) {
        if (el.style[t] !== undefined) {
          return animations[t];
        }
      }
    })(document.createElement("div"));

    this.addClass("animated " + animationName + " faster").one(
      animationEnd,
      function() {
        $(this).removeClass("animated " + animationName + " faster");

        if (typeof callback === "function") callback();
      }
    );

    return this;
  }
});

$(".card").animateCss("fadeIn", function() {
  $("#github")
    .toggleClass("invisible")
    .animateCss("fadeInRight ", function() {
      $("#linkedin")
        .toggleClass("invisible")
        .animateCss("fadeInRight ", function() {
          $("#email")
            .toggleClass("invisible")
            .animateCss("fadeInRight ", function() {
              $("#resume")
                .toggleClass("invisible")
                .animateCss("fadeInRight ", function() {});
            });
        });
    });
});
