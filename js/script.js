// 모달창 열기
function modalWindowOpen(button) {
    const modalWindowOverlay = document.querySelector('.modal-window-overlay');
    const buttonData = button.dataset.modal;

    document.querySelectorAll('.modal-window-wrap').forEach(modal => {
      const modalWindowData = modal.dataset.modal;
      if (buttonData === modalWindowData) {
        modalWindowOverlay.classList.add('active')
        modal.classList.add('active');
      }
    });

    if (buttonData == 'view') {
        const cardImageItem = button.closest('li');
        const cardImageSrc = cardImageItem.querySelector('img').getAttribute('src');
        const getText = cardImageItem.querySelector('img').getAttribute('data-get');
        document.querySelector('.card-image-box img').src = cardImageSrc;
        document.querySelector('.get-text').textContent = getText;
    }
}

// 모달창 닫기
function modalWindowClose() {
    const modalWindowOverlay = document.querySelector('.modal-window-overlay');

    document.querySelectorAll('.modal-window-wrap').forEach(modal => {
        modalWindowOverlay.classList.remove('active')
        modal.classList.remove('active');
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const overlay = document.querySelector(".modal-window-overlay");
    const allModalWindowWrap = document.querySelectorAll(".modal-window-wrap");

    overlay.addEventListener("click", (e) => {
        if (e.target === overlay) {
        overlay.classList.remove("active");
        allModalWindowWrap.forEach(modal => {
            modal.classList.remove('active');
        });
        }
    });
});

// 탭 바 버튼
function tabBarButton(tab) {
    if (tab === 'card') {
        document.querySelector('.deck-list-wrap').classList.remove('active');
        document.querySelector('.card-list-wrap').classList.add('active');
    } else if (tab === 'deck') {
        document.querySelector('.card-list-wrap').classList.remove('active');
        document.querySelector('.deck-list-wrap').classList.add('active');
    }
}

// 카드 정보 배열
const imageData = [
    { src: "image/A1_bulbasaur.webp", alt: "A1 이상해씨", get: "최강의 유전자 뮤츠", rarity: 1, pack: 2 },
    { src: "image/A1_ivysaur.webp", alt: "A1 이상해풀", get: "최강의 유전자 뮤츠", rarity: 2, pack: 2 },
    { src: "image/A1_venusaur.webp", alt: "A1 이상해꽃", get: "최강의 유전자 뮤츠", rarity: 3, pack: 2 },
    { src: "image/A1_venusaur_ex.webp", alt: "A1 이상해꽃ex", get: "최강의 유전자 뮤츠", rarity: 4, pack: 2 },
    { src: "image/A1_caterpie.webp", alt: "A1 캐터피", get: "최강의 유전자 피카츄", rarity: 1, pack: 3 },
    { src: "image/A1_metapod.webp", alt: "A1 단데기", get: "최강의 유전자 피카츄", rarity: 1, pack: 3 },
    { src: "image/A1_butterfree.webp", alt: "A1 버터플", get: "최강의 유전자 피카츄", rarity: 3, pack: 3 },
    { src: "image/A1_weedle.webp", alt: "A1 뿔충이", get: "최강의 유전자 뮤츠", rarity: 1, pack: 2 },
    { src: "image/A1_kakuna.webp", alt: "A1 딱충이", get: "최강의 유전자 뮤츠", rarity: 1, pack: 2 },
    { src: "image/A1_beedrill.webp", alt: "A1 독침붕", get: "최강의 유전자 뮤츠", rarity: 3, pack: 2 },
    { src: "image/A1_oddish.webp", alt: "A1 뚜벅쵸", get: "최강의 유전자 리자몽", rarity: 1, pack: 1 },
    { src: "image/A1_gloom.webp", alt: "A1 냄새꼬", get: "최강의 유전자 리자몽", rarity: 2, pack: 1 },
    { src: "image/A1_vileplume.webp", alt: "A1 라플레시아", get: "최강의 유전자 리자몽", rarity: 3, pack: 1 },
    { src: "image/A1_paras.webp", alt: "A1 파라스", get: "최강의 유전자 피카츄", rarity: 1, pack: 3 },
    { src: "image/A1_parasect.webp", alt: "A1 파라섹트", get: "최강의 유전자 피카츄", rarity: 2, pack: 3 },
    { src: "image/A1_venonat.webp", alt: "A1 콘팡", get: "최강의 유전자 뮤츠", rarity: 1, pack: 2 },
    { src: "image/A1_venomoth.webp", alt: "A1 도나리", get: "최강의 유전자 뮤츠", rarity: 2, pack: 2 },
    { src: "image/A1_bellsprout.webp", alt: "A1 모다피", get: "최강의 유전자 리자몽", rarity: 1, pack: 1 },
    { src: "image/A1_weepinbell.webp", alt: "A1 우츠동", get: "최강의 유전자 리자몽", rarity: 2, pack: 1 },
    { src: "image/A1_victreebel.webp", alt: "A1 우츠보트", get: "최강의 유전자 리자몽", rarity: 3, pack: 1 },
    { src: "image/A1_exeggcute.webp", alt: "A1 아라리", get: "최강의 유전자 리자몽", rarity: 1, pack: 1 },
    { src: "image/A1_exeggutor.webp", alt: "A1 나시", get: "최강의 유전자 리자몽", rarity: 3, pack: 1 },
    { src: "image/A1_exeggutor_ex.webp", alt: "A1 나시ex", get: "최강의 유전자 리자몽", rarity: 4, pack: 1 },
    { src: "image/A1_tangela.webp", alt: "A1 덩쿠리", get: "최강의 유전자 리자몽", rarity: 1, pack: 1 },
    { src: "image/A1_scyther.webp", alt: "A1 스라크", get: "최강의 유전자 뮤츠", rarity: 1, pack: 2 },
    { src: "image/A1_pinsir.webp", alt: "A1 쁘사이저", get: "최강의 유전자", rarity: 2, pack: 0 },
    { src: "image/A1_cottonee.webp", alt: "A1 소미안", get: "최강의 유전자", rarity: 1, pack: 0 },
    { src: "image/A1_whimsicott.webp", alt: "A1 엘풍", get: "최강의 유전자", rarity: 2, pack: 0 },
    { src: "image/A1_petilil.webp", alt: "A1 치릴리", get: "최강의 유전자", rarity: 1, pack: 0 },
    { src: "image/A1_lilligant.webp", alt: "A1 드레디어", get: "최강의 유전자", rarity: 2, pack: 0 },
    { src: "image/A1_skiddo.webp", alt: "A1 메이클", get: "최강의 유전자 리자몽", rarity: 1, pack: 1 },
    { src: "image/A1_gogoat.webp", alt: "A1 고고트", get: "최강의 유전자 리자몽", rarity: 1, pack: 1 },
    { src: "image/A1_charmander.webp", alt: "A1 파이리", get: "최강의 유전자 리자몽", rarity: 1, pack: 1 },
    { src: "image/A1_charmeleon.webp", alt: "A1 리자드", get: "최강의 유전자 리자몽", rarity: 2, pack: 1 },
    { src: "image/A1_charizard.webp", alt: "A1 리자몽", get: "최강의 유전자 리자몽", rarity: 3, pack: 1 },
    { src: "image/A1_charizard_ex.webp", alt: "A1 리자몽ex", get: "최강의 유전자 리자몽", rarity: 4, pack: 1 },
    { src: "image/A1_vulpix.webp", alt: "A1 식스테일", get: "최강의 유전자 리자몽", rarity: 1, pack: 1 },
    { src: "image/A1_ninetales.webp", alt: "A1 나인테일", get: "최강의 유전자 리자몽", rarity: 2, pack: 1 },
    { src: "image/A1_growlithe.webp", alt: "A1 가디", get: "최강의 유전자 피카츄", rarity: 1, pack: 3 },
    { src: "image/A1_arcanine.webp", alt: "A1 윈디", get: "최강의 유전자 피카츄", rarity: 3, pack: 3 },
    { src: "image/A1_arcanine_ex.webp", alt: "A1 윈디ex", get: "최강의 유전자 피카츄", rarity: 4, pack: 3 },
    { src: "image/A1_ponyta.webp", alt: "A1 포니타", get: "최강의 유전자", rarity: 1, pack: 0 },
    { src: "image/A1_rapidash.webp", alt: "A1 날쌩마", get: "최강의 유전자", rarity: 2, pack: 0 },
    { src: "image/A1_magmar.webp", alt: "A1 마그마", get: "최강의 유전자 리자몽", rarity: 1, pack: 1 },
    { src: "image/A1_flareon.webp", alt: "A1 부스터", get: "최강의 유전자 리자몽", rarity: 3, pack: 1 },
    { src: "image/A1_moltres.webp", alt: "A1 파이어", get: "최강의 유전자 리자몽", rarity: 3, pack: 1 },
    { src: "image/A1_moltres_ex.webp", alt: "A1 파이어ex", get: "최강의 유전자 리자몽", rarity: 4, pack: 1 },
    { src: "image/A1_heatmor.webp", alt: "A1 앤티골", get: "최강의 유전자", rarity: 1, pack: 0 },
    { src: "image/A1_salandit.webp", alt: "A1 야도뇽", get: "최강의 유전자 뮤츠", rarity: 1, pack: 2 },
    { src: "image/A1_salazzle.webp", alt: "A1 염뉴트", get: "최강의 유전자 뮤츠", rarity: 1, pack: 2 },
    { src: "image/A1_sizzlipede.webp", alt: "A1 태우지네", get: "최강의 유전자", rarity: 1, pack: 0 },
    { src: "image/A1_centiskorch.webp", alt: "A1 다태우지네", get: "최강의 유전자", rarity: 2, pack: 0 },
    { src: "image/A1_squirtle.webp", alt: "A1 꼬부기", get: "최강의 유전자 피카츄", rarity: 1, pack: 3 },
    { src: "image/A1_wartortle.webp", alt: "A1 어니부기", get: "최강의 유전자 피카츄", rarity: 2, pack: 3 },
    { src: "image/A1_blastoise.webp", alt: "A1 거북왕", get: "최강의 유전자 피카츄", rarity: 3, pack: 3 },
    { src: "image/A1_blastoise_ex.webp", alt: "A1 거북왕ex", get: "최강의 유전자 피카츄", rarity: 4, pack: 3 },
    { src: "image/A1_psyduck.webp", alt: "A1 고라파덕", get: "최강의 유전자", rarity: 1, pack: 0 },
    { src: "image/A1_golduck.webp", alt: "A1 골덕", get: "최강의 유전자", rarity: 2, pack: 0 },
    { src: "image/A1_poliwag.webp", alt: "A1 발챙이", get: "최강의 유전자 리자몽", rarity: 1, pack: 1 },
    { src: "image/A1_poliwhirl.webp", alt: "A1 슈륙챙이", get: "최강의 유전자 리자몽", rarity: 2, pack: 1 },
    { src: "image/A1_poliwrath.webp", alt: "A1 강챙이", get: "최강의 유전자 리자몽", rarity: 3, pack: 1 },
    { src: "image/A1_tentacool.webp", alt: "A1 왕눈해", get: "최강의 유전자 뮤츠", rarity: 1, pack: 2 },
    { src: "image/A1_tentacruel.webp", alt: "A1 독파리", get: "최강의 유전자 뮤츠", rarity: 2, pack: 2 },
    { src: "image/A1_seel.webp", alt: "A1 쥬쥬", get: "최강의 유전자 피카츄", rarity: 1, pack: 3 },
    { src: "image/A1_dewgong.webp", alt: "A1 쥬레곤", get: "최강의 유전자 피카츄", rarity: 2, pack: 3 },
    { src: "image/A1_shellder.webp", alt: "A1 셀러", get: "최강의 유전자 뮤츠", rarity: 1, pack: 2 },
    { src: "image/A1_cloyster.webp", alt: "A1 파르셀", get: "최강의 유전자 뮤츠", rarity: 2, pack: 2 },
    { src: "image/A1_krabby.webp", alt: "A1 크랩", get: "최강의 유전자 뮤츠", rarity: 1, pack: 2 },
    { src: "image/A1_kingler.webp", alt: "A1 킹크랩", get: "최강의 유전자 뮤츠", rarity: 2, pack: 2 },
    { src: "image/A1_horsea.webp", alt: "A1 쏘드라", get: "최강의 유전자 피카츄", rarity: 1, pack: 3 },
    { src: "image/A1_seadra.webp", alt: "A1 시드라", get: "최강의 유전자 피카츄", rarity: 2, pack: 3 },
    { src: "image/A1_goldeen.webp", alt: "A1 콘치", get: "최강의 유전자 피카츄", rarity: 1, pack: 3 },
    { src: "image/A1_seaking.webp", alt: "A1 왕콘치", get: "최강의 유전자 피카츄", rarity: 1, pack: 3 },
    { src: "image/A1_staryu.webp", alt: "A1 별가사리", get: "최강의 유전자 리자몽", rarity: 1, pack: 1 },
    { src: "image/A1_starmie.webp", alt: "A1 아쿠스타", get: "최강의 유전자 리자몽", rarity: 2, pack: 1 },
    { src: "image/A1_starmie_ex.webp", alt: "A1 아쿠스타ex", get: "최강의 유전자 리자몽", rarity: 4, pack: 1 },
    { src: "image/A1_magikarp.webp", alt: "A1 잉어킹", get: "최강의 유전자 피카츄", rarity: 1, pack: 3 },
    { src: "image/A1_gyarados.webp", alt: "A1 갸라도스", get: "최강의 유전자 피카츄", rarity: 3, pack: 3 },
    { src: "image/A1_lapras.webp", alt: "A1 라프라스", get: "최강의 유전자 리자몽", rarity: 3, pack: 1 },
    { src: "image/A1_vaporeon.webp", alt: "A1 샤미드", get: "최강의 유전자 뮤츠", rarity: 3, pack: 2 },
    { src: "image/A1_omanyte.webp", alt: "A1 암나이트", get: "최강의 유전자 피카츄", rarity: 2, pack: 3 },
    { src: "image/A1_omastar.webp", alt: "A1 암스타", get: "최강의 유전자 피카츄", rarity: 3, pack: 3 },
    { src: "image/A1_articuno.webp", alt: "A1 프리져", get: "최강의 유전자 뮤츠", rarity: 3, pack: 2 },
    { src: "image/A1_articuno_ex.webp", alt: "A1 프리져ex", get: "최강의 유전자 뮤츠", rarity: 4, pack: 2 },
    { src: "image/A1_ducklett.webp", alt: "A1 꼬지보리", get: "최강의 유전자 리자몽", rarity: 1, pack: 1 },
    { src: "image/A1_swanna.webp", alt: "A1 스완나", get: "최강의 유전자 리자몽", rarity: 2, pack: 1 },
    { src: "image/A1_froakie.webp", alt: "A1 개구마르", get: "최강의 유전자 리자몽", rarity: 1, pack: 1 },
    { src: "image/A1_frogadier.webp", alt: "A1 개굴반장", get: "최강의 유전자 리자몽", rarity: 2, pack: 1 },
    { src: "image/A1_greninja.webp", alt: "A1 개굴닌자", get: "최강의 유전자 리자몽", rarity: 3, pack: 1 },
    { src: "image/A1_pyukumuku.webp", alt: "A1 해무기", get: "최강의 유전자 리자몽", rarity: 1, pack: 1 },
    { src: "image/A1_bruxish.webp", alt: "A1 치갈기", get: "최강의 유전자", rarity: 2, pack: 0 },
    { src: "image/A1_snom.webp", alt: "A1 누니머기", get: "최강의 유전자", rarity: 1, pack: 0 },
    { src: "image/A1_frosmoth.webp", alt: "A1 모스노우", get: "최강의 유전자", rarity: 2, pack: 0 },
    { src: "image/A1_pikachu.webp", alt: "A1 피카츄", get: "최강의 유전자 피카츄", rarity: 1, pack: 3 },
    { src: "image/A1_raichu.webp", alt: "A1 라이츄", get: "최강의 유전자 피카츄", rarity: 3, pack: 3 },
    { src: "image/A1_pikachu_ex.webp", alt: "A1 피카츄ex", get: "최강의 유전자 피카츄", rarity: 4, pack: 3 },
    { src: "image/A1_magnemite.webp", alt: "A1 코일", get: "최강의 유전자 피카츄", rarity: 1, pack: 3 },
    { src: "image/A1_magneton.webp", alt: "A1 레어코일", get: "최강의 유전자 피카츄", rarity: 3, pack: 3 },
    { src: "image/A1_voltorb.webp", alt: "A1 찌리리공", get: "최강의 유전자 피카츄", rarity: 1, pack: 3 },
    { src: "image/A1_electrode.webp", alt: "A1 붐볼", get: "최강의 유전자 피카츄", rarity: 2, pack: 3 },
    { src: "image/A1_electabuzz.webp", alt: "A1 에레브", get: "최강의 유전자 피카츄", rarity: 1, pack: 3 },
    { src: "image/A1_jolteon.webp", alt: "A1 쥬피썬더", get: "최강의 유전자 피카츄", rarity: 3, pack: 3 },
    { src: "image/A1_zapdos.webp", alt: "A1 썬더", get: "최강의 유전자 피카츄", rarity: 3, pack: 3 },
    { src: "image/A1_zapdos_ex.webp", alt: "A1 썬더ex", get: "최강의 유전자 피카츄", rarity: 4, pack: 3 },
    { src: "image/A1_blitzle.webp", alt: "A1 줄뮤마", get: "최강의 유전자", rarity: 1, pack: 0 },
    { src: "image/A1_zebstrika.webp", alt: "A1 제브라이카", get: "최강의 유전자", rarity: 2, pack: 0 },
    { src: "image/A1_tynamo.webp", alt: "A1 저리어", get: "최강의 유전자 뮤츠", rarity: 1, pack: 2 },
    { src: "image/A1_eelektrik.webp", alt: "A1 저리릴", get: "최강의 유전자 뮤츠", rarity: 2, pack: 2 },
    { src: "image/A1_eelektross.webp", alt: "A1 저리더프", get: "최강의 유전자 뮤츠", rarity: 3, pack: 2 },
    { src: "image/A1_helioptile.webp", alt: "A1 목도리키텔", get: "최강의 유전자", rarity: 1, pack: 0 },
    { src: "image/A1_heliolisk.webp", alt: "A1 일렉도리자드", get: "최강의 유전자", rarity: 1, pack: 0 },
    { src: "image/A1_pincurchin.webp", alt: "A1 찌르성게", get: "최강의 유전자", rarity: 2, pack: 0 },
    { src: "image/A1_clefairy.webp", alt: "A1 삐삐", get: "최강의 유전자 피카츄", rarity: 1, pack: 3 },
    { src: "image/A1_clefable.webp", alt: "A1 픽시", get: "최강의 유전자 피카츄", rarity: 2, pack: 3 },
    { src: "image/A1_abra.webp", alt: "A1 캐이시", get: "최강의 유전자 리자몽", rarity: 1, pack: 1 },
    { src: "image/A1_kadabra.webp", alt: "A1 윤겔라", get: "최강의 유전자 리자몽", rarity: 2, pack: 1 },
    { src: "image/A1_alakazam.webp", alt: "A1 후딘", get: "최강의 유전자 리자몽", rarity: 3, pack: 1 },
    { src: "image/A1_slowpoke.webp", alt: "A1 야돈", get: "최강의 유전자", rarity: 1, pack: 0 },
    { src: "image/A1_slowbro.webp", alt: "A1 야도란", get: "최강의 유전자", rarity: 2, pack: 0 },
    { src: "image/A1_gastly.webp", alt: "A1 고오스", get: "최강의 유전자 뮤츠", rarity: 1, pack: 2 },
    { src: "image/A1_haunter.webp", alt: "A1 고우스트", get: "최강의 유전자 뮤츠", rarity: 2, pack: 2 },
    { src: "image/A1_gengar.webp", alt: "A1 팬텀", get: "최강의 유전자 뮤츠", rarity: 3, pack: 2 },
    { src: "image/A1_gengar_ex.webp", alt: "A1 팬텀ex", get: "최강의 유전자 뮤츠", rarity: 4, pack: 2 },
    { src: "image/A1_drowzee.webp", alt: "A1 슬리프", get: "최강의 유전자 피카츄", rarity: 1, pack: 3 },
    { src: "image/A1_hypno.webp", alt: "A1 슬리퍼", get: "최강의 유전자 피카츄", rarity: 3, pack: 3 },
    { src: "image/A1_mr._mime.webp", alt: "A1 마임맨", get: "최강의 유전자 뮤츠", rarity: 2, pack: 2 },
    { src: "image/A1_jynx.webp", alt: "A1 루주라", get: "최강의 유전자 뮤츠", rarity: 1, pack: 2 },
    { src: "image/A1_mewtwo.webp", alt: "A1 뮤츠", get: "최강의 유전자 뮤츠", rarity: 3, pack: 2 },
    { src: "image/A1_mewtwo_ex.webp", alt: "A1 뮤츠ex", get: "최강의 유전자 뮤츠", rarity: 4, pack: 2 },
    { src: "image/A1_ralts.webp", alt: "A1 랄토스", get: "최강의 유전자 뮤츠", rarity: 1, pack: 2 },
    { src: "image/A1_kirlia.webp", alt: "A1 킬리아", get: "최강의 유전자 뮤츠", rarity: 2, pack: 2 },
    { src: "image/A1_gardevoir.webp", alt: "A1 가디안", get: "최강의 유전자 뮤츠", rarity: 3, pack: 2 },
    { src: "image/A1_woobat.webp", alt: "A1 또르박쥐", get: "최강의 유전자", rarity: 1, pack: 0 },
    { src: "image/A1_swoobat.webp", alt: "A1 맘박쥐", get: "최강의 유전자", rarity: 1, pack: 0 },
    { src: "image/A1_golett.webp", alt: "A1 골비람", get: "최강의 유전자", rarity: 1, pack: 0 },
    { src: "image/A1_golurk.webp", alt: "A1 골루그", get: "최강의 유전자", rarity: 2, pack: 0 },
    { src: "image/A1_sandshrew.webp", alt: "A1 모래두지", get: "최강의 유전자", rarity: 1, pack: 0 },
    { src: "image/A1_sandslash.webp", alt: "A1 고지", get: "최강의 유전자", rarity: 2, pack: 0 },
    { src: "image/A1_diglett.webp", alt: "A1 디그다", get: "최강의 유전자 피카츄", rarity: 1, pack: 3 },
    { src: "image/A1_dugtrio.webp", alt: "A1 닥트리오", get: "최강의 유전자 피카츄", rarity: 2, pack: 3 },
    { src: "image/A1_mankey.webp", alt: "A1 망키", get: "최강의 유전자 리자몽", rarity: 1, pack: 1 },
    { src: "image/A1_primeape.webp", alt: "A1 성원숭", get: "최강의 유전자 리자몽", rarity: 2, pack: 1 },
    { src: "image/A1_machop.webp", alt: "A1 알통몬", get: "최강의 유전자 리자몽", rarity: 1, pack: 1 },
    { src: "image/A1_machoke.webp", alt: "A1 근육몬", get: "최강의 유전자 리자몽", rarity: 2, pack: 1 },
    { src: "image/A1_machamp.webp", alt: "A1 괴력몬", get: "최강의 유전자 리자몽", rarity: 3, pack: 1 },
    { src: "image/A1_machamp_ex.webp", alt: "A1 괴력몬ex", get: "최강의 유전자 리자몽", rarity: 4, pack: 1 },
    { src: "image/A1_geodude.webp", alt: "A1 꼬마돌", get: "최강의 유전자 피카츄", rarity: 1, pack: 3 },
    { src: "image/A1_graveler.webp", alt: "A1 데구리", get: "최강의 유전자 피카츄", rarity: 2, pack: 3 },
    { src: "image/A1_golem.webp", alt: "A1 딱구리", get: "최강의 유전자 피카츄", rarity: 3, pack: 3 },
    { src: "image/A1_onix.webp", alt: "A1 롱스톤", get: "최강의 유전자 피카츄", rarity: 2, pack: 3 },
    { src: "image/A1_cubone.webp", alt: "A1 탕구리", get: "최강의 유전자 뮤츠", rarity: 1, pack: 2 },
    { src: "image/A1_marowak.webp", alt: "A1 텅구리", get: "최강의 유전자 뮤츠", rarity: 2, pack: 2 },
    { src: "image/A1_marowak_ex.webp", alt: "A1 텅구리ex", get: "최강의 유전자 뮤츠", rarity: 4, pack: 2 },
    { src: "image/A1_hitmonlee.webp", alt: "A1 시라소몬", get: "최강의 유전자 뮤츠", rarity: 1, pack: 2 },
    { src: "image/A1_hitmonchan.webp", alt: "A1 홍수몬", get: "최강의 유전자 리자몽", rarity: 1, pack: 1 },
    { src: "image/A1_rhyhorn.webp", alt: "A1 뿔카노", get: "최강의 유전자 뮤츠", rarity: 1, pack: 2 },
    { src: "image/A1_rhydon.webp", alt: "A1 코뿌리", get: "최강의 유전자 뮤츠", rarity: 2, pack: 2 },
    { src: "image/A1_kabuto.webp", alt: "A1 투구", get: "최강의 유전자 리자몽", rarity: 2, pack: 1 },
    { src: "image/A1_kabutops.webp", alt: "A1 투구푸스", get: "최강의 유전자 리자몽", rarity: 3, pack: 1 },
    { src: "image/A1_mienfoo.webp", alt: "A1 비조푸", get: "최강의 유전자 피카츄", rarity: 1, pack: 3 },
    { src: "image/A1_mienshao.webp", alt: "A1 비조도", get: "최강의 유전자 피카츄", rarity: 2, pack: 3 },
    { src: "image/A1_clobbopus.webp", alt: "A1 때때무노", get: "최강의 유전자", rarity: 1, pack: 0 },
    { src: "image/A1_grapploct.webp", alt: "A1 케오퍼스", get: "최강의 유전자", rarity: 2, pack: 0 },
    { src: "image/A1_ekans.webp", alt: "A1 아보", get: "최강의 유전자", rarity: 1, pack: 0 },
    { src: "image/A1_arbok.webp", alt: "A1 아보크", get: "최강의 유전자", rarity: 2, pack: 0 },
    { src: "image/A1_nidoran_f.webp", alt: "A1 니드런♀", get: "최강의 유전자 피카츄", rarity: 1, pack: 3 },
    { src: "image/A1_nidorina.webp", alt: "A1 니드리나", get: "최강의 유전자 피카츄", rarity: 2, pack: 3 },
    { src: "image/A1_nidoqueen.webp", alt: "A1 니드퀸", get: "최강의 유전자 피카츄", rarity: 3, pack: 3 },
    { src: "image/A1_nidoran_m.webp", alt: "A1 니드런♂", get: "최강의 유전자 피카츄", rarity: 1, pack: 3 },
    { src: "image/A1_nidorino.webp", alt: "A1 니드리노", get: "최강의 유전자 피카츄", rarity: 2, pack: 3 },
    { src: "image/A1_nidoking.webp", alt: "A1 니드킹", get: "최강의 유전자 피카츄", rarity: 3, pack: 3 },
    { src: "image/A1_zubat.webp", alt: "A1 주뱃", get: "최강의 유전자 뮤츠", rarity: 1, pack: 2 },
    { src: "image/A1_golbat.webp", alt: "A1 골뱃", get: "최강의 유전자 뮤츠", rarity: 2, pack: 2 },
    { src: "image/A1_grimer.webp", alt: "A1 질퍽이", get: "최강의 유전자 뮤츠", rarity: 1, pack: 2 },
    { src: "image/A1_muk.webp", alt: "A1 질뻐기", get: "최강의 유전자 뮤츠", rarity: 3, pack: 2 },
    { src: "image/A1_koffing.webp", alt: "A1 또가스", get: "최강의 유전자 뮤츠", rarity: 1, pack: 2 },
    { src: "image/A1_weezing.webp", alt: "A1 또도가스", get: "최강의 유전자 뮤츠", rarity: 3, pack: 2 },
    { src: "image/A1_mawile.webp", alt: "A1 입치트", get: "최강의 유전자 리자몽", rarity: 1, pack: 1 },
    { src: "image/A1_pawniard.webp", alt: "A1 자망칼", get: "최강의 유전자", rarity: 1, pack: 0 },
    { src: "image/A1_bisharp.webp", alt: "A1 절각참", get: "최강의 유전자", rarity: 2, pack: 0 },
    { src: "image/A1_meltan.webp", alt: "A1 멜탄", get: "최강의 유전자 리자몽", rarity: 1, pack: 1 },
    { src: "image/A1_melmetal.webp", alt: "A1 멜메탈", get: "최강의 유전자 리자몽", rarity: 3, pack: 1 },
    { src: "image/A1_dratini.webp", alt: "A1 미뇽", get: "최강의 유전자 뮤츠", rarity: 1, pack: 2 },
    { src: "image/A1_dragonair.webp", alt: "A1 신뇽", get: "최강의 유전자 뮤츠", rarity: 2, pack: 2 },
    { src: "image/A1_dragonite.webp", alt: "A1 망나뇽", get: "최강의 유전자 뮤츠", rarity: 3, pack: 2 },
    { src: "image/A1_pidgey.webp", alt: "A1 구구", get: "최강의 유전자 뮤츠", rarity: 1, pack: 2 },
    { src: "image/A1_pidgeotto.webp", alt: "A1 피죤", get: "최강의 유전자 뮤츠", rarity: 1, pack: 2 },
    { src: "image/A1_pidgeot.webp", alt: "A1 피죤투", get: "최강의 유전자 뮤츠", rarity: 3, pack: 2 },
    { src: "image/A1_rattata.webp", alt: "A1 꼬렛", get: "최강의 유전자", rarity: 1, pack: 0 },
    { src: "image/A1_raticate.webp", alt: "A1 레트라", get: "최강의 유전자", rarity: 1, pack: 0 },
    { src: "image/A1_spearow.webp", alt: "A1 깨비참", get: "최강의 유전자 리자몽", rarity: 1, pack: 1 },
    { src: "image/A1_fearow.webp", alt: "A1 깨비드릴조", get: "최강의 유전자 리자몽", rarity: 1, pack: 1 },
    { src: "image/A1_jigglypuff.webp", alt: "A1 푸린", get: "최강의 유전자 피카츄", rarity: 1, pack: 3 },
    { src: "image/A1_wigglytuff.webp", alt: "A1 푸크린", get: "최강의 유전자 피카츄", rarity: 1, pack: 3 },
    { src: "image/A1_wigglytuff_ex.webp", alt: "A1 푸크린ex", get: "최강의 유전자 피카츄", rarity: 4, pack: 3 },
    { src: "image/A1_meowth.webp", alt: "A1 나옹", get: "최강의 유전자 리자몽", rarity: 1, pack: 1 },
    { src: "image/A1_persian.webp", alt: "A1 페르시온", get: "최강의 유전자 리자몽", rarity: 2, pack: 1 },
    { src: "image/A1_farfetch'd.webp", alt: "A1 파오리", get: "최강의 유전자", rarity: 1, pack: 0 },
    { src: "image/A1_doduo.webp", alt: "A1 두두", get: "최강의 유전자", rarity: 1, pack: 0 },
    { src: "image/A1_dodrio.webp", alt: "A1 두트리오", get: "최강의 유전자", rarity: 2, pack: 0 },
    { src: "image/A1_lickitung.webp", alt: "A1 내루미", get: "최강의 유전자 뮤츠", rarity: 2, pack: 2 },
    { src: "image/A1_chansey.webp", alt: "A1 럭키", get: "최강의 유전자 피카츄", rarity: 2, pack: 3 },
    { src: "image/A1_kangaskhan.webp", alt: "A1 캥카", get: "최강의 유전자 리자몽", rarity: 3, pack: 1 },
    { src: "image/A1_tauros.webp", alt: "A1 켄타로스", get: "최강의 유전자 리자몽", rarity: 2, pack: 1 },
    { src: "image/A1_ditto.webp", alt: "A1 메타몽", get: "최강의 유전자 뮤츠", rarity: 3, pack: 2 },
    { src: "image/A1_eevee_1.webp", alt: "A1 이브이", get: "최강의 유전자 리자몽", rarity: 1, pack: 1 },
    { src: "image/A1_eevee_2.webp", alt: "A1 이브이", get: "최강의 유전자 뮤츠", rarity: 1, pack: 2 },
    { src: "image/A1_eevee_3.webp", alt: "A1 이브이", get: "최강의 유전자 피카츄", rarity: 1, pack: 3 },
    { src: "image/A1_porygon.webp", alt: "A1 폴리곤", get: "최강의 유전자 뮤츠", rarity: 2, pack: 2 },
    { src: "image/A1_aerodactyl.webp", alt: "A1 프테라", get: "최강의 유전자 뮤츠", rarity: 3, pack: 2 },
    { src: "image/A1_snorlax.webp", alt: "A1 잠만보", get: "최강의 유전자 피카츄", rarity: 3, pack: 3 },
    { src: "image/A1_minccino.webp", alt: "A1 치라미", get: "최강의 유전자", rarity: 1, pack: 0 },
    { src: "image/A1_cinccino.webp", alt: "A1 치라치노", get: "최강의 유전자", rarity: 2, pack: 0 },
    { src: "image/A1_wooloo.webp", alt: "A1 우르", get: "최강의 유전자", rarity: 1, pack: 0 },
    { src: "image/A1_dubwool.webp", alt: "A1 배우르", get: "최강의 유전자", rarity: 1, pack: 0 },
    { src: "image/A1_helix_fossil.webp", alt: "A1 조개화석", get: "최강의 유전자 피카츄", rarity: 1, pack: 3 },
    { src: "image/A1_dome_fossil.webp", alt: "A1 껍질화석", get: "최강의 유전자 리자몽", rarity: 1, pack: 1 },
    { src: "image/A1_old_amber.webp", alt: "A1 비밀의호박", get: "최강의 유전자 뮤츠", rarity: 1, pack: 2 },
    { src: "image/A1_erika.webp", alt: "A1 민화", get: "최강의 유전자 리자몽", rarity: 2, pack: 1 },
    { src: "image/A1_misty.webp", alt: "A1 이슬", get: "최강의 유전자 피카츄", rarity: 2, pack: 3 },
    { src: "image/A1_blaine.webp", alt: "A1 강연", get: "최강의 유전자 리자몽", rarity: 2, pack: 1 },
    { src: "image/A1_koga.webp", alt: "A1 독수", get: "최강의 유전자 뮤츠", rarity: 2, pack: 2 },
    { src: "image/A1_giovanni.webp", alt: "A1 비주기", get: "최강의 유전자 뮤츠", rarity: 2, pack: 2 },
    { src: "image/A1_brock.webp", alt: "A1 웅", get: "최강의 유전자 피카츄", rarity: 2, pack: 3 },
    { src: "image/A1_sabrina.webp", alt: "A1 초련", get: "최강의 유전자 리자몽", rarity: 2, pack: 1 },
    { src: "image/A1_lt._surge.webp", alt: "A1 마티스", get: "최강의 유전자 피카츄", rarity: 2, pack: 3 },
    { src: "image/A1_bulbasaur_gold_1.webp", alt: "A1 이상해씨", get: "최강의 유전자 뮤츠", rarity: 5, pack: 2 },
    { src: "image/A1_gloom_gold_1.webp", alt: "A1 냄새꼬", get: "최강의 유전자 리자몽", rarity: 5, pack: 1 },
    { src: "image/A1_pinsir_gold_1.webp", alt: "A1 쁘사이저", get: "최강의 유전자 리자몽", rarity: 5, pack: 1 },
    { src: "image/A1_charmander_gold_1.webp", alt: "A1 파이리", get: "최강의 유전자 리자몽", rarity: 5, pack: 1 },
    { src: "image/A1_rapidash_gold_1.webp", alt: "A1 날쌩마", get: "최강의 유전자 리자몽", rarity: 5, pack: 1 },
    { src: "image/A1_squirtle_gold_1.webp", alt: "A1 꼬부기", get: "최강의 유전자 피카츄", rarity: 5, pack: 3 },
    { src: "image/A1_gyarados_gold_1.webp", alt: "A1 갸라도스", get: "최강의 유전자 피카츄", rarity: 5, pack: 3 },
    { src: "image/A1_lapras_gold_1.webp", alt: "A1 라프라스", get: "최강의 유전자 리자몽", rarity: 5, pack: 1 },
    { src: "image/A1_electrode_gold_1.webp", alt: "A1 붐볼", get: "최강의 유전자 피카츄", rarity: 5, pack: 3 },
    { src: "image/A1_alakazam_gold_1.webp", alt: "A1 후딘", get: "최강의 유전자 리자몽", rarity: 5, pack: 1 },
    { src: "image/A1_slowpoke_gold_1.webp", alt: "A1 야돈", get: "최강의 유전자 리자몽", rarity: 5, pack: 1 },
    { src: "image/A1_diglett_gold_1.webp", alt: "A1 디그다", get: "최강의 유전자 피카츄", rarity: 5, pack: 3 },
    { src: "image/A1_cubone_gold_1.webp", alt: "A1 탕구리", get: "최강의 유전자 뮤츠", rarity: 5, pack: 2 },
    { src: "image/A1_nidoqueen_gold_1.webp", alt: "A1 니드퀸", get: "최강의 유전자 피카츄", rarity: 5, pack: 3 },
    { src: "image/A1_nidoking_gold_1.webp", alt: "A1 니드킹", get: "최강의 유전자 피카츄", rarity: 5, pack: 3 },
    { src: "image/A1_golbat_gold_1.webp", alt: "A1 골뱃", get: "최강의 유전자 뮤츠", rarity: 5, pack: 2 },
    { src: "image/A1_weezing_gold_1.webp", alt: "A1 또도가스", get: "최강의 유전자 뮤츠", rarity: 5, pack: 2 },
    { src: "image/A1_dragonite_gold_1.webp", alt: "A1 망나뇽", get: "최강의 유전자 뮤츠", rarity: 5, pack: 2 },
    { src: "image/A1_pidgeot_gold_1.webp", alt: "A1 피죤투", get: "최강의 유전자 뮤츠", rarity: 5, pack: 2 },
    { src: "image/A1_meowth_gold_1.webp", alt: "A1 나옹", get: "최강의 유전자 리자몽", rarity: 5, pack: 1 },
    { src: "image/A1_ditto_gold_1.webp", alt: "A1 메타몽", get: "최강의 유전자 뮤츠", rarity: 5, pack: 2 },
    { src: "image/A1_eevee_gold_1.webp", alt: "A1 이브이", get: "최강의 유전자 피카츄", rarity: 5, pack: 3 },
    { src: "image/A1_porygon_gold_1.webp", alt: "A1 폴리곤", get: "최강의 유전자 뮤츠", rarity: 5, pack: 2 },
    { src: "image/A1_snorlax_gold_1.webp", alt: "A1 잠만보", get: "최강의 유전자 피카츄", rarity: 5, pack: 3 },
    { src: "image/A1_venusaur_ex_gold_2.webp", alt: "A1 이상해꽃ex", get: "최강의 유전자 뮤츠", rarity: 6, pack: 2 },
    { src: "image/A1_exeggutor_ex_gold_2.webp", alt: "A1 나시ex", get: "최강의 유전자 리자몽", rarity: 6, pack: 1 },
    { src: "image/A1_charizard_ex_gold_2.webp", alt: "A1 리자몽ex", get: "최강의 유전자 리자몽", rarity: 6, pack: 1 },
    { src: "image/A1_arcanine_ex_gold_2.webp", alt: "A1 윈디ex", get: "최강의 유전자 피카츄", rarity: 6, pack: 3 },
    { src: "image/A1_moltres_ex_gold_2.webp", alt: "A1 파이어ex", get: "최강의 유전자 리자몽", rarity: 6, pack: 1 },
    { src: "image/A1_blastoise_ex_gold_2.webp", alt: "A1 거북왕ex", get: "최강의 유전자 피카츄", rarity: 6, pack: 3 },
    { src: "image/A1_starmie_ex_gold_2.webp", alt: "A1 아쿠스타ex", get: "최강의 유전자 리자몽", rarity: 6, pack: 1 },
    { src: "image/A1_articuno_ex_gold_2.webp", alt: "A1 프리져ex", get: "최강의 유전자 뮤츠", rarity: 6, pack: 2 },
    { src: "image/A1_pikachu_ex_gold_2.webp", alt: "A1 피카츄ex", get: "최강의 유전자 피카츄", rarity: 6, pack: 3 },
    { src: "image/A1_zapdos_ex_gold_2.webp", alt: "A1 썬더ex", get: "최강의 유전자 피카츄", rarity: 6, pack: 3 },
    { src: "image/A1_gengar_ex_gold_2.webp", alt: "A1 팬텀ex", get: "최강의 유전자 뮤츠", rarity: 6, pack: 2 },
    { src: "image/A1_mewtwo_ex_gold_2.webp", alt: "A1 뮤츠ex", get: "최강의 유전자 뮤츠", rarity: 6, pack: 2 },
    { src: "image/A1_machamp_ex_gold_2.webp", alt: "A1 괴력몬ex", get: "최강의 유전자 리자몽", rarity: 6, pack: 1 },
    { src: "image/A1_marowak_ex_gold_2.webp", alt: "A1 텅구리ex", get: "최강의 유전자 뮤츠", rarity: 6, pack: 2 },
    { src: "image/A1_wigglytuff_ex_gold_2.webp", alt: "A1 푸크린ex", get: "최강의 유전자 피카츄", rarity: 6, pack: 3 },
    { src: "image/A1_erika_gold_2.webp", alt: "A1 민화", get: "최강의 유전자 리자몽", rarity: 6, pack: 1 },
    { src: "image/A1_misty_gold_2.webp", alt: "A1 이슬", get: "최강의 유전자 피카츄", rarity: 6, pack: 3 },
    { src: "image/A1_blaine_gold_2.webp", alt: "A1 강연", get: "최강의 유전자 리자몽", rarity: 6, pack: 1 },
    { src: "image/A1_koga_gold_2.webp", alt: "A1 독수", get: "최강의 유전자 뮤츠", rarity: 6, pack: 2 },
    { src: "image/A1_giovanni_gold_2.webp", alt: "A1 비주기", get: "최강의 유전자 뮤츠", rarity: 6, pack: 2 },
    { src: "image/A1_brock_gold_2.webp", alt: "A1 웅", get: "최강의 유전자 피카츄", rarity: 6, pack: 3 },
    { src: "image/A1_sabrina_gold_2.webp", alt: "A1 초련", get: "최강의 유전자 리자몽", rarity: 6, pack: 1 },
    { src: "image/A1_lt._surge_gold_2.webp", alt: "A1 마티스", get: "최강의 유전자 피카츄", rarity: 6, pack: 3 },
    { src: "image/A1_moltres_ex_gold_2_1.webp", alt: "A1 파이어ex", get: "최강의 유전자 리자몽", rarity: 6, pack: 1 },
    { src: "image/A1_articuno_ex_gold_2_1.webp", alt: "A1 프리져ex", get: "최강의 유전자 뮤츠", rarity: 6, pack: 2 },
    { src: "image/A1_zapdos_ex_gold_2_1.webp", alt: "A1 썬더ex", get: "최강의 유전자 피카츄", rarity: 6, pack: 3 },
    { src: "image/A1_gengar_ex_gold_2_1.webp", alt: "A1 팬텀ex", get: "최강의 유전자 뮤츠", rarity: 6, pack: 2 },
    { src: "image/A1_machamp_ex_gold_2_1.webp", alt: "A1 괴력몬ex", get: "최강의 유전자 리자몽", rarity: 6, pack: 1 },
    { src: "image/A1_wigglytuff_ex_gold_2_1.webp", alt: "A1 푸크린ex", get: "최강의 유전자 피카츄", rarity: 6, pack: 3 },
    { src: "image/A1_charizard_ex_gold_3.webp", alt: "A1 리자몽ex", get: "최강의 유전자 리자몽", rarity: 7, pack: 1 },
    { src: "image/A1_pikachu_ex_gold_3.webp", alt: "A1 피카츄ex", get: "최강의 유전자 피카츄", rarity: 7, pack: 3 },
    { src: "image/A1_mewtwo_ex_gold_3.webp", alt: "A1 뮤츠ex", get: "최강의 유전자 뮤츠", rarity: 7, pack: 2 },
    { src: "image/A1_mew_gold_3.webp", alt: "A1 뮤", get: "도감완성", rarity: 7, pack: 4 },
    { src: "image/A1_charizard_ex_crown.webp", alt: "A1 리자몽ex", get: "최강의 유전자", rarity: 8, pack: 0 },
    { src: "image/A1_pikachu_ex_crown.webp", alt: "A1 피카츄ex", get: "최강의 유전자", rarity: 8, pack: 0 },
    { src: "image/A1_mewtwo_ex_crown.webp", alt: "A1 뮤츠ex", get: "최강의 유전자", rarity: 8, pack: 0 },
    { src: "image/P_A_potion.webp", alt: "P-A 상처약", get: "상점", rarity: 9, pack: 4 },
    { src: "image/P_A_x_speed.webp", alt: "P-A 스피드업", get: "상점", rarity: 9, pack: 4 },
    { src: "image/P_A_hand_scope.webp", alt: "P-A 랜드스코프", get: "상점", rarity: 9, pack: 4 },
    { src: "image/P_A_pokedex.webp", alt: "P-A 포켓몬 도감", get: "상점", rarity: 9, pack: 4 },
    { src: "image/P_A_poke_ball.webp", alt: "P-A 몬스터볼", get: "상점", rarity: 9, pack: 4 },
    { src: "image/P_A_red_card.webp", alt: "P-A 레드카드", get: "상점", rarity: 9, pack: 4 },
    { src: "image/P_A_professor's_research.webp", alt: "P-A 박사의 연구", get: "상점", rarity: 9, pack: 4 },
    { src: "image/P_A_pikachu.webp", alt: "P-A 피카츄", get: "상점", rarity: 9, pack: 4 },
    { src: "image/P_A_mewtwo.webp", alt: "P-A 뮤츠", get: "12월 프리미엄패스 보상", rarity: 9, pack: 4 },
    { src: "image/P_A_chansey.webp", alt: "P-A 럭키", get: "겟 챌린지 이벤트 전반 개최", rarity: 9, pack: 4 },
    { src: "image/P_A_meowth.webp", alt: "P-A 나옹", get: "겟 챌린지 이벤트 전반 개최", rarity: 9, pack: 4 },
    { src: "image/P_A_butterfree.webp", alt: "P-A 버터플", get: "라프라스 ex 드롭 이벤트", rarity: 9, pack: 4 },
    { src: "image/P_A_lapras_ex.webp", alt: "P-A 라프라스ex", get: "라프라스 ex 드롭 이벤트", rarity: 9, pack: 4 },
    { src: "image/P_A_2_pikachu.webp", alt: "P-A 피카츄", get: "라프라스 ex 드롭 이벤트", rarity: 9, pack: 4 },
    { src: "image/P_A_clefairy.webp", alt: "P-A 삐삐", get: "라프라스 ex 드롭 이벤트", rarity: 9, pack: 4 },
    { src: "image/P_A_mankey.webp", alt: "P-A 망키", get: "라프라스 ex 드롭 이벤트", rarity: 9, pack: 4 },
    { src: "image/P_A_venusaur.webp", alt: "P-A 이상해꽃", get: "이상해꽃 드롭 이벤트", rarity: 9, pack: 4 },
    { src: "image/P_A_greninja.webp", alt: "P-A 개굴닌자", get: "이상해꽃 드롭 이벤트", rarity: 9, pack: 4 },
    { src: "image/P_A_haunter.webp", alt: "P-A 고우스트", get: "이상해꽃 드롭 이벤트", rarity: 9, pack: 4 },
    { src: "image/P_A_onix.webp", alt: "P-A 롱스톤", get: "이상해꽃 드롭 이벤트", rarity: 9, pack: 4 },
    { src: "image/P_A_jigglypuff.webp", alt: "P-A 푸린", get: "이상해꽃 드롭 이벤트", rarity: 9, pack: 4 },
    { src: "image/P_A_bulbasaur.webp", alt: "P-A 이상해씨", get: "겟 챌린지 이벤트 전반 개최", rarity: 9, pack: 4 },
    { src: "image/P_A_magnemite.webp", alt: "P-A 코일", get: "겟 챌린지 이벤트 전반 개최", rarity: 9, pack: 4 },
    { src: "image/A1a_exeggcute.webp", alt: "A1a 아라리", get: "환상이 있는 섬", rarity: 1, pack: 5 },
    { src: "image/A1a_exeggutor.webp", alt: "A1a 나시", get: "환상이 있는 섬", rarity: 2, pack: 5 },
    { src: "image/A1a_celebi_ex.webp", alt: "A1a 세레비ex", get: "환상이 있는 섬", rarity: 4, pack: 5 },
    { src: "image/A1a_snivy.webp", alt: "A1a 주리비얀", get: "환상이 있는 섬", rarity: 1, pack: 5 },
    { src: "image/A1a_servine.webp", alt: "A1a 샤비", get: "환상이 있는 섬", rarity: 2, pack: 5 },
    { src: "image/A1a_serperior.webp", alt: "A1a 샤로다", get: "환상이 있는 섬", rarity: 3, pack: 5 },
    { src: "image/A1a_morelull.webp", alt: "A1a 자마슈", get: "환상이 있는 섬", rarity: 1, pack: 5 },
    { src: "image/A1a_shiinotic.webp", alt: "A1a 마셰이드", get: "환상이 있는 섬", rarity: 2, pack: 5 },
    { src: "image/A1a_dhelmise.webp", alt: "A1a 타타륜", get: "환상이 있는 섬", rarity: 2, pack: 5 },
    { src: "image/A1a_ponyta.webp", alt: "A1a 포니타", get: "환상이 있는 섬", rarity: 1, pack: 5 },
    { src: "image/A1a_rapidash.webp", alt: "A1a 날쌩마", get: "환상이 있는 섬", rarity: 2, pack: 5 },
    { src: "image/A1a_magmar.webp", alt: "A1a 마그마", get: "환상이 있는 섬", rarity: 2, pack: 5 },
    { src: "image/A1a_larvesta.webp", alt: "A1a 활화르바", get: "환상이 있는 섬", rarity: 1, pack: 5 },
    { src: "image/A1a_volcarona.webp", alt: "A1a 불카모스", get: "환상이 있는 섬", rarity: 3, pack: 5 },
    { src: "image/A1a_salandit.webp", alt: "A1a 야도뇽", get: "환상이 있는 섬", rarity: 1, pack: 5 },
    { src: "image/A1a_salazzle.webp", alt: "A1a 염뉴트", get: "환상이 있는 섬", rarity: 1, pack: 5 },
    { src: "image/A1a_magikarp.webp", alt: "A1a 잉어킹", get: "환상이 있는 섬", rarity: 1, pack: 5 },
    { src: "image/A1a_gyarados_ex.webp", alt: "A1a 갸라도스ex", get: "환상이 있는 섬", rarity: 4, pack: 5 },
    { src: "image/A1a_vaporeon.webp", alt: "A1a 샤미드", get: "환상이 있는 섬", rarity: 3, pack: 5 },
    { src: "image/A1a_finneon.webp", alt: "A1a 형광어", get: "환상이 있는 섬", rarity: 1, pack: 5 },
    { src: "image/A1a_lumineon.webp", alt: "A1a 네오라이트", get: "환상이 있는 섬", rarity: 2, pack: 5 },
    { src: "image/A1a_chewtle.webp", alt: "A1a 깨물부기", get: "환상이 있는 섬", rarity: 1, pack: 5 },
    { src: "image/A1a_drednaw.webp", alt: "A1a 갈가부기", get: "환상이 있는 섬", rarity: 2, pack: 5 },
    { src: "image/A1a_cramorant.webp", alt: "A1a 윽우지", get: "환상이 있는 섬", rarity: 1, pack: 5 },
    { src: "image/A1a_pikachu.webp", alt: "A1a 피카츄", get: "환상이 있는 섬", rarity: 1, pack: 5 },
    { src: "image/A1a_raichu.webp", alt: "A1a 라이츄", get: "환상이 있는 섬", rarity: 3, pack: 5 },
    { src: "image/A1a_electabuzz.webp", alt: "A1a 에레브", get: "환상이 있는 섬", rarity: 2, pack: 5 },
    { src: "image/A1a_joltik.webp", alt: "A1a 파쪼옥", get: "환상이 있는 섬", rarity: 1, pack: 5 },
    { src: "image/A1a_galvantula.webp", alt: "A1a 전툴라", get: "환상이 있는 섬", rarity: 2, pack: 5 },
    { src: "image/A1a_dedenne.webp", alt: "A1a 데덴네", get: "환상이 있는 섬", rarity: 1, pack: 5 },
    { src: "image/A1a_mew.webp", alt: "A1a 뮤", get: "환상이 있는 섬", rarity: 3, pack: 5 },
    { src: "image/A1a_mew_ex.webp", alt: "A1a 뮤ex", get: "환상이 있는 섬", rarity: 4, pack: 5 },
    { src: "image/A1a_sigilyph.webp", alt: "A1a 심보러", get: "환상이 있는 섬", rarity: 2, pack: 5 },
    { src: "image/A1a_elgyem.webp", alt: "A1a 리그레", get: "환상이 있는 섬", rarity: 1, pack: 5 },
    { src: "image/A1a_beheeyem.webp", alt: "A1a 벰크", get: "환상이 있는 섬", rarity: 2, pack: 5 },
    { src: "image/A1a_flabébé.webp", alt: "A1a 플라베베", get: "환상이 있는 섬", rarity: 1, pack: 5 },
    { src: "image/A1a_floette.webp", alt: "A1a 플라엣테", get: "환상이 있는 섬", rarity: 1, pack: 5 },
    { src: "image/A1a_florges.webp", alt: "A1a 플라제스", get: "환상이 있는 섬", rarity: 2, pack: 5 },
    { src: "image/A1a_swirlix.webp", alt: "A1a 나룸퍼프", get: "환상이 있는 섬", rarity: 1, pack: 5 },
    { src: "image/A1a_slurpuff.webp", alt: "A1a 나루림", get: "환상이 있는 섬", rarity: 1, pack: 5 },
    { src: "image/A1a_mankey.webp", alt: "A1a 망키", get: "환상이 있는 섬", rarity: 1, pack: 5 },
    { src: "image/A1a_primeape.webp", alt: "A1a 성원숭", get: "환상이 있는 섬", rarity: 1, pack: 5 },
    { src: "image/A1a_geodude.webp", alt: "A1a 꼬마돌", get: "환상이 있는 섬", rarity: 1, pack: 5 },
    { src: "image/A1a_graveler.webp", alt: "A1a 데구리", get: "환상이 있는 섬", rarity: 2, pack: 5 },
    { src: "image/A1a_golem.webp", alt: "A1a 딱구리", get: "환상이 있는 섬", rarity: 3, pack: 5 },
    { src: "image/A1a_aerodactyl_ex.webp", alt: "A1a 프테라ex", get: "환상이 있는 섬", rarity: 4, pack: 5 },
    { src: "image/A1a_marshadow.webp", alt: "A1a 마샤도", get: "환상이 있는 섬", rarity: 3, pack: 5 },
    { src: "image/A1a_stonjourner.webp", alt: "A1a 돌헨진", get: "환상이 있는 섬", rarity: 2, pack: 5 },
    { src: "image/A1a_koffing.webp", alt: "A1a 또가스", get: "환상이 있는 섬", rarity: 1, pack: 5 },
    { src: "image/A1a_weezing.webp", alt: "A1a 또도가스", get: "환상이 있는 섬", rarity: 2, pack: 5 },
    { src: "image/A1a_purrloin.webp", alt: "A1a 쌔비냥", get: "환상이 있는 섬", rarity: 1, pack: 5 },
    { src: "image/A1a_liepard.webp", alt: "A1a 레파르다스", get: "환상이 있는 섬", rarity: 1, pack: 5 },
    { src: "image/A1a_venipede.webp", alt: "A1a 마디네", get: "환상이 있는 섬", rarity: 1, pack: 5 },
    { src: "image/A1a_whirlipede.webp", alt: "A1a 휠구", get: "환상이 있는 섬", rarity: 1, pack: 5 },
    { src: "image/A1a_scolipede.webp", alt: "A1a 펜드라", get: "환상이 있는 섬", rarity: 2, pack: 5 },
    { src: "image/A1a_druddigon.webp", alt: "A1a 크리만", get: "환상이 있는 섬", rarity: 2, pack: 5 },
    { src: "image/A1a_pidgey.webp", alt: "A1a 구구", get: "환상이 있는 섬", rarity: 1, pack: 5 },
    { src: "image/A1a_pidgeotto.webp", alt: "A1a 피죤", get: "환상이 있는 섬", rarity: 1, pack: 5 },
    { src: "image/A1a_pidgeot_ex.webp", alt: "A1a 피죤투ex", get: "환상이 있는 섬", rarity: 4, pack: 5 },
    { src: "image/A1a_tauros.webp", alt: "A1a 켄타로스", get: "환상이 있는 섬", rarity: 3, pack: 5 },
    { src: "image/A1a_eevee.webp", alt: "A1a 이브이", get: "환상이 있는 섬", rarity: 1, pack: 5 },
    { src: "image/A1a_chatot.webp", alt: "A1a 페라페", get: "환상이 있는 섬", rarity: 1, pack: 5 },
    { src: "image/A1a_old_amber.webp", alt: "A1a 비밀의호박", get: "환상이 있는 섬", rarity: 1, pack: 5 },
    { src: "image/A1a_pokemon_flute.webp", alt: "A1a 포켓몬피리", get: "환상이 있는 섬", rarity: 2, pack: 5 },
    { src: "image/A1a_mythical_slab.webp", alt: "A1a 환상의 석판", get: "환상이 있는 섬", rarity: 2, pack: 5 },
    { src: "image/A1a_budding_expeditioner.webp", alt: "A1a 신출내기 조사원", get: "환상이 있는 섬", rarity: 2, pack: 5 },
    { src: "image/A1a_green.webp", alt: "A1a 그린", get: "환상이 있는 섬", rarity: 2, pack: 5 },
    { src: "image/A1a_leaf.webp", alt: "A1a 리프", get: "환상이 있는 섬", rarity: 2, pack: 5 },
    { src: "image/A1a_exeggutor_gold_1.webp", alt: "A1a 나시", get: "환상이 있는 섬", rarity: 5, pack: 5 },
    { src: "image/A1a_serperior_gold_1.webp", alt: "A1a 샤로다", get: "환상이 있는 섬", rarity: 5, pack: 5 },
    { src: "image/A1a_salandit_gold_1.webp", alt: "A1a 야도뇽", get: "환상이 있는 섬", rarity: 5, pack: 5 },
    { src: "image/A1a_vaporeon_gold_1.webp", alt: "A1a 샤미드", get: "환상이 있는 섬", rarity: 5, pack: 5 },
    { src: "image/A1a_dedenne_gold_1.webp", alt: "A1a 데덴네", get: "환상이 있는 섬", rarity: 5, pack: 5 },
    { src: "image/A1a_marshadow_gold_1.webp", alt: "A1a 마샤도", get: "환상이 있는 섬", rarity: 5, pack: 5 },
    { src: "image/A1a_celebi_ex_gold_2.webp", alt: "A1a 세레비ex", get: "환상이 있는 섬", rarity: 6, pack: 5 },
    { src: "image/A1a_gyarados_ex_gold_2.webp", alt: "A1a 갸라도스ex", get: "환상이 있는 섬", rarity: 6, pack: 5 },
    { src: "image/A1a_mew_ex_gold_2.webp", alt: "A1a 뮤ex", get: "환상이 있는 섬", rarity: 6, pack: 5 },
    { src: "image/A1a_aerodactyl_ex_gold_2.webp", alt: "A1a 프테라ex", get: "환상이 있는 섬", rarity: 6, pack: 5 },
    { src: "image/A1a_pidgeot_ex_gold_2.webp", alt: "A1a 피죤투ex", get: "환상이 있는 섬", rarity: 6, pack: 5 },
    { src: "image/A1a_budding_expeditioner_gold_2.webp", alt: "A1a 신출내기 조사원", get: "환상이 있는 섬", rarity: 6, pack: 5 },
    { src: "image/A1a_green_gold_2.webp", alt: "A1a 그린", get: "환상이 있는 섬", rarity: 6, pack: 5 },
    { src: "image/A1a_leaf_gold_2.webp", alt: "A1a 리프", get: "환상이 있는 섬", rarity: 6, pack: 5 },
    { src: "image/A1a_mew_ex_gold_2_1.webp", alt: "A1a 뮤ex", get: "환상이 있는 섬", rarity: 6, pack: 5 },
    { src: "image/A1a_aerodactyl_ex_gold_2_1.webp", alt: "A1a 프테라ex", get: "환상이 있는 섬", rarity: 6, pack: 5 },
    { src: "image/A1a_celebi_ex_gold_3.webp", alt: "A1a 세레비ex", get: "환상이 있는 섬", rarity: 7, pack: 5 },
    { src: "image/A1a_mex_ex_crown.webp", alt: "A1a 뮤ex", get: "환상이 있는 섬", rarity: 8, pack: 5 },
    { src: "image/P_A_moltres_ex.webp", alt: "P-A 파이어ex", get: "12월 프리미엄패스 보상", rarity: 9, pack: 4 },
    { src: "image/P_A_3_pikachu.webp", alt: "P-A 피카츄", get: "뉴이어 이벤트 보상", rarity: 9, pack: 4 },
    { src: "image/P_A_snivy.webp", alt: "P-A 주리비얀", get: "거북왕 드롭 이벤트", rarity: 9, pack: 4 },
    { src: "image/P_A_volcarona.webp", alt: "P-A 불카모스", get: "거북왕 드롭 이벤트", rarity: 9, pack: 4 },
    { src: "image/P_A_blastoise.webp", alt: "P-A 거북왕", get: "거북왕 드롭 이벤트", rarity: 9, pack: 4 },
    { src: "image/P_A_eevee.webp", alt: "P-A 이브이", get: "거북왕 드롭 이벤트", rarity: 9, pack: 4 },
    { src: "image/P_A_cinccino.webp", alt: "P-A 치라치노", get: "거북왕 드롭 이벤트", rarity: 9, pack: 4 },
    { src: "image/P_A_charmander.webp", alt: "P-A 파이리", get: "겟 챌린지 이벤트 전반 개최", rarity: 9, pack: 4 },
    { src: "image/P_A_squirtle.webp", alt: "P-A 꼬부기", get: "겟 챌린지 이벤트 전반 개최", rarity: 9, pack: 4 },
    /*{ src: "image/P_A_2_pokedex.webp", alt: "P-A 포켓몬 도감", get: "환상이 있는 섬", rarity: 9, pack: 0 },
    */
];

// 카드 리스트 생성 함수
function createCardItems(imageData) {
    const cardList = document.querySelector('.card-list');

    imageData.forEach((data, index) => {
        const cardItem = document.createElement('li');
        cardItem.classList.add('card-item');
        cardItem.setAttribute('data-name', data.alt);
        cardItem.setAttribute('data-rarity', data.rarity);
        cardItem.setAttribute('data-pack', data.pack);

        const img = document.createElement('img');
        img.src = data.src;
        img.alt = data.alt;
        img.setAttribute('data-get', data.get);

        const button = document.createElement('button');
        button.type = 'button';
        button.classList.add('view-button');
        button.setAttribute('data-modal', 'view');

        button.addEventListener('click', function() {
            modalWindowOpen(this);
        });

        const input = document.createElement('input');
        input.type = 'number';
        input.name = 'cardCount';
        input.id = `cardCount${index}`;
        input.value = 0;
        input.setAttribute('data-id', index);
        input.min = 0;

        cardItem.appendChild(img);
        cardItem.appendChild(button);
        cardItem.appendChild(input);

        cardList.appendChild(cardItem);
    });
}

// 카드 리스트 호출
createCardItems(imageData);