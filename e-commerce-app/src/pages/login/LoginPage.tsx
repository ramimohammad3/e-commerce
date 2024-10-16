import React, { useState } from "react";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import InputController from "@components/input/InputControllerComponent";
import PasswordInput from "@components/passwordInput/PasswordInputComponent";
import * as Theme from "./Theme";
import { useLocales } from "@hooks/useLocales";
import { loginSchema } from "schemas/loginSchema";
import useAuthStore from "@store/authStore";
import { useSignIn } from "services/apis/auth/useLogin";
import { useRoute } from "react-router5";
import LoginPageMeta from "meta/LoginPageMeta";

interface LoginFormInputs {
  email: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const { trans } = useLocales();
  const methods = useForm<LoginFormInputs>({
    resolver: yupResolver(loginSchema),
    defaultValues: loginSchema.cast({}),
  });

  const { router } = useRoute();

  const { handleSubmit } = methods;

  const [submitError, setSubmitError] = useState<string | null>(null);
  const setTokens = useAuthStore((state) => state.setTokens);

  const { mutate: signIn, isPending: isLoading } = useSignIn({
    onSuccess: (data) => {
      setTokens(data.token, "");
      router.navigate("products", {}, { replace: true, reload: true });
      setSubmitError(null);
    },
    onError: (error) => {
      setSubmitError(error.message);
    },
  });

  const navigateToSignup = () => {
    router.navigate("register");
  };
  const onSubmit: SubmitHandler<LoginFormInputs> = (data) => {
    signIn({ email: data.email, password: data.password });
  };

  return (
    <Theme.Body onSubmit={handleSubmit(onSubmit)}>
      <LoginPageMeta />
      <Theme.FormSection>
        <Theme.FormTitle>
          {trans("signin.formTitle", "Sign In")}
        </Theme.FormTitle>
        <Theme.FormSubtitle>
          {trans("signin.formSubtitle", "Please sign in to continue")}
        </Theme.FormSubtitle>
        <FormProvider {...methods}>
          <InputController
            name="email"
            autoComplete="email"
            control={methods.control}
            label={trans("signin.email", { defaultValue: "Email" })}
            placeholder={trans("signin.emailPlaceholder", {
              defaultValue: "Email",
            })}
          />
          <PasswordInput
            name="password"
            autoComplete="current-password"
            control={methods.control}
            label={trans("signin.password", { defaultValue: "Password" })}
            placeholder={trans("signin.passwordPlaceholder", {
              defaultValue: "Password",
            })}
          />
        </FormProvider>
        {submitError && (
          <Theme.Errors>
            {submitError ||
              trans("signin.invalidCredentials", "Invalid credentials")}
          </Theme.Errors>
        )}
        <Theme.Button
          type="submit"
          disabled={isLoading}
          isLoading={isLoading}
          label={trans("signin.submit", "Sign In")}
        />
        <Theme.Button
          type="button"
          onClick={navigateToSignup}
          label={trans("signin.signup", "Sign Up")}
          className="mt-4 bg-green-500 hover:bg-green-600"
        />
      </Theme.FormSection>
    </Theme.Body>
  );
};

export default LoginPage;
