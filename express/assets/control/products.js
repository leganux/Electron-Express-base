$(document).ready(function () {
    $.fn.dataTable.ext.errMode = 'none';
    var DT = $("#datatable").DataTable({
        "responsive": true,
        "data": {},
    });
});

