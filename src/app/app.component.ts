import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ListObjectsOutput } from 'aws-sdk/clients/s3';
import { BucketS3Service } from './services/bucket-s3.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  list: ListObjectsOutput = { Contents: [] };

  constructor(private bucketS3Service: BucketS3Service) {

  }
  ngOnInit(): void {
    this.GetAllObjects();
  }

  SaveObject(input: any) {
    var file = input.files[0];
    this.bucketS3Service.saveObject(file).then(result => {
      if (result) {
        alert("Salvo com sucesso")
        this.GetAllObjects();
      }
      else
        alert("Error ao salvar")

    });
  }

  GetAllObjects() {
    this.bucketS3Service.getAllObjects()
      .then(result => {
        this.list = result
        console.log(result.Contents)
      });
  }

  DeleteObject(key: any) {
    this.bucketS3Service.deleteObject(key)
      .then(result => {
        if (result) {
          alert("Deletado com sucesso")
          this.GetAllObjects();
        }
        else
          alert("Error ao deletar")
      });
  }

  GetLink(key: any): string
  {
     return  `https://${this.bucketS3Service._bucket.GetBuckerName()}.s3.amazonaws.com/${key}` 
  }
}
