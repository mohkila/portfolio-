// import { sendEmail } from "@/utils/mail.utils";

// export async function POST() {
//   const sender = {
//     name: "dopyapp agency",
//     email: "mokila1992@gmail.com",
//   };
//   const recipients = [
//     {
//       name: "dopyapp agency",
//       email: "mokila1992@gmail.com",
//     },
//   ];

//   try {
//     const result = await sendEmail({
//       sender,
//       recipients, // fixed typo from "receipients"
//       subject: "New Contact Form Submission",
//       message: "Welcome to dopyapp agency", // fixed typo from "massage"
//     });

//     return new Response(JSON.stringify({ accepted: result.accepted }), {
//       status: 200,
//     });
//   } catch (error) {
//     return new Response(
//       JSON.stringify({ message: "Unable to send email", error }),
//       { status: 500 }
//     );
//   }
// }

import { sendEmail } from "@/utils/mail.utils";

export async function POST(request: Request) {
  const { firstName, lastName, phone, email, option, message } =
    await request.json();

  const sender = {
    name: `${firstName} ${lastName}`,
    email, // Ensure this is valid email format
    address: email, // Assuming address is the email here; modify if needed
  };

  const recipients = ["mokila1992@gmail.com"]; // Single or multiple email recipients

  try {
    const result = await sendEmail({
      sender,
      recipients, // Ensure this is an array of emails
      subject: `New Contact Form Submission: ${option}`,
      message: `
        <p>Name: ${firstName} ${lastName}</p>
        <p>Phone: ${phone}</p>
        <p>Email: ${email}</p>
        <p>Message: ${message}</p>
      `,
    });

    return new Response(JSON.stringify({ accepted: result.accepted }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ message: "Unable to send email", error }),
      { status: 500 }
    );
  }
}
