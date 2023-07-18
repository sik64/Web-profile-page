
    const empty = document.querySelector(".empty");
    const text = document.querySelector(".text");
    let i = 0;
    function typing(){
        if (i < content.length) {
        let txt2 = content.charAt(i);
        text.innerHTML += txt2=== "\n" ? "<br/>": txt2;
        i++;

        if(i == content.length){
            setInterval(typing2, 1)
        }
    }
    }
    // setTimeout(setInterval,1000,typing,10)
    setInterval(typing, 100)
    
    
    const image = document.querySelector(".image");
    let ii = 0;
    function typing2(){
        if (ii < asciicode.length) {
        let txt2 = asciicode.charAt(ii);
        image.innerHTML += txt2=== "\n" ? "<br/>": txt2;
        ii++;
        
        if(ii ==asciicode.length) {
            emptyPress()
            setTimeout(endboxAppear,1)
        }
    }
    }
    // setTimeout(setInterval,129000,typing2,0.1)
    // setInterval(typing2, 100)

    const endbox = document.getElementById("endBox")
    // console.log(endbox)

    function endboxAppear(){endbox.style.display = 'flex'}
    function emptyPress(){empty.style.height ='1px'}
    // endboxAppear()

