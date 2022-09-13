// Solution - 1

class restaurantManager {
    restaurantList = [{
        id: 1,
        restaurantName: 'KFC',
        address: 'Anand Vihar',
        city: 'Delhi'
    },
    {
        id: 2,
        restaurantName: 'Domino',
        address: 'Savita Vihar',
        city: 'Delhi'
    },
    {
        id: 3,
        restaurantName: 'Burger King',
        address: 'Civil Lines',
        city: 'Pune'
    },
    {
        id: 4,
        restaurantName: 'Subway',
        address: 'Cantonment',
        city: 'Mumbai'
    }]

    printAllRestaurantNames = () => {
        return this.restaurantList.map((restaurant) => {console.log(restaurant.restaurantName);
        });
    }

    filterRestaurantByCity(cityName) {
        return this.restaurantList.filter((obj) => obj.city == cityName);
      }
    }
    
    var restaurantList = [
      { name: "KFC", address: "Anand Vihar", city: "Delhi" },
      { name: "Domino", address: "Savita Vihar", city: "Delhi" },
      { name: "Burger King", address: "Civil Lines", city: "Pune" },
      { name: "Subway", address: "Cantonment", city: "Mumbai" },
    ];
  

    const restaurantObj = new restaurantManager(restaurantList);
    restaurantObj.printAllRestaurantNames(); 
    console.log(restaurantObj.filterRestaurantByCity("Delhi"));
    console.log(restaurantObj.filterRestaurantByCity("Pune"));
    console.log(restaurantObj.filterRestaurantByCity("Mumbai"));
    
    