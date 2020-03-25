import { Injectable, HttpException } from '@nestjs/common';
import { CONTACT } from 'src/mock/contact.mock';

@Injectable()
export class ContactService {
    //importation des donnees a partir de CONTACT
    contact = CONTACT;
    contacts: any;
//recupere la liste des contacts
    getContacts(): Promise<any> {
        return new Promise(resolve=> {
            resolve(this.contact);
        });
    }
//recupere un contact a partir de l'id
    getContact(contactPHONE): Promise<any> {
        let phone = Number(contactPHONE);
        return new Promise(resolve => {
            const contact = this.contact.find(contact => contact.phone === phone);
            if(!contact){
                throw new HttpException('Contact does not exist!', 404);
            }
            resolve(contact);
        });
    }

    //ajout d'un contact

    addContact(contact): Promise<any>{
        return new Promise(resolve => {
            this.contacts.push(contact);
            resolve(this.contacts);
        });
    }

    //supprimer un contact

    deleteContact(contactPHONE): Promise<any> {
        let phone = Number(contactPHONE);
        return new Promise(resolve => {
            let index = this.contacts.findIndex(contact => contact.phone === phone);
            if(index === -1) {
                throw new HttpException('Contact does not exist!', 404);
            }
            this.contact.splice(1, index);
            resolve(this.contacts);
        });
    }
}
