import { environment } from './../../../environments/environment';

export class Constants {

    public static get MAXIMATECH_API(): string {
        return 'https://api.myjson.com/bins/tnjfr';
    }

    public static get HOME_API(): string {
        return environment.url;
    }
}
