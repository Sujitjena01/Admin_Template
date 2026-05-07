const tableIds = ['#table2'];

$(document).ready(function () {

    $('.table th').on('click', function () {

        const table = $(this).closest('table');
        const tbody = table.find('tbody');
        const columnIndex = $(this).index();
        const rows = tbody.find('tr').toArray();

        // determine new direction FIRST
        let isAsc = !$(this).hasClass('asc');

        // reset all headers
        table.find('th').removeClass('asc desc');

        // apply new class
        $(this).addClass(isAsc ? 'asc' : 'desc');

        rows.sort(function (a, b) {
            let A = $(a).children('td').eq(columnIndex).text().trim().toLowerCase();
            let B = $(b).children('td').eq(columnIndex).text().trim().toLowerCase();

            if (!isNaN(A) && !isNaN(B)) {
                return isAsc ? A - B : B - A;
            }

            return isAsc ? A.localeCompare(B) : B.localeCompare(A);
        });

        $.each(rows, function (_, row) {
            tbody.append(row);
        });

    });

});