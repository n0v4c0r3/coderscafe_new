$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  responsiveClass:true,
  autoplayHoverPause: false,
  autoplay: true,
  smartSpeed: 1000,
  nav:false,
  items:1,
  lazyLoad: true,
  lazyLoadEager:1
})

$('.testimonial_slider').owlCarousel({
  loop:true,
  margin:0,
  nav:false,
  mouseDrag: false,
  items:1,
  dots: false,
  autoHeight: true,
  autoplay: true,
  smartSpeed:1500,
  autoplayHoverPause: true,
  animateOut: "slideOutDown",
  animateIn: "slideInDown",
});

$(window).scroll(function() {
  if ($(".navbar").offset().top > 1) {
    $(".fixed-top").addClass("bg-light");
    $(".fixed-top").addClass("scrollbar");
      } else {
        $(".fixed-top").removeClass("bg-light");
        $(".fixed-top").removeClass("scrollbar");
      }
});


// menu icon
$(document).ready(function(){
  $('.navbar-toggler').click(function(){
    $('.navbar-toggler').toggleClass('active');
  });
});

$('.menu_product').owlCarousel({
  loop:true,
  margin:0,
  nav:false,
  mouseDrag: false,
  items:1,
  dots: false,
  autoHeight: true,
  autoplay: true,
  smartSpeed:1500,
  autoplayHoverPause: true,
  animateOut: "slideOutDown",
  animateIn: "slideInDown",
});


// inc dec

// const decreaseNumber = (incdec) => {
//   var itemval = document.getElementById(incdec);
//   if(itemval.value <= 1){
//     itemval.value = 1;
//     alert('minimum 1');
//   }else{
//     itemval.value = parseInt(itemval.value ) -1;
    
//     itemval.style.background = '#ff';
//     itemval.style.color = '#000';
//   }
// }

// const IncreseNumber = (incdec) => {
//   var itemval = document.getElementById(incdec);

//   if(itemval.value >= 5) {

//     itemval.value = 5;
//     alert('max 5');
//     itemval.style.background = 'red';
//     itemval.style.color = '#fff';
//   }else{
//     itemval.value = parseInt(itemval.value) + 1;
//   }
// }

// table


$(document).ready(function() {
  var table = $('.mytable').DataTable( {
      rowReorder: {
          selector: 'td:nth-child(2)'
      },
      responsive: true,
      "aoColumnDefs": [{
        'bSortable':false,
        'aTargets':['nosort'],
      }],
      columnDefs:[
        {type:'data-dd-mm-yyyy',aTargets:[2]}
      ],
      "aoColumns":[
        null,
        null,
        null,
        null,
        null,
      ],
      "order": false,
      "bLengthChange":false,
      
  } );
} );

// alert

function sucess(){
  swal("Good job!", "You clicked the button!", "success");
}

// cursor
// inc qty
$(document).ready(function(){

  var quantitiy=0;
     $('.inc').click(function(e){
          
          // Stop acting like a button
          e.preventDefault();
          // Get the field name
          var quantity = parseInt($('#textbox').val());
          
          // If is not undefined
              
              $('#textbox').val(quantity + 1);
  
            
              // Increment
          
      });
  
       $('.dec').click(function(e){
          // Stop acting like a button
          e.preventDefault();
          // Get the field name
          var quantity = parseInt($('#textbox').val());
          
          // If is not undefined
        
              // Increment
              if(quantity>0){
              $('#textbox').val(quantity - 1);
              }
      });
      
  });