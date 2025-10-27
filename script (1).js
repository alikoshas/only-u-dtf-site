// script.js — interactive behaviors for Only U site
document.addEventListener('DOMContentLoaded', function(){
  // gallery click -> open modal
  document.querySelectorAll('.gallery-item').forEach(btn=>{
    btn.addEventListener('click', function(){
      const title = this.dataset.title || '';
      const desc = this.dataset.desc || '';
      openModal(title, desc);
    });
  });
});

function openModal(title, desc){
  const modal = document.getElementById('modal');
  document.getElementById('modalTitle').textContent = title;
  document.getElementById('modalDesc').textContent = desc;
  modal.setAttribute('aria-hidden','false');
}

function closeModal(){
  const modal = document.getElementById('modal');
  modal.setAttribute('aria-hidden','true');
}

function handleContact(e){
  e.preventDefault();
  const form = e.target;
  const data = new FormData(form);
  // For demo site we just show a friendly message
  alert('Спасибо, ' + (data.get('name')||'') + '!\nВаш запрос отправлен (демо). Мы свяжемся по e‑mail: ' + (data.get('email')||'') );
  form.reset();
  return false;
}

function estimateSample(){
  // Simple sample estimator — демонстрация интерактивности
  const qty = prompt('Введите примерное количество стикеров (цифра):', '10');
  if(!qty) return;
  const q = Number(qty);
  if(isNaN(q) || q<=0){ alert('Пожалуйста, введите положительное число.'); return; }
  let pricePer;
  if(q<10) pricePer = 90;
  else if(q<50) pricePer = 60;
  else pricePer = 40;
  const total = q * pricePer;
  alert('Примерный расчёт:\n' + q + ' шт. × ' + pricePer + ' ₽ = ' + total + ' ₽\n(Окончательная цена зависит от размеров, покрытия и сложности макета).');
}
