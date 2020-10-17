export default class FetchData {
  BASE_URL = "https://api.spacexdata.com/v4/";

  getResource = async (url) => {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Error ${res.status}`);
    }

    return await res.json();
  };

  getRocket = async () => await this.getResource(this.BASE_URL + "rockets");
  getLaunches = async () => await this.getResource(this.BASE_URL + "launches/past");
  getCompany = async () => await this.getResource(this.BASE_URL + "company");
}
