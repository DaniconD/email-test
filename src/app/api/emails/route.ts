import Welcome from "@/emails/Welcome";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
export async function POST(request: Request) {
	try {
		const { email, firstName } = await request.json();
		const { data, error } = await resend.emails.send({
			from: "onboarding@resend.dev",
			to: email,
			subject: "Welcome!",
			react: Welcome({ firstName }),
		});

		if (error) {
			return Response.json({ error }, { status: 500 });
		}

		return Response.json({ data }, { status: 200 });
	} catch (error) {
		return Response.json({ error }, { status: 500 });
	}
}
