// The whole state of the app

import Room from '@/interface/room';

interface VeilState {
  rooms: Room[];
  wsConnection: WebSocket | null;
}

export default VeilState;
