document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('container');

  // Generate a grid item with buttons and inputs
  function generateGridItem() {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');

    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container');
    const buttons = ['Bold', 'Italic', 'Underline'];
    buttons.forEach(btnText => {
      const button = document.createElement('button');
      button.textContent = btnText;
      button.classList.add(btnText.toLowerCase() + '-btn');
      buttonContainer.appendChild(button);
    });

    const fontSizeInput = document.createElement('input');
    fontSizeInput.setAttribute('type', 'number');
    fontSizeInput.classList.add('font-size-input');
    fontSizeInput.value = '16';

    const colorInput = document.createElement('input');
    colorInput.setAttribute('type', 'color');
    colorInput.classList.add('color-input');
    colorInput.value = '#000000';

    buttonContainer.appendChild(fontSizeInput);
    buttonContainer.appendChild(colorInput);

    gridItem.appendChild(buttonContainer);

    return gridItem;
  }

  function generateParagraphItem(text) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');

    const paragraph = document.createElement('p');
    paragraph.textContent = text;

    gridItem.appendChild(paragraph);

    return gridItem;
  }

  function handleBoldClick(event) {
    const paragraph = event.target
      .closest('.grid-item')
      .nextElementSibling.querySelector('p');
    const fontWeight = window
      .getComputedStyle(paragraph)
      .getPropertyValue('font-weight');
    paragraph.style.fontWeight = fontWeight === 'bold' ? 'normal' : 'bold';
  }

  function handleItalicClick(event) {
    const paragraph = event.target
      .closest('.grid-item')
      .nextElementSibling.querySelector('p');
    paragraph.style.fontStyle =
      paragraph.style.fontStyle === 'italic' ? 'normal' : 'italic';
  }

  function handleUnderlineClick(event) {
    const paragraph = event.target
      .closest('.grid-item')
      .nextElementSibling.querySelector('p');
    paragraph.style.textDecoration =
      paragraph.style.textDecoration === 'underline' ? 'none' : 'underline';
  }

  function handleFontSizeChange(event) {
    const paragraph = event.target
      .closest('.grid-item')
      .nextElementSibling.querySelector('p');
    paragraph.style.fontSize = event.target.value + 'px';
  }

  function handleColorChange(event) {
    const paragraph = event.target
      .closest('.grid-item')
      .nextElementSibling.querySelector('p');
    paragraph.style.color = event.target.value;
  }

  container.addEventListener('click', function (event) {
    if (event.target.classList.contains('bold-btn')) {
      handleBoldClick(event);
    } else if (event.target.classList.contains('italic-btn')) {
      handleItalicClick(event);
    } else if (event.target.classList.contains('underline-btn')) {
      handleUnderlineClick(event);
    }
  });

  container.addEventListener('input', function (event) {
    if (event.target.classList.contains('font-size-input')) {
      handleFontSizeChange(event);
    } else if (event.target.classList.contains('color-input')) {
      handleColorChange(event);
    }
  });

  function generateGrid() {
    const sentences = [
      "He's not the sharpest knife in the drawer.",
      'The big building was blazing with lights.',
      'Now you must answer some big questions.',
      'Get Your Act Together!'
    ];

    for (let i = 0; i < sentences.length; i++) {
      const gridItemButtons = generateGridItem();
      container.appendChild(gridItemButtons);

      const gridItemSentence = generateParagraphItem(sentences[i]);
      container.appendChild(gridItemSentence);
    }
  }

  generateGrid();
});
