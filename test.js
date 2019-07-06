describe('test', ()=>{

  beforeEach(()=>{
    const content = document.createElement('div');
    content.id='my-content';
    content.innerText = 'Testing...Testing...Testing...Testing...';
    document.body.appendChild(content)
  });

  afterEach(()=>{
    const newEl = document.getElementById('my-content');
    newEl.parentElement.removeChild(newEl);
  })

  it('tests', (done)=>{
    const content = document.getElementById('my-content');
    expect(content).not.toBeNull();
    setTimeout(done, 1.5e3)
  });

  it('tests 2', ()=>{
    const content = document.getElementById('my-content');
    expect(content).not.toBeNull();
  });
})