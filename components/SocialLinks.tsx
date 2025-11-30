"use client"
import { useState } from "react"
import Link from 'next/link';
import { TbBrandGithub, TbBrandInstagram, TbBrandLinkedin, TbBrandX, TbMail, TbCheck } from "react-icons/tb";

export const SocialLinks = () => {
    const [copied, setCopied] = useState(false);

    const handleCopyEmail = (e: React.MouseEvent) => {
        e.preventDefault();
        navigator.clipboard.writeText("priyanshu121@gmail.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const socialLinks = [
        { Icon: TbBrandInstagram, color: "hover:text-[#E1306C] dark:hover:text-[#E1306C]", href: "https://www.instagram.com/priyanshu_9_8_03/" },
        { Icon: TbBrandX, color: "hover:text-black dark:hover:text-white", href: "https://x.com/Priyanshu9_8_03" },
        { Icon: TbMail, color: "hover:text-[#EA4335] dark:hover:text-[#EA4335]", href: "mailto:priyanshu121@gmail.com", isEmail: true },
        { Icon: TbBrandGithub, color: "hover:text-[#333] dark:hover:text-white", href: "https://github.com/Priyanshu090803" },
        { Icon: TbBrandLinkedin, color: "hover:text-[#0077B5] dark:hover:text-[#0077B5]", href: "https://www.linkedin.com/in/priyanshu-chandra-tamta-641123320/" },
    ];

    return (
        <div className="flex gap-1 p-1 pb-2">
            {socialLinks.map((social, index) => (
                <Link
                    key={index}
                    href={social.href}
                    target="_blank"
                    onClick={social.isEmail ? handleCopyEmail : undefined}
                    className={`text-neutral-400 dark:text-neutral-400 transition-colors duration-200 ${social.color} relative group`}
                >
                    {social.isEmail && copied ? (
                        <TbCheck className="h-6 w-6 text-green-500" />
                    ) : (
                        <social.Icon className=" md:h-6 md:w-6 h-5 w-5" />
                    )}

                    {social.isEmail && (
                        <span className={`absolute -top-8 left-1/2 -translate-x-1/2 bg-neutral-800 text-white text-xs px-2 py-1 rounded transition-opacity pointer-events-none whitespace-nowrap ${copied ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>
                            {copied ? "Copied!" : "Copy Email"}
                        </span>
                    )}
                </Link>
            ))}
        </div>
    )
}
