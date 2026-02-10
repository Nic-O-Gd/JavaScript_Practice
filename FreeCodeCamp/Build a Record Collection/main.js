/*
The updateRecords function takes 4 arguments represented by the following function parameters:

records - an object containing several individual albums
id - a number representing a specific album in the records object
prop - a string representing the name of the album’s property to update
value - a string containing the information used to update the album’s property

1. Your function must always return the entire records object.

2. If value is an empty string, delete the given prop property from the album.

3. If prop isn't tracks and value isn't an empty string, assign the value to that album's prop.

4. If prop is tracks and value isn't an empty string, but the album doesn't have a tracks property, create an empty array and add value to it.

5. If prop is tracks and value isn't an empty string, add value to the end of the album's existing tracks array.
 */

const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

const updateRecords = (records, id, prop, value) => {
  if (value === "") {
    delete records[id][prop];
  } else if (prop !== "tracks" && value !== true) {
    records[id][prop] = value;
  } else if (prop === "tracks" && value !== true) {
    if (!records[id][prop]) {
      records[id][prop] = [];
    }
    records[id][prop].push(value);
  }
  return records;
}
