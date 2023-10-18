document.addEventListener("DOMContentLoaded", function () {
  const navButtons = document.querySelector(".tab");
  const questions = document.querySelectorAll("[data-faq-question]");
  const faq = document.querySelector(".faq__questions");
  const tabHeader = document.querySelector(".header__container");
  const tabLinks = document.querySelectorAll(".header__links__item__item");
  const hamburguer = document.querySelector(".menu-hamburguer");
  const header = document.querySelector(".header__container");

  //Para iniciar e mudar o menu hamburguer
  hamburguer.addEventListener("click", function (e) {
    if (!hamburguer.classList.contains("menu-hamburguer")) return;
    if (header.classList.contains("header__container--is-responsive")) {
      header.classList.remove("header__container--is-responsive");
    } else {
      header.classList.add("header__container--is-responsive");
    }
  });

  // Trocar item ativo do menu e mostras a seção
  tabHeader.addEventListener("click", function (e) {
    const tabLink = e.target;

    if (!tabLink.classList.contains("header__links__item__item")) return;

    removeBotaoAtivoHeader();
    tabLink.classList.add("header__links__item--is-active");

    const linkAlvo = tabLink.dataset.tabLink;
    const aba = document.querySelector(`[data-tab-id=${linkAlvo}]`);
    escondeTodasAbas();
    aba.classList.add("shows__list--is-active");
    removeBotaoAtivoHeader();
    tabLink.classList.add("header__links__item--is-active");
    header.classList.remove("header__container--is-responsive");
  });

  // Trocar a seção ativa no menu tab
  navButtons.addEventListener("click", function (e) {
    const button = e.target;

    if (!button.classList.contains("tab__button")) return;

    const abaAlvo = button.dataset.tabButton;

    const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);

    escondeTodasAbas();
    aba.classList.add("shows__list--is-active");
    removeBotaoAtivo();
    e.target.classList.add("tab__button--is-active");
  });

  // Fazer o toggle do faq
  faq.addEventListener("click", function (e) {
    const item = e.target.closest(".faq__questions__item");

    if (!item.classList.contains("faq__questions__item")) return;

    abreOuFechaResposta(item);
  });
});

function abreOuFechaResposta(target) {
  target.classList.toggle("faq__questions__item--is-open");
}

function removeBotaoAtivo() {
  const buttons = document.querySelectorAll("[ data-tab-button]");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("tab__button--is-active");
  }
}

function escondeTodasAbas() {
  const tabsContainer = document.querySelectorAll("[data-tab-id]");

  for (let i = 0; i < tabsContainer.length; i++) {
    tabsContainer[i].classList.remove("shows__list--is-active");
  }
}

function abreOuFechaResposta(target) {
  target.classList.toggle("faq__questions__item--is-open");
}

function removeBotaoAtivoHeader() {
  const links = document.querySelectorAll(".header__links__item__item ");

  for (let i = 0; i < links.length; i++) {
    links[i].classList.remove("header__links__item--is-active");
  }
}
