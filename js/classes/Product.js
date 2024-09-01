import del from '../../css/img/del.png';
export class Product {
  constructor(
    id,
    title,
    price,
    category,
    description,
    image,
    rate = 0,
    count = 0,
    parentSelector
  ) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.category = category;
    this.description = description;
    this.src = image;
    this.classList = ['main__product-card'];
    this.rate = +rate;
    this.count = +count;
    this.parent = document.querySelector(parentSelector);
  }

  render() {
    const element = document.createElement('div');
    element.classList.add(...this.classList);
    element.setAttribute('id', this.id);
    element.innerHTML = `
    <div class="flex flex-col rounded-lg  shadow-secondary-1">
        <div class="main__product-card_img">
            <a href="#!">
                <img src="${this.src}" class="rounded-t-lg w-full "  alt=""/>
            </a>
        </div>
        <div class="main__product-card_info">
            <h5 class="main__product-card_title ">
                ${this.title}
            </h5>
            <p class="main__product-card_description">
                ${this.description}
            </p>
            <div class="main_product-card_price-rate-count">
                <p class="main_product-card_price">$ ${this.price}</p>
                <p class="main_product-card_rate mb-4 text-base">rate: <span>${this.rate}</span> </p>
                <p class="main_product-card_count mb-4 text-base">count: <span>${this.count}</span></p>
            </div>  
            <button
                type="button"
                class="main_product-card_btn-delete"
                data-twe-ripple-init
                data-twe-ripple-color="light"
            >
                <img data-open-modal src="${del}"/>
            </button>
        </div>
     </div>
    `;
    const img = element.querySelector('img');
    img.style.maxHeight = '210px';
    img.style.height = '210px';
    img.style.objectFit = 'contain';
    const elemRate = element.querySelector('.main_product-card_rate span'),
      elemCount = element.querySelector('.main_product-card_count span');
    this.rate > 4
      ? elemRate.classList.add('green-text')
      : this.rate > 2.5 && this.rate <= 4
      ? elemRate.classList.add('yellow-text')
      : elemRate.classList.add('rose-text');
    this.count > 100
      ? elemCount.classList.add('green-text')
      : this.count > 10 && this.count <= 100
      ? elemCount.classList.add('yellow-text')
      : elemCount.classList.add('rose-text');

    this.parent.append(element);
  }
}
