import { GOOGLE_API_KEY, PLACE_ID } from '$env/static/private';
import type { PageServerLoad } from './$types';
import type { PlaceReviewsResponse, Review } from '$lib/types/reviews';
import { dev } from '$app/environment';

// Cache structure
interface Cache {
  data: PlaceReviewsResponse | null;
  timestamp: number;
}

// Cache with one hour expiry
const CACHE_EXPIRY = 60 * 60 * 1000; // 1 hour in milliseconds
const cache: Cache = {
  data: null,
  timestamp: 0
};

export const load: PageServerLoad = async (): Promise<PlaceReviewsResponse> => {
  const currentTime = Date.now();
  
  // Return cached data if it exists and hasn't expired
  if (cache.data && (currentTime - cache.timestamp) < CACHE_EXPIRY) {
    return cache.data;
  }

  if (dev) {
    // Return mock data for development
    return {
      reviews: [
      {
        authorAttribution: {
        displayName: 'John Doe',
        uri: 'https://example.com/johndoe',
        photoUri: 'https://example.com/photo1.jpg'
        },
        rating: 5,
        text: {
        text: 'Great service! My car looks brand new after the detailing. Highly recommend to everyone.',
        languageCode: 'en'
        },
        name: 'reviews/1',
        relativePublishTimeDescription: '2 weeks ago',
        publishTime: '2023-10-15T13:45:30Z',
        flagContentUri: '',
        googleMapsUri: 'https://maps.google.com/maps?cid=1'
      },
      {
        authorAttribution: {
        displayName: 'Sarah Williams',
        uri: 'https://example.com/sarah',
        photoUri: 'https://example.com/photo2.jpg'
        },
        rating: 4,
        text: {
        text: 'Professional staff and reasonable prices. Could improve on timeliness.',
        languageCode: 'en'
        },
        name: 'reviews/2',
        relativePublishTimeDescription: '1 month ago',
        publishTime: '2023-09-20T10:15:00Z',
        flagContentUri: '',
        googleMapsUri: 'https://maps.google.com/maps?cid=2'
      },
      {
        authorAttribution: {
        displayName: 'Michael Chen',
        uri: 'https://example.com/michael',
        photoUri: 'https://example.com/photo3.jpg'
        },
        rating: 5,
        text: {
        text: 'Best car wash in town! They pay attention to every detail.',
        languageCode: 'en'
        },
        name: 'reviews/3',
        relativePublishTimeDescription: '3 days ago',
        publishTime: '2023-10-28T16:30:45Z',
        flagContentUri: '',
        googleMapsUri: 'https://maps.google.com/maps?cid=3'
      }
      ],
      rating: 4.7,
      userRatingCount: 142
    }
  }
  
  try {
    // Construct the URL with the required fields
    const fields = 'reviews,rating,userRatingCount';
    const url = `https://places.googleapis.com/v1/places/${PLACE_ID}?fields=${fields}&key=${GOOGLE_API_KEY}`;
    
    // Fetch data from the Google Places API
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': GOOGLE_API_KEY,
        'X-Goog-FieldMask': fields
      }
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch reviews: ${response.status} ${response.statusText}`);
    }

    const data = await response.json() as PlaceReviewsResponse;
    
    // Update cache
    cache.data = data;
    cache.timestamp = currentTime;
    
    return data;
  } catch (error) {
    console.error('Error fetching Google reviews:', error);
    
    // Return empty data or cached data if it exists (even if expired)
    return cache.data || {
      reviews: [],
      rating: 0,
      userRatingCount: 0
    };
  }
};




