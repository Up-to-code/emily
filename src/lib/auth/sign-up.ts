import { authClient } from "@/lib/auth-client"; // import the auth client

type SignUpArgs = {
    email: string;
    password: string;
    name?: string;
    image?: string;
};

type AuthSignUpResult = {
    data: unknown;
    error: unknown;
};

type AuthSignUpHandlerContext = Record<string, unknown> & {
    error?: { message: string };
};

type SignUpOptions = {
    onRequest?: (ctx: AuthSignUpHandlerContext) => void;
    onSuccess?: (ctx: AuthSignUpHandlerContext) => void;
    onError?: (ctx: { error: { message: string } }) => void;
};

export async function signUpWithEmail(
    args: SignUpArgs,
    options?: SignUpOptions
): Promise<AuthSignUpResult> {
    const { email, password, name = "", image = "" } = args;
    const { onRequest, onSuccess, onError } = options || {};

    const result = await authClient.signUp.email(
        {
            email,
            password,
            name,
            image,
            callbackURL: "/dashboard"
        },
        {
            onRequest: (ctx: AuthSignUpHandlerContext) => {
                if (onRequest) onRequest(ctx);
                // Show loading
            },
            onSuccess: (ctx: AuthSignUpHandlerContext) => {
                if (onSuccess) onSuccess(ctx);
                // Redirect to the dashboard or sign in page
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