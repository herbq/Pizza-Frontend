import { faApplePay, faGooglePay, faPaypal, faStripeS } from '@fortawesome/free-brands-svg-icons';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ShowTimer from '../../../../components/base/show-timer/show-timer.component';
import Button from '../../../../components/common/button/button.component';
import Input from '../../../../components/common/input/input.component';
import './account-settings.css'

const ContentContainer = ({ className, title, subtitle, savable, children }: { className?: string, title: string, subtitle: string, savable?: boolean, children: any }) => {
  return <div className={`content-container ${className}`}>
    <div className='header'>
      <div>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
      </div>
      {savable && <a href="">Save</a>}
    </div>
    <div className='body'>
      {children}
    </div>
  </div>
}

const AccountSettingsSection = () => {
  return <div className="contents account-settings">
    <ShowTimer timeout={0}>
      <div className='header'>
        <div className='callout'>
          <p></p>
          <p>Account Settings</p>
        </div>
      </div>
    </ShowTimer>
    <ShowTimer timeout={50}>
      <ContentContainer title="Your Information" subtitle="Here's our basic knowledge about you." savable={true}>
        <div>
          <Input label='First Name'></Input>
          <Input label='Last Name'></Input>
        </div>
        <div>
          <Input label='Email'></Input>
          <Input label='Password'></Input>
        </div>
        <div className='footer'><p><FontAwesomeIcon icon={faExclamationCircle}></FontAwesomeIcon>We will never spam your email! Whatsoever.</p></div>
      </ContentContainer>
    </ShowTimer>
    <ShowTimer timeout={100}>
      <ContentContainer title="Payment Method" subtitle="Set up automatic payments with PayPal or Stripe.">
        <div className='payment-method-wrapper'>
          <div className='payment-method-logo'><FontAwesomeIcon icon={faPaypal} /><p>Account Not Connected.</p></div>
          <Button>Connect PayPal</Button>
        </div>
        <div className='payment-method-wrapper'>
          <div className='payment-method-logo'><FontAwesomeIcon icon={faStripeS} /><p>Account Not Connected.</p></div>
          <Button>Connect Stripe</Button>
        </div>
        <div className='payment-method-wrapper'>
          <div className='payment-method-logo'><FontAwesomeIcon icon={faApplePay} /><p>Account Not Connected.</p></div>
          <Button>Connect Apple Pay</Button>
        </div>
      </ContentContainer>
    </ShowTimer>
  </div>
}

export default AccountSettingsSection;