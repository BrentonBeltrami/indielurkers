import { supabase } from "../../../utils/initSupa";

export default function handler(req, res) {
	supabase.auth.api.setAuthCookie(req, res);
}
