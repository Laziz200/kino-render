const apiKey = "d1e7c51b";

        async function searchByTitle() {
            const title = document.getElementById("title").value.replace(" ", "+");
            const year = document.getElementById("year").value;
            const plot = document.getElementById("plot").value;
            const responseFormat = document.getElementById("responseFormat").value;
            const resultDiv = document.getElementById("resultTitle");

            const url = `https://www.omdbapi.com/?apikey=${apiKey}&t=${title}&y=${year}&plot=${plot}&r=${responseFormat}`;
            try {
                const response = await fetch(url);
                const data = await response.text();
                resultDiv.innerHTML = `<div class="url">URL: ${url}</div><div class="javob">Javob: <pre>${data}</pre></div>`;
                if (data.includes('"Response":"False"') || data.includes("<Response>False</Response>")) {
                    resultDiv.classList.add("error");
                } else {
                    resultDiv.classList.remove("error");
                }
            } catch (error) {
                resultDiv.innerHTML = `<div class="error">Javob: "Nimadir xato ketdi"</div>`;
            }
        }

        async function searchById() {
            const imdbId = document.getElementById("imdbId").value;
            const plot = document.getElementById("plotId").value;
            const responseFormat = document.getElementById("responseFormatId").value;
            const resultDiv = document.getElementById("resultId");

            const url = `https://www.omdbapi.com/?apikey=${apiKey}&i=${imdbId}&plot=${plot}&r=${responseFormat}`;
            try {
                const response = await fetch(url);
                const data = await response.text();
                resultDiv.innerHTML = `<div class="url">URL: ${url}</div><div class="javob">Javob: <pre>${data}</pre></div>`;
                if (data.includes('"Response":"False"') || data.includes("<Response>False</Response>")) {
                    resultDiv.classList.add("error");
                } else {
                    resultDiv.classList.remove("error");
                }
            } catch (error) {
                resultDiv.innerHTML = `<div class="error">Javob: "Nimadir xato ketdi"</div>`;
            }
        }

        function clearResult() {
            document.getElementById("resultTitle").innerHTML = "";
            document.getElementById("resultId").innerHTML = "";
            document.getElementById("title").value = "";
            document.getElementById("year").value = "";
            document.getElementById("imdbId").value = "";
        }