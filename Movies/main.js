function search() {
    let searchBar = document.querySelector('.search').value.toUpperCase();
    let movie = document.querySelectorAll('.col');
    let movieTitle = document.querySelectorAll('.card-title');

    for(let i=0; i<movieTitle.length; i++) {
        if(movieTitle[i].innerHTML.toUpperCase().indexOf(searchBar) >= 0 ) {
            movie[i].style.display = '';
        } else {
            movie[i].style.display = 'none';
        }
    }
}
