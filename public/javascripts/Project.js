$(document).ready(function(){
    $.getJSON('/food/fetch_all_types',function(data){
        data.map((item)=>{
            $('#foodtype').append($('<option>').text(item.foodtype).val(item.foodid))
        })
    })
    $('#foodtype').change(function(){
        $.getJSON('/food/fetch_all_items',{ foodid : $('#foodtype').val()},function(data){
        $('#fooditem').empty()
        $('#fooditem').append($('<option>').text('-Select Food-'))
            data.map((item)=>{
                $('#fooditem').append($('<option>').text(item.foodname).val(item.fooditemid))
            })
        })
    })
})