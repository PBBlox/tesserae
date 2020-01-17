﻿using System;
using System.Collections.Generic;
using Retyped;
using static Tesserae.HTML.HtmlUtil;
using static Tesserae.HTML.HtmlAttributes;
using static Retyped.dom;
using System.Linq;

namespace Tesserae.Components
{
    public class Pivot : IComponent
    {
        public HTMLElement InnerElement { get; private set; }

        private List<Tab> OrderedTabs = new List<Tab>();
        private Dictionary<Tab, HTMLElement> RenderedTitles = new Dictionary<Tab, HTMLElement>();

        private HTMLElement RenderedTabs;
        private HTMLElement RenderedContent;
        private HTMLElement Line;
        private string SelectedID;
        private string CurrentSelectedID;

        public Pivot()
        {
            Line = Div(_("tss-pivot-line"));
            RenderedTabs = Div(_("tss-pivot-titlebar"));
            RenderedContent = Div(_("tss-pivot-content"));
            InnerElement = Div(_("tss-pivot"), RenderedTabs, Line, RenderedContent);
        }

        internal Pivot Add(Tab tab)
        {
            if (SelectedID is null) SelectedID = tab.Id;
            OrderedTabs.Add(tab);
            var title = tab.RenderTitle();
            RenderedTitles.Add(tab, title);
            AttachEvents(tab.Id, title);
            RenderedTabs.appendChild(title);
            //TODO: click, etc
            return this;
        }

        private void AttachEvents(string id, HTMLElement title)
        {
            title.onclick = (e) =>
            {
                StopEvent(e);
                Select(id);
            };

            title.onmouseover = e =>
            {
                HoveredNav = title;
                TriggerAnimation();
            };

            title.onmouseleave = e =>
            {
                if (HoveredNav == title)
                {
                    HoveredNav = null;
                    TriggerAnimation();
                }
            };
        }

        public Pivot Select(string id)
        {
            var tab = OrderedTabs.FirstOrDefault(t => t.Id == id);
            return Select(tab);
        }

        private Pivot Select(Tab tab)
        {
            var title = RenderedTitles[tab];

            HTMLElement content = Div(_());
            
            try
            {
                content = tab.RenderContent();
            }
            catch(Exception E)
            {
                content.textContent = E.ToString();
            }

            ClearChildren(RenderedContent);
            RenderedContent.appendChild(content);

            CurrentSelectedID = tab.Id;
            UpdateTitleStyles(title);
            TriggerAnimation();
            return this;
        }

        private void UpdateTitleStyles(HTMLElement title)
        {
            foreach (var v in RenderedTitles.Values)
            {
                if (v == title)
                {
                    v.classList.add("tss-pivot-selected-title");
                }
                else
                {
                    v.classList.remove("tss-pivot-selected-title");
                }
            }
            SelectedNav = title;
        }

        public HTMLElement Render()
        {
            if (SelectedID != CurrentSelectedID)
            {
                Select(SelectedID);
            }

            return InnerElement;
        }


        private void TriggerAnimation()
        {
            T0 = -1;
            window.requestAnimationFrame((t) => AnimateLine(t));
        }

        private HTMLElement SelectedNav;
        private HTMLElement HoveredNav;
        private double T0 = 0;
        private double CurrentWidth = 0;
        private double CurrentLeft = 0;
        private double TargetWidth;
        private double TargetLeft;
        private double Left0;

        private void AnimateLine(double time)
        {
            if (T0 < 0)
            {
                var target = HoveredNav ?? SelectedNav;
                if (target is null) { return; }
                T0 = time;
                var r = (DOMRect)target.getBoundingClientRect();
                TargetWidth = r.width;
                TargetLeft = r.left;
                Left0 = ((DOMRect)RenderedTabs.getBoundingClientRect()).left;
            }

            var f = (time - T0) / 500; //500ms animation
            if (f > 1) { f = 1; }
            CurrentWidth = CurrentWidth + (TargetWidth - CurrentWidth) * f;
            CurrentLeft = CurrentLeft + (TargetLeft - CurrentLeft) * f;
            Line.style.width = CurrentWidth + "px";
            Line.style.marginLeft = (CurrentLeft - Left0) + "px";
            if (Math.Abs(CurrentLeft - TargetLeft) > 1e-5 ||
                Math.Abs(CurrentWidth - TargetWidth) > 1e-5)
            {
                window.requestAnimationFrame((t) => AnimateLine(t));
            }
        }


        internal class Tab
        {
            public Tab(string id, Func<IComponent> titleCreator, Func<IComponent> contentCreator, bool cached = false)
            {
                Id = id;
                CanCacheContent = cached;
                ContentCreator = contentCreator;
                TitleCreator = titleCreator;
            }
            public string Id { get; private set; }
            private Func<IComponent> TitleCreator { get; }
            private Func<IComponent> ContentCreator { get; }

            private HTMLElement Content;
            private bool CanCacheContent;

            public HTMLElement RenderContent()
            {
                if (CanCacheContent && Content is object)
                {
                    return Content;
                }
                else
                {
                    Content = ContentCreator().Render();
                    return Content;
                }
            }

            public HTMLElement RenderTitle()
            {
                return TitleCreator().Render();
            }
        }

    }

    public static class PivotExtensions
    {
        public static Pivot Pivot(this Pivot pivot, string id, Func<IComponent> titleCreator, Func<IComponent> contentCreator, bool cached = false)
        {
            return pivot.Add(new Pivot.Tab(id, titleCreator, contentCreator, cached));
        }
    }
}