import { hash, compare } from 'bcrypt';
// função para criptografar senha
export const hashPassword = async (pw) => await hash(pw, 10);
// função para verificar senha 
export const comparePassword = async (pw, pwe) => await compare(pw, pwe);
//# sourceMappingURL=bcrypt.js.map