<script lang="ts">
  export let provider = '';

  function goAuth() {
    const { pathname } = window.location;
    const redirect = `post_login_redirect_uri=${pathname}`;
    const url = `/.auth/login/${provider}?${redirect}`;
    window.location.href = url;
  }
</script>

<div class="auth-link" on:click={goAuth} on:keypress={goAuth}>{provider}</div>
