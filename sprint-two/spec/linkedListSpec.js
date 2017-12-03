describe('linkedList', function() {
  var linkedList;

  beforeEach(function() {
    linkedList = LinkedList();
  });

  it('should have a head and tail', function() {
    expect(linkedList).to.have.property('head');
    expect(linkedList).to.have.property('tail');
  });

  it('should have methods named "addToTail", "removeHead", and "contains"', function() {
    expect(linkedList.addToTail).to.be.a('function');
    expect(linkedList.removeHead).to.be.a('function');
    expect(linkedList.contains).to.be.a('function');
  });

  it('should designate a new tail when new nodes are added', function() {
    linkedList.addToTail(4);
    expect(linkedList.tail.value).to.equal(4);
    linkedList.addToTail(5);
    expect(linkedList.tail.value).to.equal(5);
  });

  it('should remove the head from the list when removeHead is called', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    expect(linkedList.head.value).to.equal(4);
    linkedList.removeHead();
    expect(linkedList.head.value).to.equal(5);
  });

  it('should return the value of the former head when removeHead is called', function() {
    linkedList.addToTail(4);
    expect(linkedList.removeHead()).to.equal(4);
  });

  it('should contain a value that was added', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    expect(linkedList.contains(4)).to.equal(true);
    expect(linkedList.contains(5)).to.equal(true);
    expect(linkedList.contains(6)).to.equal(false);
  });

  it('should not contain a value that was removed', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    linkedList.removeHead();
    expect(linkedList.contains(4)).to.equal(false);
  });

  xit('should create a new node to be inserted', function() {
    linkedList.addToTail(2);
    linkedList.addToTail(7);
    linkedList.addAfter(linkedList.lookup(2, linkedList.head), 4);
    expect(linkedList.contains(4).to.equal(true));
  });

  xit('should make new node\'s previous property point to original reference node', function() {
    linkedList.addToTail(2);
    linkedList.addToTail(7);
    linkedList.addAfter(linkedList.lookup(2, linkedList.head), 4);
    expect(linkedList.lookup(4, linkedList.head).previous).to.equal(linkedList.lookup(2, linkedList.head));
  });

  xit('should make new node\'s next property point to the original reference node\'s old next property', function() {
    linkedList.addToTail(2);
    linkedList.addToTail(7);
    linkedList.addAfter(linkedList.lookup(2, linkedList.head), 4);
    expect(linkedList.lookup(4, linkedList.head).next).to.equal(linkedList.lookup(7));
  });

  xit('should change original reference node\'s next property to point to new node', function() {
    linkedList.addToTail(2);
    linkedList.addToTail(7);
    linkedList.addAfter(linkedList.lookup(2, linkedList.head), 4);
    expect(linkedList.lookup(2, linkedList.head).next).to.equal(linkedList.lookup(4, linkedList.head));
  });

  xit('should change original reference node\'s old next\'s previous property to point to new node', function() {
    linkedList.addToTail(2);
    linkedList.addToTail(7);
    linkedList.addAfter(linkedList.lookup(2, linkedList.head), 4);
    expect(linkedList.lookup(7, linkedList.head).previous).to.equal(linkedList.lookup(4, linkedList.head));
  });

  it('should find a node that has been added', function() {
    linkedList.addToTail(4);
    expect(linkedList.lookup(4, linkedList.head)).to.be.a('object');
    expect(linkedList.lookup(4, linkedList.head)).to.have.property('next');
    expect(linkedList.lookup(4, linkedList.head)).to.have.property('previous');
    expect(linkedList.lookup(5, linkedList.head)).to.equal(undefined);
  });

});
