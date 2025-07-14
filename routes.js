import { viewHome }                   from "./home.js";
import { viewLogin , scriptLogin }    from "./login.js";
import { viewRegister , scriptRegister } from "./register.js";
import { viewDashboard }              from "./dashboard.js";
import { viewNotes , scriptNotes }    from "./notes.js";
import { viewUsers , scriptUsers }    from "./users.js";
import { viewHistory , scriptHistory } from "./history.js";
import { viewProfile , scriptProfile } from "./profile.js";
import { viewContact }  from "./contact.js";
import { viewTerms }    from "./terms.js";

export const routes = {
  "#/home":        viewHome,
  "#/login":      [viewLogin,     scriptLogin],
  "#/register":   [viewRegister,  scriptRegister],
  "#/dashboard":   viewDashboard,
  "#/notes":      [viewNotes,     scriptNotes],
  "#/users":      [viewUsers,     scriptUsers],
  "#/history":    [viewHistory,   scriptHistory],
  "#/profile":    [viewProfile,   scriptProfile],
  "#/contact":     viewContact,
  "#/terms":       viewTerms
};
