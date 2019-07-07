describe('example testing against the dom', () => {
  // setup test fixture
  beforeEach(() => {
    const content = document.createElement('div');
    content.id = 'my-content';
    content.innerText = 'Testing...Testing...Testing...Testing...';
    document.body.appendChild(content)
  });

  // teardown test fixture
  afterEach(() => {
    const newEl = document.getElementById('my-content');
    newEl.parentElement.removeChild(newEl);
  })

  it('my-content should be defined', () => {
    const content = document.getElementById('my-content');
    expect(content).not.toBeNull();
  });

  it('your-content should not exist yet', () => {
    const content = document.getElementById('your-content');
    expect(content).toBeNull();
  });
})


describe('example testing against spys', () => {
  it('feature.appendMessage appends a message in a paragraph', () => {
    // feature and method defined in src/main/index.js
    expect(feature.appendMessage).toBe.defined;

    const spy = jasmine.createSpyObj('element', ['appendChild']);
    const testMessage = 'test message';
    // pass the spy object in place of the real HTMLElement
    feature.appendMessage(testMessage, spy);

    // perform assertions on the spy
    expect(spy.appendChild).toHaveBeenCalledTimes(1);

    callArgs = spy.appendChild.calls.allArgs();
    input = callArgs[0][0];
    expect(input.tagName).toBe('P');
    expect(input.innerText).toBe(testMessage);
  });
});
