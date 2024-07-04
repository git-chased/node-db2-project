// STRETCH
const cars = [{
    vin: '1111111111211',
    make: 'toyota',
    model: 'prius',
    mileage: 123000,
    title: 'clean',
    transmission: 'manual'
}, 
{
    vin: '1111113111111',
    make: 'toyota',
    model: 'corolla',
    mileage: 111000,
    title: 'salvage',
    
},
{
    vin: '1111121111111',
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