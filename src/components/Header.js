import Nav from "./Nav";
const HeaderB = {
    render: () => (
        `<header class="d-flex justify-content-center py-3">
          <ul class="nav nav-pills">
            <li class="nav-item"><a href="/" class="nav-link active" aria-current="page">Home</a></li>
            <li class="nav-item"><a href="/news" class="nav-link">New</a></li>
            <li class="nav-item"><a href="/about" class="nav-link">About</a></li>
          </ul>
        </header>`
    )
}
// const Header = {
//     // render: function () {
//     //     return '<div>Header components</div>';
//     // }
//     render: (name = 'we17101') => (
//         `<div>
//             <h1>${name}</h1>
//             <div>${Nav.render()}</div>
//         </div>`

//     )
//     //sau mũi tên là dấu ngoặc tròn  -> return kết quả
// };
export default HeaderB;
// export default Header;