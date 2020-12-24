
let cars = []

function printCars() {
    const container = document.getElementById('container-cars');
    let html = '';
    cars.forEach((car) => {
        html += `
        <div class="card col-12 col-md-3 m-2">
            <img src="${car.image}" alt="JEEP"> 
            <span>${car.id}</span>           
            <h3>${car.brand}</h3>
            <span>${car.model}</span>
            <div style="background-color:${car.color}; color:${car.color};">|</div>
            <div>${car.year}</div>
            <div class="price">$ ${car.price}</div>
            <button onclick="deleteCar(${cars.id})" class="mt-2 btn btn-danger">Delete
            </div>`
    });
    container.innerHTML = html;
}


function deleteCar(id) {
    let index = cars.findIndex((car) => car.id == id)
    cars.splice(index, 1);
    printCars();
}

printCars()


function addCars() {

    let brand = document.getElementById('brand').value

    let model = document.getElementById('model').value

    let color = document.getElementById('color').value

    let year = document.getElementById('year').value

    let price = document.getElementById('price').value

    let image = document.getElementById('image').value

    let id = document.getElementById('num-chasis').value

    let newCar = {

        brand,
        model,
        color,
        year,
        price,
        image,
        id
    }
    cars.push(newCar)
    printCars()

    document.getElementById('form-cars').reset();
}