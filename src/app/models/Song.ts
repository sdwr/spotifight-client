import {Track} from './track';
export interface Song {
	trackId: string;
	trackObj: Track;
	roomId: string;
	userId: string;
	score: number;
	duration_ms: number;
	elapsed_ms: number;
	startTime: any;
}