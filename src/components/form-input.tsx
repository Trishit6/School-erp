import { FieldInfo } from "../features/auth/Login/components/field-info"

type Props = {
  field: any
  type?: string
  placeholder?: string
}

export default function FormInput({
  field,
  type = "text",
  placeholder,
}: Props) {
  return (
    <div>
      <input
        type={type}
        value={field.state.value}
        onBlur={field.handleBlur}
        onChange={(e) =>
          field.handleChange(e.target.value)
        }
        placeholder={placeholder}
        className="
          w-full
          h-[54px]
          rounded-2xl
          border
          border-slate-200
          px-5
          text-[15px]
          outline-none
          transition
          focus:border-[#0b8ca1]
        "
      />

      <FieldInfo field={field} />
    </div>
  )
}