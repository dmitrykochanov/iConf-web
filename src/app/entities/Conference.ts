import { Participant } from "./Participant";

export interface Conference {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  participants: Participant[];
}
