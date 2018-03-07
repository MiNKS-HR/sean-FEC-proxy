//redirects for incoming requests


const redirects = {
    reviews: {
      url: '/reviews/*',
      redirectIP: '127.0.0.1',
      redirectPort: '3001'
    },
    reviewsPublic: {
      url: '/reviewsContent/*',
      redirectIP: '127.0.0.1',
      redirectPort: '3001'
    },
    similarExperiences: {
      url: '/experience/similar/*',
      redirectIP: '127.0.0.1',
      redirectPort: '3003'
    },
    similarExperiencesIndex: {
      url: '/id/*',
      redirectIP: '127.0.0.1',
      redirectPort: '3003'
    },
    similarExperiencesLocation: {
      url: '/experience/similar/location/*',
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
    photoGalleryApp: {
      url: '/app.js',
      redirectIP: '127.0.0.1',
      redirectPort: '3004'
    }
    details: {
      url: 'experience/details',
      redirectIP: '127.0.0.1',
      redirectPort: '3005';
    }
  }


module.exports = redirects;