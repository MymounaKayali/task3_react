import React from 'react';
import Styles from './photo.module.css'

function Photo() {

    const arr = 
    [
        {
            id:1 ,
            imgsrc:'../../Images/1.jpg' ,
            text: "photo1"
        } ,
        {
            id:2 ,
            imgsrc: '../../Images/2.jpg' ,
            text: "photo2"
        } ,
        {
            id:3 ,
            imgsrc: '../../Images/3.jpg' ,
            text: "photo3"
        } , 
        {
            id:4 ,
            imgsrc: '../../Images/4.jpg' ,
            text: "photo4"
        } ,
        {
            id:5 ,
            imgsrc: '../../Images/5.jpg' ,
            text: "photo5"
        } ,
        {
            id:6 ,
            imgsrc: '../../Images/6.jpg' ,
            text: "photo6"
        } ,
        {
            id:7 ,
            imgsrc: '../../Images/7.jpg' ,
            text: "photo7"
        } , 
        {
            id:8 ,
            imgsrc: '../../Images/8.jpg' ,
            text: "photo8"
        } ,
        {
            id:9 ,
            imgsrc: '../../Images/9.jpg' ,
            text: "photo9"
        } ,
        {
            id:10 ,
            imgsrc: '../../Images/10.jpg' ,
            text: "photo10"
        }

    ]


    return (
        arr.map((ar) =>
    
            <div className={Styles.divimg}>
                <img src={ar.imgsrc} alt='' className={Styles.img} ></img>
                <br></br>
                <text className={Styles.text}>{ar.text}</text>
            </div>
        )
    )
}

export default Photo
