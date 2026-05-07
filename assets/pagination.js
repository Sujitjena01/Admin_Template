function getPagination(tableSelector) {
    const $table = $(tableSelector);
    const tableId = $table.attr('id') || 'table_' + Math.random().toString(36).substr(2, 9);

    if (!$table.attr('id')) {
        $table.attr('id', tableId);
    }

    const maxRowsSelector = '#maxRows_' + tableId;
    const paginationSelector = '.pagination_' + tableId;

    let $pagination = $(paginationSelector);
    if ($pagination.length === 0) {
        $table.closest('.table-section').append(`
            <div class="pagination-container">
                <div class="rows-selector">
                    <label>Rows per page: 
                        <select id="maxRows_${tableId}" class="form-control">
                            <option value="5">5</option>
                            <option value="10" selected>10</option>
                            <option value="15">15</option>
                            <option value="20">20</option>
                            <option value="50">50</option>
                            <option value="5000">Show All</option>
                        </select>
                    </label>
                </div>
                <ul class="pagination pagination_${tableId}">
                    <li class="page-item page-prev" data-page="prev">
                        <a class="page-link" href="#"><i class="fa-solid fa-chevron-left"></i> Prev</a>
                    </li>
                    <li class="page-item page-next" data-page="next">
                        <a class="page-link" href="#">Next <i class="fa-solid fa-chevron-right"></i></a>
                    </li>
                </ul>
            </div>
        `);
        $pagination = $(paginationSelector);
    }

    let lastPage = 1;

    $(maxRowsSelector).on('change', function () {
        lastPage = 1;
        $pagination.find('li').slice(1, -1).remove();

        let trnum = 0;
        const maxRows = parseInt($(this).val());
        const totalRows = $('#' + tableId + ' tbody tr').length;

        if (maxRows == 5000) $pagination.hide();
        else $pagination.show();

        // Display rows
        $('#' + tableId + ' tbody tr').each(function () {
            trnum++;
            $(this).toggle(trnum <= maxRows);
        });

        const totalPages = Math.ceil(totalRows / maxRows);

        // Create page numbers
        for (let i = 1; i <= totalPages; i++) {
            $pagination.find('.page-next').before(`
                <li class="page-item page-number" data-page="${i}">
                    <a class="page-link" href="#">${i}</a>
                </li>
            `);
        }

        $pagination.find('[data-page="1"]').addClass('active');

        // Page click handler
        $pagination.find('li').off('click').on('click', function (evt) {
            evt.preventDefault();
            let pageNum = $(this).attr('data-page');

            if (pageNum === "prev" && lastPage > 1) lastPage--;
            else if (pageNum === "next" && lastPage < totalPages) lastPage++;
            else if (!isNaN(parseInt(pageNum))) lastPage = parseInt(pageNum);
            else return;

            $pagination.find('li').removeClass('active');
            $pagination.find('[data-page="' + lastPage + '"]').addClass('active');

            limitPagging($pagination, lastPage, totalPages);

            let trIndex = 0;
            $('#' + tableId + ' tbody tr').each(function () {
                trIndex++;
                const start = maxRows * (lastPage - 1) + 1;
                const end = maxRows * lastPage;
                $(this).toggle(trIndex >= start && trIndex <= end);
            });
        });

        limitPagging($pagination, lastPage, totalPages);
    }).val(10).change();


    // ===============================
    // RESPONSIVE PAGINATION WITH ...
    // ===============================
    function limitPagging($pag, currentPage, totalPages) {
        $pag.find('.page-number').hide();
        $pag.find('.ellipsis').remove();

        const windowSize = 2;

        // Always show first & last pages
        $pag.find('[data-page="1"]').show();
        $pag.find('[data-page="' + totalPages + '"]').show();

        // Show the pages around the current page
        for (let i = currentPage - windowSize; i <= currentPage + windowSize; i++) {
            if (i > 1 && i < totalPages) {
                $pag.find('[data-page="' + i + '"]').show();
            }
        }

        // Add ellipsis after first page
        if (currentPage - windowSize > 2) {
            $pag.find('[data-page="1"]').after(`
                <li class="page-item disabled ellipsis"><a class="page-link">...</a></li>
            `);
        }

        // Add ellipsis before last page
        if (currentPage + windowSize < totalPages - 1) {
            $pag.find('[data-page="' + totalPages + '"]').before(`
                <li class="page-item disabled ellipsis"><a class="page-link">...</a></li>
            `);
        }
    }
}

// Initialize pagination for multiple tables
$(document).ready(function () {
    getPagination('#table2');
});