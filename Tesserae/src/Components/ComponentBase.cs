﻿using Bridge;
using System;
using static Retyped.dom;

namespace Tesserae.Components
{
    public abstract class ComponentBase<T, THTML> : IComponent, IHasMarginPadding where T : ComponentBase<T, THTML> where THTML : HTMLElement
    {
        public delegate void ComponentEventHandler<TEventArgs>(T sender, TEventArgs e);

        #region Properties
        
        public THTML InnerElement { get; protected set; }
        public string Margin { get => InnerElement.style.margin; set => InnerElement.style.margin = value; }
        public string Padding { get => InnerElement.style.padding; set => InnerElement.style.padding = value; }

        #endregion

        #region Events

        public event ComponentEventHandler<MouseEvent>    onClick;
        public event ComponentEventHandler<Event>         onChange;
        public event ComponentEventHandler<Event>         onInput;
        public event ComponentEventHandler<Event>         onFocus;
        public event ComponentEventHandler<Event>         onBlur;
        public event ComponentEventHandler<KeyboardEvent> onKeyUp;
        public event ComponentEventHandler<KeyboardEvent> onKeyDown;
        public event ComponentEventHandler<KeyboardEvent> onKeyPress;

        #endregion

        #region Methods

        public abstract HTMLElement Render();

        protected void AttachClick()
        {
            InnerElement.addEventListener("click", (s) => RaiseOnClick(s));
        }

        protected void AttachChange()
        {
            InnerElement.addEventListener("change", (s) => RaiseOnChange(s));
        }

        protected void RaiseOnClick(object s)
        {
            onClick?.Invoke((T)this, Script.Write<MouseEvent>("{0}", s));
        }

        protected void RaiseOnChange(object s)
        {
            onChange?.Invoke((T)this, Script.Write<Event>("{0}", s));
        }

        protected void AttachInput()
        {
            InnerElement.addEventListener("input", (s) => RaiseOnInput(s));
        }

        protected void AttachKeys()
        {
            InnerElement.addEventListener("keypress", (s) => RaiseOnKeyPress(s));
            InnerElement.addEventListener("keydown",  (s) => RaiseOnKeyDown(s));
            InnerElement.addEventListener("keyup",    (s) => RaiseOnKeyUp(s));
        }

        protected void RaiseOnInput(object e)
        {
            onInput?.Invoke((T)this, Script.Write<Event>("{0}", e));
        }

        protected void RaiseOnKeyDown(object e)
        {
            onKeyDown?.Invoke((T)this, Script.Write<KeyboardEvent>("{0}", e));
        }

        protected void RaiseOnKeyUp(object e)
        {
            onKeyUp?.Invoke((T)this, Script.Write<KeyboardEvent>("{0}", e));
        }

        protected void RaiseOnKeyPress(object e)
        {
            onKeyPress?.Invoke((T)this, Script.Write<KeyboardEvent>("{0}", e));
        }

        private void RaiseOnFocus(object e)
        {
            onFocus?.Invoke((T)this, Script.Write<Event>("{0}", e));
        }

        protected void AttachFocus()
        {
            InnerElement.addEventListener("focus", (s) => RaiseOnFocus(s));
        }

        protected void AttachBlur()
        {
            InnerElement.addEventListener("blur", (s) => RaiseOnBlur(s));
        }

        private void RaiseOnBlur(object s)
        {
            onBlur?.Invoke((T)this, Script.Write<Event>("{0}", s));
        }

        #endregion

        #region Fluent

        public T OnClicked(ComponentEventHandler<MouseEvent> onClick)
        {
            this.onClick += onClick;
            return (T)this;
        }

        public T OnChanged(ComponentEventHandler<Event> onChange)
        {
            this.onChange += onChange;
            return (T)this;
        }

        public T OnInputed(ComponentEventHandler<Event> onInput)
        {
            this.onInput += onInput;
            return (T)this;
        }

        public T OnFocused(ComponentEventHandler<Event> onFocus)
        {
            this.onFocus += onFocus;
            return (T)this;
        }

        public T OnBlured(ComponentEventHandler<Event> onBlur)
        {
            this.onBlur += onBlur;
            return (T)this;
        }

        public T OnKeyDown(ComponentEventHandler<KeyboardEvent> onKeyDown)
        {
            this.onKeyDown += onKeyDown;
            return (T)this;
        }

        public T OnKeyUp(ComponentEventHandler<KeyboardEvent> onKeyUp)
        {
            this.onKeyUp += onKeyUp;
            return (T)this;
        }

        public T OnKeyPress(ComponentEventHandler<KeyboardEvent> onKeyPress)
        {
            this.onKeyPress += onKeyPress;
            return (T)this;
        }

        #endregion
    }
}

