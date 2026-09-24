document.addEventListener('DOMContentLoaded', () => {

    // Mengambil elemen dari HTML
    const profileImg = document.querySelector('.profile-img');
    const badge = document.querySelector('.badge');


    // Efek ketika foto profil diklik
    profileImg.addEventListener('click', () => {

        profileImg.style.transition =
            'transform 0.4s ease';

        profileImg.style.transform =
            'scale(1.1) rotate(5deg)';

        setTimeout(() => {

            profileImg.style.transform =
                'scale(1) rotate(0deg)';

        }, 400);

    });


    // Efek ketika mouse masuk ke badge
    badge.addEventListener('mouseenter', () => {

        badge.style.cursor = 'pointer';

        badge.innerText = "Let's Connect";

    });


    // Mengembalikan tulisan badge
    // ketika mouse keluar
    badge.addEventListener('mouseleave', () => {

        badge.innerText = 'Ready to Code';

    });

});
