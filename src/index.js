import {ExcelApp} from './app/ExcelApp';
import './style.css';

const appPlaceholder = document.createElement('div');
document.querySelector('body').appendChild(appPlaceholder);

const app = new ExcelApp(appPlaceholder);
app.run();
