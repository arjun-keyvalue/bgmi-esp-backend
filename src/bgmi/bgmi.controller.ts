import { Controller, Get, HttpCode, Post } from '@nestjs/common';

@Controller('bgmi')
export class BgmiController {
    @Post('/connect')
    @HttpCode(200)
    connect() {
        return {
            status: true,
            data: {
                modname: "BGMI ESP Hack",
                mod_status: "",
                credit: "By Arjun (0xsegf)",
                token: "4f42950fcd5cb70223b711407b6d1135",
                exdate: "2025-01-13 18:08:58",
                EXP: "2024-05-13 18:08:58",
                ESP: "off",
                ITEMS: "on",
                AIM: "on",
                BULLETTRACK: "on",
                FLOATING: "off",
                MEMORY: "on",
                SETTING: "off",
                rng: 1702807681
            }
        }
    }
}
