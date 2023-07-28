import React from 'react';
import { Link } from 'react-router-dom';
import { Box, IconButton, useBreakpointValue,Grid,Text,Image, Button,Stack} from '@chakra-ui/react';

const ListHeader = ({ children }) => {
    return (
      <Text fontWeight={'700'} fontSize={'2xl'}  mb={2} textAlign="left">
        {children}
      </Text>
    );
  };


const Privacy = () => {
    return (
        <Stack align={'flex-start'} margin="50px" marginTop="150px" >
        <Box width="100%" bg="gray.100" padding="10px" ><ListHeader > Introduction</ListHeader></Box>
            <Text textAlign={'left'}>
           
This privacy policy (“Policy”) sets out how The Souled Store Pvt. Ltd. (“The Souled Store”, also identified by “we” or “us” or “our” ) uses and protects any information that you give us when you use this website/ mobile application (individually and collectively, “Platform” ).
<br/><br/>
The Souled Store is committed to ensuring that your privacy is protected. Should we ask you to provide any information by which you can be identified when using this Platform, be rest assured that it will only be used strictly in accordance with this Policy.
<br/><br/>
Please note that our Policy is subject to change at any time, and we may not be able to provide you prior notice. To ensure you are up to date with the Policy, please review this page periodically. This Policy applies to current and former visitors and customers of our Platform. By visiting and/or using our Platform, you are accepting and consenting to the practices described in this Policy.
<br/><br/></Text>


<Box width="100%" bg="gray.100" padding="10px" ><ListHeader >  What information do we collect?</ListHeader></Box>
            <Text textAlign={'left'}>
           
We learn, collect, and store your personal information (that we consider necessary) when you use our Platform. We use this information to provide you with a safe, efficient, smooth, and customised experience, which includes, without limitation, displaying content such as recommended products that might interest you and communicating with you about your orders, new products, and latest promotional offers. This allows us to provide specific services and features that most likely meet your needs, customise our Platform to make your experience safer and easier, and enable third parties to carry out technical, logistical, and other functions on our behalf.
<br/><br/>Here are the types of information we gather:<br/>
1. Information you provide us<br/>
We receive and store the information you explicitly provide to us. This includes personal information such as your user name along with your password, your name, address, telephone number, e-mail address and other contact information, date of birth, gender, financial information such as bank account information, credit/debit card or other payment instrument details and any other information that you provide during your time on the Platform. You may choose not to provide certain information, but this could prevent you from taking full advantage of our Platform’s various features.
<br/><br/>2. Information collected automatically<br/>
Whenever you interact with our Platform, we automatically receive, record, and analyse information from your browser or device, which includes, without limitation, your IP address, geolocation data, device identification, “cookie” information, the type of browser and/or device you’re using to access our Platform, information about your mobile device, including a unique identifier for your device and purchase history; which we sometimes aggregate with similar information from other customers to create features such as best-selling products, products you viewed or searched for, products you may like. We may also use browser data such as cookies, flash cookies, or similar data on certain parts of our Platform. We may use software tools such as JavaScript to measure and collect session information, including page response times, download errors, length of visits to certain pages, page interaction information (such as scrolling, clicks, and mouse-overs), and methods used to browse away from the page. We use this information for internal analysis and to provide you with location-based services, such as advertising, search results, and other personalised content, to give you the best possible shopping experience on our Platform.
<br/><br/>3. Information from other sources<br/>
We may receive information about you from third parties, such as social media services, commercially available sources, and business partners. If you access our Platform through a social media service or connect a service on our Platform to a social media service, the information we collect may include but is not limited to your user name, profile picture, email address, friends list and any other information associated with that social media service, which the social media service has the right to share with us and any other information or content you have made public in connection with that social media service. Whenever you access the Platform or contact us through social media services, you authorise us to collect, store, analyse and use such information in accordance with this Policy.           
<br/><br/></Text>


<Box width="100%" bg="gray.100" padding="10px" ><ListHeader > How do we use cookies?</ListHeader></Box>
            <Text textAlign={'left'}>
           
           
A cookie is a small file that we, after obtaining your permission, transfer to your computer’s hard drive through your web browser. This file helps us recognise your browser and respond to you as an individual, as well as provide personalised features and advertisements based on your needs, likes, dislikes and behaviour on our Platform.
<br/><br/>
You can choose to accept or decline cookies. The help menu on most browsers will tell you how to prevent the browser from accepting new cookies and deleting/ disabling existing cookies. However, disabling/ deleting our cookies could prevent you from taking full advantage of our Platform’s various features.
<br/><br/></Text>



<Box width="100%" bg="gray.100" padding="10px" ><ListHeader >Do we share the information we receive?</ListHeader></Box>
            <Text textAlign={'left'}>
           
            
Respecting customers’ privacy is not only an important part of our business but one of the core philosophies of our organisation. We never have and never will commercially exploit such information by selling it to third parties. We share customer information only as described below, and in no other manner:
<br/><br/>1. Third-party service providers<br/>
We employ other companies and individuals to perform some functions on our behalf. These functions include but are not limited to fulfilling orders, delivering packages, analysing customer data, providing marketing assistance, providing search results and links, and processing payments. For optimum fulfilment of these functions, they have access only to such customer information as is needed to perform their functions, and are contractually bound to not use it for any other purpose.
<br/><br/>2. Compliance with law<br/>
We may be required to share customer information with government authorities and agencies for the purposes of verification of identity or for prevention, detection or investigation, including of cyber incidents, prosecution, and punishment of offences. Further, we may release account and other personal information when we believe release is appropriate to enforce or apply our Terms of Use and other agreements; or protect the rights, property or safety of The Souled Store, our users or others. This includes exchanging information with other companies, organisations, government or regulatory authorities for fraud protection and credit risk reduction.
<br/><br/>3. Business transfers<br/>
As we develop our business, we might sell or buy stores, subsidiaries, or business units. In such transactions, all information, including personal information collected and stored by us may be disclosed and otherwise transferred to an acquirer, or successor or assignee as part of any merger, acquisition, debt financing, sale of company assets, or similar transaction, as well as in the event of an insolvency, bankruptcy, or receivership in which all such information is transferred to one or more third parties as one of our business assets.
<br/><br/>4. With your consent<br/>
Other than as set out above, you will receive notice when information about you might go to third parties and you will have the option to choose whether or not you’d like such information to be shared.<br/><br/></Text>



<Box width="100%" bg="gray.100" padding="10px" ><ListHeader >What about links to other websites?</ListHeader></Box>
            <Text textAlign={'left'}>
           
            
Our Platform may contain third-party advertising and links to other websites. Once you use these links to leave our Platform, we do not have any control over that website. Hence, any information you share whilst visiting such sites is not governed by this Policy and we would not be responsible for the protection/ privacy of such information.
<br/><br/></Text>




<Box width="100%" bg="gray.100" padding="10px" ><ListHeader > Is your information secure?</ListHeader></Box>
            <Text textAlign={'left'}>
           
           
In one word, absolutely. The security of your information is very important to us. We use adequate security policies, rules, and technical measures, as required under applicable law, to safeguard and protect your information from unauthorised access, improper use or disclosure, unauthorised modification, and unlawful destruction or accidental loss.
<br/><br/>
However, we shall not be responsible for any breach of security or for any action of any third parties that receive users’ personal data or events that are beyond our reasonable control including acts of government, computer hacking, unauthorised access to computer data and storage devices, computer crashes, breach of security and encryption, etc.
<br/><br/></Text>

          </Stack>
        );
}
export default Privacy;