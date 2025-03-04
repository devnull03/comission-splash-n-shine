import { GOOGLE_API_KEY, PLACE_ID } from '$env/static/private';
import type { PageServerLoad } from './$types';
import type { PlaceReviewsResponse, Review } from '$lib/types/reviews';

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




