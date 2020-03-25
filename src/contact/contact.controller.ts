import { Controller, Get, Param, Post, Body, Delete, Query } from '@nestjs/common';
import { ContactService } from './contact.service';
import { createContactDTO } from 'src/dto/create-contact.dto';

@Controller('contact')
export class ContactController {
    //ici on injecte le service dans le controller
    constructor(private contactService: ContactService){}
//on afffiche tous les contacts de la liste
        @Get()
        async getContacts() {
            const contact = await this.contactService.getContacts();
            return contact;
        }
    //on affiche le contact a partir du numero
        @Get(':contactPHONE')
        async getContact(@Param('contactPHONE')contactPHONE) {
            const contact = await this.contactService.getContact(contactPHONE);
            return contact;
        }
//creation d'un contact
        @Post()
        async addContact(@Body() createContactDTO: createContactDTO){
            const contact = await this.contactService.addContact(createContactDTO);
            return contact;
        }

        //supression d'un contact
        @Delete()
        async deleteContact(@Query() query){
            const contact = await this.contactService.deleteContact(query.contactPHONE);
            return contact;
        }
}
