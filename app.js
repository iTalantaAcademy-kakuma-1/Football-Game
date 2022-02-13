function RealMadridGoal() {
    var incrementRealmadridGoal = document.getElementById('RealMadrid-score');
    var value = incrementRealmadridGoal.innerHTML;
    value++;
    document.getElementById('RealMadrid-score').innerHTML = value;

}

function BarcelonaGoal() {
    var incrementBarcelonaGoal = document.getElementById('Barelona-score');
    var value = incrementBarcelonaGoal.innerHTML;
    value++;
    document.getElementById('Barcelona-score').innerHTML = value;

}

function RealMadridFoul() {
    var incrementRealMadridGoal = document.getElementById('RealMadrid-foul');
    var value = incrementRealMadridGoal.innerHTML;
    value++;
    document.getElementById('RealMadrid-foul').innerHTML = value;

}

function BarcelonaFoul() {
    var incrementBarcelonaGoal = document.getElementById('Barcelona-foul');
    var value = incrementBarcelonaGoal.innerHTML;
    value++;
    document.getElementById('Barcelona-foul').innerHTML = value;

}

function resetGoals() {
    document.getElementById('Barcelona-foul').innerHTML = '0';
    document.getElementById('RealMadrid-foul').innerHTML = '0';
    document.getElementById('Barcelona-score').innerHTML = '0';
    document.getElementById('RealMadrid-score').innerHTML = '0';
}

