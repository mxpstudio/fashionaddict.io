window.addEventListener('scroll', function() {
  var mainSection = document.querySelector('.model-section');
  var image = mainSection.querySelector('img');

  var bounding = mainSection.getBoundingClientRect();
  if (bounding.top < window.innerHeight && bounding.bottom > 0) {
    mainSection.classList.add('show-image');
  } else {
    mainSection.classList.remove('show-image');
  }
});



window.addEventListener('scroll', function() {
  var heroSection = document.querySelector('.features-section');
  var textElements = heroSection.querySelectorAll('h6, p, .view-product');

  var bounding = heroSection.getBoundingClientRect();
  if (bounding.top < window.innerHeight && bounding.bottom > 0) {
    textElements.forEach(function(element, index) {
      setTimeout(function() {
        element.classList.add('animate-text');
      }, index * 200); 
    });
  } else {
    textElements.forEach(function(element) {
      element.classList.remove('animate-text');
    });
  }
});

window.addEventListener('resize', function() {
  var textElements = document.querySelectorAll('.animate-text');
  textElements.forEach(function(element) {
    element.classList.remove('animate-text');
  });
});





