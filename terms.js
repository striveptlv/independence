(function () {
  'use strict';
  const version = '2026-10-06';
  const url = 'legal/terms-2026-10-06.html';

  async function hasAccepted(client) {
    const { data, error } = await client.rpc('has_accepted_strive_terms', { p_version: version });
    if (error) throw error;
    return data === true;
  }

  async function accept(client) {
    const { error } = await client.rpc('accept_strive_terms', { p_version: version });
    if (error) throw error;
  }

  async function ensureAccepted(client) {
    if (await hasAccepted(client)) return true;
    return new Promise(resolve => {
      const dialog = document.createElement('dialog');
      dialog.className = 'terms-dialog';
      dialog.setAttribute('aria-labelledby', 'termsDialogTitle');
      dialog.innerHTML = `<h2 id="termsDialogTitle">Review our terms</h2>
        <p>Before continuing, please review the Terms and Conditions for Strive Independence, operated by Haraya Wellness LLC.</p>
        <p><a href="${url}" target="_blank" rel="noopener">Read Terms and Conditions (opens in a new tab)</a></p>
        <form><label class="terms-consent"><input type="checkbox" required><span>I have read and agree to the Terms and Conditions, version ${version}.</span></label>
        <p class="terms-error" role="alert"></p><div class="button-row"><button type="submit" class="primary">Accept and continue</button><button type="button" class="secondary" data-decline>Sign out</button></div></form>`;
      document.body.append(dialog);
      const form = dialog.querySelector('form');
      const errorBox = dialog.querySelector('[role="alert"]');
      let saving = false;
      const finish = value => { dialog.close(); dialog.remove(); resolve(value); };
      const decline = async () => {
        if (saving) return;
        saving = true;
        try {
          const { error } = await client.auth.signOut();
          if (error) throw error;
          finish(false);
        } catch (_) {
          errorBox.textContent = 'Sign out failed. Please try again.';
        } finally { saving = false; }
      };
      dialog.addEventListener('cancel', event => { event.preventDefault(); decline(); });
      dialog.querySelector('[data-decline]').addEventListener('click', decline);
      form.addEventListener('submit', async event => {
        event.preventDefault();
        if (saving || !form.reportValidity()) return;
        saving = true;
        const button = form.querySelector('[type="submit"]');
        button.disabled = true;
        errorBox.textContent = '';
        try {
          await accept(client);
          finish(true);
        } catch (_) {
          errorBox.textContent = 'We could not save your acceptance. Please try again. Your access will continue after it is saved.';
        } finally { saving = false; button.disabled = false; }
      });
      dialog.showModal();
    });
  }
  window.StriveTerms = { version, url, hasAccepted, accept, ensureAccepted };
})();
