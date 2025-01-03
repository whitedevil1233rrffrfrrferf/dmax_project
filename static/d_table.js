    function handleFilters() {
    const designation=document.getElementById("designation").value
    
    const project=document.getElementById("project").value
    
    const month=document.getElementById("month").value
    
    let urlParams = new URLSearchParams(window.location.search); 
    if (designation) {
        urlParams.set('designation', designation);
    } else {
        // If no date is selected, remove it from the URL parameters
        urlParams.delete('designation');
    }
    if (project){
        urlParams.set('project', project);
    } else{
        urlParams.delete('project')
    } 
    if (month){
        urlParams.set('month', month);
    } else{
        urlParams.delete('month')
    } 
    
    window.location.href = `${dmaxUrl}?${urlParams.toString()}`;
    
}