this.manifest = {
    "name": "Font Settings for Google Reader",
    "icon": "icon.png",
    "settings": [
        {
          "tab": 'Presets',
          "name": "presetDefault",
          "type": "button",
          "text": 'Default'
        },
        {
          "tab": 'Presets',
          "name": "presetEasyRead",
          "type": "button",
          "text": 'Easy read'
        },
        {
          "tab": "Font",
          "group": "Font face",
          "name": "fontFamily",
          "type": "radioButtons",
          "options": [
              ["default", "Default (no change)"],
              ["Georgia, Times, Times New Roman, serif", "Serif"],
              ["Verdana, Helvetica, Arial, sans-serif", "Sans serif"],
              ["custom", "Custom"]
          ]
        },
        {
          "tab": "Font",
          "group": "Font face",
          "name": "fontFamilyCustom",
          "type": "text",
          "label": "Custom font face",
          "text": "Comic Sans MS"
        },
        {
          "tab": "Font",
          "group": "Font size",
          "name": "fontSize",
          "type": "slider",
          "max": 40,
          "min": 8,
          "step": 1,
          "display": true,
          "displayModifier": function (value) {
              return value+" px";
          }
        },
        {
          "tab": "Font",
          "group": "Line height",
          "name": "lineHeight",
          "type": "slider",
          "max": 3.0,
          "min": 1.0,
          "step": 0.1,
          "display": true,
          "displayModifier": function (value) {
              return value.toFixed(1)+" em";
          }
        },
        {
          "tab": "Page",
          "group": "Page width",
          "name": "pageWidth",
          "type": "slider",
          "max": 1600,
          "min": 800,
          "step": 40,
          "display": true,
          "displayModifier": function (value) {
              if (value == 1600) {
                return 'Full screen width';
              } else {
                return value.toFixed(0)+" px";
              }
          }
        },
        {
          "tab": "Page",
          "group": "Text alignment",
          "name": "textAlign",
          "type": "radioButtons",
          "options": [
              ["left", "Left"],
              ["justify", "Justify"],
              ["right", "Right"],
              ["center", "Center"]
          ]
        }
/*        {
            "tab": i18n.get("information"),
            "group": i18n.get("login"),
            "name": "username",
            "type": "text",
            "label": i18n.get("username"),
            "text": i18n.get("x-characters")
        },
        {
            "tab": i18n.get("information"),
            "group": i18n.get("login"),
            "name": "password",
            "type": "text",
            "label": i18n.get("password"),
            "text": i18n.get("x-characters-pw"),
            "masked": true
        },
        {
            "tab": i18n.get("information"),
            "group": i18n.get("login"),
            "name": "myDescription",
            "type": "description",
            "text": i18n.get("description")
        },
        {
            "tab": i18n.get("information"),
            "group": i18n.get("logout"),
            "name": "myCheckbox",
            "type": "checkbox",
            "label": i18n.get("enable")
        },
        {
            "tab": i18n.get("information"),
            "group": i18n.get("logout"),
            "name": "myButton",
            "type": "button",
            "label": i18n.get("disconnect"),
            "text": i18n.get("logout")
        },
        {
            "tab": "Details",
            "group": "Sound",
            "name": "noti_volume",
            "type": "slider",
            "label": "Notification volume:",
            "max": 1,
            "min": 0,
            "step": 0.01,
            "display": true,
            "displayModifier": function (value) {
                return (value * 100).floor() + "%";
            }
        },
        {
            "tab": "Details",
            "group": "Sound",
            "name": "sound_volume",
            "type": "slider",
            "label": "Sound volume:",
            "max": 100,
            "min": 0,
            "step": 1,
            "display": true,
            "displayModifier": function (value) {
                return value + "%";
            }
        },
        {
            "tab": "Details",
            "group": "Food",
            "name": "myPopupButton",
            "type": "popupButton",
            "label": "Soup 1 should be:",
            "options": [
                ["hot", "Hot and yummy"],
                ["cold"]
            ]
        },
        {
            "tab": "Details",
            "group": "Food",
            "name": "myListBox",
            "type": "listBox",
            "label": "Soup 2 should be:",
            "options": [
                ["hot", "Hot and yummy"],
                ["cold"]
            ]
        },
        {
            "tab": "Details",
            "group": "Food",
            "name": "myRadioButtons",
            "type": "radioButtons",
            "label": "Soup 3 should be:",
            "options": [
                ["hot", "Hot and yummy"],
                ["cold"]
            ]
        }
*/
    ],
    "alignment": [
/*        [
            "username",
            "password"
        ],
        [
            "noti_volume",
            "sound_volume"
        ]*/
    ]
};
