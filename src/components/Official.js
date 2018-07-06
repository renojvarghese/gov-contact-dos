import React, { Component } from "react";
import PropTypes from "prop-types";

const socialLinks = {
    Twitter: "https://www.twitter.com/@",
    Facebook: "https://www.facebook.com/",
    Instagram: "https://www.instagram.com/@",
    YouTube: "https://www.youtube.com/"
};
export class Official extends Component {
    constructor(props) {
        super(props);
        this.state = { imageStatus: "loading" };
    }

    handleImageLoaded() {
        this.setState({ imageStatus: "loaded" });
    }

    handleImageErrored() {
        this.setState({ imageStatus: "failed to load" });
    }
    render() {
        const official = this.props.official;
        return (
            <div
                className={
                    "card-container pop-up " +
                    (official.party ? official.party.toLowerCase() : "")
                }
            >
                <div className="portrait-container">
                    <div className={"img-container " + this.state.imageStatus}>
                        <img
                            src={this.props.official.photoUrl}
                            onLoad={this.handleImageLoaded.bind(this)}
                            onError={this.handleImageErrored.bind(this)}
                            alt={"portrait of" + official.name}
                        />
                    </div>
                </div>
                <div className="name">{official.name}</div>
                <div className="office-name">{official.officeName}</div>
                {official.emails
                    ? official.emails.map((email, i) => {
                          return (
                              <div className="contact email" key={"email_" + i}>
                                  <a
                                      className="contact-link email-link"
                                      href={"mailto:" + email}
                                  >
                                      {email}
                                  </a>
                              </div>
                          );
                      })
                    : ""}
                {official.phones
                    ? official.phones.map((phone, i) => {
                          return (
                              <div className="contact phone" key={"phone_" + i}>
                                  <span className="contact-link phone-link">
                                      {phone}
                                  </span>
                              </div>
                          );
                      })
                    : ""}
                {official.channels
                    ? official.channels.map((channel, i) => {
                          const suffix = channel.type;
                          return (
                              <div
                                  className={"contact social " + suffix}
                                  key={"social_" + suffix + i}
                              >
                                  <a
                                      className={
                                          "contact-link social-link " + suffix
                                      }
                                      href={
                                          socialLinks[channel.type] + channel.id
                                      }
                                  >
                                      {"@" + channel.id}
                                  </a>
                              </div>
                          );
                      })
                    : ""}
            </div>
        );
    }
}
Official.propTypes = {
    official: PropTypes.object.isRequired
};
