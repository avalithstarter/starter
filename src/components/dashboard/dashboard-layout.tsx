import { useEffect, useMemo, useState } from "react";
import { Button, Drawer } from "react-daisyui";
import SidebarMenu from "./sidebar/sidebar-menu";

import { useRouter } from "next/router";
import AccountSubscriptionTakeover from "@/components/dashboard/accounts/account-subscription-takeover/account-subscription-takeover";
import useAccountBillingStatus from "@/utils/api/use-account-billing-status";
import { MenuIcon } from "@heroicons/react/outline";
import Logo from "@/components/basejump-default-content/logo";

const DashboardLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const router = useRouter();
  const { accountId } = router.query;

  function toggleSidebar() {
    setIsSidebarOpen(!isSidebarOpen);
  }

  return (
    <div className="min-h-screen">
      <Drawer
        side={
          <SidebarMenu
          
            onClose={toggleSidebar}
          />
        }
        mobile
        open={isSidebarOpen}
        onClickOverlay={toggleSidebar}
      >
        <main className="bg-base-100 min-h-screen w-full">
          <div className="flex justify-between items-center p-4 md:hidden">
            <Logo size="sm" />
            <Button
              color="ghost"
              className="md:hidden"
              shape="square"
              onClick={toggleSidebar}
            >
              <MenuIcon className="w-6 h-6" />
            </Button>
          </div>
          {children}
        </main>
      </Drawer>
     
    </div>
  );
};

export default DashboardLayout;
