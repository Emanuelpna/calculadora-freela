const Calculator = function () {
  return {
    bind() {
      const expectedAmount = document.querySelector('#expectedAmount');
      const dailyHours = document.querySelector('#dailyHours');
      const daysToFinish = document.querySelector('#daysToFinish');

      const calculator = document.querySelector('#calculator');

      console.log('calculator :>> ', calculator);

      calculator.addEventListener('submit', (e) => {
        e.preventDefault();

        const hourPrice = this.getHourPrice(
          expectedAmount.value,
          dailyHours.value,
          daysToFinish.value
        );

        console.log('hourPrice1 :>> ', hourPrice);

        this.print(hourPrice);
      });
    },
    getHourPrice(expectedAmount, dailyHours, daysToFinish) {
      const dayPrice = expectedAmount / daysToFinish;

      const hourPrice = dayPrice / dailyHours;

      return hourPrice;
    },
    _formatPrice(price) {
      return price.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      });
    },
    print(hourPrice) {
      const resultDiv = document.querySelector('#hourPrice');

      console.log('hourPrice :>> ', hourPrice);

      console.log('resultDiv :>> ', resultDiv);

      resultDiv.innerHTML = "";
      resultDiv.innerHTML = `${this._formatPrice(hourPrice)} / hora`;
    },
  };
};

const calculateHourPrice = new Calculator();
calculateHourPrice.bind();
