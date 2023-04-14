class node {
  // Basic one-way node setup
  constructor(value, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

class linkedList {
  constructor(startNode) {
    this.start = startNode;
  }
  //append
  append(node) {
    let current = this.start;
    while (current.nextNode != null) {
      current = current.nextNode;
    }
    current.nextNode = node;
  }
  //prepend
  prepend(node) {
    node.nextNode = this.start;
    this.start = node;
  }
  // size
  size() {
    let current = this.start;
    let noOfNodes = 1;
    while (current.nextNode != null) {
      noOfNodes++;
      current = current.nextNode;
    }

    return noOfNodes;
  }
  // head
  head() {
    return this.start;
  }
  //tail
  tail() {
    let current = this.start;
    while (current.nextNode != null) {
      current = current.nextNode;
    }
    return current;
  }

  //at (index)
  at(index) {
    let listIndex = this.size() - 1;
    let current = this.start;
    let currentIndex = 0;
    if (listIndex < index) {
      return console.log("Error : N/A");
    }
    while (currentIndex != index) {
      current = current.nextNode;
      currentIndex++;
    }
    return current;
  }
  //pop
  pop() {
    let current = this.start;
    let previous;
    while (current.nextNode != null) {
      previous = current;
      current = current.nextNode;
    }
    previous.nextNode = null;
  }
  //contains certain value
  contains(value) {
    let current = this.start;
    while (current.nextNode != null) {
      if (current.value == value) {
        return true;
      }
      current = current.nextNode;
    }
    return false;
  }
  //find this value
  find(value) {
    let finding;
    let index = 0;
    let size = this.size();
    let result = null;

    do {
      if (index > size - 1) {
        return result;
      }
      finding = this.at(index);
      index++;
    } while (finding.value != value);
    return (result = true);
  }
  //tostring
  tostring() {
    let theList = [];
    let currentIndex = 0;
    let listIndex = this.size() - 1;

    while (currentIndex <= listIndex) {
      theList.push("(" + this.at(currentIndex).value + ")");
      currentIndex++;
    }
    theList.push("null");

    return console.log(theList.join(" -> "));
  }
}
