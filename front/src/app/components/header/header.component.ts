import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import { Router, RouterLink } from "@angular/router";
import { AuthentificationService } from "../../services/authentification.service";

@Component({
    selector: "app-header",
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: "./header.component.html",
    styleUrl: "./header.component.scss",
})
export class HeaderComponent {
    router = inject(Router);
    authService = inject(AuthentificationService);
    mobileMenuStatus = false;

    isLogged$ = this.authService.isLoggedIn();

    isPageExcluded(): boolean {
        const excludedRoutes = ["/home"];

        return excludedRoutes.includes(this.router.url);
    }
    openMobileMenu() {
        this.mobileMenuStatus = !this.mobileMenuStatus;
    }
    closeMobileMenu() {
        this.mobileMenuStatus = false;
    }
}
