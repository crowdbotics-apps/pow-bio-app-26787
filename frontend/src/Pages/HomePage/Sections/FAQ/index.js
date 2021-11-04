import React from "react";
import { Collapse } from 'bootstrap';
import { Heading, Paragraph, Section, Container, MTDiv } from "./styles";

const FAQ = () => {
    return <Section>
        <Container>
            <Heading>Morbi sit eu diam vel nunc ac quisque tinc.</Heading>
            <Paragraph>
                Diam, phasellus at mi donec nisi, porttitor est, dictumst justo, ac, nunc facilisis enim consequat ac nulla sem orci nec, lorem amet sed proin pretium elementum tortor lobortis faucibus eget velit.
            </Paragraph>

            <MTDiv>
                <div className="accordion" id="faqAccordion">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                What did say as a kid when asked: What do you want to be when you grow up?
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                            <div className="accordion-body">
                                Hendrerit quam amet vel risus placerat orci euismod quam in pellentesque venenatis ipsum phasellus sit risus, consectetur penatibus ac nibh consectetur ut risus arcu, vulputate vestibulum, cursus lectus scelerisque eros
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                If you could change careers right this second, what would you do?
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                            <div className="accordion-body">
                                Hendrerit quam amet vel risus placerat orci euismod quam in pellentesque venenatis ipsum phasellus sit risus, consectetur penatibus ac nibh consectetur ut risus arcu, vulputate vestibulum, cursus lectus scelerisque eros
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                What did say as a kid when asked: What do you want to be when you grow up?
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
                            <div className="accordion-body">
                                Hendrerit quam amet vel risus placerat orci euismod quam in pellentesque venenatis ipsum phasellus sit risus, consectetur penatibus ac nibh consectetur ut risus arcu, vulputate vestibulum, cursus lectus scelerisque eros
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFour">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                What did say as a kid when asked: What do you want to be when you grow up?
                            </button>
                        </h2>
                        <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#faqAccordion">
                            <div className="accordion-body">
                                Hendrerit quam amet vel risus placerat orci euismod quam in pellentesque venenatis ipsum phasellus sit risus, consectetur penatibus ac nibh consectetur ut risus arcu, vulputate vestibulum, cursus lectus scelerisque eros
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFive">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                                What did say as a kid when asked: What do you want to be when you grow up?
                            </button>
                        </h2>
                        <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#faqAccordion">
                            <div className="accordion-body">
                                Hendrerit quam amet vel risus placerat orci euismod quam in pellentesque venenatis ipsum phasellus sit risus, consectetur penatibus ac nibh consectetur ut risus arcu, vulputate vestibulum, cursus lectus scelerisque eros
                            </div>
                        </div>
                    </div>

                </div>
            </MTDiv>
        </Container>
    </Section>
};

export default FAQ;
