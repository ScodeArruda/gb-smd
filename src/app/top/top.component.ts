import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'arr-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit {

  public loading?: boolean;
  public isAuthenticated?: boolean;
  public title?: string;

  public isBypass?: boolean;
  public mobile?: boolean;
  public isMenuInitOpen?: boolean;

  constructor(private breakpointObserver: BreakpointObserver,
              private router: Router,
              private _snackBar: MatSnackBar) { }

    private sidenav?: MatSidenav;

    public isMenuOpen = true;
    public contentMargin = 240;

    get isHandset(): any {
      return this.breakpointObserver.isMatched(Breakpoints.Handset);
    }

  // *********************************************************************************************
  // * LIFE CYCLE EVENT FUNCTIONS
  // *********************************************************************************************

    ngOnInit() {
      this.isMenuOpen = true;  // Open side menu by default
      this.title = 'GB';
    }

    ngDoCheck() {
        if (this.isHandset) {
          this.isMenuOpen = false;
        } else {
          this.isMenuOpen = true;
        }
    }

  // *********************************************************************************************
  // * COMPONENT FUNCTIONS
  // *********************************************************************************************

  public openSnackBar(msg: string): void {
    this._snackBar.open(msg, 'X', {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: 'notif-error'
    });
  }

  public onSelectOption(option: any): void {
    const msg = `Chose option ${option}`;
    this.openSnackBar(msg);

    /* To route to another page from here */
    // this.router.navigate(['/home']);
  }
}