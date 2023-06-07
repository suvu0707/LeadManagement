import React from 'react';
import { HashRouter, Routes, Route, Link } from 'react-router-dom'
import Addcategory from './Component/addcategory';
import Addproduct from './Component/addproduct';
import Adduser from './Component/adduser';
import All from './Component/all';
import Category from './Component/category';
import Editcategory from './Component/editcategory';
import Editproduct from './Component/editProduct';
import Edituser from './Component/edituser';
// import Product from './Component/product';
import Product1 from './Component/product1';
// import Book from './Component/book';
import ParentDetails from './Component/sdetail2';
import AddressDetails from './Component/sdetail3';
import Preview from './Component/spreview';
import Students from './Component/students';
// import User from './Component/userlist';
import Userlist2 from './Component/userlist2';


import Dashboard from './Component2/dashboard';
import Practice from './Component2/practice';
// import Output from './Component2/Output';
import Singlequestion from './Component2/singlequestion';
import Test from './Component2/test';
import TestReport from './Component2/testreport';
// import User from './Component/user';
import Mainheader from './Mainheader';


function App() {
  return (
    <HashRouter>
      <Mainheader />

      <Routes>
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/test" element={<Test />} />
        <Route exact path="/" element={<Students />} />
        <Route exact path="/parent" element={<ParentDetails />} />
        <Route exact path="/address" element={<AddressDetails />} />
        <Route exact path="/nproduct" element={<Addproduct/>}/>
        <Route exact path="/eproduct/:ppid" element={<Editproduct/>}/>
        {/* <Route exact path="/product" element={<Product />} /> */}
        <Route exact path="/product" element={<Product1 />} />
        <Route exact path="/all" element={<All />} />
        <Route exact path="/preview" element={<Preview />} />
        <Route exact path="/category" element={<Category />} />
        <Route exact path="/acategory" element={<Addcategory />} />
        <Route exact path="/ecategory/:ccid" element={<Editcategory />} />
        {/* <Route exact path="/user" element={<User />} /> */}
        <Route exact path="/user" element={<Userlist2 />} />
        <Route exact path="/nuser" element={<Adduser />} />
        <Route exact path="/euser/:uuid" element={<Edituser />} />
        {/* <Route exact path="/question" element={<Output />} /> */}
        <Route exact path="/squestion" element={<Singlequestion />} />
        <Route exact path="/practice" element={<Practice />} />
        <Route exact path="/testreport" element={<TestReport />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
