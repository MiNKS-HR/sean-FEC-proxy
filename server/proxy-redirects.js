//redirects for incoming requests


const redirects = {
    reviews: {
      url: '/*/reviews',
      redirectIP: '127.0.0.1',
      redirectPort: 3001
    },
    reviewsPublic: {
      url: '/content/*',
      redirectIP: '127.0.0.1',
      redirectPort: 3001
    },
    similarExperiences: {
      url: '/*/similarExperiences',
      redirectIP: '127.0.0.1',
      redirectPort: null
    },
    upcomingAvailability: {
      url: '/*/upcomingAvailability',
      redirectIP: '127.0.0.1',
      redirectPort: null
    },
    photoGallery: {
      url: '/*/photoGallery',
      redirectIP: '127.0.0.1',
      redirectPort: null
    },
    details: {
      url: '/*/details',
      redirectIP: '127.0.0.1',
      redirectPort: null
    }
  }


module.exports = redirects;