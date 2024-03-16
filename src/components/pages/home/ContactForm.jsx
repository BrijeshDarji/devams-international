import { memo, useState } from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { clsx } from "clsx"
import * as yup from "yup"

import { Input } from "@/src/components/ui/input"
import { Textarea } from "@/src/components/ui/textarea"

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/src/components/ui/form"

import LoaderButton from "@/src/components/form_elements/LoaderButton"

import {
    sectionCss,
    sectionHeaderCss,
} from "@/src/assets/constants/Constant"

const schema = yup
    .object({
        name: yup
            .string()
            .trim()
            .required("Name is required"),
        email: yup
            .string()
            .trim()
            .required("Email is required"),
        phoneNumber: yup
            .number()
            .transform((value) => Number.isNaN(value) ? null : value)
            .nullable()
            .min(1, "Too little")
            .required("Phone Number is required"),
        message: yup
            .string()
            .required("Message is required"),
    })

function ContactForm() {
    const [loading, setLoading] = useState(false)

    const form = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    })

    const handleSubmit = () => {

    }

    return (
        <div className={clsx(sectionCss)}>
            <p className={clsx(sectionHeaderCss)}>
                Let's get connect
            </p>

            <div className="w-full">
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(handleSubmit)}
                        className="flex flex-col items-center gap-5"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Your name</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="John Doe"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Your email</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="johndoe@gmail.com"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="phoneNumber"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Your phone number</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="9898435164"
                                                type="number"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <div className="grid grid-cols-1 w-full">
                            <FormField
                                control={form.control}
                                name="message"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Your message</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                placeholder="Hey there..."
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <LoaderButton
                            loading={loading}
                            type="submit"
                            text={"Inquire now!"}
                            className="w-fit"
                        />
                    </form>
                </Form>
            </div>
        </div>
    )
}

export default memo(ContactForm)
