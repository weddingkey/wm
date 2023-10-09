const productsList1 = [
    { id: 1, photo: 'img/backdrop.png', name: '商品1', price: 10.99, description: '这是商品1的描述。' },
    { id: 2, photo: 'img/backdrop.png', name: '商品2', price: 14.99, description: '这是商品2的描述。这是商品2的描述。这是商品2的描述。这是商品2的描述。这是商品2的描述。这是商品2的描述。这是商品2的描述。这是商品2的描述。这是商品2的描述。' },
    { id: 3, photo: 'img/backdrop.png', name: '商品2', price: 14.99, description: '这是商品2的描述。' },
    { id: 4, photo: 'img/backdrop.png', name: '商品2', price: 14.99, description: '这是商品2的描述。' },
    { id: 5, photo: 'img/backdrop.png', name: '商品2', price: 14.99, description: '这是商品2的描述。' },
    { id: 6, photo: 'img/backdrop.png', name: '商品2', price: 14.99, description: '这是商品2的描述。' },
];

const productsList2 = [
    { id: 7, photo: 'img/backdrop.png', name: '商品3', price: 9.99, description: '这是商品3的描述。' },
    { id: 8, photo: 'img/backdrop.png', name: '商品4', price: 19.99, description: '这是商品4的描述。' },
    { id: 9, photo: 'img/backdrop.png', name: '商品3', price: 9.99, description: '这是商品3的描述。' },
    { id: 10, photo: 'img/backdrop.png', name: '商品4', price: 19.99, description: '这是商品4的描述。' },
    { id: 11, photo: 'img/backdrop.png', name: '商品3', price: 9.99, description: '这是商品3的描述。' },
    { id: 12, photo: 'img/backdrop.png', name: '商品4', price: 19.99, description: '这是商品4的描述。' },
];

const productsList3 = [
    { id: 13, photo: 'img/backdrop.png', name: '商品3', price: 9.99, description: '这是商品3的描述。' },
    { id: 14, photo: 'img/backdrop.png', name: '商品4', price: 19.99, description: '这是商品4的描述。' },
    { id: 15, photo: 'img/backdrop.png', name: '商品3', price: 9.99, description: '这是商品3的描述。' },
    { id: 16, photo: 'img/backdrop.png', name: '商品4', price: 19.99, description: '这是商品4的描述。' },
    { id: 17, photo: 'img/backdrop.png', name: '商品3', price: 9.99, description: '这是商品3的描述。' },
    { id: 18, photo: 'img/backdrop.png', name: '商品4', price: 19.99, description: '这是商品4的描述。' },
];

const cart = [];
const cartItems = document.getElementById('cart-items');

// 创建一个函数来更新购物车显示
function updateCart() {
    const cartTotal = document.getElementById('cart-total');
    const cartSummaryText = document.getElementById('cart-summary-text');

    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <img src="${item.photo}" alt="${item.name}" width="50">
                <h3>${item.name}</h3>
                <p>价格: $${item.price.toFixed(2)}</p>
                <p>${item.description}</p>
            <div class="item-controls">
                <button class="decrement-btn" onclick="decrementItem(${index})">-</button>
                <span class="item-count">${item.count}</span>
                <button class="increment-btn" onclick="incrementItem(${index})">+</button>
            </div>
        `;
        cartItems.appendChild(li);
        total += item.price * item.count;
    });

    cartTotal.textContent = `總計: $${total.toFixed(2)}`;
    cartSummaryText.textContent = `項目數量: ${cart.length}`;
}

// 创建函数来增加物品数量
function incrementItem(index) {
    cart[index].count++;
    updateCart();
}

// 创建函数来减少物品数量
function decrementItem(index) {
    if (cart[index].count > 1) {
        cart[index].count--;
    } else {
        // 如果数量为1，从购物车中移除该物品
        cart.splice(index, 1);
    }
    updateCart();
}

// 在添加物品到购物车时，设置物品的初始数量为1
function addToCart(itemId) {
    const existingItem = cart.find(item => item.id === itemId);
    if (existingItem) {
        existingItem.count++;
    } else {
        const item = [...productsList1, ...productsList2, ...productsList3].find(product => product.id === itemId);
        if (item) {
            item.count = 1; // 设置初始数量为1
            cart.push(item);
        }
    }
    updateCart();
}



const cartToggle = document.querySelector('.cart-toggle');
const cartSection = document.querySelector('.cart');
const totalTitle = document.getElementById('total-title');
const toggleButton = document.getElementById('toggle-open');
cartSection.style.padding = '0';
cartSection.style.maxHeight = '0';


cartToggle.addEventListener('click', () => {
    if (cartSection.classList.contains('hidden')) {
        cartSection.classList.remove('hidden');
        cartSection.style.maxHeight = 'none';
        cartSection.style.padding = '1vw';
        toggleButton.textContent = '-';
    } else {
        cartSection.classList.add('hidden');
        cartSection.style.maxHeight = '0';
        cartSection.style.padding = '0';
        toggleButton.textContent = '+';
    }
});



const productsContainer1 = document.getElementById('product-list1');
productsList1.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product'); // 添加卡片样式
    productDiv.innerHTML = `
        <img src="${product.photo}" alt="${product.name}" width="100">
        <h2>${product.name}</h2>
        <p>价格: $${product.price.toFixed(2)}</p>
        <p id="product-description">${product.description}</p>
        <button onclick="addToCart(${product.id})">添加到购物车</button>
    `;
    productsContainer1.appendChild(productDiv);
});

const productsContainer2 = document.getElementById('product-list2');
productsList2.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product'); // 添加卡片样式
    productDiv.innerHTML = `
        <img src="${product.photo}" alt="${product.name}" width="100">
        <h2>${product.name}</h2>
        <p>价格: $${product.price.toFixed(2)}</p>
        <p id="product-description">${product.description}</p>
        <button onclick="addToCart(${product.id})">添加到购物车</button>
    `;
    productsContainer2.appendChild(productDiv);
});

const productsContainer3 = document.getElementById('product-list3');
productsList3.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product'); // 添加卡片样式
    productDiv.innerHTML = `
        <img src="${product.photo}" alt="${product.name}" width="100">
        <h2>${product.name}</h2>
        <p>价格: $${product.price.toFixed(2)}</p>
        <p id="product-description">${product.description}</p>
        <button onclick="addToCart(${product.id})">添加到购物车</button>
    `;
    productsContainer3.appendChild(productDiv);
});

// 获取结账按钮元素
const checkoutButton = document.getElementById('checkout-btn');

// 添加点击事件监听器
checkoutButton.addEventListener('click', () => {
    // 创建一个新的表格元素
    const table = document.createElement('table');
    const tableBody = document.createElement('tbody');

    // 创建独立的数据行
    const separateRow = document.createElement('tr');
    const separateCell = document.createElement('td');
    separateCell.setAttribute('colspan', '4'); // 合并所有列
    separateCell.textContent = `${document.getElementById('total-title').textContent},${document.getElementById('cart-summary-text').textContent},${document.getElementById('cart-total').textContent}`;
    separateRow.appendChild(separateCell);
    tableBody.appendChild(separateRow);

    // 创建表头行
    const headerRow = document.createElement('tr');
    const headers = ['ID', '名称', '价格', '数量'];
    headers.forEach(headerText => {
        const headerCell = document.createElement('th');
        headerCell.textContent = headerText;
        headerRow.appendChild(headerCell);
    });
    tableBody.appendChild(headerRow);

    // 创建购物车项的表格行
    cart.forEach((item, index) => {
        const row = document.createElement('tr');
        const cellId = document.createElement('td');
        cellId.textContent = item.id;
        const cellName = document.createElement('td');
        cellName.textContent = item.name;
        const cellPrice = document.createElement('td');
        cellPrice.textContent = `$${item.price.toFixed(2)}`;
        const cellCount = document.createElement('td');
        cellCount.textContent = item.count;

        // 将单元格添加到行中
        row.appendChild(cellId);
        row.appendChild(cellName);
        row.appendChild(cellPrice);
        row.appendChild(cellCount);

        // 将行添加到表格主体中
        tableBody.appendChild(row);
    });

    // 将表格主体添加到表格中
    table.appendChild(tableBody);

    // 创建一个临时的div元素用于复制表格内容
    const tempDiv = document.createElement('div');
    tempDiv.appendChild(table);

    // 将表格添加到文档中，以便它能被选中并复制
    document.body.appendChild(tempDiv);

    // 选中表格内容
    const range = document.createRange();
    range.selectNodeContents(table);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);

    // 复制选中内容到剪贴板
    document.execCommand('copy');

    // 清理临时元素
    document.body.removeChild(tempDiv);

    // 提示用户已复制
    alert('已复制购物车内容到剪贴板');
});






// 默认隐藏购物车和商品列表
cartSection.classList.add('hidden');

// 首先，将商品列表容器包装在一个对象中以便管理
const productLists = {
    list1: {
        container: document.getElementById('product-list1'),
        toggleButton: document.getElementById('toggle-products1')
    },
    list2: {
        container: document.getElementById('product-list2'),
        toggleButton: document.getElementById('toggle-products2')
    },
    list3: {
        container: document.getElementById('product-list3'),
        toggleButton: document.getElementById('toggle-products3')
    }
};

// 添加按钮点击事件监听器以展开和收合相应的商品列表
for (const key in productLists) {
    if (productLists.hasOwnProperty(key)) {
        const productList = productLists[key];
        productList.toggleButton.addEventListener('click', () => {
            // 首先，将所有的商品列表隐藏
            for (const innerKey in productLists) {
                if (productLists.hasOwnProperty(innerKey)) {
                    const innerProductList = productLists[innerKey];
                    innerProductList.container.classList.add('hidden');
                }
            }
            
            // 然后，根据点击的按钮展开或收合相应的商品列表
            if (productList.container.classList.contains('hidden')) {
                productList.container.classList.remove('hidden');
            } else {
                productList.container.classList.add('hidden');
            }
        });
    }
}

