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

  async function ensureAccepted(client, consentGiven = false) {
    if (!consentGiven) return false;
    if (!(await hasAccepted(client))) await accept(client);
    return true;
  }
  window.StriveTerms = { version, url, hasAccepted, accept, ensureAccepted };
})();
