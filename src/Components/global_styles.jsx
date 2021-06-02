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
  `
