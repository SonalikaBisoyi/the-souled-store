import { color } from "framer-motion";
import React, { useState } from "react";
import { Select } from "@chakra-ui/react";
import { PhoneIcon,ChevronRightIcon } from "@chakra-ui/icons";
import {Accordion,AccordionItem,AccordionButton,AccordionPanel,AccordionIcon,} from "@chakra-ui/react";
import '../style.css';

const ManageOrderPage = () => {
    // const [FAQs,setShowFaQs] = useState(false);
    const [textColor,setTextColor] = useState("black");
    const[isBlack,SetIsBlack] = useState(true);
    // const handleChangeTextColor = (e) => {
    //     SetIsBlack(!isBlack);
    //     setTextColor(isBlack? "green" : "black")
    // }

    const handleAccountButtonClick = ({onClick}) => {
        <button onClick={() => onClick({handleAccountButtonClick})}> My Account</button>
        return(
            <form action=" ">
                <div>
                    <input type="number" name="phone number" id="phno" placeholder="phone number"/> 
                </div>
            </form>
        )
       
        
        console.log(" Account button clicked! ");
    };

    const handleTrackButtonClick = () => {
         // handle the logic for tracking
         console.log(" Track button clicked! ");
    };

    const handleRefundButtonClick = () => {
        // handle the logic for tracking
        console.log(" Refund button clicked! ");
   };

   const handleCancelButtonClick = () => {
        // handle the logic for cancel
        console.log(" Cancel button clicked! ");
    };

    // const toggleFAQs = () => {
    //     setShowFaQs((prevShowFAQs) => !prevShowFAQs);
    // };
    const handleChangeTextColor = (e) => {
        SetIsBlack(!isBlack);
        setTextColor(isBlack? "green" : "black")
    }
    return(
        <div>
            <h1>Manage Order Easily</h1>
            <div className="container">
                <div className="button-box">
                    <button className="action-btn">
                        <img style={{width:"80px",borderradius:"50%"}}src="https://thenounproject.com/api/private/icons/871236/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0"
                        alt="image1"></img>
                        My Account
                    </button>
                    <button className="action-btn">
                    <img style={{width:"60px",borderradius:"50%"}}src="https://thenounproject.com/api/private/icons/5896904/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0"
                        alt="image2"></img>
                        Track</button>
                    <button className="action-btn">
                        <img style={{width:"60px",borderradius:"50%"}}src="https://thenounproject.com/api/private/icons/3549461/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0"
                        alt="image3"></img>
                        Return</button>
                    <button className="action-btn">
                        <img style={{width:"60px",borderradius:"50%"}}scr="https://cdn-icons-png.flaticon.com/128/5291/5291025.png"
                        alt="image4"></img>
                        Cancel</button>
                </div>
                <div>
                    <div className="div2">
                        <h3>What can we help you with today?</h3>

                        <div className="box">
                            <Select placeholder="please select your query">
                                <option value="option1">Where is my order?</option>
                                <option value="option2">Delivery person did not try to deliver my order</option>
                                <option value="option3">I want to return a product</option>
                                <option value="option4">Amount got deducted but the order wasn't placed</option>
                                <option value="option5">I haven't received my refund</option>
                                <option value="option6">Received incorrect product/size</option>
                                <option value="option7">Received damaged product</option>
                                <option value="option8">Received incomplete order</option>
                                <option value="option9">Product I'm looking for is out of the stock</option>
                                <option value="option10">Miscellaneous</option>
                                <option value="option11">Feedback</option>
                            </Select>
                        </div>
                    </div>    
                </div>

                {/* <div style={{
                    textAlign: "center"}}>
                    <button onClick= {toggleFAQs}>{FAQs ? "Hide FAQs" : " FAQs"}</button>
                    {FAQs && (
                        <div style={{marginTop: "10px"}}>
                            <details>

                            </details>
                        </div>
                    )}
                </div> */}
                <div>
                    FAQs
                    <div className="div7">
                        <Accordion allowToggle>
                            <AccordionItem>
                                <h2>
                                <AccordionButton>
                                    <box as="span" flex='2' textAlign='center'>
                                    ORDERS & PAYMENTS
                                    </box>
                                    <ChevronRightIcon/>
                                    <AccordionPanel pb={4}>
                                    <div className="div16">
                                    <AccordionItem>
                                    <h4>
                                    <AccordionButton>
                                        <box as="span" flex='2' textAlign='left'>
                                            How do I use my TSS points
                                        </box>
                                        
                                        <Accordion allowToggle>
                                        <AccordionIcon />
                                        <AccordionPanel pb={8}>
                                            <AccordionItem>
                                                <ol style={{ listStyleType: 'decimal',marginLeft:"80px" }}>
                                                <li>You can check how many TSS Points you have in your account once you login. Select My Account and click on 'TSS Points' from the list. You will be able to see Current Active Points, Total Purchases, Usage History and Expired Points.</li>
                                                <li>To use TSS Points once you have added your products to cart and clicked on the cart icon to go to the checkout page, you will see your order details.</li>
                                                <li>Below that will be an option to apply codes for discounts. Tick the 'Use TSS Points' box. Once you're done, proceed to checkout, confirm your shipping address, and select the desired payment method to confirm your order by clicking 'Place Order'.</li>
                                                </ol>
                                            </AccordionItem>
                                        </AccordionPanel> 
                                        </Accordion>
                                    </AccordionButton>
                                    </h4>
                                    </AccordionItem>
                                    </div>
                                    </AccordionPanel>
                                </AccordionButton>
                                </h2>
                            </AccordionItem>
                        </Accordion>
                    </div>

                    <div className="div8">
                    <Accordion allowMultiple>
                            <AccordionItem>
                                <h2>
                                <AccordionButton>
                                    <box as="span" flex='2' textAlign='center'>
                                    SHIPPING & TRACKING
                                    </box>
                                    <ChevronRightIcon/>
                                    <AccordionPanel pb={4}>
                                    <div className="div9">
                                    <Accordion allowMultiple>
                                        <AccordionItem>
                                        <h4>
                                        <AccordionButton>
                                            <box as="span" flex='2' textAlign='left'>
                                                What if my order is undelivered?
                                            </box>
                                            <Accordion>
                                            <AccordionIcon />
                                            <AccordionPanel pb={8}>
                                                <div className="17">
                                                <AccordionItem>
                                                <AccordionButton>
                                                    <p>
                                                    For prepaid orders, if our courier partners are unable to deliver the product and they send it back to us, we will initiate a refund as TSS Money to your The Souled Store account which will reflect within 24-48 hours of initiation.
                                                    back to us, we will initiate a refund as TSS Money to your The Souled Store account which will
                                                    reflect within 24-48 hours of initiation.
                                                    </p>
                                                </AccordionButton>
                                                </AccordionItem>
                                                </div>
                                            </AccordionPanel> 
                                        </Accordion>
                                        </AccordionButton>
                                        </h4>
                                        </AccordionItem>
                                    </Accordion>
                                    </div>
                                    </AccordionPanel>
                                </AccordionButton>
                                </h2>
                                </AccordionItem>
                        </Accordion>
                    </div>
                    <div className="div10">
                    <Accordion allowMultiple>
                            <AccordionItem>
                                <h2>
                                <AccordionButton>
                                    <box as="span" flex='2' textAlign='center'>
                                    EXCLUSIVE MEMBERSHIP
                                    </box>
                                    <ChevronRightIcon/>
                                    <AccordionPanel pb={4}>
                                    <div className="div11">
                                    <Accordion allowToggle>
                                        <AccordionItem>
                                        <h4>
                                        <AccordionButton>
                                            <box as="span" flex='2' textAlign='left'>
                                            Can I club the Exclusive discount with other offers?    
                                            </box>
                                            <Accordion>
                                            <AccordionIcon />
                                            <AccordionPanel pb={8}>
                                                <AccordionItem>
                                                <AccordionButton>
                                                    <p>
                                                    Yes, you can club offers specifically available for the member.
                                                    </p>
                                                </AccordionButton>
                                                </AccordionItem>
                                            </AccordionPanel> 
                                        </Accordion>
                                        </AccordionButton>
                                        </h4>
                                        </AccordionItem>
                                    </Accordion>
                                    </div>
                                    </AccordionPanel>
                                </AccordionButton>
                                </h2>
                                </AccordionItem>
                        </Accordion>
                    </div>
                    <div className="div12">
                    <Accordion allowMultiple>
                            <AccordionItem>
                                <h2>
                                <AccordionButton>
                                    <box as="span" flex='2' textAlign='center'>
                                    MISCELLANEOUS
                                    </box>
                                    <ChevronRightIcon/>
                                    <AccordionPanel pb={4}>
                                    <div className="div13">
                                    <Accordion allowMultiple>
                                        <AccordionItem>
                                        <h4>
                                        <AccordionButton>
                                            <box as="span" flex='2' textAlign='left'>
                                            Are gift certificates refundable? 
                                            </box>
                                            <Accordion>
                                            <AccordionIcon />
                                            <AccordionPanel pb={8}>
                                                <AccordionItem>
                                                <AccordionButton>
                                                    <p>
                                                    Gift certificates are non refundable.
                                                    </p>
                                                </AccordionButton>
                                                </AccordionItem>
                                            </AccordionPanel> 
                                        </Accordion>
                                        </AccordionButton>
                                        </h4>
                                        </AccordionItem>
                                    </Accordion>
                                    </div>
                                    </AccordionPanel>
                                </AccordionButton>
                                </h2>
                                </AccordionItem>
                        </Accordion>
                    </div>
                    <div className="div14">
                    <Accordion allowMultiple>
                            <AccordionItem>
                                <h2>
                                <AccordionButton>
                                    <box as="span" flex='2' textAlign='center'>
                                    RETURNS, EXCHANGE & REFUND
                                    </box>
                                    <ChevronRightIcon/>
                                    <AccordionPanel pb={4}>
                                    <div className="div15">
                                    <Accordion allowMultiple>
                                        <AccordionItem>
                                        <h4>
                                        <AccordionButton>
                                            <box as="span" flex='2' textAlign='left'>
                                            The product I want to return was bought on discount. Will I get refunded the full amount? 
                                            </box>
                                            <Accordion>
                                            <AccordionIcon />
                                            <AccordionPanel pb={2}>
                                                <AccordionItem>
                                                <AccordionButton>
                                                    <p>
                                                    No. You will only receive the exact amount paid for the product.
                                                    </p>
                                                </AccordionButton>
                                                </AccordionItem>
                                            </AccordionPanel> 
                                        </Accordion>
                                        </AccordionButton>
                                        </h4>
                                        </AccordionItem>
                                    </Accordion>
                                    </div>
                                    </AccordionPanel>
                                </AccordionButton>
                                </h2>
                                </AccordionItem>
                        </Accordion>
                    </div>
                </div>
                <div className="div3">
                    <h2>Need more help?Get in touch.</h2>
                    <div className="div4">
                        <h6 style={{fontWeight: "bolder",fontSize:"20px",marginTop:"20px"}}>Speak With Us</h6>
                        <p>Mon-Sun: 9:00 AM to 11:00 PM</p>
                        <p><PhoneIcon/> 022-68493328</p>
                    </div>
                </div>
                <div>
                    Stay in touch
                    <div className="div18">
                        <img style={{width:"60px",height:"40px"}}src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/facebook_circle_color-512.png" 
                        alt="facebook" />
                        <p><br></br>instagram</p>
                        <img style={{width:"60px",height:"40px"}}src="https://img.freepik.com/free-vector/instagram-icon_1057-2227.jpg?w=740&t=st=1690480756~exp=1690481356~hmac=9760acb60b4b242f3d595d63c71ff15202a4f2b3ca45b3b7e032b93114d07217" 
                        alt="instagram" />
                        <p><br></br>instagram</p>
                        {/* Instagram */}
                        <img style={{width:"60px",height:"40px"}}src="https://cdn-icons-png.flaticon.com/512/174/174883.png?w=740&t=st=1690482954~exp=1690483554~hmac=3081eac81c3d8cdb479c57f87e3b97475ee5483e171c8055512a9eb2e0e11619" 
                        alt="youtube" />
                        {/* <p>Youtube</p> */}
                        <p><br></br>youtube</p>
                        <img style={{width:"60px",height:"40px"}}src="https://cdn-icons-png.flaticon.com/512/179/179342.png?w=740&t=st=1690483075~exp=1690483675~hmac=3677a4b216191629034a2a742281da234a8ab1481ea635ddf3b0972bd8203e4f" 
                        alt="twitter" />
                        <p><br></br>twitter</p>
                        {/* <p>Twitter</p> */}
                        {/* <p>facebook</p>
                        <p><br></br>instagram</p>
                        <p>youtube</p>
                        <p>twitter</p> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageOrderPage;