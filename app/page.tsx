const CHECKOUT_URL = "https://pay.hotmart.com/Y106827140B?checkoutMode=2";

const benefits = [
  {
    number: "01",
    title: "Abra o material do dia",
    text: "Você encontra a passagem bíblica, a reflexão e a intenção já organizadas.",
  },
  {
    number: "02",
    title: "Reze com direção",
    text: "Use as orações da Quaresma e entregue sua intenção a São Miguel Arcanjo.",
  },
  {
    number: "03",
    title: "Viva o desafio",
    text: "Transforme a oração em uma atitude espiritual simples e possível na sua rotina.",
  },
  {
    number: "04",
    title: "Marque sua caminhada",
    text: "Registre a gratidão, acompanhe seu progresso e siga junto com a comunidade.",
  },
];

const faqs = [
  {
    question: "Esta é realmente a edição de 2026?",
    answer:
      "Sim. Todo o acompanhamento desta página é da Edição 2026, com jornada de 15 de agosto a 29 de setembro de 2026.",
  },
  {
    question: "O que eu recebo ao participar?",
    answer:
      "Você recebe o Planner Espiritual, o livro de Orações para a Quaresma, o primeiro Caderno Semanal, os novos materiais liberados durante a caminhada e o acesso ao grupo de WhatsApp da edição 2026.",
  },
  {
    question: "Como os materiais serão entregues?",
    answer:
      "Os materiais são digitais. Após a confirmação, você recebe as orientações de acesso pelo WhatsApp e pode usar os PDFs no celular, tablet ou computador.",
  },
  {
    question: "Preciso imprimir tudo?",
    answer:
      "Não. Você pode acompanhar pelo celular. Se preferir escrever à mão e marcar o planner, também pode imprimir as páginas que desejar.",
  },
  {
    question: "Preciso ficar conversando no grupo?",
    answer:
      "Não. O grupo existe para unir a comunidade, entregar avisos, materiais e lembretes. Você pode acompanhar de forma discreta, no seu ritmo.",
  },
  {
    question: "Nunca fiz a Quaresma de São Miguel. Vou conseguir acompanhar?",
    answer:
      "Sim. A jornada foi organizada justamente para quem precisa de clareza e constância. Cada dia traz um caminho simples: Palavra, reflexão, desafio, oração e acompanhamento.",
  },
  {
    question: "Existe garantia?",
    answer:
      "Sim. Você tem 7 dias para conhecer os materiais. Se entender que esta caminhada não é para você, pode solicitar o reembolso dentro desse prazo.",
  },
];

function CTA({
  compact = false,
  toOffer = false,
}: {
  compact?: boolean;
  toOffer?: boolean;
}) {
  const className = toOffer
    ? "cta cta-offer-anchor"
    : compact
      ? "cta cta-compact hotmart-fb hotmart__button-checkout"
      : "cta hotmart-fb hotmart__button-checkout";

  return (
    <a
      className={className}
      href={toOffer ? "#oferta" : CHECKOUT_URL}
      aria-label={toOffer
        ? "Ver a oferta completa da Quaresma de São Miguel 2026"
        : "Comprar acesso à Quaresma de São Miguel 2026 pela Hotmart"}
    >
      <span>{toOffer ? "VER A OFERTA COMPLETA" : "QUERO VIVER A QUARESMA 2026"}</span>
      <span className="cta-arrow" aria-hidden="true">
        {toOffer ? "↓" : "→"}
      </span>
    </a>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="section-label">{children}</p>;
}

export default function Home() {
  return (
    <main>
      <div className="offer-strip" role="note">
        <span className="offer-strip-dot" aria-hidden="true" />
        EDIÇÃO 2026 • JORNADA DE 15 DE AGOSTO A 29 DE SETEMBRO
      </div>

      <section className="hero">
        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />
        <div className="shell hero-grid">
          <div className="hero-copy">
            <div className="edition-pill">
              <span>EDIÇÃO ESPECIAL</span>
              <strong>2026</strong>
            </div>
            <h1>
              Viva os 40 dias da Quaresma de São Miguel <em>sem abandonar a caminhada no meio.</em>
            </h1>
            <p className="hero-subtitle">
              Receba o Planner Espiritual, as Orações, materiais novos toda semana e entre no grupo do WhatsApp para rezar junto com milhares de pessoas.
            </p>
            <div className="hero-points" aria-label="Principais benefícios">
              <span>✓ Caminho diário organizado</span>
              <span>✓ Materiais semanais</span>
              <span>✓ Comunidade no WhatsApp</span>
            </div>
            <CTA toOffer />
            <p className="cta-note">Acesso digital • Pagamento único • Garantia de 7 dias</p>
          </div>

          <div className="hero-visual" aria-label="Materiais da Quaresma de São Miguel 2026">
            <div className="halo" />
            <div className="book book-back">
              <img
                src="/materials/caderno-semanal.webp"
                alt="Página do caderno semanal da Quaresma de São Miguel"
                width="900"
                height="1273"
              />
            </div>
            <div className="book book-side">
              <img
                src="/materials/oracoes-quaresma.webp"
                alt="Livro de Orações para a Quaresma de São Miguel"
                width="900"
                height="1273"
              />
            </div>
            <div className="book book-main">
              <img
                src="/materials/planner-espiritual.webp"
                alt="Capa do Planner Espiritual da Quaresma de São Miguel Arcanjo"
                width="900"
                height="1273"
                fetchPriority="high"
              />
            </div>
            <div className="community-badge">
              <span className="community-icons" aria-hidden="true">● ● ●</span>
              <strong>Você não reza sozinha</strong>
              <small>Grupo da edição 2026</small>
            </div>
          </div>
        </div>
        <div className="hero-bottom-line">
          <span>15 AGO</span>
          <i />
          <strong>40 DIAS DE ORAÇÃO E PERSEVERANÇA</strong>
          <i />
          <span>29 SET</span>
        </div>
      </section>

      <section className="pain-section section-pad">
        <div className="shell narrow center">
          <SectionLabel>SE ISSO ACONTECE COM VOCÊ...</SectionLabel>
          <h2>Você começa cheia de fé. Mas, quando a rotina aperta, a oração vai ficando para depois.</h2>
          <p className="lead">
            Não é falta de amor por Deus. Muitas vezes é falta de um caminho claro, de um material simples e de pessoas que ajudem você a continuar.
          </p>
        </div>
        <div className="shell pain-grid">
          <article>
            <span>01</span>
            <h3>Você se perde</h3>
            <p>Não sabe qual oração fazer, o que meditar ou como organizar os 40 dias.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Você se cobra</h3>
            <p>Perde um dia, sente culpa e acaba acreditando que não conseguirá chegar até o fim.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Você caminha só</h3>
            <p>Sem lembretes ou companhia, é muito mais fácil a rotina falar mais alto.</p>
          </article>
        </div>
        <p className="bridge-copy">
          A diferença entre <strong>começar</strong> e <strong>chegar até 29 de setembro</strong> não é ter uma rotina perfeita. É ter direção e companhia.
        </p>
      </section>

      <section className="solution-section section-pad" id="como-funciona">
        <div className="shell solution-grid">
          <div className="solution-copy">
            <SectionLabel>UM CAMINHO POSSÍVEL PARA A VIDA REAL</SectionLabel>
            <h2>Todos os dias, você só precisa seguir quatro passos.</h2>
            <p>
              A Edição 2026 transforma uma jornada longa em pequenos encontros diários com Deus. O conteúdo já chega organizado para você abrir, rezar e viver.
            </p>
            <div className="quote-card">
              <span aria-hidden="true">“</span>
              <p>Quem como Deus?</p>
              <small>O brado de São Miguel que acompanha toda a caminhada.</small>
            </div>
          </div>
          <div className="steps-list">
            {benefits.map((benefit) => (
              <article key={benefit.number}>
                <span>{benefit.number}</span>
                <div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="edition-section section-pad">
        <div className="shell edition-card">
          <div className="edition-year" aria-hidden="true">2026</div>
          <div className="edition-copy">
            <SectionLabel>ATENÇÃO À DATA</SectionLabel>
            <h2>Esta página é da Quaresma de São Miguel — Edição 2026.</h2>
            <p>
              A caminhada começa em <strong>15 de agosto de 2026</strong> e segue até a Festa de São Miguel, em <strong>29 de setembro de 2026</strong>. Ao entrar, você participa da comunidade e recebe os materiais preparados para esta edição.
            </p>
          </div>
          <div className="date-seal">
            <span>INÍCIO</span>
            <strong>15</strong>
            <b>AGOSTO</b>
            <i />
            <span>ENCERRAMENTO</span>
            <strong>29</strong>
            <b>SETEMBRO</b>
          </div>
        </div>
      </section>

      <section className="materials-section section-pad" id="materiais">
        <div className="shell narrow center">
          <SectionLabel>TUDO O QUE VOCÊ RECEBE</SectionLabel>
          <h2>Uma jornada completa — da primeira oração ao último dia.</h2>
          <p className="lead">Materiais digitais pensados para trazer direção, constância e profundidade sem complicar sua rotina.</p>
        </div>

        <div className="shell product-list">
          <article className="product-row">
            <div className="product-image lilac">
              <span className="product-number">MATERIAL 01</span>
              <img src="/materials/planner-espiritual.webp" alt="Planner Espiritual da Quaresma de São Miguel" width="900" height="1273" loading="lazy" />
            </div>
            <div className="product-copy">
              <span className="included-tag">INCLUÍDO NO SEU ACESSO</span>
              <h3>Planner Espiritual da Quaresma de São Miguel</h3>
              <p>O mapa da sua jornada de 40 dias para acompanhar datas, intenções e o avanço da sua caminhada sem se perder.</p>
              <ul>
                <li>Calendário completo da Quaresma</li>
                <li>Espaço para a intenção de cada dia</li>
                <li>Marcação visual do seu progresso</li>
              </ul>
            </div>
          </article>

          <article className="product-row reverse">
            <div className="product-image sand">
              <span className="product-number">MATERIAL 02</span>
              <img src="/materials/oracoes-quaresma.webp" alt="Orações para a Quaresma de São Miguel" width="900" height="1273" loading="lazy" />
            </div>
            <div className="product-copy">
              <span className="included-tag">INCLUÍDO NO SEU ACESSO</span>
              <h3>Orações para a Quaresma de São Miguel</h3>
              <p>Um guia para você não precisar procurar as orações em lugares diferentes e manter seu momento diário centrado.</p>
              <ul>
                <li>Oração inicial e Consagração a São Miguel</li>
                <li>Ladainha de São Miguel Arcanjo</li>
                <li>Orações pela família, libertação e fortaleza</li>
              </ul>
            </div>
          </article>

          <article className="product-row">
            <div className="product-image blue">
              <span className="product-number">MATERIAL 03</span>
              <img src="/materials/caderno-semanal.webp" alt="Caderno semanal da Quaresma de São Miguel" width="900" height="1273" loading="lazy" />
            </div>
            <div className="product-copy">
              <span className="included-tag">INCLUÍDO NO SEU ACESSO</span>
              <h3>Caderno Semanal de Reflexão e Oração</h3>
              <p>Sete dias guiados com conteúdo prático para levar a espiritualidade da Quaresma para dentro da sua rotina.</p>
              <ul>
                <li>Versículo, tema e reflexão do dia</li>
                <li>Desafio espiritual simples e aplicável</li>
                <li>Oração final, gratidão e checklist diário</li>
              </ul>
            </div>
          </article>
        </div>
      </section>

      <section className="weekly-section section-pad">
        <div className="shell weekly-grid">
          <div>
            <SectionLabel>NOVIDADE DA EDIÇÃO 2026</SectionLabel>
            <h2>Você não recebe apenas um PDF e fica por conta própria.</h2>
            <p>
              Durante a Quaresma, novos materiais semanais serão enviados para ajudar você a renovar o propósito e avançar uma semana de cada vez.
            </p>
            <CTA compact />
          </div>
          <div className="weekly-stack">
            <article>
              <span>SEMANA A SEMANA</span>
              <strong>Reflexões guiadas</strong>
              <p>Um novo fôlego para não deixar a caminhada esfriar.</p>
            </article>
            <article>
              <span>PRÁTICA DIÁRIA</span>
              <strong>Desafios espirituais</strong>
              <p>Pequenas atitudes que levam a oração para a vida concreta.</p>
            </article>
            <article>
              <span>ACOMPANHAMENTO</span>
              <strong>Checklists e lembretes</strong>
              <p>Clareza para saber onde você está e qual é o próximo passo.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="community-section section-pad" id="comunidade">
        <div className="community-orb community-orb-one" />
        <div className="community-orb community-orb-two" />
        <div className="shell community-grid">
          <div className="phone-frame" aria-label="Representação do grupo de WhatsApp da Quaresma 2026">
            <div className="phone-top" />
            <div className="chat-header">
              <div className="chat-avatar">SM</div>
              <div>
                <strong>Quaresma de São Miguel</strong>
                <span>Edição 2026 • comunidade</span>
              </div>
            </div>
            <div className="chat-body">
              <div className="chat-day">15 DE AGOSTO</div>
              <div className="chat-bubble received">
                Bom dia! Hoje começamos nossa caminhada com fé. Abra o material do Dia 1 e coloque sua intenção diante de Deus. 🙏
                <time>06:02</time>
              </div>
              <div className="chat-bubble sent">
                Presente nesta Quaresma de 2026. São Miguel, combatei por nós! 💙
                <time>06:11 ✓✓</time>
              </div>
              <div className="chat-bubble received short">
                Você não está sozinha. Seguimos juntos até 29 de setembro.
                <time>06:13</time>
              </div>
            </div>
          </div>
          <div className="community-copy">
            <SectionLabel>UMA CORRENTE DE FÉ NO WHATSAPP</SectionLabel>
            <h2>Milhares de pessoas. Uma mesma intenção: perseverar até o fim.</h2>
            <p>
              O grupo da Quaresma de São Miguel 2026 é o ponto de encontro da caminhada. É lá que você recebe os avisos, os materiais semanais e o lembrete de que existe uma comunidade inteira rezando com você.
            </p>
            <div className="community-features">
              <div><b>✓</b><span><strong>Companhia</strong> para não desanimar nos dias difíceis.</span></div>
              <div><b>✓</b><span><strong>Lembretes</strong> para manter a oração presente na rotina.</span></div>
              <div><b>✓</b><span><strong>Materiais</strong> entregues durante toda a edição 2026.</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="audience-section section-pad">
        <div className="shell narrow center">
          <SectionLabel>PARA QUEM É ESTA CAMINHADA?</SectionLabel>
          <h2>Para quem deseja rezar com profundidade, mesmo tendo uma rotina cheia.</h2>
        </div>
        <div className="shell audience-grid">
          {[
            "Para quem já tentou fazer a Quaresma, mas não conseguiu manter a constância.",
            "Para quem quer fortalecer a fé, combater vícios e cultivar uma vida de oração.",
            "Para quem deseja colocar a família e suas intenções sob a intercessão de São Miguel.",
            "Para quem nunca fez a Quaresma e precisa de um passo a passo simples para começar.",
            "Para quem sente que caminhar em comunidade torna a perseverança mais leve.",
            "Para quem quer chegar a 29 de setembro com a alegria de não ter desistido.",
          ].map((item, index) => (
            <article key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="offer-section section-pad" id="oferta">
        <div className="shell offer-card">
          <div className="offer-copy">
            <SectionLabel>GARANTA SUA VAGA NA EDIÇÃO 2026</SectionLabel>
            <h2>Tudo pronto para você começar em 15 de agosto.</h2>
            <p>Ao confirmar sua participação, você recebe:</p>
            <ul>
              <li><span>✓</span> Planner Espiritual dos 40 dias</li>
              <li><span>✓</span> Livro de Orações da Quaresma</li>
              <li><span>✓</span> Caderno Semanal guiado</li>
              <li><span>✓</span> Novos materiais durante a caminhada</li>
              <li><span>✓</span> Grupo de WhatsApp com milhares de pessoas</li>
            </ul>
          </div>
          <div className="price-card">
            <div className="price-edition">QUARENTA DIAS • EDIÇÃO 2026</div>
            <p className="price-kicker">CONTRIBUIÇÃO ÚNICA</p>
            <div className="price">
              <span>R$</span>
              <strong>29</strong>
              <div><b>,90</b><small>à vista</small></div>
            </div>
            <p className="price-day">Menos de 75 centavos por dia de caminhada.</p>
            <CTA compact />
            <div className="secure-note">
              <span aria-hidden="true">◆</span>
              <p><strong>Acesso digital pelo WhatsApp</strong><br />Pagamento único. Sem mensalidade.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="guarantee-section section-pad-small">
        <div className="shell guarantee-card">
          <div className="guarantee-seal"><strong>7</strong><span>DIAS</span></div>
          <div>
            <SectionLabel>SEU RISCO É ZERO</SectionLabel>
            <h2>Conheça os materiais por 7 dias.</h2>
            <p>
              Entre, veja como a caminhada foi organizada e conheça os materiais. Se entender que não é para você, solicite o reembolso dentro de 7 dias.
            </p>
          </div>
        </div>
      </section>

      <section className="faq-section section-pad" id="duvidas">
        <div className="shell faq-grid">
          <div className="faq-heading">
            <SectionLabel>DÚVIDAS FREQUENTES</SectionLabel>
            <h2>Antes de entrar, veja o que você precisa saber.</h2>
            <p>A caminhada foi preparada para ser simples desde o primeiro acesso.</p>
          </div>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <details key={faq.question} open={index === 0}>
                <summary>
                  <span>{faq.question}</span>
                  <b aria-hidden="true">+</b>
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="final-section section-pad">
        <div className="shell final-card">
          <div className="final-cross" aria-hidden="true">✦</div>
          <SectionLabel>15 DE AGOSTO DE 2026</SectionLabel>
          <h2>Quando a Quaresma começar, que você já esteja pronta para dizer: “Eu vou até o fim.”</h2>
          <p>Receba os materiais e entre agora na comunidade da Quaresma de São Miguel — Edição 2026.</p>
          <CTA />
          <small>São Miguel Arcanjo, defendei-nos no combate.</small>
        </div>
      </section>

      <footer>
        <div className="shell footer-grid">
          <div>
            <strong>Quaresma de São Miguel</strong>
            <span>EDIÇÃO 2026</span>
          </div>
          <p>
            Material devocional independente. Não substitui orientação pastoral, participação nos sacramentos ou acompanhamento espiritual.
          </p>
          <p>© 2026 Virgem Maria BR. Todos os direitos reservados.</p>
        </div>
      </footer>

      <div className="mobile-sticky">
        <div><span>EDIÇÃO 2026</span><strong>R$ 29,90</strong></div>
        <a
          className="hotmart-mobile hotmart-fb hotmart__button-checkout"
          href={CHECKOUT_URL}
          aria-label="Comprar acesso à Quaresma de São Miguel 2026 pela Hotmart"
        >
          QUERO PARTICIPAR
        </a>
      </div>
    </main>
  );
}
