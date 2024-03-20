import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {


  private loading: boolean = false;

  constructor() { }

  public isLoading(): boolean {
    return this.loading;
  }
  public setLoading(value: boolean) {
    this.loading = value;
  }
}
