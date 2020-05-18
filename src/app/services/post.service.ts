import { Injectable } from '@angular/core';
import {Post} from '../models/Post';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers : new HttpHeaders({'content-type':'application/json'})
}
@Injectable({
  providedIn: 'root'
})
export class PostService {
  postUrl:string = "https://jsonplaceholder.typicode.com/posts";

  constructor(private http:HttpClient) { }

  getPosts(): Observable<any>{
    return this.http.get<any>(this.postUrl);
    

  }
  savePost(post:Post):Observable<Post>{
    return this.http.post<Post>(this.postUrl,post,httpOptions);

  }
  updatePost(post:Post):Observable<Post>{
  const url = `${this.postUrl}/${post.id}`;
  return this.http.put<Post>(url,post,httpOptions);
}
onDelete(post:number) : Observable<Post>{
  const id=post;
  const url = `${this.postUrl}/${id}`;
  return this.http.delete<Post>(url,httpOptions);

}
}
