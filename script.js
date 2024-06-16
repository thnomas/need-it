items = ['carrot','onion']

document.getElementById('myInput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        const inputValue = event.target.value;
        if (inputValue)  {

            const newItem = document.createElement('div');
            newItem.textContent = inputValue;
            newItem.classList.add("item");

            document.getElementById('list').appendChild(newItem);

            event.target.value = '';
            items.push(inputValue)
        }
    }
});