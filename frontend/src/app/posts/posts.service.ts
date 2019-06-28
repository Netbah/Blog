import { Injectable } from '@angular/core';
import { Post } from './model/post';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  postsRef: AngularFirestoreCollection<Post[]>;
  posts: any;

  constructor(private afs: AngularFirestore) {
    this.postsRef = this.afs.collection('posts');
    this.posts = this.getAll();
  }

  getAll(): Observable<Post[]> {
    return this.postsRef.valueChanges().pipe(map((p: any) => p as Post[]));
  }

  // getAll(): Observable<Post[]> {
  //   return this.postsRef.get().pipe(
  //     map((p: any) => {
  //       return p.docs.map(doc => doc.data());
  //     })
  //   );
  // }

  // Return a single observable item
  getById(key: string): Observable<Post> {
    return this.postsRef
      .doc<Post>(key)
      .get()
      .pipe(map((res: any) => res.data as Post));
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
