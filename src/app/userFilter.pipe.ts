import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'filter'
})

export class UserFilterPipe implements PipeTransform {
    transform(items: any[], searchText: string): any[] {
        if(!items) return [];
        if(!searchText) return items;
    searchText = searchText.toLowerCase();
    return items.filter( ele => {
        //return JSON.stringify(ele.employee_name).toLowerCase().match(searchText)
        return JSON.stringify(ele.employee_name).toLowerCase().includes(searchText);
        });
        
       }
}
