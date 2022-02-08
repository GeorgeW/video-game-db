import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor{
    constructor() {}

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler): Observable<HttpEvent<any>> {
            req = req.clone({
                setHeaders: {
                    'x-rapidapi-key': '7b553ab273mshccb770e5a088ff7p1d5a6ajsnaf02dce46c06',
                    'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com'
                },
                 setParams: {
                     key: '84b107a9769246e68d17ea86380af5f5',
                 }
            });
            return next.handle(req);
    }
}