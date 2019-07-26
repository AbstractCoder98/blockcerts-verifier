import { html } from '@polymer/lit-element';
import CSS from './_components.fullscreen-certificate-css';
import '../../atoms/CertificateDetails/index';
import '../../atoms/FullCertificateV1';
import '../../molecules/VerifyButton';
import '../FullCertificate';

export default function FullScreenCertificate ({
  hasCertificateDefinition,
  displayHTML
}) {
  if (!hasCertificateDefinition) {
    return null;
  }

  if (!displayHTML) {
    return null;
  }

  return html`
    ${CSS}
    <section class='buv-c-fullscreen-certificate'>
      <header><buv-verify-button class='buv-c-fullscreen-certificate__button'></buv-verify-button></header>
      <section class="buv-c-fullscreen-certificate__content">
        <div class='buv-c-fullscreen-certificate__details'>
          <buv-certificate-details class='buv-c-fullscreen-certificate__details-list'></buv-certificate-details>
        </div>
        <div class='buv-c-fullscreen-certificate__certificate'>
          <buv-full-certificate></buv-full-certificate>
        </div>
      </section>
    </section>
  `;
}
