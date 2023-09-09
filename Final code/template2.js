$(document).ready(function(){
    $('.repeater').repeater({
        initEmpty: false,
        defaultValues: {
            'text-input': ''
        },
        show:function(){
            $(this).slideDown();
            // Add code here to update the preview for the newly added content
            updatePreview();
        },
        hide: function(deleteElement){
            $(this).slideUp(deleteElement);
            // Add code here to update the preview after an item is deleted
            updatePreview();
        },
        isFirstItemUndeletable: true
    });
    
    // Function to update the content preview
    function updatePreview() {
        // Clear the existing preview
        $('.preview-container').empty();
        
        // Loop through each item in the repeater
        $('.repeater .repeater-item').each(function(index) {
            // Get the value of the 'text-input' field for each item
            var textValue = $(this).find('[name="text-input"]').val();
            
            // Create a preview element (e.g., a <div>) and set its content
            var previewItem = $('<div>').addClass('preview-item');
            previewItem.text(textValue);
            
            // Append the preview element to the preview container
            $('.preview-container').append(previewItem);
        });
    }
});



const page1next = document.getElementById("page1next");
const page2next = document.getElementById("page2next");
const page3next = document.getElementById("page3next");
const page4next = document.getElementById("page4next");
const page5next = document.getElementById("page5next");
const page6next = document.getElementById("page6next");
const page7next = document.getElementById("page7next");
const page8next = document.getElementById("page8next");
const page9next = document.getElementById("page9next");
const page01next = document.getElementById("page01next");

const page1back = document.getElementById("page1back");
const page2back = document.getElementById("page2back");
const page3back = document.getElementById("page3back");
const page4back = document.getElementById("page4back");
const page5back = document.getElementById("page5back");
const page6back = document.getElementById("page6back");
const page7back = document.getElementById("page7back");
const page8back = document.getElementById("page8back");
const page9back = document.getElementById("page9back");
const page10back = document.getElementById("page10back");

const page0 = document.getElementById("page0");
const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const page3 = document.getElementById("page3");
const page4 = document.getElementById("page4");
const page5 = document.getElementById("page5");
const page6 = document.getElementById("page6");
const page7 = document.getElementById("page7");
const page8 = document.getElementById("page8");
const page9 = document.getElementById("page9");
const page01 = document.getElementById("page01");
const page10 = document.getElementById("page10");


page1next.addEventListener("click", function() {
    page1.style.display = "block";
    page0.style.display = "none";
});

page2next.addEventListener("click", function() {
    page2.style.display = "block";
    page0.style.display = "none";
});

page3next.addEventListener("click", function() {
    page3.style.display = "block";
    page0.style.display = "none";
});

page4next.addEventListener("click", function() {
    page4.style.display = "block";
    page0.style.display = "none";
});

page5next.addEventListener("click", function() {
    page5.style.display = "block";
    page0.style.display = "none";
});
page6next.addEventListener("click", function() {
    page6.style.display = "block";
    page0.style.display = "none";
});
page7next.addEventListener("click", function() {
    page7.style.display = "block";
    page0.style.display = "none";
});
page8next.addEventListener("click", function() {
    page8.style.display = "block";
    page0.style.display = "none";
});
page9next.addEventListener("click", function() {
    page9.style.display = "block";
    page0.style.display = "none";
});
page01next.addEventListener("click", function() {
    page10.style.display = "block";
    page01.style.display = "none";
});



page1back.addEventListener("click", function() {
    page1.style.display = "none";
    page0.style.display = "block";
});

page2back.addEventListener("click", function() {
    page2.style.display = "none";
    page0.style.display = "block";
});

page3back.addEventListener("click", function() {
    page3.style.display = "none";
    page0.style.display = "block";
});

page4back.addEventListener("click", function() {
    page4.style.display = "none";
    page0.style.display = "block";
});

page5back.addEventListener("click", function() {
    page5.style.display = "none";
    page0.style.display = "block";
});

page6back.addEventListener("click", function() {
    page6.style.display = "none";
    page0.style.display = "block";
});
page7back.addEventListener("click", function() {
    page7.style.display = "none";
    page0.style.display = "block";
});
page8back.addEventListener("click", function() {
    page8.style.display = "none";
    page0.style.display = "block";
});
page9back.addEventListener("click", function() {
    page9.style.display = "none";
    page0.style.display = "block";
});
page10back.addEventListener("click", function() {
    page10.style.display = "none";
    page01.style.display = "block";
});








