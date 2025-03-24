import { GOOGLE_API_KEY, PLACE_ID } from '$env/static/private';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import type { PlaceReviewsResponse } from '$lib/types/reviews';
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

export const GET: RequestHandler = async () => {
  const currentTime = Date.now();
  
  // Return cached data if it exists and hasn't expired
  if (cache.data && (currentTime - cache.timestamp) < CACHE_EXPIRY) {
    return json(cache.data);
  }
  
  try {
    // Construct the URL with the required fields
    const fields = 'reviews,rating,userRatingCount';
    const url = `https://places.googleapis.com/v1/places/${PLACE_ID}?fields=${fields}&key=${GOOGLE_API_KEY}`;
    
    // Fetch data from the Google Places API
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Failed to fetch reviews: ${response.status} ${response.statusText}`);
    }

    const data = await response.json() as PlaceReviewsResponse;
    
    // Update cache
    cache.data = data;
    cache.timestamp = currentTime;
    
    return json(data);
  } catch (error) {
    console.error('Error fetching Google reviews:', error);
    
    // Return empty data or cached data if it exists (even if expired)
    return json(cache.data || {
      reviews: [],
      rating: 0,
      userRatingCount: 0
    });
  }
};
