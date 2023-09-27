"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

const SearchBox = ({ placeholder }: any) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const search = searchParams.get("q") || "";
  const router = useRouter();
  const [_openDropdown, setOpenDropDown] = useState(false);

  const [searchValue, setSearchValue] = useState(search);

  const isSearchPage = pathname.includes("/search");

  useEffect(() => {
    if (!searchValue) {
      setOpenDropDown(false);
    }
  }, [searchValue, router, isSearchPage]);

  return (
    <div className="searchbar">
      <>
        <input
          value={searchValue}
          placeholder={placeholder}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              // keeping code open for future changes
              location.href = `/posts?q=${searchValue}&type=${searchValue}`;
            }
          }}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
          type="search"
        />
      </>
    </div>
  );
};

export default SearchBox;
