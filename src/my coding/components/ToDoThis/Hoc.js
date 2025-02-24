import React from "react";

const withAuthorization = (WrappedComponent) => {
  return (props) => {
    // Example authentication check
    const isAuthenticated = true; // This should be determined dynamically

    if (isAuthenticated) {
      return <WrappedComponent {...props} />;
    } else {
      return <h3>Please log in first.</h3>;
    }
  };
};

export default withAuthorization;

// Hi  Jodsana,
// My interview was scheduled for today at 5:00 pm, and I waited until 6:00 pm, but no one joined. I would be grateful if you could provide an alternative time for the interview.

// Looking forward to your response.

// Thank and Regards
// Abhishek Anand
// 7091124364
