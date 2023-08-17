// STRETCH
const cars = [
    {
    vin: '123456789101',
    make: 'toyota',
    model: 'prius',
    mileage: 215000,
    title: 'clean',
    transmission: 'manual'
},
{
    vin: '123456789102',
    make: 'toyota',
    model: 'corolla',
    mileage: 216000,
    title: 'salvage',
    
},
{
    vin: '123456789103',
    make: 'ford',
    model: 'focus',
    mileage: 21500,
   
}
]

// exports.seed = function(knex) {
//     return knex('cars')
//     .truncate().then(() => {
//         return knex('cars').insert(cars)
//     })
// }
exports.seed = async function (knex) {
    await knex('cars').truncate()
    await knex('cars').insert(cars)
}