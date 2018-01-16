export const fetchData = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/photos");
      
      const data = await response.json();

      //THE JSON IS STILL CORRECT HERE
      //console.log(data);
      return data;
    } catch (e) {
      console.log(e);
    }
  };
  