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
    { src: "image/bulbasaur.webp", alt: "A1 이상해씨", get: "최강의 유전자 뮤츠", rarity: 1, pack: 2 },
    { src: "image/ivysaur.webp", alt: "A1 이상해풀", get: "최강의 유전자 뮤츠", rarity: 2, pack: 2 },
    { src: "image/venusaur.webp", alt: "A1 이상해꽃", get: "최강의 유전자 뮤츠", rarity: 3, pack: 2 },
    { src: "image/venusaur_ex.webp", alt: "A1 이상해꽃ex", get: "최강의 유전자 뮤츠", rarity: 4, pack: 2 },
    { src: "image/caterpie.webp", alt: "A1 캐터피", get: "최강의 유전자 피카츄", rarity: 1, pack: 3 },
    { src: "image/metapod.webp", alt: "A1 단데기", get: "최강의 유전자 피카츄", rarity: 1, pack: 3 },
    { src: "image/butterfree.webp", alt: "A1 버터플", get: "최강의 유전자 피카츄", rarity: 3, pack: 3 },
    { src: "image/weedle.webp", alt: "A1 뿔충이", get: "최강의 유전자 뮤츠", rarity: 1, pack: 2 },
    { src: "image/kakuna.webp", alt: "A1 딱충이", get: "최강의 유전자 뮤츠", rarity: 1, pack: 2 },
    { src: "image/beedrill.webp", alt: "A1 독침붕", get: "최강의 유전자 뮤츠", rarity: 3, pack: 2 },
    { src: "image/oddish.webp", alt: "A1 뚜벅쵸", get: "최강의 유전자 리자몽", rarity: 1, pack: 1 },
    { src: "image/gloom.webp", alt: "A1 냄새꼬", get: "최강의 유전자 리자몽", rarity: 2, pack: 1 },
    { src: "image/vileplume.webp", alt: "A1 라플레시아", get: "최강의 유전자 리자몽", rarity: 3, pack: 1 },
    { src: "image/paras.webp", alt: "A1 파라스", get: "최강의 유전자 피카츄", rarity: 1, pack: 3 },
    { src: "image/parasect.webp", alt: "A1 파라섹트", get: "최강의 유전자 피카츄", rarity: 2, pack: 3 },
    { src: "image/venonat.webp", alt: "A1 콘팡", get: "최강의 유전자 뮤츠", rarity: 1, pack: 2 },
    { src: "image/venomoth.webp", alt: "A1 도나리", get: "최강의 유전자 뮤츠", rarity: 2, pack: 2 },
    { src: "image/bellsprout.webp", alt: "A1 모다피", get: "최강의 유전자 리자몽", rarity: 1, pack: 1 },
    { src: "image/weepinbell.webp", alt: "A1 우츠동", get: "최강의 유전자 리자몽", rarity: 2, pack: 1 },
    { src: "image/victreebel.webp", alt: "A1 우츠보트", get: "최강의 유전자 리자몽", rarity: 3, pack: 1 },
    { src: "image/exeggcute.webp", alt: "A1 아라리", get: "최강의 유전자 리자몽", rarity: 1, pack: 1 },
    { src: "image/exeggutor.webp", alt: "A1 나시", get: "최강의 유전자 리자몽", rarity: 3, pack: 1 },
    { src: "image/exeggutor_ex.webp", alt: "A1 나시ex", get: "최강의 유전자 리자몽", rarity: 4, pack: 1 },
    { src: "image/tangela.webp", alt: "A1 덩쿠리", get: "최강의 유전자 리자몽", rarity: 1, pack: 1 },
    { src: "image/scyther.webp", alt: "A1 스라크", get: "최강의 유전자 뮤츠", rarity: 1, pack: 2 },
    { src: "image/pinsir.webp", alt: "A1 쁘사이저", get: "최강의 유전자", rarity: 2, pack: 0 },
    { src: "image/cottonee.webp", alt: "A1 소미안", get: "최강의 유전자", rarity: 1, pack: 0 },
    { src: "image/whimsicott.webp", alt: "A1 엘풍", get: "최강의 유전자", rarity: 2, pack: 0 },
    { src: "image/petilil.webp", alt: "A1 치릴리", get: "최강의 유전자", rarity: 1, pack: 0 },
    { src: "image/lilligant.webp", alt: "A1 드레디어", get: "최강의 유전자", rarity: 2, pack: 0 },
    { src: "image/skiddo.webp", alt: "A1 메이클", get: "최강의 유전자 리자몽", rarity: 1, pack: 1 },
    { src: "image/gogoat.webp", alt: "A1 고고트", get: "최강의 유전자 리자몽", rarity: 1, pack: 1 },
    { src: "image/charmander.webp", alt: "A1 파이리", get: "최강의 유전자 리자몽", rarity: 1, pack: 1 },
    { src: "image/charmeleon.webp", alt: "A1 리자드", get: "최강의 유전자 리자몽", rarity: 2, pack: 1 },
    { src: "image/charizard.webp", alt: "A1 리자몽", get: "최강의 유전자 리자몽", rarity: 3, pack: 1 },
    { src: "image/charizard_ex.webp", alt: "A1 리자몽ex", get: "최강의 유전자 리자몽", rarity: 4, pack: 1 },
    { src: "image/vulpix.webp", alt: "A1 식스테일", get: "최강의 유전자 리자몽", rarity: 1, pack: 1 },
    { src: "image/ninetales.webp", alt: "A1 나인테일", get: "최강의 유전자 리자몽", rarity: 2, pack: 1 },
    { src: "image/growlithe.webp", alt: "A1 가디", get: "최강의 유전자 피카츄", rarity: 1, pack: 3 },
    { src: "image/arcanine.webp", alt: "A1 윈디", get: "최강의 유전자 피카츄", rarity: 3, pack: 3 },
    { src: "image/arcanine_ex.webp", alt: "A1 윈디ex", get: "최강의 유전자 피카츄", rarity: 4, pack: 3 },
    { src: "image/ponyta.webp", alt: "A1 포니타", get: "최강의 유전자", rarity: 1, pack: 0 },
    { src: "image/rapidash.webp", alt: "A1 날쌩마", get: "최강의 유전자", rarity: 2, pack: 0 },
    { src: "image/magmar.webp", alt: "A1 마그마", get: "최강의 유전자 리자몽", rarity: 1, pack: 1 },
    { src: "image/flareon.webp", alt: "A1 부스터", get: "최강의 유전자 리자몽", rarity: 3, pack: 1 },
    { src: "image/moltres.webp", alt: "A1 파이어", get: "최강의 유전자 리자몽", rarity: 3, pack: 1 },
    { src: "image/moltres_ex.webp", alt: "A1 파이어ex", get: "최강의 유전자 리자몽", rarity: 4, pack: 1 },
    { src: "image/heatmor.webp", alt: "A1 앤티골", get: "최강의 유전자", rarity: 1, pack: 0 },
    { src: "image/salandit.webp", alt: "A1 야도뇽", get: "최강의 유전자 뮤츠", rarity: 1, pack: 2 },
    { src: "image/salazzle.webp", alt: "A1 염뉴트", get: "최강의 유전자 뮤츠", rarity: 1, pack: 2 },
    { src: "image/sizzlipede.webp", alt: "A1 태우지네", get: "최강의 유전자", rarity: 1, pack: 0 },
    { src: "image/centiskorch.webp", alt: "A1 다태우지네", get: "최강의 유전자", rarity: 2, pack: 0 },
    { src: "image/squirtle.webp", alt: "A1 꼬부기", get: "최강의 유전자 피카츄", rarity: 1, pack: 3 },
    { src: "image/wartortle.webp", alt: "A1 어니부기", get: "최강의 유전자 피카츄", rarity: 2, pack: 3 },
    { src: "image/blastoise.webp", alt: "A1 거북왕", get: "최강의 유전자 피카츄", rarity: 3, pack: 3 },
    { src: "image/blastoise_ex.webp", alt: "A1 거북왕ex", get: "최강의 유전자 피카츄", rarity: 4, pack: 3 },
    { src: "image/psyduck.webp", alt: "A1 고라파덕", get: "최강의 유전자", rarity: 1, pack: 0 },
    { src: "image/golduck.webp", alt: "A1 골덕", get: "최강의 유전자", rarity: 2, pack: 0 },
    { src: "image/poliwag.webp", alt: "A1 발챙이", get: "최강의 유전자 리자몽", rarity: 1, pack: 1 },
    { src: "image/poliwhirl.webp", alt: "A1 슈륙챙이", get: "최강의 유전자 리자몽", rarity: 2, pack: 1 },
    { src: "image/poliwrath.webp", alt: "A1 강챙이", get: "최강의 유전자 리자몽", rarity: 3, pack: 1 },
    { src: "image/tentacool.webp", alt: "A1 왕눈해", get: "최강의 유전자 뮤츠", rarity: 1, pack: 2 },
    { src: "image/tentacruel.webp", alt: "A1 독파리", get: "최강의 유전자 뮤츠", rarity: 2, pack: 2 },
    { src: "image/seel.webp", alt: "A1 쥬쥬", get: "최강의 유전자 피카츄", rarity: 1, pack: 3 },
    { src: "image/dewgong.webp", alt: "A1 쥬레곤", get: "최강의 유전자 피카츄", rarity: 2, pack: 3 },
    { src: "image/shellder.webp", alt: "A1 셀러", get: "최강의 유전자 뮤츠", rarity: 1, pack: 2 },
    { src: "image/cloyster.webp", alt: "A1 파르셀", get: "최강의 유전자 뮤츠", rarity: 2, pack: 2 },
    { src: "image/krabby.webp", alt: "A1 크랩", get: "최강의 유전자 뮤츠", rarity: 1, pack: 2 },
    { src: "image/kingler.webp", alt: "A1 킹크랩", get: "최강의 유전자 뮤츠", rarity: 2, pack: 2 },
    { src: "image/horsea.webp", alt: "A1 쏘드라", get: "최강의 유전자 피카츄", rarity: 1, pack: 3 },
    { src: "image/seadra.webp", alt: "A1 시드라", get: "최강의 유전자 피카츄", rarity: 2, pack: 3 },
    { src: "image/goldeen.webp", alt: "A1 콘치", get: "최강의 유전자 피카츄", rarity: 1, pack: 3 },
    { src: "image/seaking.webp", alt: "A1 왕콘치", get: "최강의 유전자 피카츄", rarity: 1, pack: 3 },
    { src: "image/staryu.webp", alt: "A1 별가사리", get: "최강의 유전자 리자몽", rarity: 1, pack: 1 },
    { src: "image/starmie.webp", alt: "A1 아쿠스타", get: "최강의 유전자 리자몽", rarity: 2, pack: 1 },
    { src: "image/starmie_ex.webp", alt: "A1 아쿠스타ex", get: "최강의 유전자 리자몽", rarity: 4, pack: 1 },
    { src: "image/magikarp.webp", alt: "A1 잉어킹", get: "최강의 유전자 피카츄", rarity: 1, pack: 3 },
    { src: "image/gyarados.webp", alt: "A1 갸라도스", get: "최강의 유전자 피카츄", rarity: 3, pack: 3 },
    { src: "image/lapras.webp", alt: "A1 라프라스", get: "최강의 유전자 리자몽", rarity: 3, pack: 1 },
    { src: "image/vaporeon.webp", alt: "A1 샤미드", get: "최강의 유전자 뮤츠", rarity: 3, pack: 2 },
    { src: "image/omanyte.webp", alt: "A1 암나이트", get: "최강의 유전자 피카츄", rarity: 2, pack: 3 },
    { src: "image/omastar.webp", alt: "A1 암스타", get: "최강의 유전자 피카츄", rarity: 3, pack: 3 },
    { src: "image/articuno.webp", alt: "A1 프리져", get: "최강의 유전자 뮤츠", rarity: 3, pack: 2 },
    { src: "image/articuno_ex.webp", alt: "A1 프리져ex", get: "최강의 유전자 뮤츠", rarity: 4, pack: 2 },
    { src: "image/ducklett.webp", alt: "A1 꼬지보리", get: "최강의 유전자 리자몽", rarity: 1, pack: 1 },
    { src: "image/swanna.webp", alt: "A1 스완나", get: "최강의 유전자 리자몽", rarity: 2, pack: 1 },
    { src: "image/froakie.webp", alt: "A1 개구마르", get: "최강의 유전자 리자몽", rarity: 1, pack: 1 },
    { src: "image/frogadier.webp", alt: "A1 개굴반장", get: "최강의 유전자 리자몽", rarity: 2, pack: 1 },
    { src: "image/greninja.webp", alt: "A1 개굴닌자", get: "최강의 유전자 리자몽", rarity: 3, pack: 1 },
    { src: "image/pyukumuku.webp", alt: "A1 해무기", get: "최강의 유전자 리자몽", rarity: 1, pack: 1 },
    { src: "image/bruxish.webp", alt: "A1 치갈기", get: "최강의 유전자", rarity: 2, pack: 0 },
    { src: "image/snom.webp", alt: "A1 누니머기", get: "최강의 유전자", rarity: 1, pack: 0 },
    { src: "image/frosmoth.webp", alt: "A1 모스노우", get: "최강의 유전자", rarity: 2, pack: 0 },
    { src: "image/pikachu.webp", alt: "A1 피카츄", get: "최강의 유전자 피카츄", rarity: 1, pack: 3 },
    { src: "image/raichu.webp", alt: "A1 라이츄", get: "최강의 유전자 피카츄", rarity: 3, pack: 3 },
    { src: "image/pikachu_ex.webp", alt: "A1 피카츄ex", get: "최강의 유전자 피카츄", rarity: 4, pack: 3 },
    { src: "image/magnemite.webp", alt: "A1 코일", get: "최강의 유전자 피카츄", rarity: 1, pack: 3 },
    { src: "image/magneton.webp", alt: "A1 레어코일", get: "최강의 유전자 피카츄", rarity: 3, pack: 3 },
    { src: "image/voltorb.webp", alt: "A1 찌리리공", get: "최강의 유전자 피카츄", rarity: 1, pack: 3 },
    { src: "image/electrode.webp", alt: "A1 붐볼", get: "최강의 유전자 피카츄", rarity: 2, pack: 3 },
    { src: "image/electabuzz.webp", alt: "A1 에레브", get: "최강의 유전자 피카츄", rarity: 1, pack: 3 },
    { src: "image/jolteon.webp", alt: "A1 쥬피썬더", get: "최강의 유전자 피카츄", rarity: 3, pack: 3 },
    { src: "image/zapdos.webp", alt: "A1 썬더", get: "최강의 유전자 피카츄", rarity: 3, pack: 3 },
    { src: "image/zapdos_ex.webp", alt: "A1 썬더ex", get: "최강의 유전자 피카츄", rarity: 4, pack: 3 },
    { src: "image/blitzle.webp", alt: "A1 줄뮤마", get: "최강의 유전자", rarity: 1, pack: 0 },
    { src: "image/zebstrika.webp", alt: "A1 제브라이카", get: "최강의 유전자", rarity: 2, pack: 0 },
    { src: "image/tynamo.webp", alt: "A1 저리어", get: "최강의 유전자 뮤츠", rarity: 1, pack: 2 },
    { src: "image/eelektrik.webp", alt: "A1 저리릴", get: "최강의 유전자 뮤츠", rarity: 2, pack: 2 },
    { src: "image/eelektross.webp", alt: "A1 저리더프", get: "최강의 유전자 뮤츠", rarity: 3, pack: 2 },
    { src: "image/helioptile.webp", alt: "A1 목도리키텔", get: "최강의 유전자", rarity: 1, pack: 0 },
    { src: "image/heliolisk.webp", alt: "A1 일렉도리자드", get: "최강의 유전자", rarity: 1, pack: 0 },
    { src: "image/pincurchin.webp", alt: "A1 찌르성게", get: "최강의 유전자", rarity: 2, pack: 0 },
    { src: "image/clefairy.webp", alt: "A1 삐삐", get: "최강의 유전자 피카츄", rarity: 1, pack: 3 },
    { src: "image/clefable.webp", alt: "A1 픽시", get: "최강의 유전자 피카츄", rarity: 2, pack: 3 },
    { src: "image/abra.webp", alt: "A1 캐이시", get: "최강의 유전자 리자몽", rarity: 1, pack: 1 },
    { src: "image/kadabra.webp", alt: "A1 윤겔라", get: "최강의 유전자 리자몽", rarity: 2, pack: 1 },
    { src: "image/alakazam.webp", alt: "A1 후딘", get: "최강의 유전자 리자몽", rarity: 3, pack: 1 },
    { src: "image/slowpoke.webp", alt: "A1 야돈", get: "최강의 유전자", rarity: 1, pack: 0 },
    { src: "image/slowbro.webp", alt: "A1 야도란", get: "최강의 유전자", rarity: 2, pack: 0 },
    { src: "image/gastly.webp", alt: "A1 고오스", get: "최강의 유전자 뮤츠", rarity: 1, pack: 2 },
    { src: "image/haunter.webp", alt: "A1 고우스트", get: "최강의 유전자 뮤츠", rarity: 2, pack: 2 },
    { src: "image/gengar.webp", alt: "A1 팬텀", get: "최강의 유전자 뮤츠", rarity: 3, pack: 2 },
    { src: "image/gengar_ex.webp", alt: "A1 팬텀ex", get: "최강의 유전자 뮤츠", rarity: 4, pack: 2 },
    { src: "image/drowzee.webp", alt: "A1 슬리프", get: "최강의 유전자 피카츄", rarity: 1, pack: 3 },
    { src: "image/hypno.webp", alt: "A1 슬리퍼", get: "최강의 유전자 피카츄", rarity: 3, pack: 3 },
    { src: "image/mr._mime.webp", alt: "A1 마임맨", get: "최강의 유전자 뮤츠", rarity: 2, pack: 2 },
    { src: "image/jynx.webp", alt: "A1 루주라", get: "최강의 유전자 뮤츠", rarity: 1, pack: 2 },
    { src: "image/mewtwo.webp", alt: "A1 뮤츠", get: "최강의 유전자 뮤츠", rarity: 3, pack: 2 },
    { src: "image/mewtwo_ex.webp", alt: "A1 뮤츠ex", get: "최강의 유전자 뮤츠", rarity: 4, pack: 2 },
    { src: "image/ralts.webp", alt: "A1 랄토스", get: "최강의 유전자 뮤츠", rarity: 1, pack: 2 },
    { src: "image/kirlia.webp", alt: "A1 킬리아", get: "최강의 유전자 뮤츠", rarity: 2, pack: 2 },
    { src: "image/gardevoir.webp", alt: "A1 가디안", get: "최강의 유전자 뮤츠", rarity: 3, pack: 2 },
    { src: "image/woobat.webp", alt: "A1 또르박쥐", get: "최강의 유전자", rarity: 1, pack: 0 },
    { src: "image/swoobat.webp", alt: "A1 맘박쥐", get: "최강의 유전자", rarity: 1, pack: 0 },
    { src: "image/golett.webp", alt: "A1 골비람", get: "최강의 유전자", rarity: 1, pack: 0 },
    { src: "image/golurk.webp", alt: "A1 골루그", get: "최강의 유전자", rarity: 2, pack: 0 },
    { src: "image/sandshrew.webp", alt: "A1 모래두지", get: "최강의 유전자", rarity: 1, pack: 0 },
    { src: "image/sandslash.webp", alt: "A1 고지", get: "최강의 유전자", rarity: 2, pack: 0 },
    { src: "image/diglett.webp", alt: "A1 디그다", get: "최강의 유전자 피카츄", rarity: 1, pack: 3 },
    { src: "image/dugtrio.webp", alt: "A1 닥트리오", get: "최강의 유전자 피카츄", rarity: 2, pack: 3 },
    { src: "image/mankey.webp", alt: "A1 망키", get: "최강의 유전자 리자몽", rarity: 1, pack: 1 },
    { src: "image/primeape.webp", alt: "A1 성원숭", get: "최강의 유전자 리자몽", rarity: 2, pack: 1 },
    { src: "image/machop.webp", alt: "A1 알통몬", get: "최강의 유전자 리자몽", rarity: 1, pack: 1 },
    { src: "image/machoke.webp", alt: "A1 근육몬", get: "최강의 유전자 리자몽", rarity: 2, pack: 1 },
    { src: "image/machamp.webp", alt: "A1 괴력몬", get: "최강의 유전자 리자몽", rarity: 3, pack: 1 },
    { src: "image/machamp_ex.webp", alt: "A1 괴력몬ex", get: "최강의 유전자 리자몽", rarity: 4, pack: 1 },
    { src: "image/geodude.webp", alt: "A1 꼬마돌", get: "최강의 유전자 피카츄", rarity: 1, pack: 3 },
    { src: "image/graveler.webp", alt: "A1 데구리", get: "최강의 유전자 피카츄", rarity: 2, pack: 3 },
    { src: "image/golem.webp", alt: "A1 딱구리", get: "최강의 유전자 피카츄", rarity: 3, pack: 3 },
    { src: "image/onix.webp", alt: "A1 롱스톤", get: "최강의 유전자 피카츄", rarity: 2, pack: 3 },
    { src: "image/cubone.webp", alt: "A1 탕구리", get: "최강의 유전자 뮤츠", rarity: 1, pack: 2 },
    { src: "image/marowak.webp", alt: "A1 텅구리", get: "최강의 유전자 뮤츠", rarity: 2, pack: 2 },
    { src: "image/marowak_ex.webp", alt: "A1 텅구리ex", get: "최강의 유전자 뮤츠", rarity: 4, pack: 2 },
    { src: "image/hitmonlee.webp", alt: "A1 시라소몬", get: "최강의 유전자 뮤츠", rarity: 1, pack: 2 },
    { src: "image/hitmonchan.webp", alt: "A1 홍수몬", get: "최강의 유전자 리자몽", rarity: 1, pack: 1 },
    { src: "image/rhyhorn.webp", alt: "A1 뿔카노", get: "최강의 유전자 뮤츠", rarity: 1, pack: 2 },
    { src: "image/rhydon.webp", alt: "A1 코뿌리", get: "최강의 유전자 뮤츠", rarity: 2, pack: 2 },
    { src: "image/kabuto.webp", alt: "A1 투구", get: "최강의 유전자 리자몽", rarity: 2, pack: 1 },
    { src: "image/kabutops.webp", alt: "A1 투구푸스", get: "최강의 유전자 리자몽", rarity: 3, pack: 1 },
    { src: "image/mienfoo.webp", alt: "A1 비조푸", get: "최강의 유전자 피카츄", rarity: 1, pack: 3 },
    { src: "image/mienshao.webp", alt: "A1 비조도", get: "최강의 유전자 피카츄", rarity: 2, pack: 3 },
    { src: "image/clobbopus.webp", alt: "A1 때때무노", get: "최강의 유전자", rarity: 1, pack: 0 },
    { src: "image/grapploct.webp", alt: "A1 케오퍼스", get: "최강의 유전자", rarity: 2, pack: 0 },
    { src: "image/ekans.webp", alt: "A1 아보", get: "최강의 유전자", rarity: 1, pack: 0 },
    { src: "image/arbok.webp", alt: "A1 아보크", get: "최강의 유전자", rarity: 2, pack: 0 },
    { src: "image/nidoran_f.webp", alt: "A1 니드런♀", get: "최강의 유전자 피카츄", rarity: 1, pack: 3 },
    { src: "image/nidorina.webp", alt: "A1 니드리나", get: "최강의 유전자 피카츄", rarity: 2, pack: 3 },
    { src: "image/nidoqueen.webp", alt: "A1 니드퀸", get: "최강의 유전자 피카츄", rarity: 3, pack: 3 },
    { src: "image/nidoran_m.webp", alt: "A1 니드런♂", get: "최강의 유전자 피카츄", rarity: 1, pack: 3 },
    { src: "image/nidorino.webp", alt: "A1 니드리노", get: "최강의 유전자 피카츄", rarity: 2, pack: 3 },
    { src: "image/nidoking.webp", alt: "A1 니드킹", get: "최강의 유전자 피카츄", rarity: 3, pack: 3 },
    { src: "image/zubat.webp", alt: "A1 주뱃", get: "최강의 유전자 뮤츠", rarity: 1, pack: 2 },
    { src: "image/golbat.webp", alt: "A1 골뱃", get: "최강의 유전자 뮤츠", rarity: 2, pack: 2 },
    { src: "image/grimer.webp", alt: "A1 질퍽이", get: "최강의 유전자 뮤츠", rarity: 1, pack: 2 },
    { src: "image/muk.webp", alt: "A1 질뻐기", get: "최강의 유전자 뮤츠", rarity: 3, pack: 2 },
    { src: "image/koffing.webp", alt: "A1 또가스", get: "최강의 유전자 뮤츠", rarity: 1, pack: 2 },
    { src: "image/weezing.webp", alt: "A1 또도가스", get: "최강의 유전자 뮤츠", rarity: 3, pack: 2 },
    { src: "image/mawile.webp", alt: "A1 입치트", get: "최강의 유전자 리자몽", rarity: 1, pack: 1 },
    { src: "image/pawniard.webp", alt: "A1 자망칼", get: "최강의 유전자", rarity: 1, pack: 0 },
    { src: "image/bisharp.webp", alt: "A1 절각참", get: "최강의 유전자", rarity: 2, pack: 0 },
    { src: "image/meltan.webp", alt: "A1 멜탄", get: "최강의 유전자 리자몽", rarity: 1, pack: 1 },
    { src: "image/melmetal.webp", alt: "A1 멜메탈", get: "최강의 유전자 리자몽", rarity: 3, pack: 1 },
    { src: "image/dratini.webp", alt: "A1 미뇽", get: "최강의 유전자 뮤츠", rarity: 1, pack: 2 },
    { src: "image/dragonair.webp", alt: "A1 신뇽", get: "최강의 유전자 뮤츠", rarity: 2, pack: 2 },
    { src: "image/dragonite.webp", alt: "A1 망나뇽", get: "최강의 유전자 뮤츠", rarity: 3, pack: 2 },
    { src: "image/pidgey.webp", alt: "A1 구구", get: "최강의 유전자 뮤츠", rarity: 1, pack: 2 },
    { src: "image/pidgeotto.webp", alt: "A1 피죤", get: "최강의 유전자 뮤츠", rarity: 1, pack: 2 },
    { src: "image/pidgeot.webp", alt: "A1 피죤투", get: "최강의 유전자 뮤츠", rarity: 3, pack: 2 },
    { src: "image/rattata.webp", alt: "A1 꼬렛", get: "최강의 유전자", rarity: 1, pack: 0 },
    { src: "image/raticate.webp", alt: "A1 레트라", get: "최강의 유전자", rarity: 1, pack: 0 },
    { src: "image/spearow.webp", alt: "A1 깨비참", get: "최강의 유전자 리자몽", rarity: 1, pack: 1 },
    { src: "image/fearow.webp", alt: "A1 깨비드릴조", get: "최강의 유전자 리자몽", rarity: 1, pack: 1 },
    { src: "image/jigglypuff.webp", alt: "A1 푸린", get: "최강의 유전자 피카츄", rarity: 1, pack: 3 },
    { src: "image/wigglytuff.webp", alt: "A1 푸크린", get: "최강의 유전자 피카츄", rarity: 1, pack: 3 },
    { src: "image/wigglytuff_ex.webp", alt: "A1 푸크린ex", get: "최강의 유전자 피카츄", rarity: 4, pack: 3 },
    { src: "image/meowth.webp", alt: "A1 나옹", get: "최강의 유전자 리자몽", rarity: 1, pack: 1 },
    { src: "image/persian.webp", alt: "A1 페르시온", get: "최강의 유전자 리자몽", rarity: 2, pack: 1 },
    { src: "image/farfetch'd.webp", alt: "A1 파오리", get: "최강의 유전자", rarity: 1, pack: 0 },
    { src: "image/doduo.webp", alt: "A1 두두", get: "최강의 유전자", rarity: 1, pack: 0 },
    { src: "image/dodrio.webp", alt: "A1 두트리오", get: "최강의 유전자", rarity: 2, pack: 0 },
    { src: "image/lickitung.webp", alt: "A1 내루미", get: "최강의 유전자 뮤츠", rarity: 2, pack: 2 },
    { src: "image/chansey.webp", alt: "A1 럭키", get: "최강의 유전자 피카츄", rarity: 2, pack: 3 },
    { src: "image/kangaskhan.webp", alt: "A1 캥카", get: "최강의 유전자 리자몽", rarity: 3, pack: 1 },
    { src: "image/tauros.webp", alt: "A1 켄타로스", get: "최강의 유전자 리자몽", rarity: 2, pack: 1 },
    { src: "image/ditto.webp", alt: "A1 메타몽", get: "최강의 유전자 뮤츠", rarity: 3, pack: 2 },
    { src: "image/eevee_1.webp", alt: "A1 이브이", get: "최강의 유전자 리자몽", rarity: 1, pack: 1 },
    { src: "image/eevee_2.webp", alt: "A1 이브이", get: "최강의 유전자 뮤츠", rarity: 1, pack: 2 },
    { src: "image/eevee_3.webp", alt: "A1 이브이", get: "최강의 유전자 피카츄", rarity: 1, pack: 3 },
    { src: "image/porygon.webp", alt: "A1 폴리곤", get: "최강의 유전자 뮤츠", rarity: 2, pack: 2 },
    { src: "image/aerodactyl.webp", alt: "A1 프테라", get: "최강의 유전자 뮤츠", rarity: 3, pack: 2 },
    { src: "image/snorlax.webp", alt: "A1 잠만보", get: "최강의 유전자 피카츄", rarity: 3, pack: 3 },
    { src: "image/minccino.webp", alt: "A1 치라미", get: "최강의 유전자", rarity: 1, pack: 0 },
    { src: "image/cinccino.webp", alt: "A1 치라치노", get: "최강의 유전자", rarity: 2, pack: 0 },
    { src: "image/wooloo.webp", alt: "A1 우르", get: "최강의 유전자", rarity: 1, pack: 0 },
    { src: "image/dubwool.webp", alt: "A1 배우르", get: "최강의 유전자", rarity: 1, pack: 0 },
    { src: "image/helix_fossil.webp", alt: "A1 조개화석", get: "최강의 유전자 피카츄", rarity: 1, pack: 3 },
    { src: "image/dome_fossil.webp", alt: "A1 껍질화석", get: "최강의 유전자 리자몽", rarity: 1, pack: 1 },
    { src: "image/old_amber.webp", alt: "A1 비밀의호박", get: "최강의 유전자 뮤츠", rarity: 1, pack: 2 },
    { src: "image/erika.webp", alt: "A1 민화", get: "최강의 유전자 리자몽", rarity: 2, pack: 1 },
    { src: "image/misty.webp", alt: "A1 이슬", get: "최강의 유전자 피카츄", rarity: 2, pack: 3 },
    { src: "image/blaine.webp", alt: "A1 강연", get: "최강의 유전자 리자몽", rarity: 2, pack: 1 },
    { src: "image/koga.webp", alt: "A1 독수", get: "최강의 유전자 뮤츠", rarity: 2, pack: 2 },
    { src: "image/giovanni.webp", alt: "A1 비주기", get: "최강의 유전자 뮤츠", rarity: 2, pack: 2 },
    { src: "image/brock.webp", alt: "A1 웅", get: "최강의 유전자 피카츄", rarity: 2, pack: 3 },
    { src: "image/sabrina.webp", alt: "A1 초련", get: "최강의 유전자 리자몽", rarity: 2, pack: 1 },
    { src: "image/lt._surge.webp", alt: "A1 마티스", get: "최강의 유전자 피카츄", rarity: 2, pack: 3 },
    { src: "image/bulbasaur_gold_1.webp", alt: "A1 이상해씨", get: "최강의 유전자 뮤츠", rarity: 5, pack: 2 },
    { src: "image/gloom_gold_1.webp", alt: "A1 냄새꼬", get: "최강의 유전자 리자몽", rarity: 5, pack: 1 },
    { src: "image/pinsir_gold_1.webp", alt: "A1 쁘사이저", get: "최강의 유전자 리자몽", rarity: 5, pack: 1 },
    { src: "image/charmander_gold_1.webp", alt: "A1 파이리", get: "최강의 유전자 리자몽", rarity: 5, pack: 1 },
    { src: "image/rapidash_gold_1.webp", alt: "A1 날쌩마", get: "최강의 유전자 리자몽", rarity: 5, pack: 1 },
    { src: "image/squirtle_gold_1.webp", alt: "A1 꼬부기", get: "최강의 유전자 피카츄", rarity: 5, pack: 3 },
    { src: "image/gyarados_gold_1.webp", alt: "A1 갸라도스", get: "최강의 유전자 피카츄", rarity: 5, pack: 3 },
    { src: "image/lapras_gold_1.webp", alt: "A1 라프라스", get: "최강의 유전자 리자몽", rarity: 5, pack: 1 },
    { src: "image/electrode_gold_1.webp", alt: "A1 붐볼", get: "최강의 유전자 피카츄", rarity: 5, pack: 3 },
    { src: "image/alakazam_gold_1.webp", alt: "A1 후딘", get: "최강의 유전자 리자몽", rarity: 5, pack: 1 },
    { src: "image/slowpoke_gold_1.webp", alt: "A1 야돈", get: "최강의 유전자 리자몽", rarity: 5, pack: 1 },
    { src: "image/diglett_gold_1.webp", alt: "A1 디그다", get: "최강의 유전자 피카츄", rarity: 5, pack: 3 },
    { src: "image/cubone_gold_1.webp", alt: "A1 탕구리", get: "최강의 유전자 뮤츠", rarity: 5, pack: 2 },
    { src: "image/nidoqueen_gold_1.webp", alt: "A1 니드퀸", get: "최강의 유전자 피카츄", rarity: 5, pack: 3 },
    { src: "image/nidoking_gold_1.webp", alt: "A1 니드킹", get: "최강의 유전자 피카츄", rarity: 5, pack: 3 },
    { src: "image/golbat_gold_1.webp", alt: "A1 골뱃", get: "최강의 유전자 뮤츠", rarity: 5, pack: 2 },
    { src: "image/weezing_gold_1.webp", alt: "A1 또도가스", get: "최강의 유전자 뮤츠", rarity: 5, pack: 2 },
    { src: "image/dragonite_gold_1.webp", alt: "A1 망나뇽", get: "최강의 유전자 뮤츠", rarity: 5, pack: 2 },
    { src: "image/pidgeot_gold_1.webp", alt: "A1 피죤투", get: "최강의 유전자 뮤츠", rarity: 5, pack: 2 },
    { src: "image/meowth_gold_1.webp", alt: "A1 나옹", get: "최강의 유전자 리자몽", rarity: 5, pack: 1 },
    { src: "image/ditto_gold_1.webp", alt: "A1 메타몽", get: "최강의 유전자 뮤츠", rarity: 5, pack: 2 },
    { src: "image/eevee_gold_1.webp", alt: "A1 이브이", get: "최강의 유전자 피카츄", rarity: 5, pack: 3 },
    { src: "image/porygon_gold_1.webp", alt: "A1 폴리곤", get: "최강의 유전자 뮤츠", rarity: 5, pack: 2 },
    { src: "image/snorlax_gold_1.webp", alt: "A1 잠만보", get: "최강의 유전자 피카츄", rarity: 5, pack: 3 },
    { src: "image/venusaur_ex_gold_2.webp", alt: "A1 이상해꽃ex", get: "최강의 유전자 뮤츠", rarity: 6, pack: 2 },
    { src: "image/exeggutor_ex_gold_2.webp", alt: "A1 나시ex", get: "최강의 유전자 리자몽", rarity: 6, pack: 1 },
    { src: "image/charizard_ex_gold_2.webp", alt: "A1 리자몽ex", get: "최강의 유전자 리자몽", rarity: 6, pack: 1 },
    { src: "image/arcanine_ex_gold_2.webp", alt: "A1 윈디ex", get: "최강의 유전자 피카츄", rarity: 6, pack: 3 },
    { src: "image/moltres_ex_gold_2.webp", alt: "A1 파이어ex", get: "최강의 유전자 리자몽", rarity: 6, pack: 1 },
    { src: "image/blastoise_ex_gold_2.webp", alt: "A1 거북왕ex", get: "최강의 유전자 피카츄", rarity: 6, pack: 3 },
    { src: "image/starmie_ex_gold_2.webp", alt: "A1 아쿠스타ex", get: "최강의 유전자 리자몽", rarity: 6, pack: 1 },
    { src: "image/articuno_ex_gold_2.webp", alt: "A1 프리져ex", get: "최강의 유전자 뮤츠", rarity: 6, pack: 2 },
    { src: "image/pikachu_ex_gold_2.webp", alt: "A1 피카츄ex", get: "최강의 유전자 피카츄", rarity: 6, pack: 3 },
    { src: "image/zapdos_ex_gold_2.webp", alt: "A1 썬더ex", get: "최강의 유전자 피카츄", rarity: 6, pack: 3 },
    { src: "image/gengar_ex_gold_2.webp", alt: "A1 팬텀ex", get: "최강의 유전자 뮤츠", rarity: 6, pack: 2 },
    { src: "image/mewtwo_ex_gold_2.webp", alt: "A1 뮤츠ex", get: "최강의 유전자 뮤츠", rarity: 6, pack: 2 },
    { src: "image/machamp_ex_gold_2.webp", alt: "A1 괴력몬ex", get: "최강의 유전자 리자몽", rarity: 6, pack: 1 },
    { src: "image/marowak_ex_gold_2.webp", alt: "A1 텅구리ex", get: "최강의 유전자 뮤츠", rarity: 6, pack: 2 },
    { src: "image/wigglytuff_ex_gold_2.webp", alt: "A1 푸크린ex", get: "최강의 유전자 피카츄", rarity: 6, pack: 3 },
    { src: "image/erika_gold_2.webp", alt: "A1 민화", get: "최강의 유전자 리자몽", rarity: 6, pack: 1 },
    { src: "image/misty_gold_2.webp", alt: "A1 이슬", get: "최강의 유전자 피카츄", rarity: 6, pack: 3 },
    { src: "image/blaine_gold_2.webp", alt: "A1 강연", get: "최강의 유전자 리자몽", rarity: 6, pack: 1 },
    { src: "image/koga_gold_2.webp", alt: "A1 독수", get: "최강의 유전자 뮤츠", rarity: 6, pack: 2 },
    { src: "image/giovanni_gold_2.webp", alt: "A1 비주기", get: "최강의 유전자 뮤츠", rarity: 6, pack: 2 },
    { src: "image/brock_gold_2.webp", alt: "A1 웅", get: "최강의 유전자 피카츄", rarity: 6, pack: 3 },
    { src: "image/sabrina_gold_2.webp", alt: "A1 초련", get: "최강의 유전자 리자몽", rarity: 6, pack: 1 },
    { src: "image/lt._surge_gold_2.webp", alt: "A1 마티스", get: "최강의 유전자 피카츄", rarity: 6, pack: 3 },
    { src: "image/moltres_ex_gold_2_1.webp", alt: "A1 파이어ex", get: "최강의 유전자 리자몽", rarity: 6, pack: 1 },
    { src: "image/articuno_ex_gold_2_1.webp", alt: "A1 프리져ex", get: "최강의 유전자 뮤츠", rarity: 6, pack: 2 },
    { src: "image/zapdos_ex_gold_2_1.webp", alt: "A1 썬더ex", get: "최강의 유전자 피카츄", rarity: 6, pack: 3 },
    { src: "image/gengar_ex_gold_2_1.webp", alt: "A1 팬텀ex", get: "최강의 유전자 뮤츠", rarity: 6, pack: 2 },
    { src: "image/machamp_ex_gold_2_1.webp", alt: "A1 괴력몬ex", get: "최강의 유전자 리자몽", rarity: 6, pack: 1 },
    { src: "image/wigglytuff_ex_gold_2_1.webp", alt: "A1 푸크린ex", get: "최강의 유전자 피카츄", rarity: 6, pack: 3 },
    { src: "image/charizard_ex_gold_3.webp", alt: "A1 리자몽ex", get: "최강의 유전자 리자몽", rarity: 7, pack: 1 },
    { src: "image/pikachu_ex_gold_3.webp", alt: "A1 피카츄ex", get: "최강의 유전자 피카츄", rarity: 7, pack: 3 },
    { src: "image/mewtwo_ex_gold_3.webp", alt: "A1 뮤츠ex", get: "최강의 유전자 뮤츠", rarity: 7, pack: 2 },
    { src: "image/mew_gold_3.webp", alt: "A1 뮤", get: "도감완성", rarity: 7, pack: 4 },
    { src: "image/charizard_ex_crown.webp", alt: "A1 리자몽ex", get: "최강의 유전자", rarity: 8, pack: 0 },
    { src: "image/pikachu_ex_crown.webp", alt: "A1 피카츄ex", get: "최강의 유전자", rarity: 8, pack: 0 },
    { src: "image/mewtwo_ex_crown.webp", alt: "A1 뮤츠ex", get: "최강의 유전자", rarity: 8, pack: 0 },
    { src: "image/potion.webp", alt: "P-A 상처약", get: "상점", rarity: 9, pack: 4 },
    { src: "image/x_speed.webp", alt: "P-A 스피드업", get: "상점", rarity: 9, pack: 4 },
    { src: "image/hand_scope.webp", alt: "P-A 랜드스코프", get: "상점", rarity: 9, pack: 4 },
    { src: "image/pokedex.webp", alt: "P-A 포켓몬 도감", get: "상점", rarity: 9, pack: 4 },
    { src: "image/poke_ball.webp", alt: "P-A 몬스터볼", get: "상점", rarity: 9, pack: 4 },
    { src: "image/red_card.webp", alt: "P-A 레드카드", get: "상점", rarity: 9, pack: 4 },
    { src: "image/professor's_research.webp", alt: "P-A 박사의 연구", get: "상점", rarity: 9, pack: 4 },
    { src: "image/pikachu_promo_A.webp", alt: "P-A 피카츄", get: "상점", rarity: 9, pack: 4 },
    { src: "image/mewtwo_promo_A.webp", alt: "P-A 뮤츠", get: "12월 프리미엄패스 보상", rarity: 9, pack: 4 },
    { src: "image/chansey_promo_A.webp", alt: "P-A 럭키", get: "겟 챌린지 이벤트 전반 개최", rarity: 9, pack: 4 },
    { src: "image/meowth_promo_A.webp", alt: "P-A 나옹", get: "겟 챌린지 이벤트 전반 개최", rarity: 9, pack: 4 },
    { src: "image/butterfree_promo_A.webp", alt: "P-A 버터플", get: "라프라스 ex 드롭 이벤트", rarity: 9, pack: 4 },
    { src: "image/lapras_ex_promo_A.webp", alt: "P-A 라프라스ex", get: "라프라스 ex 드롭 이벤트", rarity: 9, pack: 4 },
    { src: "image/pikachu_promo_A_2.webp", alt: "P-A 피카츄", get: "라프라스 ex 드롭 이벤트", rarity: 9, pack: 4 },
    { src: "image/clefairy_promo_A.webp", alt: "P-A 삐삐", get: "라프라스 ex 드롭 이벤트", rarity: 9, pack: 4 },
    { src: "image/mankey_promo_A.webp", alt: "P-A 망키", get: "라프라스 ex 드롭 이벤트", rarity: 9, pack: 4 },
    { src: "image/venusaur_promo_A.webp", alt: "P-A 이상해꽃", get: "이상해꽃 드롭 이벤트", rarity: 9, pack: 4 },
    { src: "image/greninja_promo_A.webp", alt: "P-A 개굴닌자", get: "이상해꽃 드롭 이벤트", rarity: 9, pack: 4 },
    { src: "image/haunter_promo_A.webp", alt: "P-A 고우스트", get: "이상해꽃 드롭 이벤트", rarity: 9, pack: 4 },
    { src: "image/onix_promo_A.webp", alt: "P-A 롱스톤", get: "이상해꽃 드롭 이벤트", rarity: 9, pack: 4 },
    { src: "image/jigglypuff_promo_A.webp", alt: "P-A 푸린", get: "이상해꽃 드롭 이벤트", rarity: 9, pack: 4 },
    { src: "image/bulbasaur_promo_A.webp", alt: "P-A 이상해씨", get: "겟 챌린지 이벤트 전반 개최", rarity: 9, pack: 4 },
    { src: "image/magnemite_promo_A.webp", alt: "P-A 코일", get: "겟 챌린지 이벤트 전반 개최", rarity: 9, pack: 4 },
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