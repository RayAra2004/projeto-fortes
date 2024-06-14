function rowTable(id, data){
    const element = document.getElementById(id);
    element.innerHTML += `
        <tr>
            <td>${data[0]}</td>
            <td>${data[1]}</td>
            <td>${data[2]}</td>
            <td>${data[3]}</td>
        </tr>
    `
}