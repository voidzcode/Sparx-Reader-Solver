function unblockCopy() {
    // Force CSS text selection
    const style = document.createElement('style');
    style.innerHTML = '* { user-select: text !important; -webkit-user-select: text !important; }';
    document.head.appendChild(style);

    // Override JavaScript copy and context menu blockers
    const events = ['copy', 'cut', 'contextmenu', 'selectstart', 'mousedown', 'mouseup'];
    events.forEach(eventType => {
        document.addEventListener(eventType, function(e) {
            e.stopPropagation();
        }, true);
    });
}

// Run the function immediately and repeat if the page changes dynamically
unblockCopy();
setInterval(unblockCopy, 3000);
