"use client";

import React, { useEffect } from "react";
import { Booking } from "@/utils/types";
import { useProperty } from "@/utils/store";
import BookingCalendar from "./BookingCalendar";
import BookingContainer from "./BookingContainer";

type BookingWrapperProps = {
  propertyId: string;
  price: number;
  bookings: Booking[];
};

function BookingWrapper({ propertyId, price, bookings }: BookingWrapperProps) {
  useEffect(() => {
    useProperty.setState({
      propertyId,
      price,
      bookings,
    });
  }, []);

  return (
    <>
      <BookingCalendar />
      <BookingContainer />
    </>
  );
}

export default BookingWrapper;
