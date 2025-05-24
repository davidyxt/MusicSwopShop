function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const currentRight = getComputedStyle(sidebar).right;

    if (currentRight === "0px") {
      sidebar.style.right = "-260px";
    } else {
      sidebar.style.right = "0px";
    }
  }