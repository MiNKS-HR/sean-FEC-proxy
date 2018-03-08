//redirects for incoming requests


const redirects = {
    reviews: {
      url: '/reviews/*',
      redirectIP: '127.0.0.1',
      redirectPort: '3001'
    },
    reviewsPublic: {
      url: '/reviews/content/*',
      redirectIP: '127.0.0.1',
      redirectPort: '3001'
    },
    similarExperiencesLocation: {
      url: '/similar/location/*',
      redirectIP: '127.0.0.1',
      redirectPort: '3003'
    },
    similarExperiencesIndex: {
      url: '/similar/id/*',
      redirectIP: '127.0.0.1',
      redirectPort: '3003'
    },
    similarExperiencesContent: {
      url: '/similar/content/*',
      redirectIP: '127.0.0.1',
      redirectPort: '3003'
    },
    upcomingAvailability: {
      url: '/experience/availableDate/*',
      redirectIP: '127.0.0.1',
      redirectPort: '3002'
    },
    photoGallery: {
      url: '/images',
      redirectIP: '127.0.0.1',
      redirectPort: '3004'
    },
    detailsBundle: {
      url: '/details/content/*',
      redirectIP: '127.0.0.1',
      redirectPort: '3005'
    },
    details: {
      url: '/details/*',
      redirectIP: '127.0.0.1',
      redirectPort: '3005'
    }
  }


module.exports = redirects;