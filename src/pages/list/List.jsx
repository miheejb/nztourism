import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import SearchItem from "../../components/searchItem/SearchItem";
import "./list.css";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns/esm";
import { DateRange, dateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { setDate } from "date-fns";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";

const List = () => {
  const location = useLocation();
  console.log(location);
  const [destination, setDestination] = useState(location.state.destination);
  const [openDate, setOpenDate] = useState(false);
  const [date, Date] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);
  const [selection, setSelection] = useState(location.state.selection);

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="IsTitle">Search</h1>

            <div className="isItem">
              <label htmlFor="">Destination</label>
              <input placeholder={destination} type="text" />
            </div>

            <div className="isItem">
              <label htmlFor="">Check-in date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  //To fix it
                  // minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>

            <div className="isItem">
              <label htmlFor="">Property Type</label>
              <select>
                <option value="hotel">Hotel</option>
                <option value="Motel">Motel</option>
                <option value="hostel">Hostel</option>
                <option value="house">House</option>
              </select>
            </div>

            <div className="isItem">
              <label>Options</label>
              <div className="isOption">
                <div className="isOptionItem">
                  <span className="OptionText">
                    Min price <small> per night</small>
                  </span>
                  <input type="number" className="isOptionInput" />
                </div>

                <div className="isOptionItem">
                  <span className="OptionText">
                    Min price <small> per night</small>
                  </span>
                  <input type="number" className="isOptionInput" />
                </div>

                <div className="isOptionItem">
                  <span className="OptionText">
                    Max price <small> per night</small>
                  </span>
                  <input type="number" className="isOptionInput" />
                </div>

                <div className="isOptionItem">
                  <span className="OptionText">Adult</span>
                  <input
                    type="number"
                    min={1}
                    className="isOptionInput"
                    placeholder={options.adult}
                  />
                </div>

                <div className="isOptionItem">
                  <span className="OptionText">Children</span>
                  <input
                    type="number"
                    min={0}
                    className="isOptionInput"
                    placeholder={options.children}
                  />
                </div>

                <div className="isOptionItem">
                  <span className="OptionText">Room</span>
                  <input
                    type="number"
                    min={1}
                    className="isOptionInput"
                    placeholder={options.room}
                  />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="listResult">
            <SearchItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
