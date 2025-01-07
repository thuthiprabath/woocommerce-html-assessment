$(document).ready(function () {
  console.log("jQuery is loaded and ready!");

  // Change header background on scroll
  let lastScroll = 0;
  $(window).scroll(function () {
    const now = Date.now();
    if (now - lastScroll >= 100) {
      // Throttle every 100ms
      lastScroll = now;
      if ($(this).scrollTop() > 50) {
        $("header").addClass("scrolled");
      } else {
        $("header").removeClass("scrolled");
      }
    }
  });

  // Smooth scroll for nav links
  $("a.nav-link").on("click", function (e) {
    e.preventDefault();
    let target = $($(this).attr("href"));
    if (target.length) {
      $("html, body").animate(
        {
          scrollTop: target.offset().top,
        },
        800
      );
    }
  });

  // Dropdown logic
  const searchBox = document.getElementById("searchBox");
  const dropdownList = document.getElementById("dropdownList");
  if (searchBox && dropdownList) {
    $("#searchBox").focus(function () {
      const dropdown = bootstrap.Dropdown.getOrCreateInstance(this);
      dropdown.show();
    });

    $(document).on("click", function (event) {
      if (!$(event.target).closest("#searchBox, #dropdownList").length) {
        const dropdown = bootstrap.Dropdown.getInstance(searchBox);
        if (dropdown) dropdown.hide();
      }
    });
  }
  // Initialize the popover with bottom placement
  var popoverTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="popover"]')
  );
  var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl, {
      placement: "bottom", // Ensure the popover opens at the bottom
    });
  });

  // Close popover when clicking outside
  document.addEventListener("click", function (event) {
    var popover = document.querySelector(".popover");
    var triggerElement = document.querySelector("#popoverDropdown");
    if (
      popover &&
      !popover.contains(event.target) &&
      !triggerElement.contains(event.target)
    ) {
      var popoverInstance = bootstrap.Popover.getInstance(triggerElement);
      if (popoverInstance) {
        popoverInstance.hide();
      }
    }
  });
  //  Rating start
  $(".my-rating").starRating({
    initialRating: 4,
    starSize: 25,
    starGradient: {
      start: "#02796A",
      end: "#02796A",
    },
  });
// Product List Carousel
$('.products').owlCarousel({
    loop: true,
    nav: true,
    navText: [
      '<i class="fi fi-rr-angle-small-left"></i>',
      '<i class="fi fi-rr-angle-small-right"></i>',
    ],
    margin: 10,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      960: {
        items: 5,
      },
      1200: {
        items: 4,
      },
    },
  });
  // Product List Carousel
  $('.category').owlCarousel({
    loop: true,
    nav: true,
    navText: [
      '<i class="fi fi-rr-angle-small-left"></i>',
      '<i class="fi fi-rr-angle-small-right"></i>',
    ],
    margin: 10,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      960: {
        items: 5,
      },
      1200: {
        items: 6,
      },
    },
  });
});
