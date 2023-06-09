import { useState } from "react";

const Section = ({ title, description, isVisible, visiableCallBack }) => {

    /**
     *   visiableCallBack(flag) => {
     *      setIsSectionVisible([flag, false, false])
     *   }
     */
    return (
        <div className="m-2 p-3 border border-gray-400">
            <h3 className="font-semibold">{title}</h3>
            <hr />
            {isVisible ? (
                <button
                    onClick={() => {
                        visiableCallBack(false);
                    }}
                    className=" mt-1 hover:bg-green-500 p-1 bg-green-200 border rounded-lg"
                >
                    Hide
                </button>
            ) : (
                <button
                    onClick={() => {
                        visiableCallBack(true);
                    }}
                    className=" mt-1 hover:bg-green-500 p-1 bg-green-200 border rounded-lg"
                >
                    Show
                </button>
            )}

            {isVisible && <h4 className="text-sm break-keep">{description}</h4>}
        </div>
    );
};

const Instamart = () => {
    const [isSectionVisible, setIsSectionVisible] = useState('Contact');
    return (
        <div className="m-2 p-2">
            <h2 className="text-xl font-bold">
                Instamart, placed instant delivery order
            </h2>
            <Section
                title={"Contact Order : "}
                description={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Convallis convallis tellus id interdum velit laoreet id. Consectetur a erat nam at lectus urna. In iaculis nunc sed augue. Nunc lobortis mattis aliquam faucibus purus in massa tempor. Sodales ut eu sem integer vitae justo eget magna. Lacinia at quis risus sed vulputate odio. Egestas quis ipsum suspendisse ultrices gravida dictum fusce ut. Ullamcorper sit amet risus nullam eget felis eget nunc lobortis. Ultricies lacus sed turpis tincidunt id aliquet. Dui vivamus arcu felis bibendum ut tristique et egestas quis. Morbi non arcu risus quis varius quam quisque."
                }
                isVisible={isSectionVisible == 'Contact'}
                visiableCallBack={(flag) => setIsSectionVisible(flag ? 'Contact' : '')}
            />
            <Section
                title={"Profile Management : "}
                description={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Convallis convallis tellus id interdum velit laoreet id. Consectetur a erat nam at lectus urna. In iaculis nunc sed augue. Nunc lobortis mattis aliquam faucibus purus in massa tempor. Sodales ut eu sem integer vitae justo eget magna. Lacinia at quis risus sed vulputate odio. Egestas quis ipsum suspendisse ultrices gravida dictum fusce ut. Ullamcorper sit amet risus nullam eget felis eget nunc lobortis. Ultricies lacus sed turpis tincidunt id aliquet. Dui vivamus arcu felis bibendum ut tristique et egestas quis. Morbi non arcu risus quis varius quam quisque."
                }
                isVisible={isSectionVisible == 'Profile'}
                visiableCallBack={(flag) => setIsSectionVisible(flag ? 'Profile' : '')}
            />
            <Section
                title={"Delivery Issue : "}
                description={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Convallis convallis tellus id interdum velit laoreet id. Consectetur a erat nam at lectus urna. In iaculis nunc sed augue. Nunc lobortis mattis aliquam faucibus purus in massa tempor. Sodales ut eu sem integer vitae justo eget magna. Lacinia at quis risus sed vulputate odio. Egestas quis ipsum suspendisse ultrices gravida dictum fusce ut. Ullamcorper sit amet risus nullam eget felis eget nunc lobortis. Ultricies lacus sed turpis tincidunt id aliquet. Dui vivamus arcu felis bibendum ut tristique et egestas quis. Morbi non arcu risus quis varius quam quisque."
                }
                isVisible={isSectionVisible == 'Delivery'}
                visiableCallBack={(flag) => setIsSectionVisible(flag ? 'Delivery' : '')}
            />
            <Section
                title={"Team Support : "}
                description={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Convallis convallis tellus id interdum velit laoreet id. Consectetur a erat nam at lectus urna. In iaculis nunc sed augue. Nunc lobortis mattis aliquam faucibus purus in massa tempor. Sodales ut eu sem integer vitae justo eget magna. Lacinia at quis risus sed vulputate odio. Egestas quis ipsum suspendisse ultrices gravida dictum fusce ut. Ullamcorper sit amet risus nullam eget felis eget nunc lobortis. Ultricies lacus sed turpis tincidunt id aliquet. Dui vivamus arcu felis bibendum ut tristique et egestas quis. Morbi non arcu risus quis varius quam quisque."
                }
                isVisible={isSectionVisible == 'Team'}
                visiableCallBack={(flag) => setIsSectionVisible(flag ? 'Team' : '')}
            />
            <Section
                title={"Refund Management : "}
                description={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Convallis convallis tellus id interdum velit laoreet id. Consectetur a erat nam at lectus urna. In iaculis nunc sed augue. Nunc lobortis mattis aliquam faucibus purus in massa tempor. Sodales ut eu sem integer vitae justo eget magna. Lacinia at quis risus sed vulputate odio. Egestas quis ipsum suspendisse ultrices gravida dictum fusce ut. Ullamcorper sit amet risus nullam eget felis eget nunc lobortis. Ultricies lacus sed turpis tincidunt id aliquet. Dui vivamus arcu felis bibendum ut tristique et egestas quis. Morbi non arcu risus quis varius quam quisque."
                }
                isVisible={isSectionVisible == 'Refund'}
                visiableCallBack={(flag) => setIsSectionVisible(flag ? 'Refund' : '')}
            />
        </div>
    );
};

export default Instamart;
