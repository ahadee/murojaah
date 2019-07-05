$(document).ready(function($) {
    $("#progressSoal").progress({
        label: 'ratio',
        text: {
            ration : '{value} de {total}'
        }
    });
    $("#formRubahSoal").modal('attach events', '#rubahSoal', 'show');
    $("#formRubahSoal").submit(function(e){
        e.preventDefault();
        var val = $("input", this).val();
        if((val=='')||(Number.isInteger(val))){
            $(this).addClass('error');
            return false
        }else{
            $(this).removeClass('error');
            $(this).modal('hide')
        }
    });
    $('.ui.checkbox').checkbox();
    $('.ui.checkbox input[type="checkbox"]').on('change', function(e){
        console.log("click");
        console.log($(this).prop("checked"));
    })
})