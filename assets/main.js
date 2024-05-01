/*
document.querySelectorAll('.page-link').forEach((item)=>{
    item.addEventListener('click', (e)=>{
        e.preventDefault();
        let page = +item.dataset.page;
        console.log(page);
        if (page){
            fetch('actions.php', {
                method: 'POST',
                body: JSON.stringify({
                    page: page,
                })
            })
                .then((response)=>response.text())
                .then((data)=>{
                document.querySelector('.table-responsive').innerHTML=data;
            });
        }
    })
});*/
const divTable = document.querySelector('.table-responsive');
divTable.addEventListener('click', (e)=>{
if (e.target.className==='page-link'){
    e.preventDefault();
    let page = +e.target.dataset.page;
    console.log(page);
    if (page){
        fetch('actions.php', {
            method: 'POST',
            body: JSON.stringify({
                page: page,
            })
        })
            .then((response)=>response.text())
            .then((data)=>{
                document.querySelector('.table-responsive').innerHTML=data;
            });
    }
}
});