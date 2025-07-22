import "../css/leftSidebar.css"

export function createLeftSidebar() {
    const leftSidebar = document.createElement('div');
    leftSidebar.id = 'leftSidebar';

    // Create top and bottom containers
    const topSection = document.createElement('div');
    topSection.className = 'sidebar-top';

    const botSection = document.createElement('div');
    botSection.className = 'sidebar-bot';

    // Boxes in the top
    const boxAboutMe = document.createElement('div');
    boxAboutMe.className = 'sidebar-box-top';
    boxAboutMe.textContent = "About Me";
    boxAboutMe.addEventListener('click', () => {
        window.location.href = '/';
    });
    topSection.appendChild(boxAboutMe);

    for (let i = 1; i <= 3; i++) {
        const box = document.createElement('div');
        box.className = 'sidebar-box-top';
        box.textContent = `Top Box ${i}`;
        topSection.appendChild(box);
    }

    // Add boxes to bottom
    for (let i = 1; i <= 2; i++) {
        const box = document.createElement('div');
        box.className = 'sidebar-box-bot';
        box.textContent = `Bottom Box ${i}`;
        botSection.appendChild(box);
    }

    // Append sections to sidebar
    leftSidebar.appendChild(topSection);
    leftSidebar.appendChild(botSection);

    document.body.prepend(leftSidebar);
}
