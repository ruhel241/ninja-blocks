import TeamMember from "./team";
import Inspector from "./inspector";
import SocialItems from "./social";

const { Component } = wp.element;
const {RichText, MediaUpload, BlockControls, AlignmentToolbar, URLInput} = wp.editor;
const {Button, Toolbar, IconButton, Dashicon } = wp.components;

const {__} = wp.i18n;

export default class TeamMemberBlockEdit extends Component {
    constructor( props ){
        super( ...arguments );
    }
    
    

    render() {

        const {
            attributes: {designation, name1, name2, name3, name4, nameColor, nameFz, designation1, designation2, designation3, designation4, designationColor, imageUrl1, imageUrl2, imageUrl3, imageUrl4, imageID1, imageID2, imageID3, imageID4, imageAlt1, imageAlt2, imageAlt3, imageAlt4, align, fontSize, boxBgColor,boxBorderColor, columns, facebook1, facebook2, facebook3, facebook4, twitter1, twitte2, twitter3, twitter4,linkedin1,linkedin2,linkedin3,linkedin4,instagram1,instagram2,instagram3,instagram4,youtube1,youtube2,youtube3,youtube4, dropcap, socialBgColor, socialIconColor, socialIconFz,socialBorderColor,socialBorderTopRDropCap},
            attributes,
            isSelected,
            className,
            setAttributes
        } = this.props;
        
        
        const createTeamMemberImageOption = () => {
            let newArray = [];

            for (var i = 1; i <= columns; i++) {
                let imageIDs = 'imageID' + i;
                let imageUrls = 'imageUrl' + i;
                let imageAlts = 'imageAlt' + i;

                newArray.push(
                    attributes[imageUrls] && isSelected && (
                        <Toolbar>
                            <MediaUpload
                                onSelect={(media) => {
                                    setAttributes({
                                        [imageAlts]: media.alt,
                                        [imageUrls]: media.url,
                                        [imageIDs]: media.id,
                                    });
                                }}
                                type="image"
                                value={attributes[imageIDs]}
                                render={({open}) => (
                                    <IconButton
                                        label={__('Edit image')}
                                        icon="edit"
                                        onClick={open}
                                    />
                                )}
                            />
                            <IconButton
                                label={__('Remove image')}
                                icon="trash"
                                onClick={() => setAttributes({[imageUrls]: '', [imageIDs]: ''})}
                            />
                        </Toolbar>
                    )
                );
            }
            return newArray;
        };

        const getImageButton = (openEvent, imageUrls, imageIDs) => {
            return (
                <div className={(attributes[imageUrls]) ? `${className}__has-img` : `${className}__avatar`}>
                    <Button onClick={openEvent}>
                        {!attributes[imageUrls] && !attributes[imageIDs] ?
                            <Dashicon icon="format-image"/>
                            :
                            <img
                                src={attributes[imageUrls]}
                                onClick={openEvent}
                                className="team-avatar"
                            />
                        }
                    </Button>
                </div>
            )
        };

        const socialStyles = {
            backgroundColor: socialBgColor,
            color: socialIconColor,
            borderColor: socialBorderColor,
            fontSize: socialIconFz ? socialIconFz + 'px' : undefined,
        };
        
       
        const hasBorderTop = (socialBorderTopRDropCap) ? 'has-border-top' : '';
        

        const openInputField = (name, type, iteration) => {
            let otherSocialLink = 'isFacebookLink' + iteration;
            
            if (type === 'f') {
                otherSocialLink = 'isTwitterLink' + iteration;
            }

            if (type === 't') {
                otherSocialLink = 'isLinkEdinLink' + iteration;
            }

            if (type === 'le') {
                otherSocialLink = 'isTwitterLink' + iteration;
            }
            
            
            setAttributes({
                [name]: !attributes[name], // toggle it
                
                [otherSocialLink]: false
            })
        };


        const createTeamMember = () => {
            let newArray = [];

            for (let i = 1; i <= columns; i++) {
                let teamName = 'name' + i;
                let imageIDs = 'imageID' + i;
                let imageUrls = 'imageUrl' + i;
                let imageAlts = 'imageAlt' + i;
                let designations = 'designation' + i;
                let facebooks = 'facebook' + i;
                let twitters = 'twitter' + i;
                let instagrams = 'instagram' + i;
                let youtubes = 'youtube' + i;
                let linkedins = 'linkedin' + i;
                
                let isFacebookLinkOpen = 'isFacebookLink' + i;
                let isTwitterLinkOpen = 'isTwitterLink' + i;
                let isLinkEdinLinkOpen = 'isLinkEdinLink' + i;
                let isInstagramLinkOpen = 'isInstagramLink' + i;
                let isYoutubeLinkOpen = 'isYoutubeLink' + i;

                newArray.push(
                    <div className={`${className}__single column__${i} nb-mlr-15 nb-flex`}>
                        
                        <MediaUpload
                            onSelect={(media) => {
                                setAttributes({
                                    [imageAlts]: media.alt,
                                    [imageUrls]: media.url,
                                    [imageIDs]: media.id,
                                });
                            }}
                            type="image"
                            className='team-img'
                            value={attributes[imageIDs]}
                            render={({open}) => getImageButton(open, imageUrls, imageIDs)}
                        />

                        <div className={`${ className }__content`} style={boxContentStyles}>
                            <RichText
                                tagName='h2'
                                className='name'
                                value={attributes[teamName]}

                                placeholder={__("Name...")}
                                onChange={(content) => setAttributes({[teamName]: content})}
                                keepPlaceholderOnFocus
                                style={{
                                    color: nameColor,
                                    fontSize: nameFz ? nameFz + 'px' : undefined,
                                }}

                            />
                            <RichText
                                tagName='p'
                                className='designation'
                                value={attributes[designations]}
                                placeholder={__("Designation...")}
                                onChange={(content) => setAttributes({[designations]: content})}
                                keepPlaceholderOnFocus
                                style={{
                                    color: designationColor,
                                    fontSize: fontSize + 'px'
                                }}
                            />
                            { dropcap && (
                            <ul className={`social-iteams ${hasBorderTop}`} style={boxBorderStyle}>
                            <i style={socialStyles} className={`nb-icon-facebook`} onClick={() => {openInputField(isFacebookLinkOpen, 'f', i)}}>
                            </i>
                             {attributes[isFacebookLinkOpen] && (
                                
                                 <form
                                     onSubmit={event => event.preventDefault()}
                                     className={`fb-social-url__${ i }`}
                                 >
                                     <URLInput
                                         value={attributes[facebooks]}
                                         onChange={(value) => setAttributes({[facebooks]: value})}
                                         className='social-url'
                                     />

                                     <IconButton
                                         icon="editor-break"
                                         label={__('Apply')}
                                         type="submit"
                                     />
                                 </form>
                                 
                             )
                             }
                           
                                
                            <i style={socialStyles} className={`nb-icon-twitter`} onClick={() => {openInputField(isTwitterLinkOpen, 't', i)}}>
                            </i>
                            {attributes[isTwitterLinkOpen] && (
                                <form
                                    onSubmit={event => event.preventDefault()}
                                    className={`tw-social-url__${ i }`}
                                >
                                    <URLInput
                                        value={attributes[twitters]}
                                        onChange={(value) => setAttributes({[twitters]: value})}
                                    />
                                    <IconButton
                                        icon="editor-break"
                                        label={__('Apply')}
                                        type="submit"
                                    />
                                </form>
                            )
                            }
                            
                            <i style={socialStyles} className={`nb-icon-linkedin`} onClick={() => {openInputField(isLinkEdinLinkOpen, 'le', i)}}>
                            </i>
                            {attributes[isLinkEdinLinkOpen] && (
                                <form
                                    onSubmit={event => event.preventDefault()}
                                    className={`linkedin-social-url__${ i }`}
                                >
                                    <URLInput
                                        value={attributes[linkedins]}
                                        onChange={(value) => setAttributes({[linkedins]: value})}
                                    />
                                    <IconButton
                                        icon="editor-break"
                                        label={__('Apply')}
                                        type="submit"
                                    />
                                </form>
                            )
                            }
                                <i style={socialStyles} className={`nb-icon-instagram`} onClick={() => {openInputField(isInstagramLinkOpen, 'insta', i)}}>
                                </i>
                                {attributes[isInstagramLinkOpen] && (
                                    <form
                                        onSubmit={event => event.preventDefault()}
                                        className={`instagram-social-url__${ i }`}
                                    >
                                        <URLInput
                                            value={attributes[instagrams]}
                                            onChange={(value) => setAttributes({[instagrams]: value})}
                                        />
                                        <IconButton
                                            icon="editor-break"
                                            label={__('Apply')}
                                            type="submit"
                                        />
                                    </form>
                                )
                                }

                                <i style={socialStyles} className={`nb-icon-youtube`} onClick={() => {openInputField(isYoutubeLinkOpen, 'yt', i)}}>
                                </i>
                                {attributes[isYoutubeLinkOpen] && (
                                    <form
                                        onSubmit={event => event.preventDefault()}
                                        className={`youtube-social-url__${ i }`}
                                    >
                                        <URLInput
                                            value={attributes[youtubes]}
                                            onChange={(value) => setAttributes({[youtubes]: value})}
                                        />
                                        <IconButton
                                            icon="editor-break"
                                            label={__('Apply')}
                                            type="submit"
                                        />
                                    </form>
                                )
                                }
                            
                            </ul>
                            )}
                           
                            
                        </div>
                    </div>
                );
            }
            return newArray;
        };

        const boxContentStyles = {
            backgroundColor: boxBgColor,
            borderColor: boxBorderColor,
        };
        
        const boxBorderStyle = {
            borderColor: boxBorderColor,
        };

        return (
            <TeamMember {...this.props}>
                <BlockControls>
                    <AlignmentToolbar
                        value={align}
                        onChange={(nextAlign) => {
                            setAttributes({align: nextAlign});
                        }}
                    />
                    {createTeamMemberImageOption()}
                </BlockControls>

                <Inspector
                    {...{setAttributes, ...this.props}}
                />

                <div className={`${ className }__wrapper nb-row nb-d-flex`}>
                    {createTeamMember()}
                </div>
            </TeamMember>
        );

    }
}