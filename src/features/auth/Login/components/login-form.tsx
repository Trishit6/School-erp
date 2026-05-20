import { useNavigate, Link } from "react-router-dom"
import { useForm } from "@tanstack/react-form"

import FormInput from "../../../../components/form-input"

import { loginService } from "../../data/api"

export default function LoginForm() {
  const navigate = useNavigate()

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },

    onSubmit: async ({ value }) => {
      try {
        const data = await loginService(
          value.email,
          value.password
        )

        console.log("LOGIN SUCCESS:", data)

        localStorage.setItem(
          "school_user",
          JSON.stringify(data)
        )

        navigate("/profile")
      } catch (error: any) {
        console.error(error)

        alert(
          error?.response?.data?.message ||
            "Login failed"
        )
      }
    },
  })

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          form.handleSubmit()
        }}
        className="space-y-5"
      >
        {/* EMAIL */}
        <form.Field
          name="email"
          validators={{
            onChange: ({ value }) =>
              !value
                ? "Email required"
                : !value.includes("@")
                ? "Invalid email"
                : undefined,
          }}
          children={(field) => (
            <FormInput
              field={field}
              type="email"
              placeholder="Email"
            />
          )}
        />

        {/* PASSWORD */}
        <form.Field
          name="password"
          validators={{
            onChange: ({ value }) =>
              !value
                ? "Password required"
                : value.length < 6
                ? "Minimum 6 characters"
                : undefined,
          }}
          children={(field) => (
            <FormInput
              field={field}
              type="password"
              placeholder="Password"
            />
          )}
        />

        <form.Subscribe
          selector={(state) => [
            state.canSubmit,
            state.isSubmitting,
          ]}
          children={([canSubmit, isSubmitting]) => (
            <button
              type="submit"
              disabled={!canSubmit}
              className="
                w-full
                h-[54px]
                rounded-2xl
                bg-[#0b8ca1]
                text-white
                font-semibold
                hover:bg-[#09798b]
                disabled:bg-slate-300
              "
            >
              {isSubmitting
                ? "Loading..."
                : "Login"}
            </button>
          )}
        />
      </form>

      <div className="mt-7 text-center text-[15px] text-slate-400">
        Don&apos;t have an account?{" "}

        <Link
          to="/register"
          className="font-semibold text-[#0b8ca1]"
        >
          Register
        </Link>
      </div>
    </>
  )
}