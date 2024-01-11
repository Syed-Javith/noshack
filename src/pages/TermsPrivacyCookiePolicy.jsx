import React from 'react'
import List from '../components/List/List'
import { changeOfPrivacyPolicy, cookiePara, cookies, dataProtection, definitionPara, disclose, introPara, linkToOtherSites, locationData, personallyIdentifiable, retentionData, rightsArray, rigthsData, serviceData, tranferOfDataPara, useOfData } from '../data'
import ContentList from '../components/List/ContentList'

const TermsPrivacyCookiePolicy = () => {
  return (
   <div className="privacy-policy">
     <div className='container'>
      <h2>Terms, Privacy Policy & Cookie Policy</h2>
      <p><strong>Effective from the date of : </strong> 08/04/2023</p>
      <h3>INTRODUCTION:</h3>
      <ContentList content={introPara} />


      <h3>
        DEFINITION:

      </h3>

      <ContentList content={definitionPara} />


      <h3>
        INFORMATION COLLECTION AND USE:

      </h3>


      <p>
        We collect several different types of information for various purposes to provide and improve our Service to you.

      </p>
      <h3>
        TYPES OF DATA COLLECTED :

      </h3>
      <p>
        Personal Data

      </p>


      <p>
        While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you (“Personal Data”).
      </p>



      <p>
        Personally identifiable information may include, but is not limited to:

      </p>

      <List list={personallyIdentifiable} />

      <p>
        We may use your Personal Data to contact you with newsletters, marketing or promotional materials and other information that may be of interest to you. You may opt out of receiving any, or all, of these communications from us by following the unsubscribe link.

      </p>


      <h3>
        USAGE DATA:
      </h3>


      <p>
        We may also collect information that your browser sends whenever you visit our Service or when you access Service by or through any device (“Usage Data”).
      </p>


      <p>

        This Usage Data may include information such as your computer’s Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.
      </p>



      <p>
        When you access Service with a device, this Usage Data may include information such as the type of device you use, your device unique ID, the IP address of your device, your device operating system, the type of Internet browser you use, unique device identifiers and other diagnostic data.
      </p>



      <h3>
        LOCATION DATA:

      </h3>


      <ContentList content={locationData} />


      <h3>TRACKING COOKIES DATA: </h3>
      <ContentList content={cookiePara} />
      <p>
        Examples of Cookies we use:

      </p>

      <List list={cookies} />

      <h3>
        USE OF DATA:

      </h3>


      <p>
        Noshack Solutions uses the collected data for various purposes:

      </p>

      <List list={useOfData} />

      <h3>
        RETENTION OF DATA:
      </h3>
      <ContentList content={retentionData} />

      <h3>
        TRANSFER OF DATA:
      </h3>



      <ContentList content={tranferOfDataPara} />



      <h3>
        DISCLOSURE OF DATA:
      </h3>



      <p>
        We may disclose personal information that we collect, or you provide:

      </p>


      <List list={disclose} />

      <h3>
        SECURITY OF DATA:
      </h3>



      <p>
        The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
      </p>



      <h3>
        YOUR DATA PROTECTION RIGHTS:
      </h3>



      <ContentList content={dataProtection} />


      <List list={rightsArray} />
      <ContentList content={rigthsData} />
      <h3>
        SERVICE PROVIDERS:

      </h3>


      <ContentList content={serviceData} />

      <h3>
        ANALYTICS:

      </h3>


      <p>
        We may use third-party Service Providers to monitor and analyse the use of our Service.

      </p>


      <h3>
        BEHAVIOURAL REMARKETING :

      </h3>


      <p>
        We may use remarketing services to advertise on third party websites to you after you visited our Service. We and our third-party vendors use cookies to inform, optimise and serve ads based on your past visits to our Service.
      </p>



      <h3>
        LINK TO OTHER SITES:

      </h3>


      <ContentList content={linkToOtherSites} />


      <h3>
        GRIEVANCE OFFICER:

      </h3>


      <p>
        The name and contact information for the Grievance Officer are shown below in compliance with the Information Technology Act of 2000 and the Information Technology (Reasonable Security Practices and Procedures And Sensitive Personal Data or Information) Rules, 2011:
      </p>



      <h3>
        ADDRESS:

      </h3>

      <p>
        GRIEVANCE CELL OFFICE OF

        THE PRINCIPAL CHIEF COMMISSIONER OF INCOME TAX 121,

        MAHATMA GANDHI ROAD

        NUNGAMBAKKAM

        CHENNAI-600034
      </p>



      <h3>
        CHANGE OF PRIVACY POLICY:

      </h3>

      <ContentList content={changeOfPrivacyPolicy} />


      <h3>CONTACT US:</h3>



      <p>
        If you have any questions about this Privacy Policy, please contact us by email:

        <a style={{color:"white"}} href="mailto:admin@noshack.com"> admin@noshack.com</a>.
      </p>
    </div>
   </div>
  )
}

export default TermsPrivacyCookiePolicy
