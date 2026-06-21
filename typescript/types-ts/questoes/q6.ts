/* 
Crie o tipo SuccessResponse: { status: "success"; data: string; }

Crie o tipo ErrorResponse: { status: "error"; message: string; }

Crie o tipo ApiResponse que é a união (|) entre SuccessResponse e ErrorResponse.

Crie a função handleApiResponse que recebe uma ApiResponse e retorna uma string:

Se o status for "success", retorna o conteúdo de data.

Se o status for "error", retorna a frase "Erro do Servidor: [message]".
*/


type SuccessResponse = {
  status: "success";
  data: string;
};

type ErrorResponse = {
  status: "error";
  message: string;
};

type ApiResponse = SuccessResponse | ErrorResponse

function handleApiResponse(apiResponse: ApiResponse): string {
    if (apiResponse.status === "success") {
        return apiResponse.data
    } 

    return apiResponse.message
}

const apiResponse1: ApiResponse = {
    status: "success",
    data: "Olá!"
}

const apiResponse2: ApiResponse = {
    status: "error",
    message: "404 Not Found"
}

console.log(handleApiResponse(apiResponse1))
console.log(handleApiResponse(apiResponse2))