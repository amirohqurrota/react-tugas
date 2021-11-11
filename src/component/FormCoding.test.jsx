import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import FormCoding from "./FormCoding";

describe('FormCoding', () =>{
    test('renders frompage compnonent',()=>{
        render(<FormCoding/>)
        //expect(screen.getByText('Pendaftaran Peserta Coding Bootcamp')).toBeInTheDocument();
        expect(screen.getByLabelText(/Nama Lengkap:/)).toBeInTheDocument();
        expect(screen.getByLabelText(/Email:/)).toBeInTheDocument();
        expect(screen.getByLabelText(/No Handphone:/)).toBeInTheDocument();
        expect(screen.getByLabelText(/Kelas Coding yang Dipilih:/)).toBeInTheDocument();
        expect(screen.getByLabelText(/Latar Belakang Pendidikan:/)).toBeInTheDocument();
        expect(screen.getByLabelText(/Foto Surat Kesungguhan:/)).toBeInTheDocument();
        expect(screen.getByLabelText(/Harapan Untuk Coding Bootcamp Ini:/)).toBeInTheDocument();
    });

    test('input text with good requirement',()=>{
        render(<FormCoding/>)
        fireEvent.input(screen.getByRole('textbox' ,{name: /nama/i}), {target: {value: "nama user"}})
        expect(screen.getByLabelText(/Nama Lengkap:/)).toHaveValue("nama user");

        fireEvent.input(screen.getByRole('textbox' ,{name: /email/i}), {target: {value: "email@user.com"}})
        expect(screen.getByLabelText(/Email:/)).toHaveValue("email@user.com");

        // fireEvent.input(screen.getByRole('textbox' ,{name: /noHandphone/i}), {target: {value: "0812345678"}})
        // expect(screen.getByLabelText(/No Handphone:/)).toHaveValue("0812345678");


        // fireEvent.input(screen.getByRole('option' ,{name: /kelas/i}), {target: {value: "golang"}})
        // expect(screen.getByLabelText(/Kelas Coding yang Dipilih:/)).toHaveValue(2);
        
        // fireEvent.input(screen.getByRole('textbox' ,{name: /pendidikan/i}), {target: {value: "IT"}})
        // expect(screen.getByLabelText(/Latar Belakang Pendidikan:/)).toHaveValue("IT");
        
        // // fireEvent.input(screen.getByRole('textbox' ,{name: /email/i}), {target: {value: "email@user.com"}})
        // // expect(screen.getByLabelText(/Foto Surat Kesungguhan:/)).toHaveValue();
        
        // fireEvent.input(screen.getByRole('textbox' ,{name: /harapan/i}), {target: {value: "alhamdulillah"}})
        // expect(screen.getByLabelText(/Harapan Untuk Coding Bootcamp Ini:/)).toHaveValue("alhamdulillah");

    });

    test('input text with wrong input requirement',()=>{
        render(<FormCoding/>)
        fireEvent.input(screen.getByRole('textbox' ,{name: /nama/i}), {target: {value: "nama user12"}})
        expect(screen.getByText("Nama Lengkap Harus Berupa Huruf")).toBeInTheDocument();

        fireEvent.input(screen.getByRole('textbox' ,{name: /email/i}), {target: {value: "namauser12"}})
        expect(screen.getByText("Email Tidak Sesuai")).toBeInTheDocument();

        expect(screen.getByLabelText(/Nama Lengkap:/)).toHaveValue("nama user12");
        expect(screen.getByLabelText(/Email:/)).toHaveValue("namauser12");

    });
    test('submit reset', ()=>{
        fireEvent.input(screen.getByRole('textbox' ,{name: /nama/i}), {target: {value: "nama user12"}});
        fireEvent.input(screen.getByRole('textbox' ,{name: /email/i}), {target: {value: "namauser12@email.com"}});
        
        expect(screen.getByLabelText(/Nama Lengkap:/)).toHaveValue("nama user12");
        expect(screen.getByLabelText(/Email:/)).toHaveValue("namauser12");
        
        fireEvent.click(screen.getByRole('button', {name: buttonReset}))
        //expect(window.alert).toBeCalledWith('Data Pendaftar "nama user12" Berhasil Diterima')
        expect(screen.getByLabelText(/Nama Lengkap:/)).toHaveValue("");
        expect(screen.getByLabelText(/Email:/)).toHaveValue("");

    });


})