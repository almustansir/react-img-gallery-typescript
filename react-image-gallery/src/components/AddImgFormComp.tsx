import { useState } from 'react';
import { Image } from '../types';
import {v4 as uuidv4} from 'uuid';

interface IAddImgFormCompProps {
    handleAddImg?: (newImg: Image) => void
}

const AddImgFormComp: React.FunctionComponent<IAddImgFormCompProps> = ({ handleAddImg } : IAddImgFormCompProps) => {
    const [ newImageVarr, setNewImageVarr ] = useState<Image>({
        id: "",
        title: "",
        imgAlt: "",
        imgLink: ""
    })
    

    return(
        <div>
            <form onSubmit={(e) => {
                // prevents default behavior
                e.preventDefault()

                // sending data back to App.tsx
                handleAddImg?.(newImageVarr)
                console.log("submitted")

                // clearing iinput field
                setNewImageVarr({
                    id: "",
                    title: "",
                    imgAlt: "",
                    imgLink: ""
                })
                console.log("cleared");

            }}>
                <label>
                    Image Title:
                    <input
                        type="text"
                        name="title"
                        placeholder='Title'
                        value={newImageVarr.title}
                        onChange={(e) => {setNewImageVarr({ ...newImageVarr, title: e.target.value})}}
                        />
                </label>
                <label>
                    Image Alt:
                    <input
                        type="text"
                        name="alt"
                        placeholder="Alt"
                        value={newImageVarr.imgAlt}
                        onChange={(e) => {setNewImageVarr({ ...newImageVarr, imgAlt: e.target.value })}}
                        />
                </label>
                <label>
                    Image Link:
                    <input
                        type="text"
                        name="link"
                        placeholder="link"
                        value={newImageVarr.imgLink}
                        onChange={(e) => {setNewImageVarr({ ...newImageVarr, imgLink: e.target.value })}}
                    />
                </label>
                <input type="submit" value="Submit" onClick={() => {setNewImageVarr({ ...newImageVarr, id: uuidv4()})}} />
            </form>
        </div>
    );
};

export default AddImgFormComp;
