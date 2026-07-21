import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import { Button, Card, Searchbar } from 'react-native-paper';
import { useQuery } from 'react-query';
import * as courseService from '@supabase/courses';
import { Theme } from '@theme/index';

export default function CoursesScreen() {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(0);

  const { data, isLoading } = useQuery(
    ['courses', page, search],
    () =>
      search
        ? courseService.searchCourses(search, 20, page * 20)
        : courseService.getCourses(20, page * 20),
    {
      keepPreviousData: true,
    },
  );

  const renderCourse = ({ item }: any) => (
    <Card style={styles.card}>
      <Card.Cover source={{ uri: item.thumbnail || 'https://via.placeholder.com/300' }} />
      <Card.Content>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description} numberOfLines={2}>
          {item.description}
        </Text>
        <View style={styles.footer}>
          <Text style={styles.rating}>⭐ {item.rating}</Text>
          <Text style={styles.students}>{item.students_count} students</Text>
        </View>
      </Card.Content>
      <Card.Actions>
        <Button>Enroll Now</Button>
      </Card.Actions>
    </Card>
  );

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search courses"
        onChangeText={setSearch}
        value={search}
        style={styles.search}
      />

      <FlatList
        data={data?.data || []}
        renderItem={renderCourse}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        ListEmptyComponent={
          !isLoading && (
            <View style={styles.empty}>
              <Text>No courses found</Text>
            </View>
          )
        }
        onEndReached={() => setPage(page + 1)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  search: {
    margin: Theme.Spacing.lg,
  },
  list: {
    padding: Theme.Spacing.lg,
  },
  card: {
    marginBottom: Theme.Spacing.lg,
  },
  title: {
    fontSize: Theme.Typography.fontSize.lg,
    fontWeight: 'bold',
    marginTop: Theme.Spacing.md,
  },
  description: {
    fontSize: Theme.Typography.fontSize.sm,
    color: Theme.Colors.light.textSecondary,
    marginTop: Theme.Spacing.sm,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: Theme.Spacing.md,
  },
  rating: {
    fontSize: Theme.Typography.fontSize.sm,
  },
  students: {
    fontSize: Theme.Typography.fontSize.sm,
    color: Theme.Colors.light.textSecondary,
  },
  empty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 300,
  },
});
