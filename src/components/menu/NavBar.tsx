import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Link } from '@tanstack/react-router';
import { NavigationMenuLink } from '@radix-ui/react-navigation-menu';
import { SettingsSheet } from '@/components/SettingsSheet';

export const NavBar = () => {
  return (
    <div className="flex gap-4">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link to="/" className="text-xl">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Home
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/beginner" className="text-xl">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Beginner
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/intermediate" className="text-xl">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Intermediate
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <SettingsSheet />
    </div>
  );
};
