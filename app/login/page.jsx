export const metadata = {
  title: 'login'
};

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-blue-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
            Sign in to your account
          </h2>
        </div>
        <form className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="input"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="input"
                placeholder="Password"
              />
            </div>
          </div>

          <div>
            <button type="submit" className="btn w-full">
              Sign in
            </button>
          </div>
        </form>
        <p className="mt-2 text-center text-sm text-white">
          Or{' '}
          <a href="#" className="font-medium underline text-primary">
            start your 14-day free trial
          </a>
        </p>
      </div>
    </div>
  );
}