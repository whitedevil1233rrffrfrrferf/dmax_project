function handleFilters() {
    const date=document.getElementById("date").value
    const month=document.getElementById("month").value
    
    let urlParams = new URLSearchParams(window.location.search); 
    if (date) {
        urlParams.set('date', date);
    } else {
        // If no date is selected, remove it from the URL parameters
        urlParams.delete('date');
    }
    if (month) {
        urlParams.set('month', month);
    } else {
        // If no date is selected, remove it from the URL parameters
        urlParams.delete('month');
    }
    window.location.href = `${homeUrl}?${urlParams.toString()}`;
    
}