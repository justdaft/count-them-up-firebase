export * from './backend.service';
export * from './models';

import { BackendService } from './backend.service';

export const BACKEND_PROVIDERS: any[] = [
	BackendService
];
