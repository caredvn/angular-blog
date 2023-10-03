import { Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root',
  })

export class MenuService {
    listIsPresent: boolean = false

    updateListPresence(isPresent: boolean) {
        this.listIsPresent = isPresent
      }
}