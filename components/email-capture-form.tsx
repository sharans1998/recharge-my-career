"use client";

import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";

function EmailCaptureForm({ formId = "9zCEykqaZaus", emailFieldId = "du1M" }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<{ email: string }>();

  enum FORM_STATE {
    unfilled = "unfilled",
    loading = "loading",
    success = "success",
  }

  const [formState, setFormState] = useState<FORM_STATE>(FORM_STATE.unfilled);

  const submitForm = async (data: { email: string }) => {
    const body = {
      formId: formId,
      submissions: [
        {
          submissionTime: new Date().toString().replace(/\s*\(.*\?\)\s*/, ""),
          questions: [
            {
              id: emailFieldId,
              value: data.email,
            },
          ],
        },
      ],
    };

    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (response.ok) {
        setFormState(FORM_STATE.success);
      } else {
        console.error("Form submission failed:", await response.text());
        setFormState(FORM_STATE.unfilled);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setFormState(FORM_STATE.unfilled);
    }
  };

  const onSubmit = (data: { email: string }) => {
    setFormState(FORM_STATE.loading);
    submitForm(data);
  };

  return (
    <div className="w-full">
      {formState === FORM_STATE.unfilled && (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <div className="flex gap-2 border rounded-lg">
            <Controller
              name="email"
              control={control}
              rules={{
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Invalid email address",
                },
              }}
              render={({ field }) => (
                <input
                  {...field}
                  id="email"
                  type="email"
                  className="w-full rounded-md border-gray-300 bg-white p-2 text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="Enter your Email*"
                  value={field.value || ""}
                />
              )}
            />
            <button
              type="submit"
              className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition-all m-1"
            >
              Submit
            </button>
          </div>
          {errors.email && (
            <p className="mt-2 text-sm text-red-500">
              {typeof errors.email?.message === "string"
                ? errors.email.message
                : ""}
            </p>
          )}
        </form>
      )}
      {formState === FORM_STATE.loading && (
        <div className="w-full text-center">
          <p>Submitting...</p>
        </div>
      )}
      {formState === FORM_STATE.success && (
        <div className="w-full text-center">
          <p>Thank you for subscribing!</p>
        </div>
      )}
    </div>
  );
}

export default EmailCaptureForm;
