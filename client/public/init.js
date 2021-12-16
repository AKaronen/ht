document.addEventListener('DOMContentLoaded', function() {
    var sidenavelems = document.querySelectorAll('.sidenav');
    var sidenavinstances = M.Sidenav.init(sidenavelems,{});
    M.AutoInit();
});
