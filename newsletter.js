async function subscribeNewsletter(btn) {
  const input = btn.previousElementSibling;
  const email = input.value.trim();

  if (!email || !email.includes('@')) {
    alert('Please enter a valid email address.');
    return;
  }

  btn.textContent = 'Subscribing...';
  btn.disabled = true;

  try {
    const response = await fetch('https://oduotnorqggosjcauboz.supabase.co/rest/v1/subscribers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9kdW90bm9ycWdnb3NqY2F1Ym96Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ3MTE4MjAsImV4cCI6MjA5MDI4NzgyMH0.I0afHrH9f1JF-6aJHyXCk_XoZ0__h3TuliJWooBwSGw',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9kdW90bm9ycWdnb3NqY2F1Ym96Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ3MTE4MjAsImV4cCI6MjA5MDI4NzgyMH0.I0afHrH9f1JF-6aJHyXCk_XoZ0__h3TuliJWooBwSGw',
        'Prefer': 'return=minimal'
      },
      body: JSON.stringify({ email })
    });

    if (response.status === 201) {
      btn.textContent = '✓ Subscribed!';
      btn.style.background = '#2d6a4f';
      input.value = '';
      setTimeout(() => {
        btn.textContent = 'Subscribe';
        btn.style.background = '';
        btn.disabled = false;
      }, 4000);
    } else if (response.status === 409) {
      btn.textContent = 'Already subscribed!';
      btn.style.background = '#b5532a';
      setTimeout(() => {
        btn.textContent = 'Subscribe';
        btn.style.background = '';
        btn.disabled = false;
      }, 3000);
    } else {
      throw new Error('Unexpected response');
    }
  } catch (err) {
    alert('Something went wrong. Please try again.');
    btn.textContent = 'Subscribe';
    btn.disabled = false;
  }
}
