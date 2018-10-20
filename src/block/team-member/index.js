// import all depedencies components
import TeamMember from './components/team';
import edit from './components/teamedit';
import SocialItems from './components/social';

const {__} = wp.i18n;
const {registerBlockType} = wp.blocks;
const {RichText, URLInput, BlockIcon} = wp.editor;
const {IconButton, Placeholder} = wp.components;



import './style.scss';
import './editor.scss';


registerBlockType('ninja-blocks/team-member', {
    title: __('NB Team Member'),
    icon: 'groups',
    category: 'ninja-blocks',
    keywords: [
        __('team-mate'),
        __('fellow'),
        __('worker'),
    ],
    attributes: {
        align: {
            type: 'string',
            default: 'nb-text-center'
        },
        imageShape: {
            type: 'string',
            default: 'square'
        },
        imageID1: {
            type: 'number',
            default: '',
        },
        imageID2: {
            type: 'number',
            default: '',
        },
        imageID3: {
            type: 'number',
            default: '',
        },
        imageID4: {
            type: 'number',
            default: '',
        },
        imageUrl1: {
            type: 'string',
            source: 'attribute',
            selector: '.column__1 .team-img',
            attribute: 'src',
            default: '',
        },
        imageUrl2: {
            type: 'string',
            source: 'attribute',
            selector: '.column__2 .team-img',
            attribute: 'src',
            default: '',
        },
        imageUrl3: {
            type: 'string',
            source: 'attribute',
            selector: '.column__3 .team-img',
            attribute: 'src',
            default: '',
        },
        imageUrl4: {
            type: 'string',
            source: 'attribute',
            selector: '.column__4 .team-img',
            attribute: 'src',
            default: '',
        },
        imageAlt1: {
            type: 'string',
            source: 'attribute',
            selector: '.column__1 .team-img',
            attribute: 'alt',
            default: '',
        },
        imageAlt2: {
            type: 'string',
            source: 'attribute',
            selector: '.column__2 .team-img',
            attribute: 'alt',
            default: '',
        },
        imageAlt3: {
            type: 'string',
            source: 'attribute',
            selector: '.column__3 .team-img',
            attribute: 'alt',
            default: '',
        },
        imageAlt4: {
            type: 'string',
            source: 'attribute',
            selector: '.column__4 .team-img',
            attribute: 'alt',
            default: '',
        },
        name1: {
            type: 'array',
            source: 'children',
            selector: '.column__1 .name',
            default: '',
        },
        name2: {
            type: 'array',
            source: 'children',
            selector: '.column__2 .name',
            default: '',
        },
        name3: {
            type: 'array',
            source: 'children',
            selector: '.column__3 .name',
            default: '',
        },
        name4: {
            type: 'array',
            source: 'children',
            selector: '.column__4 .name',
            default: '',
        },
        designation1: {
            type: 'array',
            source: 'children',
            selector: '.column__1 .designation'
        },
        designation2: {
            type: 'array',
            source: 'children',
            selector: '.column__2 .designation'
        },
        designation3: {
            type: 'array',
            source: 'children',
            selector: '.column__3 .designation'
        },
        designation4: {
            type: 'array',
            source: 'children',
            selector: '.column__4 .designation'
        },
        nameColor: {
            type: 'string',
            default: ''
        },
        designationColor: {
            type: 'string',
            default: ''
        },
        nameFz: {
            type: 'number',
            default: 24
        },
        fontSize: {
            type: 'string',
            default: 14
        },
        facebook1: {
            type: 'string',
            source: 'attribute',
            selector: '.column__1 .fb-social-url__1',
            attribute: 'href',
            default: '#',
        },
        facebook2: {
            type: 'string',
            source: 'attribute',
            selector: '.column__2 .fb-social-url__2',
            attribute: 'href',
            default: '',
        },
        facebook3: {
            type: 'string',
            source: 'attribute',
            selector: '.column__3 .fb-social-url__3',
            attribute: 'href',
            default: '',
        },
        facebook4: {
            type: 'string',
            source: 'attribute',
            selector: '.column__4 .fb-social-url__4',
            attribute: 'href',
            default: '',
        },
        twitter1: {
            type: 'string',
            source: 'attribute',
            selector: '.column__1 .tw-social-url__1',
            attribute: 'href',
            default: '#',
        },
        twitter2: {
            type: 'string',
            source: 'attribute',
            selector: '.column__2 .tw-social-url__2',
            attribute: 'href',
            default: '',
        },
        twitter3: {
            type: 'string',
            source: 'attribute',
            selector: '.column__3 .tw-social-url__3',
            attribute: 'href',
            default: '',
        },
        twitter4: {
            type: 'string',
            source: 'attribute',
            selector: '.column__4 .tw-social-url__4',
            attribute: 'href',
            default: '',
        },
        linkedin1: {
            type: 'string',
            source: 'attribute',
            selector: '.column__1 .linkedin-social-url__1',
            attribute: 'href',
            default: '#',
        },
        linkedin2: {
            type: 'string',
            source: 'attribute',
            selector: '.column__2 .linkedin-social-url__2',
            attribute: 'href',
            default: '',
        },
        linkedin3: {
            type: 'string',
            source: 'attribute',
            selector: '.column__3 .linkedin-social-url__3',
            attribute: 'href',
            default: '',
        },
        linkedin4: {
            type: 'string',
            source: 'attribute',
            selector: '.column__4 .linkedin-social-url__4',
            attribute: 'href',
            default: '',
        },
        instagram1: {
            type: 'string',
            source: 'attribute',
            selector: '.column__1 .instagram-social-url__1',
            attribute: 'href',
            default: '#',
        },
        instagram2: {
            type: 'string',
            source: 'attribute',
            selector: '.column__2 .instagram-social-url__2',
            attribute: 'href',
            default: '',
        },
        instagram3: {
            type: 'string',
            source: 'attribute',
            selector: '.column__3 .instagram-social-url__3',
            attribute: 'href',
            default: '',
        },
        instagram4: {
            type: 'string',
            source: 'attribute',
            selector: '.column__4 .instagram-social-url__4',
            attribute: 'href',
            default: '',
        },
        youtube1: {
            type: 'string',
            source: 'attribute',
            selector: '.column__1 .youtube-social-url__1',
            attribute: 'href',
            default: '',
        },
        youtube2: {
            type: 'string',
            source: 'attribute',
            selector: '.column__2 .youtube-social-url__2',
            attribute: 'href',
            default: '',
        },
        youtube3: {
            type: 'string',
            source: 'attribute',
            selector: '.column__3 .youtube-social-url__3',
            attribute: 'href',
            default: '',
        },
        youtube4: {
            type: 'string',
            source: 'attribute',
            selector: '.column__4 .youtube-social-url__4',
            attribute: 'href',
            default: '',
        },
        dropcap: {
            type: 'boolean',
            default: true
        },
        buttonStyle: {
            type: 'string',
            default: 'icon'
        },
        socialBgColor: {
            type: 'string',
            default: ''
        },
        socialBorderColor: {
            type: 'string',
            default: ''
        },
        socialIconColor: {
            type: 'string',
            default: ''
        },
        socialIconFz: {
            type: 'number',
            default: 16
        },
        socialBorderTopRDropCap: {
            type: 'boolean',
            default: true
        },
        boxBgColor: {
            type: 'string',
            default: ''
        },
        boxBorderColor: {
            type: 'string',
            default: ''
        },
        columns: {
            type: 'select',
            default: '2'
        },
        isFacebookLink1: {
            type: 'boolean',
            default: false
        },
        isFacebookLink2: {
            type: 'boolean',
            default: false
        },
        isFacebookLink3: {
            type: 'boolean',
            default: false
        },
        isFacebookLink4: {
            type: 'boolean',
            default: false
        },
        isTwitterLink1: {
            type: 'boolean',
            default: false
        },
        isTwitterLink2: {
            type: 'boolean',
            default: false
        },
        isTwitterLink3: {
            type: 'boolean',
            default: false
        },
        isTwitterLink4: {
            type: 'boolean',
            default: false
        },
        isLinkEdinLink1: {
            type: 'boolean',
            default: false
        },
        isLinkEdinLink2: {
            type: 'boolean',
            default: false
        },
        isLinkEdinLink3: {
            type: 'boolean',
            default: false
        },
        isLinkEdinLink4: {
            type: 'boolean',
            default: false
        },
        isInstagramLink1: {
            type: 'boolean',
            default: false
        },
        isInstagramLink2: {
            type: 'boolean',
            default: false
        },
        isInstagramLink3: {
            type: 'boolean',
            default: false
        },
        isInstagramLink4: {
            type: 'boolean',
            default: false
        },
        isYoutubeLink1: {
            type: 'boolean',
            default: false
        },
        isYoutubeLink2: {
            type: 'boolean',
            default: false
        },
        isYoutubeLink3: {
            type: 'boolean',
            default: false
        },
        isYoutubeLink4: {
            type: 'boolean',
            default: false
        },
    },


    edit,

    save(props) {

        const {
            attributes:
                {
                    name1, name2, name3, name4, nameColor, nameFz, designation1, designation2, designation3, designation4, designationColor, imageUrl1, imageUrl2, imageUrl3, imageUrl4, imageAlt1, imageAlt2, imageAlt3, imageAlt4, fontSize, boxBgColor, boxBorderColor,columns, facebook1, facebook2, facebook3, facebook4, twitter1, twitte2, twitter3, twitter4, instagram1, instagram2, instagram3, instagram4, youtube1, youtube2, youtube3, youtube4,linkedin1,linkedin2,linkedin3,linkedin4, dropcap, socialBorderTopRDropCap, socialBgColor, socialIconColor, socialIconFz,socialBorderColor,},
            attributes
        } = props;

        const boxContentStyles = {
            backgroundColor: boxBgColor,
            borderColor: boxBorderColor,
        };

        const boxBorderStyle = {
            borderColor: boxBorderColor,
        };
        
        const socialStyles = {
            backgroundColor: socialBgColor,
            color: socialIconColor,
            borderColor: socialBorderColor,
            fontSize: socialIconFz ? socialIconFz + 'px' : undefined,
        };

        const hasBorderTop = (socialBorderTopRDropCap) ? 'has-border-top' : '';

        const saveComponents = () => {
            let memberArray = [];
            for (let i = 1; i <= columns; i++) {
                let imageUrls = 'imageUrl' + i;
                let imageAlts = 'imageAlt' + i;
                let teamName = 'name' + i;
                let designations = 'designation' + i;
                let facebooks = 'facebook' + i;
                let twitters = 'twitter' + i;
                let instagrams = 'instagram' + i;
                let youtubes = 'youtube' + i;
                let linkedins = 'linkedin' + i;

                memberArray.push(
                    <div className={`wp-block-ninja-blocks-team-member__single column__${i} nb-mlr-15 nb-flex`}>
                        {attributes[imageUrls] && (
                            <img
                                className="team-img"
                                src={attributes[imageUrls]}
                                alt={attributes[imageAlts]}
                            />

                        )}
                        <div className={`wp-block-ninja-blocks-team-member__content`} style={boxContentStyles}>
                            {attributes[teamName] && !!attributes[teamName].length && (
                                <RichText.Content
                                    tagName='h2'
                                    className='name'
                                    value={attributes[teamName]}
                                    style={{
                                        color: nameColor,
                                        fontSize: nameFz ? nameFz + 'px' : undefined,
                                    }}
                                />
                            )}
                            {attributes[designations] && !!attributes[designations].length && (
                                <RichText.Content
                                    tagName='p'
                                    className='designation'
                                    value={attributes[designations]}
                                    style={{
                                        color: designationColor,
                                        fontSize: fontSize ? fontSize + 'px' : undefined,
                                    }}
                                />
                            )}
                            {dropcap && (
                            <ul className={`social-iteams ${hasBorderTop}`} style={boxBorderStyle}>
                                {!!attributes[facebooks].length && (
                                <a href={ attributes[facebooks] } className={`fb-social-url__${ i }`}>
                                    <i style={socialStyles} className={`nb-icon-facebook`}>
                                    </i>
                                </a>
                                )}
                                {!!attributes[twitters].length && (
                                <a href={attributes[twitters]} className={`tw-social-url__${ i }`}>
                                    <i style={socialStyles} className={`nb-icon-twitter`}>
                                    </i>
                                </a>
                                )}
                                {!!attributes[linkedins].length && (
                                <a href={attributes[linkedins]} className={`linkedin-social-url__${ i }`}>
                                    <i style={socialStyles} className={`nb-icon-linkedin`}>
                                    </i>
                                </a>
                                )}
                                {!!attributes[instagrams].length && (
                                    <a href={attributes[instagrams]} className={`instagram-social-url__${ i }`}>
                                        <i style={socialStyles} className={`nb-icon-instagram`}>
                                        </i>
                                    </a>
                                )}
                                
                                {!!attributes[youtubes].length && (
                                    <a href={attributes[youtubes]} className={`youtube-social-url__${ i }`}>
                                        <i style={socialStyles} className={`nb-icon-youtube`}>
                                        </i>
                                    </a>
                                )}
                              
                            </ul>
                            )}
                          
                            
                        </div>
                    </div>
                );
            }

            return memberArray;

        };


        return (
            <TeamMember {...props}>
                <div className={`wp-block-ninja-blocks-team-member__wrapper nb-row nb-d-flex`}>
                    {saveComponents()}
                </div>
            </TeamMember>
        );

    }

});