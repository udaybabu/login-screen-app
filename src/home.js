import { render } from '@testing-library/react';
import React,{useState} from 'react';
import Select from 'react-select';

const Home = () => {
 const [name, setName] = useState('test');
 const [userData, setuserData] = useState([
  {UserId:1, name:"uday kumar", RoleCode:'AG', RoleName: 'Agent'},
  {UserId:2, name:"Preethu", RoleCode:'AG', RoleName: 'Agent'},
  {UserId:3, name:"Suresh", RoleCode:'TL', RoleName: 'TL'},
  {UserId:4, name:"Arvind", RoleCode:'TL', RoleName: 'TL'},
  {UserId:5, name:"Danny", RoleCode:'MG', RoleName: 'Manager'},
  {UserId:6, name:"Janakiram", RoleCode:'MG', RoleName: 'Manager'},
 ]);

const options = userData.map((user) => ({
  value: user.UserId,
  label: user.name,
  roleCode: user.RoleCode,
  roleName: user.RoleName,
}));

const groupedOptions = options.reduce((groups, option) => {
  const roleCode = option.roleCode;
  if (!groups[roleCode]) {
    groups[roleCode] = [];
  }
  groups[roleCode].push(option);
  return groups;
}, {});

const groupHeaderOptions = Object.keys(groupedOptions).map((roleCode) => ({
  label: groupedOptions[roleCode][0].roleName, // Use RoleName as the group header label
  options: groupedOptions[roleCode].map((option) => ({
    value: option.value,
    label: option.label,
  })),
}));

const onOptionChangeHandler = (value) => {
  console.log('value:',value);
    console.log('data:',groupHeaderOptions);
}

  return (<>
    <div>
      <h1>Home Loads</h1>
    </div>
    <div>
      <h1>Grouping Example with React-Select (Grouped Headers)</h1>
      <Select options={groupHeaderOptions} onChange={(value) => onOptionChangeHandler(value)}/>

      <select onChange={onOptionChangeHandler}>

        <option>Please choose one option</option>
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
        {/* {groupHeaderOptions && groupHeaderOptions.map((option, index) => {
          <option key={index} >
            {option}
          </option>
        })} */}
      </select>
    </div>
  </>
  )
}

export default Home