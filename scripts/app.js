document.getElementById('load-data').addEventListener('click', () => {
    fetch('data.json')
      .then(response => response.json())
      .then(data => {
        const dataList = document.getElementById('data-list');
        dataList.innerHTML = '';
        data.forEach(item => {
          const li = document.createElement('li');
          li.textContent = `ID: ${item.id}, 名字: ${item.name}, 年齡: ${item.age}`;
          dataList.appendChild(li);
        });
      })
      .catch(error => console.error('Error:', error));
  });
  