class Stack {
  constructor() {
    this.top = -1;
    this.items = [];
  }

  get peek() {
    return this.items[this.top];
  }

  push(value) {
    this.top += 1;
    this.items[this.top] = value;
  }

  pop() {
    this.top -= 1;
    this.items.length = this.top + 1;
  }
}

describe("My Stack", () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  test("is created empty", () => {
    expect(stack.top).toBe(-1);
  });

  test("can pushed to top", () => {
    stack.push("tdd!");

    expect(stack.top).toBe(0);
    expect(stack.peek).toBe("tdd!");
  });

  test("can pop off", () => {
    stack.push("tdd!");
    stack.push("5");
    stack.pop();

    expect(stack.top).toBe(0);
    expect(stack.peek).toEqual("tdd!");
  });
});
