// ----- SIDEBAR ----- \\

// CONSTANT VARIABLES
const sidebar = document.querySelector('.sidebar');

// Handles the menu button\ li element
// To show the sidebar
function showSidebar(){
    // access the sidebar by using selectors
    // To be able show the sidebar
    sidebar.style.display = 'flex';
};

// Handles the close button\ li element
// To close the sidebar
function closeSidebar(){
    // access the sidebar by using selectors
    // To be able close the sidebar
    sidebar.style.display = 'none'
}