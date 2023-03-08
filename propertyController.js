class PropertyController {
  constructor(handler, properties) {
    this.properties = properties;
    this.props = new Proxy(
      {
        properties: this.properties,
        filterData: this.filterData.bind(this),
      },
      handler
    );
  }

  async fetchData() {
    const response = await fetch("data.json");
    const data = await response.json();
    this.setData(data);
  }

  setData(data) {
    this.properties = data;
    this.props.properties = data;
  }

  filterData(query = "") {
    this.props.properties = this.properties.filter((item) =>
      item.title.toLowerCase().includes(query)
    );
  }
}

export { PropertyController };
