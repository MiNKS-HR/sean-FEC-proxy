//redirects for incoming requests


const redirects = {
    reviews: {
      url: '/reviews/*/',
      redirectIP: 'http://54.153.115.227/',
      redirectPort: null
    },
    reviewsPublic: {
      url: '/reviews/content/*',
      redirectIP: 'http://54.153.115.227/',
      redirectPort: null
    },
    // similarExperiencesLocation: {
    //   url: '/similar/location/*',
    //   redirectIP: '127.0.0.1',
    //   redirectPort: '3003'
    // },
    // similarExperiencesIndex: {
    //   url: '/similar/id/*',
    //   redirectIP: '127.0.0.1',
    //   redirectPort: '3003'
    // },
    // similarExperiencesContent: {
    //   url: '/similar/content/*',
    //   redirectIP: '127.0.0.1',
    //   redirectPort: '3003'
    // },
    // upcomingAvailability: {
    //   url: '/*/upcomingAvailability',
    //   redirectIP: '127.0.0.1',
    //   redirectPort: null
    // },
    // photoGallery: {
    //   url: '/*/photoGallery',
    //   redirectIP: '127.0.0.1',
    //   redirectPort: null
    // },
    // detailsBundle: {
    //   url: '/details/content/*',
    //   redirectIP: '127.0.0.1',
    //   redirectPort: '3005'
    // },
    // details: {
    //   url: '/details/*',
    //   redirectIP: '127.0.0.1',
    //   redirectPort: '3005'
    // }
  }


module.exports = redirects;