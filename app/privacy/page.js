import Link from 'next/link';

export const metadata = {
  title: 'Privacyverklaring – HB Infinite',
  description: 'Hoe HB Infinite omgaat met persoonsgegevens die via deze website worden verstuurd.',
};

const LAATST_BIJGEWERKT = '12 september 2026';

export default function Privacy() {
  return (
    <>
      <nav>
        <div className="nav-logo">HB∞</div>
        <ul className="nav-links">
          <li><Link href="/#diensten">Diensten</Link></li>
          <li><Link href="/#contact">Contact</Link></li>
          <li><Link href="/">Home</Link></li>
        </ul>
      </nav>

      <section className="section legal">
        <p className="section-label">Juridisch</p>
        <h1 className="section-title">Privacyverklaring</h1>

        <p className="legal-intro">
          HB Infinite verwerkt persoonsgegevens van bezoekers die via deze website contact
          opnemen. In deze verklaring leggen we uit welke gegevens dat zijn, waarom we ze
          verwerken en welke rechten je hebt. Laatst bijgewerkt op {LAATST_BIJGEWERKT}.
        </p>

        <h2>1. Wie is verantwoordelijk voor je gegevens?</h2>
        <p>
          De verwerkingsverantwoordelijke in de zin van de AVG is:
        </p>
        <ul className="legal-gegevens">
          <li><b>HB Infinite</b></li>
          <li>[VESTIGINGSADRES]</li>
          <li>KvK-nummer: [KVK-NUMMER]</li>
          <li>Btw-identificatienummer: [BTW-NUMMER]</li>
          <li>E-mail: <a href="mailto:info@hbinfinite.nl">info@hbinfinite.nl</a></li>
        </ul>

        <h2>2. Welke gegevens verwerken we, en waarom?</h2>
        <p>
          Alleen de gegevens die je zelf invult in het contactformulier:
        </p>
        <ul>
          <li><b>Naam</b> – om je persoonlijk te kunnen aanspreken</li>
          <li><b>E-mailadres</b> – om je antwoord te kunnen sturen</li>
          <li><b>School of instelling</b> – optioneel, om je vraag in context te plaatsen</li>
          <li><b>Je bericht</b> – de inhoud van je vraag</li>
        </ul>
        <p>
          Daarnaast verwerken we tijdelijk je <b>IP-adres</b>. Dat gebruiken we uitsluitend om
          te voorkomen dat het formulier wordt misbruikt voor spam: er kunnen maximaal vijf
          berichten per uur vanaf hetzelfde IP-adres worden verstuurd. Dit gegeven wordt niet
          opgeslagen bij je bericht en verdwijnt automatisch binnen een uur.
        </p>
        <p>
          We gebruiken je gegevens <b>uitsluitend</b> om je vraag te beantwoorden. Je krijgt
          van ons geen nieuwsbrief, we maken geen profielen en we verkopen of delen je
          gegevens niet met derden voor commerciële doeleinden.
        </p>

        <h2>3. Op welke grondslag?</h2>
        <p>
          De verwerking berust op ons gerechtvaardigd belang (artikel 6 lid 1 sub f AVG) om te
          kunnen reageren op vragen die aan ons gericht zijn. Neem je contact op met het oog op
          een mogelijke opdracht, dan is de grondslag het treffen van maatregelen voorafgaand
          aan een overeenkomst (artikel 6 lid 1 sub b AVG).
        </p>

        <h2>4. Hoe lang bewaren we je bericht?</h2>
        <p>
          Je bericht komt binnen als e-mail in onze mailbox. We bewaren die correspondentie
          maximaal <b>[BEWAARTERMIJN, bijv. twee jaar]</b> na het laatste contact, waarna we
          hem verwijderen. Leidt je bericht tot een opdracht, dan vallen de gegevens onder de
          administratie van die opdracht en gelden de wettelijke bewaartermijnen — voor de
          financiële administratie is dat zeven jaar.
        </p>

        <h2>5. Wie krijgen je gegevens nog meer te zien?</h2>
        <p>
          Om de website en de e-mail te laten werken schakelen we twee verwerkers in. Met beide
          hebben we een verwerkersovereenkomst gesloten.
        </p>
        <ul>
          <li>
            <b>Vercel Inc.</b> – host deze website. Amerikaans bedrijf; de website draait op
            servers binnen de EU.
          </li>
          <li>
            <b>Resend (Plus Five Five, Inc.)</b> – verzorgt de aflevering van de e-mail vanuit
            het contactformulier. Amerikaans bedrijf; de verwerking vindt plaats in de
            EU-regio (Ierland).
          </li>
        </ul>
        <p>
          Beide partijen zijn in de Verenigde Staten gevestigd. Dat betekent dat Amerikaanse
          autoriteiten in theorie toegang kunnen vorderen, ook als de gegevens in Europa staan.
          We beperken dat risico door verwerking in de EU-regio te laten plaatsvinden, zo min
          mogelijk gegevens te verzamelen en niets langer te bewaren dan nodig.
        </p>
        <p>
          Onze e-mail zelf loopt via <b>TransIP B.V.</b>, een Nederlandse aanbieder.
        </p>

        <h2>6. Cookies en meekijken</h2>
        <p>
          Deze website plaatst <b>geen cookies</b> en gebruikt <b>geen analyse- of
          trackingsoftware</b>. Er is geen Google Analytics, geen advertentiepixel en geen
          extern script dat je gedrag volgt. Daarom zie je op deze site ook geen cookiebanner:
          er valt niets toe te staan of te weigeren.
        </p>

        <h2>7. Hoe beveiligen we je gegevens?</h2>
        <p>
          Het verkeer met deze website verloopt volledig via een versleutelde verbinding
          (HTTPS). Het contactformulier is beveiligd tegen geautomatiseerd misbruik en de
          inhoud van je bericht wordt zo verwerkt dat er geen schadelijke code in onze mailbox
          terecht kan komen. De toegang tot onze mailbox is met sterke authenticatie beveiligd.
        </p>

        <h2>8. Welke rechten heb je?</h2>
        <p>Je hebt het recht om:</p>
        <ul>
          <li>je gegevens <b>in te zien</b> die wij van je hebben</li>
          <li>ze te laten <b>corrigeren</b> als ze onjuist zijn</li>
          <li>ze te laten <b>verwijderen</b></li>
          <li>de verwerking te laten <b>beperken</b></li>
          <li><b>bezwaar</b> te maken tegen de verwerking</li>
          <li>je gegevens in een gangbaar formaat te <b>ontvangen</b> (dataportabiliteit)</li>
        </ul>
        <p>
          Een verzoek stuur je naar <a href="mailto:info@hbinfinite.nl">info@hbinfinite.nl</a>.
          We reageren binnen één maand. Om te voorkomen dat we gegevens aan de verkeerde
          persoon geven, kunnen we je om aanvullende gegevens vragen waarmee je je verzoek kunt
          onderbouwen.
        </p>

        <h2>9. Klacht indienen</h2>
        <p>
          Ben je het oneens met hoe wij met je gegevens omgaan, laat het ons dan eerst weten —
          meestal komen we er samen uit. Je hebt daarnaast altijd het recht een klacht in te
          dienen bij de Autoriteit Persoonsgegevens via{' '}
          <a href="https://autoriteitpersoonsgegevens.nl" target="_blank" rel="noopener noreferrer">
            autoriteitpersoonsgegevens.nl
          </a>.
        </p>

        <h2>10. Wijzigingen</h2>
        <p>
          We passen deze verklaring aan wanneer onze werkwijze verandert. De datum bovenaan
          geeft aan wanneer de laatste wijziging is doorgevoerd.
        </p>

        <p className="legal-terug">
          <Link href="/">← Terug naar de website</Link>
        </p>
      </section>

      <footer>
        <div className="footer-brand">HB INFINITE</div>
        <div className="footer-copy">© 2026 HB Infinite. Alle rechten voorbehouden.</div>
      </footer>
    </>
  );
}
