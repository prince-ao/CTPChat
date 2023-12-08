'use client';

import * as React from "react";
import { useEffect, useState } from "react";
import {useEditor, EditorProvider, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import Placeholder from '@tiptap/extension-placeholder';
import TextStyle from '@tiptap/extension-text-style';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

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
import { Textarea } from "./ui/textarea";

export default function Tiptap() {

  const [editorContent, setEditorContent] = useState("");

  const [editable, setEditable] = useState(false);

  const FormSchema = z.object({
    bio: z
      .string()
  })

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
        bio: "",
      },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    const input:string = data.bio;
    console.log("Print: " + input);
  }
  
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      TextStyle,
    ],
    editorProps: {
      attributes: {
        class: 'w-full h-[150px]',
      },
    },
    content: "",
    onUpdate({editor}) {
      setEditorContent(editor.getHTML());
    },
    editable: true,
  });

  if (!editor) {
    return null;
  }

  return (
    <>

      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .toggleBold()
            .run()
        }
        className={editor.isActive('bold') ? 'is-active' : ''}
      >
        Bold
      </button>

      <EditorContent editor={editor} />

    </>
  );
}

/*

const [editorContent, setEditorContent] = useState("");

const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      //Difficult to implement Placeholder. Not enough Tailwind CSS knowledge.
      Placeholder.configure({
        placeholder: 'Type your text here...',
        showOnlyWhenEditable: false,
        showOnlyCurrent: false,
      }),
      TextStyle,
    ],
    editorProps: {
      attributes: {
        class: 'w-full h-[150px]',
      },
    },
    content: "<p>Hello World! 🌎️</p>",
    onUpdate({editor}) {
      setEditorContent(editor.getHTML());
    },
    editable: true,
  });

  if (!editor) {
    return null
  }

//Creates the UI for the text that is going to be displayed after user hits the submit button
function DivElement({ message }: { message: string }) {

  const currentTime = new Date().toLocaleTimeString();


<div key={crypto.randomUUID()} className="border border-[#A3A3A3] bg-inheret text-slate-200 p-1">
          
          <div className='flex items-center justify-start w-full h-auto'>
              

              <div className='px-3'>
                  <h6>Lorem Ipsum</h6>
              </div>

              <div>
                  <h6 className='text-gray-500'>{currentTime}</h6>
              </div>

          </div>

          <div className='w-full h-auto whitespace-normal break-words pl-[11.5%]'>
              {message}
          </div>
      </div>
  );
}

const [divElements, setDivElements] = useState<React.JSX.Element[]>([]);

  /*Message expands textarea past div height*/ /*
  const FormSchema = z.object({
    //No need for validation as shadcn textarea `required` property does not allow empty messages to be submitted. 
    chatbox: z
        .string()
    });

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            chatbox: "",
          },
    });

    //Be careful of React state pitfall: https://is.gd/NLwCfG
    function onSubmit(data: z.infer<typeof FormSchema>) {
      //console.log(data.chatbox);

      const input =  editorContent;

      setDivElements([...divElements, <DivElement message={input} />]);
  }
  */

/*
<Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex items-stretch w-full overflow-hidden">
          <FormField
            control={form.control}
            name="chatbox"
            render={() => (

              <FormItem className='w-full'>

                <FormControl>

                  <EditorContent editor={editor} />

                </FormControl>
                
                <FormMessage />
              </FormItem>

            )}
          />

          <Button 
          type="submit" 
          className='h-auto bg-teal-500/80 hover:bg-blue-700/75 text-slate-200 rounded'>
            Submit
          </Button>
        </form>
      </Form>

  {/*<EditorContent editor={editor} />*/ /*}

      
  <div id="messageContainer" className="w-full h-[78.5vh]">

  {/* Need to figure out how to scroll down when content is added */ /*}
  <div className="w-auto h-full rounded-md border border-slate-500 scroll-smooth">

  {divElements.map((element, index) => (
      <div key={index}>{element}</div>
  ))}

  </div>

</div>
*/