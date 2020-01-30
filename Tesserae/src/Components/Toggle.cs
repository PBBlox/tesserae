﻿using static Tesserae.UI;
using static Retyped.dom;

namespace Tesserae.Components
{
    public class Toggle : ComponentBase<Toggle, HTMLInputElement>
    {
        private HTMLSpanElement _checkSpan;
        private HTMLSpanElement _onOffSpan;
        private HTMLLabelElement _label;
        private string _offText;
        private string _onText;

        public Toggle(string text = null, string onText = null, string offText = null)
        {
            _onText = onText ?? "On";
            _offText = offText ?? "Off";
            InnerElement = CheckBox(_("tss-checkbox"));
            _checkSpan = Span(_("tss-toggle-mark"));
            _onOffSpan = Span(_(text: _offText));
            if (!string.IsNullOrEmpty(text)) _onOffSpan.style.display = "none";
            _label = Label(_("tss-toggle-container", text: text), InnerElement, _checkSpan, _onOffSpan);
            OnChange((s, e) => OnToggleChanged());
            AttachClick();
            AttachChange();
            AttachFocus();
            AttachBlur();
        }

        /// <summary>
        /// Gets or sets toggle text
        /// </summary>
        public string Text
        {
            get { return _label.innerText; }
            set
            {
                _label.innerText = value;
                if (string.IsNullOrEmpty(value)) _onOffSpan.style.display = "";
                else _onOffSpan.style.display = "none";
            }
        }

        /// <summary>
        /// Gets or sets whenever Toggle is enabled
        /// </summary>
        public bool IsEnabled
        {
            get { return !_label.classList.contains("disabled"); }
            set
            {
                if (value != IsEnabled)
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
        }

        /// <summary>
        /// Gets or sets whenever Toggle is checked
        /// </summary>
        public bool IsChecked
        {
            get { return InnerElement.@checked; }
            set
            {
                if (value != IsChecked)
                {
                    InnerElement.@checked = value;
                    if (value) _onOffSpan.innerText = _onText;
                    else _onOffSpan.innerText = _offText;
                }
            }
        }

        public override HTMLElement Render()
        {
            return _label;
        }

        private void OnToggleChanged()
        {
            _onOffSpan.innerText = IsChecked ? _onText : _offText;
        }
        public Toggle SetText(string text)
        {
            Text = text;
            return this;
        }

        public Toggle Disabled()
        {
            IsEnabled = false;
            return this;
        }

        public Toggle Checked(bool value = true)
        {
            IsChecked = value;
            return this;
        }
    }
}
