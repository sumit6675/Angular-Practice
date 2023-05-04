import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PracticeServicesService {
    getAuthers(){
      return ["Sumit","Ramdas","Roshan"]
    }
}
