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
    similarExperiencesLocation: {
      url: '/similar/location/*',
      redirectIP: '54.241.103.135',
      redirectPort: null
    },
    similarExperiencesIndex: {
      url: '/similar/id/*',
      redirectIP: '54.241.103.135',
      redirectPort: null
    },
    similarExperiencesContent: {
      url: '/similar/content/*',
      redirectIP: '54.241.103.135',
      redirectPort: null
    },
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