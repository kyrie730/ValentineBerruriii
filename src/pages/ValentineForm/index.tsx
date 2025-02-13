import { Card, TextField, Typography } from "@mui/material";
import { useCallback, useMemo, useState } from "react";
import Swal from "sweetalert2";
import bgImage from "../../assets/tulip_field.png";

export function ValentineForm() {
  const [name, setName] = useState("");
  const [reason, setReason] = useState("");
  const [submit, setSubmit] = useState(false);
  const [validate, setValidate] = useState(false);
  const [_, setCopied] = useState(false);
  const url = useMemo(() => {
    return `${import.meta.env.VITE_URL}for-you?name=${encodeURIComponent(
      name
    )}&reason=${encodeURIComponent(reason)}`;
  }, [name, reason, submit]);

  const showAlert = useCallback(() => {
    Swal.fire({
      title: "From Berruriii:",
      text: "Link copied! Share it to your significant one ❤",
      icon: "info",
      confirmButtonText: "OK",
    });
  }, []);

  const copyToClipboard = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
      showAlert();
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  }, [url]);

  const openUrl = useCallback(() => {
    window.open(url, "_blank");
  }, [url]);

  return (
    <div className="flex flex-col h-screen w-screen bg-[#fcd4dc]">
      <div
        style={{ backgroundImage: `url(${bgImage})` }}
        className="flex flex-col h-23/24 w-screen p-0 justify-center items-center bg-cover bg-bottom"
      >
        <Card
          sx={{
            backgroundColor: "rgba(255,199,189,0.8)",
            backdropFilter: "blur(10px)",
          }}
          className=" flex flex-col justify-center items-center gap-10 p-6"
        >
          <div className="text-5xl text-white text-center font-bold">
            Ask them to be your valentine!
          </div>
          <div className="flex flex-col w-full sm:w-3/4 gap-5 p-6 sm:p-0">
            <TextField
              label="Their first name"
              onChange={(e) => setName(btoa(e.target.value))}
              disabled={submit}
              error={name == "" && validate}
              helperText={
                name == "" && validate && "Please tell us their name :("
              }
              variant="filled"
              className="w-full"
              sx={{
                input: { color: "white" }, // Text color
                label: { color: "white" }, // Label color
                "& .MuiInputBase-root": {
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                }, // Semi-transparent background
                "& .MuiInputLabel-root.Mui-focused": { color: "white" }, // Focused label color
                "& .MuiFilledInput-underline:before": {
                  borderBottom: "2px solid white",
                }, // Bottom border before focus
                "& .MuiFilledInput-underline:after": {
                  borderBottom: "2px solid white",
                }, // Bottom border after focus
              }}
            />
            <TextField
              label="Why do you want them to be your valentine?"
              onChange={(e) => setReason(btoa(e.target.value))}
              disabled={submit}
              error={reason == "" && validate}
              helperText={
                reason == "" && validate && "Please tell us your reason :("
              }
              variant="filled"
              sx={{
                input: { color: "white" }, // Text color
                label: { color: "white" }, // Label color
                "& .MuiInputBase-root": {
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                }, // Semi-transparent background
                "& .MuiInputLabel-root.Mui-focused": { color: "white" }, // Focused label color
                "& .MuiFilledInput-underline:before": {
                  borderBottom: "2px solid white",
                }, // Bottom border before focus
                "& .MuiFilledInput-underline:after": {
                  borderBottom: "2px solid white",
                }, // Bottom border after focus
              }}
            />
          </div>
          {submit ? (
            <div className="flex flex-col gap-3 text-xl text-white max-w-screen items-center">
              <div>Copy and share the valentine card to them!</div>
              <div className="flex gap-5">
                <button
                  className="bg-[#FF6B81] text-white px-6 py-2 rounded-lg font-bold hover:bg-[#E05A6C] transition"
                  onClick={openUrl}
                >
                  Preview
                </button>
                <button
                  className="bg-[#FF6B81] text-white px-6 py-2 rounded-lg font-bold hover:bg-[#E05A6C] transition"
                  onClick={copyToClipboard}
                >
                  Copy Link
                </button>
              </div>
            </div>
          ) : (
            <button
              onClick={() => {
                if (name != "" && reason != "") {
                  setSubmit(true);
                } else {
                  setValidate(true);
                }
              }}
              className="bg-[#FF6B81] text-white px-6 py-2 rounded-lg font-bold hover:bg-[#E05A6C] transition"
            >
              Submit
            </button>
          )}
        </Card>
      </div>
      <div className="flex justify-between px-3 items-center h-1/24 text-xs text-white">
        <Typography>@adriantowijaya_</Typography>
        <Typography>AWE x Berruriii</Typography>
        <Typography>@berruriii</Typography>
      </div>
    </div>
  );
}
