export interface LocalizedText {
  text: string;
  languageCode: string;
}

export interface AuthorAttribution {
  displayName: string;
  uri: string;
  photoUri: string;
}

export interface Review {
  name: string;
  relativePublishTimeDescription: string;
  text: LocalizedText;
  originalText?: LocalizedText;
  rating: number;
  authorAttribution: AuthorAttribution;
  publishTime: string;
  flagContentUri: string;
  googleMapsUri: string;
}

export interface PlaceReviewsResponse {
  reviews: Review[];
  rating: number;
  userRatingCount: number;
}
