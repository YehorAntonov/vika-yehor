function checkRange()
{
    let max = Number.parseInt(document.getElementById('max_id').value);
    let min = Number.parseInt(document.getElementById('min_id').value);
    let x = Number.parseInt(document.getElementById('x_id').value);
    if (Number.isInteger(min) === true && Number.isInteger(max) === true && min > 0 && max <= 200 && x > 0 && x < 16 && Number.isInteger(x) === true)
    {
        alert('Correct range!');
    }
    else
    {
        alert('Wrong range!');
        document.getElementById('max_id').value = '';
        document.getElementById('min_id').value = '';
        document.getElementById('x_id').value = '';
    }
}
function getRandomNumber()
{
    let max = Number.parseInt(document.getElementById('max_id').value);
    let min = Number.parseInt(document.getElementById('min_id').value);
    randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    c = 0;
}
function checkNum()
{
    let num = Number.parseInt(document.getElementById('num_id').value);
    let max = Number.parseInt(document.getElementById('max_id').value);
    let min = Number.parseInt(document.getElementById('min_id').value);
    let x = Number.parseInt(document.getElementById('x_id').value);
    if (num >= min && num <= max && Number.isInteger(num) === true)
    {
        if (c !== x)
        {
            if (num === randomNumber)
            {
                c++;
                alert(`Congratulations! You did it for ${c} tries`);
            }
            else if (num > randomNumber && (num - randomNumber) >= 10)
            {
                c++;
                alert(`Cold, you can try one more time`);
            }
            else if (num > randomNumber && (randomNumber - num) <= 10)
            {
                c++;
                alert(`Hot, you can try one more time`);
            }
            else if (num < randomNumber && (randomNumber - num) <= 10)
            {
                c++;
                alert(`Hot, you can try one more time`);
            }
            else if (num < randomNumber && (randomNumber - num) >= 10)
            {
                c++;
                alert(`Cold, you can try one more time`);
            }

        }
        else
        {
            alert('Sorry, all tries to end!');
            document.getElementById('max_id').value = '';
            document.getElementById('min_id').value = '';
            document.getElementById('x_id').value = '';
            document.getElementById('num_id').value = '';
        }
    }
    else
    {
        alert('Wrong range!');
        document.getElementById('num_id').value = '';
    }

}