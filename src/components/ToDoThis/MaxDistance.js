var maxDistToClosest = function (seats) {
  let maxDistance = 0;
  let lastOccupied = -1;

  // Iterate through the seats to calculate the maximum distance
  for (let i = 0; i < seats.length; i++) {
    if (seats[i] === 1) {
      if (lastOccupied === -1) {
        // Case 1: No one was seated to the left
        maxDistance = i;
      } else {
        // Case 2: Someone is seated both left and right
        maxDistance = Math.max(maxDistance, Math.floor((i - lastOccupied) / 2));
      }
      lastOccupied = i;
    }
  }

  // Case 3: No one seated to the right of the last person
  maxDistance = Math.max(maxDistance, seats.length - 1 - lastOccupied);

  return maxDistance;
};

const value1 = maxDistToClosest([0, 1]);
const value2 = maxDistToClosest([1, 0, 0, 0, 1, 0, 1]);
