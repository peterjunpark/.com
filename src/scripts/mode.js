function ready(proc) {
    if (document.readyState !== "loading") {
        proc();
    } else {
        document.addEventListener("DOMContentLoaded", proc);
    }
}

ready(() => {
    const modeline = document.getElementById("mode");
    let isEditing = false;

    function updateMode() {
        const selection = globalThis.getSelection();

        if (selection.toString().length > 0) {
            modeline.textContent = "-- VISUAL --";
        } else {
            if (isEditing) {
                modeline.textContent = "-- INSERT --";
            } else {
                modeline.textContent = "";
            }
        }
    }

    const editableElems = document.querySelectorAll("[contenteditable='true'], input, textarea");
    editableElems.forEach((elem) => {
        elem.addEventListener("focus", () => {
            isEditing = true;
            updateMode();
        });

        elem.addEventListener("blur", () => {
            isEditing = false;
            updateMode();
        });
    });

    document.addEventListener("selectionchange", updateMode);

	document.addEventListener("keydown", (e) => {
		if (e.key === "Escape") {
			e.preventDefault();

			globalThis.getSelection().removeAllRanges();

			if (document.activeElement) {
				document.activeElement.blur();
			}
		}
	})

    updateMode();
});
