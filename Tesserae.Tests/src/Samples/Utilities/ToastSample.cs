﻿using System;
using static H5.Core.dom;
using static Tesserae.UI;
using static Tesserae.Tests.Samples.SamplesHelper;
using Tesserae.Tests;

namespace Tesserae.Tests.Samples
{
    [SampleDetails(Group = "Utilities", Order = 20, Icon = UIcons.BreadSlice)]
    public class ToastSample : IComponent, ISample
    {
        private readonly IComponent _content;

        public ToastSample()
        {
            _content = SectionStack()
               .Title(SampleHeader(nameof(ToastSample)))
               .Section(Stack().WidthStretch().Children(
                    SampleTitle("Overview"),
                    TextBlock("Toasts are used for short-lived notifications to users.")))
               .Section(Stack().WidthStretch().Children(
                    SampleTitle("Best Practices"),
                    SplitView().SplitInMiddle().Left(
                            Stack().WidthStretch().Children(
                                SampleSubTitle("Do"),
                                SampleDo("Write short and recognizable messages"),
                                SampleDo("Keep toasts long enough to be read, but not long enough to bother")))
                       .Right(Stack().WidthStretch().Children(
                            SampleSubTitle("Don't"),
                            SampleDont("Overload users with toasts.")))))
               .Section(
                    Stack().WidthStretch().Children(
                        SampleTitle("Usage"),
                        SampleSubTitle("Toasts top-right (default)"),
                        HStack().Children(
                            Button().SetText("Info").OnClick((s,    e) => Toast().Information("Info!")),
                            Button().SetText("Success").OnClick((s, e) => Toast().Success("Success!")),
                            Button().SetText("Warning").OnClick((s, e) => Toast().Warning("Warning!")),
                            Button().SetText("Error").OnClick((s,   e) => Toast().Error("Error!"))),
                        SampleSubTitle("Toasts top left"),
                        HStack().Children(
                            Button().SetText("Info").OnClick((s,    e) => Toast().TopLeft().Information("Info!")),
                            Button().SetText("Success").OnClick((s, e) => Toast().TopLeft().Success("Success!")),
                            Button().SetText("Warning").OnClick((s, e) => Toast().TopLeft().Warning("Warning!")),
                            Button().SetText("Error").OnClick((s,   e) => Toast().TopLeft().Error("Error!"))),
                        SampleSubTitle("Toasts bottom right"),
                        HStack().Children(
                            Button().SetText("Info").OnClick((s,    e) => Toast().BottomRight().Information("Info!")),
                            Button().SetText("Success").OnClick((s, e) => Toast().BottomRight().Success("Success!")),
                            Button().SetText("Warning").OnClick((s, e) => Toast().BottomRight().Warning("Warning!")),
                            Button().SetText("Error").OnClick((s,   e) => Toast().BottomRight().Error("Error!"))),
                        SampleSubTitle("Toasts bottom left"),
                        HStack().Children(
                            Button().SetText("Info").OnClick((s,    e) => Toast().BottomLeft().Information("Info!")),
                            Button().SetText("Success").OnClick((s, e) => Toast().BottomLeft().Success("Success!")),
                            Button().SetText("Warning").OnClick((s, e) => Toast().BottomLeft().Warning("Warning!")),
                            Button().SetText("Error").OnClick((s,   e) => Toast().BottomLeft().Error("Error!"))),
                        SampleSubTitle("Toasts top center with title"),
                        HStack().Children(
                            Button().SetText("Info").OnClick((s,    e) => Toast().TopCenter().Information("This is a title", "Info!")),
                            Button().SetText("Success").OnClick((s, e) => Toast().TopCenter().Success("This is a title", "Success!")),
                            Button().SetText("Warning").OnClick((s, e) => Toast().TopCenter().Warning("This is a title", "Warning!")),
                            Button().SetText("Error").OnClick((s,   e) => Toast().TopCenter().Error("This is a title", "Error!"))),
                        SampleSubTitle("Toasts top full with title"),
                        HStack().Children(
                            Button().SetText("Info").OnClick((s,    e) => Toast().TopFull().Information("This is a title", "Info!")),
                            Button().SetText("Success").OnClick((s, e) => Toast().TopFull().Success("This is a title", "Success!")),
                            Button().SetText("Warning").OnClick((s, e) => Toast().TopFull().Warning("This is a title", "Warning!")),
                            Button().SetText("Error").OnClick((s,   e) => Toast().TopFull().Error("This is a title", "Error!"))),
                        SampleSubTitle("Toasts bottom center with title"),
                        HStack().Children(
                            Button().SetText("Info").OnClick((s,    e) => Toast().BottomCenter().Information("This is a title", "Info!")),
                            Button().SetText("Success").OnClick((s, e) => Toast().BottomCenter().Success("This is a title", "Success!")),
                            Button().SetText("Warning").OnClick((s, e) => Toast().BottomCenter().Warning("This is a title", "Warning!")),
                            Button().SetText("Error").OnClick((s,   e) => Toast().BottomCenter().Error("This is a title", "Error!"))),
                        SampleSubTitle("Toasts bottom full with title"),
                        HStack().Children(
                            Button().SetText("Info").OnClick((s,    e) => Toast().BottomFull().Information("This is a title", "Info!")),
                            Button().SetText("Success").OnClick((s, e) => Toast().BottomFull().Success("This is a title", "Success!")),
                            Button().SetText("Warning").OnClick((s, e) => Toast().BottomFull().Warning("This is a title", "Warning!")),
                            Button().SetText("Error").OnClick((s,   e) => Toast().BottomFull().Error("This is a title", "Error!"))),

                        SampleSubTitle("Toast as banner"),
                        HStack().Children(
                            Button().SetText("Info").OnClick((s, e) => Toast().TopFull().Banner().Information("This is a banner", "Info!")),
                            Button().SetText("Success").OnClick((s, e) => Toast().TopFull().Banner().Success("This is a banner", "Success!")),
                            Button().SetText("Warning").OnClick((s, e) => Toast().TopFull().Banner().Warning("This is a banner", "Warning!")),
                            Button().SetText("Error").OnClick((s, e) => Toast().TopFull().Banner().Error("This is a banner", "Error!")))
                        ));
        }

        public HTMLElement Render()
        {
            return _content.Render();
        }
    }
}