import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ShopByCategory = () => {
    return (
        <div className='my-36 lg:max-w-screen-2xl lg:p-0 px-5 mx-auto'>
            <Tabs>
                <TabList className={`bg-pink-500 text-center py-4 w-1/2 m-auto flex justify-center gap-6`}>
                    <Tab className={`cursor-pointer py-3 px-6 bg-white focus:outline-none rounded-full focus:text-pink-500 active:rounded-full`}>Title 1</Tab>
                    <Tab className={`cursor-pointer py-3 px-6 bg-white focus:outline-none rounded-full focus:text-pink-500`}>Title 2</Tab>
                    <Tab className={`cursor-pointer py-3 px-6 bg-white focus:outline-none rounded-full focus:text-pink-500`}>Title 2</Tab>
                </TabList>

                <TabPanel>
                    <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ShopByCategory;
