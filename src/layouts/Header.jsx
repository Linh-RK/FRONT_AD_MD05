import { DownOutlined, UserOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import Search from "antd/es/transfer/search";
import React from "react";

export default function Header() {
  const items = [
    {
      label: (
        <a
          href="https://www.antgroup.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          1st menu item
        </a>
      ),
      key: "0",
    },
    {
      label: (
        <a
          href="https://www.aliyun.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          2nd menu item
        </a>
      ),
      key: "1",
    },
    {
      type: "divider",
    },
    {
      label: "3rd menu item",
      key: "3",
    },
  ];
  return (
    <>
      <header className="bg-white w-full h-[64px] sticky top-0 z-20 px-6 flex items-center justify-between">
        <img
          className="ml-4"
          width={60}
          src="https://static.fotor.com/app/features/img/step_new/features/4-pet.png"
        />

        <div className="flex items-center">
          <Dropdown
            menu={{
              items,
            }}
            trigger={["click"]}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space className="flex items-center">
                <img
                  className="rounded-full "
                  width={40}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgPbd2MBbw3o5_yzYC_pPjoVNKUx7WCrMN3g&s"
                />
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        </div>
      </header>
    </>
  );
}
