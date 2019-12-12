/**
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author         Alfian Imanuddin
 * @copyright      Copyright (c) http://alfianimanuddin.com 
*/

//* Navbar Fixed  
function navbarFixed(){
    if ( $('.header_area').length ){ 
        $(window).scroll(function() {
            var scroll = $(window).scrollTop();   
            if (scroll){
                $(".header_area").addClass("navbar_fixed");
            } else {
                $(".header_area").removeClass("navbar_fixed");
            }
        });
    };
};
navbarFixed();


/*--------- WOW js-----------*/
function wowAnimation(){
    new WOW({
        offset: 100,          
        mobile: true
    }).init()
}
wowAnimation()