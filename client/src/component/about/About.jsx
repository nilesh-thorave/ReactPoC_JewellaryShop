import React, { Component } from "react";
import Contact from "./Contact";
const About = (props)=>{
    return (
      <React.Fragment>
        <div className="row mt-5 ml-5">
        <div className="col-md-7">
          <article className="item-page post-17 post hentry status-publish category-uncategorised ">
            <header className="entry-header">
              <h1 className="entry-title page-header">About Us</h1>
            </header>

            <section className="entry-content">
            <i>Welcome to [store name], your number one source for all things [product, ie: shoes, bags, dog treats]. We're dedicated to giving you the very best of [product], with a focus on [three characteristics, ie: dependability, customer service and uniqueness.]</i>
<p><i>Founded in [year] by [founder's name], [store name] has come a long way from its beginnings in a [starting location, ie: home office, toolshed, Houston, TX.]. When [store founder] first started out, his/her passion for [passion of founder, ie: helping other parents be more eco-friendly, providing the best equipment for his fellow musicians] drove him to [action, ie: do intense research, quit her day job], and gave him the impetus to turn hard work and inspiration into to a booming online store. We now serve customers all over [place, ie: the US, the world, the Austin area], and are thrilled to be a part of the [adjective, ie: quirky, eco-friendly, fair trade] wing of the [industry type, ie: fashion, baked goods, watches] industry.</i></p>
<p><i>We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.</i></p>
<p><i>Sincerely,<br />
Name, [title, ie: CEO, Founder, etc.]</i></p>
              </section>
          </article>
          </div>
          <div className="col-md-5">
          <Contact></Contact>
          </div>
          
        </div>
      </React.Fragment>
    );
}

export default About;
