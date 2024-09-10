import React, { useState, useEffect } from "react";
import { Button, StyleSheet, Text, View, FlatList } from "react-native";
import axios from "axios";

const URL = "https://66dfe1e52fb67ac16f276841.mockapi.io/api/books";

export default function App() {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.get(URL);
      setBooks(response.data);
    } catch (err) {
      setError("Failed to fetch books");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const postBook = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.post(URL, {
        name: "Dhru",
        author: "HandsomeBoyDhru",
        book_name: "How to look attractive",
      });
      setBooks([...books, response.data]);
    } catch (err) {
      setError("Failed to add book");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const deleteBook = async (id) => {
    setIsLoading(true);
    setError(null);
    try {
      await axios.delete(`${URL}/${id}`);
      setBooks(books.filter((book) => book.id !== id));
    } catch (err) {
      setError("Failed to delete book");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const updateBook = async (id) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.put(`${URL}/${id}`, {
        name: "John",
        author: "John Doe",
        book_name: "Political Science 2",
      });
      setBooks(books.map((book) => (book.id === id ? response.data : book)));
    } catch (error) {
      setError("Failed to update book");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Book App</Text>
      {isLoading && <Text>Loading...</Text>}
      {error && <Text style={styles.error}>{error}</Text>}
      <FlatList
        data={books}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text>{`${item.book_name} by ${item.author}`}</Text>
        )}
      />
      <Button title="Add book" onPress={postBook} disabled={isLoading} />
      <Button title="Refresh books" onPress={getBooks} disabled={isLoading} />
      <Button
        title="Delete last book"
        onPress={() =>
          books.length > 0 && deleteBook(books[books.length - 1].id)
        }
        disabled={isLoading || books.length === 0}
      />
      <Button
        title="Update book 8"
        onPress={() => updateBook(2)}
        disabled={isLoading}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  error: {
    color: "red",
    marginBottom: 10,
  },
});
