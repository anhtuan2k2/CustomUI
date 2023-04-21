export const DEFAULT_PRODUCT_TAG_BGCOLOR = '#000000';
export const DEFAULT_PRODUCT_TAG_FGCOLOR = '#FFFFFF';
export const DEFAULT_ACTION_BUTTON_PRIMARY_BGCOLOR = '#000000';
export const DEFAULT_ACTION_BUTTON_PRIMARY_FGCOLOR = '#FFFFFF';
export const DEFAULT_ACTION_BUTTON_SECONDARY_BGCOLOR = '#F2F2F2';
export const DEFAULT_ACTION_BUTTON_SECONDARY_FGCOLOR = '#5A5A5A';
export const DEFAULT_ACTION_BUTTON_LINK_BGCOLOR = null;
export const DEFAULT_ACTION_BUTTON_LINK_FGCOLOR = '#5A5A5A';
export const DEFAULT_ACTION_BUTTON_ADDTOCART_BGCOLOR = '#F2F2F2';
export const DEFAULT_ACTION_BUTTON_ADDTOCART_FGCOLOR = '#5A5A5A';

export const DEFAULT_COLOR = '#0c0c0c';
export const DEFAULT_REACT_BOTTOM_BAR_ICON_COLOR = '#B4B4B4';
export const DEFAULT_REACT_BOTTOM_BAR_LABEL_COLOR = '#B4B4B4';
export const DEFAULT_REACT_BOTTOM_BAR_HIGHLIGHT_COLOR = '#0779FF';
export const DEFAULT_REACT_BOTTOM_BAR_BGCOLOR = '#FAFAFA';
/**
 * @deprecated Use {@link Colors} instead }
 */
const themeSettings: ThemeSetting = {
  hyperlinkColor: DEFAULT_COLOR,
  btnColor: DEFAULT_COLOR,
  textColor: DEFAULT_COLOR,
  productTagBgColor: DEFAULT_PRODUCT_TAG_BGCOLOR,
  productTagFgColor: DEFAULT_PRODUCT_TAG_FGCOLOR,
  actionBtnPrimaryBgColor: DEFAULT_ACTION_BUTTON_PRIMARY_BGCOLOR,
  actionBtnPrimaryFgColor: DEFAULT_ACTION_BUTTON_PRIMARY_FGCOLOR,
  actionBtnSecondaryBgColor: DEFAULT_ACTION_BUTTON_SECONDARY_BGCOLOR,
  actionBtnSecondaryFgColor: DEFAULT_ACTION_BUTTON_SECONDARY_FGCOLOR,
  actionBtnLinkBgColor: DEFAULT_ACTION_BUTTON_LINK_BGCOLOR,
  actionBtnLinkFgColor: DEFAULT_ACTION_BUTTON_LINK_FGCOLOR,
  actionBtnAddToCartBgColor: DEFAULT_ACTION_BUTTON_ADDTOCART_BGCOLOR,
  actionBtnAddToCartFgColor: DEFAULT_ACTION_BUTTON_ADDTOCART_FGCOLOR,
  reactBottomBarIconColor: DEFAULT_REACT_BOTTOM_BAR_ICON_COLOR,
  reactBottomBarLabelColor: DEFAULT_REACT_BOTTOM_BAR_LABEL_COLOR,
  reactBottomBarHighlightColor: DEFAULT_REACT_BOTTOM_BAR_HIGHLIGHT_COLOR,
  reactBottomBarBgColor: DEFAULT_REACT_BOTTOM_BAR_BGCOLOR,
};
/**
 * @deprecated Use {@link Colors} instead }
 */
const screen = {
  SignInScreen: {
    hyperlinkText: {
      color: themeSettings.textColor,
    },
    buttonLogin: {
      backgroundColor: themeSettings.btnColor,
    },
  },
  MyAccountScreen: {
    textLogout: {
      color: themeSettings.textColor,
    },
  },
  ForgotPasswordScreen: {
    textConfirm: {
      color: themeSettings.textColor,
    },
    buttonSend: {
      backgroundColor: themeSettings.btnColor,
    },
  },
  AddressBookScreen: {
    phoneNumberText: {
      color: themeSettings.textColor,
    },
    btnSaveAddress: {
      backgroundColor: themeSettings.btnColor,
    },
  },
  ProductListScreen: {
    showMoreText: {
      color: themeSettings.textColor,
    },
    sortTickButton: {
      tintColor: themeSettings.textColor,
    },
    filterRadioButton: {
      tintColor: themeSettings.textColor,
    },
    btnAddToCart: {
      backgroundColor: themeSettings.btnColor,
    },
  },
  ProductDetailScreen: {
    showMoreText: {
      color: themeSettings.textColor,
    },
    btnAddToCart: {
      backgroundColor: themeSettings.btnColor,
    },
    btnNotifiBackInStock: {
      backgroundColor: themeSettings.btnColor,
    },
  },
  CartScreen: {
    addCouponCodeText: {
      color: themeSettings.textColor,
    },
    btnApplyCoupon: {
      backgroundColor: themeSettings.btnColor,
    },
    btnCheckout: {
      backgroundColor: themeSettings.btnColor,
    },
  },
  OrderHistoryScreen: {
    resetText: {
      color: themeSettings.textColor,
    },
    tickButton: {
      tintColor: themeSettings.textColor,
    },
    btnDoneFilter: {
      backgroundColor: themeSettings.btnColor,
    },
  },
  OrderDetailsScreen: {
    viewDetailsText: {
      color: themeSettings.textColor,
    },
  },
  SearchScreen: {
    clearAllText: {
      color: themeSettings.textColor,
    },
  },
  WishlistScreen: {
    addNoteText: {
      color: themeSettings.textColor,
    },
    editNoteText: {
      color: themeSettings.textColor,
    },
    btnAddToCart: {
      backgroundColor: themeSettings.btnColor,
    },
  },
  CheckoutScreen: {
    cancelCheckoutText: {
      color: themeSettings.textColor,
    },
    btnStepNext: {
      backgroundColor: themeSettings.btnColor,
    },
    btnBackToCart: {
      backgroundColor: themeSettings.btnColor,
    },
    btnPlaceOrder: {
      backgroundColor: themeSettings.btnColor,
    },
    checkBoxTermConditions: {
      tintColor: themeSettings.btnColor,
    },
  },
  PushMessageScreen: {
    viewCatalogModuleText: {
      color: themeSettings.textColor,
    },
    backText: {
      color: themeSettings.textColor,
    },
  },
  ModalConfirmScreen: {
    btnConfirm: {
      backgroundColor: themeSettings.btnColor,
    },
  },
  AlertConfirmModalScreen: {
    btnConfirm: {
      backgroundColor: themeSettings.btnColor,
    },
  },
  DrawerFilterScreen: {
    btnFilter: {
      backgroundColor: themeSettings.btnColor,
    },
  },
  ThankYouPageScreen: {
    btnViewOrderDetail: {
      backgroundColor: themeSettings.btnColor,
    },
  },
  ModalQuanityScreen: {
    btnPlusQuanity: {
      backgroundColor: themeSettings.btnColor,
    },
  },
  TotorialScreen: {
    btnNext: {
      backgroundColor: themeSettings.btnColor,
    },
  },
};

/**
 * @deprecated Use {@link Colors} instead }
 */
export const Theme = {themeSettings, screen};
// export default Theme;
