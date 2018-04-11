const text = {
  Tab1: "tab1 text",
  Tab2: "tab2 text text",
  Tab3: "text TAB3 text and stuff",
  Tab4: "stuff for tab4"
}


$('.tabs').on('click', (e) => {
  const tab = $(e.target).text()

  $('.text-box').text('')
  $('.text-box').append(text[tab])
  $('.tabs div').removeClass('active')
  $(`.${tab}`).toggleClass('active')
})
