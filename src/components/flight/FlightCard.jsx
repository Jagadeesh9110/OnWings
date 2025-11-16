import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const cn = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

const Badge = ({ className, ...props }) => {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border border-red-700 px-2.5 py-0.5 text-xs font-semibold text-red-700 bg-red-100/50",
        className
      )}
      {...props}
    />
  );
};

const Button = ({ variant, className, ...props }) => {
  const baseStyle = "transition-colors";
  let variantStyle = "";

  if (variant === "link") {
    variantStyle =
      "p-0 h-auto justify-start mt-2 text-sm text-primary hover:underline";
  } else {
    variantStyle =
      "w-full md:w-auto mt-2 bg-red-700 text-white font-bold py-2 px-4 rounded-md transition duration-200 hover:bg-red-900 flex items-center justify-center";
  }

  return (
    <button className={cn(baseStyle, variantStyle, className)} {...props} />
  );
};

const formatCurrency = (amount, currency = "INR") => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

export const FlightCard = ({
  airline,
  departureTime,
  arrivalTime,
  // 1. ADD 'from' and 'to' TO THE PROPS
  from,
  to,
  duration,
  stops,
  price,
  currency = "INR",
  offer,
  refundableType,
  onBook,
  onFlightDetails,
  className,
}) => {
  const stopText =
    stops === 0 ? "Non-stop" : `${stops} stop${stops > 1 ? "s" : ""}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "w-full rounded-lg border border-red-800/50 bg-black/80 text-white shadow-lg hover:shadow-red-900/40 transition-shadow",
        className
      )}
    >
      <div className="p-4 sm:p-6">
        <div className="flex justify-between items-start mb-4">
          <Badge>{refundableType}</Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-4 md:gap-x-6 items-center">
          {/* Airline Info */}
          <div className="md:col-span-3 flex flex-col">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-md bg-white/10 overflow-hidden p-1">
                <img
                  src={airline.logo}
                  alt={`${airline.name} logo`}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <p className="font-semibold text-white/90 text-sm sm:text-base">
                  {airline.name}
                </p>
                <p className="text-sm text-white/60">{airline.flightNumber}</p>
              </div>
            </div>
            <Button
              variant="link"
              onClick={onFlightDetails}
              aria-label="View flight details"
              className="text-red-500 hover:text-red-400"
            >
              Flight Details
            </Button>
          </div>

          {/* Timeline */}
          <div className="md:col-span-5 flex items-center gap-2">
            <div className="text-center">
              {/* 2. ADD THE 'from' TEXT (SOURCE) */}
              <p className="text-sm text-white/60">{from}</p>
              <p className="font-bold text-lg sm:text-xl text-white/90">
                {departureTime}
              </p>
            </div>
            <div className="flex-grow text-center">
              <p className="text-sm text-white/60">{duration}</p>
              <div className="relative w-full h-px bg-white/20 my-1">
                <div className="absolute top-1/2 left-0 w-full h-px flex items-center justify-center">
                  {stops > 0 && (
                    <div className="w-2 h-2 rounded-full bg-red-600 border-2 border-black"></div>
                  )}
                </div>
              </div>
              <p className="text-xs font-medium text-red-500">{stopText}</p>
            </div>
            <div className="text-center">
              {/* 3. ADD THE 'to' TEXT (DESTINATION) */}
              <p className="text-sm text-white/60">{to}</p>
              <p className="font-bold text-lg sm:text-xl text-white/90">
                {arrivalTime}
              </p>
            </div>
          </div>

          {/* Pricing and Booking */}
          <div className="md:col-span-4 flex flex-col md:items-end gap-2">
            <p className="text-xl sm:text-2xl font-bold text-white/90">
              {formatCurrency(price, currency)}
            </p>
            {offer && (
              <p className="text-sm text-green-500 text-right">{offer}</p>
            )}
            <Button
              onClick={onBook}
              aria-label={`Book flight for ${formatCurrency(price, currency)}`}
            >
              Book
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FlightCard;
