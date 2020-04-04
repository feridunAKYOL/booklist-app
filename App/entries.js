class Book {
	constructor(title, author, isbn) {
		this.title = title;
		this.author = author;
		this.isbn = isbn;
	}
}
// Event: Add a Book
function addingBook(e) {
	debugger;
	// Prevent actual submit
	e.preventDefault();

	// Get form values
	const title = document.querySelector('#title').value;
	const author = document.querySelector('#author').value;
	const isbn = document.querySelector('#isbn').value;

	// Validate
	if (title === '' || author === '' || isbn === '') {
		UI.showAlert('Please fill in all fields', 'danger');
	} else {
		// Instatiate book
		const book = new Book(title, author, isbn);

		// Add Book to UI
		UI.addBookToList(book);

		// Add book to store
		Store.addBook(book);

		// Show success message
		UI.showAlert('Book Added', 'success');

		// Clear fields
		UI.clearFields();
	}
}
// Event: Remove a Book
function removingBook(e) {
	// Remove book from UI
	UI.deleteBook(e.target);

	// Remove book from store
	Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

	// Show success message
	UI.showAlert('Book Removed', 'success');
}
