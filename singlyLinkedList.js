function List() {
    this.start = null;

    this.add = function(elem) {
        if (this.start === null) {
            this.start = elem;
            elem.next = null;
            return;
        }
        let current = this.start;
        while (current !== null) {
            if (current.next === null) {
                current.next = elem;
                elem.next = null;
                break;
            }
            current = current.next;
        }
    }

    this.addById = function(elem, id) {
        let current = this.start;
        while (current !== null) {
            if (current.id === id) {
            elem.next = current.next;
            current.next = elem;
            return;
            }
            current = current.next;
        }
    }

    this.delete = function(id) {
        let current = this.start;
        let previous = this.start;

        if (current === null) {
            alert('The list is already empty.');
            return;
        }
        if (current.next === null && current.id === id) {
            this.start = null;
        }

        while (current !== null) {
            if (current.id === id) {
                if (previous === current) {
                    this.start = current.next;
                    current.next = null;
                } else {
                    previous.next = current.next;
                }
                return;
            }
            previous = current;
            current = current.next;
        }
    }

    this.print = function() {
        let current = this.start;
            while (current !== null) {
                console.log(current);
                current = current.next;
            }
        }
}

function Element(id, next) {
    this.id = id;
    this.next = next;
}