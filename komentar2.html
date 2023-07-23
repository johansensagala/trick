<!DOCTYPE html>
<html>
<head>
  <title>Kolom Komentar</title>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0/css/bootstrap.min.css">
  <style>
    .comment {
      margin-bottom: 20px;
      padding: 20px;
      background-color: #f5f5f5;
      border-radius: 8px;
    }

    .reply {
      margin-left: 40px;
      background-color: #f9f9f9;
      border-radius: 8px;
      display: none; /* Sembunyikan secara default */
    }

    form {
      margin-bottom: 20px;
    }
  </style>
</head>
<body>
  <div class="container">
    <h2>Komentar</h2>
    <div class="row">
      <div class="col-md-8">
        <form id="comment-form">
          <div class="form-group">
            <textarea id="comment-input" class="form-control" rows="4" placeholder="Tulis komentar..."></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Kirim Komentar</button>
        </form>
        <div id="comment-list"></div>
      </div>
    </div>
  </div>

  <script>
    document.addEventListener("DOMContentLoaded", () => {
      const commentForm = document.getElementById("comment-form");
      const commentInput = document.getElementById("comment-input");
      const commentList = document.getElementById("comment-list");

      commentForm.addEventListener("submit", event => {
        event.preventDefault(); // Mencegah pengiriman form

        const comment = commentInput.value; // Ambil isi komentar

        // Buat elemen komentar baru
        const commentElement = document.createElement("div");
        commentElement.className = "comment";
        commentElement.textContent = comment;

        // Buat elemen "Balas" dan tambahkan ke komentar
        const replyLink = document.createElement("a");
        replyLink.className = "comment-reply";
        replyLink.href = "#";
        replyLink.textContent = "Balas";
        commentElement.appendChild(replyLink);

        // Tambahkan komentar ke daftar komentar
        commentList.appendChild(commentElement);

        // Reset input komentar
        commentInput.value = "";
      });

      commentList.addEventListener("click", event => {
        const target = event.target;

        // Periksa apakah yang diklik adalah tombol "Balas"
        if (target.classList.contains("comment-reply")) {
          event.preventDefault();

          // Cari elemen komentar terkait
          const commentElement = target.parentNode;

          // Cek apakah kolom balas komentar sudah ada atau belum
          let replyForm = commentElement.querySelector(".reply-form");

          // Semua kolom balasan ditutup terlebih dahulu
          const existingReplyForms = commentList.getElementsByClassName("reply-form");
          for (const form of existingReplyForms) {
            form.style.display = "none";
          }

          // Jika kolom balas komentar belum ada, buat dan tambahkan
          if (!replyForm) {
            replyForm = document.createElement("form");
            replyForm.className = "reply-form";
            const replyFormGroup = document.createElement("div");
            replyFormGroup.className = "form-group";
            const replyInput = document.createElement("textarea");
            replyInput.className = "form-control reply-input";
            replyInput.rows = 2;
            replyInput.placeholder = "Balas komentar...";
            const replyButton = document.createElement("button");
            replyButton.type = "submit";
            replyButton.className = "btn btn-primary";
            replyButton.textContent = "Kirim Balasan";

            replyFormGroup.appendChild(replyInput);
            replyFormGroup.appendChild(replyButton);
            replyForm.appendChild(replyFormGroup);

            // Tambahkan form balas komentar ke dalam elemen komentar
            commentElement.appendChild(replyForm);
          }

          // Tampilkan kolom balas komentar
          replyForm.style.display = "block";
        }
      });

      commentList.addEventListener("submit", event => {
        event.preventDefault(); // Mencegah pengiriman form

        const target = event.target;

        // Periksa apakah yang dikirim adalah form balasan komentar
        if (target.classList.contains("reply-form")) {
          const replyInput = target.querySelector(".reply-input");
          const reply = replyInput.value; // Ambil isi balasan

          // Buat elemen balasan baru dan tambahkan ke komentar
          const replyElement = document.createElement("div");
          replyElement.className = "reply";
          replyElement.textContent = reply;

          // Cari elemen komentar terkait
          const commentElement = target.parentNode;

          // Tambahkan balasan ke elemen komentar
          commentElement.appendChild(replyElement);

          // Reset input balasan
          replyInput.value = "";

          // Sembunyikan kolom balas komentar setelah mengirim balasan
          target.style.display = "none";
        }
      });
    });
  </script>
</body>
</html>
