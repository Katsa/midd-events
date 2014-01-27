// Select 2

$("#searchCat").select2({
  placeholder: "Filter by category..."
});
$("#searchOrg").select2({
  placeholder: "Filter by organization..."
});

// Carousel
$("#events-carousel").carousel({
  interval: 10000
});

$("#searchFilterToggle").on('click', function () {
  $("#searchFilter").toggleClass("hide");
});