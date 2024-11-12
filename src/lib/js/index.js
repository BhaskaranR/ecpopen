// Import CSS files with correct relative paths
import '../css/index.css';
import '../css/chat-window.css';
import '../css/header.css';
import '../css/launcher.css';

import Launcher from "./launcher.js";
import * as sdk from './sdk.js';

window.ECPOpen = {
    Launcher,
    ...sdk
};