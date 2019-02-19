import React, { Component } from "react";
import { Text, View, FlatList, Image, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import StarRating from "react-native-star-rating";
import { Icon } from "expo";
import { connect } from "react-redux";
import {
  bookmarkClicked,
  likeClicked,
  readClicked,
  resetActions
} from "../actions/BookActions";
import Toast, { DURATION } from "react-native-easy-toast";
const data = [
  {
    key: "1",
    name: "Revival",
    author: "Stebhan King",
    src:
      "https://images-na.ssl-images-amazon.com/images/I/51BqXqgqpvL._SX324_BO1,204,203,200_.jpg"
  },
  {
    key: "2",
    name: "Deadly Election",
    author: "Lindesy Davis",
    src: "https://images-na.ssl-images-amazon.com/images/I/51yd9FIKtHL.jpg"
  },
  {
    key: "3",
    name: "City of Wisdom and Blood",
    author: "Robert Merle",
    src:
      "https://dynamic.indigoimages.ca/books/1782275088.jpg?altimages=false&scaleup=true&maxheight=515&width=380&quality=85&sale=10&lang=en"
  },
  {
    key: "4",
    name: "Revival",
    author: "Robert T. Kyosaki",
    src:
      "https://images-na.ssl-images-amazon.com/images/I/518zZZFEYNL._SX331_BO1,204,203,200_.jpg"
  },
  {
    key: "5",
    name: "Think And Grow Rich",
    author: "Napoleon Hill",
    src: "https://images-na.ssl-images-amazon.com/images/I/713rQq1bF6L.jpg"
  },
  {
    key: "6",
    name: "Elon Musk",
    author: "Ashlee Vance",
    src:
      "https://dynamic.indigoimages.ca/books/006230125x.jpg?altimages=false&scaleup=true&maxheight=515&width=380&quality=85&sale=10&lang=en"
  }
];
class BookList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visibleModal: false,
      data: [],
      starCount: 3.5
      // bookmarked: "bookmark-o",
      // liked: "heart-o",
      // read: false
    };
  }

  _renderModalContent = data => {
    return (
      <View
        style={{
          backgroundColor: "white",
          flex: 3 / 4,
          borderRadius: 10,
          alignItems: "center"
        }}
      >
        <View
          style={{
            height: 250,
            marginTop: 50,
            width: 160,
            backgroundColor: "#fff",
            borderRadius: 5,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 10 },
            shadowOpacity: 0.4,
            shadowRadius: 7,
            elevation: 5
          }}
        >
          <Image
            source={{ uri: data.src }}
            resizeMode={"cover"}
            style={{ height: 250, width: 160, borderRadius: 5 }}
          />
        </View>
        <View
          style={{
            marginTop: 20,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text style={{ fontSize: 22, color: "#8C9AA9", fontWeight: "700" }}>
            {data.name}
          </Text>
          <Text style={{ fontSize: 14, color: "#8C9AA9", paddingTop: 5 }}>
            by {data.author}
          </Text>
          <Text style={{ margin: 20, color: "#8C9AA9" }}>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua..."
          </Text>
          <StarRating
            disabled={false}
            maxStars={5}
            fullStarColor="#F9D449"
            rating={this.state.starCount}
            starSize={20}
            containerStyle={{ backgroundColor: "#F6F9FC", borderRadius: 2 }}
            selectedStar={rating =>
              this.setState({
                starCount: rating
              })
            }
          />
        </View>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              marginTop: 20,
              marginRight: 20,
              backgroundColor: "#fff",
              shadowColor: "#000",
              alignItems: "center",
              justifyContent: "center",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.1,
              shadowRadius: 7,
              elevation: 5
            }}
            onPress={() => {
              //this.setState({ bookmarked: "bookmark" });
              bookmarkClicked("bookmark");
            }}
          >
            <Icon.FontAwesome name={this.props.bookmarked} size={30} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 200,
              height: 50,
              borderRadius: 25,
              marginTop: 20,
              backgroundColor: "#4F8FE6",
              shadowColor: "#000",
              alignItems: "center",
              justifyContent: "center",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.1,
              shadowRadius: 7,
              elevation: 5
            }}
            onPress={() => {
              //this.setState({ read: "true" });
              readClicked(true);
            }}
          >
            <Text style={{ color: "white", fontSize: 18, fontWeight: "500" }}>
              Read
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              marginTop: 20,
              marginLeft: 20,
              backgroundColor: "#fff",
              shadowColor: "#000",
              alignItems: "center",
              justifyContent: "center",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.1,
              shadowRadius: 7,
              elevation: 5
            }}
            onPress={() => {
              // this.setState({ liked: "heart" });
              likeClicked("heart");
            }}
          >
            <Icon.FontAwesome name={this.props.liked} size={30} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  render() {
    return (
      <View>
        <FlatList
          horizontal
          data={data}
          showsHorizontalScrollIndicator={false}
          renderItem={item => (
            <TouchableOpacity
              onPress={() =>
                this.setState({ visibleModal: true, data: item.item })
              }
            >
              <Image
                source={{ uri: item.item.src }}
                resizeMode={"center"}
                style={{ height: 150, width: 100, borderRadius: 5, margin: 10 }}
              />
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => item.key}
        />
        <Modal
          isVisible={this.state.visibleModal}
          onBackdropPress={() => {
            this.setState({ visibleModal: false });
            resetActions();
          }}
          style={{ justifyContent: "flex-end", margin: 0 }}
        >
          {this._renderModalContent(this.state.data)}
        </Modal>
        <Toast
          ref="toast"
          position={"bottom"}
          style={{ backgroundColor: "black" }}
        />
      </View>
    );
  }
}

const mapStateToProps = ({ bookReducer }) => {
  const { bookmarked, liked, read } = bookReducer;

  return { bookmarked, liked, read };
};

export default connect(
  mapStateToProps,
  { likeClicked, bookmarkClicked, readClicked, resetActions }
)(BookList);
