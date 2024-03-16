import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export const formatIndianPhoneNumber = (phoneNumber) => {
  // Remove any non-numeric characters from the input string
  const numericPhoneNumber = phoneNumber.replace(/\D/g, '');

  // Check if the input phone number is valid
  if (numericPhoneNumber.length !== 10) {
    // If the phone number is not 10 digits long, return null or throw an error
    // You can customize this behavior based on your requirements
    return null;
  }

  // Extract the first two digits to check for the prefix "+91"
  const prefix = numericPhoneNumber.slice(0, 2);

  // Check if the number already has the prefix "+91"
  if (prefix === '91') {
    // If the prefix is already present, return the formatted number
    return `+91 ${numericPhoneNumber.slice(2, 5)} ${numericPhoneNumber.slice(5, 8)} ${numericPhoneNumber.slice(8)}`;
  }
  else {
    // If the prefix is not present, add it and return the formatted number
    return `+91 ${numericPhoneNumber.slice(0, 3)} ${numericPhoneNumber.slice(3, 6)} ${numericPhoneNumber.slice(6)}`;
  }
}