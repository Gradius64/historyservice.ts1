// TODO: Define a City class with name and id properties
class City {
  // Define properties
  id: number;
  name: string;

  // Constructor to initialize properties
  constructor(id: number, name: string) {
      this.id = id;
      this.name = name;
  }

  // Method to display city information
  displayInfo(): string {
      return `City ID: ${this.id}, City Name: ${this.name}`;
  }
}

// Example usage
const city1 = new City(1, "New York");
console.log(city1.displayInfo()); 

// TODO: Complete the HistoryService class
class HistoryService {
  // TODO: Define a read method that reads from the searchHistory.json file
  

    
    // Define the path to the searchHistory.json file
 
      
      


    
  // private async read() {}
  // TODO: Define a write method that writes the updated cities array to the searchHistory.json file
  // private async write(cities: City[]) {}
  // TODO: Define a getCities method that reads the cities from the searchHistory.json file and returns them as an array of City objects
  // async getCities() {}
  // TODO Define an addCity method that adds a city to the searchHistory.json file
  // async addCity(city: string) {}
  // * BONUS TODO: Define a removeCity method that removes a city from the searchHistory.json file
  // async removeCity(id: string) {}


export default new HistoryService();
