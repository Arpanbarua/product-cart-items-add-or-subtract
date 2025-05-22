let incrementBtn = document.querySelector('.inc');
let decrementBtn = document.querySelector('.dec');
let result = document.querySelector(`.txtbox`);

incrementBtn.addEventListener('click', function()
{
    // alert('Good Afternoon!');
    let num = Number(result.value);
    
    if(num+1 < 16)
    {
        num+=1;
        result.value = num;
        decrementBtn.style.cursor = 'pointer';
    }
    else 
    {
        incrementBtn.style.cursor = 'not-allowed';
    }


});

decrementBtn.addEventListener('click', function()
{
    let num  = Number(result.value);

    if(num > 1)
    {
        num--;
        result.value = num;
        incrementBtn.style.cursor = 'pointer';
    }
    else 
    {
        decrementBtn.style.cursor = 'not-allowed';
    }
});
