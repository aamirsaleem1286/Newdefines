"use client";

//* imports
import React, { useState } from "react";

//* lib imports
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ContactUsSchema } from "@/utils/schema";
import { Button } from "./ui/button";

const FormContactUsComp = () => {
  const [isLoading, setIsLoading] = useState(false);

  // * define form
  const form = useForm({
    resolver: zodResolver(ContactUsSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = (values) => {
    console.log("values :::");
    console.log(values);
  };
  return (
    <>
      {/* main container */}
      <div className="w-full h-auto bg-white rounded-[10px] p-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="flex flex-col items-center justify-start w-full h-auto gap-5 lg:flex-row">
              {/* first name */}
              <div className="w-full space-y-5 lg:w-1/2">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First Name</FormLabel>
                      <FormControl>
                        <Input
                          disabled={isLoading}
                          {...field}
                          type="text"
                          className={` ${isLoading && "cursor-not-allowed"}`}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>

              {/* last name */}
              <div className="w-full space-y-5 lg:w-1/2">
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Last Name</FormLabel>
                      <FormControl>
                        <Input
                          disabled={isLoading}
                          {...field}
                          type="text"
                          className={` ${isLoading && "cursor-not-allowed"}`}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* email */}
            <div className="space-y-5">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input
                        disabled={isLoading}
                        {...field}
                        type="email"
                        className={` ${isLoading && "cursor-not-allowed"}`}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            {/* phone */}
            <div className="space-y-5">
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input
                        disabled={isLoading}
                        {...field}
                        type="text"
                        className={` ${isLoading && "cursor-not-allowed"}`}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            {/* message */}
            <div className="space-y-5">
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        disabled={isLoading}
                        {...field}
                        type="text"
                        className={` ${isLoading && "cursor-not-allowed"}`}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <div className="w-full h-auto">
              <Button
                variant="custom"
                className="w-full text-white bg-fSeaGreen text-[20px] font-normal h-[50px]"
              >
                Submit
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </>
  );
};

export default FormContactUsComp;
