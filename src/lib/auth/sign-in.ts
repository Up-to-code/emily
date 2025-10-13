import { authClient } from "@/lib/auth-client";

type SignInArgs = {
    email: string;
    password: string;
    rememberMe?: boolean;
    callbackURL?: string;
};

type AuthSignInResult = {
    data: unknown;
    error: unknown;
};

type AuthSignInHandlerContext = Record<string, unknown> & {
    error?: { message: string };
};

type SignInOptions = {
    onRequest?: (ctx: AuthSignInHandlerContext) => void;
    onSuccess?: (ctx: AuthSignInHandlerContext) => void;
    onError?: (ctx: { error: { message: string } }) => void;
};

export async function signInWithEmail(
    args: SignInArgs,
    options?: SignInOptions
): Promise<AuthSignInResult> {
    const { email, password, callbackURL = "/dashboard", rememberMe = false } = args;
    const { onRequest, onSuccess, onError } = options || {};

    const result = await authClient.signIn.email(
        {
            email,
            password,
            callbackURL,
            rememberMe
        },
        {
            onRequest: (ctx: AuthSignInHandlerContext) => {
                if (onRequest) onRequest(ctx);
                // Show loading
            },
            onSuccess: (ctx: AuthSignInHandlerContext) => {
                if (onSuccess) onSuccess(ctx);
                // Redirect to the dashboard or another page
            },
            onError: (ctx: { error: { message: string } }) => {
                if (onError) onError(ctx);
                // Display the error message
                alert(ctx.error.message);
            }
        }
    );

    return result;
}