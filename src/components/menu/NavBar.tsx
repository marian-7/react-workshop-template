import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { NavBarExpandable } from './NavBarExpandableItem';
import { BENEFIT_OPTIONS, TOOL_OPTIONS } from '@/mock/linkOptions';
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
          <NavBarExpandable
            label="Tools"
            baseHref="/tools"
            items={TOOL_OPTIONS}
          />
          <NavBarExpandable
            label="Benefits"
            baseHref="/benefits"
            items={BENEFIT_OPTIONS}
          />
        </NavigationMenuList>
      </NavigationMenu>
      <SettingsSheet />
    </div>
  );
};
