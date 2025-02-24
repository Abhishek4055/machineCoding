export const CONFIG_DATA = {
  form: {
    title: "User Registration Form",
    sections: [
      {
        title: "Personal Information",
        fields: [
          {
            label: "Full Name",
            name: "fullName",
            type: "text",
            placeholder: "Enter your full name",
            required: true,
          },
          {
            label: "Email",
            name: "email",
            type: "email",
            placeholder: "Enter your email",
            required: true,
          },
          {
            label: "Password",
            name: "password",
            type: "password",
            placeholder: "Enter your password",
            required: true,
          },
        ],
      },
      {
        title: "Preferences",
        fields: [
          {
            label: "Gender",
            name: "gender",
            type: "radio",
            options: [
              { label: "Male", value: "male" },
              { label: "Female", value: "female" },
            ],
            required: true,
          },
          {
            label: "Hobbies",
            name: "hobbies",
            type: "checkbox",
            options: [
              { label: "Reading", value: "reading" },
              { label: "Traveling", value: "traveling" },
              { label: "Sports", value: "sports" },
            ],
          },
        ],
      },
      {
        title: "Additional Details",
        fields: [
          {
            label: "Country",
            name: "country",
            type: "select",
            options: [
              { label: "India", value: "india" },
              { label: "USA", value: "usa" },
              { label: "UK", value: "uk" },
            ],
            required: true,
          },
          {
            label: "Bio",
            name: "bio",
            type: "textarea",
            placeholder: "Tell us about yourself",
          },
        ],
      },
    ],
    actions: {
      submitButton: {
        label: "Register",
      },
    },
  },
};
