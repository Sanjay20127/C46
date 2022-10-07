const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;
const Body= World.Body;
const Constraint=Matter.Constraint;
const Mouse= Matter.Mouse;
const MouseConstraint= Matter.MouseConstraint;
var engine, world;

var canvas;
var ground, platform, bgImg;
function preload(){
bgImg= loadImage("assets/background_1.png");
}

function setup(){
canvas= createCanvas(1200,600);
canvas.position(15,70);
engine= Engine.create();
world= engine.world;
ground= new Ground(600, height,1200,100);
platform= new Ground(150,height-120,300,170);

}

function draw(){
background(bgImg);
Engine.update(engine);
ground.display();
platform.display();
}