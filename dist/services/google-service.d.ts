import { User } from "../types/UserType.js";
export declare const sheetData: () => Promise<Partial<Record<string, any>>[]>;
export declare const createUserSheet: (user: User) => Promise<Partial<Record<string, any>>[]>;
export declare const findUserByEmail: (email: string) => Promise<Partial<Record<string, any>>[]>;
//# sourceMappingURL=google-service.d.ts.map