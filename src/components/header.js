const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
    //create dom elements

    const headDiv = document.createElement('div');
    const spanDate = document.createElement('span');
    const headH1 = document.createElement('h1');
    const tempSpan = document.createElement('span');

    //add the classes

    headDiv.classList.add('header');
    spanDate.classList.add('date');
    tempSpan.classList.add('temp');

    //lets append the elements now

    headDiv.appendChild(spanDate);
    headDiv.appendChild(headH1);
    headDiv.appendChild(tempSpan);

    //now, lets add the text content

    spanDate.textContent = date;
    headH1.textContent = title;
    tempSpan.textContent = temp;

    return headDiv;
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  const newHeader = Header('Record High Job Placement', 'Today', '78');
  document.querySelector(selector).appendChild(newHeader);

}

export { Header, headerAppender }
