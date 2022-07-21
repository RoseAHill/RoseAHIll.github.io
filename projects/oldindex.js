
/* Display mode handler */

function toggleMode() {
    const bodyElm = document.body;
    bodyElm.classList.toggle("lightmode");
}

/* Text handler */

/* Copy handler */

function textCopy(ele, id) {
    const icoEle = ele.querySelector('svg');
    //DEBUG
    // console.log(icoEle);
    //
    icoEle.classList.add('fade');

    setTimeout(() => {
        icoEle.classList.remove('fade');
    }, 1000);
    
    const copyText = document.getElementById(id);
    //DEBUG
    // console.log(copyText);
    //
    copyText.style.display = "inline";
    copyText.select();

    try {
        var successful = document.execCommand('copy', false, 'Bleh');
        var msg = successful ? 'successful' : 'unsuccessful';
        console.log('Copying text command was ' + msg);
    } catch (err) {
        console.log('Unable to copy text...');
    }
    copyText.style.display = "none";
}

//DEBUG
console.log('javaScript loaded');
//