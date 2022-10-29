import React from 'react'
import '../styles/styles.css'

const About = () => {
  return (
    <>
        <div className='about-page-container'>
            <p className='about-page'>

            Airline reservation systems incorporate airline schedules, fare tariffs, passenger reservations and ticket records. An airline's direct distribution works within their own reservation system, as well as pushing out information to the GDS. The second type of direct distribution channel are consumers who use the internet or mobile applications to make their own reservations. Travel agencies and other indirect distribution channels access the same GDS as those accessed by the airline reservation systems, and all messaging is transmitted by a standardized messaging system that functions on two types of messaging that transmit on SITA's high level network (HLN). These messaging types are called Type A [usually EDIFACT format] for real time interactive communication and Type B [TTY] for informational and booking type of messages. Message construction standards set by IATA and ICAO, are global, and apply to more than air transportation. Since airline reservation systems are business critical applications, and they are functionally quite complex, the operation of an in-house airline reservation system is relatively expensive.

            Prior to deregulation, airlines owned their own reservation systems with travel agents subscribing to them. Today, the GDS are run by independent companies with airlines and travel agencies being major subscribers.

            As of February 2009, there are only four major GDS providers in the market: Amadeus, Travelport (which operates the Apollo, Worldspan and Galileo systems), Sabre and Shares. There is one major Regional GDS, Abacus, serving the Asian market and a number of regional players serving single countries, including Travelsky (China), Infini and Axess (both Japan) and Topas (South Korea). Of these, Infini is hosted within the Sabre complex, Axess is in the process of moving into a partition within the Worldspan complex, and Topas agencies will be migrating into Amadeus.

            Reservation systems may host "ticket-less" airlines and "hybrid" airlines that use e-ticketing in addition to ticket-less to accommodate code-shares and interlines.

            In addition to these "standardized" GDS, some airlines have proprietary versions which they use to run their flight operations. A few examples are Delta's OSS and Deltamatic systems and EDS SHARES. SITA Reservations remains the largest neutral multi-host airline reservations system, with over 100 airlines currently managing inventory.
            </p>

        </div>
    </>
  )
}

export default About