class BookIterator {
  collection;

  position = 0;

  constructor(collection) {
    this.collection = collection;
  }

  rewind() {
    this.position = 0;
  }

  current() {
    return this.collection.getItems()[this.position];
  }

  key() {
    return this.position;
  }

  next() {
    const item = this.collection.getItems()[this.position];
    this.position += 1;

    return item;
  }

  valid() {
    return this.position < this.collection.getCount();
  }
}

class BookCollection {
  items = [];

  getItems() {
    return this.items;
  }

  getCount() {
    return this.items.length;
  }

  addItem(item) {
    this.items.push(item);
  }

  getIterator() {
    return new BookIterator(this);
  }
}

const collection = new BookCollection();
collection.addItem("Book-1");
collection.addItem("Book-2");
collection.addItem("Book-3");

const iterator = collection.getIterator();

while (iterator.valid()) {
  console.log(iterator.next());
}
