do {
  var kaina = prompt('Įveskite prekės kainą');
  kaina = Number(kaina);
} while (isNaN(kaina) || kaina <= 0);

console.log('Prekės kaina: ' + Number(kaina) + '€');

var kainaSuPristatymu = kaina + 3.79;

if (confirm('Ar reikalingas pristatymas į namus?')) {
  var miestas = prompt('Į kurį miestą reiks pristatyti?');

  console.log('Pristatymas: 3.79 €');
  console.log('Iš viso:' + kainaSuPristatymu + '€');
  console.log('Prekę pristatysime į ' + miestas + ' per 1-3 dienas.');
} else {
  console.log(
    'Prekę galite atsiimti nemokamai Vilniuje adresu Gedimino pr. 1a'
  );
}
