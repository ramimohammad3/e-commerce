import {
  useMutation,
  UseMutationOptions,
  UseMutationResult,
} from "@tanstack/react-query";
import api from "../../clients/wretchClient";

interface SignInResponse {
  token: string;
}

interface SignInRequest {
  email: string;
  password: string;
}

const signIn = async (request: SignInRequest): Promise<SignInResponse> => {
  const response = await api
    .url("/login")
    .post({ username: request.email, password: request.password })
    .json<SignInResponse>();
  return response;
};

export const useSignIn = (
  options?: UseMutationOptions<SignInResponse, Error, SignInRequest, unknown>
): UseMutationResult<SignInResponse, Error, SignInRequest, unknown> => {
  return useMutation<SignInResponse, Error, SignInRequest, unknown>({
    mutationFn: signIn,
    ...options,
  });
};
