// ******************************task 1***********************

$("a[href^='https://']").attr('target', '_blank')

// ******************************task 2***********************

let $head = $('.head')
$head.css('background-color', 'green');
$head.find('.inner').css('font-size', '35px');

// *****************************task 3************************

$("h3:first").before($("div:first"))
$("h3:last").before($("div:last"))

// ****************************task 4*************************
function checkSelectedInput() {
    let $tagInputCheked = $('input:checked')
    if ($tagInputCheked.length == 3) {
        $('input').prop('disabled', true);
    }
}

