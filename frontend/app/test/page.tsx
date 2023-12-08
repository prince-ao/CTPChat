/// <reference lib="dom" />
/// <reference lib="dom.iterable" />

'use client';
import { useState, useEffect } from 'react';

import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

SwiperCore.use([Navigation, Pagination]);

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { Extension } from '@tiptap/core';
import Tiptap from '@/components/Tiptap';

export default function Test() {      

    return (
        <div className='flex items-center justify-center
        w-screen h-screen bg-slate-950 text-slate-300'>
            <div className='w-[90%] h-screen border-orange-500'>
                <div className='w-full h-auto border border-green-500'>
                    {/* Rich Text Editor */}

                    <Tiptap />
                    
                </div>
            </div>

            <div className='w-[10%] h-screen border border-indigo-500'>
                <p>Additional Content</p>
            </div>

        </div>
    );
}