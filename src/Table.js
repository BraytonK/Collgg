import { useContext, useEffect, useState } from "react";
import { listDocs } from "@junobuild/core";
import { AuthContext } from "./Auth";

export const Table = () => {
  const { user } = useContext(AuthContext);
  const [items, setItems] = useState([]);

  useEffect(() => {
    window.addEventListener("reload", list);

    return () => {
      window.removeEventListener("reload", list);
    };
  }, []);

  const list = async () => {

    const { items } = await listDocs({
      collection: "notes",
    });

    setItems(items);
  };

  useEffect(() => {
    if ([undefined, null].includes(user)) {
      setItems([]);
      return;
    }

    (async () => await list())();
  }, [user]);

  return (
      <div className="p-3">
        <div className="overflow-x-auto">
          {items.map((item, index) => {
            const {
              key,
              data: { text, url },
            } = item;

            return (
              <div id={text} class="tabcontent">
                  <div id={text}> </div>
                  <article>
                    <div class="snippet">
                    <div class="snippet-container">
                      <div class="snippet-row-padding">
                        <div class="snippet-col">
                          <div class="snippet-card snippet-round snippet-white">
                            <div class="snippet-container">
                              <p><div id={key}>{text}</div></p>
                                <div className="flex gap-2 justify-center align-middle">
                                    {url !== undefined ? (
                                      <a
                                        aria-label="Open data"
                                        rel="noopener noreferrer"
                                        href={url}
                                        target="_blank"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          strokeWidth={1.5}
                                          stroke="currentColor"
                                          className="w-6 h-6"
                                        >
                                          <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                                          />
                                        </svg>
                                      </a>
                                    ) : undefined}
                                  </div>
                            </div>
                          </div>
                        </div>
                      </div> 
                    </div>
                    </div>
                  </article>
                  </div>
            );
          })}
        </div>
      </div>
  );
};
