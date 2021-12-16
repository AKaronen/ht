
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);
    var sidenavelems = document.querySelectorAll('.sidenav');
    var sidenavinstances = M.Sidenav.init(sidenavelems,{});
});
