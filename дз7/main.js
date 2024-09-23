const root = document.getElementById('root');
    const loader = document.getElementById('loader');
    loader.style.display = 'block';

    fetch(`https://jsonplaceholder.typicode.com/users`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            loader.style.display = 'none';
            console.log(data);
            data.forEach(element => {
                root.innerHTML += `
                    <div>
                        <h1>Name: ${element.name}</h1>
                        <p>Username: ${element.username}</p>
                        <p>Email: ${element.email}</p>
                        <p>Id: ${element.id}</p>
                        <hr />
                    </div>`;
            });
        })
        .catch((error) => {
            loader.style.display = 'block';
            console.error('Error fetching data:', error);
        });