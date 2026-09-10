window.onload = async function() { 

    // 1. CONFIGURACIÓN DEL PUENTE CON TU HOJA DE GOOGLE SHEETS

// Anterior:
// const API_URL="https://script.google.com/macros/s/AKfycbw76pVcOXDmNHayxJFGmmzboo8oAZ5CNDBS6BUH9PaauO29h7P4MeSBgvXu2UUQcwOnrQ/exec";

// Nuevo:
const API_URL="https://script.google.com/macros/s/AKfycbwO7JePAvKZgcBNSXi1BUmB46tKtZ9tgSNpUHXFpLYx-sa4I-lBVy89Ob7ICONWL0CijA/exec";


    // BASE DE DATOS LOCAL (Mapeo de IDs y límite de pases)
    const listaInvitados = {
        "ARM-PEÑ-5": { nombre: "FAMILIA ARMENTA PEÑALOZA", pases: 5 },
"ORT-PEÑ-4": { nombre: "FAMILIA ORTIZ PEÑALOZA", pases: 4 },
"PEÑ-MOS-4": { nombre: "FAMILIA PEÑALOZA MOSCOT", pases: 4 },
"PEÑ-IBA-2": { nombre: "FAMILIA PEÑALOZA IBARRA", pases: 2 },
"TAP-PEÑ-4": { nombre: "FAMILIA TAPIA PEÑALOZA", pases: 4 },
"GOM-PEÑ-4": { nombre: "FAMILIA GOMEZ PEÑALOZA", pases: 4 },
"ORT-ORT-4": { nombre: "FAMILIA ORTIZ ORTIZ", pases: 4 },
"TAP-SOL-2": { nombre: "FAMILIA TAPIA SOLANO", pases: 2 },
"SOL-4": { nombre: "FAMILIA SOLANO", pases: 4 },
"GON-SOL-4": { nombre: "FAMILIA GONZALEZ SOLANO", pases: 4 },
"ORT-ARM-4": { nombre: "FAMILIA ORTIZ ARMENTA", pases: 4 },
"CUE-2": { nombre: "FAMILIA CUEVAS", pases: 2 },
"CAR-PIN-1": { nombre: "FAMILIA CARMONA PINZON", pases: 1 },
"SOL-1": { nombre: "FAMILIA SOLIS", pases: 1 },
"ARM-RAM-2": { nombre: "FAMILIA ARMENTA RAMIREZ", pases: 2 },
"MEN-ARM-4": { nombre: "FAMILIA MENDOZA ARMENTA", pases: 4 },
"ARM-SOT-5": { nombre: "FAMILIA ARMENTA SOTO", pases: 5 },
"BUS-CAR-2": { nombre: "FAMILIA BUSTOS CARMONA", pases: 2 },
"PIN-ESP-4": { nombre: "FAMILIA PINEDA ESPINOZA", pases: 4 },
"CAL-AVI-3": { nombre: "FAMILIA CALDERON AVILES", pases: 3 },
"TIN-7": { nombre: "FAMILIA TINOCO", pases: 7 },
"ROJ-2": { nombre: "FAMILIA ROJAS", pases: 2 },
"MOR-CAR-3": { nombre: "FAMILIA MORENO CARVAJAL", pases: 3 },
"GAR-RAN-5": { nombre: "FAMILIA GARCIA RANGEL", pases: 5 },
"GOM-3": { nombre: "FAMILIA GOMEZ", pases: 3 },
"CER-2": { nombre: "FAMILIA CERDA", pases: 2 },
"LAS-2": { nombre: "FAMILIA LASCANO", pases: 2 },
"NAV-2": { nombre: "FAMILIA NAVARRO", pases: 2 },
"VAZ-GON-2": { nombre: "FAMILIA VAZQUEZ GONZALEZ", pases: 2 },
"ALE-COR-1": { nombre: "FAMILIA ALEJANDRO CORTEZ", pases: 1 },
"DAN-HER-1": { nombre: "FAMILIA DANIEL HERNANDEZ", pases: 1 },
"TOR-5": { nombre: "FAMILIA TORRES", pases: 5 },
"ROC-4": { nombre: "FAMILIA ROCHA", pases: 4 },
"HER-3": { nombre: "FAMILIA HERRERA", pases: 3 },
"PER-HER-3": { nombre: "FAMILIA PEREZ HERRERA", pases: 3 },
"SAN-3": { nombre: "FAMILIA SANCHEZ", pases: 3 },
"SEL-HER-1": { nombre: "FAMILIA SELENE HERNANDEZ", pases: 1 },
"PAT-GUT-1": { nombre: "FAMILIA PATY GUTIERREZ", pases: 1 },
"GAR--2": { nombre: "FAMILIA GARCIA ", pases: 2 },
"TOL-2": { nombre: "FAMILIA TOLEDO", pases: 2 },
"RUI-RUI-2": { nombre: "FAMILIA RUIZ RUIZ", pases: 2 },
"NAT-BEC-1": { nombre: "FAMILIA NATALY BECERRA", pases: 1 },
"LUYKA-2": { nombre: "FAMILIA GARCIA (LUIS Y KARLA)", pases: 2 },
"LIZ-COR-2": { nombre: "FAMILIA LIZARRAGA CORAL", pases: 2 },
"CAS-2": { nombre: "FAMILIA CASTILLO", pases: 2 },
"SUC-3": { nombre: "FAMILIA SUCHITE", pases: 3 },
"MAR-SOL-1": { nombre: "FAMILIA MARCY SOLANO", pases: 1 },
"PEÑ-ARC-4": { nombre: "FAMILIA PEÑALOZA ARCOS", pases: 4 },
"ORT-GAR-3": { nombre: "FAMILIA ORTIZ GARCIA", pases: 3 },
"FAR-VEL-4": { nombre: "FAMILIA FARFAN VELAZQUEZ", pases: 4 },
"TIN-FAR-2": { nombre: "FAMILIA TINOCO FARFAN", pases: 2 },
"VEL-VIL-4": { nombre: "FAMILIA VELAZQUEZ VILLA", pases: 4 },
"RAM-VEL-2": { nombre: "FAMILIA RAMIREZ VELAZQUEZ", pases: 2 },
"CER-VEL-4": { nombre: "FAMILIA CERVANTES VELAZQUEZ", pases: 4 },
"VEL-DUR-2": { nombre: "FAMILIA VELAZQUEZ DURAN", pases: 2 },
"VEL-AGU-3": { nombre: "FAMILIA VELAZQUEZ AGUILAR", pases: 3 },
"MAR-AMB-3": { nombre: "FAMILIA MARIN AMBRIZ", pases: 3 },
"HER-ELI-4": { nombre: "FAMILIA HERNANDEZ ELIAS", pases: 4 },
"VEL-DUR-7": { nombre: "FAMILIA VELAZQUEZ DURAN", pases: 7 },
"PRA-CAR-4": { nombre: "FAMILIA PRADO CARRILLO", pases: 4 },
"FAR-HER-4": { nombre: "FAMILIA FARFAN HERNANDEZ", pases: 4 },
"FAR-LOP-2": { nombre: "FAMILIA FARFAN LOPEZ", pases: 2 },
"LOE-2": { nombre: "FAMILIA LOEZA", pases: 2 },
"EZI-1": { nombre: "ZIQUIA", pases: 1 },
"MAR-ARZ-1": { nombre: "FAMILIA MARIA ARZATE", pases: 1 },
"AME-LIN-1": { nombre: "FAMILIA AMELIA LINARES", pases: 1 },
"ESC-3": { nombre: "FAMILIA ESCALERA", pases: 3 },
"GON-LUN-4": { nombre: "FAMILIA GONZALEZ LUNA", pases: 4 },
"MAR-LUC-2": { nombre: "FAMILIA MARTINEZ LUCERO", pases: 2 },
"OMA-3": { nombre: "OMAR", pases: 3 },
"ROD-TAP-2": { nombre: "FAMILIA RODRIGUEZ TAPIA", pases: 2 },
"GAM-1": { nombre: "GAMA", pases: 1 },
"ORO-MAC-2": { nombre: "FAMILIA OROZCO MACEDA", pases: 2 },
"ROD-TAP-2": { nombre: "FAMILIA RODRIGUEZ TAPIA", pases: 2 },
    "PRUEB-10": { nombre: "FAMILIA PRUEBA", pases: 10 },
    };

    const params = new URLSearchParams(window.location.search);
    const invitadoID = params.get('id');
    let pasesMax = 1;

    // ELEMENTOS DEL DOM
    const elFormulario = document.getElementById('form-asistencia');
    const msgExito = document.getElementById('mensaje-exito');
    const inputConfirmados = document.getElementById('confirmados');
    const contenedorNombres = document.getElementById('contenedor-nombres-dinamicos');
    const btnEnviar = document.getElementById('btnEnviar');
    const errorPases = document.getElementById('errorPases');
    const formRSVP = document.getElementById('form-asistencia');
    const modal = document.getElementById('modal-confirmacion');
    const btnCorregir = document.getElementById('btn-corregir');
    const btnTodoBien = document.getElementById('btn-todo-bien');

    // Asegurar que el contenedor del formulario sea visible al cargar
    if (elFormulario) {
        elFormulario.style.display = 'block';
    }

    // Actualizar action del formulario dinámicamente
    if (formRSVP) {
        formRSVP.action = API_URL;
    }

    // --- BLOQUEO Y VERIFICACIÓN POR BASE DE DATOS ---
    if (invitadoID && listaInvitados[invitadoID]) {
        if (localStorage.getItem('confirmado_' + invitadoID)) {
            bloquearFormularioManual();
        } else {
            try {
                const response = await fetch(`${API_URL}?id=${invitadoID}`);
                const resultado = await response.text();
                if (resultado === "encontrado") {
                    localStorage.setItem('confirmado_' + invitadoID, 'true');
                    bloquearFormularioManual();
                }
            } catch (error) {
                console.error("Error al verificar base de datos:", error);
            }
        }

        const datos = listaInvitados[invitadoID];
        pasesMax = datos.pases;
        if (document.getElementById('displayFamilia')) document.getElementById('displayFamilia').innerText = datos.nombre;
        if (document.getElementById('cantidadPases')) document.getElementById('cantidadPases').innerText = datos.pases;
        
        document.getElementById('inputFamilia').value = datos.nombre;
        document.getElementById('inputPases').value = datos.pases;
        document.getElementById('inputID').value = invitadoID;
    }

    function bloquearFormularioManual() {
        if (formRSVP) formRSVP.style.display = 'none';
        if (msgExito) {
            msgExito.style.display = 'block';
            msgExito.innerHTML = "¡Ya hemos recibido tu confirmación!<br>Gracias por acompañarnos.";
        }
    }

    // --- EFECTO DE APARICIÓN SCROLL (REVEAL) ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) entry.target.classList.add('active');
            else entry.target.classList.remove('active');
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal-item').forEach((el) => observer.observe(el));

    // --- LÓGICA DE ASISTENCIA (SI/NO) ---
    const radiosAsistencia = document.querySelectorAll('input[name="Asistencia"]');
    const camposSi = document.getElementById('campos-asistencia-si');
    const msgDespedida = document.getElementById('mensaje-despedida');

    // Estado Inicial: Ocultar secciones secundarias al cargar la página
    if (camposSi) camposSi.style.display = 'none';
    if (msgDespedida) msgDespedida.style.display = 'none';
    if (btnEnviar) btnEnviar.style.display = 'none';

    radiosAsistencia.forEach(radio => {
        radio.addEventListener('change', function() {
            if (btnEnviar) btnEnviar.style.display = 'block';

            if (this.value === 'No') {
                if (camposSi) camposSi.style.display = 'none';
                if (msgDespedida) msgDespedida.style.display = 'block';
                if (inputConfirmados) {
                    inputConfirmados.required = false;
                    inputConfirmados.removeAttribute('min'); // Quita la restricción de mínimo 1 al decir NO
                    inputConfirmados.value = 0; // Envía 0 como valor numérico a Google Sheets
                }
                if (contenedorNombres) contenedorNombres.innerHTML = ""; // Elimina inputs ocultos que requerían validación
            } else if (this.value === 'Si') {
                if (camposSi) camposSi.style.display = 'block';
                if (msgDespedida) msgDespedida.style.display = 'none';
                if (inputConfirmados) {
                    inputConfirmados.value = '';
                    inputConfirmados.setAttribute('min', '1'); // Restaura el mínimo requerimiento de 1 pase
                    inputConfirmados.required = true;
                }
            }
        });
    });

    // --- GENERACIÓN DINÁMICA DE CAMPOS CON LÍMITE DE PASES ---
    if (inputConfirmados) {
        inputConfirmados.addEventListener('input', function() {
            const cantidad = parseInt(this.value) || 0;
            contenedorNombres.innerHTML = ''; 
            
            if (cantidad > pasesMax) {
                if (errorPases) {
                    errorPases.innerText = `Límite máximo: ${pasesMax} pases.`;
                    errorPases.style.display = 'block';
                }
                if (btnEnviar) btnEnviar.disabled = true;
                return;
            }
            
            if (errorPases) errorPases.style.display = 'none';
            if (btnEnviar) btnEnviar.disabled = false;

            for (let i = 1; i <= cantidad; i++) {
                const div = document.createElement('div');
                div.className = 'rsvp-campo-form';
                div.innerHTML = `<label>Nombre del invitado ${i}:</label><input type="text" name="Asistente_${i}" maxlength="40" class="nombre-validar" required placeholder="Nombre y Apellido">`;
                contenedorNombres.appendChild(div);
            }
        });
    }

    // --- MODAL Y ENVÍO DEL FORMULARIO CON VALIDACIONES PERSONALIZADAS ---
    if (formRSVP) {
        // Desactivar la validación nativa del navegador para usar nuestras alertas personalizadas
        formRSVP.setAttribute('novalidate', 'true');

        formRSVP.onsubmit = (e) => { 
            e.preventDefault(); 

            // Ocultar mensajes de error previos
            if (errorPases) {
                errorPases.style.display = 'none';
                errorPases.innerText = '';
            }

            // 1. Verificar opción de asistencia (Si / No)
            const asistenciaSeleccionada = document.querySelector('input[name="Asistencia"]:checked');

            if (!asistenciaSeleccionada) {
                if (errorPases) {
                    errorPases.innerText = "Por favor selecciona si asistirás o no.";
                    errorPases.style.display = 'block';
                } else {
                    alert("Por favor selecciona si asistirás o no.");
                }
                return;
            }

            // Referencia al texto dentro de la ventana modal
            const textoModal = document.querySelector('#modal-confirmacion .modal-contenido p');

            // 2. CASO: Seleccionó "NO"
            if (asistenciaSeleccionada.value === 'No') {
                if (textoModal) {
                    textoModal.innerText = "¿Es correcta su respuesta? Lamentaremos mucho no contar con tu presencia.";
                }
                if (modal) modal.style.display = 'flex';
                return;
            }

            // 3. CASO: Seleccionó "SÍ"
            if (asistenciaSeleccionada.value === 'Si') {
                const cantidadPases = parseInt(inputConfirmados.value) || 0;

                // Validar número de pases
                if (cantidadPases < 1 || cantidadPases > pasesMax) {
                    if (errorPases) {
                        errorPases.innerText = `Ingresa una cantidad válida de pases (1 de ${pasesMax}).`;
                        errorPases.style.display = 'block';
                    }
                    return;
                }

                // Validar que todos los campos de nombre estén llenos
                const inputsNombres = document.querySelectorAll('.nombre-validar');
                let hayCamposVacios = false;

                inputsNombres.forEach(input => {
                    if (input.value.trim() === "") {
                        hayCamposVacios = true;
                        input.style.borderColor = "#d9534f"; // Resalta en rojo el campo faltante
                    } else {
                        input.style.borderColor = "var(--dorado)";
                    }
                });

                if (hayCamposVacios) {
                    if (errorPases) {
                        errorPases.innerText = "Por favor, revisa que los nombres y la cantidad de pases sean los indicados antes de enviar.";
                        errorPases.style.display = 'block';
                    }
                    return;
                }

                // Si todo está correcto para el "Sí"
                if (textoModal) {
                    textoModal.innerText = "¿Tus datos son correctos? Por favor, revisa que los nombres y la cantidad de pases sean los indicados antes de enviar.";
                }
                if (modal) modal.style.display = 'flex';
            }
        };
    }

    if (btnCorregir) {
        btnCorregir.onclick = () => { 
            if (modal) modal.style.display = 'none'; 
        };
    }

    if (btnTodoBien) {
    btnTodoBien.onclick = function() {
        if (modal) modal.style.display = 'none';
        
        if (btnEnviar) {
            btnEnviar.innerText = "ENVIANDO...";
            btnEnviar.disabled = true;
        }

        // Limpiar espacios en blanco de los nombres
        const inputsNombres = document.querySelectorAll('.nombre-validar');
        inputsNombres.forEach(input => {
            input.value = input.value.trim();
        });

        // Enviar el formulario a través del iframe oculto
        formRSVP.submit();

        // Guardar en la memoria local para que no vuelva a contestar
        if (invitadoID) {
            localStorage.setItem('confirmado_' + invitadoID, 'true');
        }

        // Mostrar mensaje de éxito en la pantalla
        setTimeout(() => {
            formRSVP.style.display = 'none';
            if (msgExito) {
                msgExito.style.display = 'block';
                msgExito.innerHTML = "¡Tu respuesta ha sido enviada con éxito!<br>Gracias por acompañarnos.";
            }
        }, 1000);
    };
}

    // --- BOTÓN DE REINICIO / PRUEBAS ---
    const btnResetPruebas = document.getElementById('btn-reset-pruebas');

    if (btnResetPruebas) {
        btnResetPruebas.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();

            // 1. Limpiar localStorage de pruebas si existía un ID guardado
            if (invitadoID) {
                localStorage.removeItem('confirmado_' + invitadoID);
            }

            // 2. Reiniciar los inputs del formulario
            const formulario = document.getElementById('form-asistencia');
            if (formulario) {
                formulario.reset();
                formulario.style.display = 'block'; // Volver a mostrar el formulario si estaba oculto
            }

            // 3. Ocultar el mensaje de éxito si estaba activo
            if (msgExito) {
                msgExito.style.display = 'none';
            }

            // 4. Ocultar secciones condicionales y modales
            const camposSi = document.getElementById('campos-asistencia-si');
            const msgDespedida = document.getElementById('mensaje-despedida');
            const btnEnviar = document.getElementById('btnEnviar');
            const modal = document.getElementById('modal-confirmacion');

            if (camposSi) camposSi.style.display = 'none';
            if (msgDespedida) msgDespedida.style.display = 'none';
            if (btnEnviar) btnEnviar.style.display = 'none';
            if (modal) modal.style.display = 'none';

            // 5. Vaciar lista de nombres dinámicos y errores
            if (contenedorNombres) contenedorNombres.innerHTML = '';
            if (errorPases) {
                errorPases.innerText = '';
                errorPases.style.display = 'none';
            }

            // 6. Restablecer input de pases confirmados
            if (inputConfirmados) {
                inputConfirmados.value = '';
                inputConfirmados.required = false;
                inputConfirmados.removeAttribute('min');
            }

            // 7. Desmarcar manualmente los radio buttons
            const radios = document.querySelectorAll('input[name="Asistencia"]');
            radios.forEach(radio => radio.checked = false);

            console.log("Formulario de prueba reiniciado correctamente.");
        });
    }

   // ==========================================
// REPRODUCTOR DE MÚSICA (CON AUTOPLAY RECOVER)
// ==========================================

const playlist = [
    "imagenes/cancion.mp3",
    "imagenes/cancion2.mp3"
];
let currentTrackIndex = 0;

const musica = document.getElementById('musica-boda');
const logoMusica = document.getElementById('logo-reproductor');
const btnMusica = document.getElementById('btn-musica');
const musicMenu = document.getElementById('music-menu');
const playPauseBtn = document.getElementById('play-pause-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

function loadTrack(index) {
    if (musica && playlist[index]) {
        musica.src = playlist[index];
        musica.load();
    }
}

if (musica) {
    loadTrack(currentTrackIndex);
}

// Función para intentar reproducir y actualizar la interfaz de usuario (UI)
function intentarReproducir() {
    if (!musica || !musica.paused) return;

    musica.play().then(() => {
        if (logoMusica) logoMusica.classList.add('rotating');
        if (playPauseBtn) playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
        
        // Si tuvo éxito, removemos los listeners de toque global
        removerListenersGlobales();
    }).catch((e) => {
        // Bloqueado por el navegador hasta que haya interacción
        console.log("Esperando toque del usuario para iniciar música...");
    });
}

// Función que se activa en el primer toque/clic
function reproducirAlInteractuar() {
    intentarReproducir();
}

function removerListenersGlobales() {
    document.removeEventListener('click', reproducirAlInteractuar);
    document.removeEventListener('touchstart', reproducirAlInteractuar);
    document.removeEventListener('scroll', reproducirAlInteractuar);
}

// 1. Intentar autoplay al cargar
iniciarAutoplay();

function iniciarAutoplay() {
    intentarReproducir();
    
    // 2. Si el navegador lo bloqueó, estos eventos activarán la música al primer toque/clic/scroll
    document.addEventListener('click', reproducirAlInteractuar, { once: true });
    document.addEventListener('touchstart', reproducirAlInteractuar, { once: true });
    document.addEventListener('scroll', reproducirAlInteractuar, { once: true });
}

function togglePlayPause() {
    if (!musica) return;

    if (musica.paused) {
        musica.play().then(() => {
            if (logoMusica) logoMusica.classList.add('rotating');
            if (playPauseBtn) playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
        });
    } else {
        musica.pause();
        if (logoMusica) logoMusica.classList.remove('rotating');
        if (playPauseBtn) playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    }
}

if (btnMusica && musicMenu) {
    btnMusica.addEventListener('click', (e) => {
        e.stopPropagation();
        musicMenu.classList.toggle('hidden');
    });

    document.addEventListener('click', (e) => {
        if (!musicMenu.contains(e.target) && !btnMusica.contains(e.target)) {
            musicMenu.classList.add('hidden');
        }
    });
}

if (playPauseBtn) {
    playPauseBtn.addEventListener('click', togglePlayPause);
}

if (nextBtn) {
    nextBtn.addEventListener('click', () => {
        currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
        loadTrack(currentTrackIndex);
        musica.play().then(() => {
            if (logoMusica) logoMusica.classList.add('rotating');
            if (playPauseBtn) playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
        });
    });
}

if (prevBtn) {
    prevBtn.addEventListener('click', () => {
        currentTrackIndex = (currentTrackIndex - 1 + playlist.length) % playlist.length;
        loadTrack(currentTrackIndex);
        musica.play().then(() => {
            if (logoMusica) logoMusica.classList.add('rotating');
            if (playPauseBtn) playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
        });
    });
}

// --- LÓGICA DEL CONTADOR DE TIEMPO ---
const fechaBoda = new Date('November 21, 2026 18:00:00').getTime();

setInterval(function() {
    const ahora = new Date().getTime();
    const distancia = fechaBoda - ahora;

    const d = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const h = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((distancia % (1000 * 60)) / 1000);

    if (document.getElementById('dias')) document.getElementById('dias').innerText = d;
    if (document.getElementById('horas')) document.getElementById('horas').innerText = h;
    if (document.getElementById('minutos')) document.getElementById('minutos').innerText = m;
    if (document.getElementById('segundos')) document.getElementById('segundos').innerText = s;
}, 1000);

// --- LÓGICA GALERÍA LIGHTBOX ---
window.abrirFoto = function(elemento) {
    const lightbox = document.getElementById('lightbox');
    const fotoPopup = document.getElementById('foto-popup');
    const frasePopup = document.getElementById('frase-popup');

    if (lightbox && fotoPopup && frasePopup) {
        fotoPopup.src = elemento.src;
        frasePopup.innerText = elemento.getAttribute('data-frase') || '';
        lightbox.style.display = 'flex';
    }
};

window.cerrarFoto = function() {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) lightbox.style.display = 'none';
}
};

// --- Lógica para Carrusel Arrastrable e Infinito (Opción A) ---
document.addEventListener("DOMContentLoaded", () => {
  const carruselPantalla = document.querySelector(".marat-carrusel-pantalla");
  const carruselTira = document.querySelector(".marat-carrusel-tira");

  if (!carruselPantalla || !carruselTira) return;

  let isDown = false;
  let startX;
  let scrollLeft;
  let animacionId = null;
  const velocidad = 1; // Velocidad de avance automático (px por frame)

  // Función de avance automático
  function moverAutomatico() {
    if (!isDown) {
      carruselPantalla.scrollLeft += velocidad;
      
      // Reinicio imperceptible al llegar a la mitad de la tira duplicada
      const limiteScroll = carruselTira.scrollWidth / 2;
      if (carruselPantalla.scrollLeft >= limiteScroll) {
        carruselPantalla.scrollLeft -= limiteScroll;
      } else if (carruselPantalla.scrollLeft <= 0) {
        carruselPantalla.scrollLeft += limiteScroll;
      }
    }
    animacionId = requestAnimationFrame(moverAutomatico);
  }

  // Iniciar animación automática
  animacionId = requestAnimationFrame(moverAutomatico);

  // --- Eventos para mouse (Escritorio) ---
  carruselPantalla.addEventListener("mousedown", (e) => {
    isDown = true;
    startX = e.pageX - carruselPantalla.offsetLeft;
    scrollLeft = carruselPantalla.scrollLeft;
  });

  carruselPantalla.addEventListener("mouseleave", () => {
    isDown = false;
  });

  carruselPantalla.addEventListener("mouseup", () => {
    isDown = false;
  });

  carruselPantalla.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - carruselPantalla.offsetLeft;
    const walk = (x - startX) * 1.5; // Factor de sensibilidad
    carruselPantalla.scrollLeft = scrollLeft - walk;
  });

  // Pause en hover opcional si el usuario solo coloca el cursor encima sin arrastrar
  carruselPantalla.addEventListener("mouseenter", () => {
    cancelAnimationFrame(animacionId);
  });

  carruselPantalla.addEventListener("mouseleave", () => {
    animacionId = requestAnimationFrame(moverAutomatico);
  });
});


// --- FUNCIONALIDAD PARA BOTÓN CÓDIGO DE VESTIMENTA ---
document.addEventListener('DOMContentLoaded', function() {
    const btnVestimenta = document.getElementById('btn-toggle-vestimenta');
    const mensajeVestimenta = document.getElementById('mensaje-vestimenta-desplegable');

    if (btnVestimenta && mensajeVestimenta) {
        btnVestimenta.addEventListener('click', function() {
            mensajeVestimenta.classList.toggle('activo');
            
            if (mensajeVestimenta.classList.contains('activo')) {
                btnVestimenta.innerHTML = '<i class="fas fa-chevron-up"></i> OCULTAR MENSAJE';
            } else {
                btnVestimenta.innerHTML = '<i class="fas fa-exclamation-circle"></i> POR FAVOR LEER';
            }
        });
    }
});


// ==========================================================================
// PASO 4: INTERACCIÓN DE APERTURA DE PUERTAS Y MÚSICA
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
    const btnAbrir = document.getElementById('btn-abrir-puertas');
    const overlayPuertas = document.getElementById('pantalla-puertas');

    if (btnAbrir && overlayPuertas) {
        btnAbrir.addEventListener('click', () => {
            // 1. Iniciar animación 3D de apertura
            overlayPuertas.classList.add('abierto');

            // 2. Intentar reproducir la música de fondo si existe la función
            if (typeof intentarReproducir === 'function') {
                intentarReproducir();
            }

            // 3. Ocultar la capa tras terminar la animación (1.2 segundos)
            setTimeout(() => {
                overlayPuertas.style.display = 'none';
            }, 1200);
        });
    }
});
