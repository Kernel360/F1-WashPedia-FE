import type { Meta, StoryObj } from '@storybook/react';

import Header from './Header';

const meta = {
  title: 'Shared/Header',
  component: Header,
  tags: ['autodocs'],
  args: {
    isLogin: false,
    displayLogo: true,
    isTransparent: false,
    displayRightIcon: false,
  },
  argTypes: {
    isLogin: { control: 'boolean' },
    displayLogo: { control: 'boolean' },
    isTransparent: { control: 'boolean' },
    displayRightIcon: { control: 'boolean' },
  },
}satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedIn:Story = {
  args: {
    isLogin: true,
    displayLogo: true,
    isTransparent: false,
    displayRightIcon: false,
  },
};

export const LoggedOut:Story = {
  args: {
    isLogin: false,
    displayLogo: true,
    isTransparent: false,
    displayRightIcon: false,
  },
};

export const NotMainPage:Story = {
  args: {
    displayLogo: false,
    isTransparent: false,
    displayRightIcon: false,
  },
};

export const MapPage:Story = {
  args: {
    displayLogo: false,
    isTransparent: true,
  },
};

export const ProductPage:Story = {
  args: {
    displayLogo: false,
    displayRightIcon: true,
  },
};
