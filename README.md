<h1 align="center">Hermes</h1>
<p align="center">Hermes is a android aplication for managemento of delivery packs.</p>
<p align="center" style="text-align: center;">For this application, i've used my on API build in Nodejs, you can fint the git repository <a href="https://github.com/mycatdoitbetter/hermes-backend">here!</a></a></p>

<p align="center">
  
  <a aria-label="React Version" href="https://github.com/facebook/react-native">
    <img src="https://img.shields.io/badge/react_native-0.62.2-informational?logo=react"></img>
  </a>
  <a aria-label="Github API" href="https://github.com/mycatdoitbetter/hermes-backend">
    <img src="https://img.shields.io/badge/API-yellow?logo=docker"></img>
  </a>

</p>

<table border="0" align="center"> 
  <tr align="center">
     <td><b style="font-size:23px">Login and password recovery</b></td>
     <td><b style="font-size:23px">App main navigation</b></td>
     <td><b style="font-size:23px">Recording pack problems</b></td>
  </tr>
  <tr align="center">
    <td>
      <p>
        <img width="337" height="auto" src="demo/login.gif">
       </p>
     </td>
     <td>
       <p>
        <img width="337" height="auto" src="demo/navigation.gif">
       </p>
     </td>
     <td>
      <p>
        <img width="337" height="auto" src="demo/recording.gif">
       </p>
     </td>
  </tr>
 </table>

 To init this application,you can install your real device or in a emulator, doing:
 ```bash
 cd hermes-mobile
 yarn
 yarn android
 ```
In some cases, the bundle will not start, so, do you have to init with:
```bash
yarn start
```
