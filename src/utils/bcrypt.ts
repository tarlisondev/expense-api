import { genSalt, hash, compare } from 'bcrypt';

// função para criptografar senha
export const hashPassword = async (pw: string): Promise<string> => await hash(pw, 10);
// função para verificar senha 
export const comparePassword = async (pw: string, pwe: string): Promise<boolean> => await compare(pw, pwe);
