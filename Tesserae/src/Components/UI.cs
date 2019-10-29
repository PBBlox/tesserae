﻿namespace Tesserae.Components
{
    public static class UI
    {
        public static Stack Stack(StackOrientation orientation = StackOrientation.Vertical)
        {
            return new Stack(orientation);
        }
        public static Button Button(string text = string.Empty)
        {
            return new Button(text);
        }

        public static CheckBox CheckBox(string text = string.Empty)
        {
            return new CheckBox(text);
        }

        public static Toggle Toggle(string text = string.Empty)
        {
            return new Toggle(text);
        }

        public static TextBlock TextBlock(string text = string.Empty)
        {
            return new TextBlock(text);
        }

        public static TextBox TextBox(string text = string.Empty)
        {
            return new TextBox(text);
        }

        public static Slider Slider(int val=0,int min = 0, int max = 100, int step = 10)
        {
            return new Slider(val,min,max,step);
        }

        public static Layer Layer()
        {
            return new Layer();
        }
    }
}
