const API_URL = "http://localhost:5001/api/auth"; 


// Signup API
export async function signupUser(name, email, password) {
  try {
    const res = await fetch(`${API_URL}/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    return await res.json();
  } catch (err) {
    return { success: false, msg: " Server error: " + err.message };
  }
}


// Login API
export async function loginUser(email, password) {
  try {
    const res = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    return await res.json();
  } catch (err) {
    return { success: false, msg: " Server error: " + err.message };
  }
}
