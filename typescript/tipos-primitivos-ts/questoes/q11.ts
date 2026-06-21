/*
Crie uma função de segurança chamada checkPermission para um sistema de gerenciamento de conteúdo. A função deve aceitar dois parâmetros estritos:
- role (cargo): Só pode aceitar as strings "admin", "editor" ou "viewer".
- action (ação): Só pode aceitar as strings "delete", "edit" ou "view".
Regras de negócio a implementar:

O "admin" pode realizar qualquer ação (true).
O "editor" pode fazer "edit" e "view", mas não pode "delete".
O "viewer" só pode fazer "view".

Qualquer outra combinação não permitida deve retornar false.
*/

type Role = "admin" | "editor" | "viewer";
type Action = "delete" | "edit" | "view";

function checkPermission(role: Role, action: Action): boolean {
  if (role === "admin") return true;

  if (role === "editor" && (action === "edit" || action === "view"))
    return true;

  if (role === "viewer" && action === "view") return true;

  return false;
}

console.log(checkPermission("admin", "delete"));
console.log(checkPermission("admin", "edit"));
console.log(checkPermission("admin", "view"));
console.log(checkPermission("editor", "delete"));
console.log(checkPermission("editor", "edit"));
console.log(checkPermission("editor", "view"));
console.log(checkPermission("viewer", "delete"));
console.log(checkPermission("viewer", "edit"));
console.log(checkPermission("viewer", "view"));
