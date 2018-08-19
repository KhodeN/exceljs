import {ExcelApp} from './app/ExcelApp';

import './style.css';
import justStringsExample from './examples/justStrings';

const appPlaceholder = document.createElement('div');
document.querySelector('body').appendChild(appPlaceholder);

const app = new ExcelApp(appPlaceholder);
app.run(justStringsExample);
