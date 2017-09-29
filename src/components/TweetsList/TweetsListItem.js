import React from 'react'

export const TweetsListItem = ({tweet: {id, id_str, text, user: {name, screen_name, profile_image_url}, q}}) => (
    <div className="row">
        <div className="col-xs-3 col-sm-1 col-md-1"><img src={profile_image_url} alt={name}/></div>
        <div className="col-xs-4 col-sm-3 col-md-2"><strong>{screen_name}</strong></div>
        <div className="col-xs-4 col-sm-3 col-md-2"><i>@{name}</i></div>
        <div className="col-xs-12 col-sm-5 col-md-7">{text}</div>
    </div>
);