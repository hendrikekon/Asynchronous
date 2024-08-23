class Table {
    constructor(init) {
      this.columns = init.columns;
      this.data = init.data;
    }
  
    createHeader() {
      const headerCells = this.columns.map(col => `<th>${col}</th>`).join('');
      return `<thead><tr>${headerCells}</tr></thead>`;
    }
  
    createBody() {
      const rows = this.data.map(row => `<tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>`).join('');
      return `<tbody>${rows}</tbody>`;
    }
  
    render(element) {
      const table = 
      `<table class='table table-hover'>
          ${this.createHeader()}
          ${this.createBody()}
        </table>`;
      element.innerHTML = table;
    }
  }
  
  export {Table};
  