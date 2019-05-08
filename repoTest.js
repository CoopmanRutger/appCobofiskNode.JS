// test eerst ne keer elke functie en kijkt of da ie zo wel werkt

const repo = require("./MySqlRepo")

repo.getEmployees(() => {})
repo.getProducts(() => {})
repo.getProductById("1", () => {})
repo.getProductByStoreId("1", () => {})
repo.getDeliveryNotes(() => {})
repo.getDeliveryNotesById("1", () => {})
repo.getProductsByDeliveryNoteId("1", () => {})
repo.getStores(() => {})
repo.getStoresById("1", () => {})
repo.getProductsByStoreId("1", () => {})
repo.getDeliveryNotesByStoreId("1", () => {})
repo.getEmployeesByStoreId("1", () => {})
repo.addEmployee({storeId: "1", name: "rutger",age:"90", duty:"functie", username:"rutger", password:"rutger"}, () => {})

// ja wask van plan thx again
