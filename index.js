
function showSideBar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.right = '0';
}
function hideSideBar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.right = '-100%';
}
function showBar() {
    const mainbar=document.querySelector('.mainbar')
    mainbar.style.display='flex'
}
function hideBar() {
    const mainbar=document.querySelector('.mainbar')
    mainbar.style.display='none'
}