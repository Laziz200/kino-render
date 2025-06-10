const apiKey = "d1e7c51b"; 

        async function searchByTitle() {
            const title = document.getElementById("title").value.trim().replace(" ", "+");
            const year = document.getElementById("year").value.trim();
            const plot = document.getElementById("plot").value;
            const responseFormat = document.getElementById("responseFormat").value;
            const resultDiv = document.getElementById("resultTitle");

            if (!title) {
                resultDiv.innerHTML = `<div class="error">Javob: {"Javob":"False","Xato":"Nimadir xato ketdi."}</div>`;
                return;
            }

            const url = `https://www.omdbapi.com/?apikey=${apiKey}&t=${title}&y=${year}&plot=${plot}&r=${responseFormat}`;
            try {
                const response = await fetch(url);
                const data = await response.text();
                if (responseFormat === "xml" && !data.includes("<?xml")) {
                    resultDiv.innerHTML = `<div class="url">Talab: ${url}</div><div class="error">Javob: {"Javob":"False","Xato":"XML formatida ma'lumot topilmadi."}</div>`;
                    return;
                }
                resultDiv.innerHTML = `<div class="url">Talab: ${url}</div><div class="response">Javob: <pre>${data}</pre></div>`;
                if (data.includes('"Response":"False"') || data.includes("<answer>False</answer>") || data.includes("<Response>False</Response>")) {
                    resultDiv.classList.add("error");
                } else {
                    resultDiv.classList.remove("error");
                }
            } catch (error) {
                resultDiv.innerHTML = `<div class="error">Javob: {"Javob":"False","Xato":"Nimadir xato ketdi."}</div>`;
            }
        }

        async function searchById() {
            const imdbId = document.getElementById("imdbId").value.trim();
            const plot = document.getElementById("plotId").value;
            const responseFormat = document.getElementById("responseFormatId").value;
            const resultDiv = document.getElementById("resultId");

            if (!imdbId) {
                resultDiv.innerHTML = `<div class="error">Javob: {"Javob":"False","Xato":"Nimadir xato ketdi."}</div>`;
                return;
            }

            const url = `https://www.omdbapi.com/?apikey=${apiKey}&i=${imdbId}&plot=${plot}&r=${responseFormat}`;
            try {
                const response = await fetch(url);
                const data = await response.text();
                if (responseFormat === "xml" && !data.includes("<?xml")) {
                    resultDiv.innerHTML = `<div class="url">Talab: ${url}</div><div class="error">Javob: {"Javob":"False","Xato":"XML formatida ma'lumot topilmadi."}</div>`;
                    return;
                }
                resultDiv.innerHTML = `<div class="url">Talab: ${url}</div><div class="response">Javob: <pre>${data}</pre></div>`;
                if (data.includes('"Response":"False"') || data.includes("<answer>False</answer>") || data.includes("<Response>False</Response>")) {
                    resultDiv.classList.add("error");
                } else {
                    resultDiv.classList.remove("error");
                }
            } catch (error) {
                resultDiv.innerHTML = `<div class="error">Javob: {"Javob":"False","Xato":"Nimadir xato ketdi."}</div>`;
            }
        }

        function clearResult() {
            document.getElementById("resultTitle").innerHTML = "";
            document.getElementById("resultId").innerHTML = "";
            document.getElementById("title").value = "";
            document.getElementById("year").value = "";
            document.getElementById("imdbId").value = "";
        }