/**
 * Created by Christophe on 10/03/2017.
 */
import {Sprite} from "blip-framework/compiled/core/display/sprite.class";
import {File} from "blip-framework/compiled/core/files/file.class";

var ff:File = new File("files/sprites/p4-body.png");
var sp:Sprite = new Sprite(ff, 20, 20);
sp.displayInDOMElement(document.body);