import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router";
import api, { setAccessToken } from "../api/axios";
import { useAuth } from "../context/AuthContext";

const GoogleAuthSuccess = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { setUserFromGoogle } = useAuth();

  useEffect(() => {
    const handleGoogleAuth = async () => {
      const accessToken = searchParams.get("accessToken");

      if (!accessToken) {
        navigate("/login");
        return;
      }

      try {
        // Store the access token in memory
        setAccessToken(accessToken);

        // Verify and get user data
        const { data } = await api.get("/auth/verify");
        setUserFromGoogle(data.user);

        navigate("/dashboard");
      } catch {
        navigate("/login");
      }
    };

    handleGoogleAuth();
  }, [searchParams, navigate, setUserFromGoogle]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="text-center">
        <div className="inline-block w-8 h-8 border-2 border-white/20 border-t-indigo-500 rounded-full animate-spin mb-4" />
        <p className="text-white/60 text-sm">Completing sign in...</p>
      </div>
    </div>
  );
};

export default GoogleAuthSuccess;
