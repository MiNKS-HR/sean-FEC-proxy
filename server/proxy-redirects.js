//redirects for incoming requests


const redirects = {
    reviews: {
      url: '/reviews/*/',
      redirectIP: '54.153.115.227',
      redirectPort: null
    },
    reviewsPublic: {
      url: '/reviews/content/*',
      redirectIP: '54.153.115.227',
      redirectPort: null
    },
    // similarExperiencesLocation: {
    //   url: '/similarExperience/location/*',
    //   redirectIP: '13.56.28.204',
    //   redirectPort: null
    // },
    // similarExperiencesIndex: {
    //   url: '/similarExperience/id/*',
    //   redirectIP: '13.56.28.204',
    //   redirectPort: null
    // },
    // similarExperiencesContent: {
    //   url: '/similarExperience/content/*',
    //   redirectIP: '13.56.28.204',
    //   redirectPort: null
    // },

    upcomingAvailabilityContent: {
      url: '/availability/content/*',
      redirectIP: '52.9.177.164',
      redirectPort: null
    },
    upcomingAvailabilityDates: {
      url: '/experience/availableDate/*',
      redirectIP: '52.9.177.164',
      redirectPort: null
    },
    // photoGallery: {
    //   url: '/*/photoGallery',
    //   redirectIP: '127.0.0.1',
    //   redirectPort: null
    // },
    detailsBundle: {
      url: '/details/content/*',
      redirectIP: '54.176.214.18',
      redirectPort: null
    },
    details: {
      url: '/details/*',
      redirectIP: '54.176.214.18',
      redirectPort: null
    }
  }


module.exports = redirects;