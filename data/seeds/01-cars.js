// STRETCH
const cars = [{
    vin: '11111111111111111',
    make: 'toyota',
    model: 'prius',
    mileage: 123000,
    title: 'clean',
    transmission: 'manual'
}, 
{
    vin: '11111411111111111',
    make: 'toyota',
    model: 'corolla',
    mileage: 111000,
    title: 'salvage',
    
},
{
    vin: '11111111111511111',
    make: 'ford',
    model: 'focus',
    mileage: 10000,
}]

exports.seed = function(knex) {
    return knex('cars')
    .truncate().then(() => {
        return knex('cars').insert(cars)
    })
    
}