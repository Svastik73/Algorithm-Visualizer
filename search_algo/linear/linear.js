var container=document.getElementById("array");
function gen_arr(){
    const N=25; // no of elements
    var arr=[];
    for(var i=0;i<N;i++){
        var val=Number(Math.ceil(Math.random()*100));
        arr.push(val);
    }
    arr.sort(function (a, b) {
        return a - b;
    });
    for (var i = 0; i < N; i++) {
        var value = arr[i];
    
        // Creating element div
        var array_ele = document.createElement("div");
        array_ele.classList.add("block"); // add block to arr area 
    
        array_ele.style.height = `${value * 3}px`;
        array_ele.style.transform = `translate(${i * 30}px)`;
    
        var array_ele_label = document.createElement("label");
        array_ele_label.classList.add("block_id");
        array_ele_label.innerText = value;
    
        array_ele.appendChild(array_ele_label);
        container.appendChild(array_ele);
    }
    }
    async function linear(delay = 900) {
        var blocks = document.querySelectorAll(".block");
        var output = document.getElementById("text");
        var num = document.getElementById("inp_num").value;
    
        // Colouring all the blocks violet
        for (var i = 0; i < blocks.length; i += 1) {
            blocks[i].style.backgroundColor = "#6b5b95";
        }
        output.innerText = "";
        var st = 0;
        var flag = 0;
        var t;
        for (var i = 0; i < 25; i++) {
            blocks[i].style.backgroundColor = "yellow";
            var av = Number(blocks[i].childNodes[0].innerText); // label is child of block element!
            // To wait for .1 sec
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, delay)
            );
            if (av == num) {
                t=i;
                output.innerText = "Element Found";
                blocks[i].style.backgroundColor = "#13CE66";
                flag = 1;
                break;
            }
        }
        if (flag == 0) {
            output.innerText = "Not found!";
        }
        for (var i = 0; i < 25; i++) {if(i!=t){blocks[i].style.backgroundColor="#6b5b95";}}
    }
gen_arr();    