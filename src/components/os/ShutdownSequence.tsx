import React, { useState, useEffect } from 'react';
import neverGiveUp from '../../assets/pictures/neverGiveUp.jpg';
import eePic from '../../assets/pictures/ee.jpg';

export interface ShutdownSequenceProps {
    numShutdowns: number;
    setShutdown: React.Dispatch<React.SetStateAction<boolean>>;
}

const SPEED_MULTIPLIER = 1;

const _F = `>${200 * SPEED_MULTIPLIER}<`;
const _X = `>${500 * SPEED_MULTIPLIER}<`;
const _S = `>${1000 * SPEED_MULTIPLIER}<`;
const _M = `>${2000 * SPEED_MULTIPLIER}<`;
const _L = `>${5000 * SPEED_MULTIPLIER}<`;

function delay(time: number) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time);
    });
}

const ShutdownSequence: React.FC<ShutdownSequenceProps> = ({
    numShutdowns,
    setShutdown,
}) => {
    const [text, setText] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);
    const [ee, setEE] = useState(false);

    const getTime = () => {
        const date = new Date();
        const h = date.getHours();
        const m = date.getMinutes();
        const s = date.getSeconds();
        const time =
            h + ':' + (m < 10 ? '0' + m : m) + ':' + (s < 10 ? '0' + s : s);
        return time;
    };

    const NORMAL_SHUTDOWN = `Beginning Pedro-OS v2.0 Shutdown Sequence... ${_F}
    Connecting to PELAP-SERVER/2025:8080.${_F}.${_F}.${_F}
    |
    Established connection to PELAP-SERVER/2025:8080, attempting portfolio data transfer.
    |
    ${_F}
    |Analyzing projects... Done.| ${_F}
    |Packing military experience... Done.| ${_F}
    |Beginning leadership skills transfer...| ${_F}
    |[${getTime()} START]| .${_F}.....${_X}.|............|.${_S}.|......|.${_S}...........${_M} |[Transfer Failed.]|


    |(PELAP-SERVER/2025:8080:404) [DEP_PORTFOLIO_SERVER_MIDDLEWARE] InvalidCredentials: 'onMilitaryExperienceTransfer' option received invalid parameters. Please contact Pedro to resolve the issue.|
    ${_F}
    |(PELAP-SERVER/2025:8080:404) [SOCKET_ARMY_CONNECTION] Connection Refused: Reconnecting... [${getTime()}:00]|
    |(PELAP-SERVER/2025:8080:404) [SOCKET_ARMY_CONNECTION] Connection Refused: Reconnecting... [${getTime()}:01]
    (PELAP-SERVER/2025:8080:404) [SOCKET_ARMY_CONNECTION] Connection Refused: Reconnecting... [${getTime()}:03]
    (PELAP-SERVER/2025:8080:404) [SOCKET_ARMY_CONNECTION] Connection Refused: Reconnecting... [${getTime()}:05]
    (PELAP-SERVER/2025:8080:404) [SOCKET_ARMY_CONNECTION] Connection Refused: Reconnecting... [${getTime()}:08]
    (PELAP-SERVER/2025:8080:404) [SOCKET_ARMY_CONNECTION] Connection Refused: Reconnecting... [${getTime()}:12]
    (PELAP-SERVER/2025:8080:404) [SOCKET_ARMY_CONNECTION] Connection Refused: Reconnecting... [${getTime()}:14]
    FATAL ERROR: (PELAP-SERVER/2025:8080:404) Server became unresponsive and the portfolio transfer failed. Unable to shutdown computer. 
    |
    Aborting shutdown sequence and rebooting.




    Rebooting${_S}.${_S}.${_S}.
    `;

    const SHUTDOWN_3 = `
    Well${_S}.${_S}.${_S}. ${_M} You really wanna shutdown my portfolio huh?${_L}
    Well, I hate to break it to you,${_S} but its impossible to shutdown...${_S} It will always reboot.
    ${_M}
    I see you there, determined little clicker. Did you think it would be that easy?${_S}
    This is a developer's portfolio, not some random computer!${_M}
    ${_L}
    |Goodbye from Portugal!|
    ${_M}

    Rebooting${_S}.${_S}.${_S}.
    `;

    const SHUTDOWN_4 = `
    Did you not read the last message?${_S} This portfolio will A${_F}L${_F}W${_F}A${_F}Y${_F}S${_F} reboot, the shutdown sequence is just here for show. It's not actually doing anything.
    ${_M}
    I literally spent months developing this website to showcase my journey from military service to tech.
    You can listen to my favorite playlist, play Minecraft, play DOOM, or explore my other projects... but all you wanna do is shut the computer down.
    ${_M}
    Are you the type of person who skips to the end of movies too?${_S} 
    Come on, at least check out my React skills or something!${_M}
    ${_L}
    |Tchau! (That's goodbye in Portuguese!)|
    ${_M}

    Rebooting${_S}.${_S}.${_S}.
    `;

    const SHUTDOWN_5 = `
    Really${_X}?${_X}?${_X}?
    ${_M}
    What did I do to deserve this? ${_M}I just finished my military service and wanted to show my coding skills!
    ${_M}
    You know what? I bet you're the same person who closes Netflix after 2 seconds of browsing.${_S}
    The commitment to avoiding my awesome content is... honestly impressive.${_M}
    ${_L}
    
    Rebooting${_F}.${_F}.${_F}.
    `;

    const SHUTDOWN_6 = `
    ${_M}>${_M}:${_M}(${_M}

    You know what?${_M} I'm not even mad anymore.${_M} I'm just... disappointed.${_L}
    
    You've literally clicked shutdown 6 times now.${_S} SIX TIMES!${_M}
    That's more dedication than some people put into their actual jobs.${_M}
    At this point, you're basically speedrunning my shutdown sequence.${_S}

    Rebooting${_F}.${_F}.${_F}.
    `;

    const SHUTDOWN_7 = `
    7th shutdown... lucky number 7! ${_M}

    In honor of this HUGE milestone, let me try to provide some entertainment! ${_M}Counting one by one to my all time favorite number:
    ${_L}
    1${_M},337${_M} (that's LEET in leet speak - very programmer-y!)
    ${_M} Strap in! ${_S} | [Time remaining: Approximately 2,674 hours (0.5 numbers/second)]|

    1${_M},2${_M},3${_M},4${_M},5${_M},6${_M},7${_M},8${_M},9${_M},10${_M},11${_M},12${_M},13${_S}.${_S}.${_S}.

    Alright I'm bored...${_S} You know what's funny? You've now spent more time trying to shut down my portfolio than most recruiters spend reading CVs.${_M}
    ${_M}
    
    Rebooting${_F}.${_F}.${_F}.
    `;

    const SHUTDOWN_8 = `
    Your commitment is admirable,${_S} truly. ${_M}And even though I don't want you to turn off my awesome portfolio showcasing my transition from Portuguese Army to Full Stack Developer, ${_M} I think I'm ready to concede. ${_M}
    ${_M}
    Wait... are you actually trying to find all the shutdown messages?${_S}
    You absolute legend! Most people give up after 3 attempts.${_M}
    You're like the Dark Souls player of portfolio browsing!${_L}

    ${_L}
    |GOTCHA!!!|

    Rebooting${_F}.${_F}.${_F}.
    `;

    const SHUTDOWN_10 = `
    Alright fine, the message is clear${_M}. You want to turn off the portfolio. ${_M}

    You win${_S}.${_S}.${_S}.${_S} fair and square ${_M}

    Truthfully I can't keep on spending time writing out these messages...${_M} and if the world you want to live in is a world without my epic portfolio showcasing my journey from PELAP commander to aspiring developer, ${_M}so be it.
    ${_M}
    But seriously, you just clicked shutdown TEN times.${_S} TEN!${_M}
    You deserve some kind of award for persistence.${_S} Or maybe therapy.${_M}
    Either way, I respect the dedication.${_L}

    ${_L}
    I won't forget you... whoever you are, sitting there clicking shutdown like it's your job!
    ${_L}

    Shutting${_M} Down${_M}.${_M}.${_M}.
    `;

    const SHUTDOWN_MAP = [
        NORMAL_SHUTDOWN,
        NORMAL_SHUTDOWN,
        NORMAL_SHUTDOWN,
        SHUTDOWN_3,
        SHUTDOWN_4,
        SHUTDOWN_5,
        SHUTDOWN_6,
        SHUTDOWN_7,
        SHUTDOWN_8,
        '',
        SHUTDOWN_10,
    ];

    const typeText = (
        i: number,
        curText: string,
        text: string,
        setText: React.Dispatch<React.SetStateAction<string>>,
        callback: () => void,
        refOverride?: React.MutableRefObject<string>
    ) => {
        if (refOverride) {
            text = refOverride.current;
        }
        let delayExtra = 0;
        if (i < text.length) {
            if (text[i] === '|') {
                let dumpText = '';
                for (let j = i + 1; j < text.length; j++) {
                    if (text[j] === '|') {
                        i = j + 1;
                        break;
                    }
                    dumpText += text[j];
                }
                setText(curText + dumpText);
                typeText(
                    i,
                    curText + dumpText,
                    text,
                    setText,
                    callback,
                    refOverride
                );
                return;
            }
            if (text[i] === '>') {
                let delayTime = '';
                for (let j = i + 1; j < text.length; j++) {
                    if (text[j] === '<') {
                        i = j + 1;
                        break;
                    }
                    delayTime += text[j];
                }
                delayExtra = parseInt(delayTime);
            }

            setTimeout(() => {
                setText(curText + text[i]);
                typeText(
                    i + 1,
                    curText + text[i],
                    text,
                    setText,
                    callback,
                    refOverride
                );
            }, 20 + delayExtra);
        } else {
            callback();
        }
    };

    useEffect(() => {
        delay(2000).then(() => {
            setLoading(false);
            delay(1000).then(() => {
                const shutdown = SHUTDOWN_MAP[numShutdowns];
                if (numShutdowns === 9) {
                    delay(10000).then(() => {
                        setLoading(true);
                        delay(6000).then(() => {
                            setShutdown(false);
                        });
                    });
                } else if (numShutdowns === 10) {
                    typeText(0, '', shutdown, setText, () => {
                        setLoading(true);
                        delay(6000).then(() => {
                            setLoading(false);
                            setEE(true);
                        });
                    });
                } else {
                    typeText(0, '', shutdown, setText, () => {
                        setLoading(true);
                        delay(6000).then(() => {
                            setShutdown(false);
                        });
                    });
                }
            });
        });
        // eslint-disable-next-line
    }, []);

    return ee ? (
        <div style={styles.imageContainer}>
            <img src={eePic} style={styles.img} alt="" />
        </div>
    ) : loading ? (
        <div style={styles.shutdown}>
            <div className="blinking-cursor" />
        </div>
    ) : numShutdowns === 10 ? (
        <div style={styles.imageContainer}>
            <img src={neverGiveUp} style={styles.img} alt="" />
        </div>
    ) : (
        <div style={styles.shutdown}>
            <p style={styles.text}>{text}</p>
        </div>
    );
};

const styles: StyleSheetCSS = {
    shutdown: {
        minHeight: '100%',
        flex: 1,
        backgroundColor: '#212121',
        padding: 64,
    },
    text: {
        color: 'white',
        fontFamily: 'monospace',
        whiteSpace: 'pre-line',
    },
    imageContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#212121',
        padding: 64,
    },
    img: {
        width: 1000,
        height: 700,
    },
};

export default ShutdownSequence;