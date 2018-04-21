import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, FormBtn } from "../../components/Form";

class Books extends Component {
  state = {
    books: [],
    title: "",
    url: "",
    search: "",
    startDate: "",
    endDate: "",
    deleted: false,
    results: [],
    saved: []
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        // this.setState({ books: res.data, title: "", author: "", synopsis: "" })
        this.setState({ saved: res.data, 
          deleted: false
           })

      )
      .catch(err => console.log("Error from loadBooks: ",err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const name = event.target.name;
    let value  = event.target.value;
    // This grabs the first 4 characters in the field
    if (name === "startDate" || name === "endDate") {
      value = value.substring(0, 4);
    }
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    let valid = this.validateDates();
    if (valid) {
        this.searchAPI();
        // this.saveSearchResult();
    }
  };

  saveSearchResult = () => {
    console.log("In save search result!");
    console.log(this.state.results[0].headline.main);
    console.log(this.state.results[0].web_url);
    console.log(this.state.results[0]._id);
    // for (let i=0; i<state.results.length; i++){
      API.saveBook({
        title: this.state.results[0].headline.main,
        url: this.state.results[0].web_url,
        nytid: this.state.results[0]._id
      })
    // }
    // .then(res => this.loadBooks())
    .catch(err => console.log(err));
  };

  validateDates = () => {
    let startDate = this.state.startDate;
    let endDate = this.state.endDate;
    if (startDate.length < 4 || endDate.length < 4) {
        alert("please check your dates: year needs to be 4 digits long")
    }
    else return true
  }



  searchAPI = () => {
    let search = this.state.search
    let startDate = this.state.startDate;
    let endDate = this.state.endDate;
    let query = "&q=" + search + 
    "&begin_date=" + 
    startDate + "0101" +
    "&end_date=" +  
    endDate + "1231";
    console.log("query: " + query);

    API.search(query)
      .then(res => 
        {
        this.setState({results: res.data.response.docs}, () => {
          console.log("API+++++++++++++++++++++++");
          console.log(this.state)
          // this.saveSearchResult();
        });
      })
      .catch(err => console.log(err));

    this.setState({
      search: "",
      startDate: "",
      endDate: ""
    })
  };



  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-1">
          </Col>
          <Col size="md-10">
            <Jumbotron>
              <h1>Search for NYT Articles</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.search}
                onChange={this.handleInputChange}
                name="search"
                placeholder="Search Topic (required)"
              />
              <Input
                value={this.state.startDate}
                onChange={this.handleInputChange}
                name="startDate"
                maxLength="4"
                placeholder="Start Year (YYYY required)"
              />
              <Input
                value={this.state.endDate}
                onChange={this.handleInputChange}
                name="endDate"
                maxLength="4"
                placeholder="End Year (YYYY required)"
              />
              <FormBtn
                disabled={!(this.state.search && this.state.startDate && this.state.endDate)}
                onClick={this.handleFormSubmit}
              >
                Search for Articles
              </FormBtn>
            </form>
          </Col>
        </Row>
        <Row>
          <Col size="md-1">
          </Col>
          <Col size="md-10 sm-12">
            <Jumbotron>
              <h1>NYT Articles Found</h1>
            </Jumbotron>
              {this.state.results.length ? (
                <List>
                  {this.state.results.map((oneitem, index) => (
                    
                    
                    <ListItem
                      key={this.state.results[index]._id}
                      nytid={this.state.results[index]._id}
                      title={this.state.results[index].headline.main}
                      url={this.state.results[index].web_url}>
                
                      <DeleteBtn onClick={() => this.deleteBook(this.state.results[index]._id)} />
                    </ListItem>
                    
                    
                  ))}
                
                </List>

            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
         
      </Container>
    );
  }
}

export default Books;



// <DeleteBtn onClick={() => this.deleteBook(this.state.results[index]._id)} />
