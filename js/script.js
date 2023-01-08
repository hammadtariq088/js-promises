// getting data from api
const fetchData = () => {
  const response = fetch('https://jsonplaceholder.typicode.com/users')
  response
    .then(res => res.json())
    .then(res => {
      let tableBody = document.getElementById('tableBody')
      res.forEach(data => {
        tableBody.innerHTML += `
      <tr>
          <td>${data.id}</td>
          <td>${data.name}</td>
          <td>${data.email}</td>
          <td>${data.address.street}, ${data.address.suite}, ${data.address.city}, ${data.address.zipcode}</td>
      </tr>
      `
      })
    })
}
window.onload = fetchData()
