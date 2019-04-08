export interface Room {
  _id?: string;
  name: string;
  description: string;
  thumbnail: string;
  currentSong: any;
  users: any[];
  extraData?: any;
}