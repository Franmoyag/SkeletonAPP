import { Component, OnInit } from '@angular/core';
import { ApiclientService } from 'src/app/services/apiclient.service';

@Component({
  selector: 'app-apirest',
  templateUrl: './apirest.page.html',
  styleUrls: ['./apirest.page.scss'],
})
export class ApirestPage implements OnInit {

  user: any;
  users: any;
  posts: any;
  post: any = {
    id: null,
    title: "",
    body: "",
    userId: null
  };
  compareWith: any;

  constructor(private api: ApiclientService) { }


  ionViewWillEnter(){
    this.getUsuarios();
    this.getPosts();
  }

  ngOnInit() {
  }


  getUsuario (userId: any){
    this.api.getUsuario (userId).subscribe((data) => {
      console.log(data)
      this.user = data;
    });
  }


  getUsuarios(){
    this.api.getUsuarios().subscribe((data) => {
      this.users = data;
    });
  }


  getPosts(){
    this.api.getPosts().subscribe((data) => {
      this.posts = data;
      this.posts.reverse();
    });
  }


  guardarPost(){
    if (this.post.userId == null){
      if (this.user == undefined){
        console.log("Selecciones un Usuario");
        return;
      }
      this.post.userId = this.user.id;
      this.api.createPost(this.post).subscribe(
        () => {
          console.log ("Creado Correctamente");
          this.getPosts();
        },
        error => {
          console.log ("Error "+ error)
        }
      );
    }
    else {
      this.api.updatePost(this.post.id, this.post). subscribe (
        () => {
          console.log("Actualizado Correctamente.");
          this.getPosts();
        },
        error => {
          console.log ("Error "+ error)
        }
      );
    }
  }


  setPost(_post: any){
    this.post = _post;
    this.getUsuario (_post.userId);
    this.compareWith = this.compareWithFn;
  }


  eliminarPost(_post: any){
    console.log ("Eliminar")
    this.api.deletePost (_post.id).subscribe(
      success => {
        console.log("Eliminado Correctamente");
        this.getPosts();
      },
      error => {
        console.log("Error "+ error)
      }
    )
  }



  compareWithFn = (o1: any, o2: any) => {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  };

}
