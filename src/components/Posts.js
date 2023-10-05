import React from 'react'
import '../posts.css'

export default function Posts() {
  return (
    <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
  <link
    href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
    rel="stylesheet"
  />
  <link rel="stylesheet" href="styles.css" />
  <div className="container bootdey">
    <div className="col-md-12 bootstrap snippets">
      <div className="panel">
        <div className="panel-body-1">
          <textarea
            className="form-control"
            rows={10}
            placeholder="What are you thinking?"
            defaultValue={""}
          />
          <div className="mar-top clearfix">
            <button id='share-btn' className="btn btn-sm btn-primary pull-right" type="submit">
              <i className="fa fa-pencil fa-fw" /> Share
            </button>
            <a
              className="btn btn-trans btn-icon fa fa-video-camera add-tooltip"
              href="#"
            />
            <a
              className="btn btn-trans btn-icon fa fa-camera add-tooltip"
              href="#"
            />
            <a
              className="btn btn-trans btn-icon fa fa-file add-tooltip"
              href="#"
            />
          </div>
        </div>
      </div>
      <div className="panel">
        <div className="panel-body">
          {/* Newsfeed Content */}
          {/*===================================================*/}
          <div className="media-block">
            <a className="media-left" href="#">
              <img
                className="img-circle img-sm"
                alt="Profile Picture"
                src="https://bootdey.com/img/Content/avatar/avatar1.png"
              />
            </a>
            <div className="media-body">
              <div className="mar-btm">
                <a
                  href="#"
                  className="btn-link text-semibold media-heading box-inline"
                >
                  Lisa D.
                </a>
                <p className="text-muted text-sm">
                  <i className="fa fa-mobile fa-lg" /> - From Mobile - 11 min
                  ago
                </p>
              </div>
              <p className='text'>
                consectetuer adipiscing elit, sed diam nonummy nibh euismod
                tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi
                enim ad minim veniam, quis nostrud exerci tation ullamcorper
                suscipit lobortis nisl ut aliquip ex ea commodo consequat.
              </p>
              <div className="pad-ver">
                <div className="btn-group">
                  <a
                    className="btn btn-sm btn-default btn-hover-success"
                    href="#"
                  >
                    <i className="fa fa-thumbs-up" />
                  </a>
                  <a
                    className="btn btn-sm btn-default btn-hover-danger"
                    href="#"
                  >
                    <i className="fa fa-thumbs-down" />
                  </a>
                </div>
                <a
                  className="btn btn-sm btn-default btn-hover-primary"
                  href="#"
                >
                  Comment
                </a>
              </div>
              <hr />
              {/* Comments */}
              <div>
                <div className="media-block">
                  <a className="media-left" href="#">
                    <img
                      className="img-circle img-sm"
                      alt="Profile Picture"
                      src="https://bootdey.com/img/Content/avatar/avatar2.png"
                    />
                  </a>
                  <div className="media-body">
                    <div className="mar-btm">
                      <a
                        href="#"
                        className="btn-link text-semibold media-heading box-inline"
                      >
                        Bobby Marz
                      </a>
                      <p className="text-muted text-sm">
                        <i className="fa fa-mobile fa-lg" /> - From Mobile - 7
                        min ago
                      </p>
                    </div>
                    <p className='text'>
                      Sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                      magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                      quis nostrud exerci tation ullamcorper suscipit lobortis
                      nisl ut aliquip ex ea commodo consequat.
                    </p>
                    <div className="pad-ver">
                      <div className="btn-group">
                        <a
                          className="btn btn-sm btn-default btn-hover-success active"
                          href="#"
                        >
                          <i className="fa fa-thumbs-up" /> You Like it
                        </a>
                        <a
                          className="btn btn-sm btn-default btn-hover-danger"
                          href="#"
                        >
                          <i className="fa fa-thumbs-down" />
                        </a>
                      </div>
                      <a
                        className="btn btn-sm btn-default btn-hover-primary"
                        href="#"
                      >
                        Comment
                      </a>
                    </div>
                    <hr />
                  </div>
                </div>
                <div className="media-block">
                  <a className="media-left" href="#">
                    <img
                      className="img-circle img-sm"
                      alt="Profile Picture"
                      src="https://bootdey.com/img/Content/avatar/avatar3.png"
                    />
                  </a>
                  <div className="media-body">
                    <div className="mar-btm">
                      <a
                        href="#"
                        className="btn-link text-semibold media-heading box-inline"
                      >
                        Lucy Moon
                      </a>
                      <p className="text-muted text-sm">
                        <i className="fa fa-globe fa-lg" /> - From Web - 2 min
                        ago
                      </p>
                    </div>
                    <p className='text'>
                      Duis autem vel eum iriure dolor in hendrerit in vulputate
                      ?
                    </p>
                    <div className="pad-ver">
                      <div className="btn-group">
                        <a
                          className="btn btn-sm btn-default btn-hover-success"
                          href="#"
                        >
                          <i className="fa fa-thumbs-up" />
                        </a>
                        <a
                          className="btn btn-sm btn-default btn-hover-danger"
                          href="#"
                        >
                          <i className="fa fa-thumbs-down" />
                        </a>
                      </div>
                      <a
                        className="btn btn-sm btn-default btn-hover-primary"
                        href="#"
                      >
                        Comment
                      </a>
                    </div>
                    <hr />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*===================================================*/}
          {/* End Newsfeed Content */}
          {/* Newsfeed Content */}
          {/*===================================================*/}
          <div className="media-block pad-all">
            <a className="media-left" href="#">
              <img
                className="img-circle img-sm"
                alt="Profile Picture"
                src="https://bootdey.com/img/Content/avatar/avatar1.png"
              />
            </a>
            <div className="media-body">
              <div className="mar-btm">
                <a
                  href="#"
                  className="btn-link text-semibold media-heading box-inline"
                >
                  John Doe
                </a>
                <p className="text-muted text-sm">
                  <i className="fa fa-mobile fa-lg" /> - From Mobile - 11 min
                  ago
                </p>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
              <img
                className="img-responsive thumbnail"
                src="https://www.bootdey.com/image/400x300"
                alt="Image"
              />
              <div className="pad-ver">
                <span className="tag tag-sm">
                  <i className="fa fa-heart text-danger" /> 250 Likes
                </span>
                <div className="btn-group">
                  <a
                    className="btn btn-sm btn-default btn-hover-success"
                    href="#"
                  >
                    <i className="fa fa-thumbs-up" />
                  </a>
                  <a
                    className="btn btn-sm btn-default btn-hover-danger"
                    href="#"
                  >
                    <i className="fa fa-thumbs-down" />
                  </a>
                </div>
                <a
                  className="btn btn-sm btn-default btn-hover-primary"
                  href="#"
                >
                  Comment
                </a>
              </div>
              <hr />
              {/* Comments */}
              <div>
                <div className="media-block pad-all">
                  <a className="media-left" href="#">
                    <img
                      className="img-circle img-sm"
                      alt="Profile Picture"
                      src="https://bootdey.com/img/Content/avatar/avatar2.png"
                    />
                  </a>
                  <div className="media-body">
                    <div className="mar-btm">
                      <a
                        href="#"
                        className="btn-link text-semibold media-heading box-inline"
                      >
                        Maria Leanz
                      </a>
                      <p className="text-muted text-sm">
                        <i className="fa fa-globe fa-lg" /> - From Web - 2 min
                        ago
                      </p>
                    </div>
                    <p>
                      Duis autem vel eum iriure dolor in hendrerit in vulputate
                      ?
                    </p>
                    <div>
                      <div className="btn-group">
                        <a
                          className="btn btn-sm btn-default btn-hover-success"
                          href="#"
                        >
                          <i className="fa fa-thumbs-up" />
                        </a>
                        <a
                          className="btn btn-sm btn-default btn-hover-danger"
                          href="#"
                        >
                          <i className="fa fa-thumbs-down" />
                        </a>
                      </div>
                      <a
                        className="btn btn-sm btn-default btn-hover-primary"
                        href="#"
                      >
                        Comment
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*===================================================*/}
          {/* End Newsfeed Content */}
        </div>
      </div>
    </div>
  </div>
</>

  )
}
