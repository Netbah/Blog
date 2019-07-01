import { Injectable } from '@angular/core';
import { Post } from './model/post';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  postsRef: AngularFirestoreCollection<Post[]>;
  posts: Observable<Post[]>;

  constructor(private afs: AngularFirestore) {
    this.postsRef = this.afs.collection('posts');
    this.posts = this.getAll();
  }

  getAll(): Observable<Post[]> {
    return this.postsRef.snapshotChanges().pipe(
      map(actions =>
        actions.map(a => {
          const data = a.payload.doc.data() as any;
          const id = a.payload.doc.id;
          return { id, ...data } as Post;
        })
      )
    );
  }

  // Return a single observable item
  getById(key: string): Observable<Post> {
    return this.postsRef
      .doc<Post>(key)
      .get()
      .pipe(
        map((res: any) => {
          return res.data as Post;
        })
      );
  }

  getByUrl(url: string): Observable<Post> {
    return this.afs
      .collection('posts', ref => ref.where('url', '==', url))
      .valueChanges()
      .pipe(
        map((res: any) => {
          return res.pop() as Post;
        })
      );
  }

  add(item: Post): Promise<void> {
    const id = this.afs.createId();
    const newPost = this.postsRef.doc(id);
    const dto = { ...item };
    return newPost.set(dto, { merge: true });
  }

  // Update an existing item
  update(key: string, item: Post): void {
    const updateRef = this.postsRef.doc(key);
    updateRef.set(item, { merge: true });
  }

  // Deletes a single item
  deleteItem(key: string): void {
    this.postsRef.doc(key).delete();
  }
}
