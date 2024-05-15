import { _$get, _$post } from "@utils/fetching";
import { evaluateResponse } from "@services/utils/index";
import { SuscripcionesServices as types } from "@types"

type SendLoginIN = {
    email_address: string, 
    password: string,
}
type SendLoginPayload = {
    access_token: string, 
    token_type: string;
}

//enviar login 
export async function sendLogin(dataToSend: SendLoginIN) {
    const authToken = "No needed";
    const path = "/auth/login";
    const response = await _$post<SendLoginPayload, SendLoginIN>(
        path, dataToSend, authToken
    );
    return response;
}