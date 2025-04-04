
import type { Service } from '$lib/data/services';
import CommercialCleaning from './commercial-cleaning.webp?enhanced';
import FullHouseCleaning from './full-house-cleaning.webp?enhanced';
import GutterCleaning from './gutter-cleaning.webp?enhanced';
import PostConstructionCleanup from './post-construction-cleanup.webp?enhanced';
import RoofCleaning from './roof-cleaning.webp?enhanced';
import RoofPainting from './roof-painting.webp?enhanced';
import WindowWashing from './window-washing.webp?enhanced';


export const serviceImages =  [
	CommercialCleaning,
	FullHouseCleaning,
	GutterCleaning,
	PostConstructionCleanup,
	RoofCleaning,
	RoofPainting,
	WindowWashing
]

export type ServiceImageObj = {
	[key: Service]: any;
};

export const serviceImagesDict: ServiceImageObj = {
	'commercial-cleaning': CommercialCleaning,
	'full-house-cleaning': FullHouseCleaning,
	'gutter-cleaning': GutterCleaning,
	'post-construction-cleanup': PostConstructionCleanup,
	'roof-cleaning': RoofCleaning,
	'roof-painting': RoofPainting,
	'window-washing': WindowWashing
};
