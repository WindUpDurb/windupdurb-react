"use strict";

import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as ArticleActions from "../../actions/ArticleActions";
import {ParallaxHeader} from "../common/ParallaxHeader";
import {ArticleBody} from "../Article/ArticleBody";

class AboutPage extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <ParallaxHeader backgroundUrl={"/images/onWhyIWrite.jpg"}/>
                <div className="text-center" style={{padding: "15px 13% 15px 13%"}}>
                    <h2 className="essayTitle">On the Art of Writing and Life</h2>
                    <br/>
                    <p className="essayText">
                        And so it begins with a character—any character, be it number, letter, or otherwise—put into place precisely and deliberately. What has happened is an act of creation, initiated in the mind and rendered into the world with the character. The characters, by the way, here referred are anything written or typed, and to keep things simple, any character found on a keyboard or in a novel or short story: letters, numbers, and other non-alphanumeric characters such as punctuation marks and arithmetic operators. As commonplace as they may be, these characters can be underappreciated for what they are: vehicles of thought, expression, and creativity—or, simply, art.
                    </p>
                    <p className="essayText">
                        Let us eschew many of the established sources that have already attempted to define what art is for something more personal and relevant to my endeavors: art is life, in the sense that it is a reflection of the life narrative. A story is read, a painting is viewed, a song is heard, a movie is watched because of the narratives inherent in those creative mediums. The narratives may be more explicit in books and film where events stringed together create the recognized arc of a story: the development of a conflict through the stages of “the beginning,” “the middle,” and “the end.” But in mediums where this story arc is less obvious or non-existent, narratives still exist—such as in the form of stirred up emotions, whether intentionally induced by the author—the author as the creator of the painting, the photo, the film, the book, the song—or spawned from spontaneity and originating from within the imbiber himself. And it is this act of self-authoring, specifically—this self-creation of significance and meaning—that  we all engage in as human  beings that makes us capable of creating art out of anything.
                    </p>
                    <p className="essayText">
                        Art as a reflection of the life narrative, indeed, exists everywhere—but it just has to be sought and noticed. The numeric character <span className="heartCharacters">3</span>, for example, and the relational operator <span className="heartCharacters">{"<"}</span>, known as the less-than sign, create the compound sign <span className="heartCharacters">{"<3"}</span>. It is a product of the self-authoring mind that relates these primarily mathematical characters, when joined, with the symbol of a heart and ascribes it with the ideal of love, so that when “I <span className="heartCharacters">{"<3"}</span> You” is written, a narrative of emotion—and an important sub-narrative in the life narrative itself—has just been created. It is through  instances of symbolism and analogy, here exemplified with the compound sign “<span className="heartCharacters">{"<3"}</span>,” that the self-authoring mind is always engaged in, both willfully and spontaneously. And it is through this kind of frame that coding, or anything at all, can be examined for significance and meaning that is not otherwise obvious.
                    </p>
                    <p className="essayText">
                        Let us now take programming in general and distill it for what it is: it is problem-solving—and a shit ton of self-reliance. Now, let us take the hearty mass that is life and attempt to distill something out of it: well, every single one of us is thrown into this world, and by the time our life narrative is over—and sooner rather than later—every single one of us would like to have figured out the answers to a few grand questions, such as, what is the meaning of life—specifically, my life? How do I achieve happiness? I do not know the answers to these questions, but the problem-solving and self-reliance involved in coding, programming, developing, engineering—whichever word you would like to use—can help us construct answers—or solutions—to these questions in our life narratives. And just like that, writing code and the life narrative may seem a little less irrelevant from one another: we essay at the keyboard, keystroke by keystroke, constructing solutions from the characters accrued from persistence and more persistence; we essay through life, with every choice and decision, taking steps, we hope, towards our goals and ambitions.
                    </p>
                    <p className="essayText">
                        Notice, though, that the key characteristic here shared by both writing code and life is the act of self-authoring. There are a multitude of ways to construct the software that we need or want, and there are a multitude of choices we can make in our life narratives to help us attain our sought-after answers—but we  must make them ourselves. Certainly, we are never really going to go at it alone—we need to help each other, and be helped by each other—but what it all really boils down to is the solitary “I” who will make the decisions that matter to you. Should I manage user authentication on my back-end in my web application, or should I use some back-end as a service platform to manage it? Am I really happy in my current position in life, or should I do something else? Indeed, those are  two completely different questions of different magnitudes, but their relevance is in how they should be approached: it is with self-reliance and problem-solving that they both should be tackled.
                    </p>
                    <p className="essayText">
                        - David
                    </p>
                </div>
            </div>
        );
    }
}

AboutPage.propTypes = {

};

function mapStateToProps(state, ownProps) {
    let currentArticle;
    console.log("State: ", state);
    if (state.articles && state.articles.currentArticle) currentArticle = state.articles.currentArticle;
    return {
        currentArticle
    };
}

function mapDispatchToProps(dispatch) {
    return {
        ArticleActions: bindActionCreators(ArticleActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutPage);