﻿using static Retyped.dom;
using static Tesserae.UI;

namespace Tesserae.Components
{
    public class CheckBox : ComponentBase<CheckBox, HTMLInputElement>, IObservableComponent<bool>
    {
        private readonly HTMLSpanElement _checkSpan;
        private readonly HTMLLabelElement _label;
        private readonly SettableObservable<bool> _observable = new SettableObservable<bool>();

        public CheckBox(string text = string.Empty)
        {
            InnerElement = CheckBox(_("tss-checkbox"));
            _checkSpan = Span(_("tss-checkbox-mark"));
            _label = Label(_("tss-checkbox-container", text: text), InnerElement, _checkSpan);
            AttachClick();
            AttachChange();
            AttachFocus();
            AttachBlur();
        }

        /// <summary>
        /// Gets or sets button text
        /// </summary>
        public string Text
        {
            get => _label.innerText;
            set => _label.innerText = value;
        }

        /// <summary>
        /// Gets or sets whenever CheckBox is enabled
        /// </summary>
        public bool IsEnabled
        {
            get => !_label.classList.contains("disabled");
            set
            {
                if (value)
                {
                    _label.classList.remove("disabled");
                }
                else
                {
                    _label.classList.add("disabled");
                }
            }
        }

        /// <summary>
        /// Gets or sets whenever CheckBox is checked
        /// </summary>
        public bool IsChecked
        {
            get => InnerElement.@checked;
            set
            {
                InnerElement.@checked = value;
                _observable.Value = value;
            }
        }

        public override HTMLElement Render()
        {
            return _label;
        }

        public CheckBox Disabled()
        {
            IsEnabled = false;
            return this;
        }

        public CheckBox Checked()
        {
            IsChecked = true;
            return this;
        }

        public CheckBox SetText(string text)
        {
            Text = text;
            return this;
        }

        public IObservable<bool> AsObservable()
        {
            return _observable;
        }
    }
}
