import { createGlobalStyle } from "styled-components"
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }

  .right-col{
    background: ${({ theme }) => theme.rightColBck};
  }

  .city-card{
    background: ${({ theme }) => theme.gradientBackground};
    box-shadow: ${({ theme }) => theme.boxShadow};
    border: ${({ theme }) => theme.boxBorder};
  }

  .inner-gry-container{
    background: ${({ theme }) => theme.innerContainer};
  }

  .gry-container{
    background: ${({ theme }) => theme.gryContainer};
  }

  .explore-btn{
    background-color: ${({ theme }) => theme.exploreButton};
    color: ${({ theme }) => theme.exploreButtonText};
  }

  .link-clr.active{
    background-color: ${({ theme }) => theme.linkClrActive};
    color: ${({ theme }) => theme.linkClrActiveText};
  }

  .left-navbar{
    background-color: ${({ theme }) => theme.leftHeader};
  }

  .right-navbar{
    background-color: ${({ theme }) => theme.rightHeader};
  }

  .sort-btn{
    background-color: ${({ theme }) => theme.sortButtonBck};
  }

  .icon-slider{
    color: ${({ theme }) => theme.iconSliderClr};
  }

  ::placeholder{
    color: ${({ theme }) => theme.placeHolderClr};
  }

  .days-dropdown button
  {
    color: ${({ theme }) => theme.daysDropdownText};
  }

  .any-date-para{
    color: ${({ theme }) => theme.anyDateParaText};
  }

  .filter-btn{
    background-color: ${({ theme }) => theme.filterButton};
  }

  .icon-slider-happyuser{
    color: ${({ theme }) => theme.iconSliderHappyuserClr};
  }

  .user-info-container{
    background: ${({ theme }) => theme.userInfoContainerBck};
    box-shadow: ${({ theme }) => theme.boxShadow};
  }

  .email-input{
    background-color: ${({ theme }) => theme.emailInputBck};
    color: ${({ theme }) => theme.emailInputText};
  }

  .password-input
  {
    background-color: ${({ theme }) => theme.emailInputBck};
    color: ${({ theme }) => theme.emailInputText};
  }

  .username-input{
    background-color: ${({ theme }) => theme.emailInputBck};
    color: ${({ theme }) => theme.emailInputText};
  }

  .DOB-datepicker{
    background-color: ${({ theme }) => theme.emailInputBck};
    color: ${({ theme }) => theme.emailInputText};
  }

  .react-tel-input .form-control{
    background-color: ${({ theme }) => theme.emailInputBck};
    color: ${({ theme }) => theme.emailInputText};
  }

  .register-btn{
    box-shadow: ${({ theme }) => theme.registerButtonShadow};
  }

  .signup-btn{
    box-shadow: ${({ theme }) => theme.registerButtonShadow};
  }

  .contactus-body-part{
    background-color: ${({ theme }) => theme.contactusBodyPartBck};
  }

  .contactus-form{
    background: ${({ theme }) => theme.contactusFormBck};
  }

  .contactus-name-input{
    background-color: ${({ theme }) => theme.contactusNameInputBck};
    color: ${({ theme }) => theme.contactusNameInputText};
  }

  .contactus-email-input{
    background-color: ${({ theme }) => theme.contactusNameInputBck};
    color: ${({ theme }) => theme.contactusNameInputText};
  }

  .textarea-message
  {
    background-color: ${({ theme }) => theme.contactusNameInputBck};
    color: ${({ theme }) => theme.contactusNameInputText}; 
  }

  .your-word{
    color: ${({ theme }) => theme.yourWordText};
  }

  .dropdown-menu{
    background-color: ${({ theme }) => theme.dropdownMenuBck};
  }

  .dropdown-item{
    color: ${({ theme }) => theme.dropdownMenuText};
  }

  .select-search__option, .select-search__not-found
  {
    background: ${({ theme }) => theme.selectSearchOptionBck};
    color: ${({ theme }) => theme.selectSearchOptionText};
  }

  .select-search__option.is-highlighted,
.select-search__option:not(.is-selected):hover
{
  background: ${({ theme }) => theme.selectSearchOptionHighlighted};
}

.select-search__input
{
  color: ${({ theme }) => theme.selectSearchInputText};
}

.react-datepicker__header
{
  background-color: ${({ theme }) => theme.ReactDatepickerHeaderBck};
}

.react-datepicker__month-container{
  background: ${({ theme }) => theme.ReactDatepickerMonth};
}

.react-datepicker__current-month, .react-datepicker-time__header, .react-datepicker-year-header
{
  color: ${({ theme }) => theme.datepickerText};
}

.react-datepicker__day-name, .react-datepicker__day, .react-datepicker__time-name
{
  color: ${({ theme }) => theme.datepickerDayText};
}

.react-datepicker
{
  border: ${({ theme }) => theme.reactDatepickerBorder};
}

.datepicker
{
  color: ${({ theme }) => theme.datepickerTextClr};
}

.react-tel-input .country-list{
  background: ${({ theme }) => theme.reactTelInputBckClr};
}

.react-tel-input .country-list .search{
  background-color: ${({ theme }) => theme.reactTelInputSearchBckClr};
}

.react-tel-input .country-list .search-box{
  background: ${({ theme }) => theme.reactTelInputSearchBoxBckClr};
}
  `
