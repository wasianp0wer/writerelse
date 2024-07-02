import { deserialize } from 'v8';
import { ConfigRules } from '../model/config/config-rules';
import { Config } from 'electron';
import { OnInit } from '@angular/core';

export class DslConfigUtil {

  static testConfig: string = `{
   "name":"Screenplay",
   "sceneDelimeter":"slug",
   "actDelimeter":"act",
   "characterIdentifier":"character",
   "validStarts":["slug", "transition"],
   "elements":{
      "slug":{
         "name":"slug",
         "followedBy":[
            "action",
            "character"
         ],
         "capitalization":"ALL_CAPS",
         "segmentDelimeter":" - ",
         "segments":[
            {
               "defaultSuggestions":[
                  "INT.",
                  "EXT.",
                  "I/E."
               ],
               "useSuggestionsFromPrevious":true
            },
            {
               "useSuggestionsFromPrevious":true
            },
            {
               "defaultSuggestions":[
                  "DAY",
                  "NIGHT",
                  "EVENING",
                  "MORNING",
                  "CONTINUOUS"
               ],
               "useSuggestionsFromPrevious":true
            }
         ]
      },
      "action":{
         "name":"action",
         "followedBy":[
            "slug",
            "character",
            "action",
            "transition"
         ]
      },
      "character":{
         "name":"character",
         "followedBy":[
            "parenthetical",
            "dialogue"
         ],
         "capitalization":"ALL_CAPS",
         "useSuggestionsFromPrevious":true,
         "indentation":1.3
      },
      "dialogue":{
         "name":"dialogue",
         "followedBy":[
            "character",
            "action",
            "slug",
            "parenthetical",
            "transition"
         ],
         "indentation":1.3
      },
      "parenthetical":{
         "name":"parenthetical",
         "followedBy":[
            "dialogue"
         ],
         "capitalization":"NO_CAPS",
         "indentation":1.6
      },
      "transition":{
         "name":"transition",
         "followedBy":[
            "slug"
         ],
         "capitalization":"ALL_CAPS",
         "defaultSuggestions": [
            "CUT TO:",
            "SMASH CUT:",
            "FADE TO:",
            "FADE IN:",
            "FADE TO BLACK"
         ],
          "useSuggestionsFromPrevious":true,
         "indentation":4.5
      }
   }
}`;

  static test() {
    const test = new ConfigRules(this.testConfig);
    console.log(test);
    console.log(test.pageHeight);
  }

  static getCurrentConfig() {
    return new ConfigRules(this.testConfig);
  }
}
