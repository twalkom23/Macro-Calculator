//Used for functions to wait for certain elements before running
export function waitForElement(selector) {
    return new Promise((resolve) => {
        const checkExist = setInterval(() => {
            const element = document.querySelector(selector);
            if (element) {
                clearInterval(checkExist);
                resolve(element);
            }
        }, 100); // Check every 100ms
    });
}

export function removeDiv (divClass) {
    const divToRemove = document.querySelector(divClass);
    divToRemove.remove();
}

