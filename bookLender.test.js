const {Library, User, user1} = require('./bookLender')
const library = new Library("Genesys Hub")

beforeAll(()=> {
    console.log("Welcome to Book Lender Tests.")
})


test('should not be undefined', () => {
    expect(library).not.toBeUndefined()
})

// test('should have a name property', () => {
//     expect(library).toHaveProperty("getName")
// })

// describe("Has property", ()=> {
//     test('should have property getName', () => {
//         expect(library).toHaveProperty("getName")
//     })

//     test('should have property getUsers', () => {
//         expect(library).toHaveProperty("getUsers")
//     })

//     test('should have property getBooks', () => {
//         expect(library).toHaveProperty("getBooks")
//     })
    
// })

// test('should be an instance of Library', () => {
//     expect(user1).toBeInstanceOf(User)
// })

// test('user1 should have a name of paul ', () => {
//     expect(user1.name).toBe("paul")
// })

afterAll(()=> {
    console.log("Your Book Lender Tests are complete.")
})
