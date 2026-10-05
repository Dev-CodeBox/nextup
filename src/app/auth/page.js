import AuthForm from "@/components/auth/AuthForm";

export default function AuthPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-600 via-sky-200 to-sky-400">
      <AuthForm />
    </main>
  );
}