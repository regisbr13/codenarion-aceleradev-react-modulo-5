import React from "react";
import "./App.scss";
import { getContacts } from "./services/contactsServices";
import TopBar from "./components/Topbar";
import Contacts from "./components/Contacts";
import Filter from "./components/Filters";

class App extends React.Component {
  state = {
    contacts: [],
    constactsFound: [],
  };

  getContactsList = async () => {
    try {
      const response = await getContacts();
      const contacts = await response.json();
      this.setState({ contacts: contacts });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getContactsList();
  }

  sortContacts = (property) => {
    const contacts = this.state.contacts.sort((previous, current) => {
      if (previous[property] > current[property]) {
        return 1;
      }
      if (previous[property] < current[property]) {
        return -1;
      }
      return 0;
    });
    this.setState({ constactsFound: contacts });
  };

  searchContacts = (term) => {
    const contacts = this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(term.toLowerCase())
    );
    this.setState({ constactsFound: contacts });
  };

  render() {
    const contacts = this.state.contacts;
    const contactsFound = this.state.contactsFound;
    const search = contactsFound && contactsFound.length > 0;

    return (
      <React.Fragment>
        <TopBar />
        <Filter sort={this.sortContacts} search={this.searchContacts} />
        <Contacts data={contacts} />
      </React.Fragment>
    );
  }
}

export default App;
