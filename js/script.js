$(document).ready(function(){

    //Choose project select2 function
    $(".select2-project-name").select2({
        placeholder: "Choose Project",
        tags: true,
        width: '100%'
    });

    //Choose date range datepicker function
    $("#date-range-datepicker").datetimepicker({
        format: 'YYYY.MM.DD',
        locale: moment.locale('en',{
            week: {dow: 1}
        })
    })

    //Get the value of Start and End of Week
    $('#date-range-datepicker').on('dp.change', function (e) {
        var value = $("#date-range-datepicker").val();
        var firstDate = moment(value, "YYYY.MM.DD").day(1).format("YYYY.MM.DD");
        var lastDate =  moment(value, "YYYY.MM.DD").day(7).format("YYYY.MM.DD");
        $("#date-range-datepicker").val(firstDate + " - " + lastDate);
    });
});