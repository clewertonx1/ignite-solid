import { v4 as uuidV4 } from "uuid";

class User {
  id?: string;
  name: string;
  email: string;
  admin?: boolean;
  created_at?: Date;
  updated_at?: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
    if (!this.created_at) {
      this.created_at = new Date();
    }
    if (!this.admin) {
      this.admin = false;
    }
    if (!this.updated_at) {
      this.updated_at = new Date();
    }
  }
}

export { User };
