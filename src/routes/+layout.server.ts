import type { LayoutServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

// Map of old URLs to their new locations
const redirectMap: Record<string, string> = {
  '/commercial-cleaning': '/services/commercial-cleaning',
  '/burnaby': '/locations/burnaby',
  '/business-commercial-1': '/services/commercial-cleaning',
  '/about-us': '/our-story',
  '/roof-painting': '/services/roof-painting',
  '/window-washing': '/services/window-washing',
  '/gutter-cleaning': '/services/gutter-cleaning',
  '/north-vancouver': '/locations/north-vancouver',
  '/white-rock': '/locations/white-rock',
  '/delta': '/locations/delta',
  '/post-construction-cleanup': '/services/post-construction-cleanup',
  '/new-westminster': '/locations/new-westminster',
  '/abbotsford': '/locations/abbotsford',
  '/coquitlam': '/locations/coquitlam',
  '/richmond': '/locations/richmond',
  '/surrey': '/locations/surrey',
  '/vancouver': '/locations/vancouver',
  '/roof-cleaning-1': '/services/roof-cleaning',
  '/siding-soft': '/services/house-washing',
  '/residential': '/services',
  '/commercial': '/services/commercial-cleaning',
  '/999-deal': '/services/full-house-cleaning',
  '/maple-ridge': '/locations/maple-ridge',
  '/contact-form': '/contact',
  '/port-coquitlam': '/locations/port-coquitlam',
  '/%24999-|-full-house-deal-2': '/services/full-house-cleaning',
  '/full-house-cleaning-deal': '/services/full-house-cleaning',
  '/pressure-washing': '/services/pressure-washing',
  '/commercial-1': '/services/commercial-cleaning'
};

export const load: LayoutServerLoad = async ({ url }) => {
  const path = url.pathname;
  
  // Check if this is an old path that needs to be redirected
  if (path in redirectMap) {
    throw redirect(301, redirectMap[path]);
  }
  
  return {};
};
