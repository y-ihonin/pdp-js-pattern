class FileSystemComponent {
    constructor(name) {
        this.name = name;
    }

    getSize() {
        throw new Error("Must implement getSize()");
    }

    print() {
        throw new Error("Must implement print()");
    }
}

class File extends FileSystemComponent {
    constructor(name, size) {
        super(name);
        this.size = size;
    }

    getSize() {
        return this.size;
    }

    print() {
        console.log(`File: ${this.name} (${this.size} bytes)`);
    }
}

class Directory extends FileSystemComponent {
    constructor(name) {
        super(name);
        this.children = [];
    }

    add(component) {
        this.children.push(component);
    }

    getSize() {
        return this.children.reduce((total, child) => total + child.getSize(), 0);
    }

    print() {
        console.log(`Directory: ${this.name} (${this.getSize()} bytes)`);
        this.children.forEach(child => child.print());
    }
}

const root = new Directory("Root");
const docs = new Directory("Documents");
const images = new Directory("Images");

docs.add(new File("readme.txt", 100));
images.add(new File("photo.jpg", 200));
root.add(docs);
root.add(images);
root.add(new File("config.json", 50));

console.log("File System:");
root.print();
