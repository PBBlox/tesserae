/**
 * @compiler H5 0.0.25007
 */
H5.assemblyVersion("Tesserae.Tests","2022.4.27706.0");
H5.assembly("Tesserae.Tests", function ($asm, globals) {
    "use strict";

    H5.define("Tesserae.Tests.App", {
        main: function Main () {
            var $t;
            var ShowPage = null;
            var ToRoute = null;
            var orderedComponents = System.Array.init([new (System.ValueTuple$2(System.String,Function)).$ctor1("Button", function () {
                return new Tesserae.Tests.Samples.ButtonSample();
            }), new (System.ValueTuple$2(System.String,Function)).$ctor1("ThemeColors", function () {
                return new Tesserae.Tests.Samples.ThemeColorsSample();
            }), new (System.ValueTuple$2(System.String,Function)).$ctor1("CheckBox", function () {
                return new Tesserae.Tests.Samples.CheckBoxSample();
            }), new (System.ValueTuple$2(System.String,Function)).$ctor1("ChoiceGroup", function () {
                return new Tesserae.Tests.Samples.ChoiceGroupSample();
            }), new (System.ValueTuple$2(System.String,Function)).$ctor1("Slider", function () {
                return new Tesserae.Tests.Samples.SliderSample();
            }), new (System.ValueTuple$2(System.String,Function)).$ctor1("Dropdown", function () {
                return new Tesserae.Tests.Samples.DropdownSample();
            }), new (System.ValueTuple$2(System.String,Function)).$ctor1("Label", function () {
                return new Tesserae.Tests.Samples.LabelSample();
            }), new (System.ValueTuple$2(System.String,Function)).$ctor1("EditableLabel", function () {
                return new Tesserae.Tests.Samples.EditableLabelSample();
            }), new (System.ValueTuple$2(System.String,Function)).$ctor1("HorizontalSeparator", function () {
                return new Tesserae.Tests.Samples.HorizontalSeparatorSample();
            }), new (System.ValueTuple$2(System.String,Function)).$ctor1("TextBox", function () {
                return new Tesserae.Tests.Samples.TextBoxSample();
            }), new (System.ValueTuple$2(System.String,Function)).$ctor1("ColorPicker", function () {
                return new Tesserae.Tests.Samples.ColorPickerSample();
            }), new (System.ValueTuple$2(System.String,Function)).$ctor1("DateTimePicker", function () {
                return new Tesserae.Tests.Samples.DateTimePickerSample();
            }), new (System.ValueTuple$2(System.String,Function)).$ctor1("DatePicker", function () {
                return new Tesserae.Tests.Samples.DatePickerSample();
            }), new (System.ValueTuple$2(System.String,Function)).$ctor1("SearchBox", function () {
                return new Tesserae.Tests.Samples.SearchBoxSample();
            }), new (System.ValueTuple$2(System.String,Function)).$ctor1("Toggle", function () {
                return new Tesserae.Tests.Samples.ToggleSample();
            }), new (System.ValueTuple$2(System.String,Function)).$ctor1("Spinner", function () {
                return new Tesserae.Tests.Samples.SpinnerSample();
            }), new (System.ValueTuple$2(System.String,Function)).$ctor1("ProgressIndicator", function () {
                return new Tesserae.Tests.Samples.ProgressIndicatorSample();
            }), new (System.ValueTuple$2(System.String,Function)).$ctor1("Dialog", function () {
                return new Tesserae.Tests.Samples.DialogSample();
            }), new (System.ValueTuple$2(System.String,Function)).$ctor1("Modal", function () {
                return new Tesserae.Tests.Samples.ModalSample();
            }), new (System.ValueTuple$2(System.String,Function)).$ctor1("TutorialModal", function () {
                return new Tesserae.Tests.Samples.TutorialModalSample();
            }), new (System.ValueTuple$2(System.String,Function)).$ctor1("Panel", function () {
                return new Tesserae.Tests.Samples.PanelSample();
            }), new (System.ValueTuple$2(System.String,Function)).$ctor1("ContextMenu", function () {
                return new Tesserae.Tests.Samples.ContextMenuSample();
            }), new (System.ValueTuple$2(System.String,Function)).$ctor1("ProgressModal", function () {
                return new Tesserae.Tests.Samples.ProgressModalSample();
            }), new (System.ValueTuple$2(System.String,Function)).$ctor1("ItemsList", function () {
                return new Tesserae.Tests.Samples.ItemsListSample();
            }), new (System.ValueTuple$2(System.String,Function)).$ctor1("InfiniteScrollingList", function () {
                return new Tesserae.Tests.Samples.InfiniteScrollingListSample();
            }), new (System.ValueTuple$2(System.String,Function)).$ctor1("VirtualizedList", function () {
                return new Tesserae.Tests.Samples.VirtualizedListSample();
            }), new (System.ValueTuple$2(System.String,Function)).$ctor1("SearchableList", function () {
                return new Tesserae.Tests.Samples.SearchableListSample();
            }), new (System.ValueTuple$2(System.String,Function)).$ctor1("SearchableGroupedList", function () {
                return new Tesserae.Tests.Samples.SearchableGroupedListSample();
            }), new (System.ValueTuple$2(System.String,Function)).$ctor1("DetailsList", function () {
                return new Tesserae.Tests.Samples.DetailsListSample();
            }), new (System.ValueTuple$2(System.String,Function)).$ctor1("Picker", function () {
                return new Tesserae.Tests.Samples.PickerSample();
            }), new (System.ValueTuple$2(System.String,Function)).$ctor1("Layer", function () {
                return new Tesserae.Tests.Samples.LayerSample();
            }), new (System.ValueTuple$2(System.String,Function)).$ctor1("Timeline", function () {
                return new Tesserae.Tests.Samples.TimelineSample();
            }), new (System.ValueTuple$2(System.String,Function)).$ctor1("Stack", function () {
                return new Tesserae.Tests.Samples.StackSample();
            }), new (System.ValueTuple$2(System.String,Function)).$ctor1("SectionStack", function () {
                return new Tesserae.Tests.Samples.SectionStackSample();
            }), new (System.ValueTuple$2(System.String,Function)).$ctor1("TextBlock", function () {
                return new Tesserae.Tests.Samples.TextBlockSample();
            }), new (System.ValueTuple$2(System.String,Function)).$ctor1("Validator", function () {
                return new Tesserae.Tests.Samples.ValidatorSample();
            }), new (System.ValueTuple$2(System.String,Function)).$ctor1("OverflowSet", function () {
                return new Tesserae.Tests.Samples.OverflowSetSample();
            }), new (System.ValueTuple$2(System.String,Function)).$ctor1("Breadcrumb", function () {
                return new Tesserae.Tests.Samples.BreadcrumbSample();
            }), new (System.ValueTuple$2(System.String,Function)).$ctor1("TextBreadcrumbs", function () {
                return new Tesserae.Tests.Samples.TextBreadcrumbsSample();
            }), new (System.ValueTuple$2(System.String,Function)).$ctor1("Pivot", function () {
                return new Tesserae.Tests.Samples.PivotSample();
            }), new (System.ValueTuple$2(System.String,Function)).$ctor1("Defer", function () {
                return new Tesserae.Tests.Samples.DeferSample();
            }), new (System.ValueTuple$2(System.String,Function)).$ctor1("Toast", function () {
                return new Tesserae.Tests.Samples.ToastSample();
            }), new (System.ValueTuple$2(System.String,Function)).$ctor1("Float", function () {
                return new Tesserae.Tests.Samples.FloatSample();
            }), new (System.ValueTuple$2(System.String,Function)).$ctor1("LineAwesomeIcons", function () {
                return new Tesserae.Tests.Samples.LineAwesomeSample();
            }), new (System.ValueTuple$2(System.String,Function)).$ctor1("FileSelector", function () {
                return new Tesserae.Tests.Samples.FileSelectorAndDropAreaSample();
            })], System.ValueTuple$2(System.String,Function));

            var sideBar = tss.ICX.Stretch(tss.Sidebar, tss.UI.Sidebar());
            var navBar = tss.UI.Navbar().SetTop(tss.ICTX.Children$6(tss.S, tss.ICX.S(tss.S, tss.UI.HStack()), [tss.ICX.WidthStretch(tss.SearchBox, tss.UI.SearchBox("Search for a template")).Underlined()]));
            sideBar.IsVisible = false;
            navBar.IsVisible = false;
            document.body.style.overflow = "hidden";


            document.body.appendChild(sideBar.Brand(tss.UI.SidebarItem("... meow", "las la-cat", "https://curiosity.ai").Large()).Add(tss.UI.SidebarItem("Colorful sidebar", "las la-tint").OnSelect(function (s) {
                sideBar.IsLight = false;
            }).Selected()).Add(tss.UI.SidebarItem("Light sidebar", "las la-tint-slash").OnSelect(function (s) {
                sideBar.IsLight = true;
            })).Add(tss.UI.SidebarItem("Always Open", "las la-arrow-to-right").OnSelect(function (s) {
                sideBar.IsAlwaysOpen = true;
            })).Add(tss.UI.SidebarItem("Open on Hover", "las la-arrows-alt-h").OnSelect(function (s) {
                sideBar.IsAlwaysOpen = false;
            })).Add(tss.UI.SidebarItem("Small sidebar", "las la-minus-square").OnSelect(function (s) {
                sideBar.Width = tss.Sidebar.Size.Small;
            })).Add(tss.UI.SidebarItem("Medium sidebar", "las la-square").OnSelect(function (s) {
                sideBar.Width = tss.Sidebar.Size.Medium;
            })).Add(tss.UI.SidebarItem("Large sidebar", "las la-plus-square").OnSelect(function (s) {
                sideBar.Width = tss.Sidebar.Size.Large;
            })).SetContent(navBar).Render());


            var documentTitleBase = document.title;
            var currentPage = new (tss.SettableObservableT(System.String))();
            var components = System.Linq.Enumerable.from(orderedComponents, System.ValueTuple$2(System.String,Function)).toDictionary(function (c) {
                    return c.Item1;
                }, function (c) {
                    return c.Item2;
                }, System.String, Function);
            ShowPage = function (componentRouteName) {
                if ((componentRouteName == null) || !components.containsKey(componentRouteName)) {
                    componentRouteName = System.Linq.Enumerable.from(components.Keys, System.String).first();
                } else {
                    tss.Router.Push(System.String.format("#/view/{0}", [componentRouteName]));
                }
                document.title = (documentTitleBase || "") + " - " + (componentRouteName || "");
                var links = System.Linq.Enumerable.from(orderedComponents, System.ValueTuple$2(System.String,Function)).toDictionary(function (c) {
                        return c.Item1;
                    }, function (c) {
                        return tss.UI.NavLink(c.Item1).SelectedOrExpandedIf(H5.rE(c.Item1, componentRouteName)).OnSelected(function (s) {
                            console.log("Route to " + (c.Item1 || ""));
                            tss.Router.Navigate("#" + (ToRoute(c.Item1) || ""));
                        });
                    }, System.String, tss.Nav.NavLink);
                var closePanelButton = tss.ICX.Tooltip(tss.Button, tss.UI.Button$1().SetIcon$1(58), "Close panel");
                var component = components.getItem(componentRouteName)();
                var splitView = tss.ICX.Stretch(tss.SplitView, tss.UI.SplitView().NoSplitter().Left(tss.ScrollBar.InvisibleScroll(tss.S, tss.ICTX.Children$6(tss.S, tss.ICX.Stretch(tss.S, tss.UI.Stack()), [Tesserae.Tests.App.MainNav(links, navBar, sideBar)])), tss.UI.Theme.Default.Background).LeftIsSmaller(tss.usX.px$1(300))).Right(tss.ScrollBar.InvisibleScroll(tss.S, tss.ICTX.Children$6(tss.S, tss.ICX.Stretch(tss.S, tss.UI.Stack()), [closePanelButton, tss.ICX.WidthStretch(tss.IC, component)])), tss.UI.Theme.Secondary.Background);
                var panelIsOpen = true;
                closePanelButton.OnClick(function (_, __) {
                    if (panelIsOpen) {
                        panelIsOpen = false;
                        splitView.Close();
                        tss.ICX.Tooltip(tss.Button, closePanelButton.SetIcon$1(59), "Open panel");
                    } else {
                        panelIsOpen = true;
                        splitView.Open();
                        tss.ICX.Tooltip(tss.Button, closePanelButton.SetIcon$1(58), "Close panel");
                    }
                });
                return splitView;
            };
            navBar.SetContent(tss.ICX.Stretch(tss.IDefer, tss.UI.Defer$3(System.String, currentPage, function (newlySelectedPage) {
                return tss.tX.AsTask(ShowPage(newlySelectedPage));
            })));

            tss.Router.Register$3("home", "/", function (_) {
                currentPage.Value$1 = null;
            });
            ToRoute = function (name) {
                return "/view/" + (name || "");
            };
            $t = H5.getEnumerator(orderedComponents);
            try {
                while ($t.moveNext()) {
                    var _d1 = $t.Current.$clone();
                    var name = { };
                    var component = { };
                    H5.Deconstruct(_d1.$clone(), name, component);
                    var nameLocal = { v : name.v };
                    tss.Router.Register$3(nameLocal.v, ToRoute(nameLocal.v), (function ($me, nameLocal) {
                        return function (_) {
                            currentPage.Value$1 = nameLocal.v;
                        };
                    })(this, nameLocal));
                }
            } finally {
                if (H5.is($t, System.IDisposable)) {
                    $t.System$IDisposable$Dispose();
                }
            }

            tss.Router.Initialize();
            tss.Router.Refresh(tss.Router.ForceMatchCurrent);




        },
        statics: {
            methods: {
                MainNav: function (links, navBar, sideBar) {
                    return tss.ICTX.Children$6(tss.S, tss.ICX.MinHeightStretch(tss.S, tss.ICX.NoShrink(tss.S, tss.ICX.Padding(tss.S, tss.UI.Stack(), tss.usX.px$1(16)))), [tss.ICX.AlignCenter(tss.txt, tss.ITFX.SemiBold(tss.txt, tss.ITFX.MediumPlus(tss.txt, tss.UI.TextBlock("Tesserae UI Toolkit")))), tss.ICTX.Children$6(tss.S, tss.ICX.PB$1(tss.S, tss.ICX.PT$1(tss.S, tss.UI.Stack().Horizontal().JustifyContent("center"), tss.usX.px$1(10)), tss.usX.px$1(10)), [tss.ICX.PR$1(tss.txt, tss.ITFX.XSmall(tss.txt, tss.UI.TextBlock("by")), tss.usX.px$1(4)), tss.ICX.PR$1(tss.Link, tss.UI.Link$2("https://www.curiosity.ai", tss.txtX.Primary(tss.txt, tss.ITFX.XSmall(tss.txt, tss.UI.TextBlock("curiosity.ai")))), tss.usX.px$1(4)), tss.ICX.PR$1(tss.txt, tss.ITFX.XSmall(tss.txt, tss.UI.TextBlock("built with")), tss.usX.px$1(4)), tss.UI.Link$2("https://h5.rocks", tss.txtX.Primary(tss.txt, tss.ITFX.XSmall(tss.txt, tss.UI.TextBlock("h5 \ud83d\ude80"))))]), tss.UI.Nav$1().InlineContent(tss.UI.Label$1("Theme").Inline().SetContent(tss.UI.Toggle$2("Light", "Dark").Checked().OnChange(function (t, e) {
                        if (t.IsChecked) {
                            tss.UI.Theme.Light();
                        } else {
                            tss.UI.Theme.Dark();
                        }
                    }))).InlineContent(tss.UI.Label$1("Navbar").Inline().SetContent(tss.UI.Toggle$2("Show", "Hidden").OnChange(function (t, e) {
                        navBar.IsVisible = t.IsChecked;
                    }))).InlineContent(tss.UI.Label$1("Sidebar").Inline().SetContent(tss.UI.Toggle$2("Show", "Hidden").OnChange(function (t, e) {
                        sideBar.IsVisible = t.IsChecked;
                    }))).Links([tss.ITFX.SemiBold(tss.Nav.NavLink, tss.ITFX.SmallPlus(tss.Nav.NavLink, tss.UI.NavLink("Basic Inputs").Expanded())).Links([links.getItem("Button"), links.getItem("CheckBox"), links.getItem("ChoiceGroup"), links.getItem("Slider"), links.getItem("Dropdown"), links.getItem("Label"), links.getItem("EditableLabel"), links.getItem("TextBox"), links.getItem("SearchBox"), links.getItem("Toggle"), links.getItem("Picker")]), links.getItem("ColorPicker"), links.getItem("DatePicker"), links.getItem("DateTimePicker"), tss.ITFX.SemiBold(tss.Nav.NavLink, tss.ITFX.SmallPlus(tss.Nav.NavLink, tss.UI.NavLink("Progress").Expanded())).Links([links.getItem("Spinner"), links.getItem("ProgressIndicator")]), tss.ITFX.SemiBold(tss.Nav.NavLink, tss.ITFX.SmallPlus(tss.Nav.NavLink, tss.UI.NavLink("Surfaces").Expanded())).Links([links.getItem("Dialog"), links.getItem("Modal"), links.getItem("TutorialModal"), links.getItem("Panel"), links.getItem("ContextMenu")]), tss.ITFX.SemiBold(tss.Nav.NavLink, tss.ITFX.SmallPlus(tss.Nav.NavLink, tss.UI.NavLink("Utilities").Expanded())).Links([links.getItem("Layer"), links.getItem("Stack"), links.getItem("HorizontalSeparator"), links.getItem("SectionStack"), links.getItem("TextBlock"), links.getItem("Validator"), links.getItem("Breadcrumb"), links.getItem("TextBreadcrumbs"), links.getItem("OverflowSet"), links.getItem("Pivot"), links.getItem("Defer"), links.getItem("Toast"), links.getItem("Float"), links.getItem("FileSelector"), links.getItem("LineAwesomeIcons"), links.getItem("ProgressModal"), links.getItem("ThemeColors")]), tss.ITFX.SemiBold(tss.Nav.NavLink, tss.ITFX.SmallPlus(tss.Nav.NavLink, tss.UI.NavLink("Collections").Expanded())).Links([links.getItem("ItemsList"), links.getItem("VirtualizedList"), links.getItem("InfiniteScrollingList"), links.getItem("SearchableList"), links.getItem("SearchableGroupedList"), links.getItem("DetailsList"), links.getItem("Timeline")]), tss.ITFX.SemiBold(tss.Nav.NavLink, tss.ITFX.SmallPlus(tss.Nav.NavLink, tss.UI.NavLink("Nav Sample").Expanded())).Links([tss.UI.NavLink("Level 1").Links([tss.UI.NavLink("Level 2").Links([tss.UI.NavLink("Level 3").Links([tss.UI.NavLink("Level 4")])])]), tss.UI.NavLink("Level 1").Links([tss.UI.NavLink("Level 2").Links([tss.UI.NavLink("Level 3").Links([tss.UI.NavLink("Level 4")])])]), tss.UI.NavLink("Async 1").LinksAsync(function () {
                        var $s = 0,
                            $t1, 
                            $jff, 
                            $tcs = new H5.TCS(), 
                            $rv, 
                            $ae, 
                            $ab = H5.fn.bind(this, function () {
                                try {
                                    for (;;) {
                                        $s = H5.STEP([0,1], $s);
                                        switch ($s) {
                                            case 0: {
                                                $t1 = System.Threading.Tasks.Task.delay(500);
                                                $s = 1;
                                                if ($t1.isC()) {
                                                    continue;
                                                }
                                                $t1.c($ab);
                                                return;
                                            }
                                            case 1: {
                                                $t1.gAR();
                                                $tcs.sR(System.Array.init([tss.UI.NavLink("Level 2").Links([tss.UI.NavLink("Level 3").Links([tss.UI.NavLink("Level 4")])])], tss.Nav.NavLink));
                                                return;
                                            }
                                            default: {
                                                $tcs.sR(null);
                                                return;
                                            }
                                        }
                                    }
                                } catch($ae1) {
                                    $ae = System.Exception.create($ae1);
                                    $tcs.sE($ae);
                                }
                            }, arguments);

                        $ab();
                        return $tcs.task;
                    })])])]);
                }
            }
        }
    });

    H5.define("Tesserae.Tests.Samples.BreadcrumbSample", {
        inherits: [tss.IC],
        fields: {
            _content: null
        },
        alias: ["Render", "tss$IC$Render"],
        ctors: {
            ctor: function () {
                this.$initialize();
                var msg = { };
                this._content = tss.SectionStackX.Section(tss.SectionStackX.Section(tss.SectionStackX.Section(tss.SectionStackX.Title(tss.UI.SectionStack(), Tesserae.Tests.Samples.SamplesHelper.SampleHeader("BreadcrumbSample")), tss.ICTX.Children$6(tss.S, tss.UI.Stack(), [Tesserae.Tests.Samples.SamplesHelper.SampleTitle("Overview"), tss.UI.TextBlock("Breadcrumbs should be used as a navigational aid in your app or site. They indicate the current page\u2019s location within a hierarchy and help the user understand where they are in relation to the rest of that hierarchy. They also afford one-click access to higher levels of that hierarchy."), tss.UI.TextBlock("Breadcrumbs are typically placed, in horizontal form, under the masthead or navigation of an experience, above the primary content area.")])), tss.ICTX.Children$6(tss.S, tss.UI.Stack(), [Tesserae.Tests.Samples.SamplesHelper.SampleTitle("Best Practices"), tss.ICTX.Children$6(tss.S, tss.UI.Stack().Horizontal(), [tss.ICTX.Children$6(tss.S, tss.ICX.Width(tss.S, tss.UI.Stack(), tss.usX.percent$1(40)), [Tesserae.Tests.Samples.SamplesHelper.SampleSubTitle("Do"), Tesserae.Tests.Samples.SamplesHelper.SampleDo("Place Breadcrumbs at the top of a page, above a list of items, or above the main content of a page.")]), tss.ICTX.Children$6(tss.S, tss.ICX.Width(tss.S, tss.UI.Stack(), tss.usX.percent$1(40)), [Tesserae.Tests.Samples.SamplesHelper.SampleSubTitle("Don't"), Tesserae.Tests.Samples.SamplesHelper.SampleDont("Don't use Breadcrumbs as a primary way to navigate an app or site.")])])])), tss.ICTX.Children$6(tss.S, tss.ICX.Width(tss.S, tss.UI.Stack(), tss.usX.px$1(450)), [Tesserae.Tests.Samples.SamplesHelper.SampleTitle("Usage"), tss.UI.Label$1("Selected: ").SetContent(tss.UI.Var(tss.txt, tss.UI.TextBlock(), msg)), tss.ITFX.Medium(tss.txt, tss.UI.TextBlock("All Visible")), tss.ICX.PaddingBottom(tss.Breadcrumb, tss.ICX.PaddingTop(tss.Breadcrumb, tss.UI.Breadcrumb(), tss.usX.px$1(16)).SetOverflowIndex(-1), tss.usX.px$1(16)).Items([tss.UI.Crumb("Folder 1").OnClick(function (s, e) {
                    tss.txtX.Text(tss.txt, msg.v, "Folder 1");
                }), tss.UI.Crumb("Folder 2").OnClick(function (s, e) {
                    tss.txtX.Text(tss.txt, msg.v, "Folder 2");
                }).Disabled(), tss.UI.Crumb("Folder 3").OnClick(function (s, e) {
                    tss.txtX.Text(tss.txt, msg.v, "Folder 3");
                }), tss.UI.Crumb("Folder 4").OnClick(function (s, e) {
                    tss.txtX.Text(tss.txt, msg.v, "Folder 4");
                }), tss.UI.Crumb("Folder 5").OnClick(function (s, e) {
                    tss.txtX.Text(tss.txt, msg.v, "Folder 5");
                }), tss.UI.Crumb("Folder 6").OnClick(function (s, e) {
                    tss.txtX.Text(tss.txt, msg.v, "Folder 6");
                })]), tss.ITFX.Medium(tss.txt, tss.UI.TextBlock("All Visible, Small")), tss.ICX.PaddingBottom(tss.Breadcrumb, tss.ICX.PaddingTop(tss.Breadcrumb, tss.UI.Breadcrumb().Small(), tss.usX.px$1(16)), tss.usX.px$1(16)).Items([tss.UI.Crumb("Folder 1").OnClick(function (s, e) {
                    tss.txtX.Text(tss.txt, msg.v, "Folder 1");
                }), tss.UI.Crumb("Folder 2").OnClick(function (s, e) {
                    tss.txtX.Text(tss.txt, msg.v, "Folder 2");
                }).Disabled(), tss.UI.Crumb("Folder 3").OnClick(function (s, e) {
                    tss.txtX.Text(tss.txt, msg.v, "Folder 3");
                }), tss.UI.Crumb("Folder 4").OnClick(function (s, e) {
                    tss.txtX.Text(tss.txt, msg.v, "Folder 4");
                }), tss.UI.Crumb("Folder 5").OnClick(function (s, e) {
                    tss.txtX.Text(tss.txt, msg.v, "Folder 5");
                }), tss.UI.Crumb("Folder 6").OnClick(function (s, e) {
                    tss.txtX.Text(tss.txt, msg.v, "Folder 6");
                })]), tss.ITFX.Medium(tss.txt, tss.UI.TextBlock("Collapse 200px")), tss.ICX.MaxWidth(tss.Breadcrumb, tss.ICX.PaddingBottom(tss.Breadcrumb, tss.ICX.PaddingTop(tss.Breadcrumb, tss.UI.Breadcrumb(), tss.usX.px$1(16)), tss.usX.px$1(16)), tss.usX.px$1(200)).Items([tss.UI.Crumb("Folder 1").OnClick(function (s, e) {
                    tss.txtX.Text(tss.txt, msg.v, "Folder 1");
                }), tss.UI.Crumb("Folder 2").OnClick(function (s, e) {
                    tss.txtX.Text(tss.txt, msg.v, "Folder 2");
                }), tss.UI.Crumb("Folder 3").OnClick(function (s, e) {
                    tss.txtX.Text(tss.txt, msg.v, "Folder 3");
                }), tss.UI.Crumb("Folder 4").OnClick(function (s, e) {
                    tss.txtX.Text(tss.txt, msg.v, "Folder 4");
                }), tss.UI.Crumb("Folder 5").OnClick(function (s, e) {
                    tss.txtX.Text(tss.txt, msg.v, "Folder 5");
                }), tss.UI.Crumb("Folder 6").OnClick(function (s, e) {
                    tss.txtX.Text(tss.txt, msg.v, "Folder 6");
                })]), tss.ITFX.Medium(tss.txt, tss.UI.TextBlock("Collapse 200px, Small")), tss.ICX.MaxWidth(tss.Breadcrumb, tss.ICX.PaddingBottom(tss.Breadcrumb, tss.ICX.PaddingTop(tss.Breadcrumb, tss.UI.Breadcrumb(), tss.usX.px$1(16)), tss.usX.px$1(16)).Small(), tss.usX.px$1(200)).Items([tss.UI.Crumb("Folder 1").OnClick(function (s, e) {
                    tss.txtX.Text(tss.txt, msg.v, "Folder 1");
                }), tss.UI.Crumb("Folder 2").OnClick(function (s, e) {
                    tss.txtX.Text(tss.txt, msg.v, "Folder 2");
                }), tss.UI.Crumb("Folder 3").OnClick(function (s, e) {
                    tss.txtX.Text(tss.txt, msg.v, "Folder 3");
                }), tss.UI.Crumb("Folder 4").OnClick(function (s, e) {
                    tss.txtX.Text(tss.txt, msg.v, "Folder 4");
                }), tss.UI.Crumb("Folder 5").OnClick(function (s, e) {
                    tss.txtX.Text(tss.txt, msg.v, "Folder 5");
                }), tss.UI.Crumb("Folder 6").OnClick(function (s, e) {
                    tss.txtX.Text(tss.txt, msg.v, "Folder 6");
                })]), tss.ITFX.Medium(tss.txt, tss.UI.TextBlock("Collapse 300px")), tss.ICX.MaxWidth(tss.Breadcrumb, tss.ICX.PaddingBottom(tss.Breadcrumb, tss.ICX.PaddingTop(tss.Breadcrumb, tss.UI.Breadcrumb(), tss.usX.px$1(16)), tss.usX.px$1(16)), tss.usX.px$1(300)).Items([tss.UI.Crumb("Folder 1").OnClick(function (s, e) {
                    tss.txtX.Text(tss.txt, msg.v, "Folder 1");
                }), tss.UI.Crumb("Folder 2").OnClick(function (s, e) {
                    tss.txtX.Text(tss.txt, msg.v, "Folder 2");
                }), tss.UI.Crumb("Folder 3").OnClick(function (s, e) {
                    tss.txtX.Text(tss.txt, msg.v, "Folder 3");
                }), tss.UI.Crumb("Folder 4").OnClick(function (s, e) {
                    tss.txtX.Text(tss.txt, msg.v, "Folder 4");
                }), tss.UI.Crumb("Folder 5").OnClick(function (s, e) {
                    tss.txtX.Text(tss.txt, msg.v, "Folder 5");
                }), tss.UI.Crumb("Folder 6").OnClick(function (s, e) {
                    tss.txtX.Text(tss.txt, msg.v, "Folder 6");
                })]), tss.ITFX.Medium(tss.txt, tss.UI.TextBlock("Collapse 300px, from second, custom chevron")), tss.ICX.MaxWidth(tss.Breadcrumb, tss.ICX.PaddingBottom(tss.Breadcrumb, tss.ICX.PaddingTop(tss.Breadcrumb, tss.UI.Breadcrumb(), tss.usX.px$1(16)), tss.usX.px$1(16)), tss.usX.px$1(300)).SetChevron("fa-plane").SetOverflowIndex(1).Items([tss.UI.Crumb("Folder 1").OnClick(function (s, e) {
                    tss.txtX.Text(tss.txt, msg.v, "Folder 1");
                }), tss.UI.Crumb("Folder 2").OnClick(function (s, e) {
                    tss.txtX.Text(tss.txt, msg.v, "Folder 2");
                }), tss.UI.Crumb("Folder 3").OnClick(function (s, e) {
                    tss.txtX.Text(tss.txt, msg.v, "Folder 3");
                }), tss.UI.Crumb("Folder 4").OnClick(function (s, e) {
                    tss.txtX.Text(tss.txt, msg.v, "Folder 4");
                }), tss.UI.Crumb("Folder 5").OnClick(function (s, e) {
                    tss.txtX.Text(tss.txt, msg.v, "Folder 5");
                }), tss.UI.Crumb("Folder 6").OnClick(function (s, e) {
                    tss.txtX.Text(tss.txt, msg.v, "Folder 6");
                })])]));
            }
        },
        methods: {
            Render: function () {
                return this._content.tss$IC$Render();
            }
        }
    });

    H5.define("Tesserae.Tests.Samples.ButtonSample", {
        inherits: [tss.IC],
        fields: {
            _content: null
        },
        alias: ["Render", "tss$IC$Render"],
        ctors: {
            ctor: function () {
                this.$initialize();
                var btn1 = { };
                var btn2 = { };
                var btn3 = { };
                var iconBtn1 = { };
                var iconBtn2 = { };
                var iconBtn3 = { };
                var iconBtn4 = { };
                var spinBtn1 = { };
                var spinBtn2 = { };
                var spinBtn3 = { };
                var spinBtn4 = { };
                this._content = tss.SectionStackX.Section(tss.SectionStackX.Section(tss.SectionStackX.Section(tss.SectionStackX.Title(tss.UI.SectionStack(), Tesserae.Tests.Samples.SamplesHelper.SampleHeader("ButtonSample")), tss.ICTX.Children$6(tss.S, tss.UI.Stack(), [Tesserae.Tests.Samples.SamplesHelper.SampleTitle("Overview"), tss.UI.TextBlock("Buttons are best used to enable a user to commit a change or complete steps in a task. They are typically found inside forms, dialogs, panels or pages. An example of their usage is confirming the deletion of a file in a confirmation dialog."), tss.UI.TextBlock("When considering their place in a layout, contemplate the order in which a user will flow through the UI. As an example, in a form, the individual will need to read and interact with the form fields before submiting the form. Therefore, as a general rule, the button should be placed at the bottom of the UI container (a dialog, panel, or page) which holds the related UI elements."), tss.UI.TextBlock("While buttons can technically be used to navigate a user to another part of the experience, this is not recommended unless that navigation is part of an action or their flow.")])), tss.ICTX.Children$6(tss.S, tss.ICX.WidthStretch(tss.S, tss.UI.Stack()), [Tesserae.Tests.Samples.SamplesHelper.SampleTitle("Best Practices"), tss.ICTX.Children$6(tss.S, tss.ICX.WidthStretch(tss.S, tss.UI.Stack()).Horizontal(), [tss.ICTX.Children$6(tss.S, tss.ICX.WidthStretch(tss.S, tss.UI.Stack()), [Tesserae.Tests.Samples.SamplesHelper.SampleSubTitle("Do"), Tesserae.Tests.Samples.SamplesHelper.SampleDo("Make sure the label conveys a clear purpose of the button to the user."), Tesserae.Tests.Samples.SamplesHelper.SampleDo("Button labels must describe the action the button will perform and should include a verb. Use concise, specific, self-explanatory labels, usually a single word."), Tesserae.Tests.Samples.SamplesHelper.SampleDo("Buttons should always include a noun if there is any room for interpretation about what the verb operates on."), Tesserae.Tests.Samples.SamplesHelper.SampleDo("Consider the affect localization will have on the button and what will happen to components around it."), Tesserae.Tests.Samples.SamplesHelper.SampleDo("If the button\u2019s label content is dynamic, consider how the button will resize and what will happen to components around it."), Tesserae.Tests.Samples.SamplesHelper.SampleDo("Use only a single line of text in the label of the button."), Tesserae.Tests.Samples.SamplesHelper.SampleDo("Expose only one or two buttons to the user at a time, for example, \"Accept\" and \"Cancel\". If you need to expose more actions to the user, consider using checkboxes or radio buttons from which the user can select actions, with a single command button to trigger those actions."), Tesserae.Tests.Samples.SamplesHelper.SampleDo("Show only one primary button that inherits theme color at rest state. In the event there are more than two buttons with equal priority, all buttons should have neutral backgrounds."), Tesserae.Tests.Samples.SamplesHelper.SampleDo("\"Submit\", \"OK\", and \"Apply\" buttons should always be styled as primary buttons. When \"Reset\" or \"Cancel\" buttons appear alongside one of the above, they should be styled as secondary buttons."), Tesserae.Tests.Samples.SamplesHelper.SampleDo("Default buttons should always perform safe operations. For example, a default button should never delete."), Tesserae.Tests.Samples.SamplesHelper.SampleDo("Use task buttons to cause actions that complete a task or cause a transitional task. Do not use buttons to toggle other UX in the same context. For example, a button may be used to open an interface area but should not be used to open an additional set of components in the same interface.")]), tss.ICTX.Children$6(tss.S, tss.ICX.WidthStretch(tss.S, tss.UI.Stack()), [Tesserae.Tests.Samples.SamplesHelper.SampleSubTitle("Don't"), Tesserae.Tests.Samples.SamplesHelper.SampleDont("Don't use generic labels like \"Ok, \" especially in the case of an error; errors are never \"Ok.\""), Tesserae.Tests.Samples.SamplesHelper.SampleDont("Don\u2019t place the default focus on a button that destroys data. Instead, place the default focus on the button that performs the \"safe act\" and retains the content (i.e. \"Save\") or cancels the action (i.e. \"Cancel\")."), Tesserae.Tests.Samples.SamplesHelper.SampleDont("Don\u2019t use a button to navigate to another place, use a link instead. The exception is in a wizard where \"Back\" and \"Next\" buttons may be used."), Tesserae.Tests.Samples.SamplesHelper.SampleDont("Don\u2019t put too much text in a button - try to keep the length of your text to a minimum."), Tesserae.Tests.Samples.SamplesHelper.SampleDont("Don't put anything other than text in a button.")])])])), tss.ICTX.Children$6(tss.S, tss.UI.Stack(), [Tesserae.Tests.Samples.SamplesHelper.SampleTitle("Usage"), tss.ITFX.Medium(tss.txt, tss.UI.TextBlock("Default Button")), tss.ICTX.Children$6(tss.S, tss.UI.Stack().Horizontal(), [tss.ICX.Tooltip(tss.Button, tss.UI.Var(tss.Button, tss.UI.Button$1(), btn1).SetText("Standard"), "This is a standard button").OnClick(function (s, e) {
                    alert("Clicked!");
                }), tss.ICX.Tooltip(tss.Button, tss.UI.Var(tss.Button, tss.UI.Button$1(), btn2).SetText("Primary"), "This is a primary button").Primary().OnClick(function (s, e) {
                    alert("Clicked!");
                }), tss.ICX.Tooltip$1(tss.Button, tss.UI.Var(tss.Button, tss.UI.Button$1(), btn3).SetText("Link"), tss.UI.Button$1("This is a link button with a button tooltip").Primary().OnClick(function (_, __) {
                    tss.UI.Toast().Success("You clicked here");
                }), true, "shift-away-subtle", "top", 0, 0, true, false, 350, true).Link().OnClick(function (s, e) {
                    alert("Clicked!");
                })]), tss.ITFX.Medium(tss.txt, tss.UI.TextBlock("Icon Button")), tss.ICTX.Children$6(tss.S, tss.UI.Stack().Horizontal(), [tss.UI.Var(tss.Button, tss.UI.Button$1(), iconBtn1).SetText("Confirm").SetIcon("las la-check").Success().OnClick(function (s, e) {
                    alert("Clicked!");
                }), tss.UI.Var(tss.Button, tss.UI.Button$1(), iconBtn2).SetText("Delete").SetIcon("las la-trash-alt").Danger().OnClick(function (s, e) {
                    alert("Clicked!");
                }), tss.UI.Var(tss.Button, tss.UI.Button$1(), iconBtn3).SetText("Primary").SetIcon("las la-minus").Primary().OnClick(function (s, e) {
                    alert("Clicked!");
                }), tss.UI.Var(tss.Button, tss.UI.Button$1(), iconBtn4).SetText("Copy date").SetIcon("las la-calendar-alt").OnClick(function (s, e) {
                    tss.Clipboard.Copy(System.DateTime.format(System.DateTime.getNow()));
                })]), tss.ITFX.Medium(tss.txt, tss.UI.TextBlock("Spinner Button")), tss.ICTX.Children$6(tss.S, tss.UI.Stack().Horizontal(), [tss.UI.Var(tss.Button, tss.UI.Button$1(), spinBtn1).SetText("Spin").OnClickSpinWhile(function () {
                    var $s = 0,
                        $t1, 
                        $jff, 
                        $tcs = new H5.TCS(), 
                        $rv, 
                        $ae, 
                        $ab = H5.fn.bind(this, function () {
                            try {
                                for (;;) {
                                    $s = H5.STEP([0,1], $s);
                                    switch ($s) {
                                        case 0: {
                                            $t1 = System.Threading.Tasks.Task.delay(1000);
                                            $s = 1;
                                            if ($t1.isC()) {
                                                continue;
                                            }
                                            $t1.c($ab);
                                            return;
                                        }
                                        case 1: {
                                            $t1.gAR();
                                            $tcs.sR(null);
                                            return;
                                        }
                                        default: {
                                            $tcs.sR(null);
                                            return;
                                        }
                                    }
                                }
                            } catch($ae1) {
                                $ae = System.Exception.create($ae1);
                                $tcs.sE($ae);
                            }
                        }, arguments);

                    $ab();
                    return $tcs.task;
                }), tss.UI.Var(tss.Button, tss.UI.Button$1(), spinBtn2).SetText("Spin with text").OnClickSpinWhile(function () {
                    var $s = 0,
                        $t1, 
                        $jff, 
                        $tcs = new H5.TCS(), 
                        $rv, 
                        $ae, 
                        $ab = H5.fn.bind(this, function () {
                            try {
                                for (;;) {
                                    $s = H5.STEP([0,1], $s);
                                    switch ($s) {
                                        case 0: {
                                            $t1 = System.Threading.Tasks.Task.delay(1000);
                                            $s = 1;
                                            if ($t1.isC()) {
                                                continue;
                                            }
                                            $t1.c($ab);
                                            return;
                                        }
                                        case 1: {
                                            $t1.gAR();
                                            $tcs.sR(null);
                                            return;
                                        }
                                        default: {
                                            $tcs.sR(null);
                                            return;
                                        }
                                    }
                                }
                            } catch($ae1) {
                                $ae = System.Exception.create($ae1);
                                $tcs.sE($ae);
                            }
                        }, arguments);

                    $ab();
                    return $tcs.task;
                }, "loading..."), tss.UI.Var(tss.Button, tss.UI.Button$1(), spinBtn3).SetText("Spin & Error").OnClickSpinWhile(function () {
                    var $s = 0,
                        $t1, 
                        $jff, 
                        $tcs = new H5.TCS(), 
                        $rv, 
                        $ae, 
                        $ab = H5.fn.bind(this, function () {
                            try {
                                for (;;) {
                                    $s = H5.STEP([0,1], $s);
                                    switch ($s) {
                                        case 0: {
                                            $t1 = System.Threading.Tasks.Task.delay(1000);
                                            $s = 1;
                                            if ($t1.isC()) {
                                                continue;
                                            }
                                            $t1.c($ab);
                                            return;
                                        }
                                        case 1: {
                                            $t1.gAR();
                                            throw new System.Exception("Error!");
                                            $tcs.sR(null);
                                            return;
                                        }
                                        default: {
                                            $tcs.sR(null);
                                            return;
                                        }
                                    }
                                }
                            } catch($ae1) {
                                $ae = System.Exception.create($ae1);
                                $tcs.sE($ae);
                            }
                        }, arguments);

                    $ab();
                    return $tcs.task;
                }, void 0, function (b, e) {
                    spinBtn3.v.SetText("Failed: " + (e.Message || "")).SetIcon$1(423).DangerLink();
                }), tss.UI.Var(tss.Button, tss.UI.Button$1(), spinBtn4).SetText("Spin with text & Error").OnClickSpinWhile(function () {
                    var $s = 0,
                        $t1, 
                        $jff, 
                        $tcs = new H5.TCS(), 
                        $rv, 
                        $ae, 
                        $ab = H5.fn.bind(this, function () {
                            try {
                                for (;;) {
                                    $s = H5.STEP([0,1], $s);
                                    switch ($s) {
                                        case 0: {
                                            $t1 = System.Threading.Tasks.Task.delay(1000);
                                            $s = 1;
                                            if ($t1.isC()) {
                                                continue;
                                            }
                                            $t1.c($ab);
                                            return;
                                        }
                                        case 1: {
                                            $t1.gAR();
                                            throw new System.Exception("Error!");
                                            $tcs.sR(null);
                                            return;
                                        }
                                        default: {
                                            $tcs.sR(null);
                                            return;
                                        }
                                    }
                                }
                            } catch($ae1) {
                                $ae = System.Exception.create($ae1);
                                $tcs.sE($ae);
                            }
                        }, arguments);

                    $ab();
                    return $tcs.task;
                }, "loading...", function (b, e) {
                    spinBtn4.v.SetText("Failed: " + (e.Message || "")).SetIcon$1(423).DangerLink();
                })]), tss.UI.Toggle$1("Disable buttons").Checked().OnChange(function (s, e) {
                    var $t, $t1, $t2, $t3, $t4, $t5;
                    btn1.v.IsEnabled = ($t = ($t1 = ($t2 = ($t3 = ($t4 = ($t5 = s.IsChecked, iconBtn4.v.IsEnabled = $t5, $t5), iconBtn3.v.IsEnabled = $t4, $t4), iconBtn2.v.IsEnabled = $t3, $t3), iconBtn1.v.IsEnabled = $t2, $t2), btn3.v.IsEnabled = $t1, $t1), btn2.v.IsEnabled = $t, $t);
                })]));
            }
        },
        methods: {
            Render: function () {
                return this._content.tss$IC$Render();
            }
        }
    });

    H5.define("Tesserae.Tests.Samples.CheckBoxSample", {
        inherits: [tss.IC],
        fields: {
            _content: null
        },
        alias: ["Render", "tss$IC$Render"],
        ctors: {
            ctor: function () {
                this.$initialize();
                this._content = tss.SectionStackX.Section(tss.SectionStackX.Section(tss.SectionStackX.Section(tss.SectionStackX.Title(tss.UI.SectionStack(), Tesserae.Tests.Samples.SamplesHelper.SampleHeader("CheckBoxSample")), tss.ICTX.Children$6(tss.S, tss.UI.Stack(), [Tesserae.Tests.Samples.SamplesHelper.SampleTitle("Overview"), tss.UI.TextBlock("A CheckBox is a UI element that allows users to switch between two mutually exclusive options (checked or unchecked, on or off) through a single click or tap. It can also be used to indicate a subordinate setting or preference when paired with another control."), tss.UI.TextBlock("A CheckBox is used to select or deselect action items. It can be used for a single item or for a list of multiple items that a user can choose from. The control has two selection states: unselected and selected."), tss.UI.TextBlock("Use a single CheckBox for a subordinate setting, such as with a \"Remember me ? \" login scenario or with a terms of service agreement."), tss.UI.TextBlock("For a binary choice, the main difference between a CheckBox and a toggle switch is that the CheckBox is for status and the toggle switch is for action. You can delay committing a CheckBox interaction (as part of a form submit, for example), while you should immediately commit a toggle switch interaction. Also, only CheckBoxes allow for multi-selection."), tss.UI.TextBlock("Use multiple CheckBoxes for multi-select scenarios in which a user chooses one or more items from a group of choices that are not mutually exclusive.")])), tss.ICTX.Children$6(tss.S, tss.UI.Stack(), [Tesserae.Tests.Samples.SamplesHelper.SampleTitle("Best Practices"), tss.ICTX.Children$6(tss.S, tss.UI.Stack().Horizontal(), [tss.ICTX.Children$6(tss.S, tss.ICX.Width(tss.S, tss.UI.Stack(), tss.usX.percent$1(40)), [Tesserae.Tests.Samples.SamplesHelper.SampleSubTitle("Do"), Tesserae.Tests.Samples.SamplesHelper.SampleDo("Allow users to choose any combination of options when several CheckBoxes are grouped together.")]), tss.ICTX.Children$6(tss.S, tss.ICX.Width(tss.S, tss.UI.Stack(), tss.usX.percent$1(40)), [Tesserae.Tests.Samples.SamplesHelper.SampleSubTitle("Don't"), Tesserae.Tests.Samples.SamplesHelper.SampleDont("Don't use a CheckBox as an on/off control. Instead use a toggle switch."), Tesserae.Tests.Samples.SamplesHelper.SampleDont("Don\u2019t use a CheckBox when the user can choose only one option from the group, use radio buttons instead."), Tesserae.Tests.Samples.SamplesHelper.SampleDont("Don't put two groups of CheckBoxes next to each other. Separate the two groups with labels.")])])])), tss.ICTX.Children$6(tss.S, tss.UI.Stack(), [Tesserae.Tests.Samples.SamplesHelper.SampleTitle("Usage"), tss.ITFX.Medium(tss.txt, tss.UI.TextBlock("Basic CheckBoxes")), tss.UI.CheckBox$1("Unchecked checkbox"), tss.UI.CheckBox$1("Checked checkbox").Checked(), tss.UI.CheckBox$1("Disabled checkbox").Disabled(), tss.UI.CheckBox$1("Disabled checked checkbox").Checked().Disabled()]));
            }
        },
        methods: {
            Render: function () {
                return this._content.tss$IC$Render();
            }
        }
    });

    H5.define("Tesserae.Tests.Samples.ChoiceGroupSample", {
        inherits: [tss.IC],
        fields: {
            _content: null
        },
        alias: ["Render", "tss$IC$Render"],
        ctors: {
            ctor: function () {
                this.$initialize();
                this._content = tss.SectionStackX.Section(tss.SectionStackX.Section(tss.SectionStackX.Section(tss.SectionStackX.Title(tss.UI.SectionStack(), Tesserae.Tests.Samples.SamplesHelper.SampleHeader("ChoiceGroupSample")), tss.ICTX.Children$6(tss.S, tss.UI.Stack(), [Tesserae.Tests.Samples.SamplesHelper.SampleTitle("Overview"), tss.UI.TextBlock("The ChoiceGroup component, also known as radio buttons, let users select one option from two or more choices. Each option is represented by one ChoiceGroup button; a user can select only one ChoiceGroup in a button group."), tss.UI.TextBlock("ChoiceGroup emphasize all options equally, and that may draw more attention to the options than necessary. Consider using other controls, unless the options deserve extra attention from the user. For example, if the default option is recommended for most users in most situations, use a Dropdown component instead."), tss.UI.TextBlock("If there are only two mutually exclusive options, combine them into a single Checkbox or Toggle switch. For example, use a Checkbox for \"I agree\" instead of ChoiceGroup buttons for \"I agree\" and \"I don't agree.\"")])), tss.ICTX.Children$6(tss.S, tss.UI.Stack(), [Tesserae.Tests.Samples.SamplesHelper.SampleTitle("Best Practices"), tss.ICTX.Children$6(tss.S, tss.UI.Stack().Horizontal(), [tss.ICTX.Children$6(tss.S, tss.ICX.Width(tss.S, tss.UI.Stack(), tss.usX.percent$1(40)), [Tesserae.Tests.Samples.SamplesHelper.SampleSubTitle("Do"), Tesserae.Tests.Samples.SamplesHelper.SampleDo("Use when there are 2-7 options, if you have enough screen space and the options are important enough to be a good use of that screen space. Otherwise, use a Checkbox or Dropdown list."), Tesserae.Tests.Samples.SamplesHelper.SampleDo("Use on wizard pages to make the alternatives clear, even if a Checkbox is otherwise acceptable."), Tesserae.Tests.Samples.SamplesHelper.SampleDo("List the options in a logical order, such as most likely to be selected to least, simplest operation to most complex, or least risk to most. Alphabetical ordering is not recommended because it is language dependent and therefore not localizable."), Tesserae.Tests.Samples.SamplesHelper.SampleDo("If none of the options is a valid choice, add another option to reflect this choice, such as \"None\" or \"Does not apply\"."), Tesserae.Tests.Samples.SamplesHelper.SampleDo("Select the safest (to prevent loss of data or system access) and most secure and private option as the default. If safety and security aren't factors, select the most likely or convenient option."), Tesserae.Tests.Samples.SamplesHelper.SampleDo("Align radio buttons vertically instead of horizontally, if possible. Horizontal alignment is harder to read and localize.")]), tss.ICTX.Children$6(tss.S, tss.ICX.Width(tss.S, tss.UI.Stack(), tss.usX.percent$1(40)), [Tesserae.Tests.Samples.SamplesHelper.SampleSubTitle("Don't"), Tesserae.Tests.Samples.SamplesHelper.SampleDont("Use when the options are numbers that have fixed steps, like 10, 20, 30. Use a Slider component instead."), Tesserae.Tests.Samples.SamplesHelper.SampleDont("Use if there are more than 7 options, use a Dropdown instead."), Tesserae.Tests.Samples.SamplesHelper.SampleDont("Nest with other ChoiceGroup or CheckBoxes. If possible, keep all the options at the same level.")])])])), tss.ICTX.Children$6(tss.S, tss.UI.Stack(), [Tesserae.Tests.Samples.SamplesHelper.SampleTitle("Usage"), tss.ITFX.Medium(tss.txt, tss.UI.TextBlock("Default ChoiceGroup")), tss.UI.ChoiceGroup().Choices([tss.UI.Choice("Option A"), tss.UI.Choice("Option B"), tss.UI.Choice("Option C").Disabled(), tss.UI.Choice("Option D")]), tss.ITFX.Medium(tss.txt, tss.UI.TextBlock("Required ChoiceGroup with a custom label")), tss.UI.ChoiceGroup("Custom label").Required().Choices([tss.UI.Choice("Option A"), tss.UI.Choice("Option B"), tss.UI.Choice("Option C").Disabled(), tss.UI.Choice("Option D")]), tss.ITFX.Medium(tss.txt, tss.UI.TextBlock("Horizontal ChoiceGroup")), tss.UI.ChoiceGroup().Horizontal().Choices([tss.UI.Choice("Option A"), tss.UI.Choice("Option B"), tss.UI.Choice("Option C").Disabled(), tss.UI.Choice("Option D")])]));
            }
        },
        methods: {
            Render: function () {
                return this._content.tss$IC$Render();
            }
        }
    });

    H5.define("Tesserae.Tests.Samples.ColorPickerSample", {
        inherits: [tss.IC],
        fields: {
            _content: null
        },
        alias: ["Render", "tss$IC$Render"],
        ctors: {
            ctor: function () {
                this.$initialize();
                var colorPicker1 = { };
                var button1 = { };
                this._content = tss.SectionStackX.Section(tss.SectionStackX.Section(tss.SectionStackX.Title(tss.UI.SectionStack(), Tesserae.Tests.Samples.SamplesHelper.SampleHeader("ColorPickerSample")), tss.ICTX.Children$6(tss.S, tss.UI.Stack(), [Tesserae.Tests.Samples.SamplesHelper.SampleTitle("Overview"), tss.UI.TextBlock("The ColorPicker allows users to pick a color from a native browser widget. Unless specified, black is the default color upon render of the component"), tss.UI.Link("https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/color", "Please see here for further information.")])), tss.ICTX.Children$6(tss.S, tss.UI.Stack(), [Tesserae.Tests.Samples.SamplesHelper.SampleTitle("Usage"), tss.ITFX.Medium(tss.txt, tss.UI.TextBlock("Basic ColorPicker")), tss.ICTX.Children$6(tss.S, tss.ICX.Width(tss.S, tss.UI.Stack(), tss.usX.percent$1(40)), [tss.UI.Label$1("Standard").SetContent(tss.ICTX.Children$6(tss.S, tss.ICX.Stretch(tss.S, tss.UI.HStack()), [tss.UI.Var(tss.ColorPicker, tss.ICX.Width(tss.ColorPicker, tss.UI.ColorPicker(), tss.usX.percent$1(10)), colorPicker1), tss.UI.Var(tss.Button, tss.UI.Button$1().SetText("Click me!"), button1)])), tss.ICX.Width(tss.Label, tss.UI.Label$1("With preset color").SetContent(tss.UI.ColorPicker(tss.Color.FromString("#0078d4"))), tss.usX.percent$1(10)), tss.ICX.Width(tss.Label, tss.UI.Label$1("Change Theme Color").SetContent(tss.UI.ColorPicker(tss.Color.FromString("#0078d4")).OnChange(function (cp, e) {
                    tss.UI.Theme.SetPrimary(cp.Color);
                })), tss.usX.percent$1(10)), tss.ICX.Width(tss.Label, tss.txtX.Disabled(tss.Label, tss.UI.Label$1("Disabled")).SetContent(tss.UI.ColorPicker().Disabled()), tss.usX.percent$1(10)), tss.ICX.Width(tss.Label, tss.txtX.Required(tss.Label, tss.UI.Label$1("Required")).SetContent(tss.UI.ColorPicker()), tss.usX.percent$1(10)), tss.ICX.Width(tss.ColorPicker, tss.UI.ColorPicker().Required(), tss.usX.percent$1(10)), tss.ICX.Width(tss.Label, tss.UI.Label$1("With error message").SetContent(tss.ICVX.IsInvalid(tss.ColorPicker, tss.ICVX.Error(tss.ColorPicker, tss.UI.ColorPicker(), "Error message"))), tss.usX.percent$1(10)), tss.ICX.Width(tss.Label, tss.UI.Label$1("With validation for light color").SetContent(tss.vX.Validation(tss.ColorPicker, tss.UI.ColorPicker(), tss.Validation.LightColor)), tss.usX.percent$1(10)), tss.ICX.Width(tss.Label, tss.UI.Label$1("With validation for dark color").SetContent(tss.vX.Validation(tss.ColorPicker, tss.UI.ColorPicker(), tss.Validation.DarkColor)), tss.usX.percent$1(10))])]));

                colorPicker1.v.OnChange(function (_, __) {
                    button1.v.Background = colorPicker1.v.Text;
                });
                button1.v.OnClick(function (_, __) {
                    window.alert(System.String.format("{0}, {1}", colorPicker1.v.Text, colorPicker1.v.Color.ToHex()));
                });
            }
        },
        methods: {
            Render: function () {
                return this._content.tss$IC$Render();
            }
        }
    });

    H5.define("Tesserae.Tests.Samples.ContextMenuSample", {
        inherits: [tss.IC],
        fields: {
            _content: null
        },
        alias: ["Render", "tss$IC$Render"],
        ctors: {
            ctor: function () {
                this.$initialize();
                var d = tss.UI.ContextMenu();
                var msg = tss.UI.TextBlock();
                var msg2 = tss.UI.TextBlock();

                var cmsub = tss.UI.ContextMenu().Items([tss.UI.ContextMenuItem().Divider(), tss.UI.ContextMenuItem("Edit Sub").OnClick$2(function (s2, e2) {
                    tss.UI.Toast().Information("Clicked: Edit Sub");
                }), tss.UI.ContextMenuItem("Properties Sub").OnClick$2(function (s2, e2) {
                    tss.UI.Toast().Information("Clicked: Properties Sub");
                }), tss.UI.ContextMenuItem("Header Sub").Header(), tss.UI.ContextMenuItem("Disabled Sub").Disabled(), tss.UI.ContextMenuItem("Link Sub").OnClick$2(function (s2, e2) {
                    tss.UI.Toast().Information("Clicked: Link Sub");
                })]);

                var cmsub2 = tss.UI.ContextMenu().Items([tss.UI.ContextMenuItem().Divider(), tss.UI.ContextMenuItem("Edit Sub2").OnClick$2(function (s2, e2) {
                    tss.UI.Toast().Information("Clicked: Edit Sub2");
                }), tss.UI.ContextMenuItem("Properties Sub2"), tss.UI.ContextMenuItem("Header Sub2").Header(), tss.UI.ContextMenuItem("Disabled Sub2").Disabled(), tss.UI.ContextMenuItem("Link Sub2").OnClick$2(function (s2, e2) {
                    tss.UI.Toast().Information("Clicked: Link Sub2");
                })]);


                var cmcm = tss.UI.ContextMenu().Items([tss.UI.ContextMenuItem$1(tss.UI.Link("#", "New")).SubMenu(cmsub), tss.UI.ContextMenuItem().Divider(), tss.UI.ContextMenuItem$1(tss.UI.Button$1("All").Compact().Link()).OnClick$2(function (_, __) {
                    tss.UI.Toast().Information("Clicked: All");
                }), tss.UI.ContextMenuItem$1(tss.UI.Button$1("Edit").Compact().Link().SetIcon$1(398)).OnClick$2(function (s2, e2) {
                    tss.UI.Toast().Information("Clicked: Edit");
                }), tss.UI.ContextMenuItem$1(tss.UI.Button$1("Properties").Compact().Link().SetIcon$1(425)).SubMenu(cmsub2), tss.UI.ContextMenuItem("Header").Header(), tss.UI.ContextMenuItem("Disabled").Disabled(), tss.UI.ContextMenuItem("Link").OnClick$2(function (s2, e2) {
                    tss.UI.Toast().Information("Clicked: Link");
                })]);
                var btn2 = { };
                var btn3 = { };


                this._content = tss.SectionStackX.Section(tss.SectionStackX.Section(tss.SectionStackX.Section(tss.SectionStackX.Title(tss.UI.SectionStack(), Tesserae.Tests.Samples.SamplesHelper.SampleHeader("ContextMenuSample")), tss.ICTX.Children$6(tss.S, tss.UI.Stack(), [Tesserae.Tests.Samples.SamplesHelper.SampleTitle("Overview"), tss.UI.TextBlock("ContextualMenus are lists of commands that are based on the context of selection, mouse hover or keyboard focus. They are one of the most effective and highly used command surfaces, and can be used in a variety of places.")])), tss.ICTX.Children$6(tss.S, tss.UI.Stack(), [Tesserae.Tests.Samples.SamplesHelper.SampleTitle("Best Practices"), tss.ICTX.Children$6(tss.S, tss.UI.Stack().Horizontal(), [tss.ICTX.Children$6(tss.S, tss.ICX.Width(tss.S, tss.UI.Stack(), tss.usX.percent$1(40)), [Tesserae.Tests.Samples.SamplesHelper.SampleSubTitle("Do"), Tesserae.Tests.Samples.SamplesHelper.SampleDo("Use to display commands."), Tesserae.Tests.Samples.SamplesHelper.SampleDo("Divide groups of commands with rules."), Tesserae.Tests.Samples.SamplesHelper.SampleDo("Use selection checks without icons."), Tesserae.Tests.Samples.SamplesHelper.SampleDo("Provide submenus for sets of related commands that aren\u2019t as critical as others.")]), tss.ICTX.Children$6(tss.S, tss.ICX.Width(tss.S, tss.UI.Stack(), tss.usX.percent$1(40)), [Tesserae.Tests.Samples.SamplesHelper.SampleSubTitle("Don't"), Tesserae.Tests.Samples.SamplesHelper.SampleDont("Use them to display content."), Tesserae.Tests.Samples.SamplesHelper.SampleDont("Show commands as one large group."), Tesserae.Tests.Samples.SamplesHelper.SampleDont("Mix checks and icons."), Tesserae.Tests.Samples.SamplesHelper.SampleDont("Create submenus of submenus.")])])])), tss.ICTX.Children$6(tss.S, tss.UI.Stack(), [Tesserae.Tests.Samples.SamplesHelper.SampleTitle("Usage"), tss.ITFX.Medium(tss.txt, tss.UI.TextBlock("Basic ContextMenus")), tss.ICTX.Children$6(tss.S, tss.UI.HStack(), [tss.ICTX.Children$6(tss.S, tss.UI.Stack(), [tss.UI.Label$1("Standard with Headers").SetContent(tss.UI.Var(tss.Button, tss.UI.Button$1("Open"), btn2).OnClick(function (s, e) {
                    tss.UI.ContextMenu().Items([tss.UI.ContextMenuItem("New").OnClick$2(function (s2, e2) {
                        tss.UI.Toast().Information("Clicked: New");
                    }), tss.UI.ContextMenuItem().Divider(), tss.UI.ContextMenuItem("Edit").OnClick$2(function (s2, e2) {
                        tss.UI.Toast().Information("Clicked: Edit");
                    }), tss.UI.ContextMenuItem("Properties").OnClick$2(function (s2, e2) {
                        tss.UI.Toast().Information("Clicked: Properties");
                    }), tss.UI.ContextMenuItem("Header").Header(), tss.UI.ContextMenuItem("Disabled").Disabled(), tss.UI.ContextMenuItem("Link").OnClick$2(function (s2, e2) {
                        tss.UI.Toast().Information("Clicked: Link");
                    })]).ShowFor$1(btn2.v);
                })), msg]), tss.ICTX.Children$6(tss.S, tss.UI.Stack(), [tss.UI.Label$1("Standard with Submenus").SetContent(tss.UI.Var(tss.Button, tss.UI.Button$1("Open"), btn3).OnClick(function (s, e) {
                    cmcm.ShowFor$1(btn3.v);
                })), msg2])])]));
            }
        },
        methods: {
            Render: function () {
                return this._content.tss$IC$Render();
            }
        }
    });

    H5.define("Tesserae.Tests.Samples.DatePickerSample", {
        inherits: [tss.IC],
        fields: {
            _content: null
        },
        alias: ["Render", "tss$IC$Render"],
        ctors: {
            ctor: function () {
                this.$initialize();
                var from = System.DateTime.addDays(System.DateTime.getNow(), -7);
                var to = System.DateTime.addDays(System.DateTime.getNow(), 7);
                this._content = tss.SectionStackX.Section(tss.SectionStackX.Section(tss.SectionStackX.Title(tss.UI.SectionStack(), Tesserae.Tests.Samples.SamplesHelper.SampleHeader("DatePickerSample")), tss.ICTX.Children$6(tss.S, tss.UI.Stack(), [Tesserae.Tests.Samples.SamplesHelper.SampleTitle("Overview"), tss.UI.TextBlock("The DatePicker allows users to pick a datetime from a native browser widget."), tss.UI.Link("https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/datetime-local", "Please see here for further information.")])), tss.ICTX.Children$6(tss.S, tss.UI.Stack(), [Tesserae.Tests.Samples.SamplesHelper.SampleTitle("Usage"), tss.ITFX.Medium(tss.txt, tss.UI.TextBlock("Basic DatePicker")), tss.ICTX.Children$6(tss.S, tss.ICX.Width(tss.S, tss.UI.Stack(), tss.usX.percent$1(40)), [tss.UI.Label$1("Standard").SetContent(tss.UI.DatePicker()), tss.UI.Label$1("With default day of two days in the future").SetContent(tss.UI.DatePicker(System.DateTimeOffset.op_Implicit(System.DateTime.addDays(System.DateTime.getNow(), 2)))), tss.UI.Label$1("With step increment of 10").SetContent(tss.UI.DatePicker().SetStep(10)), tss.UI.Label$1(System.String.format("With max of {0}", [System.DateTime.format(to, "D")])).SetContent(tss.UI.DatePicker().SetMax(System.DateTimeOffset.op_Implicit(to))), tss.UI.Label$1(System.String.format("With min of {0}", [System.DateTime.format(from, "D")])).SetContent(tss.UI.DatePicker().SetMin(System.DateTimeOffset.op_Implicit(from))), tss.txtX.Disabled(tss.Label, tss.UI.Label$1("Disabled")).SetContent(tss.UI.DatePicker().Disabled()), tss.txtX.Required(tss.Label, tss.UI.Label$1("Required")).SetContent(tss.UI.DatePicker()), tss.UI.DatePicker().Required(), tss.UI.Label$1("With error message").SetContent(tss.ICVX.IsInvalid(tss.DatePicker, tss.ICVX.Error(tss.DatePicker, tss.UI.DatePicker(), "Error message"))), tss.UI.Label$1("With validation").SetContent(tss.vX.Validation(tss.DatePicker, tss.UI.DatePicker(), function (dateTimePicker) {
                    return System.DateTimeOffset.op_LessThanOrEqual(dateTimePicker.Date.$clone(), System.DateTimeOffset.op_Implicit(System.DateTime.addMonths(System.DateTime.getNow(), 2))) ? null : "Please choose a date less than 2 months in the future";
                })), tss.UI.Label$1("With validation on type - not in the future").SetContent(tss.vX.Validation(tss.DatePicker, tss.UI.DatePicker(), tss.Validation.NotInTheFuture)), tss.UI.Label$1("With validation on type - not in the past").SetContent(tss.vX.Validation(tss.DatePicker, tss.UI.DatePicker(), tss.Validation.NotInThePast)), tss.UI.Label$1(System.String.format("With validation on type - between {0} and {1}", System.DateTime.format(from, "D"), System.DateTime.format(to, "D"))).SetContent(tss.vX.Validation(tss.DatePicker, tss.UI.DatePicker(), function (dateTimePicker) {
                    return tss.Validation.BetweenRange(dateTimePicker, from, to);
                }))])]));
            }
        },
        methods: {
            Render: function () {
                return this._content.tss$IC$Render();
            }
        }
    });

    H5.define("Tesserae.Tests.Samples.DateTimePickerSample", {
        inherits: [tss.IC],
        fields: {
            _content: null
        },
        alias: ["Render", "tss$IC$Render"],
        ctors: {
            ctor: function () {
                this.$initialize();
                var from = System.DateTime.addDays(System.DateTime.getNow(), -7);
                var to = System.DateTime.addDays(System.DateTime.getNow(), 7);
                this._content = tss.SectionStackX.Section(tss.SectionStackX.Section(tss.SectionStackX.Title(tss.UI.SectionStack(), Tesserae.Tests.Samples.SamplesHelper.SampleHeader("DateTimePickerSample")), tss.ICTX.Children$6(tss.S, tss.UI.Stack(), [Tesserae.Tests.Samples.SamplesHelper.SampleTitle("Overview"), tss.UI.TextBlock("The DateTimePicker allows users to pick a datetime from a native browser widget."), tss.UI.Link("https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/datetime-local", "Please see here for further information.")])), tss.ICTX.Children$6(tss.S, tss.UI.Stack(), [Tesserae.Tests.Samples.SamplesHelper.SampleTitle("Usage"), tss.ITFX.Medium(tss.txt, tss.UI.TextBlock("Basic DateTimePicker")), tss.ICTX.Children$6(tss.S, tss.ICX.Width(tss.S, tss.UI.Stack(), tss.usX.percent$1(40)), [tss.UI.Label$1("Standard").SetContent(tss.UI.DateTimePicker()), tss.UI.Label$1("With default day of two days in the future").SetContent(tss.UI.DateTimePicker(System.DateTimeOffset.op_Implicit(System.DateTime.addDays(System.DateTime.getNow(), 2)))), tss.UI.Label$1("With step increment of 10").SetContent(tss.UI.DateTimePicker().SetStep(10)), tss.UI.Label$1(System.String.format("With max of {0}", [System.DateTime.format(to, "d")])).SetContent(tss.UI.DateTimePicker().SetMax(System.DateTimeOffset.op_Implicit(to))), tss.UI.Label$1(System.String.format("With min of {0}", [System.DateTime.format(from, "d")])).SetContent(tss.UI.DateTimePicker().SetMin(System.DateTimeOffset.op_Implicit(from))), tss.txtX.Disabled(tss.Label, tss.UI.Label$1("Disabled")).SetContent(tss.UI.DateTimePicker().Disabled()), tss.txtX.Required(tss.Label, tss.UI.Label$1("Required")).SetContent(tss.UI.DateTimePicker()), tss.UI.DateTimePicker().Required(), tss.UI.Label$1("With error message").SetContent(tss.ICVX.IsInvalid(tss.DateTimePicker, tss.ICVX.Error(tss.DateTimePicker, tss.UI.DateTimePicker(), "Error message"))), tss.UI.Label$1("With validation").SetContent(tss.vX.Validation(tss.DateTimePicker, tss.UI.DateTimePicker(), function (dateTimePicker) {
                    return System.DateTimeOffset.op_LessThanOrEqual(dateTimePicker.DateTime.$clone(), System.DateTimeOffset.op_Implicit(System.DateTime.addMonths(System.DateTime.getNow(), 2))) ? null : "Please choose a date less than 2 months in the future";
                })), tss.UI.Label$1("With validation on type - not in the future").SetContent(tss.vX.Validation(tss.DateTimePicker, tss.UI.DateTimePicker(), tss.Validation.NotInTheFuture$1)), tss.UI.Label$1("With validation on type - not in the past").SetContent(tss.vX.Validation(tss.DateTimePicker, tss.UI.DateTimePicker(), tss.Validation.NotInThePast$1)), tss.UI.Label$1(System.String.format("With validation on type - between {0} and {1}", System.DateTime.format(from, "d"), System.DateTime.format(to, "d"))).SetContent(tss.vX.Validation(tss.DateTimePicker, tss.UI.DateTimePicker(), function (dateTimePicker) {
                    return tss.Validation.BetweenRange$1(dateTimePicker, from, to);
                }))])]));
            }
        },
        methods: {
            Render: function () {
                return this._content.tss$IC$Render();
            }
        }
    });

    H5.define("Tesserae.Tests.Samples.DeferSample", {
        inherits: [tss.IC],
        fields: {
            content: null
        },
        alias: ["Render", "tss$IC$Render"],
        ctors: {
            ctor: function () {
                this.$initialize();
                var stack = tss.UI.SectionStack();
                var countSlider = tss.UI.Slider(5, 0, 10, 1);
                this.content = tss.SectionStackX.Section(tss.SectionStackX.Section(tss.SectionStackX.Title(tss.UI.SectionStack(), Tesserae.Tests.Samples.SamplesHelper.SampleHeader("DeferSample")), tss.ICTX.Children$6(tss.S, tss.UI.Stack(), [Tesserae.Tests.Samples.SamplesHelper.SampleTitle("Overview"), tss.UI.TextBlock("Use Defer() to render asyncronous components. The asyncronous task is only triggered on the first render of the Defer component")])), tss.ICTX.Children$6(tss.S, tss.UI.Stack(), [Tesserae.Tests.Samples.SamplesHelper.SampleTitle("Usage"), tss.ICTX.Children$6(tss.S, tss.UI.Stack(), [tss.ICTX.Children$6(tss.S, tss.UI.Stack().Horizontal(), [tss.ICTX.Children$6(tss.S, tss.UI.Stack(), [tss.UI.Label$1("Number of items:").SetContent(countSlider.OnInput(H5.fn.bind(this, function (s, e) {
                    this.SetChildren(stack, s.Value);
                })))])])]), tss.ICX.HeightAuto(tss.SectionStack, stack)]));
                this.SetChildren(stack, 5);
            }
        },
        methods: {
            SetChildren: function (stack, count) {
                stack.Clear();
                for (var i = 0; i < count; i = (i + 1) | 0) {
                    var delay = { v : H5.Int.mul((((i + 1) | 0)), 1000) };
                    tss.SectionStackX.Section(stack, tss.ICTX.Children$6(tss.S, tss.UI.Stack(), [tss.ITFX.SemiBold(tss.txt, tss.ITFX.MediumPlus(tss.txt, tss.UI.TextBlock(System.String.format("Section {0} - delayed {1} seconds", H5.box(i, System.Int32), H5.box(((i + 1) | 0), System.Int32))))), tss.UI.Defer((function ($me, delay) {
                        return H5.fn.bind($me, function () {
                            var $s = 0,
                                $t1, 
                                $jff, 
                                $tcs = new H5.TCS(), 
                                $rv, 
                                $ae, 
                                $ab = H5.fn.bind(this, function () {
                                    try {
                                        for (;;) {
                                            $s = H5.STEP([0,1], $s);
                                            switch ($s) {
                                                case 0: {
                                                    $t1 = System.Threading.Tasks.Task.delay(delay.v);
                                                    $s = 1;
                                                    if ($t1.isC()) {
                                                        continue;
                                                    }
                                                    $t1.c($ab);
                                                    return;
                                                }
                                                case 1: {
                                                    $t1.gAR();
                                                    $tcs.sR(tss.ICTX.Children$6(tss.S, tss.UI.Stack(), [tss.ITFX.SmallPlus(tss.txt, tss.UI.TextBlock("Wrap (Default)")), tss.ICX.Width(tss.txt, tss.UI.TextBlock("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."), tss.usX.percent$1(50)), tss.ITFX.SmallPlus(tss.txt, tss.UI.TextBlock("No Wrap")), tss.ICX.Width(tss.txt, tss.txtX.NoWrap(tss.txt, tss.UI.TextBlock("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")), tss.usX.percent$1(50))]));
                                                    return;
                                                }
                                                default: {
                                                    $tcs.sR(null);
                                                    return;
                                                }
                                            }
                                        }
                                    } catch($ae1) {
                                        $ae = System.Exception.create($ae1);
                                        $tcs.sE($ae);
                                    }
                                }, arguments);

                            $ab();
                            return $tcs.task;
                        });
                    })(this, delay))]));
                }
            },
            Render: function () {
                return this.content.tss$IC$Render();
            }
        }
    });

    H5.define("Tesserae.Tests.Samples.DetailsListSample", {
        inherits: [tss.IC],
        fields: {
            _content: null
        },
        alias: ["Render", "tss$IC$Render"],
        ctors: {
            ctor: function () {
                this.$initialize();
                var query = tss.Router.GetQueryParameters();
                var queryPageStr = { };
                var queryPage = { };
                var page = query.ContainsKey("page") && query.TryGetValue("page", queryPageStr) && System.Int32.tryParse(queryPageStr.v, queryPage) ? queryPage.v : 2;

                this._content = tss.SectionStackX.Section(tss.SectionStackX.Section(tss.SectionStackX.Section(tss.SectionStackX.Title(tss.UI.SectionStack(), Tesserae.Tests.Samples.SamplesHelper.SampleHeader("DetailsListSample")), tss.ICTX.Children$6(tss.S, tss.UI.Stack(), [Tesserae.Tests.Samples.SamplesHelper.SampleTitle("Overview"), tss.ICX.PaddingBottom(tss.txt, tss.UI.TextBlock("DetailsList is a derivative of the List component. It is a robust way to display an information rich collection of items. It can support powerful ways to aid a user in finding content with sorting, grouping and filtering.  Lists are a great way to handle large amounts of content, but poorly designed Lists can be difficult to parse."), tss.usX.px$1(16)), tss.ICX.PaddingBottom(tss.txt, tss.UI.TextBlock("Use a DetailsList when density of information is critical. Lists can support single and multiple selection, as well as drag and drop and marquee selection. They are composed of a column header, which contains the metadata fields which are attached to the list items, and provide the ability to sort, filter and even group the list. List items are composed of selection, icon, and name columns at minimum. One can also include other columns such as Date Modified, or any other metadata field associated with the collection. Place the most important columns from left to right for ease of recall and comparison."), tss.usX.px$1(16)), tss.UI.TextBlock("DetailsList is classically used to display files, but is also used to render custom lists that can be purely metadata. Avoid using file type icon overlays to denote status of a file as it can make the entire icon unclear. Be sure to leave ample width for each column\u2019s data. If there are multiple lines of text in a column, consider the variable row height variant.")])), tss.ICTX.Children$6(tss.S, tss.UI.Stack(), [Tesserae.Tests.Samples.SamplesHelper.SampleTitle("Best Practices"), tss.ICTX.Children$6(tss.S, tss.UI.Stack().Horizontal(), [tss.ICTX.Children$6(tss.S, tss.ICX.Width(tss.S, tss.UI.Stack(), tss.usX.percent$1(40)), [Tesserae.Tests.Samples.SamplesHelper.SampleSubTitle("Do"), Tesserae.Tests.Samples.SamplesHelper.SampleDo("Use them to display content."), Tesserae.Tests.Samples.SamplesHelper.SampleDo("Provide useful columns of metadata."), Tesserae.Tests.Samples.SamplesHelper.SampleDo("Display columns in order of importance left to right or right to left depending on the standards of the culture."), Tesserae.Tests.Samples.SamplesHelper.SampleDo("Give columns ample default width to display information.")]), tss.ICTX.Children$6(tss.S, tss.ICX.Width(tss.S, tss.UI.Stack(), tss.usX.percent$1(40)), [Tesserae.Tests.Samples.SamplesHelper.SampleSubTitle("Don't"), Tesserae.Tests.Samples.SamplesHelper.SampleDont("Use them to display commands or settings."), Tesserae.Tests.Samples.SamplesHelper.SampleDont("Overload the view with too many columns that require excessive horizontal scrolling."), Tesserae.Tests.Samples.SamplesHelper.SampleDont("Make columns so narrow that it truncates the information in typical cases.")])])])), tss.ICTX.Children$6(tss.S, tss.UI.Stack(), [Tesserae.Tests.Samples.SamplesHelper.SampleTitle("Usage"), tss.ICX.PaddingBottom(tss.txt, tss.ITFX.Medium(tss.txt, tss.UI.TextBlock("Details List With Textual Rows")), tss.usX.px$1(16)), tss.ICX.PaddingBottom(tss.DetailsList(Tesserae.Tests.Samples.DetailsListSampleFileItem), tss.ICX.Shrink(tss.DetailsList(Tesserae.Tests.Samples.DetailsListSampleFileItem), tss.ICX.Height(tss.DetailsList(Tesserae.Tests.Samples.DetailsListSampleFileItem), tss.UI.DetailsList(Tesserae.Tests.Samples.DetailsListSampleFileItem, [tss.UI.IconColumn(tss.UI.Icon$2(448), tss.usX.px$1(32), true, "FileIcon", void 0), tss.UI.DetailsListColumn("File Name", tss.usX.px$1(350), true, true, "FileName", void 0), tss.UI.DetailsListColumn("Date Modified", tss.usX.px$1(170), false, true, "DateModified", void 0), tss.UI.DetailsListColumn("Modified By", tss.usX.px$1(150), false, true, "ModifiedBy", void 0), tss.UI.DetailsListColumn("File Size", tss.usX.px$1(120), false, true, "FileSize", void 0)]), tss.usX.px$1(500)).WithListItems(this.GetDetailsListItems()).SortedBy("FileName")), tss.usX.px$1(32)), tss.ICX.PaddingBottom(tss.txt, tss.ITFX.Medium(tss.txt, tss.UI.TextBlock("Details List With Component Rows and responsive width")), tss.usX.px$1(16)), tss.ICX.PaddingBottom(tss.DetailsList(Tesserae.Tests.Samples.DetailsListSampleFileItem), tss.ICX.Width(tss.DetailsList(Tesserae.Tests.Samples.DetailsListSampleFileItem), tss.ICX.Height(tss.DetailsList(Tesserae.Tests.Samples.DetailsListSampleFileItem), tss.UI.DetailsList(Tesserae.Tests.Samples.DetailsListSampleFileItem, [tss.UI.IconColumn(tss.UI.Icon$2(448), tss.usX.px$1(80), true, "FileIcon", void 0), tss.UI.DetailsListColumn("File Name", tss.usX.percent$1(40), true, true, "FileName", void 0), tss.UI.DetailsListColumn$1("Date Modified", tss.usX.percent$1(20), tss.usX.px$1(150), false, true, "DateModified", void 0), tss.UI.DetailsListColumn$1("Modified By", tss.usX.percent$1(20), tss.usX.px$1(150), false, true, "ModifiedBy", void 0), tss.UI.DetailsListColumn$1("File Size", tss.usX.percent$1(20), tss.usX.px$1(100), false, true, "FileSize", void 0)]), tss.usX.px$1(500)), tss.usX.percent$1(100)).WithListItems(this.GetDetailsListItems()).SortedBy("FileName"), tss.usX.px$1(32)), tss.ICX.PaddingBottom(tss.txt, tss.ITFX.Medium(tss.txt, tss.UI.TextBlock("Details List With Component Rows")), tss.usX.px$1(16)), tss.ICX.PaddingBottom(tss.DetailsList(Tesserae.Tests.Samples.DetailsListSampleItemWithComponents), tss.ICX.Height(tss.DetailsList(Tesserae.Tests.Samples.DetailsListSampleItemWithComponents), tss.UI.DetailsList(Tesserae.Tests.Samples.DetailsListSampleItemWithComponents, [tss.UI.IconColumn(tss.UI.Icon$2(44), tss.usX.px$1(32), true, "Icon", void 0), tss.UI.DetailsListColumn("CheckBox", tss.usX.px$1(120), false, false, void 0, void 0), tss.UI.DetailsListColumn("Name", tss.usX.px$1(250), true, false, void 0, void 0), tss.UI.DetailsListColumn("Button", tss.usX.px$1(150), false, false, void 0, void 0), tss.UI.DetailsListColumn("ChoiceGroup", tss.usX.px$1(400), false, false, void 0, void 0), tss.UI.DetailsListColumn("Dropdown", tss.usX.px$1(250), false, false, void 0, void 0), tss.UI.DetailsListColumn("Toggle", tss.usX.px$1(100), false, false, void 0, void 0)]).Compact(), tss.usX.px$1(500)).WithListItems(this.GetComponentDetailsListItems()).SortedBy("Name"), tss.usX.px$1(32)), tss.ICX.PaddingBottom(tss.txt, tss.ITFX.Medium(tss.txt, tss.UI.TextBlock("Details List With Textual Rows and paginated content")), tss.usX.px$1(16)), tss.ICX.PaddingBottom(tss.DetailsList(Tesserae.Tests.Samples.DetailsListSampleFileItem), tss.ICX.Shrink(tss.DetailsList(Tesserae.Tests.Samples.DetailsListSampleFileItem), tss.ICX.Height(tss.DetailsList(Tesserae.Tests.Samples.DetailsListSampleFileItem), tss.UI.DetailsList(Tesserae.Tests.Samples.DetailsListSampleFileItem, [tss.UI.IconColumn(tss.UI.Icon$2(448), tss.usX.px$1(32), true, "FileIcon", void 0), tss.UI.DetailsListColumn("File Name", tss.usX.px$1(350), true, true, "FileName", void 0), tss.UI.DetailsListColumn("Date Modified", tss.usX.px$1(170), false, true, "DateModified", void 0), tss.UI.DetailsListColumn("Modified By", tss.usX.px$1(150), false, true, "ModifiedBy", void 0), tss.UI.DetailsListColumn("File Size", tss.usX.px$1(120), false, true, "FileSize", void 0)]), tss.usX.px$1(500)).WithListItems(this.GetDetailsListItems(0, page)).WithPaginatedItems(H5.fn.bind(this, function () {
                    var $s = 0,
                        $t1, 
                        $tr1, 
                        $jff, 
                        $tcs = new H5.TCS(), 
                        $rv, 
                        $ae, 
                        $ab = H5.fn.bind(this, function () {
                            try {
                                for (;;) {
                                    $s = H5.STEP([0,1], $s);
                                    switch ($s) {
                                        case 0: {
                                            page = (page + 1) | 0;
                                            tss.Router.ReplaceQueryParameters(function (parameters) {
                                                return parameters.With("page", H5.toString(page));
                                            });
                                            $t1 = this.GetDetailsListItemsAsync(page, 1);
                                            $s = 1;
                                            if ($t1.isC()) {
                                                continue;
                                            }
                                            $t1.c($ab);
                                            return;
                                        }
                                        case 1: {
                                            $tr1 = $t1.gAR();
                                            $tcs.sR($tr1);
                                            return;
                                        }
                                        default: {
                                            $tcs.sR(null);
                                            return;
                                        }
                                    }
                                }
                            } catch($ae1) {
                                $ae = System.Exception.create($ae1);
                                $tcs.sE($ae);
                            }
                        }, arguments);

                    $ab();
                    return $tcs.task;
                })).SortedBy("FileName")), tss.usX.px$1(32)), tss.ICX.PaddingBottom(tss.txt, tss.ITFX.Medium(tss.txt, tss.UI.TextBlock("Details List With Empty List Message")), tss.usX.px$1(16)), tss.ICX.Height(tss.DetailsList(Tesserae.Tests.Samples.DetailsListSampleFileItem), tss.UI.DetailsList(Tesserae.Tests.Samples.DetailsListSampleFileItem, [tss.UI.IconColumn(tss.UI.Icon$2(448), tss.usX.px$1(32), true, "FileIcon", void 0), tss.UI.DetailsListColumn("File Name", tss.usX.px$1(350), true, true, "FileName", void 0), tss.UI.DetailsListColumn("Date Modified", tss.usX.px$1(170), false, true, "DateModified", void 0), tss.UI.DetailsListColumn("Modified By", tss.usX.px$1(150), false, true, "ModifiedBy", void 0), tss.UI.DetailsListColumn("File Size", tss.usX.px$1(120), false, true, "FileSize", void 0)]).Compact().WithEmptyMessage(function () {
                    return tss.ICX.HeightStretch(tss.BackgroundArea, tss.ICX.WidthStretch(tss.BackgroundArea, tss.UI.BackgroundArea(tss.UI.Card(tss.ICX.Padding(tss.txt, tss.UI.TextBlock("Empty list"), tss.usX.px$1(16))))));
                }), tss.usX.px$1(500)).WithListItems(System.Array.init(0, null, Tesserae.Tests.Samples.DetailsListSampleFileItem)).SortedBy("Name")]));
            }
        },
        methods: {
            Render: function () {
                return this._content.tss$IC$Render();
            },
            GetDetailsListItemsAsync: function (start, count) {
                var $s = 0,
                    $t1, 
                    $jff, 
                    $tcs = new H5.TCS(), 
                    $rv, 
                    $ae, 
                    $ab = H5.fn.bind(this, function () {
                        try {
                            for (;;) {
                                $s = H5.STEP([0,1], $s);
                                switch ($s) {
                                    case 0: {
                                        if (start === void 0) { start = 1; }
                                        if (count === void 0) { count = 100; }
                                        $t1 = System.Threading.Tasks.Task.delay(1000);
                                        $s = 1;
                                        if ($t1.isC()) {
                                            continue;
                                        }
                                        $t1.c($ab);
                                        return;
                                    }
                                    case 1: {
                                        $t1.gAR();
                                        $tcs.sR(this.GetDetailsListItems(start, count));
                                        return;
                                    }
                                    default: {
                                        $tcs.sR(null);
                                        return;
                                    }
                                }
                            }
                        } catch($ae1) {
                            $ae = System.Exception.create($ae1);
                            $tcs.sE($ae);
                        }
                    }, arguments);

                $ab();
                return $tcs.task;
            },
            GetDetailsListItems: function (start, count) {
                if (start === void 0) { start = 1; }
                if (count === void 0) { count = 100; }
                return System.Linq.Enumerable.range(start, count).selectMany(function (number) {
                    return function (_o1) {
                            _o1.add(new Tesserae.Tests.Samples.DetailsListSampleFileItem(470, (System.String.format("Interesting File Name {0}, quite long as you can see. In fact, let's make it ", [H5.box(number, System.Int32)]) || "") + "longer to see how the padding looks.", System.DateTime.addDays(System.DateTime.getToday(), ((-number) | 0)), "Dale Cooper", number + 0.7));
                            _o1.add(new Tesserae.Tests.Samples.DetailsListSampleFileItem(456, System.String.format("File Name {0}", [H5.box(number, System.Int32)]), System.DateTime.addDays(System.DateTime.getToday(), ((-number) | 0)), "Rusty", number + 0.1));
                            _o1.add(new Tesserae.Tests.Samples.DetailsListSampleFileItem(465, System.String.format("File Name {0}", [H5.box(number, System.Int32)]), System.DateTime.addDays(System.DateTime.getToday(), ((-number) | 0)), "Cole", number + 0.5));
                            return _o1;
                        }(new (System.Collections.Generic.List$1(Tesserae.Tests.Samples.DetailsListSampleFileItem)).ctor());
                }).ToArray(Tesserae.Tests.Samples.DetailsListSampleFileItem);
            },
            GetComponentDetailsListItems: function () {
                return System.Linq.Enumerable.range(1, 100).selectMany(function (number) {
                    return function (_o1) {
                            _o1.add(new Tesserae.Tests.Samples.DetailsListSampleItemWithComponents().WithIcon(272).WithCheckBox(tss.UI.CheckBox$1("CheckBox")).WithName("Component Details List Item").WithButton(tss.UI.Button$1().SetText("Primary").Primary().OnClick(function (s, e) {
                                alert("Clicked!");
                            })).WithChoiceGroup(tss.UI.ChoiceGroup().Horizontal().Choices([tss.UI.Choice("Option A"), tss.UI.Choice("Option B").Disabled(), tss.UI.Choice("Option C")])).WithDropdown(tss.UI.Dropdown().Multi().Items$1([tss.UI.DropdownItem$1("Header 1").Header(), tss.UI.DropdownItem$1("1-1"), tss.UI.DropdownItem$1("1-2").Selected(), tss.UI.DropdownItem$1("1-3"), tss.UI.DropdownItem$1("1-4").Disabled(), tss.UI.DropdownItem$1("1-5"), tss.UI.DropdownItem$1("2-1"), tss.UI.DropdownItem$1("2-2"), tss.UI.DropdownItem$1("2-3"), tss.UI.DropdownItem$1("2-4").Selected(), tss.UI.DropdownItem$1("2-5")])).WithToggle(tss.UI.Toggle()));
                            return _o1;
                        }(new (System.Collections.Generic.List$1(Tesserae.Tests.Samples.DetailsListSampleItemWithComponents)).ctor());
                }).ToArray(Tesserae.Tests.Samples.DetailsListSampleItemWithComponents);
            }
        }
    });

    H5.define("Tesserae.Tests.Samples.DetailsListSampleFileItem", {
        inherits: function () { return [tss.IDetailsListItemT(Tesserae.Tests.Samples.DetailsListSampleFileItem)]; },
        fields: {
            FileIcon: 0,
            FileName: null,
            DateModified: null,
            ModifiedBy: null,
            FileSize: 0
        },
        props: {
            EnableOnListItemClickEvent: {
                get: function () {
                    return true;
                }
            }
        },
        alias: [
            "EnableOnListItemClickEvent", "tss$IDetailsListItem$EnableOnListItemClickEvent",
            "OnListItemClick", "tss$IDetailsListItem$OnListItemClick",
            "CompareTo", ["tss$IDetailsListItemT$Tesserae$Tests$Samples$DetailsListSampleFileItem$CompareTo", "tss$IDetailsListItemT$CompareTo"],
            "Render", "tss$IDetailsListItem$Render"
        ],
        ctors: {
            init: function () {
                this.DateModified = System.DateTime.getDefaultValue();
            },
            ctor: function (fileIcon, fileName, dateModified, modifiedBy, fileSize) {
                this.$initialize();
                this.FileIcon = fileIcon;
                this.FileName = fileName;
                this.DateModified = dateModified;
                this.ModifiedBy = modifiedBy;
                this.FileSize = fileSize;
            }
        },
        methods: {
            OnListItemClick: function (listItemIndex) {
                alert(System.String.format("You clicked me! List item index: {0}, my name is {1}", H5.box(listItemIndex, System.Int32), this.FileName));
            },
            CompareTo: function (other, columnSortingKey) {
                if (other == null) {
                    throw new System.ArgumentException.$ctor1("other");
                }

                if (System.String.equals(columnSortingKey, "FileIcon")) {
                    return H5.compare(this.FileIcon, H5.box(other.FileIcon, Tesserae.LineAwesome, System.Enum.toStringFn(Tesserae.LineAwesome)));
                }

                if (System.String.equals(columnSortingKey, "FileName")) {
                    return System.String.compare(this.FileName, other.FileName, 4);
                }

                if (System.String.equals(columnSortingKey, "DateModified")) {
                    return H5.compare(this.DateModified, other.DateModified);
                }

                if (System.String.equals(columnSortingKey, "ModifiedBy")) {
                    return System.String.compare(this.FileName, other.FileName, 4);
                }

                if (System.String.equals(columnSortingKey, "FileSize")) {
                    return H5.compare(this.FileSize, other.FileSize);
                }

                throw new System.InvalidOperationException.$ctor1(System.String.format("Can not match {0} to current list item", [columnSortingKey]));
            },
            Render: function (columns, createGridCellExpression) {
                return new (H5.GeneratorEnumerable$1(tss.IC))(H5.fn.bind(this, function (columns, createGridCellExpression) {
                    var $s = 0,
                        $jff,
                        $rv,
                        $ae;

                    var $en = new (H5.GeneratorEnumerator$1(tss.IC))(H5.fn.bind(this, function () {
                        try {
                            for (;;) {
                                switch ($s) {
                                    case 0: {
                                        $en.current = createGridCellExpression(System.Array.getItem(columns, 0, tss.IDetailsListColumn), H5.fn.bind(this, function () {
                                                return tss.UI.Icon$2(this.FileIcon);
                                            }));
                                            $s = 1;
                                            return true;
                                    }
                                    case 1: {
                                        $en.current = createGridCellExpression(System.Array.getItem(columns, 1, tss.IDetailsListColumn), H5.fn.bind(this, function () {
                                                return tss.UI.TextBlock(this.FileName);
                                            }));
                                            $s = 2;
                                            return true;
                                    }
                                    case 2: {
                                        $en.current = createGridCellExpression(System.Array.getItem(columns, 2, tss.IDetailsListColumn), H5.fn.bind(this, function () {
                                                return tss.UI.TextBlock(System.DateTime.format(this.DateModified, "d"));
                                            }));
                                            $s = 3;
                                            return true;
                                    }
                                    case 3: {
                                        $en.current = createGridCellExpression(System.Array.getItem(columns, 3, tss.IDetailsListColumn), H5.fn.bind(this, function () {
                                                return tss.UI.TextBlock(this.ModifiedBy);
                                            }));
                                            $s = 4;
                                            return true;
                                    }
                                    case 4: {
                                        $en.current = createGridCellExpression(System.Array.getItem(columns, 4, tss.IDetailsListColumn), H5.fn.bind(this, function () {
                                                return tss.UI.TextBlock(System.Double.format(this.FileSize));
                                            }));
                                            $s = 5;
                                            return true;
                                    }
                                    case 5: {

                                    }
                                    default: {
                                        return false;
                                    }
                                }
                            }
                        } catch($ae1) {
                            $ae = System.Exception.create($ae1);
                            throw $ae;
                        }
                    }));
                    return $en;
                }, arguments));
            }
        }
    });

    H5.define("Tesserae.Tests.Samples.DetailsListSampleItemWithComponents", {
        inherits: function () { return [tss.IDetailsListItemT(Tesserae.Tests.Samples.DetailsListSampleItemWithComponents)]; },
        fields: {
            Icon: 0,
            CheckBox: null,
            Name: null,
            Button: null,
            ChoiceGroup: null,
            Dropdown: null,
            Toggle: null
        },
        props: {
            EnableOnListItemClickEvent: {
                get: function () {
                    return false;
                }
            }
        },
        alias: [
            "EnableOnListItemClickEvent", "tss$IDetailsListItem$EnableOnListItemClickEvent",
            "OnListItemClick", "tss$IDetailsListItem$OnListItemClick",
            "CompareTo", ["tss$IDetailsListItemT$Tesserae$Tests$Samples$DetailsListSampleItemWithComponents$CompareTo", "tss$IDetailsListItemT$CompareTo"],
            "Render", "tss$IDetailsListItem$Render"
        ],
        methods: {
            OnListItemClick: function (listItemIndex) { },
            CompareTo: function (other, columnSortingKey) {
                return 0;
            },
            WithIcon: function (icon) {
                this.Icon = icon;
                return this;
            },
            WithCheckBox: function (checkBox) {
                this.CheckBox = checkBox;
                return this;
            },
            WithName: function (name) {
                this.Name = name;
                return this;
            },
            WithButton: function (button) {
                this.Button = button;
                return this;
            },
            WithChoiceGroup: function (choiceGroup) {
                this.ChoiceGroup = choiceGroup;

                return this;
            },
            WithDropdown: function (dropdown) {
                this.Dropdown = dropdown;
                return this;
            },
            WithToggle: function (toggle) {
                this.Toggle = toggle;
                return this;
            },
            Render: function (columns, createGridCellExpression) {
                return new (H5.GeneratorEnumerable$1(tss.IC))(H5.fn.bind(this, function (columns, createGridCellExpression) {
                    var $s = 0,
                        $jff,
                        $rv,
                        $ae;

                    var $en = new (H5.GeneratorEnumerator$1(tss.IC))(H5.fn.bind(this, function () {
                        try {
                            for (;;) {
                                switch ($s) {
                                    case 0: {
                                        $en.current = createGridCellExpression(System.Array.getItem(columns, 0, tss.IDetailsListColumn), H5.fn.bind(this, function () {
                                                return tss.UI.Icon$2(this.Icon);
                                            }));
                                            $s = 1;
                                            return true;
                                    }
                                    case 1: {
                                        $en.current = createGridCellExpression(System.Array.getItem(columns, 1, tss.IDetailsListColumn), H5.fn.bind(this, function () {
                                                return this.CheckBox;
                                            }));
                                            $s = 2;
                                            return true;
                                    }
                                    case 2: {
                                        $en.current = createGridCellExpression(System.Array.getItem(columns, 2, tss.IDetailsListColumn), H5.fn.bind(this, function () {
                                                return tss.UI.TextBlock(this.Name);
                                            }));
                                            $s = 3;
                                            return true;
                                    }
                                    case 3: {
                                        $en.current = createGridCellExpression(System.Array.getItem(columns, 3, tss.IDetailsListColumn), H5.fn.bind(this, function () {
                                                return this.Button;
                                            }));
                                            $s = 4;
                                            return true;
                                    }
                                    case 4: {
                                        $en.current = createGridCellExpression(System.Array.getItem(columns, 4, tss.IDetailsListColumn), H5.fn.bind(this, function () {
                                                return this.ChoiceGroup;
                                            }));
                                            $s = 5;
                                            return true;
                                    }
                                    case 5: {
                                        $en.current = createGridCellExpression(System.Array.getItem(columns, 5, tss.IDetailsListColumn), H5.fn.bind(this, function () {
                                                return this.Dropdown;
                                            }));
                                            $s = 6;
                                            return true;
                                    }
                                    case 6: {
                                        $en.current = createGridCellExpression(System.Array.getItem(columns, 6, tss.IDetailsListColumn), H5.fn.bind(this, function () {
                                                return this.Toggle;
                                            }));
                                            $s = 7;
                                            return true;
                                    }
                                    case 7: {

                                    }
                                    default: {
                                        return false;
                                    }
                                }
                            }
                        } catch($ae1) {
                            $ae = System.Exception.create($ae1);
                            throw $ae;
                        }
                    }));
                    return $en;
                }, arguments));
            }
        }
    });

    H5.define("Tesserae.Tests.Samples.DialogSample", {
        inherits: [tss.IC],
        fields: {
            _content: null
        },
        alias: ["Render", "tss$IC$Render"],
        ctors: {
            ctor: function () {
                this.$initialize();
                var dialog = tss.UI.Dialog("Lorem Ipsum");
                var response = tss.UI.TextBlock();

                this._content = tss.SectionStackX.Section(tss.SectionStackX.Section(tss.SectionStackX.Section(tss.SectionStackX.Title(tss.UI.SectionStack(), Tesserae.Tests.Samples.SamplesHelper.SampleHeader("DialogSample")), tss.ICTX.Children$6(tss.S, tss.UI.Stack(), [Tesserae.Tests.Samples.SamplesHelper.SampleTitle("Overview"), tss.UI.TextBlock("Dialogs are temporary, modal UI overlay that generally provide contextual app information or require user confirmation/input. In most cases, Dialogs block interactions with the web page or application until being explicitly dismissed, and often request action from the user. They are primarily used for lightweight creation or edit tasks, and simple management tasks."), tss.ITFX.MediumPlus(tss.txt, tss.UI.TextBlock("Best Practices"))])), tss.ICTX.Children$6(tss.S, tss.UI.Stack(), [tss.ICTX.Children$6(tss.S, tss.UI.Stack().Horizontal(), [tss.ICTX.Children$6(tss.S, tss.ICX.Width(tss.S, tss.UI.Stack(), tss.usX.percent$1(40)), [Tesserae.Tests.Samples.SamplesHelper.SampleSubTitle("Do"), Tesserae.Tests.Samples.SamplesHelper.SampleDo("Use Dialogs for quick, actionable interactions, such as making a choice or needing the user to provide information."), Tesserae.Tests.Samples.SamplesHelper.SampleDo("When possible, try a non-blocking Dialog before resorting to a blocking Dialog."), Tesserae.Tests.Samples.SamplesHelper.SampleDo("Only include information needed to help users make a decision."), Tesserae.Tests.Samples.SamplesHelper.SampleDo("Button text should reflect the actions available to the user (e.g. save, delete)."), Tesserae.Tests.Samples.SamplesHelper.SampleDo("Validate that the user's entries are acceptable before closing the Dialog. Show an inline validation error near the field they must correct.")]), tss.ICTX.Children$6(tss.S, tss.ICX.Width(tss.S, tss.UI.Stack(), tss.usX.percent$1(40)), [Tesserae.Tests.Samples.SamplesHelper.SampleSubTitle("Don't"), Tesserae.Tests.Samples.SamplesHelper.SampleDont("Don\u2019t overuse Modals. In some cases they can be perceived as interrupting workflow, and too many can be a bad user experience."), Tesserae.Tests.Samples.SamplesHelper.SampleDont("Avoid \"Are you sure ?\" or confirmation Dialogs unless the user is making an irreversible or destructive choice."), Tesserae.Tests.Samples.SamplesHelper.SampleDont("Do not use a blocking Dialog unless absolutely necessary because they are very disruptive."), Tesserae.Tests.Samples.SamplesHelper.SampleDont("Don\u2019t have long sentences or complicated choices."), Tesserae.Tests.Samples.SamplesHelper.SampleDont("Avoid generic button labels like \"Ok\" if you can be more specific about the action a user is about to complete."), Tesserae.Tests.Samples.SamplesHelper.SampleDont("Don't dismiss the Dialog if underlying problem is not fixed. Don't put the user back into a broken/error state."), Tesserae.Tests.Samples.SamplesHelper.SampleDont("Don't provide the user with more than 3 buttons.")])])])), tss.ICTX.Children$6(tss.S, tss.UI.Stack(), [Tesserae.Tests.Samples.SamplesHelper.SampleTitle("Usage"), tss.UI.Button$1("Open Dialog").OnClick(function (c, ev) {
                    dialog.Show();
                }), tss.ICTX.Children$6(tss.S, tss.UI.Stack().Horizontal(), [tss.UI.Button$1("Open YesNo").OnClick(function (c, ev) {
                    tss.UI.Dialog("Sample Dialog").YesNo(function () {
                        tss.txtX.Text(tss.txt, response, "Clicked Yes");
                    }, function () {
                        tss.txtX.Text(tss.txt, response, "Clicked No");
                    });
                }), tss.UI.Button$1("Open YesNoCancel").OnClick(function (c, ev) {
                    tss.UI.Dialog("Sample Dialog").YesNoCancel(function () {
                        tss.txtX.Text(tss.txt, response, "Clicked Yes");
                    }, function () {
                        tss.txtX.Text(tss.txt, response, "Clicked No");
                    }, function () {
                        tss.txtX.Text(tss.txt, response, "Clicked Cancel");
                    });
                }), tss.UI.Button$1("Open Ok").OnClick(function (c, ev) {
                    tss.UI.Dialog("Sample Dialog").Ok(function () {
                        tss.txtX.Text(tss.txt, response, "Clicked Ok");
                    });
                }), tss.UI.Button$1("Open RetryCancel").OnClick(function (c, ev) {
                    tss.UI.Dialog("Sample Dialog").RetryCancel(function () {
                        tss.txtX.Text(tss.txt, response, "Clicked Retry");
                    }, function () {
                        tss.txtX.Text(tss.txt, response, "Clicked Cancel");
                    });
                })]), tss.UI.Button$1("Open YesNo with dark overlay").OnClick(function (c, ev) {
                    tss.UI.Dialog("Sample Dialog").Dark().YesNo(function () {
                        tss.txtX.Text(tss.txt, response, "Clicked Yes");
                    }, function () {
                        tss.txtX.Text(tss.txt, response, "Clicked No");
                    }, function (y) {
                        return y.Success().SetText("Yes!");
                    }, function (n) {
                        return n.Danger().SetText("Nope");
                    });
                }), tss.UI.Button$1("Open YesNoCancel with dark overlay").OnClick(function (c, ev) {
                    tss.UI.Dialog("Sample Dialog").Dark().YesNoCancel(function () {
                        tss.txtX.Text(tss.txt, response, "Clicked Yes");
                    }, function () {
                        tss.txtX.Text(tss.txt, response, "Clicked No");
                    }, function () {
                        tss.txtX.Text(tss.txt, response, "Clicked Cancel");
                    });
                }), tss.UI.Button$1("Open Ok with dark overlay").OnClick(function (c, ev) {
                    tss.UI.Dialog("Sample Dialog").Dark().Ok(function () {
                        tss.txtX.Text(tss.txt, response, "Clicked Ok");
                    });
                }), tss.UI.Button$1("Open RetryCancel with dark overlay").OnClick(function (c, ev) {
                    tss.UI.Dialog("Sample Dialog").Dark().RetryCancel(function () {
                        tss.txtX.Text(tss.txt, response, "Clicked Retry");
                    }, function () {
                        tss.txtX.Text(tss.txt, response, "Clicked Cancel");
                    });
                }), response]));
                dialog.Content(tss.ICTX.Children$6(tss.S, tss.UI.Stack(), [tss.UI.TextBlock("Lorem ipsum dolor sit amet, consectetur adipiscing elit."), tss.UI.Toggle$1("Is draggable").OnChange(function (c, ev) {
                    dialog.IsDraggable = c.IsChecked;
                }), tss.UI.Toggle$1("Is dark overlay").OnChange(function (c, ev) {
                    dialog.IsDark = c.IsChecked;
                }).Checked(dialog.IsDark)])).Commands([tss.ICX.AlignEnd(tss.Button, tss.UI.Button$1("Send").Primary()).OnClick(function (c, ev) {
                    dialog.Hide();
                }), tss.ICX.AlignEnd(tss.Button, tss.UI.Button$1("Don`t send")).OnClick(function (c, ev) {
                    dialog.Hide();
                })]);
            }
        },
        methods: {
            Render: function () {
                return this._content.tss$IC$Render();
            }
        }
    });

    H5.define("Tesserae.Tests.Samples.DropdownSample", {
        inherits: [tss.IC],
        statics: {
            methods: {
                StartLoadingAsyncDataImmediately: function (dropdown) {
                    tss.tX.fireAndForget(dropdown.LoadItemsAsync());
                    return dropdown;
                },
                GetAsync: function (url) {
                    var $s = 0,
                        $t1, 
                        $tr1, 
                        $jff, 
                        $tcs = new H5.TCS(), 
                        $rv, 
                        xmlHttp, 
                        tcs, 
                        tcsTask, 
                        $ae, 
                        $ab = H5.fn.bind(this, function () {
                            try {
                                for (;;) {
                                    $s = H5.STEP([0,1,2,3,4], $s);
                                    switch ($s) {
                                        case 0: {
                                            xmlHttp = new (XMLHttpRequest)();
                                            xmlHttp.open("GET", url, true);

                                            xmlHttp.setRequestHeader("Access-Control-Allow-Origin", "*");

                                            tcs = new System.Threading.Tasks.TaskCompletionSource();

                                            xmlHttp.onreadystatechange = function (e) {
                                                if (xmlHttp.readyState === 0) {
                                                    tcs.setException(new System.Exception("Request aborted"));
                                                } else if (xmlHttp.readyState === 4) {
                                                    if (xmlHttp.status === 200 || xmlHttp.status === 201 || xmlHttp.status === 304) {
                                                        tcs.setResult(xmlHttp.responseText);
                                                    } else {
                                                        tcs.setException(new System.Exception("Request failed"));
                                                    }
                                                }
                                            };

                                            xmlHttp.send();

                                            tcsTask = tcs.task;
                                            $s = 1;
                                            continue;
                                        }
                                        case 1: {
                                            if ( true ) {
                                                $s = 2;
                                                continue;
                                            } 
                                            $s = 4;
                                            continue;
                                        }
                                        case 2: {
                                            $t1 = System.Threading.Tasks.Task.whenAny(tcsTask, System.Threading.Tasks.Task.delay(150));
                                            $s = 3;
                                            if ($t1.isC()) {
                                                continue;
                                            }
                                            $t1.c($ab);
                                            return;
                                        }
                                        case 3: {
                                            $tr1 = $t1.gAR();
                                            if (tcsTask.isCompleted()) {
                                                if (tcsTask.isFaulted()) {
                                                    throw tcsTask.getException();
                                                }
                                                $tcs.sR(tcsTask.getResult());
                                                return;
                                            }

                                            $s = 1;
                                            continue;
                                        }
                                        case 4: {
                                            $tcs.sR(null);
                                            return;
                                        }
                                        default: {
                                            $tcs.sR(null);
                                            return;
                                        }
                                    }
                                }
                            } catch($ae1) {
                                $ae = System.Exception.create($ae1);
                                $tcs.sE($ae);
                            }
                        }, arguments);

                    $ab();
                    return $tcs.task;
                }
            }
        },
        fields: {
            _content: null
        },
        alias: ["Render", "tss$IC$Render"],
        ctors: {
            ctor: function () {
                this.$initialize();
                var dropdownForValidationExample = tss.UI.Dropdown();
                dropdownForValidationExample.Attach(function (dd) {
                    var $t;
                    if (dd.SelectedItems.length !== 1 || !H5.rE(($t = dd.SelectedItems)[System.Array.index(0, $t)].Text, "1-1")) {
                        dd.IsInvalid = true;
                        dd.Error = "Some error happens, need 1-1";
                    } else {
                        dd.IsInvalid = false;
                    }
                });

                this._content = tss.SectionStackX.Section(tss.SectionStackX.Section(tss.SectionStackX.Section(tss.SectionStackX.Title(tss.UI.SectionStack(), Tesserae.Tests.Samples.SamplesHelper.SampleHeader("DropdownSample")), tss.ICTX.Children$6(tss.S, tss.UI.Stack(), [Tesserae.Tests.Samples.SamplesHelper.SampleTitle("Overview"), tss.UI.TextBlock("A Dropdown is a list in which the selected item is always visible, and the others are visible on demand by clicking a drop-down button. They are used to simplify the design and make a choice within the UI. When closed, only the selected item is visible. When users click the drop-down button, all the options become visible. To change the value, users open the list and click another value or use the arrow keys (up and down) to select a new value.")])), tss.ICTX.Children$6(tss.S, tss.UI.Stack(), [Tesserae.Tests.Samples.SamplesHelper.SampleTitle("Best Practices"), tss.ICTX.Children$6(tss.S, tss.UI.Stack().Horizontal(), [tss.ICTX.Children$6(tss.S, tss.ICX.Width(tss.S, tss.UI.Stack(), tss.usX.percent$1(40)), [Tesserae.Tests.Samples.SamplesHelper.SampleSubTitle("Do"), Tesserae.Tests.Samples.SamplesHelper.SampleDo("Use a Dropdown when there are multiple choices that can be collapsed under one title. Or if the list of items is long or when space is constrained."), Tesserae.Tests.Samples.SamplesHelper.SampleDo("Use shortened statements or single words as options."), Tesserae.Tests.Samples.SamplesHelper.SampleDo("Use a Dropdown when the selected option is more important than the alternatives (in contrast to radio buttons where all the choices are visible putting more emphasis on the other options).")]), tss.ICTX.Children$6(tss.S, tss.ICX.Width(tss.S, tss.UI.Stack(), tss.usX.percent$1(40)), [Tesserae.Tests.Samples.SamplesHelper.SampleSubTitle("Don't"), Tesserae.Tests.Samples.SamplesHelper.SampleDo("Use if there are less than 7 options, use a ChoiceGroup instead.")])])])), tss.ICTX.Children$6(tss.S, tss.UI.Stack(), [Tesserae.Tests.Samples.SamplesHelper.SampleTitle("Usage"), tss.ITFX.Medium(tss.txt, tss.UI.TextBlock("Basic Dropdowns")), tss.ICTX.Children$6(tss.S, tss.ICX.Width(tss.S, tss.UI.Stack(), tss.usX.percent$1(40)), [tss.UI.Label$1("Standard").SetContent(tss.UI.Dropdown().Items$1([tss.UI.DropdownItem$1("1-1").Selected(), tss.UI.DropdownItem$1("1-2")]))]), tss.ICTX.Children$6(tss.S, tss.ICX.Width(tss.S, tss.UI.Stack(), tss.usX.percent$1(40)), [tss.UI.Label$1("Standard with Headers").SetContent(tss.UI.Dropdown().Items$1([tss.UI.DropdownItem$1("Header 1").Header(), tss.UI.DropdownItem$1("1-1"), tss.UI.DropdownItem$1("1-2"), tss.UI.DropdownItem$1("1-3"), tss.UI.DropdownItem$1("1-4").Disabled(), tss.UI.DropdownItem$1("1-5"), tss.UI.DropdownItem().Divider(), tss.UI.DropdownItem$1("Header 2").Header(), tss.UI.DropdownItem$1("2-1"), tss.UI.DropdownItem$1("2-2"), tss.UI.DropdownItem$1("2-3").Selected(), tss.UI.DropdownItem$1("2-4"), tss.UI.DropdownItem$1("2-5")])), tss.UI.Label$1("Multi-select with custom on-selected text").SetContent(tss.UI.Dropdown().Multi().Items$1([tss.UI.DropdownItem$1("Header 1").Header(), tss.UI.DropdownItem$1("1-1", "H1-1-1"), tss.UI.DropdownItem$1("1-2", "H1-1-2").Selected(), tss.UI.DropdownItem$1("1-3", "H1-1-3"), tss.UI.DropdownItem$1("1-4", "H1-1-4").Disabled(), tss.UI.DropdownItem$1("1-5", "H1-1-5"), tss.UI.DropdownItem().Divider(), tss.UI.DropdownItem$1("Header 2").Header(), tss.UI.DropdownItem$1("2-1", "H2-2-1"), tss.UI.DropdownItem$1("2-2", "H2-2-2"), tss.UI.DropdownItem$1("2-3", "H2-2-3"), tss.UI.DropdownItem$1("2-4", "H2-2-4").Selected(), tss.UI.DropdownItem$1("2-5", "H2-2-5")])), tss.UI.Label$1("Validation").SetContent(dropdownForValidationExample.Items$1([tss.UI.DropdownItem$1("Header 1").Header(), tss.UI.DropdownItem$1("1-1").Selected(), tss.UI.DropdownItem$1("1-2"), tss.UI.DropdownItem$1("1-3"), tss.UI.DropdownItem$1("1-4").Disabled(), tss.UI.DropdownItem$1("1-5"), tss.UI.DropdownItem().Divider(), tss.UI.DropdownItem$1("Header 2").Header(), tss.UI.DropdownItem$1("2-1"), tss.UI.DropdownItem$1("2-2"), tss.UI.DropdownItem$1("2-3"), tss.UI.DropdownItem$1("2-4"), tss.UI.DropdownItem$1("2-5")])), tss.UI.Label$1("Disabled").SetContent(tss.UI.Dropdown().Disabled().Items$1([tss.UI.DropdownItem$1("Header 1").Header(), tss.UI.DropdownItem$1("1-1").Selected(), tss.UI.DropdownItem$1("1-2"), tss.UI.DropdownItem$1("1-3"), tss.UI.DropdownItem$1("1-4").Disabled(), tss.UI.DropdownItem$1("1-5"), tss.UI.DropdownItem().Divider(), tss.UI.DropdownItem$1("Header 2").Header(), tss.UI.DropdownItem$1("2-1"), tss.UI.DropdownItem$1("2-2"), tss.UI.DropdownItem$1("2-3"), tss.UI.DropdownItem$1("2-4"), tss.UI.DropdownItem$1("2-5")])), tss.UI.Label$1("Required").SetContent(tss.UI.Dropdown().Required().Items$1([tss.UI.DropdownItem$1("Header 1").Header(), tss.UI.DropdownItem$1("1-1").Selected(), tss.UI.DropdownItem$1("1-2"), tss.UI.DropdownItem$1("1-3"), tss.UI.DropdownItem$1("1-4").Disabled(), tss.UI.DropdownItem$1("1-5"), tss.UI.DropdownItem().Divider(), tss.UI.DropdownItem$1("Header 2").Header(), tss.UI.DropdownItem$1("2-1"), tss.UI.DropdownItem$1("2-2"), tss.UI.DropdownItem$1("2-3"), tss.UI.DropdownItem$1("2-4"), tss.UI.DropdownItem$1("2-5")])), tss.UI.Label$1("No available items").SetContent(tss.UI.Dropdown().Items$1(System.Array.init(0, null, tss.Dropdown.Item))), tss.UI.Label$1("No available items with custom message").SetContent(tss.UI.Dropdown$2("There's nothing to select, sorry!").Items$1(System.Array.init(0, null, tss.Dropdown.Item))), tss.UI.Label$1("Async 5 seconds delay (starts loading immediately)").SetContent(Tesserae.Tests.Samples.DropdownSample.StartLoadingAsyncDataImmediately(tss.UI.Dropdown().Items(H5.fn.cacheBind(this, this.GetItemsAsync)))), tss.UI.Label$1("Async 5 seconds delay (will start loading when dropdown is opened)").SetContent(tss.UI.Dropdown().Items(H5.fn.cacheBind(this, this.GetItemsAsync))), tss.UI.Label$1("Async 5 seconds delay that returns no items (starts loading immediately)").SetContent(Tesserae.Tests.Samples.DropdownSample.StartLoadingAsyncDataImmediately(tss.UI.Dropdown().Items(H5.fn.cacheBind(this, this.GetZeroItemsAsync)))), tss.UI.Label$1("Async wait Google.com (need CORS)").SetContent(tss.UI.Dropdown().Items(H5.fn.cacheBind(this, this.GetGoogleItemsAsync)))])]));
            }
        },
        methods: {
            GetItemsAsync: function () {
                var $s = 0,
                    $t1, 
                    $jff, 
                    $tcs = new H5.TCS(), 
                    $rv, 
                    $ae, 
                    $ab = H5.fn.bind(this, function () {
                        try {
                            for (;;) {
                                $s = H5.STEP([0,1], $s);
                                switch ($s) {
                                    case 0: {
                                        $t1 = System.Threading.Tasks.Task.delay(5000);
                                        $s = 1;
                                        if ($t1.isC()) {
                                            continue;
                                        }
                                        $t1.c($ab);
                                        return;
                                    }
                                    case 1: {
                                        $t1.gAR();
                                        $tcs.sR(System.Array.init([tss.UI.DropdownItem$1("Header 1").Header(), tss.UI.DropdownItem$1("1-1"), tss.UI.DropdownItem$1("1-2"), tss.UI.DropdownItem$1("1-3"), tss.UI.DropdownItem$1("1-4").Disabled(), tss.UI.DropdownItem$1("1-5"), tss.UI.DropdownItem().Divider(), tss.UI.DropdownItem$1("Header 2").Header(), tss.UI.DropdownItem$1("2-1"), tss.UI.DropdownItem$1("2-2"), tss.UI.DropdownItem$1("2-3"), tss.UI.DropdownItem$1("2-4"), tss.UI.DropdownItem$1("2-5")], tss.Dropdown.Item));
                                        return;
                                    }
                                    default: {
                                        $tcs.sR(null);
                                        return;
                                    }
                                }
                            }
                        } catch($ae1) {
                            $ae = System.Exception.create($ae1);
                            $tcs.sE($ae);
                        }
                    }, arguments);

                $ab();
                return $tcs.task;
            },
            GetZeroItemsAsync: function () {
                var $s = 0,
                    $t1, 
                    $jff, 
                    $tcs = new H5.TCS(), 
                    $rv, 
                    $ae, 
                    $ab = H5.fn.bind(this, function () {
                        try {
                            for (;;) {
                                $s = H5.STEP([0,1], $s);
                                switch ($s) {
                                    case 0: {
                                        $t1 = System.Threading.Tasks.Task.delay(5000);
                                        $s = 1;
                                        if ($t1.isC()) {
                                            continue;
                                        }
                                        $t1.c($ab);
                                        return;
                                    }
                                    case 1: {
                                        $t1.gAR();
                                        $tcs.sR(System.Array.init(0, null, tss.Dropdown.Item));
                                        return;
                                    }
                                    default: {
                                        $tcs.sR(null);
                                        return;
                                    }
                                }
                            }
                        } catch($ae1) {
                            $ae = System.Exception.create($ae1);
                            $tcs.sE($ae);
                        }
                    }, arguments);

                $ab();
                return $tcs.task;
            },
            GetGoogleItemsAsync: function () {
                var $s = 0,
                    $t1, 
                    $tr1, 
                    $t2, 
                    $jff, 
                    $tcs = new H5.TCS(), 
                    $rv, 
                    $ae, 
                    $ae1, 
                    $ab = H5.fn.bind(this, function () {
                        try {
                            for (;;) {
                                $s = H5.STEP([1,2,3,4,5], $s);
                                switch ($s) {

                                    case 1: {
                                        $t1 = Tesserae.Tests.Samples.DropdownSample.GetAsync("http://google.com");
                                        $s = 2;
                                        if ($t1.isC()) {
                                            continue;
                                        }
                                        $t1.c($ab);
                                        return;
                                    }
                                    case 2: {
                                        $tr1 = $t1.gAR();
                                        $s = 5;
                                        continue;
                                    }
                                    case 3: {
                                        $t2 = System.Threading.Tasks.Task.delay(1000);
                                        $s = 4;
                                        if ($t2.isC()) {
                                            continue;
                                        }
                                        $t2.c($ab);
                                        return;
                                    }
                                    case 4: {
                                        $t2.gAR();
                                        $ae = null;
                                        $s = 5;
                                        continue;
                                    }
                                    case 5: {
                                        $tcs.sR(System.Array.init([tss.UI.DropdownItem$1("Header 1").Header(), tss.UI.DropdownItem$1("1-1"), tss.UI.DropdownItem$1("1-2"), tss.UI.DropdownItem$1("1-3"), tss.UI.DropdownItem$1("1-4").Disabled(), tss.UI.DropdownItem$1("1-5"), tss.UI.DropdownItem().Divider(), tss.UI.DropdownItem$1("Header 2").Header(), tss.UI.DropdownItem$1("2-1"), tss.UI.DropdownItem$1("2-2"), tss.UI.DropdownItem$1("2-3"), tss.UI.DropdownItem$1("2-4"), tss.UI.DropdownItem$1("2-5")], tss.Dropdown.Item));
                                        return;
                                    }
                                    default: {
                                        $tcs.sR(null);
                                        return;
                                    }
                                }
                            }
                        } catch($ae1) {
                            $ae = System.Exception.create($ae1);
                            if ( $s >= 1 && $s <= 2 ) {
                                $s = 3;
                                $ab();
                                return;
                            }
                            $tcs.sE($ae);
                        }
                    }, arguments);

                $ab();
                return $tcs.task;
            },
            Render: function () {
                return this._content.tss$IC$Render();
            }
        }
    });

    H5.define("Tesserae.Tests.Samples.EditableLabelSample", {
        inherits: [tss.IC],
        fields: {
            _content: null
        },
        alias: ["Render", "tss$IC$Render"],
        ctors: {
            ctor: function () {
                this.$initialize();
                this._content = tss.SectionStackX.Section(tss.SectionStackX.Section(tss.SectionStackX.Section(tss.SectionStackX.Title(tss.UI.SectionStack(), Tesserae.Tests.Samples.SamplesHelper.SampleHeader("EditableLabelSample")), tss.ICTX.Children$6(tss.S, tss.UI.Stack(), [Tesserae.Tests.Samples.SamplesHelper.SampleTitle("Overview"), tss.UI.TextBlock("Use for showing information that can be edited by users.")])), tss.ICTX.Children$6(tss.S, tss.UI.Stack(), [Tesserae.Tests.Samples.SamplesHelper.SampleTitle("Best Practices"), tss.ICTX.Children$6(tss.S, tss.UI.Stack().Horizontal(), [tss.ICTX.Children$6(tss.S, tss.ICX.Width(tss.S, tss.UI.Stack(), tss.usX.percent$1(40)), [Tesserae.Tests.Samples.SamplesHelper.SampleSubTitle("Do"), Tesserae.Tests.Samples.SamplesHelper.SampleDo("Use anywhere information can be edited easily by users.")]), tss.ICTX.Children$6(tss.S, tss.ICX.Width(tss.S, tss.UI.Stack(), tss.usX.percent$1(40)), [Tesserae.Tests.Samples.SamplesHelper.SampleSubTitle("Don't"), Tesserae.Tests.Samples.SamplesHelper.SampleDont("Don\u2019t forget to register a OnSave() callback")])])])), tss.ICTX.Children$6(tss.S, tss.UI.Stack(), [Tesserae.Tests.Samples.SamplesHelper.SampleTitle("Usage"), tss.ITFX.Medium(tss.txt, tss.UI.TextBlock("Label")), tss.UI.EditableLabel("You can click to edit me"), tss.ITFX.Large(tss.EditableLabel, tss.UI.EditableLabel("You can also change the font-size")), tss.ITFX.Bold(tss.EditableLabel, tss.ITFX.Large(tss.EditableLabel, tss.UI.EditableLabel("and weight as a normal label"))), tss.ITFX.Medium(tss.txt, tss.UI.TextBlock("Text Area")), tss.ICX.Width(tss.EditableArea, tss.UI.EditableArea("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\nUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\nExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."), tss.usX.px$1(300))]));
            }
        },
        methods: {
            Render: function () {
                return this._content.tss$IC$Render();
            }
        }
    });

    H5.define("Tesserae.Tests.Samples.FileSelectorAndDropAreaSample", {
        inherits: [tss.IC],
        fields: {
            _content: null
        },
        alias: ["Render", "tss$IC$Render"],
        ctors: {
            ctor: function () {
                this.$initialize();
                var size = { };
                var droppedFiles = { };
                this._content = tss.SectionStackX.Section(tss.SectionStackX.Section(tss.SectionStackX.Section(tss.SectionStackX.Title(tss.UI.SectionStack(), Tesserae.Tests.Samples.SamplesHelper.SampleHeader("FileSelectorAndDropAreaSample")), tss.ICTX.Children$6(tss.S, tss.UI.Stack(), [Tesserae.Tests.Samples.SamplesHelper.SampleTitle("Overview"), tss.UI.TextBlock("Use the file selector to allow users to select a single file. Use the file dropdown area to allow drag-and-drop for one or multiple files.")])), tss.ICTX.Children$6(tss.S, tss.UI.Stack(), [Tesserae.Tests.Samples.SamplesHelper.SampleTitle("Best Practices"), tss.ICTX.Children$6(tss.S, tss.UI.Stack().Horizontal(), [tss.ICTX.Children$6(tss.S, tss.ICX.Width(tss.S, tss.UI.Stack(), tss.usX.percent$1(40)), [Tesserae.Tests.Samples.SamplesHelper.SampleSubTitle("Do"), Tesserae.Tests.Samples.SamplesHelper.SampleDo("Filter files by supported types"), Tesserae.Tests.Samples.SamplesHelper.SampleDo("Provide a message for the file drop area"), Tesserae.Tests.Samples.SamplesHelper.SampleDo(System.String.format("Attach the {0} event handler", ["OnFileDropped"]))]), tss.ICTX.Children$6(tss.S, tss.ICX.Width(tss.S, tss.UI.Stack(), tss.usX.percent$1(40)), [Tesserae.Tests.Samples.SamplesHelper.SampleSubTitle("Don't"), Tesserae.Tests.Samples.SamplesHelper.SampleDont("TODO")])])])), tss.ICTX.Children$6(tss.S, tss.UI.Stack(), [Tesserae.Tests.Samples.SamplesHelper.SampleTitle("Usage"), Tesserae.Tests.Samples.SamplesHelper.SampleSubTitle("File Selector"), tss.UI.Label$1("Selected file size: ").Inline().SetContent(tss.UI.Var(tss.txt, tss.UI.TextBlock(""), size)), tss.UI.FileSelector().OnFileSelected(function (fs, e) {
                    size.v.Text = (H5.toString(fs.SelectedFile.size) || "") + " bytes";
                }), tss.UI.FileSelector().SetPlaceholder("You must select a zip file").Required().SetAccepts(".zip").OnFileSelected(function (fs, e) {
                    size.v.Text = (H5.toString(fs.SelectedFile.size) || "") + " bytes";
                }), tss.UI.FileSelector().SetPlaceholder("Please select any image").SetAccepts("image/*").OnFileSelected(function (fs, e) {
                    size.v.Text = (H5.toString(fs.SelectedFile.size) || "") + " bytes";
                }), Tesserae.Tests.Samples.SamplesHelper.SampleSubTitle("File Drop Area"), tss.UI.Label$1("Dropped Files: ").SetContent(tss.UI.Var(tss.S, tss.UI.Stack(), droppedFiles)), tss.UI.FileDropArea().OnFileDropped(function (s, e) {
                    droppedFiles.v.Add(tss.ITFX.Small(tss.txt, tss.UI.TextBlock(e.name)));
                }).Multiple()]));
            }
        },
        methods: {
            Render: function () {
                return this._content.tss$IC$Render();
            }
        }
    });

    H5.define("Tesserae.Tests.Samples.FloatSample", {
        inherits: [tss.IC],
        fields: {
            _content: null
        },
        alias: ["Render", "tss$IC$Render"],
        ctors: {
            ctor: function () {
                this.$initialize();
                this._content = tss.SectionStackX.Section(tss.SectionStackX.Section(tss.SectionStackX.Section(tss.SectionStackX.Title(tss.UI.SectionStack(), Tesserae.Tests.Samples.SamplesHelper.SampleHeader("FloatSample")), tss.ICTX.Children$6(tss.S, tss.UI.Stack(), [Tesserae.Tests.Samples.SamplesHelper.SampleTitle("Overview"), tss.UI.TextBlock("Floats are used to create absolute-positioned overlays within other containers")])), tss.ICTX.Children$6(tss.S, tss.ICX.WidthStretch(tss.S, tss.UI.Stack()), [Tesserae.Tests.Samples.SamplesHelper.SampleTitle("Best Practices"), tss.ICTX.Children$6(tss.S, tss.ICX.WidthStretch(tss.S, tss.UI.Stack()).Horizontal(), [tss.ICTX.Children$6(tss.S, tss.ICX.WidthStretch(tss.S, tss.UI.Stack()), [Tesserae.Tests.Samples.SamplesHelper.SampleSubTitle("Do"), Tesserae.Tests.Samples.SamplesHelper.SampleDo("Make sure you're not covering anything else under your container")]), tss.ICTX.Children$6(tss.S, tss.ICX.WidthStretch(tss.S, tss.UI.Stack()), [Tesserae.Tests.Samples.SamplesHelper.SampleSubTitle("Don't"), Tesserae.Tests.Samples.SamplesHelper.SampleDont("Don't forget to add .Relative() to the parent Stack or Grid where you place a Float component!")])])])), tss.ICTX.Children$6(tss.S, tss.UI.Stack(), [Tesserae.Tests.Samples.SamplesHelper.SampleTitle("Usage"), tss.ITFX.Medium(tss.txt, tss.UI.TextBlock("Possible Positions")), tss.ICTX.Children$6(tss.S, tss.ICX.Height(tss.S, tss.ICX.WS(tss.S, tss.UI.Stack().Relative().Horizontal()), tss.usX.px$1(400)), [tss.UI.Float(tss.UI.Button$1("TopLeft"), "tss-float-topleft"), tss.UI.Float(tss.UI.Button$1("TopMiddle"), "tss-float-topmiddle"), tss.UI.Float(tss.UI.Button$1("TopRight"), "tss-float-topright"), tss.UI.Float(tss.UI.Button$1("LeftCenter"), "tss-float-leftcenter"), tss.UI.Float(tss.UI.Button$1("Center"), "tss-float-center"), tss.UI.Float(tss.UI.Button$1("RightCenter"), "tss-float-rightcenter"), tss.UI.Float(tss.UI.Button$1("BottomLeft"), "tss-float-bottomleft"), tss.UI.Float(tss.UI.Button$1("BottonMiddle"), "tss-float-bottonmiddle"), tss.UI.Float(tss.UI.Button$1("BottomRight"), "tss-float-bottomright")])]));
            }
        },
        methods: {
            Render: function () {
                return this._content.tss$IC$Render();
            }
        }
    });

    H5.define("Tesserae.Tests.Samples.HorizontalSeparatorSample", {
        inherits: [tss.IC],
        fields: {
            _content: null
        },
        alias: ["Render", "tss$IC$Render"],
        ctors: {
            ctor: function () {
                this.$initialize();
                this._content = tss.SectionStackX.Section(tss.SectionStackX.Section(tss.SectionStackX.Section(tss.SectionStackX.Title(tss.UI.SectionStack(), Tesserae.Tests.Samples.SamplesHelper.SampleHeader("HorizontalSeparatorSample")), tss.ICTX.Children$6(tss.S, tss.UI.Stack(), [Tesserae.Tests.Samples.SamplesHelper.SampleTitle("Overview"), tss.UI.TextBlock("A separator visually separates content into groups."), tss.UI.TextBlock("You can render content in the separator by specifying the component's children. The component's children can be plain text or a component like Icon. The content is center-aligned by default.")])), tss.ICTX.Children$6(tss.S, tss.UI.Stack(), [Tesserae.Tests.Samples.SamplesHelper.SampleTitle("Best Practices"), tss.ICTX.Children$6(tss.S, tss.UI.Stack().Horizontal(), [tss.ICTX.Children$6(tss.S, tss.ICX.Width(tss.S, tss.UI.Stack(), tss.usX.percent$1(40)), [Tesserae.Tests.Samples.SamplesHelper.SampleSubTitle("Do"), Tesserae.Tests.Samples.SamplesHelper.SampleDo("Explain what is the group this separator introduces"), Tesserae.Tests.Samples.SamplesHelper.SampleDo("Be short and concise.")]), tss.ICTX.Children$6(tss.S, tss.ICX.Width(tss.S, tss.UI.Stack(), tss.usX.percent$1(40)), [Tesserae.Tests.Samples.SamplesHelper.SampleSubTitle("Don't"), Tesserae.Tests.Samples.SamplesHelper.SampleDont("Use long group names")])])])), tss.ICTX.Children$6(tss.S, tss.UI.Stack(), [Tesserae.Tests.Samples.SamplesHelper.SampleTitle("Usage"), tss.UI.HorizontalSeparator("Center"), tss.UI.HorizontalSeparator("Left").Left(), tss.UI.HorizontalSeparator("Right").Right(), Tesserae.Tests.Samples.SamplesHelper.SampleTitle("Custom Separators"), tss.UI.HorizontalSeparator$1(tss.ICTX.Children$6(tss.S, tss.UI.Stack().Horizontal(), [tss.ICX.PaddingRight(tss.Icon, tss.ICX.AlignCenter(tss.Icon, tss.UI.Icon("las la-plane")), tss.usX.px$1(8)), tss.ICX.AlignCenter(tss.txt, tss.ITFX.MediumPlus(tss.txt, tss.ITFX.SemiBold(tss.txt, tss.UI.TextBlock("Custom Center"))))])).Primary(), tss.UI.HorizontalSeparator$1(tss.ICTX.Children$6(tss.S, tss.UI.Stack().Horizontal(), [tss.ICX.PaddingRight(tss.Icon, tss.ICX.AlignCenter(tss.Icon, tss.UI.Icon("las la-plane")), tss.usX.px$1(8)), tss.ICX.AlignCenter(tss.txt, tss.ITFX.MediumPlus(tss.txt, tss.ITFX.SemiBold(tss.txt, tss.UI.TextBlock("Custom Left"))))])).Primary().Left(), tss.UI.HorizontalSeparator$1(tss.ICTX.Children$6(tss.S, tss.UI.Stack().Horizontal(), [tss.ICX.PaddingRight(tss.Icon, tss.ICX.AlignCenter(tss.Icon, tss.UI.Icon("las la-plane")), tss.usX.px$1(8)), tss.ICX.AlignCenter(tss.txt, tss.ITFX.MediumPlus(tss.txt, tss.ITFX.SemiBold(tss.txt, tss.UI.TextBlock("Custom Right"))))])).Primary().Right()]));
            }
        },
        methods: {
            Render: function () {
                return this._content.tss$IC$Render();
            }
        }
    });

    H5.define("Tesserae.Tests.Samples.InfiniteScrollingListSample", {
        inherits: [tss.IC],
        fields: {
            _content: null
        },
        alias: ["Render", "tss$IC$Render"],
        ctors: {
            ctor: function () {
                this.$initialize();

                var page = 1;
                var pageGrid = 1;
                this._content = tss.SectionStackX.Section(tss.SectionStackX.Section(tss.SectionStackX.Title(tss.ICX.WidthStretch(tss.SectionStack, tss.UI.SectionStack()), Tesserae.Tests.Samples.SamplesHelper.SampleHeader("InfiniteScrollingListSample")), tss.ICTX.Children$6(tss.S, tss.UI.Stack(), [Tesserae.Tests.Samples.SamplesHelper.SampleTitle("Overview"), tss.ICX.PaddingBottom(tss.txt, tss.UI.TextBlock("List provides a base component for rendering paginates sets of items. It is agnostic of the tile component used, and selection management. These concerns can be layered separately."), tss.usX.px$1(16)), tss.ICX.PaddingBottom(tss.txt, tss.UI.TextBlock("Performance is adequate for smaller lists, for large number of items use VirtualizedList."), tss.usX.px$1(16))])), tss.ICTX.Children$6(tss.S, tss.UI.Stack(), [Tesserae.Tests.Samples.SamplesHelper.SampleTitle("Usage"), tss.ICX.PaddingBottom(tss.txt, tss.ITFX.Medium(tss.txt, tss.UI.TextBlock("Basic List with VisibilitySensor")), tss.usX.px$1(16)), tss.ICX.PaddingBottom(tss.InfiniteScrollingList, tss.ICX.Height(tss.InfiniteScrollingList, tss.UI.InfiniteScrollingList$2(this.GetSomeItems(20, 0, " initial"), H5.fn.bind(this, function () {
                    var $s = 0,
                        $t1, 
                        $tr1, 
                        $jff, 
                        $tcs = new H5.TCS(), 
                        $rv, 
                        $ae, 
                        $ab = H5.fn.bind(this, function () {
                            try {
                                for (;;) {
                                    $s = H5.STEP([0,1], $s);
                                    switch ($s) {
                                        case 0: {
                                            $t1 = this.GetSomeItemsAsync(20, H5.identity(page, ((page = (page + 1) | 0))));
                                                $s = 1;
                                                if ($t1.isC()) {
                                                    continue;
                                                }
                                                $t1.c($ab);
                                                return;
                                        }
                                        case 1: {
                                            $tr1 = $t1.gAR();
                                            $tcs.sR($tr1);
                                                return;
                                        }
                                        default: {
                                            $tcs.sR(null);
                                            return;
                                        }
                                    }
                                }
                            } catch($ae1) {
                                $ae = System.Exception.create($ae1);
                                $tcs.sE($ae);
                            }
                        }, arguments);

                    $ab();
                    return $tcs.task;
                })), tss.usX.px$1(500)), tss.usX.px$1(32)), tss.ICX.PaddingBottom(tss.txt, tss.ITFX.Medium(tss.txt, tss.UI.TextBlock("Basic Grid List with VisibilitySensor")), tss.usX.px$1(16)), tss.ICX.PaddingBottom(tss.InfiniteScrollingList, tss.ICX.Height(tss.InfiniteScrollingList, tss.UI.InfiniteScrollingList$2(this.GetSomeItems(20, 0, " initial"), H5.fn.bind(this, function () {
                    var $s = 0,
                        $t1, 
                        $tr1, 
                        $jff, 
                        $tcs = new H5.TCS(), 
                        $rv, 
                        $ae, 
                        $ab = H5.fn.bind(this, function () {
                            try {
                                for (;;) {
                                    $s = H5.STEP([0,1], $s);
                                    switch ($s) {
                                        case 0: {
                                            $t1 = this.GetSomeItemsAsync(20, H5.identity(pageGrid, ((pageGrid = (pageGrid + 1) | 0))));
                                                $s = 1;
                                                if ($t1.isC()) {
                                                    continue;
                                                }
                                                $t1.c($ab);
                                                return;
                                        }
                                        case 1: {
                                            $tr1 = $t1.gAR();
                                            $tcs.sR($tr1);
                                                return;
                                        }
                                        default: {
                                            $tcs.sR(null);
                                            return;
                                        }
                                    }
                                }
                            } catch($ae1) {
                                $ae = System.Exception.create($ae1);
                                $tcs.sE($ae);
                            }
                        }, arguments);

                    $ab();
                    return $tcs.task;
                }), [tss.usX.percent$1(33), tss.usX.percent$1(33), tss.usX.percent$1(34)]), tss.usX.px$1(500)), tss.usX.px$1(32))]));
            }
        },
        methods: {
            Render: function () {
                return this._content.tss$IC$Render();
            },
            GetSomeItems: function (count, page, txt) {
                if (page === void 0) { page = -1; }
                if (txt === void 0) { txt = ""; }
                var pageString = page > 0 ? H5.toString(page) : "";
                return System.Linq.Enumerable.range(1, count).select(function (number) {
                    var card = tss.ICX.MinWidth(tss.Card, tss.UI.Card(tss.txtX.NonSelectable(tss.txt, tss.UI.TextBlock((System.String.format("Lorem Ipsum {0} / {1}", pageString, H5.box(number, System.Int32)) || "") + (txt || "")))), tss.usX.px$1(200));
                    return card;
                }).ToArray(tss.Card);
            },
            GetSomeItemsAsync: function (count, page, txt) {
                var $s = 0,
                    $t1, 
                    $jff, 
                    $tcs = new H5.TCS(), 
                    $rv, 
                    $ae, 
                    $ab = H5.fn.bind(this, function () {
                        try {
                            for (;;) {
                                $s = H5.STEP([0,1], $s);
                                switch ($s) {
                                    case 0: {
                                        if (page === void 0) { page = -1; }
                                        if (txt === void 0) { txt = ""; }
                                        $t1 = System.Threading.Tasks.Task.delay(200);
                                        $s = 1;
                                        if ($t1.isC()) {
                                            continue;
                                        }
                                        $t1.c($ab);
                                        return;
                                    }
                                    case 1: {
                                        $t1.gAR();
                                        $tcs.sR(this.GetSomeItems(count, page, txt));
                                        return;
                                    }
                                    default: {
                                        $tcs.sR(null);
                                        return;
                                    }
                                }
                            }
                        } catch($ae1) {
                            $ae = System.Exception.create($ae1);
                            $tcs.sE($ae);
                        }
                    }, arguments);

                $ab();
                return $tcs.task;
            }
        }
    });

    H5.define("Tesserae.Tests.Samples.ItemsListSample", {
        inherits: [tss.IC],
        fields: {
            _content: null
        },
        alias: ["Render", "tss$IC$Render"],
        ctors: {
            ctor: function () {
                this.$initialize();
                var obsList = new (tss.ObservableList(tss.IC)).ctor();

                var vs = tss.UI.VisibilitySensor(H5.fn.bind(this, function (v) {
                    obsList.remove(v);
                    obsList.AddRange(this.GetSomeItems(20));
                    v.Reset();
                    obsList.add(v);
                }));

                obsList.AddRange(this.GetSomeItems(10));
                obsList.add(vs);
                this._content = tss.SectionStackX.Section(tss.SectionStackX.Section(tss.SectionStackX.Title(tss.ICX.WidthStretch(tss.SectionStack, tss.UI.SectionStack()), Tesserae.Tests.Samples.SamplesHelper.SampleHeader("ItemsListSample")), tss.ICTX.Children$6(tss.S, tss.UI.Stack(), [Tesserae.Tests.Samples.SamplesHelper.SampleTitle("Overview"), tss.ICX.PaddingBottom(tss.txt, tss.UI.TextBlock("List provides a base component for rendering small sets of items. It is agnostic of the tile component used, and selection management. These concerns can be layered separately."), tss.usX.px$1(16)), tss.ICX.PaddingBottom(tss.txt, tss.UI.TextBlock("Performance is adequate for smaller lists, for large number of items use VirtualizedList."), tss.usX.px$1(16))])), tss.ICTX.Children$6(tss.S, tss.UI.Stack(), [Tesserae.Tests.Samples.SamplesHelper.SampleTitle("Usage"), tss.ICX.PaddingBottom(tss.txt, tss.ITFX.Medium(tss.txt, tss.UI.TextBlock("Basic List")), tss.usX.px$1(16)), tss.ICX.PaddingBottom(tss.ItemsList, tss.ICX.Height(tss.ItemsList, tss.ICX.PaddingBottom(tss.ItemsList, tss.UI.ItemsList(this.GetSomeItems(10)), tss.usX.px$1(16)), tss.usX.px$1(500)), tss.usX.px$1(32)), tss.ICX.PaddingBottom(tss.txt, tss.ITFX.Medium(tss.txt, tss.UI.TextBlock("Basic List with columns")), tss.usX.px$1(16)), tss.ICX.PaddingBottom(tss.ItemsList, tss.ICX.Height(tss.ItemsList, tss.UI.ItemsList(this.GetSomeItems(100), [tss.usX.percent$1(25), tss.usX.percent$1(25), tss.usX.percent$1(25), tss.usX.percent$1(25)]), tss.usX.px$1(500)), tss.usX.px$1(32)), tss.ICX.PaddingBottom(tss.txt, tss.ITFX.Medium(tss.txt, tss.UI.TextBlock("Basic List with VisibilitySensor")), tss.usX.px$1(16)), tss.ICX.PaddingBottom(tss.ItemsList, tss.ICX.Height(tss.ItemsList, tss.UI.ItemsList$1(obsList, [tss.usX.percent$1(25), tss.usX.percent$1(25), tss.usX.percent$1(25), tss.usX.percent$1(25)]), tss.usX.px$1(500)), tss.usX.px$1(32)), tss.ICX.PaddingBottom(tss.txt, tss.ITFX.Medium(tss.txt, tss.UI.TextBlock("Basic List with Empty List Message ")), tss.usX.px$1(16)), tss.ICX.Height(tss.ItemsList, tss.UI.ItemsList(System.Array.init(0, null, tss.IC), [tss.usX.percent$1(25), tss.usX.percent$1(25), tss.usX.percent$1(25), tss.usX.percent$1(25)]).WithEmptyMessage(function () {
                    return tss.ICX.MinHeight(tss.BackgroundArea, tss.ICX.HeightStretch(tss.BackgroundArea, tss.ICX.WidthStretch(tss.BackgroundArea, tss.UI.BackgroundArea(tss.UI.Card(tss.ICX.Padding(tss.txt, tss.UI.TextBlock("Empty list"), tss.usX.px$1(16)))))), tss.usX.px$1(100));
                }), tss.usX.px$1(500))]));
            }
        },
        methods: {
            Render: function () {
                return this._content.tss$IC$Render();
            },
            GetSomeItems: function (count) {
                return System.Linq.Enumerable.range(1, count).select(function (number) {
                    return tss.ICX.MinWidth(tss.Card, tss.UI.Card(tss.txtX.NonSelectable(tss.txt, tss.UI.TextBlock(System.String.format("Lorem Ipsum {0}", [H5.box(number, System.Int32)])))), tss.usX.px$1(200));
                }).ToArray(tss.Card);
            }
        }
    });

    H5.define("Tesserae.Tests.Samples.LabelSample", {
        inherits: [tss.IC],
        fields: {
            _content: null
        },
        alias: ["Render", "tss$IC$Render"],
        ctors: {
            ctor: function () {
                this.$initialize();
                this._content = tss.SectionStackX.Section(tss.SectionStackX.Section(tss.SectionStackX.Section(tss.SectionStackX.Title(tss.UI.SectionStack(), Tesserae.Tests.Samples.SamplesHelper.SampleHeader("LabelSample")), tss.ICTX.Children$6(tss.S, tss.UI.Stack(), [Tesserae.Tests.Samples.SamplesHelper.SampleTitle("Overview"), tss.UI.TextBlock("Labels give a name or title to a component or group of components. Labels should be in close proximity to the component or group they are paired with. Some components, such as TextField, Dropdown, or Toggle, already have Labels incorporated, but other components may optionally add a Label if it helps inform the user of the component\u2019s purpose.")])), tss.ICTX.Children$6(tss.S, tss.UI.Stack(), [Tesserae.Tests.Samples.SamplesHelper.SampleTitle("Best Practices"), tss.ICTX.Children$6(tss.S, tss.UI.Stack().Horizontal(), [tss.ICTX.Children$6(tss.S, tss.ICX.Width(tss.S, tss.UI.Stack(), tss.usX.percent$1(40)), [Tesserae.Tests.Samples.SamplesHelper.SampleSubTitle("Do"), Tesserae.Tests.Samples.SamplesHelper.SampleDo("Use sentence casing, e.g. \u201cFirst name\u201d."), Tesserae.Tests.Samples.SamplesHelper.SampleDo("Be short and concise."), Tesserae.Tests.Samples.SamplesHelper.SampleDo("When adding a Label to components, use the text as a noun or short noun phrase.")]), tss.ICTX.Children$6(tss.S, tss.ICX.Width(tss.S, tss.UI.Stack(), tss.usX.percent$1(40)), [Tesserae.Tests.Samples.SamplesHelper.SampleSubTitle("Don't"), Tesserae.Tests.Samples.SamplesHelper.SampleDo("Use Labels as instructional text, e.g. \u201cClick to get started\u201d."), Tesserae.Tests.Samples.SamplesHelper.SampleDo("Don\u2019t use full sentences or complex punctuation (colons, semicolons, etc.).")])])])), tss.ICTX.Children$6(tss.S, tss.UI.Stack(), [Tesserae.Tests.Samples.SamplesHelper.SampleTitle("Usage"), tss.UI.Label$1("I'm Label"), tss.txtX.Disabled(tss.Label, tss.UI.Label$1("I'm a disabled Label")), tss.txtX.Required(tss.Label, tss.UI.Label$1("I'm a required Label")), tss.txtX.Primary(tss.Label, tss.UI.Label$1("I'm a primary Label")), tss.txtX.Secondary(tss.Label, tss.UI.Label$1("I'm a secondary Label")), tss.ITFX.Tiny(tss.Label, tss.ITFX.Regular(tss.Label, tss.UI.Label$1("I'm a tiny Label"))), tss.UI.Label$1("A Label for An Input").SetContent(tss.UI.TextBox$1()), tss.ICX.PaddingBottom(tss.txt, tss.ICX.PaddingTop(tss.txt, tss.ITFX.Medium(tss.txt, tss.UI.TextBlock("Inline without auto-width")), tss.usX.px$1(16)), tss.usX.px$1(8)), tss.ICTX.Children$6(tss.S, tss.UI.Stack(), [tss.UI.Label$1("Lbl").Inline().SetContent(tss.UI.TextBox$1()), tss.UI.Label$1("Label").Inline().SetContent(tss.UI.TextBox$1()), tss.UI.Label$1("Bigger Label").Inline().SetContent(tss.UI.TextBox$1()), tss.UI.Label$1("The Biggest Label").Inline().SetContent(tss.UI.TextBox$1())]), tss.ICX.PaddingBottom(tss.txt, tss.ICX.PaddingTop(tss.txt, tss.ITFX.Medium(tss.txt, tss.UI.TextBlock("Inline with auto-width")), tss.usX.px$1(16)), tss.usX.px$1(8)), tss.ICTX.Children$6(tss.S, tss.UI.Stack(), [tss.UI.Label$1("Lbl").Inline().AutoWidth().SetContent(tss.UI.TextBox$1()), tss.UI.Label$1("Label").Inline().AutoWidth().SetContent(tss.UI.TextBox$1()), tss.UI.Label$1("Bigger Label").Inline().AutoWidth().SetContent(tss.UI.TextBox$1()), tss.UI.Label$1("The Biggest Label").Inline().AutoWidth().SetContent(tss.UI.TextBox$1())]), tss.ICX.PaddingBottom(tss.txt, tss.ICX.PaddingTop(tss.txt, tss.ITFX.Medium(tss.txt, tss.UI.TextBlock("Inline with auto-width, aligned right")), tss.usX.px$1(16)), tss.usX.px$1(8)), tss.ICTX.Children$6(tss.S, tss.UI.Stack(), [tss.UI.Label$1("Lbl").Inline().AutoWidth(1, true).SetContent(tss.UI.TextBox$1()), tss.UI.Label$1("Label").Inline().AutoWidth(1, true).SetContent(tss.UI.TextBox$1()), tss.UI.Label$1("Bigger Label").Inline().AutoWidth(1, true).SetContent(tss.UI.TextBox$1()), tss.UI.Label$1("The Biggest Label").Inline().AutoWidth(1, true).SetContent(tss.UI.TextBox$1())])]));
            }
        },
        methods: {
            Render: function () {
                return this._content.tss$IC$Render();
            }
        }
    });

    H5.define("Tesserae.Tests.Samples.LayerSample", {
        inherits: [tss.IC],
        fields: {
            _content: null
        },
        alias: ["Render", "tss$IC$Render"],
        ctors: {
            ctor: function () {
                this.$initialize();
                var layer = tss.UI.Layer();
                var layerHost = tss.UI.LayerHost();
                this._content = tss.SectionStackX.Section(tss.SectionStackX.Section(tss.SectionStackX.Title(tss.UI.SectionStack(), Tesserae.Tests.Samples.SamplesHelper.SampleHeader("LayerSample")), tss.ICTX.Children$6(tss.S, tss.UI.Stack(), [Tesserae.Tests.Samples.SamplesHelper.SampleTitle("Overview"), tss.UI.TextBlock("A Layer is a technical component that does not have specific Design guidance."), tss.UI.TextBlock("Layers are used to render content outside of a DOM tree, at the end of the document. This allows content to escape traditional boundaries caused by \"overflow: hidden\" css rules and keeps it on the top without using z-index rules. This is useful for example in ContextualMenu and Tooltip scenarios, where the content should always overlay everything else.")])), tss.ICTX.Children$6(tss.S, tss.UI.Stack(), [Tesserae.Tests.Samples.SamplesHelper.SampleTitle("Usage"), tss.ITFX.Medium(tss.txt, tss.UI.TextBlock("Basic layered content")), tss.LayerExtensions.Content(tss.Layer, layer, tss.ICTX.Children$6(tss.S, tss.UI.Stack().Horizontal(), [tss.UI.TextBlock("This is example layer content."), tss.UI.Toggle(), tss.UI.Toggle(), tss.UI.Toggle()])), tss.UI.Toggle$1("Toggle Component Layer").OnChange(function (s, e) {
                    layer.IsVisible = s.IsChecked;
                }), tss.ITFX.Medium(tss.txt, tss.UI.TextBlock("Using LayerHost to control projection")), tss.UI.Toggle$1("Show on Host").OnChange(function (s, e) {
                    layer.Host = s.IsChecked ? layerHost : null;
                }), layerHost]));
            }
        },
        methods: {
            Render: function () {
                return this._content.tss$IC$Render();
            }
        }
    });

    H5.define("Tesserae.Tests.Samples.LineAwesomeSample", {
        inherits: [tss.IC],
        statics: {
            methods: {
                ToValidName: function (icon) {
                    var words = System.Linq.Enumerable.from(System.String.split(icon, System.Array.init([45], System.Char).map(function (i) {{ return String.fromCharCode(i); }}), null, 1), System.String).select(function (i) {
                            return (i.substr(0, 1).toUpperCase() || "") + (i.substr(1) || "");
                        }).ToArray(System.String);

                    var name = (words).join("");
                    if (System.Char.isDigit(name.charCodeAt(0))) {
                        return "_" + (name || "");
                    } else {
                        return name;
                    }
                }
            }
        },
        fields: {
            _content: null
        },
        alias: ["Render", "tss$IC$Render"],
        ctors: {
            ctor: function () {
                var $t;
                this.$initialize();

                var searchAsYouType = tss.UI.TextBlock("search for icons");
                this._content = tss.ICX.MaxHeight(tss.SectionStack, tss.ICX.PaddingBottom(tss.SectionStack, tss.SectionStackX.Section(tss.SectionStackX.Section(tss.SectionStackX.Section(tss.SectionStackX.Title(tss.UI.SectionStack(), Tesserae.Tests.Samples.SamplesHelper.SampleHeader("LineAwesomeSample")), tss.ICTX.Children$6(tss.S, tss.UI.Stack(), [Tesserae.Tests.Samples.SamplesHelper.SampleTitle("Overview"), tss.UI.TextBlock("Tesserae integrates the LineAwesome icons as part of the package, with an auto-generated strongly typed enum for them.")])), tss.ICTX.Children$6(tss.S, tss.UI.Stack(), [Tesserae.Tests.Samples.SamplesHelper.SampleTitle("Best Practices"), tss.ICTX.Children$6(tss.S, tss.UI.Stack().Horizontal(), [tss.ICTX.Children$6(tss.S, tss.ICX.Width(tss.S, tss.UI.Stack(), tss.usX.percent$1(40)), [Tesserae.Tests.Samples.SamplesHelper.SampleSubTitle("Do"), Tesserae.Tests.Samples.SamplesHelper.SampleDo("TODO")]), tss.ICTX.Children$6(tss.S, tss.ICX.Width(tss.S, tss.UI.Stack(), tss.usX.percent$1(40)), [Tesserae.Tests.Samples.SamplesHelper.SampleSubTitle("Don't"), Tesserae.Tests.Samples.SamplesHelper.SampleDont("TODO")])])])), tss.ICTX.Children$6(tss.S, tss.UI.Stack(), [Tesserae.Tests.Samples.SamplesHelper.SampleTitle("Usage:"), tss.ITFX.Medium(tss.txt, tss.UI.TextBlock(System.String.format("enum {0}:", ["LineAwesome"]))), tss.UI.SearchableList(Tesserae.Tests.Samples.LineAwesomeSample.IconItem, ($t = Tesserae.Tests.Samples.LineAwesomeSample.IconItem, System.Linq.Enumerable.from(this.GetAllIcons(), $t).ToArray($t)), [tss.usX.percent$1(25), tss.usX.percent$1(25), tss.usX.percent$1(25), tss.usX.percent$1(25)])])), tss.usX.px$1(32)), tss.usX.vh$1(100));
            }
        },
        methods: {
            Render: function () {
                return this._content.tss$IC$Render();
            },
            GetAllIcons: function () {
                return new (H5.GeneratorEnumerable$1(Tesserae.Tests.Samples.LineAwesomeSample.IconItem))(H5.fn.bind(this, function ()  {
                    var $s = 0,
                        $jff,
                        $rv,
                        names,
                        values,
                        i,
                        $ae;

                    var $en = new (H5.GeneratorEnumerator$1(Tesserae.Tests.Samples.LineAwesomeSample.IconItem))(H5.fn.bind(this, function () {
                        try {
                            for (;;) {
                                switch ($s) {
                                    case 0: {
                                        names = System.Enum.getNames(Tesserae.LineAwesome);
                                            values = H5.cast(System.Enum.getValues(Tesserae.LineAwesome), System.Array.type(Tesserae.LineAwesome));

                                            i = 0;
                                            $s = 1;
                                            continue;
                                    }
                                    case 1: {
                                        if ( i < values.length ) {
                                                $s = 2;
                                                continue;
                                            }
                                        $s = 5;
                                        continue;
                                    }
                                    case 2: {
                                        $en.current = new Tesserae.Tests.Samples.LineAwesomeSample.IconItem(values[System.Array.index(i, values)], names[System.Array.index(i, names)]);
                                            $s = 3;
                                            return true;
                                    }
                                    case 3: {
                                        $s = 4;
                                        continue;
                                    }
                                    case 4: {
                                        i = (i + 1) | 0;
                                        $s = 1;
                                        continue;
                                    }
                                    case 5: {

                                    }
                                    default: {
                                        return false;
                                    }
                                }
                            }
                        } catch($ae1) {
                            $ae = System.Exception.create($ae1);
                            throw $ae;
                        }
                    }));
                    return $en;
                }));
            }
        }
    });

    H5.define("Tesserae.Tests.Samples.LineAwesomeSample.IconItem", {
        inherits: [tss.ISearchableItem],
        $kind: "nested class",
        fields: {
            _value: null,
            component: null
        },
        alias: [
            "IsMatch", "tss$ISearchableItem$IsMatch",
            "Render", "tss$ISearchableItem$Render"
        ],
        ctors: {
            ctor: function (icon, name) {
                this.$initialize();
                name = Tesserae.Tests.Samples.LineAwesomeSample.ToValidName(name.substr(3));
                this._value = (name || "") + " " + (System.Enum.toString(Tesserae.LineAwesome, icon) || "");
                this.component = tss.ICX.PaddingBottom(tss.S, tss.ICTX.Children$6(tss.S, tss.UI.Stack().Horizontal(), [tss.ICX.AlignCenter(tss.Icon, tss.ICX.MinWidth(tss.Icon, tss.UI.Icon$2(icon, "lal", "tss-fontsize-large", void 0), tss.usX.px$1(36))), tss.ICX.AlignCenter(tss.txt, tss.txtX.Wrap(tss.txt, tss.txtX.Title(tss.txt, tss.UI.TextBlock(System.String.format("{0}", [name])), System.Enum.toString(Tesserae.LineAwesome, icon))))]), tss.usX.px$1(4));
            }
        },
        methods: {
            IsMatch: function (searchTerm) {
                return System.String.contains(this._value,searchTerm);
            },
            Render: function () {
                return this.component;
            }
        }
    });

    H5.define("Tesserae.Tests.Samples.ModalSample", {
        inherits: [tss.IC],
        fields: {
            _content: null
        },
        alias: ["Render", "tss$IC$Render"],
        ctors: {
            ctor: function () {
                this.$initialize();
                var container = tss.UI.Raw$1();
                var modal = { };
                var lbl = { };
                tss.LayerExtensions.Content(tss.Modal, tss.ICX.Height(tss.Modal, tss.ICX.Width(tss.Modal, tss.UI.Var(tss.Modal, tss.UI.Modal("Lorem Ipsum"), modal).LightDismiss(), tss.usX.vw$1(60)), tss.usX.vh$1(60)).SetFooter(tss.ITFX.MediumPlus(tss.txt, tss.ITFX.SemiBold(tss.txt, tss.UI.TextBlock("This is a footer note")))), tss.ICTX.Children$6(tss.S, tss.UI.Stack(), [tss.UI.TextBlock("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lorem nulla, malesuada ut sagittis sit amet, vulputate in leo. Maecenas vulputate congue sapien eu tincidunt. Etiam eu sem turpis. Fusce tempor sagittis nunc, ut interdum ipsum vestibulum non. Proin dolor elit, aliquam eget tincidunt non, vestibulum ut turpis. In hac habitasse platea dictumst. In a odio eget enim porttitor maximus. Aliquam nulla nibh, ullamcorper aliquam placerat eu, viverra et dui. Phasellus ex lectus, maximus in mollis ac, luctus vel eros. Vivamus ultrices, turpis sed malesuada gravida, eros ipsum venenatis elit, et volutpat eros dui et ante. Quisque ultricies mi nec leo ultricies mollis. Vivamus egestas volutpat lacinia. Quisque pharetra eleifend efficitur. "), tss.UI.TextBlock("Mauris at nunc eget lectus lobortis facilisis et eget magna. Vestibulum venenatis augue sapien, rhoncus faucibus magna semper eget. Proin rutrum libero sagittis sapien aliquet auctor. Suspendisse tristique a magna at facilisis. Duis rhoncus feugiat magna in rutrum. Suspendisse semper, dolor et vestibulum lacinia, nunc felis malesuada ex, nec hendrerit justo ex et massa. Quisque quis mollis nulla. Nam commodo est ornare, rhoncus odio eu, pharetra tellus. Nunc sed velit mi."), tss.UI.TextBlock("Sed condimentum ultricies turpis convallis pharetra. Sed sagittis quam pharetra luctus porttitor. Cras vel consequat lectus. Sed nec fringilla urna, a aliquet libero. Aenean sed nisl purus. Vivamus vulputate felis et odio efficitur suscipit. Ut volutpat dictum lectus, ac rutrum massa accumsan at. Sed pharetra auctor finibus. In augue libero, commodo vitae nisi non, sagittis convallis ante. Phasellus malesuada eleifend mollis. Curabitur ultricies leo ac metus venenatis elementum."), tss.UI.TextBlock("Aenean egestas quam ut erat commodo blandit. Mauris ante nisl, pellentesque sed venenatis nec, aliquet sit amet enim. Praesent vitae diam non diam aliquet tristique non ut arcu. Pellentesque et ultrices eros. Fusce diam metus, mattis eu luctus nec, facilisis vel erat. Nam a lacus quis tellus gravida euismod. Nulla sed sem eget tortor cursus interdum. Sed vehicula tristique ultricies. Aenean libero purus, mollis quis massa quis, eleifend dictum massa. Fusce eu sapien sit amet odio lacinia placerat. Mauris varius risus sed aliquet cursus. Aenean lectus magna, tincidunt sit amet sodales a, volutpat ac leo. Morbi nisl sapien, tincidunt sit amet mauris quis, sollicitudin auctor est."), tss.UI.TextBlock("Nam id mi justo. Nam vehicula vulputate augue, ac pretium enim rutrum ultricies. Sed aliquet accumsan varius. Quisque ac auctor ligula. Fusce fringilla, odio et dignissim iaculis, est lacus ultrices risus, vitae condimentum enim urna eu nunc. In risus est, mattis non suscipit at, mattis ut ante. Maecenas consectetur urna vel erat maximus, non molestie massa consequat. Duis a feugiat nibh. Sed a hendrerit diam, a mattis est. In augue dolor, faucibus vel metus at, convallis rhoncus dui."), tss.UI.Label$1("Light Dismiss").Inline().AutoWidth().SetContent(tss.UI.Toggle().OnChange(function (s, e) {
                    modal.v.CanLightDismiss = s.IsChecked;
                }).Checked(modal.v.CanLightDismiss)), tss.UI.Label$1("Is draggable").Inline().AutoWidth().SetContent(tss.UI.Toggle().OnChange(function (s, e) {
                    modal.v.IsDraggable = s.IsChecked;
                }).Checked(modal.v.IsDraggable)), tss.UI.Label$1("Is dark overlay").Inline().AutoWidth().SetContent(tss.UI.Toggle().OnChange(function (s, e) {
                    modal.v.IsDark = s.IsChecked;
                }).Checked(modal.v.IsDark)), tss.UI.Label$1("Is non-blocking").Inline().AutoWidth().SetContent(tss.UI.Toggle().OnChange(function (s, e) {
                    modal.v.IsNonBlocking = s.IsChecked;
                }).Checked(modal.v.IsNonBlocking)), tss.UI.Label$1("Hide close button").Inline().AutoWidth().SetContent(tss.UI.Toggle().OnChange(function (s, e) {
                    modal.v.WillShowCloseButton = !s.IsChecked;
                }).Checked(!modal.v.WillShowCloseButton)), tss.UI.Var(tss.Label, tss.UI.Label$1("Open a dialog from here"), lbl).SetContent(tss.UI.Button$1("Open").OnClick(function (s, e) {
                    tss.UI.Dialog("Dialog over Modal").Content(tss.UI.TextBlock("Hello World!")).YesNo(function () {
                        lbl.v.Text = "Yes";
                    }, function () {
                        lbl.v.Text = "No";
                    });
                }))]));

                this._content = tss.SectionStackX.Section(tss.SectionStackX.Section(tss.SectionStackX.Section(tss.SectionStackX.Title(tss.UI.SectionStack(), Tesserae.Tests.Samples.SamplesHelper.SampleHeader("ModalSample")), tss.ICTX.Children$6(tss.S, tss.UI.Stack(), [Tesserae.Tests.Samples.SamplesHelper.SampleTitle("Overview"), tss.UI.TextBlock("Modals are temporary, modal UI overlay that generally provide contextual app information or require user confirmation/input, or can be used to advertise new app features. In some cases, Modals block interactions with the web page or application until being explicitly dismissed. They can be used for lightweight creation or edit tasks and simple management tasks, or for hosting heavier temporary content."), tss.UI.TextBlock("For usage requiring a quick choice from the user, Dialog may be a more appropriate control.")])), tss.ICTX.Children$6(tss.S, tss.UI.Stack(), [Tesserae.Tests.Samples.SamplesHelper.SampleTitle("Best Practices"), tss.ICTX.Children$6(tss.S, tss.UI.Stack().Horizontal(), [tss.ICTX.Children$6(tss.S, tss.ICX.Width(tss.S, tss.UI.Stack(), tss.usX.percent$1(40)), [Tesserae.Tests.Samples.SamplesHelper.SampleSubTitle("Do"), Tesserae.Tests.Samples.SamplesHelper.SampleDo("Use Modals for actionable interactions, such as needing the user to provide information or change settings."), Tesserae.Tests.Samples.SamplesHelper.SampleDo("When possible, try a non-blocking Modal before resorting to a blocking Modal."), Tesserae.Tests.Samples.SamplesHelper.SampleDo("Always have at least one focusable element inside a Modal.")]), tss.ICTX.Children$6(tss.S, tss.ICX.Width(tss.S, tss.UI.Stack(), tss.usX.percent$1(40)), [Tesserae.Tests.Samples.SamplesHelper.SampleSubTitle("Don't"), Tesserae.Tests.Samples.SamplesHelper.SampleDont("Don\u2019t overuse Modals. In some cases they can be perceived as interrupting workflow, and too many can be a bad user experience.")])])])), tss.ICTX.Children$6(tss.S, tss.UI.Stack(), [Tesserae.Tests.Samples.SamplesHelper.SampleTitle("Usage"), tss.UI.Button$1("Open Modal").OnClick(function (s, e) {
                    modal.v.Show();
                }), tss.UI.Button$1("Open Modal from top right").OnClick(function (s, e) {
                    modal.v.ShowAt(tss.usX.px$1(16), void 0, tss.usX.px$1(16), void 0);
                }), tss.UI.Button$1("Open Modal with minimum size").OnClick(function (s, e) {
                    tss.ICX.MinWidth(tss.Modal, tss.ICX.MinHeight(tss.Modal, tss.LayerExtensions.Content(tss.Modal, tss.UI.Modal$1().CenterContent().LightDismiss().Dark(), tss.ITFX.Tiny(tss.txt, tss.UI.TextBlock("small content"))), tss.usX.vh$1(50)), tss.usX.vw$1(50)).Show();
                }), Tesserae.Tests.Samples.SamplesHelper.SampleTitle("Embedded Modal"), tss.UI.Button$1("Open Modal Below").OnClick(function (s, e) {
                    container.Content$1(tss.ICX.MinWidth(tss.Modal, tss.ICX.MinHeight(tss.Modal, tss.LayerExtensions.Content(tss.Modal, tss.UI.Modal("Embedded Modal").CenterContent().LightDismiss().Dark(), tss.ITFX.Tiny(tss.txt, tss.UI.TextBlock("hosted small content"))), tss.usX.vh$1(30)), tss.usX.vw$1(50)).ShowEmbedded());
                }), container]));
            }
        },
        methods: {
            Render: function () {
                return this._content.tss$IC$Render();
            }
        }
    });

    H5.define("Tesserae.Tests.Samples.OverflowSetSample", {
        inherits: [tss.IC],
        fields: {
            _content: null
        },
        alias: ["Render", "tss$IC$Render"],
        ctors: {
            ctor: function () {
                this.$initialize();
                var msg = { };
                this._content = tss.SectionStackX.Section(tss.SectionStackX.Section(tss.SectionStackX.Section(tss.SectionStackX.Title(tss.UI.SectionStack(), Tesserae.Tests.Samples.SamplesHelper.SampleHeader("OverflowSetSample")), tss.ICTX.Children$6(tss.S, tss.UI.Stack(), [Tesserae.Tests.Samples.SamplesHelper.SampleTitle("Overview"), tss.UI.TextBlock("Breadcrumbs should be used as a navigational aid in your app or site. They indicate the current page\u2019s location within a hierarchy and help the user understand where they are in relation to the rest of that hierarchy. They also afford one-click access to higher levels of that hierarchy."), tss.UI.TextBlock("Breadcrumbs are typically placed, in horizontal form, under the masthead or navigation of an experience, above the primary content area.")])), tss.ICTX.Children$6(tss.S, tss.UI.Stack(), [Tesserae.Tests.Samples.SamplesHelper.SampleTitle("Best Practices"), tss.ICTX.Children$6(tss.S, tss.UI.Stack().Horizontal(), [tss.ICTX.Children$6(tss.S, tss.ICX.Width(tss.S, tss.UI.Stack(), tss.usX.percent$1(40)), [Tesserae.Tests.Samples.SamplesHelper.SampleSubTitle("Do"), Tesserae.Tests.Samples.SamplesHelper.SampleDo("Place Breadcrumbs at the top of a page, above a list of items, or above the main content of a page.")]), tss.ICTX.Children$6(tss.S, tss.ICX.Width(tss.S, tss.UI.Stack(), tss.usX.percent$1(40)), [Tesserae.Tests.Samples.SamplesHelper.SampleSubTitle("Don't"), Tesserae.Tests.Samples.SamplesHelper.SampleDont("Don't use Breadcrumbs as a primary way to navigate an app or site.")])])])), tss.ICTX.Children$6(tss.S, tss.UI.Stack(), [Tesserae.Tests.Samples.SamplesHelper.SampleTitle("Usage"), tss.UI.Label$1("Selected: ").SetContent(tss.UI.Var(tss.txt, tss.UI.TextBlock(), msg)), tss.ITFX.Medium(tss.txt, tss.UI.TextBlock("All Visible")), tss.ICX.PaddingBottom(tss.OverflowSet, tss.ICX.PaddingTop(tss.OverflowSet, tss.UI.OverflowSet(), tss.usX.px$1(16)), tss.usX.px$1(16)).Items([tss.UI.Button$1("Folder 1").Link().OnClick(function (s, e) {
                    tss.txtX.Text(tss.txt, msg.v, "Folder 1");
                }), tss.UI.Button$1("Folder 2").Link().OnClick(function (s, e) {
                    tss.txtX.Text(tss.txt, msg.v, "Folder 2");
                }).Disabled(), tss.UI.Button$1("Folder 3").Link().OnClick(function (s, e) {
                    tss.txtX.Text(tss.txt, msg.v, "Folder 3");
                }), tss.UI.Button$1("Folder 4").Link().OnClick(function (s, e) {
                    tss.txtX.Text(tss.txt, msg.v, "Folder 4");
                }), tss.UI.Button$1("Folder 5").Link().OnClick(function (s, e) {
                    tss.txtX.Text(tss.txt, msg.v, "Folder 5");
                }), tss.UI.Button$1("Folder 6").Link().OnClick(function (s, e) {
                    tss.txtX.Text(tss.txt, msg.v, "Folder 6");
                })]), tss.ITFX.Medium(tss.txt, tss.UI.TextBlock("All Visible, Small")), tss.ICX.PaddingBottom(tss.OverflowSet, tss.ICX.PaddingTop(tss.OverflowSet, tss.UI.OverflowSet().Small(), tss.usX.px$1(16)), tss.usX.px$1(16)).Items([tss.UI.Button$1("Folder 1").Link().OnClick(function (s, e) {
                    tss.txtX.Text(tss.txt, msg.v, "Folder 1");
                }), tss.UI.Button$1("Folder 2").Link().OnClick(function (s, e) {
                    tss.txtX.Text(tss.txt, msg.v, "Folder 2");
                }).Disabled(), tss.UI.Button$1("Folder 3").Link().OnClick(function (s, e) {
                    tss.txtX.Text(tss.txt, msg.v, "Folder 3");
                }), tss.UI.Button$1("Folder 4").Link().OnClick(function (s, e) {
                    tss.txtX.Text(tss.txt, msg.v, "Folder 4");
                }), tss.UI.Button$1("Folder 5").Link().OnClick(function (s, e) {
                    tss.txtX.Text(tss.txt, msg.v, "Folder 5");
                }), tss.UI.Button$1("Folder 6").Link().OnClick(function (s, e) {
                    tss.txtX.Text(tss.txt, msg.v, "Folder 6");
                })]), tss.ITFX.Medium(tss.txt, tss.UI.TextBlock("Collapse 200px")), tss.ICX.MaxWidth(tss.OverflowSet, tss.ICX.PaddingBottom(tss.OverflowSet, tss.ICX.PaddingTop(tss.OverflowSet, tss.UI.OverflowSet(), tss.usX.px$1(16)), tss.usX.px$1(16)), tss.usX.px$1(200)).Items([tss.UI.Button$1("Folder 1").Link().SetIcon("las la-acorn").OnClick(function (s, e) {
                    tss.txtX.Text(tss.txt, msg.v, "Folder 1");
                }), tss.UI.Button$1("Folder 2").Link().SetIcon("las la-corn").OnClick(function (s, e) {
                    tss.txtX.Text(tss.txt, msg.v, "Folder 2");
                }), tss.UI.Button$1("Folder 3").Link().SetIcon("las la-bacon").OnClick(function (s, e) {
                    tss.txtX.Text(tss.txt, msg.v, "Folder 3");
                }), tss.UI.Button$1("Folder 4").Link().SetIcon("las la-taco").OnClick(function (s, e) {
                    tss.txtX.Text(tss.txt, msg.v, "Folder 4");
                }), tss.UI.Button$1("Folder 5").Link().SetIcon("las la-pie").OnClick(function (s, e) {
                    tss.txtX.Text(tss.txt, msg.v, "Folder 5");
                }), tss.UI.Button$1("Folder 6").Link().SetIcon("las la-popcorn").OnClick(function (s, e) {
                    tss.txtX.Text(tss.txt, msg.v, "Folder 6");
                })]), tss.ITFX.Medium(tss.txt, tss.UI.TextBlock("Collapse 200px, Small")), tss.ICX.MaxWidth(tss.OverflowSet, tss.ICX.PaddingBottom(tss.OverflowSet, tss.ICX.PaddingTop(tss.OverflowSet, tss.UI.OverflowSet(), tss.usX.px$1(16)), tss.usX.px$1(16)).Small(), tss.usX.px$1(200)).Items([tss.UI.Button$1("Folder 1").Link().SetIcon("las la-acorn").OnClick(function (s, e) {
                    tss.txtX.Text(tss.txt, msg.v, "Folder 1");
                }), tss.UI.Button$1("Folder 2").Link().SetIcon("las la-corn").OnClick(function (s, e) {
                    tss.txtX.Text(tss.txt, msg.v, "Folder 2");
                }), tss.UI.Button$1("Folder 3").Link().SetIcon("las la-bacon").OnClick(function (s, e) {
                    tss.txtX.Text(tss.txt, msg.v, "Folder 3");
                }), tss.UI.Button$1("Folder 4").Link().SetIcon("las la-taco").OnClick(function (s, e) {
                    tss.txtX.Text(tss.txt, msg.v, "Folder 4");
                }), tss.UI.Button$1("Folder 5").Link().SetIcon("las la-pie").OnClick(function (s, e) {
                    tss.txtX.Text(tss.txt, msg.v, "Folder 5");
                }), tss.UI.Button$1("Folder 6").Link().SetIcon("las la-popcorn").OnClick(function (s, e) {
                    tss.txtX.Text(tss.txt, msg.v, "Folder 6");
                })]), tss.ITFX.Medium(tss.txt, tss.UI.TextBlock("Collapse 300px")), tss.ICX.MaxWidth(tss.OverflowSet, tss.ICX.PaddingBottom(tss.OverflowSet, tss.ICX.PaddingTop(tss.OverflowSet, tss.UI.OverflowSet(), tss.usX.px$1(16)), tss.usX.px$1(16)), tss.usX.px$1(300)).Items([tss.UI.Button$1("Folder 1").Link().OnClick(function (s, e) {
                    tss.txtX.Text(tss.txt, msg.v, "Folder 1");
                }), tss.UI.Button$1("Folder 2").Link().OnClick(function (s, e) {
                    tss.txtX.Text(tss.txt, msg.v, "Folder 2");
                }), tss.UI.Button$1("Folder 3").Link().OnClick(function (s, e) {
                    tss.txtX.Text(tss.txt, msg.v, "Folder 3");
                }), tss.UI.Button$1("Folder 4").Link().OnClick(function (s, e) {
                    tss.txtX.Text(tss.txt, msg.v, "Folder 4");
                }), tss.UI.Button$1("Folder 5").Link().OnClick(function (s, e) {
                    tss.txtX.Text(tss.txt, msg.v, "Folder 5");
                }), tss.UI.Button$1("Folder 6").Link().OnClick(function (s, e) {
                    tss.txtX.Text(tss.txt, msg.v, "Folder 6");
                })]), tss.ITFX.Medium(tss.txt, tss.UI.TextBlock("Collapse 300px, from second, custom chevron")), tss.ICX.MaxWidth(tss.OverflowSet, tss.ICX.PaddingBottom(tss.OverflowSet, tss.ICX.PaddingTop(tss.OverflowSet, tss.UI.OverflowSet(), tss.usX.px$1(16)), tss.usX.px$1(16)), tss.usX.px$1(300)).SetOverflowIndex(1).Items([tss.UI.Button$1("Folder 1").Link().OnClick(function (s, e) {
                    tss.txtX.Text(tss.txt, msg.v, "Folder 1");
                }), tss.UI.Button$1("Folder 2").Link().OnClick(function (s, e) {
                    tss.txtX.Text(tss.txt, msg.v, "Folder 2");
                }), tss.UI.Button$1("Folder 3").Link().OnClick(function (s, e) {
                    tss.txtX.Text(tss.txt, msg.v, "Folder 3");
                }), tss.UI.Button$1("Folder 4").Link().OnClick(function (s, e) {
                    tss.txtX.Text(tss.txt, msg.v, "Folder 4");
                }), tss.UI.Button$1("Folder 5").Link().OnClick(function (s, e) {
                    tss.txtX.Text(tss.txt, msg.v, "Folder 5");
                }), tss.UI.Button$1("Folder 6").Link().OnClick(function (s, e) {
                    tss.txtX.Text(tss.txt, msg.v, "Folder 6");
                })])]));
            }
        },
        methods: {
            Render: function () {
                return this._content.tss$IC$Render();
            }
        }
    });

    H5.define("Tesserae.Tests.Samples.PanelSample", {
        inherits: [tss.IC],
        fields: {
            _content: null
        },
        alias: ["Render", "tss$IC$Render"],
        ctors: {
            ctor: function () {
                this.$initialize();
                var panel = tss.UI.Panel().LightDismiss();
                tss.LayerExtensions.Content(tss.Panel, panel, tss.ICTX.Children$6(tss.S, tss.UI.Stack(), [tss.ITFX.SemiBold(tss.txt, tss.ITFX.MediumPlus(tss.txt, tss.UI.TextBlock("Sample panel"))), tss.UI.ChoiceGroup("Side:").Choices([tss.UI.Choice("Far").Selected().OnSelected(function (x) {
                    panel.Side = tss.Panel.PanelSide.Far;
                }), tss.UI.Choice("Near").OnSelected(function (x) {
                    panel.Side = tss.Panel.PanelSide.Near;
                })]), tss.UI.Toggle$1("Light Dismiss").OnChange(function (s, e) {
                    panel.CanLightDismiss = s.IsChecked;
                }).Checked(panel.CanLightDismiss), tss.UI.ChoiceGroup("Size:").Choices([tss.UI.Choice("Small").Selected().OnSelected(function (x) {
                    panel.Size = "tss-panelSize-small";
                }), tss.UI.Choice("Medium").OnSelected(function (x) {
                    panel.Size = "tss-panelSize-medium";
                }), tss.UI.Choice("Large").OnSelected(function (x) {
                    panel.Size = "tss-panelSize-large";
                }), tss.UI.Choice("LargeFixed").OnSelected(function (x) {
                    panel.Size = "tss-panelSize-largefixed";
                }), tss.UI.Choice("ExtraLarge").OnSelected(function (x) {
                    panel.Size = "tss-panelSize-extralarge";
                }), tss.UI.Choice("FullWidth").OnSelected(function (x) {
                    panel.Size = "tss-panelSize-fullwidth";
                })]), tss.UI.Toggle$1("Is non-blocking").OnChange(function (s, e) {
                    panel.IsNonBlocking = s.IsChecked;
                }).Checked(panel.IsNonBlocking), tss.UI.Toggle$1("Is dark overlay").OnChange(function (s, e) {
                    panel.IsDark = s.IsChecked;
                }).Checked(panel.IsDark), tss.UI.Toggle$1("Hide close button").OnChange(function (s, e) {
                    panel.ShowCloseButton = !s.IsChecked;
                }).Checked(!panel.ShowCloseButton)])).SetFooter(tss.ICTX.Children$6(tss.S, tss.UI.Stack().Horizontal(), [tss.UI.Button$1("Footer Button 1").Primary(), tss.UI.Button$1("Footer Button 2")]));

                this._content = tss.SectionStackX.Section(tss.SectionStackX.Section(tss.SectionStackX.Section(tss.SectionStackX.Title(tss.UI.SectionStack(), Tesserae.Tests.Samples.SamplesHelper.SampleHeader("PanelSample")), tss.ICTX.Children$6(tss.S, tss.UI.Stack(), [Tesserae.Tests.Samples.SamplesHelper.SampleTitle("Overview"), tss.UI.TextBlock("Panels are modal UI overlays that provide contextual app information. They often request some kind of creation or management action from the user. Panels are paired with the Overlay component, also known as a Light Dismiss. The Overlay blocks interactions with the app view until dismissed either through clicking or tapping on the Overlay or by selecting a close or completion action within the Panel."), Tesserae.Tests.Samples.SamplesHelper.SampleSubTitle("Examples of experiences that use Panels"), tss.UI.TextBlock("Member or group list creation or management"), tss.UI.TextBlock("Document list creation or management"), tss.UI.TextBlock("Permissions creation or management"), tss.UI.TextBlock("Settings creation or management"), tss.UI.TextBlock("Multi-field forms")])), tss.ICTX.Children$6(tss.S, tss.UI.Stack(), [Tesserae.Tests.Samples.SamplesHelper.SampleTitle("Best Practices"), tss.ICTX.Children$6(tss.S, tss.UI.Stack().Horizontal(), [tss.ICTX.Children$6(tss.S, tss.ICX.Width(tss.S, tss.UI.Stack(), tss.usX.percent$1(40)), [Tesserae.Tests.Samples.SamplesHelper.SampleSubTitle("Do"), Tesserae.Tests.Samples.SamplesHelper.SampleDo("Use for self-contained experiences where the user does not need to interact with the app view to complete the task."), Tesserae.Tests.Samples.SamplesHelper.SampleDo("Use for complex creation, edit or management experiences."), Tesserae.Tests.Samples.SamplesHelper.SampleDo("Consider how the panel and its contained contents will scale across Fabric\u2019s responsive web breakpoints.")]), tss.ICTX.Children$6(tss.S, tss.ICX.Width(tss.S, tss.UI.Stack(), tss.usX.percent$1(40)), [Tesserae.Tests.Samples.SamplesHelper.SampleSubTitle("Don't"), Tesserae.Tests.Samples.SamplesHelper.SampleDont("Don't use for experiences where the user needs to interact with the app view.")])])])), tss.ICTX.Children$6(tss.S, tss.UI.Stack(), [Tesserae.Tests.Samples.SamplesHelper.SampleTitle("Usage"), tss.UI.Button$1("Open panel").OnClick(function (s, e) {
                    panel.Show();
                })]));
            }
        },
        methods: {
            Render: function () {
                return this._content.tss$IC$Render();
            }
        }
    });

    H5.define("Tesserae.Tests.Samples.PickerSample", {
        inherits: [tss.IC],
        fields: {
            _content: null
        },
        alias: ["Render", "tss$IC$Render"],
        ctors: {
            ctor: function () {
                this.$initialize();
                this._content = tss.SectionStackX.Section(tss.SectionStackX.Section(tss.SectionStackX.Title(tss.UI.SectionStack(), Tesserae.Tests.Samples.SamplesHelper.SampleHeader("PickerSample")), tss.ICTX.Children$6(tss.S, tss.UI.Stack(), [Tesserae.Tests.Samples.SamplesHelper.SampleTitle("Overview"), tss.UI.TextBlock("Pickers are used to pick recipients.")])), tss.ICTX.Children$6(tss.S, tss.ICX.Width(tss.S, tss.UI.Stack(), tss.usX.percent$1(40)), [Tesserae.Tests.Samples.SamplesHelper.SampleTitle("Usage"), tss.ICX.PaddingBottom(tss.txt, tss.ITFX.Medium(tss.txt, tss.UI.TextBlock("Picker with text suggestions and tag-like selections")), tss.usX.px$1(16)), tss.ICX.PaddingBottom(tss.Picker(Tesserae.Tests.Samples.PickerSampleItem), tss.UI.Picker(Tesserae.Tests.Samples.PickerSampleItem, 2147483647, false, 0, true, "Suggested Tags").Items(this.GetPickerItems()), tss.usX.px$1(32)), tss.ICX.PaddingBottom(tss.txt, tss.ITFX.Medium(tss.txt, tss.UI.TextBlock("Picker with single selection")), tss.usX.px$1(16)), tss.ICX.PaddingBottom(tss.Picker(Tesserae.Tests.Samples.PickerSampleItem), tss.UI.Picker(Tesserae.Tests.Samples.PickerSampleItem, 1, false, 0, true, "Suggested Tags").Items(this.GetPickerItems()), tss.usX.px$1(32)), tss.ICX.PaddingBottom(tss.txt, tss.ITFX.Medium(tss.txt, tss.UI.TextBlock("Picker with icon and text suggestions and component based selections")), tss.usX.px$1(16)), tss.UI.Picker(Tesserae.Tests.Samples.PickerSampleItemWithComponents, 2147483647, false, 0, false, "Suggested Items").Items(this.GetComponentPickerItems())]));
            }
        },
        methods: {
            Render: function () {
                return this._content.tss$IC$Render();
            },
            GetPickerItems: function () {
                return System.Array.init([new Tesserae.Tests.Samples.PickerSampleItem("Bob"), new Tesserae.Tests.Samples.PickerSampleItem("BOB"), new Tesserae.Tests.Samples.PickerSampleItem("Donuts by J Dilla"), new Tesserae.Tests.Samples.PickerSampleItem("Donuts"), new Tesserae.Tests.Samples.PickerSampleItem("Coffee"), new Tesserae.Tests.Samples.PickerSampleItem("Chicken Coop"), new Tesserae.Tests.Samples.PickerSampleItem("Cherry Pie"), new Tesserae.Tests.Samples.PickerSampleItem("Chess"), new Tesserae.Tests.Samples.PickerSampleItem("Cooper")], Tesserae.Tests.Samples.PickerSampleItem);
            },
            GetComponentPickerItems: function () {
                return System.Array.init([new Tesserae.Tests.Samples.PickerSampleItemWithComponents("Bob", 130), new Tesserae.Tests.Samples.PickerSampleItemWithComponents("BOB", 120), new Tesserae.Tests.Samples.PickerSampleItemWithComponents("Donuts by J Dilla", 197), new Tesserae.Tests.Samples.PickerSampleItemWithComponents("Donuts", 186), new Tesserae.Tests.Samples.PickerSampleItemWithComponents("Coffee", 276), new Tesserae.Tests.Samples.PickerSampleItemWithComponents("Chicken Coop", 596), new Tesserae.Tests.Samples.PickerSampleItemWithComponents("Cherry Pie", 222), new Tesserae.Tests.Samples.PickerSampleItemWithComponents("Chess", 228), new Tesserae.Tests.Samples.PickerSampleItemWithComponents("Cooper", 953)], Tesserae.Tests.Samples.PickerSampleItemWithComponents);
            }
        }
    });

    H5.define("Tesserae.Tests.Samples.PickerSampleItem", {
        inherits: [tss.IPickerItem],
        fields: {
            Name: null,
            IsSelected: false
        },
        alias: [
            "Name", "tss$IPickerItem$Name",
            "IsSelected", "tss$IPickerItem$IsSelected",
            "Render", "tss$IPickerItem$Render"
        ],
        ctors: {
            ctor: function (name) {
                this.$initialize();
                this.Name = name;
            }
        },
        methods: {
            Render: function () {
                return tss.UI.TextBlock(this.Name);
            }
        }
    });

    H5.define("Tesserae.Tests.Samples.PickerSampleItemWithComponents", {
        inherits: [tss.IPickerItem],
        fields: {
            _icon: 0,
            Name: null,
            IsSelected: false
        },
        alias: [
            "Name", "tss$IPickerItem$Name",
            "IsSelected", "tss$IPickerItem$IsSelected",
            "Render", "tss$IPickerItem$Render"
        ],
        ctors: {
            ctor: function (name, icon) {
                this.$initialize();
                this.Name = name;
                this._icon = icon;
            }
        },
        methods: {
            Render: function () {
                return tss.ICTX.Children$6(tss.S, tss.UI.Stack().Horizontal().AlignContent("center"), [tss.ICX.MinWidth(tss.Icon, tss.UI.Icon$2(this._icon), tss.usX.px$1(16)), tss.UI.TextBlock(this.Name)]);
            }
        }
    });

    H5.define("Tesserae.Tests.Samples.PivotSample", {
        inherits: [tss.IC],
        fields: {
            content: null
        },
        alias: ["Render", "tss$IC$Render"],
        ctors: {
            ctor: function () {
                this.$initialize();
                this.content = tss.SectionStackX.Section(tss.SectionStackX.Section(tss.SectionStackX.Section(tss.SectionStackX.Title(tss.UI.SectionStack(), Tesserae.Tests.Samples.SamplesHelper.SampleHeader("PivotSample")), tss.ICTX.Children$6(tss.S, tss.UI.Stack(), [Tesserae.Tests.Samples.SamplesHelper.SampleTitle("Overview"), tss.UI.TextBlock("TODO"), tss.ITFX.MediumPlus(tss.txt, tss.UI.TextBlock("Examples of experiences that use Panels"))])), tss.ICTX.Children$6(tss.S, tss.UI.Stack(), [Tesserae.Tests.Samples.SamplesHelper.SampleTitle("Best Practices"), tss.ICTX.Children$6(tss.S, tss.UI.Stack().Horizontal(), [tss.ICTX.Children$6(tss.S, tss.ICX.Width(tss.S, tss.UI.Stack(), tss.usX.percent$1(40)), [Tesserae.Tests.Samples.SamplesHelper.SampleSubTitle("Do"), Tesserae.Tests.Samples.SamplesHelper.SampleDo("TODO")]), tss.ICTX.Children$6(tss.S, tss.ICX.Width(tss.S, tss.UI.Stack(), tss.usX.percent$1(40)), [Tesserae.Tests.Samples.SamplesHelper.SampleSubTitle("Don't"), Tesserae.Tests.Samples.SamplesHelper.SampleDont("TODO")])])])), tss.ICTX.Children$6(tss.S, tss.UI.Stack(), [Tesserae.Tests.Samples.SamplesHelper.SampleTitle("Usage"), Tesserae.Tests.Samples.SamplesHelper.SampleSubTitle("Cached vs. Not Cached Tabs"), tss.PivotX.Pivot(tss.PivotX.Pivot(tss.UI.Pivot(), "tab1", function () {
                    return tss.UI.Button$1().SetText("Cached").NoBorder().NoBackground().Link();
                }, function () {
                    return tss.ITFX.Regular(tss.txt, tss.UI.TextBlock(System.DateTimeOffset.UtcNow.toString()));
                }, true), "tab2", function () {
                    return tss.UI.Button$1().SetText("Not Cached").SetIcon("las la-sync").NoBorder().NoBackground().Link();
                }, function () {
                    return tss.ITFX.Regular(tss.txt, tss.UI.TextBlock(System.DateTimeOffset.UtcNow.toString()));
                }, false), Tesserae.Tests.Samples.SamplesHelper.SampleSubTitle("Cached vs. Not Cached Tabs"), Tesserae.Tests.Samples.SamplesHelper.SampleSubTitle("Scroll with limited height"), tss.PivotX.Pivot(tss.PivotX.Pivot(tss.PivotX.Pivot(tss.PivotX.Pivot(tss.ICX.MaxHeight(tss.Pivot, tss.UI.Pivot(), tss.usX.px$1(500)), "tab1", function () {
                    return tss.UI.Button$1().SetText("5 Items").NoBorder().NoBackground().Link();
                }, H5.fn.bind(this, function () {
                    return tss.ICX.PaddingBottom(tss.ItemsList, tss.UI.ItemsList(this.GetSomeItems(5)), tss.usX.px$1(16));
                }), true), "tab2", function () {
                    return tss.UI.Button$1().SetText("10 Items").NoBorder().NoBackground().Link();
                }, H5.fn.bind(this, function () {
                    return tss.ICX.PaddingBottom(tss.ItemsList, tss.UI.ItemsList(this.GetSomeItems(20)), tss.usX.px$1(16));
                }), true), "tab3", function () {
                    return tss.UI.Button$1().SetText("50 Items").NoBorder().NoBackground().Link();
                }, H5.fn.bind(this, function () {
                    return tss.ICX.PaddingBottom(tss.ItemsList, tss.UI.ItemsList(this.GetSomeItems(50)), tss.usX.px$1(16));
                }), true), "tab4", function () {
                    return tss.UI.Button$1().SetText("100 Items").NoBorder().NoBackground().Link();
                }, H5.fn.bind(this, function () {
                    return tss.ICX.PaddingBottom(tss.ItemsList, tss.UI.ItemsList(this.GetSomeItems(100)), tss.usX.px$1(16));
                }), true), Tesserae.Tests.Samples.SamplesHelper.SampleSubTitle("Too many tabs (WIP)"), tss.PivotX.Pivot(tss.PivotX.Pivot(tss.PivotX.Pivot(tss.PivotX.Pivot(tss.PivotX.Pivot(tss.PivotX.Pivot(tss.PivotX.Pivot(tss.PivotX.Pivot(tss.ICX.MaxWidth(tss.Pivot, tss.ICX.MaxHeight(tss.Pivot, tss.UI.Pivot(), tss.usX.px$1(500)), tss.usX.px$1(300)), "tab1", function () {
                    return tss.UI.Button$1().SetText("5 Items").NoBorder().NoBackground().Link().Ellipsis();
                }, H5.fn.bind(this, function () {
                    return tss.ICX.PaddingBottom(tss.ItemsList, tss.UI.ItemsList(this.GetSomeItems(5)), tss.usX.px$1(16));
                }), true), "tab2", function () {
                    return tss.UI.Button$1().SetText("10 Items").NoBorder().NoBackground().Link().Ellipsis();
                }, H5.fn.bind(this, function () {
                    return tss.ICX.PaddingBottom(tss.ItemsList, tss.UI.ItemsList(this.GetSomeItems(20)), tss.usX.px$1(16));
                }), true), "tab3", function () {
                    return tss.UI.Button$1().SetText("50 Items").NoBorder().NoBackground().Link().Ellipsis();
                }, H5.fn.bind(this, function () {
                    return tss.ICX.PaddingBottom(tss.ItemsList, tss.UI.ItemsList(this.GetSomeItems(50)), tss.usX.px$1(16));
                }), true), "tab4", function () {
                    return tss.UI.Button$1().SetText("100 Items").NoBorder().NoBackground().Link().Ellipsis();
                }, H5.fn.bind(this, function () {
                    return tss.ICX.PaddingBottom(tss.ItemsList, tss.UI.ItemsList(this.GetSomeItems(100)), tss.usX.px$1(16));
                }), true), "tab5", function () {
                    return tss.UI.Button$1().SetText("5 Items").NoBorder().NoBackground().Link().Ellipsis();
                }, H5.fn.bind(this, function () {
                    return tss.ICX.PaddingBottom(tss.ItemsList, tss.UI.ItemsList(this.GetSomeItems(5)), tss.usX.px$1(16));
                }), true), "tab6", function () {
                    return tss.UI.Button$1().SetText("10 Items").NoBorder().NoBackground().Link().Ellipsis();
                }, H5.fn.bind(this, function () {
                    return tss.ICX.PaddingBottom(tss.ItemsList, tss.UI.ItemsList(this.GetSomeItems(20)), tss.usX.px$1(16));
                }), true), "tab7", function () {
                    return tss.UI.Button$1().SetText("50 Items").NoBorder().NoBackground().Link().Ellipsis();
                }, H5.fn.bind(this, function () {
                    return tss.ICX.PaddingBottom(tss.ItemsList, tss.UI.ItemsList(this.GetSomeItems(50)), tss.usX.px$1(16));
                }), true), "tab8", function () {
                    return tss.UI.Button$1().SetText("100 Items").NoBorder().NoBackground().Link().Ellipsis();
                }, H5.fn.bind(this, function () {
                    return tss.ICX.PaddingBottom(tss.ItemsList, tss.UI.ItemsList(this.GetSomeItems(100)), tss.usX.px$1(16));
                }), true)]));
            }
        },
        methods: {
            Render: function () {
                return this.content.tss$IC$Render();
            },
            GetSomeItems: function (count) {
                return System.Linq.Enumerable.range(1, count).select(function (number) {
                    return tss.ICX.MinWidth(tss.Card, tss.UI.Card(tss.txtX.NonSelectable(tss.txt, tss.UI.TextBlock(System.String.format("Lorem Ipsum {0}", [H5.box(number, System.Int32)])))), tss.usX.px$1(200));
                }).ToArray(tss.Card);
            }
        }
    });

    H5.define("Tesserae.Tests.Samples.ProgressIndicatorSample", {
        inherits: [tss.IC],
        fields: {
            _content: null
        },
        alias: ["Render", "tss$IC$Render"],
        ctors: {
            ctor: function () {
                this.$initialize();
                this._content = tss.SectionStackX.Section(tss.SectionStackX.Section(tss.SectionStackX.Section(tss.SectionStackX.Title(tss.UI.SectionStack(), Tesserae.Tests.Samples.SamplesHelper.SampleHeader("ProgressIndicatorSample")), tss.ICTX.Children$6(tss.S, tss.UI.Stack(), [Tesserae.Tests.Samples.SamplesHelper.SampleTitle("Overview"), tss.UI.TextBlock("ProgressIndicators are used to show the completion status of an operation lasting more than 2 seconds. If the state of progress cannot be determined, use a Spinner instead. ProgressIndicators can appear in a new panel, a flyout, under the UI initiating the operation, or even replacing the initiating UI, as long as the UI can return if the operation is canceled or is stopped.")])), tss.ICTX.Children$6(tss.S, tss.ICX.WidthStretch(tss.S, tss.UI.Stack()), [Tesserae.Tests.Samples.SamplesHelper.SampleTitle("Best Practices"), tss.ICTX.Children$6(tss.S, tss.ICX.WidthStretch(tss.S, tss.UI.Stack()).Horizontal(), [tss.ICTX.Children$6(tss.S, tss.ICX.WidthStretch(tss.S, tss.UI.Stack()), [Tesserae.Tests.Samples.SamplesHelper.SampleSubTitle("Do"), Tesserae.Tests.Samples.SamplesHelper.SampleDo("Use a ProgressIndicator when the total units to completion is known"), Tesserae.Tests.Samples.SamplesHelper.SampleDo("Display operation description"), Tesserae.Tests.Samples.SamplesHelper.SampleDo("Show text above and/or below the bar"), Tesserae.Tests.Samples.SamplesHelper.SampleDo("Combine steps of a single operation into one bar")]), tss.ICTX.Children$6(tss.S, tss.ICX.WidthStretch(tss.S, tss.UI.Stack()), [Tesserae.Tests.Samples.SamplesHelper.SampleSubTitle("Don't"), Tesserae.Tests.Samples.SamplesHelper.SampleDont("Use a ProgressIndicator when the total units to completion is indeterminate."), Tesserae.Tests.Samples.SamplesHelper.SampleDont("Show text to the right or left of the bar"), Tesserae.Tests.Samples.SamplesHelper.SampleDont("Cause progress to \u201crewind\u201d to show new steps")])])])), tss.ICTX.Children$6(tss.S, tss.UI.Stack(), [Tesserae.Tests.Samples.SamplesHelper.SampleTitle("Usage"), tss.ITFX.Medium(tss.txt, tss.UI.TextBlock("States")), tss.ICX.AlignCenter(tss.Label, tss.UI.Label$1("Empty").SetContent(tss.ICX.Width(tss.ProgressIndicator, tss.UI.ProgressIndicator().Progress$1(0), tss.usX.px$1(400)))), tss.ICX.AlignCenter(tss.Label, tss.UI.Label$1("30%").SetContent(tss.ICX.Width(tss.ProgressIndicator, tss.UI.ProgressIndicator().Progress$1(30), tss.usX.px$1(400)))), tss.ICX.AlignCenter(tss.Label, tss.UI.Label$1("60%").SetContent(tss.ICX.Width(tss.ProgressIndicator, tss.UI.ProgressIndicator().Progress$1(60), tss.usX.px$1(400)))), tss.ICX.AlignCenter(tss.Label, tss.UI.Label$1("Full").SetContent(tss.ICX.Width(tss.ProgressIndicator, tss.UI.ProgressIndicator().Progress$1(100), tss.usX.px$1(400)))), tss.ICX.AlignCenter(tss.Label, tss.UI.Label$1("Indeterminate").SetContent(tss.ICX.Width(tss.ProgressIndicator, tss.UI.ProgressIndicator().Indeterminated(), tss.usX.px$1(400))))]));
            }
        },
        methods: {
            Render: function () {
                return this._content.tss$IC$Render();
            }
        }
    });

    H5.define("Tesserae.Tests.Samples.ProgressModalSample", {
        inherits: [tss.IC],
        fields: {
            _content: null
        },
        alias: ["Render", "tss$IC$Render"],
        ctors: {
            ctor: function () {
                this.$initialize();
                var PlayModal = null;
                var ProgressFrame = null;
                var modal;

                var cts;

                var progress = 0;




                ProgressFrame = function (a) {
                    if (cts.isCancellationRequested) {
                        modal.ProgressSpin().Message("Cancelling...");
                        tss.tX.fireAndForget(System.Threading.Tasks.Task.delay(2000).continueWith(function (_) {
                            return modal.Hide();
                        }));
                        return;
                    }

                    progress++;
                    if (progress < 100) {
                        modal.Message(System.String.format("Processing {0}%", [H5.box(progress, System.Single, System.Single.format, System.Single.getHashCode)])).Progress$1(progress);
                        window.setTimeout(ProgressFrame, 16);
                    } else {
                        modal.Message("Finishing...").ProgressIndeterminated();
                        tss.tX.fireAndForget(System.Threading.Tasks.Task.delay(5000).continueWith(function (_) {
                            return modal.Hide();
                        }));
                    }
                };
                PlayModal = function () {
                    var $s = 0,
                        $t1, 
                        $jff, 
                        $tcs = new H5.TCS(), 
                        $rv, 
                        $ae, 
                        $ab = H5.fn.bind(this, function () {
                            try {
                                for (;;) {
                                    $s = H5.STEP([0,1], $s);
                                    switch ($s) {
                                        case 0: {
                                            modal = tss.UI.ProgressModal().Title("Lorem Ipsum");
                                            cts = new System.Threading.CancellationTokenSource();
                                            modal.WithCancel(function (b) {
                                                b.Disabled();
                                                cts.cancel();
                                            });
                                            progress = 0;
                                            modal.Message("Preparing to process...").ProgressSpin().Show();
                                            $t1 = System.Threading.Tasks.Task.delay(1500);
                                            $s = 1;
                                            if ($t1.isC()) {
                                                continue;
                                            }
                                            $t1.c($ab);
                                            return;
                                        }
                                        case 1: {
                                            $t1.gAR();
                                            window.setTimeout(ProgressFrame, 16);
                                            $tcs.sR(null);
                                            return;
                                        }
                                        default: {
                                            $tcs.sR(null);
                                            return;
                                        }
                                    }
                                }
                            } catch($ae1) {
                                $ae = System.Exception.create($ae1);
                                $tcs.sE($ae);
                            }
                        }, arguments);

                    $ab();
                    return $tcs.task;
                };

                this._content = tss.SectionStackX.Section(tss.SectionStackX.Section(tss.SectionStackX.Section(tss.SectionStackX.Title(tss.UI.SectionStack(), Tesserae.Tests.Samples.SamplesHelper.SampleHeader("ProgressModalSample")), tss.ICTX.Children$6(tss.S, tss.UI.Stack(), [Tesserae.Tests.Samples.SamplesHelper.SampleTitle("Overview"), tss.UI.TextBlock("TODO")])), tss.ICTX.Children$6(tss.S, tss.UI.Stack(), [Tesserae.Tests.Samples.SamplesHelper.SampleTitle("Best Practices"), tss.ICTX.Children$6(tss.S, tss.UI.Stack().Horizontal(), [tss.ICTX.Children$6(tss.S, tss.UI.Stack(), [Tesserae.Tests.Samples.SamplesHelper.SampleSubTitle("Do"), Tesserae.Tests.Samples.SamplesHelper.SampleDo("TODO")]), tss.ICTX.Children$6(tss.S, tss.UI.Stack(), [Tesserae.Tests.Samples.SamplesHelper.SampleSubTitle("Don't"), Tesserae.Tests.Samples.SamplesHelper.SampleDont("TODO")])])])), tss.ICTX.Children$6(tss.S, tss.ICX.Width(tss.S, tss.UI.Stack(), tss.usX.px$1(400)), [Tesserae.Tests.Samples.SamplesHelper.SampleTitle("Usage"), tss.UI.Button$1("Open Modal").OnClick(function (s, e) {
                    tss.tX.fireAndForget(PlayModal());
                })]));
            }
        },
        methods: {
            Render: function () {
                return this._content.tss$IC$Render();
            }
        }
    });

    H5.define("Tesserae.Tests.Samples.SamplesHelper", {
        statics: {
            methods: {
                SampleHeader: function (sampleName) {
                    var text = System.String.replaceAll(sampleName, "Sample", "");
                    return tss.ICTX.Children$6(tss.S, tss.ICX.WidthStretch(tss.S, tss.UI.Stack().Horizontal()), [tss.ITFX.Bold(tss.txt, tss.ITFX.XLarge(tss.txt, tss.UI.TextBlock(text))), tss.ICX.Grow(tss.Raw, tss.UI.Raw$1(), 1), tss.UI.Button$1().SetIcon$1(272).SetTitle("View code for this sample").OnClick(function (_, __) {
                        tss.LayerExtensions.Content(tss.Modal, tss.ICX.Width(tss.Modal, tss.UI.Modal((text || "") + " sample code").LightDismiss(), tss.usX.vh$1(80)), tss.ICX.Stretch(tss.S, tss.ICTX.Children$6(tss.S, tss.UI.Stack(), [tss.ICX.Width(tss.TextArea, tss.ICX.Height(tss.TextArea, tss.UI.TextArea$1(Tesserae.Tests.SamplesSourceCode.GetCodeForSample(sampleName)), tss.usX.vh$1(80)), tss.usX.vw$1(80))]))).ShowCloseButton().Show();
                    })]);
                },
                SampleTitle: function (text) {
                    return tss.ICX.PaddingBottom(tss.txt, tss.ITFX.MediumPlus(tss.txt, tss.ITFX.SemiBold(tss.txt, tss.UI.TextBlock(text))), tss.usX.px$1(16));
                },
                SampleSubTitle: function (text) {
                    return tss.ICX.PaddingBottom(tss.txt, tss.ITFX.Medium(tss.txt, tss.ITFX.SemiBold(tss.txt, tss.UI.TextBlock(text))), tss.usX.px$1(16));
                },
                SampleDo: function (text) {
                    return tss.UI.Label$2(tss.ICX.PaddingRight(tss.Raw, tss.UI.Raw$2(tss.UI.I(tss.UI._$2("las la-check", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, function (s) {
                        s.color = "#107c10";
                    }))), tss.usX.px$1(8))).SetContent(tss.UI.TextBlock(text)).Inline();
                },
                SampleDont: function (text) {
                    return tss.UI.Label$2(tss.ICX.PaddingRight(tss.Raw, tss.UI.Raw$2(tss.UI.I(tss.UI._$2("las la-times", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, function (s) {
                        s.color = "#e81123";
                    }))), tss.usX.px$1(8))).SetContent(tss.UI.TextBlock(text)).Inline();
                }
            }
        }
    });

    H5.define("Tesserae.Tests.Samples.SearchableGroupedListSample", {
        inherits: [tss.IC],
        fields: {
            _content: null
        },
        alias: ["Render", "tss$IC$Render"],
        ctors: {
            ctor: function () {
                this.$initialize();
                var GroupedItemHeaderGenerator = null;
                GroupedItemHeaderGenerator = function (s) {
                    return tss.UI.HorizontalSeparator$1(tss.ITFX.SemiBold(tss.txt, tss.txtX.Primary(tss.txt, tss.UI.TextBlock(s)))).Left();
                };
                this._content = tss.ICX.PaddingBottom(tss.SectionStack, tss.SectionStackX.Section(tss.SectionStackX.Section(tss.SectionStackX.Title(tss.ICX.WidthStretch(tss.SectionStack, tss.UI.SectionStack()), Tesserae.Tests.Samples.SamplesHelper.SampleHeader("SearchableGroupedListSample")), tss.ICTX.Children$6(tss.S, tss.UI.Stack(), [Tesserae.Tests.Samples.SamplesHelper.SampleTitle("Overview"), tss.ICX.PaddingBottom(tss.txt, tss.UI.TextBlock("This list provides a base component for implementing search over a known number of items.It is agnostic of the tile component used, and selection management. These concerns can be layered separately."), tss.usX.px$1(16)), tss.UI.TextBlock("You need to implement ISearchableGroupedItem interface on the items, and specially the IsMatch method to enable searching on them")])), tss.ICTX.Children$6(tss.S, tss.UI.Stack(), [Tesserae.Tests.Samples.SamplesHelper.SampleTitle("Usage"), tss.ICX.PaddingTop(tss.txt, tss.ICX.PaddingBottom(tss.txt, tss.ITFX.Medium(tss.txt, tss.UI.TextBlock("Searchable Grouped List with No Results Message")), tss.usX.px$1(16)), tss.usX.px$1(16)), tss.ICX.Height(tss.SearchableGroupedList(Tesserae.Tests.Samples.SearchableGroupedListSample.SearchableGroupedListItem), tss.ICX.PaddingBottom(tss.SearchableGroupedList(Tesserae.Tests.Samples.SearchableGroupedListSample.SearchableGroupedListItem), tss.UI.SearchableGroupedList(Tesserae.Tests.Samples.SearchableGroupedListSample.SearchableGroupedListItem, this.GetItems(10), GroupedItemHeaderGenerator), tss.usX.px$1(32)), tss.usX.px$1(500)).WithNoResultsMessage(function () {
                    return tss.ICX.MinHeight(tss.BackgroundArea, tss.ICX.HeightStretch(tss.BackgroundArea, tss.ICX.WidthStretch(tss.BackgroundArea, tss.UI.BackgroundArea(tss.UI.Card(tss.ICX.Padding(tss.txt, tss.UI.TextBlock("No Results"), tss.usX.px$1(16)))))), tss.usX.px$1(100));
                }), tss.ICX.PaddingTop(tss.txt, tss.ICX.PaddingBottom(tss.txt, tss.ITFX.Medium(tss.txt, tss.UI.TextBlock("Searchable Grouped List with extra commands")), tss.usX.px$1(16)), tss.usX.px$1(16)), tss.ICX.Height(tss.SearchableGroupedList(Tesserae.Tests.Samples.SearchableGroupedListSample.SearchableGroupedListItem), tss.ICX.PaddingBottom(tss.SearchableGroupedList(Tesserae.Tests.Samples.SearchableGroupedListSample.SearchableGroupedListItem), tss.UI.SearchableGroupedList(Tesserae.Tests.Samples.SearchableGroupedListSample.SearchableGroupedListItem, this.GetItems(10), GroupedItemHeaderGenerator), tss.usX.px$1(32)), tss.usX.px$1(500)).AfterSearchBox([tss.UI.Button$1("Sample Button After").Primary()]).BeforeSearchBox([tss.UI.Button$1("Sample Button Before").Link()]).WithNoResultsMessage(function () {
                    return tss.ICX.MinHeight(tss.BackgroundArea, tss.ICX.HeightStretch(tss.BackgroundArea, tss.ICX.WidthStretch(tss.BackgroundArea, tss.UI.BackgroundArea(tss.UI.Card(tss.ICX.Padding(tss.txt, tss.UI.TextBlock("No Results"), tss.usX.px$1(16)))))), tss.usX.px$1(100));
                }), tss.ICX.PaddingTop(tss.txt, tss.ICX.PaddingBottom(tss.txt, tss.ITFX.Medium(tss.txt, tss.UI.TextBlock("Searchable Grouped List with Columns")), tss.usX.px$1(16)), tss.usX.px$1(16)), tss.ICX.Height(tss.SearchableGroupedList(Tesserae.Tests.Samples.SearchableGroupedListSample.SearchableGroupedListItem), tss.UI.SearchableGroupedList(Tesserae.Tests.Samples.SearchableGroupedListSample.SearchableGroupedListItem, this.GetItems(40), GroupedItemHeaderGenerator, [tss.usX.percent$1(25), tss.usX.percent$1(25), tss.usX.percent$1(25), tss.usX.percent$1(25)]), tss.usX.px$1(500))])), tss.usX.px$1(32));


            }
        },
        methods: {
            Render: function () {
                return this._content.tss$IC$Render();
            },
            GetItems: function (count) {
                return System.Linq.Enumerable.range(1, count).select(function (number, index) {
                    var group = "";

                    if (index % 2 === 0) {
                        group = "Group A";
                    } else if (index % 3 === 0) {
                        group = "Group B";
                    } else {
                        group = "Group C";
                    }

                    return new Tesserae.Tests.Samples.SearchableGroupedListSample.SearchableGroupedListItem(System.String.format("Lorem Ipsum {0}", [H5.box(number, System.Int32)]), group);
                }).ToArray(Tesserae.Tests.Samples.SearchableGroupedListSample.SearchableGroupedListItem);
            }
        }
    });

    H5.define("Tesserae.Tests.Samples.SearchableGroupedListSample.SearchableGroupedListItem", {
        inherits: [tss.ISearchableGroupedItem],
        $kind: "nested class",
        fields: {
            _value: null,
            _component: null,
            Group: null
        },
        alias: [
            "IsMatch", "tss$ISearchableItem$IsMatch",
            "Group", "tss$ISearchableGroupedItem$Group",
            "Render", "tss$ISearchableItem$Render"
        ],
        ctors: {
            ctor: function (value, group) {
                this.$initialize();
                this._value = value;
                this._component = tss.UI.Card(tss.txtX.NonSelectable(tss.txt, tss.UI.TextBlock(value)));

                this.Group = group;
            }
        },
        methods: {
            IsMatch: function (searchTerm) {
                return System.String.contains(this._value.toLowerCase(),searchTerm.toLowerCase()) || System.String.contains(this.Group.toLowerCase(),searchTerm.toLowerCase());
            },
            Render: function () {
                return this._component;
            }
        }
    });

    H5.define("Tesserae.Tests.Samples.SearchableListSample", {
        inherits: [tss.IC],
        fields: {
            _content: null
        },
        alias: ["Render", "tss$IC$Render"],
        ctors: {
            ctor: function () {
                this.$initialize();
                this._content = tss.ICX.PaddingBottom(tss.SectionStack, tss.SectionStackX.Section(tss.SectionStackX.Section(tss.SectionStackX.Title(tss.ICX.WidthStretch(tss.SectionStack, tss.UI.SectionStack()), Tesserae.Tests.Samples.SamplesHelper.SampleHeader("SearchableListSample")), tss.ICTX.Children$6(tss.S, tss.UI.Stack(), [Tesserae.Tests.Samples.SamplesHelper.SampleTitle("Overview"), tss.ICX.PaddingBottom(tss.txt, tss.UI.TextBlock("This list provides a base component for implementing search over a known number of items.It is agnostic of the tile component used, and selection management. These concerns can be layered separately."), tss.usX.px$1(16)), tss.UI.TextBlock("You need to implement ISearchableItem interface on the items, and specially the IsMatch method to enable searching on them")])), tss.ICTX.Children$6(tss.S, tss.UI.Stack(), [Tesserae.Tests.Samples.SamplesHelper.SampleTitle("Usage"), tss.ICX.PaddingTop(tss.txt, tss.ICX.PaddingBottom(tss.txt, tss.ITFX.Medium(tss.txt, tss.UI.TextBlock("Searchable List with No Results Message")), tss.usX.px$1(16)), tss.usX.px$1(16)), tss.ICX.Height(tss.SearchableList(Tesserae.Tests.Samples.SearchableListSample.SearchableListItem), tss.ICX.PaddingBottom(tss.SearchableList(Tesserae.Tests.Samples.SearchableListSample.SearchableListItem), tss.UI.SearchableList(Tesserae.Tests.Samples.SearchableListSample.SearchableListItem, this.GetItems(10)), tss.usX.px$1(32)), tss.usX.px$1(500)).WithNoResultsMessage(function () {
                    return tss.ICX.MinHeight(tss.BackgroundArea, tss.ICX.HeightStretch(tss.BackgroundArea, tss.ICX.WidthStretch(tss.BackgroundArea, tss.UI.BackgroundArea(tss.UI.Card(tss.ICX.Padding(tss.txt, tss.UI.TextBlock("No Results"), tss.usX.px$1(16)))))), tss.usX.px$1(100));
                }), tss.ICX.PaddingTop(tss.txt, tss.ICX.PaddingBottom(tss.txt, tss.ITFX.Medium(tss.txt, tss.UI.TextBlock("Searchable List with extra commands")), tss.usX.px$1(16)), tss.usX.px$1(16)), tss.ICX.Height(tss.SearchableList(Tesserae.Tests.Samples.SearchableListSample.SearchableListItem), tss.ICX.PaddingBottom(tss.SearchableList(Tesserae.Tests.Samples.SearchableListSample.SearchableListItem), tss.UI.SearchableList(Tesserae.Tests.Samples.SearchableListSample.SearchableListItem, this.GetItems(10)), tss.usX.px$1(32)), tss.usX.px$1(500)).AfterSearchBox([tss.UI.Button$1("Sample Button After").Primary()]).BeforeSearchBox([tss.UI.Button$1("Sample Button Before").Link()]).WithNoResultsMessage(function () {
                    return tss.ICX.MinHeight(tss.BackgroundArea, tss.ICX.HeightStretch(tss.BackgroundArea, tss.ICX.WidthStretch(tss.BackgroundArea, tss.UI.BackgroundArea(tss.UI.Card(tss.ICX.Padding(tss.txt, tss.UI.TextBlock("No Results"), tss.usX.px$1(16)))))), tss.usX.px$1(100));
                }), tss.ICX.PaddingTop(tss.txt, tss.ICX.PaddingBottom(tss.txt, tss.ITFX.Medium(tss.txt, tss.UI.TextBlock("Searchable List with Columns")), tss.usX.px$1(16)), tss.usX.px$1(16)), tss.ICX.Height(tss.SearchableList(Tesserae.Tests.Samples.SearchableListSample.SearchableListItem), tss.UI.SearchableList(Tesserae.Tests.Samples.SearchableListSample.SearchableListItem, this.GetItems(40), [tss.usX.percent$1(25), tss.usX.percent$1(25), tss.usX.percent$1(25), tss.usX.percent$1(25)]), tss.usX.px$1(500))])), tss.usX.px$1(32));
            }
        },
        methods: {
            Render: function () {
                return this._content.tss$IC$Render();
            },
            GetItems: function (count) {
                return System.Linq.Enumerable.range(1, count).select(function (number) {
                    return new Tesserae.Tests.Samples.SearchableListSample.SearchableListItem(System.String.format("Lorem Ipsum {0}", [H5.box(number, System.Int32)]));
                }).ToArray(Tesserae.Tests.Samples.SearchableListSample.SearchableListItem);

            }
        }
    });

    H5.define("Tesserae.Tests.Samples.SearchableListSample.SearchableListItem", {
        inherits: [tss.ISearchableItem],
        $kind: "nested class",
        fields: {
            _value: null,
            _component: null
        },
        alias: ["IsMatch", "tss$ISearchableItem$IsMatch"],
        ctors: {
            ctor: function (value) {
                this.$initialize();
                this._value = value;
                this._component = tss.UI.Card(tss.txtX.NonSelectable(tss.txt, tss.UI.TextBlock(value)));
            }
        },
        methods: {
            IsMatch: function (searchTerm) {
                return System.String.contains(this._value,searchTerm);
            },
            Render: function () {
                return this._component.tss$IC$Render();
            },
            tss$ISearchableItem$Render: function () {
                return this._component;
            }
        }
    });

    H5.define("Tesserae.Tests.Samples.SearchBoxSample", {
        inherits: [tss.IC],
        fields: {
            _content: null
        },
        alias: ["Render", "tss$IC$Render"],
        ctors: {
            ctor: function () {
                this.$initialize();
                var searchAsYouType = tss.UI.TextBlock("start typing");
                this._content = tss.SectionStackX.Section(tss.SectionStackX.Section(tss.SectionStackX.Section(tss.SectionStackX.Title(tss.UI.SectionStack(), Tesserae.Tests.Samples.SamplesHelper.SampleHeader("SearchBoxSample")), tss.ICTX.Children$6(tss.S, tss.UI.Stack(), [Tesserae.Tests.Samples.SamplesHelper.SampleTitle("Overview"), tss.UI.TextBlock("SearchBoxes provide an input field for searching through content, allowing users to locate specific items within the website or app.")])), tss.ICTX.Children$6(tss.S, tss.UI.Stack(), [Tesserae.Tests.Samples.SamplesHelper.SampleTitle("Best Practices"), tss.ICTX.Children$6(tss.S, tss.UI.Stack().Horizontal(), [tss.ICTX.Children$6(tss.S, tss.ICX.Width(tss.S, tss.UI.Stack(), tss.usX.percent$1(40)), [Tesserae.Tests.Samples.SamplesHelper.SampleSubTitle("Do"), Tesserae.Tests.Samples.SamplesHelper.SampleDo("Use placeholder text in the SearchBox to describe what users can search for."), Tesserae.Tests.Samples.SamplesHelper.SampleDo("Example: 'Search'; 'Search files'; 'Search site'"), Tesserae.Tests.Samples.SamplesHelper.SampleDo("Once the user has clicked into the SearchBox but hasn\u2019t entered input yet, use 'hint text' to communicate search scope."), Tesserae.Tests.Samples.SamplesHelper.SampleDo("Examples: 'Try searching for a PDFs'; 'Search contacts list'; 'Type to find <content type> '"), Tesserae.Tests.Samples.SamplesHelper.SampleDo("Use the Underlined SearchBox for CommandBars.")]), tss.ICTX.Children$6(tss.S, tss.ICX.Width(tss.S, tss.UI.Stack(), tss.usX.percent$1(40)), [Tesserae.Tests.Samples.SamplesHelper.SampleSubTitle("Don't"), Tesserae.Tests.Samples.SamplesHelper.SampleDont("Don't leave the SearchBox blank because it's too ambiguous."), Tesserae.Tests.Samples.SamplesHelper.SampleDont("Don't have lengthy and unclear hint text. It should be used to clasify and set expectations."), Tesserae.Tests.Samples.SamplesHelper.SampleDont("Don't provide inaccurate matches or bad predictions, as it will make search seem unreliable and will result in user frustration."), Tesserae.Tests.Samples.SamplesHelper.SampleDont("Don\u2019t provide too much information or metadata in the suggestions list; it\u2019s intended to be lightweight."), Tesserae.Tests.Samples.SamplesHelper.SampleDont("Don't build a custom search control based on the default text box or any other control."), Tesserae.Tests.Samples.SamplesHelper.SampleDont("Don't use SearchBox if you cannot reliably provide accurate results.")])])])), tss.ICTX.Children$6(tss.S, tss.UI.Stack(), [Tesserae.Tests.Samples.SamplesHelper.SampleTitle("Usage"), tss.ITFX.Medium(tss.txt, tss.UI.TextBlock("Basic TextBox")), tss.ICTX.Children$6(tss.S, tss.ICX.Width(tss.S, tss.UI.Stack(), tss.usX.percent$1(40)), [tss.UI.Label$1("Default").SetContent(tss.UI.SearchBox("Search").OnSearch(function (s, e) {
                    alert(System.String.format("Searched for {0}", [e]));
                })), tss.txtX.Disabled(tss.Label, tss.UI.Label$1("Disabled")).SetContent(tss.UI.SearchBox("Search").Disabled()), tss.UI.Label$1("Underline").SetContent(tss.UI.SearchBox("Search").Underlined().OnSearch(function (s, e) {
                    alert(System.String.format("Searched for {0}", [e]));
                })), tss.UI.Label$1("Search as you type").SetContent(tss.UI.SearchBox("Search").Underlined().SearchAsYouType().OnSearch(function (s, e) {
                    searchAsYouType.Text = System.String.format("Searched for {0}", [e]);
                })), searchAsYouType, tss.txtX.Required(tss.Label, tss.UI.Label$1("Custom Icon")).SetContent(tss.UI.SearchBox("Filter").SetIcon("las la-filter").OnSearch(function (s, e) {
                    alert(System.String.format("Filter for {0}", [e]));
                })), tss.UI.Label$1("No Icon").SetContent(tss.UI.SearchBox("Search").NoIcon().OnSearch(function (s, e) {
                    alert(System.String.format("Searched for {0}", [e]));
                })), tss.txtX.Required(tss.Label, tss.UI.Label$1("Fixed Width")).SetContent(tss.ICX.Width(tss.SearchBox, tss.UI.SearchBox("Small Search"), tss.usX.px$1(200)).OnSearch(function (s, e) {
                    alert(System.String.format("Searched for {0}", [e]));
                }))])]));
            }
        },
        methods: {
            Render: function () {
                return this._content.tss$IC$Render();
            }
        }
    });

    H5.define("Tesserae.Tests.Samples.SectionStackSample", {
        inherits: [tss.IC],
        fields: {
            _content: null
        },
        alias: ["Render", "tss$IC$Render"],
        ctors: {
            ctor: function () {
                this.$initialize();
                var stack = tss.UI.SectionStack();

                this._content = tss.ICTX.Children$6(tss.S, tss.UI.Stack(), [tss.SectionStackX.Section(tss.SectionStackX.Section(tss.SectionStackX.Title(tss.UI.SectionStack(), Tesserae.Tests.Samples.SamplesHelper.SampleHeader("SectionStackSample")), tss.ICTX.Children$6(tss.S, tss.UI.Stack(), [Tesserae.Tests.Samples.SamplesHelper.SampleTitle("Overview"), tss.UI.TextBlock("A Session Stack is a container-type component that abstracts the implementation of a flexbox in order to define the layout of its children components.")])), tss.ICTX.Children$6(tss.S, tss.UI.Stack(), [Tesserae.Tests.Samples.SamplesHelper.SampleTitle("Usage"), tss.UI.Label$1("Number of items:").SetContent(tss.UI.Slider(5, 0, 10, 1).OnInput(H5.fn.bind(this, function (s, e) {
                    this.SetChildren(stack, s.Value);
                })))])), stack]);
                this.SetChildren(stack, 5);
            }
        },
        methods: {
            SetChildren: function (stack, count) {
                stack.Clear();
                for (var i = 0; i < count; i = (i + 1) | 0) {
                    tss.SectionStackX.Section(stack, tss.ICTX.Children$6(tss.S, tss.UI.Stack(), [tss.ITFX.SemiBold(tss.txt, tss.ITFX.MediumPlus(tss.txt, tss.UI.TextBlock(System.String.format("Section {0}", [H5.box(i, System.Int32)])))), tss.ITFX.SmallPlus(tss.txt, tss.UI.TextBlock("Wrap (Default)")), tss.ICX.Width(tss.txt, tss.UI.TextBlock("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."), tss.usX.percent$1(50)), tss.ITFX.SmallPlus(tss.txt, tss.UI.TextBlock("No Wrap")), tss.ICX.Width(tss.txt, tss.txtX.NoWrap(tss.txt, tss.UI.TextBlock("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")), tss.usX.percent$1(50))]));
                }
            },
            Render: function () {
                return this._content.tss$IC$Render();
            }
        }
    });

    H5.define("Tesserae.Tests.Samples.SliderSample", {
        inherits: [tss.IC],
        fields: {
            _content: null
        },
        alias: ["Render", "tss$IC$Render"],
        ctors: {
            ctor: function () {
                this.$initialize();
                var value = new (tss.SettableObservableT(System.Int32))(0);
                var s1 = tss.UI.Slider(0, 0, 100, 1).OnInput(function (s, e) {
                    value.Update(function (currVal) {
                        value.Value$1 = s.Value;
                    });
                });
                var s2 = tss.UI.Slider(0, 0, 100, 10).OnInput(function (s, e) {
                    value.Update(function (currVal) {
                        value.Value$1 = s.Value;
                    });
                });
                value.Observe(function (changedValue) {
                    s1.Value = changedValue;
                });

                this._content = tss.SectionStackX.Section(tss.SectionStackX.Section(tss.SectionStackX.Section(tss.SectionStackX.Title(tss.UI.SectionStack(), Tesserae.Tests.Samples.SamplesHelper.SampleHeader("SliderSample")), tss.ICTX.Children$6(tss.S, tss.UI.Stack(), [Tesserae.Tests.Samples.SamplesHelper.SampleTitle("Overview"), tss.UI.TextBlock("TODO")])), tss.ICTX.Children$6(tss.S, tss.UI.Stack(), [Tesserae.Tests.Samples.SamplesHelper.SampleTitle("Best Practices"), tss.ICTX.Children$6(tss.S, tss.UI.Stack().Horizontal(), [tss.ICTX.Children$6(tss.S, tss.ICX.Width(tss.S, tss.UI.Stack(), tss.usX.percent$1(40)), [Tesserae.Tests.Samples.SamplesHelper.SampleSubTitle("Do"), Tesserae.Tests.Samples.SamplesHelper.SampleDo("TODO")]), tss.ICTX.Children$6(tss.S, tss.ICX.Width(tss.S, tss.UI.Stack(), tss.usX.percent$1(40)), [Tesserae.Tests.Samples.SamplesHelper.SampleSubTitle("Don't"), Tesserae.Tests.Samples.SamplesHelper.SampleDont("TODO")])])])), tss.ICTX.Children$6(tss.S, tss.UI.Stack(), [Tesserae.Tests.Samples.SamplesHelper.SampleTitle("Usage"), tss.ITFX.Medium(tss.Label, tss.UI.Label$1("Value")).SetContent(tss.UI.Defer$3(System.Int32, value, function (currentValue) {
                    return tss.tX.AsTask(tss.UI.TextBlock(H5.toString(currentValue)));
                })), tss.ITFX.Medium(tss.Label, tss.UI.Label$1("Default Slider (val: 0, min: 0, max: 100, step: 1)")).SetContent(s1), tss.ITFX.Medium(tss.Label, tss.UI.Label$1("Default Slider (val: 0, min: 0, max: 100, step: 10)")).SetContent(s2)]));
            }
        },
        methods: {
            Render: function () {
                return this._content.tss$IC$Render();
            }
        }
    });

    H5.define("Tesserae.Tests.Samples.SpinnerSample", {
        inherits: [tss.IC],
        fields: {
            _content: null
        },
        alias: ["Render", "tss$IC$Render"],
        ctors: {
            ctor: function () {
                this.$initialize();
                this._content = tss.SectionStackX.Section(tss.SectionStackX.Section(tss.SectionStackX.Section(tss.SectionStackX.Section(tss.SectionStackX.Title(tss.UI.SectionStack(), Tesserae.Tests.Samples.SamplesHelper.SampleHeader("SpinnerSample")), tss.ICTX.Children$6(tss.S, tss.UI.Stack(), [Tesserae.Tests.Samples.SamplesHelper.SampleTitle("Overview"), tss.UI.TextBlock("A Spinner is an outline of a circle which animates around itself indicating to the user that things are processing. A Spinner is shown when it's unsure how long a task will take making it the indeterminate version of a ProgressIndicator. They can be various sizes, located inline with content or centered. They generally appear after an action is being processed or committed. They are subtle and generally do not take up much space, but are transitions from the completed task.")])), tss.ICTX.Children$6(tss.S, tss.ICX.WidthStretch(tss.S, tss.UI.Stack()), [Tesserae.Tests.Samples.SamplesHelper.SampleTitle("Best Practices"), tss.ICTX.Children$6(tss.S, tss.ICX.WidthStretch(tss.S, tss.UI.Stack()).Horizontal(), [tss.ICTX.Children$6(tss.S, tss.ICX.WidthStretch(tss.S, tss.UI.Stack()), [Tesserae.Tests.Samples.SamplesHelper.SampleSubTitle("Do"), Tesserae.Tests.Samples.SamplesHelper.SampleDo("Use a Spinner when a task is not immediate."), Tesserae.Tests.Samples.SamplesHelper.SampleDo("Use one Spinner at a time."), Tesserae.Tests.Samples.SamplesHelper.SampleDo("Descriptive verbs are appropriate under a Spinner to help the user understand what's happening. Ie: Saving, processing, updating."), Tesserae.Tests.Samples.SamplesHelper.SampleDo("Use a Spinner when confirming a change has been made or a task is being processed.")]), tss.ICTX.Children$6(tss.S, tss.ICX.WidthStretch(tss.S, tss.UI.Stack()), [Tesserae.Tests.Samples.SamplesHelper.SampleSubTitle("Don't"), Tesserae.Tests.Samples.SamplesHelper.SampleDont("Don\u2019t use a Spinner when performing immediate tasks."), Tesserae.Tests.Samples.SamplesHelper.SampleDont("Don't show multiple Spinners at the same time."), Tesserae.Tests.Samples.SamplesHelper.SampleDont("Don't include more than a few words when paired with a Spinner.")])])])), tss.ICTX.Children$6(tss.S, tss.ICX.Width(tss.S, tss.UI.Stack(), tss.usX.px$1(400)), [Tesserae.Tests.Samples.SamplesHelper.SampleTitle("Usage"), tss.ITFX.Medium(tss.txt, tss.UI.TextBlock("Spinner sizes")), tss.ICX.AlignCenter(tss.Label, tss.UI.Label$1("Extra small spinner").SetContent(tss.UI.Spinner().XSmall())), tss.ICX.AlignCenter(tss.Label, tss.UI.Label$1("Small spinner").SetContent(tss.UI.Spinner().Small())), tss.ICX.AlignCenter(tss.Label, tss.UI.Label$1("Medium spinner").SetContent(tss.UI.Spinner().Medium())), tss.ICX.AlignCenter(tss.Label, tss.UI.Label$1("Large spinner").SetContent(tss.UI.Spinner().Large()))])), tss.ICTX.Children$6(tss.S, tss.ICX.Width(tss.S, tss.UI.Stack(), tss.usX.px$1(400)), [tss.ITFX.Medium(tss.txt, tss.UI.TextBlock("Spinner label positioning")), tss.UI.Label$1("Spinner with label positioned below").SetContent(tss.UI.Spinner("I am definitely loading...").Below()), tss.UI.Label$1("Spinner with label positioned above").SetContent(tss.UI.Spinner("Seriously, still loading...").Above()), tss.UI.Label$1("Spinner with label positioned to right").SetContent(tss.UI.Spinner("Wait, wait...").Right()), tss.UI.Label$1("Spinner with label positioned to left").SetContent(tss.UI.Spinner("Nope, still loading...").Left())]));
            }
        },
        methods: {
            Render: function () {
                return this._content.tss$IC$Render();
            }
        }
    });

    H5.define("Tesserae.Tests.Samples.StackSample", {
        inherits: [tss.IC],
        fields: {
            _content: null
        },
        alias: ["Render", "tss$IC$Render"],
        ctors: {
            ctor: function () {
                this.$initialize();

                var mainButton = tss.ICX.MinWidth(tss.Button, tss.ITFX.TextLeft(tss.Button, tss.UI.Button$1("Some Text")), tss.usX.px$1(200)).Ellipsis().IconOnHover();
                tss.ICX.Tooltip(tss.Button, mainButton, "Tooltip for the main Button").SetIcon$1(241, tss.UI.Theme.Primary.Background);

                var otherButton = tss.ICX.Fade$2(tss.Button, tss.ICX.Tooltip(tss.Button, tss.UI.Button$1(), "Tooltip for the other Button").SetIcon$1(1214, tss.UI.Theme.Danger.Background, "tss-fontsize-medium", "lal", false));
                var hoverStack = tss.ICTX.Children$6(tss.S, tss.ICX.MaxWidth(tss.S, tss.UI.HStack(), tss.usX.px$1(500)), [mainButton, otherButton]);

                var stack = tss.UI.Stack();
                var countSlider = tss.UI.Slider(5, 0, 10, 1);
                this._content = tss.SectionStackX.Section(tss.SectionStackX.Section(tss.SectionStackX.Section(tss.SectionStackX.Title(tss.UI.SectionStack(), Tesserae.Tests.Samples.SamplesHelper.SampleHeader("StackSample")), tss.ICTX.Children$6(tss.S, tss.UI.Stack(), [Tesserae.Tests.Samples.SamplesHelper.SampleTitle("Overview"), tss.UI.TextBlock("A Stack is a container-type component that abstracts the implementation of a flexbox in order to define the layout of its children components.")])), tss.ICTX.Children$6(tss.S, tss.UI.Stack(), [Tesserae.Tests.Samples.SamplesHelper.SampleTitle("Usage"), tss.ICTX.Children$6(tss.S, tss.UI.Stack(), [tss.ICTX.Children$6(tss.S, tss.UI.Stack().Horizontal(), [tss.ICTX.Children$6(tss.S, tss.UI.Stack(), [tss.UI.Label$1("Number of items:").SetContent(countSlider.OnInput(H5.fn.bind(this, function (s, e) {
                    this.SetChildren(stack, s.Value);
                }))), tss.ICTX.Children$6(tss.S, tss.UI.Stack().Horizontal(), [tss.UI.ChoiceGroup("Orientation:").Horizontal().Choices([tss.UI.Choice("Vertical").Selected(), tss.UI.Choice("Horizontal"), tss.UI.Choice("Vertical Reverse"), tss.UI.Choice("Horizontal Reverse")]).OnChange(function (s, e) {
                    if (H5.rE(s.SelectedOption.Text, "Horizontal")) {
                        stack.Horizontal();
                    } else {
                        if (H5.rE(s.SelectedOption.Text, "Vertical")) {
                            stack.Vertical();
                        } else {
                            if (H5.rE(s.SelectedOption.Text, "Horizontal Reverse")) {
                                stack.HorizontalReverse();
                            } else {
                                if (H5.rE(s.SelectedOption.Text, "Vertical Reverse")) {
                                    stack.VerticalReverse();
                                }
                            }
                        }
                    }
                })])])]), tss.ICX.HeightAuto(tss.S, stack)])])), tss.ICTX.Children$6(tss.S, tss.UI.Stack(), [Tesserae.Tests.Samples.SamplesHelper.SampleTitle("Advanced"), tss.UI.Label$1("Stack with hover events").SetContent(tss.ICTX.Children$6(tss.S, hoverStack.OnMouseOver(function (s, e) {
                    tss.ICX.Show(tss.Button, otherButton);
                }).OnMouseOut(function (s, e) {
                    tss.ICX.Fade$2(tss.Button, otherButton);
                }), [tss.ICX.WS(tss.Button, mainButton), otherButton]))]));
                this.SetChildren(stack, 5);
            }
        },
        methods: {
            SetChildren: function (stack, count) {
                stack.Clear();
                for (var i = 0; i < count; i = (i + 1) | 0) {
                    stack.Add(tss.UI.Button$1(H5.toString(i)));
                }
            },
            Render: function () {
                return this._content.tss$IC$Render();
            }
        }
    });

    H5.define("Tesserae.Tests.Samples.TextBlockSample", {
        inherits: [tss.IC],
        fields: {
            _content: null
        },
        alias: ["Render", "tss$IC$Render"],
        ctors: {
            ctor: function () {
                this.$initialize();
                this._content = tss.SectionStackX.Section(tss.SectionStackX.Section(tss.SectionStackX.Title(tss.UI.SectionStack(), Tesserae.Tests.Samples.SamplesHelper.SampleHeader("TextBlockSample")), tss.ICTX.Children$6(tss.S, tss.UI.Stack(), [Tesserae.Tests.Samples.SamplesHelper.SampleTitle("Overview"), tss.UI.TextBlock("Text is a component for displaying text. You can use Text to standardize text across your web app.")])), tss.ICTX.Children$6(tss.S, tss.UI.Stack(), [Tesserae.Tests.Samples.SamplesHelper.SampleTitle("Usage"), tss.ITFX.Medium(tss.txt, tss.UI.TextBlock("TextBox Ramp Example")), tss.ICTX.Children$6(tss.S, tss.UI.Stack().Horizontal(), [tss.ITFX.SemiBold(tss.txt, tss.ICX.Width(tss.txt, tss.UI.TextBlock("Variant"), tss.usX.px$1(200))), tss.ITFX.SemiBold(tss.txt, tss.UI.TextBlock("Example"))]), tss.ICTX.Children$6(tss.S, tss.UI.Stack().Horizontal(), [tss.ICX.Width(tss.txt, tss.UI.TextBlock("tiny"), tss.usX.px$1(200)), tss.ITFX.Tiny(tss.txt, tss.UI.TextBlock("The quick brown fox jumped over the lazy dog."))]), tss.ICTX.Children$6(tss.S, tss.UI.Stack().Horizontal(), [tss.ICX.Width(tss.txt, tss.UI.TextBlock("xSmall"), tss.usX.px$1(200)), tss.ITFX.XSmall(tss.txt, tss.UI.TextBlock("The quick brown fox jumped over the lazy dog."))]), tss.ICTX.Children$6(tss.S, tss.UI.Stack().Horizontal(), [tss.ICX.Width(tss.txt, tss.UI.TextBlock("small"), tss.usX.px$1(200)), tss.ITFX.Small(tss.txt, tss.UI.TextBlock("The quick brown fox jumped over the lazy dog."))]), tss.ICTX.Children$6(tss.S, tss.UI.Stack().Horizontal(), [tss.ICX.Width(tss.txt, tss.UI.TextBlock("smallPlus"), tss.usX.px$1(200)), tss.ITFX.SmallPlus(tss.txt, tss.UI.TextBlock("The quick brown fox jumped over the lazy dog."))]), tss.ICTX.Children$6(tss.S, tss.UI.Stack().Horizontal(), [tss.ICX.Width(tss.txt, tss.UI.TextBlock("medium"), tss.usX.px$1(200)), tss.ITFX.Medium(tss.txt, tss.UI.TextBlock("The quick brown fox jumped over the lazy dog."))]), tss.ICTX.Children$6(tss.S, tss.UI.Stack().Horizontal(), [tss.ICX.Width(tss.txt, tss.UI.TextBlock("mediumPlus"), tss.usX.px$1(200)), tss.ITFX.MediumPlus(tss.txt, tss.UI.TextBlock("The quick brown fox jumped over the lazy dog."))]), tss.ICTX.Children$6(tss.S, tss.UI.Stack().Horizontal(), [tss.ICX.Width(tss.txt, tss.UI.TextBlock("large"), tss.usX.px$1(200)), tss.ITFX.Large(tss.txt, tss.UI.TextBlock("The quick brown fox jumped over the lazy dog."))]), tss.ICTX.Children$6(tss.S, tss.UI.Stack().Horizontal(), [tss.ICX.Width(tss.txt, tss.UI.TextBlock("xLarge"), tss.usX.px$1(200)), tss.ITFX.XLarge(tss.txt, tss.UI.TextBlock("The quick brown fox jumped over the lazy dog."))]), tss.ICTX.Children$6(tss.S, tss.UI.Stack().Horizontal(), [tss.ICX.Width(tss.txt, tss.UI.TextBlock("xxLarge"), tss.usX.px$1(200)), tss.ITFX.XXLarge(tss.txt, tss.UI.TextBlock("The quick brown fox jumped over the lazy dog."))]), tss.ICTX.Children$6(tss.S, tss.UI.Stack().Horizontal(), [tss.ICX.Width(tss.txt, tss.UI.TextBlock("mega"), tss.usX.px$1(200)), tss.ITFX.Mega(tss.txt, tss.UI.TextBlock("The quick brown fox jumped over the lazy dog."))]), tss.ITFX.Medium(tss.txt, tss.UI.TextBlock("TextBox Wrap Example")), tss.ITFX.SmallPlus(tss.txt, tss.UI.TextBlock("Wrap (Default)")), tss.ICX.Width(tss.txt, tss.UI.TextBlock("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."), tss.usX.percent$1(50)), tss.ITFX.SmallPlus(tss.txt, tss.UI.TextBlock("No Wrap")), tss.ICX.Width(tss.txt, tss.txtX.NoWrap(tss.txt, tss.UI.TextBlock("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")), tss.usX.percent$1(50))]));
            }
        },
        methods: {
            Render: function () {
                return this._content.tss$IC$Render();
            }
        }
    });

    H5.define("Tesserae.Tests.Samples.TextBoxSample", {
        inherits: [tss.IC],
        fields: {
            _content: null
        },
        alias: ["Render", "tss$IC$Render"],
        ctors: {
            ctor: function () {
                this.$initialize();
                this._content = tss.SectionStackX.Section(tss.SectionStackX.Section(tss.SectionStackX.Section(tss.SectionStackX.Title(tss.UI.SectionStack(), Tesserae.Tests.Samples.SamplesHelper.SampleHeader("TextBoxSample")), tss.ICTX.Children$6(tss.S, tss.UI.Stack(), [Tesserae.Tests.Samples.SamplesHelper.SampleTitle("Overview"), tss.UI.TextBlock("The TextBox component enables a user to type text into an app. The text displays on the screen in a simple, uniform format.")])), tss.ICTX.Children$6(tss.S, tss.UI.Stack(), [Tesserae.Tests.Samples.SamplesHelper.SampleTitle("Best Practices"), tss.ICTX.Children$6(tss.S, tss.UI.Stack().Horizontal(), [tss.ICTX.Children$6(tss.S, tss.ICX.Width(tss.S, tss.UI.Stack(), tss.usX.percent$1(40)), [Tesserae.Tests.Samples.SamplesHelper.SampleSubTitle("Do"), Tesserae.Tests.Samples.SamplesHelper.SampleDo("Use the TextBox to accept data input on a form or page."), Tesserae.Tests.Samples.SamplesHelper.SampleDo("Label the TextBox with a helpful name."), Tesserae.Tests.Samples.SamplesHelper.SampleDo("Provide concise helper text that specifies what content is expected to be entered."), Tesserae.Tests.Samples.SamplesHelper.SampleDo("When part of a form, provide clear designations for which TextBox are required vs. optional."), Tesserae.Tests.Samples.SamplesHelper.SampleDo("Provide all appropriate methods for submitting provided data (e.g. dedicated \u2018Submit\u2019 button)."), Tesserae.Tests.Samples.SamplesHelper.SampleDo("Provide all appropriate methods of clearing provided data (\u2018X\u2019 or something similar)."), Tesserae.Tests.Samples.SamplesHelper.SampleDo("Allow for selection, copy and paste of field data."), Tesserae.Tests.Samples.SamplesHelper.SampleDo("Ensure that the TextBox is functional through use of mouse/keyboard or touch when available.")]), tss.ICTX.Children$6(tss.S, tss.ICX.Width(tss.S, tss.UI.Stack(), tss.usX.percent$1(40)), [Tesserae.Tests.Samples.SamplesHelper.SampleSubTitle("Don't"), Tesserae.Tests.Samples.SamplesHelper.SampleDont("Don't use a TextBox to render basic copy as part of a body element of a page."), Tesserae.Tests.Samples.SamplesHelper.SampleDont("Don't provide an unlabeled TextBox and expect that users will know what to do with it."), Tesserae.Tests.Samples.SamplesHelper.SampleDont("Don't place a TextBox inline with body copy."), Tesserae.Tests.Samples.SamplesHelper.SampleDont("Don't be overly verbose with helper text."), Tesserae.Tests.Samples.SamplesHelper.SampleDont("Don't occlude the entry or allow entry when the active content is not visible.")])])])), tss.ICTX.Children$6(tss.S, tss.UI.Stack(), [Tesserae.Tests.Samples.SamplesHelper.SampleTitle("Usage"), tss.ITFX.Medium(tss.txt, tss.UI.TextBlock("Basic TextBox")), tss.ICTX.Children$6(tss.S, tss.ICX.Width(tss.S, tss.UI.Stack(), tss.usX.percent$1(40)), [tss.UI.Label$1("Standard").SetContent(tss.UI.TextBox$1()), tss.txtX.Disabled(tss.Label, tss.UI.Label$1("Disabled")).SetContent(tss.UI.TextBox$1("I am disabled").Disabled()), tss.UI.Label$1("Read-only").SetContent(tss.UI.TextBox$1("I am read-only").ReadOnly()), tss.UI.Label$1("Password").SetContent(tss.UI.TextBox$1("I am a password box").Password()), tss.txtX.Required(tss.Label, tss.UI.Label$1("Required")).SetContent(tss.UI.TextBox$1("")), tss.UI.TextBox$1("").Required(), tss.UI.Label$1("With error message").SetContent(tss.ICVX.IsInvalid(tss.TextBox, tss.ICVX.Error(tss.TextBox, tss.UI.TextBox$1(), "Error message"))), tss.UI.Label$1("With placeholder").SetContent(tss.UI.TextBox$1().SetPlaceholder("Please enter text here")), tss.UI.Label$1("With validation").SetContent(tss.vX.Validation(tss.TextBox, tss.UI.TextBox$1(), function (tb) {
                    return tb.Text.length === 0 ? "Empty" : null;
                })), tss.UI.Label$1("With validation on type").SetContent(tss.vX.Validation(tss.TextBox, tss.UI.TextBox$1(), tss.Validation.NonZeroPositiveInteger)), tss.txtX.Disabled(tss.Label, tss.UI.Label$1("Disabled with placeholder")).SetContent(tss.UI.TextBox$1().SetPlaceholder("I am disabled").Disabled())])]));
            }
        },
        methods: {
            Render: function () {
                return this._content.tss$IC$Render();
            }
        }
    });

    H5.define("Tesserae.Tests.Samples.TextBreadcrumbsSample", {
        inherits: [tss.IC],
        fields: {
            _content: null
        },
        alias: ["Render", "tss$IC$Render"],
        ctors: {
            ctor: function () {
                this.$initialize();
                var msg = { };
                this._content = tss.SectionStackX.Section(tss.SectionStackX.Section(tss.SectionStackX.Section(tss.SectionStackX.Title(tss.UI.SectionStack(), Tesserae.Tests.Samples.SamplesHelper.SampleHeader("TextBreadcrumbsSample")), tss.ICTX.Children$6(tss.S, tss.UI.Stack(), [Tesserae.Tests.Samples.SamplesHelper.SampleTitle("Overview"), tss.UI.TextBlock("TextBreadcrumbs should be used as a navigational aid in your app or site. They indicate the current page\u2019s location within a hierarchy and help the user understand where they are in relation to the rest of that hierarchy. They also afford one-click access to higher levels of that hierarchy."), tss.UI.TextBlock("TextBreadcrumbs are typically placed, in horizontal form, under the masthead or navigation of an experience, above the primary content area.")])), tss.ICTX.Children$6(tss.S, tss.UI.Stack(), [Tesserae.Tests.Samples.SamplesHelper.SampleTitle("Best Practices"), tss.ICTX.Children$6(tss.S, tss.UI.Stack().Horizontal(), [tss.ICTX.Children$6(tss.S, tss.ICX.Width(tss.S, tss.UI.Stack(), tss.usX.percent$1(40)), [Tesserae.Tests.Samples.SamplesHelper.SampleSubTitle("Do"), Tesserae.Tests.Samples.SamplesHelper.SampleDo("Place TextBreadcrumbs at the top of a page, above a list of items, or above the main content of a page.")]), tss.ICTX.Children$6(tss.S, tss.ICX.Width(tss.S, tss.UI.Stack(), tss.usX.percent$1(40)), [Tesserae.Tests.Samples.SamplesHelper.SampleSubTitle("Don't"), Tesserae.Tests.Samples.SamplesHelper.SampleDont("Don't use TextBreadcrumbs as a primary way to navigate an app or site.")])])])), tss.ICTX.Children$6(tss.S, tss.ICX.WS(tss.S, tss.UI.Stack()), [Tesserae.Tests.Samples.SamplesHelper.SampleTitle("Usage"), tss.UI.Label$1("Selected: ").SetContent(tss.UI.Var(tss.txt, tss.UI.TextBlock(), msg)), tss.ITFX.Medium(tss.txt, tss.UI.TextBlock("All Visible")), tss.ICX.PaddingBottom(tss.TextBreadcrumbs, tss.ICX.PaddingTop(tss.TextBreadcrumbs, tss.ICX.MaxWidth(tss.TextBreadcrumbs, tss.UI.TextBreadcrumbs(), tss.usX.percent$1(100)), tss.usX.px$1(16)), tss.usX.px$1(16)).Items([tss.UI.TextBreadcrumb("Folder 1").OnClick(function (s, e) {
                    tss.txtX.Text(tss.txt, msg.v, "Folder 1");
                }), tss.UI.TextBreadcrumb("Folder 2").OnClick(function (s, e) {
                    tss.txtX.Text(tss.txt, msg.v, "Folder 2");
                }), tss.UI.TextBreadcrumb("Folder 3").OnClick(function (s, e) {
                    tss.txtX.Text(tss.txt, msg.v, "Folder 3");
                }), tss.UI.TextBreadcrumb("Folder 4").OnClick(function (s, e) {
                    tss.txtX.Text(tss.txt, msg.v, "Folder 4");
                }), tss.UI.TextBreadcrumb("Folder 4").OnClick(function (s, e) {
                    tss.txtX.Text(tss.txt, msg.v, "Folder 4");
                }), tss.UI.TextBreadcrumb("Folder 4").OnClick(function (s, e) {
                    tss.txtX.Text(tss.txt, msg.v, "Folder 4");
                }), tss.UI.TextBreadcrumb("Folder 4").OnClick(function (s, e) {
                    tss.txtX.Text(tss.txt, msg.v, "Folder 4");
                }), tss.UI.TextBreadcrumb("Folder 4").OnClick(function (s, e) {
                    tss.txtX.Text(tss.txt, msg.v, "Folder 4");
                }), tss.UI.TextBreadcrumb("Folder 4").OnClick(function (s, e) {
                    tss.txtX.Text(tss.txt, msg.v, "Folder 4");
                }), tss.UI.TextBreadcrumb("Folder 4").OnClick(function (s, e) {
                    tss.txtX.Text(tss.txt, msg.v, "Folder 4");
                }), tss.UI.TextBreadcrumb("Folder 4").OnClick(function (s, e) {
                    tss.txtX.Text(tss.txt, msg.v, "Folder 4");
                }), tss.UI.TextBreadcrumb("Folder 4").OnClick(function (s, e) {
                    tss.txtX.Text(tss.txt, msg.v, "Folder 4");
                }), tss.UI.TextBreadcrumb("Folder 4").OnClick(function (s, e) {
                    tss.txtX.Text(tss.txt, msg.v, "Folder 4");
                }), tss.UI.TextBreadcrumb("Folder 4").OnClick(function (s, e) {
                    tss.txtX.Text(tss.txt, msg.v, "Folder 4");
                }), tss.UI.TextBreadcrumb("Folder 4").OnClick(function (s, e) {
                    tss.txtX.Text(tss.txt, msg.v, "Folder 4");
                }), tss.UI.TextBreadcrumb("Folder 5").OnClick(function (s, e) {
                    tss.txtX.Text(tss.txt, msg.v, "Folder 5");
                }), tss.UI.TextBreadcrumb("Folder 6").OnClick(function (s, e) {
                    tss.txtX.Text(tss.txt, msg.v, "Folder 6");
                })]), tss.ITFX.Medium(tss.txt, tss.UI.TextBlock("All Visible, Small")), tss.ICX.PaddingBottom(tss.TextBreadcrumbs, tss.ICX.PaddingTop(tss.TextBreadcrumbs, tss.ICX.MaxWidth(tss.TextBreadcrumbs, tss.UI.TextBreadcrumbs(), tss.usX.percent$1(100)), tss.usX.px$1(16)), tss.usX.px$1(16)).Items([tss.UI.TextBreadcrumb("Folder 1").OnClick(function (s, e) {
                    tss.txtX.Text(tss.txt, msg.v, "Folder 1");
                }), tss.UI.TextBreadcrumb("Folder 2").OnClick(function (s, e) {
                    tss.txtX.Text(tss.txt, msg.v, "Folder 2");
                }), tss.UI.TextBreadcrumb("Folder 3").OnClick(function (s, e) {
                    tss.txtX.Text(tss.txt, msg.v, "Folder 3");
                }), tss.UI.TextBreadcrumb("Folder 4").OnClick(function (s, e) {
                    tss.txtX.Text(tss.txt, msg.v, "Folder 4");
                }), tss.UI.TextBreadcrumb("Folder 5").OnClick(function (s, e) {
                    tss.txtX.Text(tss.txt, msg.v, "Folder 5");
                }), tss.UI.TextBreadcrumb("Folder 6").OnClick(function (s, e) {
                    tss.txtX.Text(tss.txt, msg.v, "Folder 6");
                })]), tss.ITFX.Medium(tss.txt, tss.UI.TextBlock("Collapse 200px")), tss.ICX.MaxWidth(tss.TextBreadcrumbs, tss.ICX.PaddingBottom(tss.TextBreadcrumbs, tss.ICX.PaddingTop(tss.TextBreadcrumbs, tss.ICX.MaxWidth(tss.TextBreadcrumbs, tss.UI.TextBreadcrumbs(), tss.usX.percent$1(100)), tss.usX.px$1(16)), tss.usX.px$1(16)), tss.usX.px$1(200)).Items([tss.UI.TextBreadcrumb("Folder 1").OnClick(function (s, e) {
                    tss.txtX.Text(tss.txt, msg.v, "Folder 1");
                }), tss.UI.TextBreadcrumb("Folder 2").OnClick(function (s, e) {
                    tss.txtX.Text(tss.txt, msg.v, "Folder 2");
                }), tss.UI.TextBreadcrumb("Folder 3").OnClick(function (s, e) {
                    tss.txtX.Text(tss.txt, msg.v, "Folder 3");
                }), tss.UI.TextBreadcrumb("Folder 4").OnClick(function (s, e) {
                    tss.txtX.Text(tss.txt, msg.v, "Folder 4");
                }), tss.UI.TextBreadcrumb("Folder 5").OnClick(function (s, e) {
                    tss.txtX.Text(tss.txt, msg.v, "Folder 5");
                }), tss.UI.TextBreadcrumb("Folder 6").OnClick(function (s, e) {
                    tss.txtX.Text(tss.txt, msg.v, "Folder 6");
                })]), tss.ITFX.Medium(tss.txt, tss.UI.TextBlock("Collapse 200px, Small")), tss.ICX.MaxWidth(tss.TextBreadcrumbs, tss.ICX.PaddingBottom(tss.TextBreadcrumbs, tss.ICX.PaddingTop(tss.TextBreadcrumbs, tss.ICX.MaxWidth(tss.TextBreadcrumbs, tss.UI.TextBreadcrumbs(), tss.usX.percent$1(100)), tss.usX.px$1(16)), tss.usX.px$1(16)), tss.usX.px$1(200)).Items([tss.UI.TextBreadcrumb("Folder 1").OnClick(function (s, e) {
                    tss.txtX.Text(tss.txt, msg.v, "Folder 1");
                }), tss.UI.TextBreadcrumb("Folder 2").OnClick(function (s, e) {
                    tss.txtX.Text(tss.txt, msg.v, "Folder 2");
                }), tss.UI.TextBreadcrumb("Folder 3").OnClick(function (s, e) {
                    tss.txtX.Text(tss.txt, msg.v, "Folder 3");
                }), tss.UI.TextBreadcrumb("Folder 4").OnClick(function (s, e) {
                    tss.txtX.Text(tss.txt, msg.v, "Folder 4");
                }), tss.UI.TextBreadcrumb("Folder 5").OnClick(function (s, e) {
                    tss.txtX.Text(tss.txt, msg.v, "Folder 5");
                }), tss.UI.TextBreadcrumb("Folder 6").OnClick(function (s, e) {
                    tss.txtX.Text(tss.txt, msg.v, "Folder 6");
                })]), tss.ITFX.Medium(tss.txt, tss.UI.TextBlock("Collapse 300px")), tss.ICX.MaxWidth(tss.TextBreadcrumbs, tss.ICX.PaddingBottom(tss.TextBreadcrumbs, tss.ICX.PaddingTop(tss.TextBreadcrumbs, tss.ICX.MaxWidth(tss.TextBreadcrumbs, tss.UI.TextBreadcrumbs(), tss.usX.percent$1(100)), tss.usX.px$1(16)), tss.usX.px$1(16)), tss.usX.px$1(300)).Items([tss.UI.TextBreadcrumb("Folder 1").OnClick(function (s, e) {
                    tss.txtX.Text(tss.txt, msg.v, "Folder 1");
                }), tss.UI.TextBreadcrumb("Folder 2").OnClick(function (s, e) {
                    tss.txtX.Text(tss.txt, msg.v, "Folder 2");
                }), tss.UI.TextBreadcrumb("Folder 3").OnClick(function (s, e) {
                    tss.txtX.Text(tss.txt, msg.v, "Folder 3");
                }), tss.UI.TextBreadcrumb("Folder 4").OnClick(function (s, e) {
                    tss.txtX.Text(tss.txt, msg.v, "Folder 4");
                }), tss.UI.TextBreadcrumb("Folder 5").OnClick(function (s, e) {
                    tss.txtX.Text(tss.txt, msg.v, "Folder 5");
                }), tss.UI.TextBreadcrumb("Folder 6").OnClick(function (s, e) {
                    tss.txtX.Text(tss.txt, msg.v, "Folder 6");
                })]), tss.ITFX.Medium(tss.txt, tss.UI.TextBlock("Collapse 300px, from second, custom chevron")), tss.ICX.MaxWidth(tss.TextBreadcrumbs, tss.ICX.PaddingBottom(tss.TextBreadcrumbs, tss.ICX.PaddingTop(tss.TextBreadcrumbs, tss.ICX.MaxWidth(tss.TextBreadcrumbs, tss.UI.TextBreadcrumbs(), tss.usX.percent$1(100)), tss.usX.px$1(16)), tss.usX.px$1(16)), tss.usX.px$1(300)).Items([tss.UI.TextBreadcrumb("Folder 1").OnClick(function (s, e) {
                    tss.txtX.Text(tss.txt, msg.v, "Folder 1");
                }), tss.UI.TextBreadcrumb("Folder 2").OnClick(function (s, e) {
                    tss.txtX.Text(tss.txt, msg.v, "Folder 2");
                }), tss.UI.TextBreadcrumb("Folder 3").OnClick(function (s, e) {
                    tss.txtX.Text(tss.txt, msg.v, "Folder 3");
                }), tss.UI.TextBreadcrumb("Folder 4").OnClick(function (s, e) {
                    tss.txtX.Text(tss.txt, msg.v, "Folder 4");
                }), tss.UI.TextBreadcrumb("Folder 5").OnClick(function (s, e) {
                    tss.txtX.Text(tss.txt, msg.v, "Folder 5");
                }), tss.UI.TextBreadcrumb("Folder 6").OnClick(function (s, e) {
                    tss.txtX.Text(tss.txt, msg.v, "Folder 6");
                })])]));
            }
        },
        methods: {
            Render: function () {
                return this._content.tss$IC$Render();
            }
        }
    });

    H5.define("Tesserae.Tests.Samples.ThemeColorsSample", {
        inherits: [tss.IC],
        fields: {
            _content: null
        },
        alias: ["Render", "tss$IC$Render"],
        ctors: {
            ctor: function () {
                this.$initialize();
                this._content = tss.SectionStackX.Section(tss.SectionStackX.Title(tss.UI.SectionStack(), Tesserae.Tests.Samples.SamplesHelper.SampleHeader("ThemeColorsSample")), tss.ICTX.Children$6(tss.S, tss.UI.Stack(), [tss.ICX.Height(tss.DetailsList(Tesserae.Tests.Samples.ThemeColorsSample.ColorListItem), tss.UI.DetailsList(Tesserae.Tests.Samples.ThemeColorsSample.ColorListItem, [tss.UI.DetailsListColumn("ThemeName", tss.usX.px$1(120), false, false, void 0, void 0), tss.UI.DetailsListColumn("Background", tss.usX.px$1(160), false, false, void 0, void 0), tss.UI.DetailsListColumn("Foreground", tss.usX.px$1(160), false, false, void 0, void 0), tss.UI.DetailsListColumn("Border", tss.usX.px$1(160), false, false, void 0, void 0), tss.UI.DetailsListColumn("BackgroundActive", tss.usX.px$1(160), false, false, void 0, void 0), tss.UI.DetailsListColumn("BackgroundHover", tss.usX.px$1(160), false, false, void 0, void 0), tss.UI.DetailsListColumn("ForegroundActive", tss.usX.px$1(160), false, false, void 0, void 0), tss.UI.DetailsListColumn("ForegroundHover", tss.usX.px$1(160), false, false, void 0, void 0)]).Compact(), tss.usX.px$1(500)).WithListItems(System.Array.init([new Tesserae.Tests.Samples.ThemeColorsSample.ColorListItem("Default"), new Tesserae.Tests.Samples.ThemeColorsSample.ColorListItem("Primary"), new Tesserae.Tests.Samples.ThemeColorsSample.ColorListItem("Secondary"), new Tesserae.Tests.Samples.ThemeColorsSample.ColorListItem("Success"), new Tesserae.Tests.Samples.ThemeColorsSample.ColorListItem("Danger")], Tesserae.Tests.Samples.ThemeColorsSample.ColorListItem)).SortedBy("Name")]));
            }
        },
        methods: {
            Render: function () {
                return this._content.tss$IC$Render();
            }
        }
    });

    H5.define("Tesserae.Tests.Samples.ThemeColorsSample.ColorListItem", {
        inherits: function () { return [tss.IDetailsListItemT(Tesserae.Tests.Samples.ThemeColorsSample.ColorListItem)]; },
        $kind: "nested class",
        statics: {
            fields: {
                Mapping: null
            },
            ctors: {
                init: function () {
                    this.Mapping = function (_o6) {
                            _o6.add("Default", function (_o1) {
                                    _o1.add("Background", tss.UI.Theme.Default.Background);
                                    _o1.add("Foreground", tss.UI.Theme.Default.Foreground);
                                    _o1.add("Border", tss.UI.Theme.Default.Border);
                                    _o1.add("BackgroundActive", tss.UI.Theme.Default.BackgroundActive);
                                    _o1.add("BackgroundHover", tss.UI.Theme.Default.BackgroundHover);
                                    _o1.add("ForegroundActive", tss.UI.Theme.Default.ForegroundActive);
                                    _o1.add("ForegroundHover", tss.UI.Theme.Default.ForegroundHover);
                                    return _o1;
                                }(new (System.Collections.Generic.Dictionary$2(System.String,System.String)).ctor()));
                            _o6.add("Primary", function (_o2) {
                                    _o2.add("Background", tss.UI.Theme.Primary.Background);
                                    _o2.add("Foreground", tss.UI.Theme.Primary.Foreground);
                                    _o2.add("Border", tss.UI.Theme.Primary.Border);
                                    _o2.add("BackgroundActive", tss.UI.Theme.Primary.BackgroundActive);
                                    _o2.add("BackgroundHover", tss.UI.Theme.Primary.BackgroundHover);
                                    _o2.add("ForegroundActive", tss.UI.Theme.Primary.ForegroundActive);
                                    _o2.add("ForegroundHover", tss.UI.Theme.Primary.ForegroundHover);
                                    return _o2;
                                }(new (System.Collections.Generic.Dictionary$2(System.String,System.String)).ctor()));
                            _o6.add("Secondary", function (_o3) {
                                    _o3.add("Background", tss.UI.Theme.Secondary.Background);
                                    _o3.add("Foreground", tss.UI.Theme.Secondary.Foreground);
                                    return _o3;
                                }(new (System.Collections.Generic.Dictionary$2(System.String,System.String)).ctor()));
                            _o6.add("Danger", function (_o4) {
                                    _o4.add("Background", tss.UI.Theme.Danger.Background);
                                    _o4.add("Foreground", tss.UI.Theme.Danger.Foreground);
                                    _o4.add("Border", tss.UI.Theme.Danger.Border);
                                    _o4.add("BackgroundActive", tss.UI.Theme.Danger.BackgroundActive);
                                    _o4.add("BackgroundHover", tss.UI.Theme.Danger.BackgroundHover);
                                    _o4.add("ForegroundActive", tss.UI.Theme.Danger.ForegroundActive);
                                    _o4.add("ForegroundHover", tss.UI.Theme.Danger.ForegroundHover);
                                    return _o4;
                                }(new (System.Collections.Generic.Dictionary$2(System.String,System.String)).ctor()));
                            _o6.add("Success", function (_o5) {
                                    _o5.add("Background", tss.UI.Theme.Success.Background);
                                    _o5.add("Foreground", tss.UI.Theme.Success.Foreground);
                                    _o5.add("Border", tss.UI.Theme.Success.Border);
                                    _o5.add("BackgroundActive", tss.UI.Theme.Success.BackgroundActive);
                                    _o5.add("BackgroundHover", tss.UI.Theme.Success.BackgroundHover);
                                    _o5.add("ForegroundActive", tss.UI.Theme.Success.ForegroundActive);
                                    _o5.add("ForegroundHover", tss.UI.Theme.Success.ForegroundHover);
                                    return _o5;
                                }(new (System.Collections.Generic.Dictionary$2(System.String,System.String)).ctor()));
                            return _o6;
                        }(new (System.Collections.Generic.Dictionary$2(System.String,System.Collections.Generic.Dictionary$2(System.String,System.String))).ctor());
                }
            },
            methods: {
                ColorSquare: function (color) {
                    if (System.String.isNullOrWhiteSpace(color)) {
                        return tss.UI.Raw$2(tss.UI.Div(tss.UI._$2(void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, function (s) {
                            s.width = "50px";
                            s.height = "49px";
                        })));
                    }

                    return tss.UI.Raw$2(tss.UI.Div(tss.UI._$2(void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, function (s) {
                        s.width = "50px";
                        s.height = "49px";
                        s.backgroundColor = color;
                        s.color = color;
                        s.borderColor = color;
                        s.boxShadow = "1px 1px 1px 1px lightgrey";
                    })));
                }
            }
        },
        fields: {
            ThemeName: null
        },
        props: {
            EnableOnListItemClickEvent: {
                get: function () {
                    return false;
                }
            }
        },
        alias: [
            "CompareTo", ["tss$IDetailsListItemT$Tesserae$Tests$Samples$ThemeColorsSample$ColorListItem$CompareTo", "tss$IDetailsListItemT$CompareTo"],
            "EnableOnListItemClickEvent", "tss$IDetailsListItem$EnableOnListItemClickEvent",
            "OnListItemClick", "tss$IDetailsListItem$OnListItemClick",
            "Render", "tss$IDetailsListItem$Render"
        ],
        ctors: {
            ctor: function (themeName) {
                this.$initialize();
                this.ThemeName = themeName;
            }
        },
        methods: {
            CompareTo: function (other, columnSortingKey) {
                return 0;
            },
            OnListItemClick: function (listItemIndex) {

                tss.UI.Toast().Information(H5.toString(listItemIndex));
            },
            Render: function (columns, createGridCellExpression) {
                return new (H5.GeneratorEnumerable$1(tss.IC))(H5.fn.bind(this, function (columns, createGridCellExpression) {
                    var $s = 0,
                        $jff,
                        $rv,
                        $ae;

                    var $en = new (H5.GeneratorEnumerator$1(tss.IC))(H5.fn.bind(this, function () {
                        try {
                            for (;;) {
                                switch ($s) {
                                    case 0: {
                                        $en.current = createGridCellExpression(System.Array.getItem(columns, 0, tss.IDetailsListColumn), H5.fn.bind(this, function () {
                                                return tss.UI.TextBlock(this.ThemeName);
                                            }));
                                            $s = 1;
                                            return true;
                                    }
                                    case 1: {
                                        $en.current = createGridCellExpression(System.Array.getItem(columns, 1, tss.IDetailsListColumn), H5.fn.bind(this, function () {
                                                return Tesserae.Tests.Samples.ThemeColorsSample.ColorListItem.ColorSquare(System.Collections.Generic.CollectionExtensions.GetValueOrDefault(System.String, System.String, Tesserae.Tests.Samples.ThemeColorsSample.ColorListItem.Mapping.getItem(this.ThemeName), "Background", ""));
                                            }));
                                            $s = 2;
                                            return true;
                                    }
                                    case 2: {
                                        $en.current = createGridCellExpression(System.Array.getItem(columns, 2, tss.IDetailsListColumn), H5.fn.bind(this, function () {
                                                return Tesserae.Tests.Samples.ThemeColorsSample.ColorListItem.ColorSquare(System.Collections.Generic.CollectionExtensions.GetValueOrDefault(System.String, System.String, Tesserae.Tests.Samples.ThemeColorsSample.ColorListItem.Mapping.getItem(this.ThemeName), "Foreground", ""));
                                            }));
                                            $s = 3;
                                            return true;
                                    }
                                    case 3: {
                                        $en.current = createGridCellExpression(System.Array.getItem(columns, 3, tss.IDetailsListColumn), H5.fn.bind(this, function () {
                                                return Tesserae.Tests.Samples.ThemeColorsSample.ColorListItem.ColorSquare(System.Collections.Generic.CollectionExtensions.GetValueOrDefault(System.String, System.String, Tesserae.Tests.Samples.ThemeColorsSample.ColorListItem.Mapping.getItem(this.ThemeName), "Border", ""));
                                            }));
                                            $s = 4;
                                            return true;
                                    }
                                    case 4: {
                                        $en.current = createGridCellExpression(System.Array.getItem(columns, 4, tss.IDetailsListColumn), H5.fn.bind(this, function () {
                                                return Tesserae.Tests.Samples.ThemeColorsSample.ColorListItem.ColorSquare(System.Collections.Generic.CollectionExtensions.GetValueOrDefault(System.String, System.String, Tesserae.Tests.Samples.ThemeColorsSample.ColorListItem.Mapping.getItem(this.ThemeName), "BackgroundActive", ""));
                                            }));
                                            $s = 5;
                                            return true;
                                    }
                                    case 5: {
                                        $en.current = createGridCellExpression(System.Array.getItem(columns, 5, tss.IDetailsListColumn), H5.fn.bind(this, function () {
                                                return Tesserae.Tests.Samples.ThemeColorsSample.ColorListItem.ColorSquare(System.Collections.Generic.CollectionExtensions.GetValueOrDefault(System.String, System.String, Tesserae.Tests.Samples.ThemeColorsSample.ColorListItem.Mapping.getItem(this.ThemeName), "BackgroundHover", ""));
                                            }));
                                            $s = 6;
                                            return true;
                                    }
                                    case 6: {
                                        $en.current = createGridCellExpression(System.Array.getItem(columns, 6, tss.IDetailsListColumn), H5.fn.bind(this, function () {
                                                return Tesserae.Tests.Samples.ThemeColorsSample.ColorListItem.ColorSquare(System.Collections.Generic.CollectionExtensions.GetValueOrDefault(System.String, System.String, Tesserae.Tests.Samples.ThemeColorsSample.ColorListItem.Mapping.getItem(this.ThemeName), "ForegroundActive", ""));
                                            }));
                                            $s = 7;
                                            return true;
                                    }
                                    case 7: {
                                        $en.current = createGridCellExpression(System.Array.getItem(columns, 7, tss.IDetailsListColumn), H5.fn.bind(this, function () {
                                                return Tesserae.Tests.Samples.ThemeColorsSample.ColorListItem.ColorSquare(System.Collections.Generic.CollectionExtensions.GetValueOrDefault(System.String, System.String, Tesserae.Tests.Samples.ThemeColorsSample.ColorListItem.Mapping.getItem(this.ThemeName), "ForegroundHover", ""));
                                            }));
                                            $s = 8;
                                            return true;
                                    }
                                    case 8: {

                                    }
                                    default: {
                                        return false;
                                    }
                                }
                            }
                        } catch($ae1) {
                            $ae = System.Exception.create($ae1);
                            throw $ae;
                        }
                    }));
                    return $en;
                }, arguments));
            }
        }
    });

    H5.define("Tesserae.Tests.Samples.TimelineSample", {
        inherits: [tss.IC],
        fields: {
            _content: null
        },
        alias: ["Render", "tss$IC$Render"],
        ctors: {
            ctor: function () {
                this.$initialize();
                var obsList = new (tss.ObservableList(tss.IC)).ctor();

                var vs = tss.UI.VisibilitySensor(H5.fn.bind(this, function (v) {
                    obsList.remove(v);
                    obsList.AddRange(this.GetSomeItems(20));
                    v.Reset();
                    obsList.add(v);
                }));

                obsList.AddRange(this.GetSomeItems(10));
                obsList.add(vs);
                this._content = tss.SectionStackX.Section(tss.SectionStackX.Section(tss.SectionStackX.Title(tss.ICX.WidthStretch(tss.SectionStack, tss.UI.SectionStack()), Tesserae.Tests.Samples.SamplesHelper.SampleHeader("TimelineSample")), tss.ICTX.Children$6(tss.S, tss.UI.Stack(), [Tesserae.Tests.Samples.SamplesHelper.SampleTitle("Overview"), tss.ICX.PaddingBottom(tss.txt, tss.UI.TextBlock("Timeline provides a base component for rendering vertical timelines. It is agnostic of the tile component used, and selection management. These concerns can be layered separately."), tss.usX.px$1(16))])), tss.ICTX.Children$6(tss.S, tss.UI.Stack(), [Tesserae.Tests.Samples.SamplesHelper.SampleTitle("Usage"), tss.ICX.PaddingBottom(tss.txt, tss.ITFX.Medium(tss.txt, tss.UI.TextBlock("Timeline")), tss.usX.px$1(16)), tss.ICX.PaddingBottom(tss.Timeline, tss.ICX.Height(tss.Timeline, tss.ICX.PaddingBottom(tss.Timeline, tss.ICTX.Children$6(tss.Timeline, tss.UI.Timeline(), this.GetSomeItems(10)), tss.usX.px$1(16)), tss.usX.px$1(500)), tss.usX.px$1(32)), tss.ICX.PaddingBottom(tss.txt, tss.ITFX.Medium(tss.txt, tss.UI.TextBlock("Timeline with Max Width")), tss.usX.px$1(16)), tss.ICX.PaddingBottom(tss.Timeline, tss.ICX.Height(tss.Timeline, tss.ICX.PaddingBottom(tss.Timeline, tss.ICTX.Children$6(tss.Timeline, tss.UI.Timeline().TimelineWidth(tss.usX.px$1(600)), this.GetSomeItems(10)), tss.usX.px$1(16)), tss.usX.px$1(500)), tss.usX.px$1(32)), tss.ICX.PaddingBottom(tss.txt, tss.ITFX.Medium(tss.txt, tss.UI.TextBlock("Timeline Same Side")), tss.usX.px$1(16)), tss.ICX.PaddingBottom(tss.Timeline, tss.ICX.Height(tss.Timeline, tss.ICX.PaddingBottom(tss.Timeline, tss.ICTX.Children$6(tss.Timeline, tss.UI.Timeline().SameSide(), this.GetSomeItems(10)), tss.usX.px$1(16)), tss.usX.px$1(500)), tss.usX.px$1(32)), tss.ICX.PaddingBottom(tss.txt, tss.ITFX.Medium(tss.txt, tss.UI.TextBlock("Timeline Same Side with Max Width")), tss.usX.px$1(16)), tss.ICX.PaddingBottom(tss.Timeline, tss.ICX.Height(tss.Timeline, tss.ICX.PaddingBottom(tss.Timeline, tss.ICTX.Children$6(tss.Timeline, tss.UI.Timeline().TimelineWidth(tss.usX.px$1(600)).SameSide(), this.GetSomeItems(10)), tss.usX.px$1(16)), tss.usX.px$1(500)), tss.usX.px$1(32))]));
            }
        },
        methods: {
            Render: function () {
                return this._content.tss$IC$Render();
            },
            GetSomeItems: function (count) {
                return System.Linq.Enumerable.range(1, count).select(function (number) {
                    return tss.txtX.NonSelectable(tss.txt, tss.UI.TextBlock(System.String.format("Lorem Ipsum {0}", [H5.box(number, System.Int32)])));
                }).ToArray(tss.txt);
            }
        }
    });

    H5.define("Tesserae.Tests.Samples.ToastSample", {
        inherits: [tss.IC],
        fields: {
            _content: null
        },
        alias: ["Render", "tss$IC$Render"],
        ctors: {
            ctor: function () {
                this.$initialize();
                this._content = tss.SectionStackX.Section(tss.SectionStackX.Section(tss.SectionStackX.Section(tss.SectionStackX.Title(tss.UI.SectionStack(), Tesserae.Tests.Samples.SamplesHelper.SampleHeader("ToastSample")), tss.ICTX.Children$6(tss.S, tss.ICX.WidthStretch(tss.S, tss.UI.Stack()), [Tesserae.Tests.Samples.SamplesHelper.SampleTitle("Overview"), tss.UI.TextBlock("Toasts are used for short-lived notifications to users.")])), tss.ICTX.Children$6(tss.S, tss.ICX.WidthStretch(tss.S, tss.UI.Stack()), [Tesserae.Tests.Samples.SamplesHelper.SampleTitle("Best Practices"), tss.UI.SplitView().SplitInMiddle().Left(tss.ICTX.Children$6(tss.S, tss.ICX.WidthStretch(tss.S, tss.UI.Stack()), [Tesserae.Tests.Samples.SamplesHelper.SampleSubTitle("Do"), Tesserae.Tests.Samples.SamplesHelper.SampleDo("Write short and recognizable messages"), Tesserae.Tests.Samples.SamplesHelper.SampleDo("Keep toasts long enough to be read, but not long enough to bother")])).Right(tss.ICTX.Children$6(tss.S, tss.ICX.WidthStretch(tss.S, tss.UI.Stack()), [Tesserae.Tests.Samples.SamplesHelper.SampleSubTitle("Don't"), Tesserae.Tests.Samples.SamplesHelper.SampleDont("Overload users with toasts.")]))])), tss.ICTX.Children$6(tss.S, tss.ICX.WidthStretch(tss.S, tss.UI.Stack()), [Tesserae.Tests.Samples.SamplesHelper.SampleTitle("Usage"), Tesserae.Tests.Samples.SamplesHelper.SampleSubTitle("Toasts top-right (default)"), tss.ICTX.Children$6(tss.S, tss.UI.Stack().Horizontal(), [tss.UI.Button$1().SetText("Info").OnClick(function (s, e) {
                    tss.UI.Toast().Information("Info!");
                }), tss.UI.Button$1().SetText("Success").OnClick(function (s, e) {
                    tss.UI.Toast().Success("Success!");
                }), tss.UI.Button$1().SetText("Warning").OnClick(function (s, e) {
                    tss.UI.Toast().Warning("Warning!");
                }), tss.UI.Button$1().SetText("Error").OnClick(function (s, e) {
                    tss.UI.Toast().Error("Error!");
                })]), Tesserae.Tests.Samples.SamplesHelper.SampleSubTitle("Toasts top left"), tss.ICTX.Children$6(tss.S, tss.UI.Stack().Horizontal(), [tss.UI.Button$1().SetText("Info").OnClick(function (s, e) {
                    tss.UI.Toast().TopLeft().Information("Info!");
                }), tss.UI.Button$1().SetText("Success").OnClick(function (s, e) {
                    tss.UI.Toast().TopLeft().Success("Success!");
                }), tss.UI.Button$1().SetText("Warning").OnClick(function (s, e) {
                    tss.UI.Toast().TopLeft().Warning("Warning!");
                }), tss.UI.Button$1().SetText("Error").OnClick(function (s, e) {
                    tss.UI.Toast().TopLeft().Error("Error!");
                })]), Tesserae.Tests.Samples.SamplesHelper.SampleSubTitle("Toasts bottom right"), tss.ICTX.Children$6(tss.S, tss.UI.Stack().Horizontal(), [tss.UI.Button$1().SetText("Info").OnClick(function (s, e) {
                    tss.UI.Toast().BottomRight().Information("Info!");
                }), tss.UI.Button$1().SetText("Success").OnClick(function (s, e) {
                    tss.UI.Toast().BottomRight().Success("Success!");
                }), tss.UI.Button$1().SetText("Warning").OnClick(function (s, e) {
                    tss.UI.Toast().BottomRight().Warning("Warning!");
                }), tss.UI.Button$1().SetText("Error").OnClick(function (s, e) {
                    tss.UI.Toast().BottomRight().Error("Error!");
                })]), Tesserae.Tests.Samples.SamplesHelper.SampleSubTitle("Toasts bottom left"), tss.ICTX.Children$6(tss.S, tss.UI.Stack().Horizontal(), [tss.UI.Button$1().SetText("Info").OnClick(function (s, e) {
                    tss.UI.Toast().BottomLeft().Information("Info!");
                }), tss.UI.Button$1().SetText("Success").OnClick(function (s, e) {
                    tss.UI.Toast().BottomLeft().Success("Success!");
                }), tss.UI.Button$1().SetText("Warning").OnClick(function (s, e) {
                    tss.UI.Toast().BottomLeft().Warning("Warning!");
                }), tss.UI.Button$1().SetText("Error").OnClick(function (s, e) {
                    tss.UI.Toast().BottomLeft().Error("Error!");
                })]), Tesserae.Tests.Samples.SamplesHelper.SampleSubTitle("Toasts top center with title"), tss.ICTX.Children$6(tss.S, tss.UI.Stack().Horizontal(), [tss.UI.Button$1().SetText("Info").OnClick(function (s, e) {
                    tss.UI.Toast().TopCenter().Information$1("This is a title", "Info!");
                }), tss.UI.Button$1().SetText("Success").OnClick(function (s, e) {
                    tss.UI.Toast().TopCenter().Success$1("This is a title", "Success!");
                }), tss.UI.Button$1().SetText("Warning").OnClick(function (s, e) {
                    tss.UI.Toast().TopCenter().Warning$1("This is a title", "Warning!");
                }), tss.UI.Button$1().SetText("Error").OnClick(function (s, e) {
                    tss.UI.Toast().TopCenter().Error$1("This is a title", "Error!");
                })]), Tesserae.Tests.Samples.SamplesHelper.SampleSubTitle("Toasts top full with title"), tss.ICTX.Children$6(tss.S, tss.UI.Stack().Horizontal(), [tss.UI.Button$1().SetText("Info").OnClick(function (s, e) {
                    tss.UI.Toast().TopFull().Information$1("This is a title", "Info!");
                }), tss.UI.Button$1().SetText("Success").OnClick(function (s, e) {
                    tss.UI.Toast().TopFull().Success$1("This is a title", "Success!");
                }), tss.UI.Button$1().SetText("Warning").OnClick(function (s, e) {
                    tss.UI.Toast().TopFull().Warning$1("This is a title", "Warning!");
                }), tss.UI.Button$1().SetText("Error").OnClick(function (s, e) {
                    tss.UI.Toast().TopFull().Error$1("This is a title", "Error!");
                })]), Tesserae.Tests.Samples.SamplesHelper.SampleSubTitle("Toasts bottom center with title"), tss.ICTX.Children$6(tss.S, tss.UI.Stack().Horizontal(), [tss.UI.Button$1().SetText("Info").OnClick(function (s, e) {
                    tss.UI.Toast().BottomCenter().Information$1("This is a title", "Info!");
                }), tss.UI.Button$1().SetText("Success").OnClick(function (s, e) {
                    tss.UI.Toast().BottomCenter().Success$1("This is a title", "Success!");
                }), tss.UI.Button$1().SetText("Warning").OnClick(function (s, e) {
                    tss.UI.Toast().BottomCenter().Warning$1("This is a title", "Warning!");
                }), tss.UI.Button$1().SetText("Error").OnClick(function (s, e) {
                    tss.UI.Toast().BottomCenter().Error$1("This is a title", "Error!");
                })]), Tesserae.Tests.Samples.SamplesHelper.SampleSubTitle("Toasts bottom full with title"), tss.ICTX.Children$6(tss.S, tss.UI.Stack().Horizontal(), [tss.UI.Button$1().SetText("Info").OnClick(function (s, e) {
                    tss.UI.Toast().BottomFull().Information$1("This is a title", "Info!");
                }), tss.UI.Button$1().SetText("Success").OnClick(function (s, e) {
                    tss.UI.Toast().BottomFull().Success$1("This is a title", "Success!");
                }), tss.UI.Button$1().SetText("Warning").OnClick(function (s, e) {
                    tss.UI.Toast().BottomFull().Warning$1("This is a title", "Warning!");
                }), tss.UI.Button$1().SetText("Error").OnClick(function (s, e) {
                    tss.UI.Toast().BottomFull().Error$1("This is a title", "Error!");
                })])]));
            }
        },
        methods: {
            Render: function () {
                return this._content.tss$IC$Render();
            }
        }
    });

    H5.define("Tesserae.Tests.Samples.ToggleSample", {
        inherits: [tss.IC],
        fields: {
            _content: null
        },
        alias: ["Render", "tss$IC$Render"],
        ctors: {
            ctor: function () {
                this.$initialize();
                this._content = tss.SectionStackX.Section(tss.SectionStackX.Section(tss.SectionStackX.Section(tss.SectionStackX.Title(tss.UI.SectionStack(), Tesserae.Tests.Samples.SamplesHelper.SampleHeader("ToggleSample")), tss.ICTX.Children$6(tss.S, tss.UI.Stack(), [Tesserae.Tests.Samples.SamplesHelper.SampleTitle("Overview"), tss.UI.TextBlock("Toggles represent a physical switch that allows users to turn things on or off. Use Toggles to present users with two mutually exclusive options (like on/off), where choosing an option results in an immediate action. Use a Toggle for binary operations that take effect right after the user flips the Toggle. For example, use a Toggle to turn services or hardware components on or off. In other words, if a physical switch would work for the action, a Toggle is probably the best control to use."), tss.ITFX.Medium(tss.txt, tss.UI.TextBlock("Choosing between Toggle and Checkbox")), tss.UI.TextBlock("For some actions, either a Toggle or a Checkbox might work. To decide which control would work better, follow these tips:"), tss.UI.TextBlock("Use a Toggle for binary settings when changes become effective immediately after the user changes them."), tss.UI.TextBlock("In the above example, it's clear with the Toggle that the wireless is set to \"On.\" But with the Checkbox, the user needs to think about whether the wireless is on now or whether they need to check the box to turn wireless on."), tss.UI.TextBlock("Use a Checkbox when the user has to perform extra steps for changes to be effective. For example, if the user must click a \"Submit\", \"Next\", \"Ok\" button to apply changes, use a Checkbox.")])), tss.ICTX.Children$6(tss.S, tss.UI.Stack(), [Tesserae.Tests.Samples.SamplesHelper.SampleTitle("Best Practices"), tss.ICTX.Children$6(tss.S, tss.UI.Stack().Horizontal(), [tss.ICTX.Children$6(tss.S, tss.ICX.Width(tss.S, tss.UI.Stack(), tss.usX.percent$1(40)), [Tesserae.Tests.Samples.SamplesHelper.SampleSubTitle("Do"), Tesserae.Tests.Samples.SamplesHelper.SampleDo("Only replace the On and Off labels if there are more specific labels for the setting. If there are short (3-4 characters) labels that represent binary opposites that are more appropriate for a particular setting, use them. ")]), tss.ICTX.Children$6(tss.S, tss.ICX.Width(tss.S, tss.UI.Stack(), tss.usX.percent$1(40)), [Tesserae.Tests.Samples.SamplesHelper.SampleSubTitle("Don't"), Tesserae.Tests.Samples.SamplesHelper.SampleDont("Don\u2019t use a Toggle if the user will have to do something else or go somewhere else in order to experience its effect. If any extra step is required for changes to be effective, you should use a checkbox and corresponding \"Apply\" button instead of a Toggle.")])])])), tss.ICTX.Children$6(tss.S, tss.UI.Stack(), [Tesserae.Tests.Samples.SamplesHelper.SampleTitle("Usage"), tss.ITFX.Medium(tss.txt, tss.UI.TextBlock("Basic Toggles")), tss.UI.Label$1("Enabled and checked").SetContent(tss.UI.Toggle().Checked()), tss.UI.Label$1("Enabled and unchecked").SetContent(tss.UI.Toggle()), tss.UI.Label$1("Disabled and checked").SetContent(tss.UI.Toggle().Checked().Disabled()), tss.UI.Label$1("Disabled and unchecked").SetContent(tss.UI.Toggle().Disabled()), tss.UI.Label$1("With inline label").Inline().SetContent(tss.UI.Toggle()), tss.txtX.Disabled(tss.Label, tss.UI.Label$1("Disabled with inline label").Inline().SetContent(tss.UI.Toggle().Disabled())), tss.UI.Toggle$1("With inline label and without onText and offText"), tss.UI.Toggle$1("Disabled with inline label and without onText and offText").Disabled()]));
            }
        },
        methods: {
            Render: function () {
                return this._content.tss$IC$Render();
            }
        }
    });

    H5.define("Tesserae.Tests.Samples.TutorialModalSample", {
        inherits: [tss.IC],
        statics: {
            methods: {
                SampleTutorialModal: function () {
                    var tutorialModal = { };
                    return tss.UI.Var(tss.TutorialModal, tss.UI.TutorialModal(), tutorialModal).SetTitle("This is a Tutorial Modal").SetHelpText("Lorem ipsum dolor sit amet, consectetur adipiscing elit,<b> sed do </b> eiusmod tempor incididunt ut labore et dolore magna aliqua. ", true).SetImageSrc("./assets/img/box-img.svg", tss.usX.px$1(16)).SetContent(tss.ICTX.Children$6(tss.S, tss.ScrollBar.ScrollY(tss.S, tss.ICX.S(tss.S, tss.UI.VStack())), [tss.UI.Label$1("Input 1").SetContent(tss.UI.TextBox$1().SetPlaceholder("Enter your input here...")), tss.UI.Label$1("Input 2").SetContent(tss.UI.TextBox$1().SetPlaceholder("Enter your input here...")), tss.UI.Label$1("Input 3").SetContent(tss.UI.TextBox$1().SetPlaceholder("Enter your input here...")), tss.UI.Label$1("Input 4").SetContent(tss.UI.TextBox$1().SetPlaceholder("Enter your input here...")), tss.UI.Label$1("Input 5").SetContent(tss.UI.TextBox$1().SetPlaceholder("Enter your input here...")), tss.UI.Label$1("Input 6").SetContent(tss.UI.TextBox$1().SetPlaceholder("Enter your input here...")), tss.UI.Label$1("Input 7").SetContent(tss.UI.TextBox$1().SetPlaceholder("Enter your input here...")), tss.UI.Label$1("Input 8").SetContent(tss.UI.TextBox$1().SetPlaceholder("Enter your input here...")), tss.UI.Label$1("Input 9").SetContent(tss.UI.TextBox$1().SetPlaceholder("Enter your input here..."))])).SetFooterCommands([tss.UI.Button$1("Discard").OnClick(function (_, __) {
                        tutorialModal.v.Hide();
                    }), tss.UI.Button$1("Save").Primary().OnClick(function (_, __) {
                        tutorialModal.v.Hide();
                    })]);
                }
            }
        },
        fields: {
            _content: null
        },
        alias: ["Render", "tss$IC$Render"],
        ctors: {
            ctor: function () {
                this.$initialize();
                var container = tss.UI.Raw$1();

                this._content = tss.SectionStackX.Section(tss.SectionStackX.Section(tss.SectionStackX.Section(tss.SectionStackX.Title(tss.UI.SectionStack(), Tesserae.Tests.Samples.SamplesHelper.SampleHeader("TutorialModalSample")), tss.ICTX.Children$6(tss.S, tss.UI.Stack(), [Tesserae.Tests.Samples.SamplesHelper.SampleTitle("Overview"), tss.UI.TextBlock("Tutorial modals are used for processes where the user can be heavily guided, but still needs to enter data."), tss.UI.TextBlock("For usage requiring a quick choice from the user, Dialog may be a more appropriate control.")])), tss.ICTX.Children$6(tss.S, tss.UI.Stack(), [Tesserae.Tests.Samples.SamplesHelper.SampleTitle("Best Practices"), tss.ICTX.Children$6(tss.S, tss.UI.Stack().Horizontal(), [tss.ICTX.Children$6(tss.S, tss.ICX.Width(tss.S, tss.UI.Stack(), tss.usX.percent$1(40)), [Tesserae.Tests.Samples.SamplesHelper.SampleSubTitle("Do"), Tesserae.Tests.Samples.SamplesHelper.SampleDo("Use Modals for interactions where something is created and has multiple fields, such as creating a user."), Tesserae.Tests.Samples.SamplesHelper.SampleDo("Always have at least one focusable element inside a Modal.")]), tss.ICTX.Children$6(tss.S, tss.ICX.Width(tss.S, tss.UI.Stack(), tss.usX.percent$1(40)), [Tesserae.Tests.Samples.SamplesHelper.SampleSubTitle("Don't"), Tesserae.Tests.Samples.SamplesHelper.SampleDont("Don\u2019t overuse Tutorial Modals. In some cases they can be perceived as interrupting workflow, and too many can be a bad user experience.")])])])), tss.ICTX.Children$6(tss.S, tss.UI.Stack(), [Tesserae.Tests.Samples.SamplesHelper.SampleTitle("Usage"), tss.UI.Button$1("Open Tutorial Modal").OnClick(function (s, e) {
                    Tesserae.Tests.Samples.TutorialModalSample.SampleTutorialModal().Show();
                }), tss.UI.Button$1("Open Large Tutorial Modal").OnClick(function (s, e) {
                    Tesserae.Tests.Samples.TutorialModalSample.SampleTutorialModal().Height(tss.usX.vh$1(90)).Width(tss.usX.vw$1(90)).Show();
                }), Tesserae.Tests.Samples.SamplesHelper.SampleTitle("Embedded Modal"), tss.UI.Button$1("Open Modal Below").OnClick(function (s, e) {
                    container.Content$1(Tesserae.Tests.Samples.TutorialModalSample.SampleTutorialModal().Border("#ffaf66", tss.usX.px$1(5)).ShowEmbedded());
                }), container]));
            }
        },
        methods: {
            Render: function () {
                return this._content.tss$IC$Render();
            }
        }
    });

    H5.define("Tesserae.Tests.Samples.ValidatorSample", {
        inherits: [tss.IC],
        fields: {
            content: null
        },
        alias: ["Render", "tss$IC$Render"],
        ctors: {
            ctor: function () {
                this.$initialize();
                var looksValidSoFar = tss.UI.TextBlock("?");
                var validator = tss.UI.Validator().OnValidation(function (validity) {
                    looksValidSoFar.Text = (validity === tss.VS.Invalid) ? "Something is not ok \u274c" : "Everything is fine so far \u2714";
                });

                var textBoxThatMustBeNonEmpty = tss.UI.TextBox$1("").Required();
                var textBoxThatMustBePositiveInteger = tss.UI.TextBox$1("").Required();
                tss.vX.Validation(tss.TextBox, textBoxThatMustBeNonEmpty, function (tb) {
                    return tb.Text.length === 0 ? "must enter a value" : ((H5.rE(textBoxThatMustBeNonEmpty.Text, textBoxThatMustBePositiveInteger.Text)) ? "duplicated  values" : null);
                }, validator);
                tss.vX.Validation(tss.TextBox, textBoxThatMustBePositiveInteger, function (tb) {
                    var $t;
                    return ($t = tss.Validation.NonZeroPositiveInteger(tb), $t != null ? $t : ((H5.rE(textBoxThatMustBeNonEmpty.Text, textBoxThatMustBePositiveInteger.Text)) ? "duplicated values" : null));
                }, validator);

                var preFilledTextBoxThatMustBePositiveIntegerWhoseValueIsValid = tss.vX.Validation(tss.TextBox, tss.UI.TextBox$1("123").Required(), tss.Validation.NonZeroPositiveInteger, validator);
                var preFilledTextBoxThatMustBePositiveIntegerWhoseValueIsNotValid = tss.vX.Validation(tss.TextBox, tss.UI.TextBox$1("xyz").Required(), tss.Validation.NonZeroPositiveInteger, validator);

                var dropdown = tss.vX.Validation(tss.Dropdown, tss.UI.Dropdown().Items$1([tss.UI.DropdownItem$1(""), tss.UI.DropdownItem$1("Item 1"), tss.UI.DropdownItem$1("Item 2")]).Required(), function (dd) {
                    return System.String.isNullOrWhiteSpace(dd.SelectedText) ? "must select an item" : null;
                }, validator);

                this.content = tss.SectionStackX.Section(tss.SectionStackX.Section(tss.SectionStackX.Section(tss.SectionStackX.Title(tss.UI.SectionStack(), Tesserae.Tests.Samples.SamplesHelper.SampleHeader("ValidatorSample")), tss.ICTX.Children$6(tss.S, tss.UI.Stack(), [Tesserae.Tests.Samples.SamplesHelper.SampleTitle("Overview"), tss.UI.TextBlock("The validator helper allows you to capture the state of multiple components registered on it.")])), tss.ICTX.Children$6(tss.S, tss.UI.Stack(), [Tesserae.Tests.Samples.SamplesHelper.SampleTitle("Best Practices"), tss.ICTX.Children$6(tss.S, tss.UI.Stack().Horizontal(), [tss.ICTX.Children$6(tss.S, tss.ICX.Width(tss.S, tss.UI.Stack(), tss.usX.percent$1(40)), [Tesserae.Tests.Samples.SamplesHelper.SampleSubTitle("Do"), Tesserae.Tests.Samples.SamplesHelper.SampleDo("Display useful validation warning messages to components for when the User has left them in an invalid state or when they have tried to submit a partially-populated form")]), tss.ICTX.Children$6(tss.S, tss.ICX.Width(tss.S, tss.UI.Stack(), tss.usX.percent$1(40)), [Tesserae.Tests.Samples.SamplesHelper.SampleSubTitle("Don't"), Tesserae.Tests.Samples.SamplesHelper.SampleDont("Display ALL validation warnings messages as soon as a form is rendered, give the User an opportunity to interact with it and enter valid values before shouting at them")])])])), tss.ICTX.Children$6(tss.S, tss.UI.Stack(), [Tesserae.Tests.Samples.SamplesHelper.SampleTitle("Usage"), tss.ITFX.Medium(tss.txt, tss.UI.TextBlock("Basic TextBox")), tss.ICTX.Children$6(tss.S, tss.ICX.Padding(tss.S, tss.ICX.Width(tss.S, tss.UI.Stack(), tss.usX.percent$1(40)), tss.usX.px$1(8)), [tss.UI.Label$1("Non-empty").SetContent(textBoxThatMustBeNonEmpty), tss.UI.Label$1("Integer > 0 (must not match the value above)").SetContent(textBoxThatMustBePositiveInteger), tss.UI.Label$1("Pre-filled Integer > 0 (initially valid)").SetContent(preFilledTextBoxThatMustBePositiveIntegerWhoseValueIsValid), tss.UI.Label$1("Pre-filled Integer > 0 (initially invalid)").SetContent(preFilledTextBoxThatMustBePositiveIntegerWhoseValueIsNotValid), tss.UI.Label$1("Please select something").SetContent(dropdown)]), tss.ITFX.Medium(tss.txt, tss.UI.TextBlock("Results Summary")), tss.ICTX.Children$6(tss.S, tss.ICX.Padding(tss.S, tss.ICX.Width(tss.S, tss.UI.Stack(), tss.usX.percent$1(40)), tss.usX.px$1(8)), [tss.UI.Label$1("Validity (this only checks fields that User has interacted with so far)").Inline().SetContent(looksValidSoFar), tss.UI.Label$1("Test revalidation (will fail if repeated)").SetContent(tss.UI.Button$1("Validate").OnClick(function (s, b) {
                    validator.Revalidate();
                }))])]));

                console.log("Is form initially in a valid state: " + System.Boolean.toString(validator.AreCurrentValuesAllValid()));
            }
        },
        methods: {
            Render: function () {
                return this.content.tss$IC$Render();
            }
        }
    });

    H5.define("Tesserae.Tests.Samples.VirtualizedListSample", {
        inherits: [tss.IC],
        fields: {
            _content: null
        },
        alias: ["Render", "tss$IC$Render"],
        ctors: {
            ctor: function () {
                this.$initialize();
                this._content = tss.SectionStackX.Section(tss.SectionStackX.Section(tss.SectionStackX.Title(tss.UI.SectionStack(), Tesserae.Tests.Samples.SamplesHelper.SampleHeader("VirtualizedListSample")), tss.ICTX.Children$6(tss.S, tss.UI.Stack(), [Tesserae.Tests.Samples.SamplesHelper.SampleTitle("Overview"), tss.ICX.PaddingBottom(tss.txt, tss.UI.TextBlock("List provides a base component for rendering large sets of items. It is agnostic of the tile component used, and selection management. These concerns can be layered separately."), tss.usX.px$1(16)), tss.ICX.PaddingBottom(tss.txt, tss.UI.TextBlock("Performance is important, and DOM content is expensive. Therefore, limit what you render. List applies this principle by using UI virtualization. Unlike a simple for loop that renders all items in a set, a List only renders a subset of items, and as you scroll around, the subset of rendered content is shifted. This gives a much better experience for large sets, especially when the per-item components are complex/render-intensive/network-intensive."), tss.usX.px$1(16)), tss.UI.TextBlock("List breaks down the set of items passed in into pages. Only pages within a 'materialized window' are actually rendered. As that window changes due to scroll events, pages that fall outside that window are removed, and their layout space is remembered and pushed into spacer elements. This gives the user the experience of browsing massive amounts of content but only using a small number of actual elements. This gives the browser much less layout to resolve.")])), tss.ICTX.Children$6(tss.S, tss.UI.Stack(), [Tesserae.Tests.Samples.SamplesHelper.SampleTitle("Usage"), tss.ICX.PaddingBottom(tss.txt, tss.ITFX.Medium(tss.txt, tss.UI.TextBlock("Virtualized List")), tss.usX.px$1(16)), tss.ICX.PaddingBottom(tss.VirtualizedList, tss.UI.VirtualizedList().WithListItems(this.GetALotOfItems()), tss.usX.px$1(32)), tss.ICX.PaddingBottom(tss.txt, tss.ITFX.Medium(tss.txt, tss.UI.TextBlock("Virtualized List with Empty List Message")), tss.usX.px$1(16)), tss.UI.VirtualizedList().WithEmptyMessage(function () {
                    return tss.UI.TextBlock("No List Items");
                }).WithListItems(System.Linq.Enumerable.empty())]));
            }
        },
        methods: {
            Render: function () {
                return this._content.tss$IC$Render();
            },
            GetALotOfItems: function () {
                return System.Linq.Enumerable.range(1, 5000).select(function (number) {
                    return new Tesserae.Tests.Samples.VirtualizedListSample.SampleVirtualizedItem(System.String.format("Lorem Ipsum {0}", [H5.box(number, System.Int32)]));
                });
            }
        }
    });

    H5.define("Tesserae.Tests.Samples.VirtualizedListSample.SampleVirtualizedItem", {
        inherits: [tss.IC],
        $kind: "nested class",
        fields: {
            _innerElement: null
        },
        alias: ["Render", "tss$IC$Render"],
        ctors: {
            ctor: function (text) {
                this.$initialize();
                this._innerElement = tss.UI.Div(tss.UI._$2(void 0, void 0, void 0, void 0, void 0, void 0, text, void 0, void 0, void 0, void 0, void 0, void 0, void 0, function (s) {
                    s.display = "block";
                    s.textAlign = "center";
                    s.height = "63px";
                }));
            }
        },
        methods: {
            Render: function () {
                return this._innerElement;
            }
        }
    });

    H5.define("Tesserae.Tests.SamplesSourceCode", {
        statics: {
            methods: {
                GetCodeForSample: function (sampleName) {
                    switch (sampleName) {
                        case "BreadcrumbSample": 
                            return "using System;\r\nusing Tesserae;\r\nusing static H5.Core.dom;\r\nusing static Tesserae.UI;\r\nusing static Tesserae.Tests.Samples.SamplesHelper;\r\n\r\nnamespace Tesserae.Tests.Samples\r\n{\r\n    public class BreadcrumbSample : IComponent\r\n    {\r\n        private readonly IComponent _content;\r\n\r\n        public BreadcrumbSample()\r\n        {\r\n            _content = SectionStack()\r\n               .Title(SampleHeader(nameof(BreadcrumbSample)))\r\n               .Section(Stack().Children(\r\n                    SampleTitle(\"Overview\"),\r\n                    TextBlock(\"Breadcrumbs should be used as a navigational aid in your app or site. They indicate the current page\u2019s location within a hierarchy and help the user understand where they are in relation to the rest of that hierarchy. They also afford one-click access to higher levels of that hierarchy.\"),\r\n                    TextBlock(\"Breadcrumbs are typically placed, in horizontal form, under the masthead or navigation of an experience, above the primary content area.\")))\r\n               .Section(Stack().Children(\r\n                    SampleTitle(\"Best Practices\"),\r\n                    Stack().Horizontal().Children(\r\n                        Stack().Width(40.percent()).Children(\r\n                            SampleSubTitle(\"Do\"),\r\n                            SampleDo(\"Place Breadcrumbs at the top of a page, above a list of items, or above the main content of a page.\")\r\n                        ),\r\n                        Stack().Width(40.percent()).Children(\r\n                            SampleSubTitle(\"Don't\"),\r\n                            SampleDont(\"Don't use Breadcrumbs as a primary way to navigate an app or site.\")))))\r\n               .Section(Stack().Width(450.px()).Children(\r\n                    SampleTitle(\"Usage\"),\r\n                    Label(\"Selected: \").SetContent(TextBlock().Var(out var msg)),\r\n                    TextBlock(\"All Visible\").Medium(),\r\n                    Breadcrumb().PaddingTop(16.px()).SetOverflowIndex(-1).PaddingBottom(16.px()).Items(\r\n                        Crumb(\"Folder 1\").OnClick((s, e) => msg.Text(\"Folder 1\")),\r\n                        Crumb(\"Folder 2\").OnClick((s, e) => msg.Text(\"Folder 2\")).Disabled(),\r\n                        Crumb(\"Folder 3\").OnClick((s, e) => msg.Text(\"Folder 3\")),\r\n                        Crumb(\"Folder 4\").OnClick((s, e) => msg.Text(\"Folder 4\")),\r\n                        Crumb(\"Folder 5\").OnClick((s, e) => msg.Text(\"Folder 5\")),\r\n                        Crumb(\"Folder 6\").OnClick((s, e) => msg.Text(\"Folder 6\"))),\r\n                    TextBlock(\"All Visible, Small\").Medium(),\r\n                    Breadcrumb().Small().PaddingTop(16.px()).PaddingBottom(16.px()).Items(\r\n                        Crumb(\"Folder 1\").OnClick((s, e) => msg.Text(\"Folder 1\")),\r\n                        Crumb(\"Folder 2\").OnClick((s, e) => msg.Text(\"Folder 2\")).Disabled(),\r\n                        Crumb(\"Folder 3\").OnClick((s, e) => msg.Text(\"Folder 3\")),\r\n                        Crumb(\"Folder 4\").OnClick((s, e) => msg.Text(\"Folder 4\")),\r\n                        Crumb(\"Folder 5\").OnClick((s, e) => msg.Text(\"Folder 5\")),\r\n                        Crumb(\"Folder 6\").OnClick((s, e) => msg.Text(\"Folder 6\"))),\r\n                    TextBlock(\"Collapse 200px\").Medium(),\r\n                    Breadcrumb().PaddingTop(16.px()).PaddingBottom(16.px()).MaxWidth(200.px()).Items(\r\n                        Crumb(\"Folder 1\").OnClick((s, e) => msg.Text(\"Folder 1\")),\r\n                        Crumb(\"Folder 2\").OnClick((s, e) => msg.Text(\"Folder 2\")),\r\n                        Crumb(\"Folder 3\").OnClick((s, e) => msg.Text(\"Folder 3\")),\r\n                        Crumb(\"Folder 4\").OnClick((s, e) => msg.Text(\"Folder 4\")),\r\n                        Crumb(\"Folder 5\").OnClick((s, e) => msg.Text(\"Folder 5\")),\r\n                        Crumb(\"Folder 6\").OnClick((s, e) => msg.Text(\"Folder 6\")))\r\n                   ,\r\n                    TextBlock(\"Collapse 200px, Small\").Medium(),\r\n                    Breadcrumb().PaddingTop(16.px()).PaddingBottom(16.px()).Small().MaxWidth(200.px()).Items(\r\n                        Crumb(\"Folder 1\").OnClick((s, e) => msg.Text(\"Folder 1\")),\r\n                        Crumb(\"Folder 2\").OnClick((s, e) => msg.Text(\"Folder 2\")),\r\n                        Crumb(\"Folder 3\").OnClick((s, e) => msg.Text(\"Folder 3\")),\r\n                        Crumb(\"Folder 4\").OnClick((s, e) => msg.Text(\"Folder 4\")),\r\n                        Crumb(\"Folder 5\").OnClick((s, e) => msg.Text(\"Folder 5\")),\r\n                        Crumb(\"Folder 6\").OnClick((s, e) => msg.Text(\"Folder 6\")))\r\n                   ,\r\n                    TextBlock(\"Collapse 300px\").Medium(),\r\n                    Breadcrumb().PaddingTop(16.px()).PaddingBottom(16.px()).MaxWidth(300.px()).Items(\r\n                        Crumb(\"Folder 1\").OnClick((s, e) => msg.Text(\"Folder 1\")),\r\n                        Crumb(\"Folder 2\").OnClick((s, e) => msg.Text(\"Folder 2\")),\r\n                        Crumb(\"Folder 3\").OnClick((s, e) => msg.Text(\"Folder 3\")),\r\n                        Crumb(\"Folder 4\").OnClick((s, e) => msg.Text(\"Folder 4\")),\r\n                        Crumb(\"Folder 5\").OnClick((s, e) => msg.Text(\"Folder 5\")),\r\n                        Crumb(\"Folder 6\").OnClick((s, e) => msg.Text(\"Folder 6\"))),\r\n                    TextBlock(\"Collapse 300px, from second, custom chevron\").Medium(),\r\n                    Breadcrumb().PaddingTop(16.px()).PaddingBottom(16.px()).MaxWidth(300.px()).SetChevron(\"fa-plane\").SetOverflowIndex(1).Items(\r\n                        Crumb(\"Folder 1\").OnClick((s, e) => msg.Text(\"Folder 1\")),\r\n                        Crumb(\"Folder 2\").OnClick((s, e) => msg.Text(\"Folder 2\")),\r\n                        Crumb(\"Folder 3\").OnClick((s, e) => msg.Text(\"Folder 3\")),\r\n                        Crumb(\"Folder 4\").OnClick((s, e) => msg.Text(\"Folder 4\")),\r\n                        Crumb(\"Folder 5\").OnClick((s, e) => msg.Text(\"Folder 5\")),\r\n                        Crumb(\"Folder 6\").OnClick((s, e) => msg.Text(\"Folder 6\")))\r\n                ));\r\n        }\r\n\r\n        public HTMLElement Render()\r\n        {\r\n            return _content.Render();\r\n        }\r\n    }\r\n}";
                        case "ButtonSample": 
                            return "using System;\r\nusing System.Threading.Tasks;\r\nusing Tesserae;\r\nusing static H5.Core.dom;\r\nusing static Tesserae.UI;\r\nusing static Tesserae.Tests.Samples.SamplesHelper;\r\n\r\nnamespace Tesserae.Tests.Samples\r\n{\r\n    public class ButtonSample : IComponent\r\n    {\r\n        private readonly IComponent _content;\r\n\r\n        public ButtonSample()\r\n        {\r\n            _content = SectionStack()\r\n               .Title(SampleHeader(nameof(ButtonSample)))\r\n               .Section(Stack().Children(\r\n                    SampleTitle(\"Overview\"),\r\n                    TextBlock(\"Buttons are best used to enable a user to commit a change or complete steps in a task. They are typically found inside forms, dialogs, panels or pages. An example of their usage is confirming the deletion of a file in a confirmation dialog.\"),\r\n                    TextBlock(\"When considering their place in a layout, contemplate the order in which a user will flow through the UI. As an example, in a form, the individual will need to read and interact with the form fields before submiting the form. Therefore, as a general rule, the button should be placed at the bottom of the UI container (a dialog, panel, or page) which holds the related UI elements.\"),\r\n                    TextBlock(\"While buttons can technically be used to navigate a user to another part of the experience, this is not recommended unless that navigation is part of an action or their flow.\"))\r\n                )\r\n               .Section(Stack().WidthStretch().Children(\r\n                    SampleTitle(\"Best Practices\"),\r\n                    Stack().WidthStretch().Horizontal().Children(\r\n                        Stack().WidthStretch().Children(\r\n                            SampleSubTitle(\"Do\"),\r\n                            SampleDo(\"Make sure the label conveys a clear purpose of the button to the user.\"),\r\n                            SampleDo(\"Button labels must describe the action the button will perform and should include a verb. Use concise, specific, self-explanatory labels, usually a single word.\"),\r\n                            SampleDo(\"Buttons should always include a noun if there is any room for interpretation about what the verb operates on.\"),\r\n                            SampleDo(\"Consider the affect localization will have on the button and what will happen to components around it.\"),\r\n                            SampleDo(\"If the button\u2019s label content is dynamic, consider how the button will resize and what will happen to components around it.\"),\r\n                            SampleDo(\"Use only a single line of text in the label of the button.\"),\r\n                            SampleDo(\"Expose only one or two buttons to the user at a time, for example, \\\"Accept\\\" and \\\"Cancel\\\". If you need to expose more actions to the user, consider using checkboxes or radio buttons from which the user can select actions, with a single command button to trigger those actions.\"),\r\n                            SampleDo(\"Show only one primary button that inherits theme color at rest state. In the event there are more than two buttons with equal priority, all buttons should have neutral backgrounds.\"),\r\n                            SampleDo(\"\\\"Submit\\\", \\\"OK\\\", and \\\"Apply\\\" buttons should always be styled as primary buttons. When \\\"Reset\\\" or \\\"Cancel\\\" buttons appear alongside one of the above, they should be styled as secondary buttons.\"),\r\n                            SampleDo(\"Default buttons should always perform safe operations. For example, a default button should never delete.\"),\r\n                            SampleDo(\"Use task buttons to cause actions that complete a task or cause a transitional task. Do not use buttons to toggle other UX in the same context. For example, a button may be used to open an interface area but should not be used to open an additional set of components in the same interface.\")\r\n                        ),\r\n                        Stack().WidthStretch().Children(\r\n                            SampleSubTitle(\"Don't\"),\r\n                            SampleDont(\"Don't use generic labels like \\\"Ok, \\\" especially in the case of an error; errors are never \\\"Ok.\\\"\"),\r\n                            SampleDont(\"Don\u2019t place the default focus on a button that destroys data. Instead, place the default focus on the button that performs the \\\"safe act\\\" and retains the content (i.e. \\\"Save\\\") or cancels the action (i.e. \\\"Cancel\\\").\"),\r\n                            SampleDont(\"Don\u2019t use a button to navigate to another place, use a link instead. The exception is in a wizard where \\\"Back\\\" and \\\"Next\\\" buttons may be used.\"),\r\n                            SampleDont(\"Don\u2019t put too much text in a button - try to keep the length of your text to a minimum.\"),\r\n                            SampleDont(\"Don't put anything other than text in a button.\")\r\n                        ))\r\n                ))\r\n               .Section(\r\n                    Stack().Children(\r\n                        SampleTitle(\"Usage\"),\r\n                        TextBlock(\"Default Button\").Medium(),\r\n                        Stack().Horizontal().Children(\r\n                            Button().Var(out var btn1).SetText(\"Standard\").Tooltip(\"This is a standard button\").OnClick((s,                                                                                                                   e) => alert(\"Clicked!\")),\r\n                            Button().Var(out var btn2).SetText(\"Primary\").Tooltip(\"This is a primary button\").Primary().OnClick((s,                                                                                                           e) => alert(\"Clicked!\")),\r\n                            Button().Var(out var btn3).SetText(\"Link\").Tooltip(Button(\"This is a link button with a button tooltip\").Primary().OnClick((_, __) => Toast().Success(\"You clicked here\")), interactive: true).Link().OnClick((s, e) => alert(\"Clicked!\"))\r\n                        ),\r\n                        TextBlock(\"Icon Button\").Medium(),\r\n                        Stack().Horizontal().Children(\r\n                            Button().Var(out var iconBtn1).SetText(\"Confirm\").SetIcon(\"las la-check\").Success().OnClick((s,   e) => alert(\"Clicked!\")),\r\n                            Button().Var(out var iconBtn2).SetText(\"Delete\").SetIcon(\"las la-trash-alt\").Danger().OnClick((s, e) => alert(\"Clicked!\")),\r\n                            Button().Var(out var iconBtn3).SetText(\"Primary\").SetIcon(\"las la-minus\").Primary().OnClick((s,   e) => alert(\"Clicked!\")),\r\n                            Button().Var(out var iconBtn4).SetText(\"Copy date\").SetIcon(\"las la-calendar-alt\").OnClick((s,    e) => Clipboard.Copy(DateTime.Now.ToString()))\r\n                        ),\r\n                        TextBlock(\"Spinner Button\").Medium(),\r\n                        Stack().Horizontal().Children(\r\n                            Button().Var(out var spinBtn1).SetText(\"Spin\").OnClickSpinWhile(async () => await Task.Delay(1000)),\r\n                            Button().Var(out var spinBtn2).SetText(\"Spin with text\").OnClickSpinWhile(async () => await Task.Delay(1000), \"loading...\"),\r\n                            Button().Var(out var spinBtn3).SetText(\"Spin & Error\").OnClickSpinWhile(async () =>\r\n                            {\r\n                                await Task.Delay(1000);\r\n                                throw new Exception(\"Error!\");\r\n                            }, onError: (b, e) => spinBtn3.SetText(\"Failed: \" + e.Message).SetIcon(LineAwesome.ExclamationTriangle).DangerLink()),\r\n                            Button().Var(out var spinBtn4).SetText(\"Spin with text & Error\").OnClickSpinWhile(async () =>\r\n                            {\r\n                                await Task.Delay(1000);\r\n                                throw new Exception(\"Error!\");\r\n                            }, \"loading...\", onError: (b, e) => spinBtn4.SetText(\"Failed: \" + e.Message).SetIcon(LineAwesome.ExclamationTriangle).DangerLink())\r\n                        ),\r\n                        Toggle(\"Disable buttons\").Checked().OnChange((s, e) =>\r\n                        {\r\n                            btn1.IsEnabled = btn2.IsEnabled = btn3.IsEnabled = iconBtn1.IsEnabled = iconBtn2.IsEnabled = iconBtn3.IsEnabled = iconBtn4.IsEnabled = s.IsChecked;\r\n                        })));\r\n        }\r\n\r\n        public HTMLElement Render()\r\n        {\r\n            return _content.Render();\r\n        }\r\n    }\r\n}";
                        case "CheckBoxSample": 
                            return "using System;\r\nusing Tesserae;\r\nusing static H5.Core.dom;\r\nusing static Tesserae.UI;\r\nusing static Tesserae.Tests.Samples.SamplesHelper;\r\n\r\nnamespace Tesserae.Tests.Samples\r\n{\r\n    public class CheckBoxSample : IComponent\r\n    {\r\n        private readonly IComponent _content;\r\n\r\n        public CheckBoxSample()\r\n        {\r\n            _content = SectionStack()\r\n            .Title(SampleHeader(nameof(CheckBoxSample)))\r\n                .Section(Stack().Children(\r\n                    SampleTitle(\"Overview\"),\r\n                    TextBlock(\"A CheckBox is a UI element that allows users to switch between two mutually exclusive options (checked or unchecked, on or off) through a single click or tap. It can also be used to indicate a subordinate setting or preference when paired with another control.\"),\r\n                    TextBlock(\"A CheckBox is used to select or deselect action items. It can be used for a single item or for a list of multiple items that a user can choose from. The control has two selection states: unselected and selected.\"),\r\n                    TextBlock(\"Use a single CheckBox for a subordinate setting, such as with a \\\"Remember me ? \\\" login scenario or with a terms of service agreement.\"),\r\n                    TextBlock(\"For a binary choice, the main difference between a CheckBox and a toggle switch is that the CheckBox is for status and the toggle switch is for action. You can delay committing a CheckBox interaction (as part of a form submit, for example), while you should immediately commit a toggle switch interaction. Also, only CheckBoxes allow for multi-selection.\"),\r\n                    TextBlock(\"Use multiple CheckBoxes for multi-select scenarios in which a user chooses one or more items from a group of choices that are not mutually exclusive.\")\r\n                    ))\r\n                .Section(Stack().Children(\r\n                    SampleTitle(\"Best Practices\"),\r\n                    Stack().Horizontal().Children(\r\n                        Stack().Width(40.percent()).Children(\r\n                            SampleSubTitle(\"Do\"),\r\n                            SampleDo(\"Allow users to choose any combination of options when several CheckBoxes are grouped together.\")\r\n                        ),\r\n                        Stack().Width(40.percent()).Children(\r\n                            SampleSubTitle(\"Don't\"),\r\n                            SampleDont(\"Don't use a CheckBox as an on/off control. Instead use a toggle switch.\"),\r\n                            SampleDont(\"Don\u2019t use a CheckBox when the user can choose only one option from the group, use radio buttons instead.\"),\r\n                            SampleDont(\"Don't put two groups of CheckBoxes next to each other. Separate the two groups with labels.\")\r\n                        ))))\r\n                .Section(Stack().Children(\r\n                    SampleTitle(\"Usage\"),\r\n                    TextBlock(\"Basic CheckBoxes\").Medium(),\r\n                    CheckBox(\"Unchecked checkbox\"),\r\n                    CheckBox(\"Checked checkbox\").Checked(),\r\n                    CheckBox(\"Disabled checkbox\").Disabled(),\r\n                    CheckBox(\"Disabled checked checkbox\").Checked().Disabled()\r\n                    ));\r\n        }\r\n\r\n        public HTMLElement Render()\r\n        {\r\n            return _content.Render();\r\n        }\r\n    }\r\n}\r\n";
                        case "ChoiceGroupSample": 
                            return "using System;\r\nusing Tesserae;\r\nusing static H5.Core.dom;\r\nusing static Tesserae.UI;\r\nusing static Tesserae.Tests.Samples.SamplesHelper;\r\n\r\nnamespace Tesserae.Tests.Samples\r\n{\r\n    public class ChoiceGroupSample : IComponent\r\n    {\r\n        private readonly IComponent _content;\r\n\r\n        public ChoiceGroupSample()\r\n        {\r\n            _content = SectionStack()\r\n            .Title(SampleHeader(nameof(ChoiceGroupSample)))\r\n            .Section(Stack().Children(\r\n                SampleTitle(\"Overview\"),\r\n                TextBlock(\"The ChoiceGroup component, also known as radio buttons, let users select one option from two or more choices. Each option is represented by one ChoiceGroup button; a user can select only one ChoiceGroup in a button group.\"),\r\n                TextBlock(\"ChoiceGroup emphasize all options equally, and that may draw more attention to the options than necessary. Consider using other controls, unless the options deserve extra attention from the user. For example, if the default option is recommended for most users in most situations, use a Dropdown component instead.\"),\r\n                TextBlock(\"If there are only two mutually exclusive options, combine them into a single Checkbox or Toggle switch. For example, use a Checkbox for \\\"I agree\\\" instead of ChoiceGroup buttons for \\\"I agree\\\" and \\\"I don't agree.\\\"\")))\r\n            .Section(Stack().Children(\r\n                SampleTitle(\"Best Practices\"),\r\n                Stack().Horizontal().Children(\r\n                    Stack().Width(40.percent()).Children(\r\n                        SampleSubTitle(\"Do\"),\r\n                        SampleDo(\"Use when there are 2-7 options, if you have enough screen space and the options are important enough to be a good use of that screen space. Otherwise, use a Checkbox or Dropdown list.\"),\r\n                        SampleDo(\"Use on wizard pages to make the alternatives clear, even if a Checkbox is otherwise acceptable.\"),\r\n                        SampleDo(\"List the options in a logical order, such as most likely to be selected to least, simplest operation to most complex, or least risk to most. Alphabetical ordering is not recommended because it is language dependent and therefore not localizable.\"),\r\n                        SampleDo(\"If none of the options is a valid choice, add another option to reflect this choice, such as \\\"None\\\" or \\\"Does not apply\\\".\"),\r\n                        SampleDo(\"Select the safest (to prevent loss of data or system access) and most secure and private option as the default. If safety and security aren't factors, select the most likely or convenient option.\"),\r\n                        SampleDo(\"Align radio buttons vertically instead of horizontally, if possible. Horizontal alignment is harder to read and localize.\")),\r\n                    Stack().Width(40.percent()).Children(\r\n                        SampleSubTitle(\"Don't\"),\r\n                        SampleDont(\"Use when the options are numbers that have fixed steps, like 10, 20, 30. Use a Slider component instead.\"),\r\n                        SampleDont(\"Use if there are more than 7 options, use a Dropdown instead.\"),\r\n                        SampleDont(\"Nest with other ChoiceGroup or CheckBoxes. If possible, keep all the options at the same level.\")))))\r\n            .Section(\r\n                Stack().Children(\r\n                    SampleTitle(\"Usage\"),\r\n                    TextBlock(\"Default ChoiceGroup\").Medium(),\r\n                    ChoiceGroup().Choices(\r\n                        Choice(\"Option A\"),\r\n                        Choice(\"Option B\"),\r\n                        Choice(\"Option C\").Disabled(),\r\n                        Choice(\"Option D\")),\r\n                    TextBlock(\"Required ChoiceGroup with a custom label\").Medium(),\r\n                    ChoiceGroup(\"Custom label\").Required().Choices(\r\n                        Choice(\"Option A\"),\r\n                        Choice(\"Option B\"),\r\n                        Choice(\"Option C\").Disabled(),\r\n                        Choice(\"Option D\")),\r\n                    TextBlock(\"Horizontal ChoiceGroup\").Medium(),\r\n                    ChoiceGroup().Horizontal().Choices(\r\n                        Choice(\"Option A\"),\r\n                        Choice(\"Option B\"),\r\n                        Choice(\"Option C\").Disabled(),\r\n                        Choice(\"Option D\"))));\r\n        }\r\n\r\n        public HTMLElement Render()\r\n        {\r\n            return _content.Render();\r\n        }\r\n    }\r\n}\r\n";
                        case "ColorPickerSample": 
                            return "using Tesserae;\r\nusing static H5.Core.dom;\r\nusing static Tesserae.Tests.Samples.SamplesHelper;\r\nusing static Tesserae.UI;\r\n\r\nnamespace Tesserae.Tests.Samples\r\n{\r\n    public class ColorPickerSample : IComponent\r\n    {\r\n        private readonly IComponent _content;\r\n        public ColorPickerSample()\r\n        {\r\n            _content = SectionStack()\r\n            .Title(SampleHeader(nameof(ColorPickerSample)))\r\n            .Section(Stack().Children(\r\n                SampleTitle(\"Overview\"),\r\n                TextBlock(\"The ColorPicker allows users to pick a color from a native browser widget. Unless specified, black is the default color upon render of the component\"), Link(\"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/color\", \"Please see here for further information.\")))\r\n            .Section(Stack().Children(\r\n                SampleTitle(\"Usage\"),\r\n                TextBlock(\"Basic ColorPicker\").Medium(),\r\n                Stack().Width(40.percent()).Children(\r\n                    Label(\"Standard\").SetContent(HStack().Stretch().Children(ColorPicker().Width(10.percent()).Var(out var colorPicker1), Button().SetText(\"Click me!\").Var(out var button1))),\r\n                    Label(\"With preset color\").SetContent(ColorPicker(Color.FromString(\"#0078d4\"))).Width(10.percent()),\r\n                    Label(\"Change Theme Color\").SetContent(ColorPicker(Color.FromString(\"#0078d4\")).OnChange((cp, e) => Theme.SetPrimary(cp.Color))).Width(10.percent()),\r\n                    Label(\"Disabled\").Disabled().SetContent(ColorPicker().Disabled()).Width(10.percent()),\r\n                    Label(\"Required\").Required().SetContent(ColorPicker()).Width(10.percent()), ColorPicker().Required().Width(10.percent()),\r\n                    Label(\"With error message\").SetContent(ColorPicker().Error(\"Error message\").IsInvalid()).Width(10.percent()),\r\n                    Label(\"With validation for light color\").SetContent(ColorPicker().Validation(Validation.LightColor)).Width(10.percent()),\r\n                    Label(\"With validation for dark color\").SetContent(ColorPicker().Validation(Validation.DarkColor)).Width(10.percent()))));\r\n\r\n            colorPicker1.OnChange((_, __) => button1.Background = colorPicker1.Text);\r\n            button1.OnClick((_, __) => window.alert($\"{colorPicker1.Text}, {colorPicker1.Color.ToHex()}\"));\r\n        }\r\n\r\n        public HTMLElement Render() => _content.Render();\r\n    }\r\n}\r\n";
                        case "ContextMenuSample": 
                            return "using static H5.Core.dom;\r\nusing static Tesserae.UI;\r\nusing static Tesserae.Tests.Samples.SamplesHelper;\r\n\r\nnamespace Tesserae.Tests.Samples\r\n{\r\n    public class ContextMenuSample : IComponent\r\n    {\r\n        private readonly IComponent _content;\r\n\r\n        public ContextMenuSample()\r\n        {\r\n            var d    = ContextMenu();\r\n            var msg  = TextBlock();\r\n            var msg2 = TextBlock();\r\n\r\n            var cmsub = ContextMenu().Items(\r\n                ContextMenuItem().Divider(),\r\n                ContextMenuItem(\"Edit Sub\").OnClick((s2,       e2) => Toast().Information(\"Clicked: Edit Sub\")),\r\n                ContextMenuItem(\"Properties Sub\").OnClick((s2, e2) => Toast().Information(\"Clicked: Properties Sub\")),\r\n                ContextMenuItem(\"Header Sub\").Header(),\r\n                ContextMenuItem(\"Disabled Sub\").Disabled(),\r\n                ContextMenuItem(\"Link Sub\").OnClick((s2, e2) => Toast().Information(\"Clicked: Link Sub\")));\r\n\r\n            var cmsub2 = ContextMenu().Items(\r\n                ContextMenuItem().Divider(),\r\n                ContextMenuItem(\"Edit Sub2\").OnClick((s2, e2) => Toast().Information(\"Clicked: Edit Sub2\")),\r\n                ContextMenuItem(\"Properties Sub2\"),\r\n                ContextMenuItem(\"Header Sub2\").Header(),\r\n                ContextMenuItem(\"Disabled Sub2\").Disabled(),\r\n                ContextMenuItem(\"Link Sub2\").OnClick((s2, e2) => Toast().Information(\"Clicked: Link Sub2\")));\r\n\r\n\r\n            var cmcm = ContextMenu().Items(\r\n                ContextMenuItem(Link(\"#\", \"New\")).SubMenu(cmsub),\r\n                ContextMenuItem().Divider(),\r\n                ContextMenuItem(Button(\"All\").Compact().Link())\r\n                   .OnClick((_, __) =>\r\n                    {\r\n                        Toast().Information(\"Clicked: All\");\r\n                    }),\r\n                ContextMenuItem(Button(\"Edit\").Compact().Link().SetIcon(LineAwesome.Edit)).OnClick((s2, e2) => Toast().Information(\"Clicked: Edit\")),\r\n                ContextMenuItem(Button(\"Properties\").Compact().Link().SetIcon(LineAwesome.ExpandArrowsAlt)).SubMenu(cmsub2),\r\n                ContextMenuItem(\"Header\").Header(),\r\n                ContextMenuItem(\"Disabled\").Disabled(),\r\n                ContextMenuItem(\"Link\").OnClick((s2, e2) => Toast().Information(\"Clicked: Link\"))\r\n            );\r\n\r\n\r\n            _content = SectionStack()\r\n               .Title(SampleHeader(nameof(ContextMenuSample)))\r\n               .Section(Stack().Children(SampleTitle(\"Overview\"),\r\n                    TextBlock(\"ContextualMenus are lists of commands that are based on the context of selection, mouse hover or keyboard focus. They are one of the most effective and highly used command surfaces, and can be used in a variety of places.\")))\r\n               .Section(Stack().Children(SampleTitle(\"Best Practices\"),\r\n                    Stack().Horizontal().Children(Stack().Width(40.percent()).Children(\r\n                            SampleSubTitle(\"Do\"),\r\n                            SampleDo(\"Use to display commands.\"),\r\n                            SampleDo(\"Divide groups of commands with rules.\"),\r\n                            SampleDo(\"Use selection checks without icons.\"),\r\n                            SampleDo(\"Provide submenus for sets of related commands that aren\u2019t as critical as others.\")),\r\n                        Stack().Width(40.percent()).Children(\r\n                            SampleSubTitle(\"Don't\"),\r\n                            SampleDont(\"Use them to display content.\"),\r\n                            SampleDont(\"Show commands as one large group.\"),\r\n                            SampleDont(\"Mix checks and icons.\"),\r\n                            SampleDont(\"Create submenus of submenus.\")))))\r\n               .Section(Stack().Children(SampleTitle(\"Usage\"),\r\n                    TextBlock(\"Basic ContextMenus\").Medium(),\r\n                    HStack().Children(\r\n                        Stack().Children(\r\n                            Label(\"Standard with Headers\").SetContent(\r\n                                Button(\"Open\").Var(out var btn2).OnClick((s, e) =>\r\n                                    ContextMenu().Items(\r\n                                        ContextMenuItem(\"New\").OnClick((s2, e2) => Toast().Information(\"Clicked: New\")),\r\n                                        ContextMenuItem().Divider(),\r\n                                        ContextMenuItem(\"Edit\").OnClick((s2,       e2) => Toast().Information(\"Clicked: Edit\")),\r\n                                        ContextMenuItem(\"Properties\").OnClick((s2, e2) => Toast().Information(\"Clicked: Properties\")),\r\n                                        ContextMenuItem(\"Header\").Header(),\r\n                                        ContextMenuItem(\"Disabled\").Disabled(),\r\n                                        ContextMenuItem(\"Link\").OnClick((s2, e2) => Toast().Information(\"Clicked: Link\"))\r\n                                    ).ShowFor(btn2)\r\n                                )), msg),\r\n                        Stack().Children(\r\n                            Label(\"Standard with Submenus\").SetContent(\r\n                                Button(\"Open\").Var(out var btn3).OnClick((s, e) =>\r\n                                    cmcm.ShowFor(btn3)\r\n                                )), msg2\r\n                        )\r\n                    )\r\n                ));\r\n        }\r\n\r\n        public HTMLElement Render()\r\n        {\r\n            return _content.Render();\r\n        }\r\n    }\r\n}";
                        case "DatePickerSample": 
                            return "using System;\r\nusing Tesserae;\r\nusing static H5.Core.dom;\r\nusing static Tesserae.UI;\r\nusing static Tesserae.Tests.Samples.SamplesHelper;\r\n\r\nnamespace Tesserae.Tests.Samples\r\n{\r\n    public class DatePickerSample : IComponent\r\n    {\r\n        private readonly IComponent _content;\r\n\r\n        public DatePickerSample()\r\n        {\r\n            var from = DateTime.Now.AddDays(-7);\r\n            var to = DateTime.Now.AddDays(7);\r\n            _content = SectionStack()\r\n               .Title(SampleHeader(nameof(DatePickerSample)))\r\n               .Section(Stack().Children(\r\n                    SampleTitle(\"Overview\"),\r\n                    TextBlock(\"The DatePicker allows users to pick a datetime from a native browser widget.\"), Link(\"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/datetime-local\", \"Please see here for further information.\")))\r\n               .Section(Stack().Children(\r\n                    SampleTitle(\"Usage\"),\r\n                    TextBlock(\"Basic DatePicker\").Medium(),\r\n                    Stack().Width(40.percent()).Children(\r\n                        Label(\"Standard\").SetContent(DatePicker()),\r\n                        Label(\"With default day of two days in the future\").SetContent(DatePicker(DateTime.Now.AddDays(2))),\r\n                        Label(\"With step increment of 10\").SetContent(DatePicker().SetStep(10)),\r\n                        Label($\"With max of {to.ToString(\"D\")}\").SetContent(DatePicker().SetMax(to)),\r\n                        Label($\"With min of {from.ToString(\"D\")}\").SetContent(DatePicker().SetMin(from)),\r\n                        Label(\"Disabled\").Disabled().SetContent(DatePicker().Disabled()),\r\n                        Label(\"Required\").Required().SetContent(DatePicker()), DatePicker().Required(),\r\n                        Label(\"With error message\").SetContent(DatePicker().Error(\"Error message\").IsInvalid()),\r\n                        Label(\"With validation\").SetContent(DatePicker().Validation(dateTimePicker => dateTimePicker.Date <= DateTime.Now.AddMonths(2) ? null : \"Please choose a date less than 2 months in the future\")),\r\n                        Label(\"With validation on type - not in the future\").SetContent(DatePicker().Validation(Validation.NotInTheFuture)),\r\n                        Label(\"With validation on type - not in the past\").SetContent(DatePicker().Validation(Validation.NotInThePast)),\r\n                        Label($\"With validation on type - between {from.ToString(\"D\")} and {to.ToString(\"D\")}\").SetContent(DatePicker().Validation(dateTimePicker => Validation.BetweenRange(dateTimePicker, from, to))))));\r\n        }\r\n\r\n        public HTMLElement Render() => _content.Render();\r\n    }\r\n}";
                        case "DateTimePickerSample": 
                            return "using System;\r\nusing Tesserae;\r\nusing static H5.Core.dom;\r\nusing static Tesserae.UI;\r\nusing static Tesserae.Tests.Samples.SamplesHelper;\r\n\r\nnamespace Tesserae.Tests.Samples\r\n{\r\n    public class DateTimePickerSample : IComponent\r\n    {\r\n        private readonly IComponent _content;\r\n\r\n        public DateTimePickerSample()\r\n        {\r\n            var from = DateTime.Now.AddDays(-7);\r\n            var to   = DateTime.Now.AddDays(7);\r\n            _content = SectionStack()\r\n            .Title(SampleHeader(nameof(DateTimePickerSample)))\r\n            .Section(Stack().Children(\r\n                SampleTitle(\"Overview\"),\r\n                TextBlock(\"The DateTimePicker allows users to pick a datetime from a native browser widget.\"), Link(\"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/datetime-local\", \"Please see here for further information.\")))\r\n            .Section(Stack().Children(\r\n                SampleTitle(\"Usage\"),\r\n                TextBlock(\"Basic DateTimePicker\").Medium(),\r\n                Stack().Width(40.percent()).Children(\r\n                    Label(\"Standard\").SetContent(DateTimePicker()),\r\n                    Label(\"With default day of two days in the future\").SetContent(DateTimePicker(DateTime.Now.AddDays(2))),\r\n                    Label(\"With step increment of 10\").SetContent(DateTimePicker().SetStep(10)),\r\n                    Label($\"With max of {to.ToShortDateString()}\").SetContent(DateTimePicker().SetMax(to)),\r\n                    Label($\"With min of {from.ToShortDateString()}\").SetContent(DateTimePicker().SetMin(from)),\r\n                    Label(\"Disabled\").Disabled().SetContent(DateTimePicker().Disabled()),\r\n                    Label(\"Required\").Required().SetContent(DateTimePicker()), DateTimePicker().Required(),\r\n                    Label(\"With error message\").SetContent(DateTimePicker().Error(\"Error message\").IsInvalid()),\r\n                    Label(\"With validation\").SetContent(DateTimePicker().Validation(dateTimePicker => dateTimePicker.DateTime <= DateTime.Now.AddMonths(2) ? null : \"Please choose a date less than 2 months in the future\")),\r\n                    Label(\"With validation on type - not in the future\").SetContent(DateTimePicker().Validation(Validation.NotInTheFuture)),\r\n                    Label(\"With validation on type - not in the past\").SetContent(DateTimePicker().Validation(Validation.NotInThePast)),\r\n                    Label($\"With validation on type - between {from.ToShortDateString()} and {to.ToShortDateString()}\").SetContent(DateTimePicker().Validation(dateTimePicker => Validation.BetweenRange(dateTimePicker, from, to))))));\r\n        }\r\n\r\n        public HTMLElement Render() => _content.Render();\r\n    }\r\n}\r\n";
                        case "DeferSample": 
                            return "using System;\r\nusing System.Threading.Tasks;\r\nusing Tesserae;\r\nusing static H5.Core.dom;\r\nusing static Tesserae.UI;\r\nusing static Tesserae.Tests.Samples.SamplesHelper;\r\n\r\nnamespace Tesserae.Tests.Samples\r\n{\r\n    public class DeferSample: IComponent\r\n    {\r\n        private readonly IComponent content;\r\n\r\n        public DeferSample()\r\n        {\r\n            var stack = SectionStack();\r\n            var countSlider = Slider(5, 0, 10, 1);\r\n            content = SectionStack()\r\n                .Title(SampleHeader(nameof(DeferSample)))\r\n                .Section(Stack().Children(\r\n                    SampleTitle(\"Overview\"),\r\n                    TextBlock(\"Use Defer() to render asyncronous components. The asyncronous task is only triggered on the first render of the Defer component\")))\r\n                .Section(Stack().Children(\r\n                    SampleTitle(\"Usage\"),\r\n                Stack().Children(\r\n                    Stack().Horizontal().Children(\r\n                        Stack().Children(\r\n                            Label(\"Number of items:\").SetContent(countSlider.OnInput((s, e) => SetChildren(stack, s.Value)))\r\n                            )\r\n                        )\r\n                    ),\r\n                    stack.HeightAuto()\r\n            ));\r\n            SetChildren(stack, 5);\r\n        }\r\n\r\n        private void SetChildren(SectionStack stack, int count)\r\n        {\r\n            stack.Clear();\r\n            for (int i = 0; i < count; i++)\r\n            {\r\n                var delay = (i + 1) * 1_000;\r\n                stack.Section(Stack().Children(\r\n                TextBlock($\"Section {i} - delayed {i + 1} seconds\").MediumPlus().SemiBold(),\r\n\r\n                Defer(async () =>\r\n                {\r\n                    await Task.Delay(delay);\r\n                    return Stack().Children(\r\n                        TextBlock(\"Wrap (Default)\").SmallPlus(),\r\n                        TextBlock(\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\").Width(50.percent()),\r\n                        TextBlock(\"No Wrap\").SmallPlus(),\r\n                        TextBlock(\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\").NoWrap().Width(50.percent())\r\n                    );\r\n                }\r\n                )));\r\n            }\r\n        }\r\n\r\n        public HTMLElement Render()\r\n        {\r\n            return content.Render();\r\n        }\r\n    }\r\n}\r\n";
                        case "DetailsListSample": 
                            return "using System;\r\nusing System.Collections.Generic;\r\nusing System.Linq;\r\nusing System.Threading.Tasks;\r\nusing Tesserae;\r\nusing static H5.Core.dom;\r\nusing static Tesserae.Tests.Samples.SamplesHelper;\r\nusing static Tesserae.UI;\r\n\r\nnamespace Tesserae.Tests.Samples\r\n{\r\n    public class DetailsListSample : IComponent\r\n    {\r\n        private readonly IComponent _content;\r\n\r\n        public DetailsListSample()\r\n        {\r\n            var query = Router.GetQueryParameters();\r\n            int page = query.ContainsKey(\"page\") && query.TryGetValue(\"page\", out var queryPageStr) && int.TryParse(queryPageStr, out var queryPage) ? queryPage : 2;\r\n\r\n            _content =\r\n                SectionStack()\r\n                   .Title(SampleHeader(nameof(DetailsListSample)))\r\n                   .Section(\r\n                        Stack()\r\n                           .Children(\r\n                                SampleTitle(\"Overview\"),\r\n                                TextBlock(\"DetailsList is a derivative of the List component. It is a robust way to \" +\r\n                                          \"display an information rich collection of items. It can support powerful \" +\r\n                                          \"ways to aid a user in finding content with sorting, grouping and \" +\r\n                                          \"filtering.  Lists are a great way to handle large amounts of content, \" +\r\n                                          \"but poorly designed Lists can be difficult to parse.\")\r\n                                   .PaddingBottom(16.px()),\r\n                                TextBlock(\"Use a DetailsList when density of information is critical. Lists can \" +\r\n                                          \"support single and multiple selection, as well as drag and drop and \" +\r\n                                          \"marquee selection. They are composed of a column header, which \" +\r\n                                          \"contains the metadata fields which are attached to the list items, \" +\r\n                                          \"and provide the ability to sort, filter and even group the list. \" +\r\n                                          \"List items are composed of selection, icon, and name columns at \" +\r\n                                          \"minimum. One can also include other columns such as Date Modified, or \" +\r\n                                          \"any other metadata field associated with the collection. Place the most \" +\r\n                                          \"important columns from left to right for ease of recall and comparison.\")\r\n                                   .PaddingBottom(16.px()),\r\n                                TextBlock(\"DetailsList is classically used to display files, but is also used to \" +\r\n                                          \"render custom lists that can be purely metadata. Avoid using file type \" +\r\n                                          \"icon overlays to denote status of a file as it can make the entire icon \" +\r\n                                          \"unclear. Be sure to leave ample width for each column\u2019s data. \" +\r\n                                          \"If there are multiple lines of text in a column, \" +\r\n                                          \"consider the variable row height variant.\")))\r\n                   .Section(\r\n                        Stack()\r\n                           .Children(\r\n                                SampleTitle(\"Best Practices\"),\r\n                                Stack()\r\n                                   .Horizontal()\r\n                                   .Children(\r\n                                        Stack()\r\n                                           .Width(40.percent())\r\n                                           .Children(\r\n                                                SampleSubTitle(\"Do\"),\r\n                                                SampleDo(\"Use them to display content.\"),\r\n                                                SampleDo(\"Provide useful columns of metadata.\"),\r\n                                                SampleDo(\"Display columns in order of importance left to right or \" +\r\n                                                         \"right to left depending on the standards of the culture.\"),\r\n                                                SampleDo(\"Give columns ample default width to display information.\")),\r\n                                        Stack()\r\n                                           .Width(40.percent())\r\n                                           .Children(\r\n                                                SampleSubTitle(\"Don't\"),\r\n                                                SampleDont(\"Use them to display commands or settings.\"),\r\n                                                SampleDont(\"Overload the view with too many columns that require \" +\r\n                                                           \"excessive horizontal scrolling.\"),\r\n                                                SampleDont(\"Make columns so narrow that it truncates the information \" +\r\n                                                           \"in typical cases.\")))))\r\n                   .Section(\r\n                        Stack()\r\n                           .Children(\r\n                                SampleTitle(\"Usage\"),\r\n                                TextBlock(\"Details List With Textual Rows\")\r\n                                   .Medium()\r\n                                   .PaddingBottom(16.px()),\r\n                                DetailsList<DetailsListSampleFileItem>(\r\n                                        IconColumn(Icon(LineAwesome.File), width: 32.px(), enableColumnSorting: true, sortingKey: \"FileIcon\"),\r\n                                        DetailsListColumn(title: \"File Name\",     width: 350.px(), enableColumnSorting: true, sortingKey: \"FileName\", isRowHeader: true),\r\n                                        DetailsListColumn(title: \"Date Modified\", width: 170.px(), enableColumnSorting: true, sortingKey: \"DateModified\"),\r\n                                        DetailsListColumn(title: \"Modified By\",   width: 150.px(), enableColumnSorting: true, sortingKey: \"ModifiedBy\"),\r\n                                        DetailsListColumn(title: \"File Size\",     width: 120.px(), enableColumnSorting: true, sortingKey: \"FileSize\"))\r\n                                   .Height(500.px())\r\n                                   .WithListItems(GetDetailsListItems())\r\n                                   .SortedBy(\"FileName\")\r\n                                   .Shrink()\r\n                                   .PaddingBottom(32.px()),\r\n                                TextBlock(\"Details List With Component Rows and responsive width\")\r\n                                   .Medium()\r\n                                   .PaddingBottom(16.px()),\r\n                                DetailsList<DetailsListSampleFileItem>(\r\n                                        IconColumn(Icon(LineAwesome.File), width: 80.px(), enableColumnSorting: true, sortingKey: \"FileIcon\"),\r\n                                        DetailsListColumn(title: \"File Name\",     width: 40.percent(), enableColumnSorting: true, sortingKey: \"FileName\",    isRowHeader: true),\r\n                                        DetailsListColumn(title: \"Date Modified\", width: 20.percent(), maxWidth: 150.px(),        enableColumnSorting: true, sortingKey: \"DateModified\"),\r\n                                        DetailsListColumn(title: \"Modified By\",   width: 20.percent(), maxWidth: 150.px(),        enableColumnSorting: true, sortingKey: \"ModifiedBy\"),\r\n                                        DetailsListColumn(title: \"File Size\",     width: 20.percent(), maxWidth: 100.px(),        enableColumnSorting: true, sortingKey: \"FileSize\"))\r\n                                   .Height(500.px())\r\n                                   .Width(100.percent())\r\n                                   .WithListItems(GetDetailsListItems())\r\n                                   .SortedBy(\"FileName\")\r\n                                   .PaddingBottom(32.px()),\r\n                                TextBlock(\"Details List With Component Rows\")\r\n                                   .Medium()\r\n                                   .PaddingBottom(16.px()),\r\n                                DetailsList<DetailsListSampleItemWithComponents>(\r\n                                        IconColumn(Icon(LineAwesome.Apple), width: 32.px(), enableColumnSorting: true, sortingKey: \"Icon\"),\r\n                                        DetailsListColumn(title: \"CheckBox\",    width: 120.px()),\r\n                                        DetailsListColumn(title: \"Name\",        width: 250.px(), isRowHeader: true),\r\n                                        DetailsListColumn(title: \"Button\",      width: 150.px()),\r\n                                        DetailsListColumn(title: \"ChoiceGroup\", width: 400.px()),\r\n                                        DetailsListColumn(title: \"Dropdown\",    width: 250.px()),\r\n                                        DetailsListColumn(title: \"Toggle\",      width: 100.px()))\r\n                                   .Compact()\r\n                                   .Height(500.px())\r\n                                   .WithListItems(GetComponentDetailsListItems())\r\n                                   .SortedBy(\"Name\")\r\n                                   .PaddingBottom(32.px()),\r\n                                TextBlock(\"Details List With Textual Rows and paginated content\")\r\n                                   .Medium()\r\n                                   .PaddingBottom(16.px()),\r\n                                DetailsList<DetailsListSampleFileItem>(\r\n                                        IconColumn(Icon(LineAwesome.File), width: 32.px(), enableColumnSorting: true, sortingKey: \"FileIcon\"),\r\n                                        DetailsListColumn(title: \"File Name\",     width: 350.px(), enableColumnSorting: true, sortingKey: \"FileName\", isRowHeader: true),\r\n                                        DetailsListColumn(title: \"Date Modified\", width: 170.px(), enableColumnSorting: true, sortingKey: \"DateModified\"),\r\n                                        DetailsListColumn(title: \"Modified By\",   width: 150.px(), enableColumnSorting: true, sortingKey: \"ModifiedBy\"),\r\n                                        DetailsListColumn(title: \"File Size\",     width: 120.px(), enableColumnSorting: true, sortingKey: \"FileSize\"))\r\n                                   .Height(500.px())\r\n                                   .WithListItems(GetDetailsListItems(0, page))\r\n                                   .WithPaginatedItems(async () =>\r\n                                    {\r\n                                        page++;\r\n                                        Router.ReplaceQueryParameters(parameters => parameters.With(\"page\", page.ToString()));\r\n                                        return await GetDetailsListItemsAsync(page, 1);\r\n\r\n                                    })\r\n                                   .SortedBy(\"FileName\")\r\n                                   .Shrink()\r\n                                   .PaddingBottom(32.px()),\r\n                                TextBlock(\"Details List With Empty List Message\")\r\n                                   .Medium()\r\n                                   .PaddingBottom(16.px()),\r\n                                DetailsList<DetailsListSampleFileItem>(\r\n                                        IconColumn(Icon(LineAwesome.File), width: 32.px(), enableColumnSorting: true, sortingKey: \"FileIcon\"),\r\n                                        DetailsListColumn(title: \"File Name\",     width: 350.px(), enableColumnSorting: true, sortingKey: \"FileName\", isRowHeader: true),\r\n                                        DetailsListColumn(title: \"Date Modified\", width: 170.px(), enableColumnSorting: true, sortingKey: \"DateModified\"),\r\n                                        DetailsListColumn(title: \"Modified By\",   width: 150.px(), enableColumnSorting: true, sortingKey: \"ModifiedBy\"),\r\n                                        DetailsListColumn(title: \"File Size\",     width: 120.px(), enableColumnSorting: true, sortingKey: \"FileSize\"))\r\n                                   .Compact()\r\n                                   .WithEmptyMessage(() => BackgroundArea(Card(TextBlock(\"Empty list\").Padding(16.px()))).WidthStretch().HeightStretch())\r\n                                   .Height(500.px())\r\n                                   .WithListItems(new DetailsListSampleFileItem[0])\r\n                                   .SortedBy(\"Name\")\r\n                            ));\r\n        }\r\n\r\n        public HTMLElement Render()\r\n        {\r\n            return _content.Render();\r\n        }\r\n\r\n        private async Task<DetailsListSampleFileItem[]> GetDetailsListItemsAsync(int start = 1, int count = 100)\r\n        {\r\n            await Task.Delay(1000);\r\n            return GetDetailsListItems(start, count);\r\n        }\r\n        private DetailsListSampleFileItem[] GetDetailsListItems(int start = 1, int count = 100)\r\n        {\r\n            return Enumerable\r\n               .Range(start, count)\r\n               .SelectMany(number => new List<DetailsListSampleFileItem>\r\n                {\r\n                    new DetailsListSampleFileItem(\r\n                        fileIcon: LineAwesome.FileWord,\r\n                        fileName: $\"Interesting File Name {number}, quite long as you can see. In fact, let's make it \" +\r\n                                  \"longer to see how the padding looks.\",\r\n                        dateModified: DateTime.Today.AddDays(-number),\r\n                        modifiedBy: \"Dale Cooper\",\r\n                        fileSize: number + 0.7),\r\n                    new DetailsListSampleFileItem(\r\n                        fileIcon: LineAwesome.FileExcel,\r\n                        fileName: $\"File Name {number}\",\r\n                        dateModified: DateTime.Today.AddDays(-number),\r\n                        modifiedBy: \"Rusty\",\r\n                        fileSize: number + 0.1),\r\n                    new DetailsListSampleFileItem(\r\n                        fileIcon: LineAwesome.FilePowerpoint,\r\n                        fileName: $\"File Name {number}\",\r\n                        dateModified: DateTime.Today.AddDays(-number),\r\n                        modifiedBy: \"Cole\",\r\n                        fileSize: number + 0.5)\r\n                }).ToArray();\r\n        }\r\n\r\n        private DetailsListSampleItemWithComponents[] GetComponentDetailsListItems()\r\n        {\r\n            return Enumerable\r\n               .Range(1, 100)\r\n               .SelectMany(number => new List<DetailsListSampleItemWithComponents>\r\n                {\r\n                    new DetailsListSampleItemWithComponents()\r\n                       .WithIcon(LineAwesome.Code)\r\n                       .WithCheckBox(\r\n                            CheckBox(\"CheckBox\"))\r\n                       .WithName(\"Component Details List Item\")\r\n                       .WithButton(\r\n                            Button()\r\n                               .SetText(\"Primary\")\r\n                               .Primary()\r\n                               .OnClick(\r\n                                    (s, e) => alert(\"Clicked!\")))\r\n                       .WithChoiceGroup(\r\n                            ChoiceGroup()\r\n                               .Horizontal()\r\n                               .Choices(\r\n                                    Choice(\"Option A\"),\r\n                                    Choice(\"Option B\").Disabled(),\r\n                                    Choice(\"Option C\")))\r\n                       .WithDropdown(\r\n                            Dropdown()\r\n                               .Multi()\r\n                               .Items(\r\n                                    DropdownItem(\"Header 1\").Header(),\r\n                                    DropdownItem(\"1-1\"),\r\n                                    DropdownItem(\"1-2\").Selected(),\r\n                                    DropdownItem(\"1-3\"),\r\n                                    DropdownItem(\"1-4\").Disabled(),\r\n                                    DropdownItem(\"1-5\"),\r\n                                    DropdownItem(\"2-1\"),\r\n                                    DropdownItem(\"2-2\"),\r\n                                    DropdownItem(\"2-3\"),\r\n                                    DropdownItem(\"2-4\").Selected(),\r\n                                    DropdownItem(\"2-5\")))\r\n                       .WithToggle(Toggle())\r\n                }).ToArray();\r\n        }\r\n\r\n    }\r\n\r\n    public class DetailsListSampleFileItem : IDetailsListItem<DetailsListSampleFileItem>\r\n    {\r\n        public DetailsListSampleFileItem(LineAwesome fileIcon, string fileName, DateTime dateModified, string modifiedBy, double fileSize)\r\n        {\r\n            FileIcon = fileIcon;\r\n            FileName = fileName;\r\n            DateModified = dateModified;\r\n            ModifiedBy = modifiedBy;\r\n            FileSize = fileSize;\r\n        }\r\n\r\n        public LineAwesome FileIcon { get; }\r\n\r\n        public string FileName { get; }\r\n\r\n        public DateTime DateModified { get; }\r\n\r\n        public string ModifiedBy { get; }\r\n\r\n        public double FileSize { get; }\r\n\r\n        public bool EnableOnListItemClickEvent => true;\r\n\r\n        public void OnListItemClick(int listItemIndex)\r\n        {\r\n            alert($\"You clicked me! List item index: {listItemIndex}, my name is {FileName}\");\r\n        }\r\n\r\n        public int CompareTo(DetailsListSampleFileItem other, string columnSortingKey)\r\n        {\r\n            if (other == null)\r\n            {\r\n                throw new ArgumentException(nameof(other));\r\n            }\r\n\r\n            if (columnSortingKey.Equals(nameof(FileIcon)))\r\n            {\r\n                return FileIcon.CompareTo(other.FileIcon);\r\n            }\r\n\r\n            if (columnSortingKey.Equals(nameof(FileName)))\r\n            {\r\n                return string.Compare(FileName, other.FileName, StringComparison.Ordinal);\r\n            }\r\n\r\n            if (columnSortingKey.Equals(nameof(DateModified)))\r\n            {\r\n                return DateModified.CompareTo(other.DateModified);\r\n            }\r\n\r\n            if (columnSortingKey.Equals(nameof(ModifiedBy)))\r\n            {\r\n                return string.Compare(FileName, other.FileName, StringComparison.Ordinal);\r\n            }\r\n\r\n            if (columnSortingKey.Equals(nameof(FileSize)))\r\n            {\r\n                return FileSize.CompareTo(other.FileSize);\r\n            }\r\n\r\n            throw new InvalidOperationException($\"Can not match {columnSortingKey} to current list item\");\r\n        }\r\n\r\n        public IEnumerable<IComponent> Render(IList<IDetailsListColumn> columns, Func<IDetailsListColumn, Func<IComponent>, IComponent> createGridCellExpression)\r\n        {\r\n            yield return createGridCellExpression(columns[0], () => Icon(FileIcon));\r\n            yield return createGridCellExpression(columns[1], () => TextBlock(FileName));\r\n            yield return createGridCellExpression(columns[2], () => TextBlock(DateModified.ToShortDateString()));\r\n            yield return createGridCellExpression(columns[3], () => TextBlock(ModifiedBy));\r\n            yield return createGridCellExpression(columns[4], () => TextBlock(FileSize.ToString()));\r\n        }\r\n    }\r\n\r\n    public class DetailsListSampleItemWithComponents : IDetailsListItem<DetailsListSampleItemWithComponents>\r\n    {\r\n        public LineAwesome Icon { get; private set; }\r\n\r\n        public CheckBox CheckBox { get; private set; }\r\n\r\n        public string Name { get; private set; }\r\n\r\n        public Button Button { get; private set; }\r\n\r\n        public ChoiceGroup ChoiceGroup { get; private set; }\r\n\r\n        public Dropdown Dropdown { get; private set; }\r\n\r\n        public Toggle Toggle { get; private set; }\r\n\r\n        public bool EnableOnListItemClickEvent => false;\r\n\r\n        public void OnListItemClick(int listItemIndex)\r\n        {\r\n        }\r\n\r\n        public int CompareTo(DetailsListSampleItemWithComponents other, string columnSortingKey)\r\n        {\r\n            return 0;\r\n        }\r\n\r\n        public DetailsListSampleItemWithComponents WithIcon(LineAwesome icon)\r\n        {\r\n            Icon = icon;\r\n            return this;\r\n        }\r\n\r\n        public DetailsListSampleItemWithComponents WithCheckBox(CheckBox checkBox)\r\n        {\r\n            CheckBox = checkBox;\r\n            return this;\r\n        }\r\n\r\n        public DetailsListSampleItemWithComponents WithName(string name)\r\n        {\r\n            Name = name;\r\n            return this;\r\n        }\r\n\r\n        public DetailsListSampleItemWithComponents WithButton(Button button)\r\n        {\r\n            Button = button;\r\n            return this;\r\n        }\r\n\r\n        public DetailsListSampleItemWithComponents WithChoiceGroup(ChoiceGroup choiceGroup)\r\n        {\r\n            ChoiceGroup = choiceGroup;\r\n\r\n            return this;\r\n        }\r\n\r\n        public DetailsListSampleItemWithComponents WithDropdown(Dropdown dropdown)\r\n        {\r\n            Dropdown = dropdown;\r\n            return this;\r\n        }\r\n\r\n        public DetailsListSampleItemWithComponents WithToggle(Toggle toggle)\r\n        {\r\n            Toggle = toggle;\r\n            return this;\r\n        }\r\n\r\n        public IEnumerable<IComponent> Render(IList<IDetailsListColumn> columns, Func<IDetailsListColumn, Func<IComponent>, IComponent> createGridCellExpression)\r\n        {\r\n            yield return createGridCellExpression(columns[0], () => Icon(Icon));\r\n            yield return createGridCellExpression(columns[1], () => CheckBox);\r\n            yield return createGridCellExpression(columns[2], () => TextBlock(Name));\r\n            yield return createGridCellExpression(columns[3], () => Button);\r\n            yield return createGridCellExpression(columns[4], () => ChoiceGroup);\r\n            yield return createGridCellExpression(columns[5], () => Dropdown);\r\n            yield return createGridCellExpression(columns[6], () => Toggle);\r\n        }\r\n    }\r\n}";
                        case "DialogSample": 
                            return "using System;\r\nusing Tesserae;\r\nusing static H5.Core.dom;\r\nusing static Tesserae.UI;\r\nusing static Tesserae.Tests.Samples.SamplesHelper;\r\n\r\nnamespace Tesserae.Tests.Samples\r\n{\r\n    public class DialogSample : IComponent\r\n    {\r\n        private readonly IComponent _content;\r\n\r\n        public DialogSample()\r\n        {\r\n            var dialog = Dialog(\"Lorem Ipsum\");\r\n            var response = TextBlock();\r\n\r\n            _content = SectionStack()\r\n                .Title(SampleHeader(nameof(DialogSample)))\r\n            .Section(Stack().Children(\r\n                SampleTitle(\"Overview\"),\r\n                TextBlock(\"Dialogs are temporary, modal UI overlay that generally provide contextual app information or require user confirmation/input. In most cases, Dialogs block interactions with the web page or application until being explicitly dismissed, and often request action from the user. They are primarily used for lightweight creation or edit tasks, and simple management tasks.\"),\r\n                TextBlock(\"Best Practices\").MediumPlus()))\r\n            .Section(Stack().Children(\r\n                Stack().Horizontal().Children(\r\n                Stack().Width(40.percent()).Children(\r\n                SampleSubTitle(\"Do\"),\r\n                SampleDo(\"Use Dialogs for quick, actionable interactions, such as making a choice or needing the user to provide information.\"),\r\n                SampleDo(\"When possible, try a non-blocking Dialog before resorting to a blocking Dialog.\"),\r\n                SampleDo(\"Only include information needed to help users make a decision.\"),\r\n                SampleDo(\"Button text should reflect the actions available to the user (e.g. save, delete).\"),\r\n                SampleDo(\"Validate that the user's entries are acceptable before closing the Dialog. Show an inline validation error near the field they must correct.\")),\r\n            Stack().Width(40.percent()).Children(\r\n                SampleSubTitle(\"Don't\"),\r\n                SampleDont(\"Don\u2019t overuse Modals. In some cases they can be perceived as interrupting workflow, and too many can be a bad user experience.\"),\r\n                SampleDont(\"Avoid \\\"Are you sure ?\\\" or confirmation Dialogs unless the user is making an irreversible or destructive choice.\"),\r\n                SampleDont(\"Do not use a blocking Dialog unless absolutely necessary because they are very disruptive.\"),\r\n                SampleDont(\"Don\u2019t have long sentences or complicated choices.\"),\r\n                SampleDont(\"Avoid generic button labels like \\\"Ok\\\" if you can be more specific about the action a user is about to complete.\"),\r\n                SampleDont(\"Don't dismiss the Dialog if underlying problem is not fixed. Don't put the user back into a broken/error state.\"),\r\n                SampleDont(\"Don't provide the user with more than 3 buttons.\")))))\r\n            .Section(Stack().Children(\r\n                SampleTitle(\"Usage\"),\r\n                Button(\"Open Dialog\").OnClick((c, ev) => dialog.Show()),\r\n                Stack().Horizontal().Children(\r\n                Button(\"Open YesNo\").OnClick((c, ev)             => Dialog(\"Sample Dialog\").YesNo(() => response.Text(\"Clicked Yes\"), () => response.Text(\"Clicked No\"))),\r\n                Button(\"Open YesNoCancel\").OnClick((c, ev)       => Dialog(\"Sample Dialog\").YesNoCancel(() => response.Text(\"Clicked Yes\"), () => response.Text(\"Clicked No\"), () => response.Text(\"Clicked Cancel\"))),\r\n                Button(\"Open Ok\").OnClick((c, ev)                => Dialog(\"Sample Dialog\").Ok(() => response.Text(\"Clicked Ok\"))),\r\n                Button(\"Open RetryCancel\").OnClick((c, ev)       => Dialog(\"Sample Dialog\").RetryCancel(() => response.Text(\"Clicked Retry\"), () => response.Text(\"Clicked Cancel\")))),\r\n                Button(\"Open YesNo with dark overlay\").OnClick((c, ev)       => Dialog(\"Sample Dialog\").Dark().YesNo(() => response.Text(\"Clicked Yes\"), () => response.Text(\"Clicked No\"), y => y.Success().SetText(\"Yes!\"), n => n.Danger().SetText(\"Nope\"))),\r\n                Button(\"Open YesNoCancel with dark overlay\").OnClick((c, ev) => Dialog(\"Sample Dialog\").Dark().YesNoCancel(() => response.Text(\"Clicked Yes\"), () => response.Text(\"Clicked No\"), () => response.Text(\"Clicked Cancel\"))),\r\n                Button(\"Open Ok with dark overlay\").OnClick((c, ev)          => Dialog(\"Sample Dialog\").Dark().Ok(() => response.Text(\"Clicked Ok\"))),\r\n                Button(\"Open RetryCancel with dark overlay\").OnClick((c, ev) => Dialog(\"Sample Dialog\").Dark().RetryCancel(() => response.Text(\"Clicked Retry\"), () => response.Text(\"Clicked Cancel\"))),\r\n                response));\r\n                dialog.Content(Stack().Children(TextBlock(\"Lorem ipsum dolor sit amet, consectetur adipiscing elit.\"),\r\n                                                Toggle(\"Is draggable\").OnChange((c, ev) => dialog.IsDraggable = c.IsChecked),\r\n                                                Toggle(\"Is dark overlay\").OnChange((c, ev) => dialog.IsDark = c.IsChecked).Checked(dialog.IsDark)\r\n                                                ))\r\n                      .Commands(Button(\"Send\").Primary().AlignEnd().OnClick((c, ev) => dialog.Hide()), Button(\"Don`t send\").AlignEnd().OnClick((c, ev) => dialog.Hide()));\r\n        }\r\n\r\n        public HTMLElement Render()\r\n        {\r\n            return _content.Render();\r\n        }\r\n    }\r\n}\r\n";
                        case "DropdownSample": 
                            return "using System;\r\nusing System.Threading.Tasks;\r\nusing static H5.Core.dom;\r\nusing static Tesserae.Tests.Samples.SamplesHelper;\r\nusing static Tesserae.UI;\r\n\r\nnamespace Tesserae.Tests.Samples\r\n{\r\n    public sealed class DropdownSample : IComponent\r\n    {\r\n        private readonly IComponent _content;\r\n        public DropdownSample()\r\n        {\r\n            var dropdownForValidationExample = Dropdown();\r\n            dropdownForValidationExample.Attach(dd =>\r\n            {\r\n                if (dd.SelectedItems.Length != 1 || dd.SelectedItems[0].Text != \"1-1\")\r\n                {\r\n                    dd.IsInvalid = true;\r\n                    dd.Error = \"Some error happens, need 1-1\";\r\n                }\r\n                else dd.IsInvalid = false;\r\n            });\r\n\r\n            _content = SectionStack()\r\n                .Title(SampleHeader(nameof(DropdownSample)))\r\n                .Section(Stack().Children(\r\n                    SampleTitle(\"Overview\"),\r\n                    TextBlock(\"A Dropdown is a list in which the selected item is always visible, and the others are visible on demand by clicking a drop-down button. They are used to simplify the design and make a choice within the UI. When closed, only the selected item is visible. When users click the drop-down button, all the options become visible. To change the value, users open the list and click another value or use the arrow keys (up and down) to select a new value.\")\r\n                ))\r\n                .Section(Stack().Children(SampleTitle(\"Best Practices\"),\r\n                    Stack().Horizontal().Children(\r\n                        Stack().Width(40.percent()).Children(\r\n                            SampleSubTitle(\"Do\"),\r\n                            SampleDo(\"Use a Dropdown when there are multiple choices that can be collapsed under one title. Or if the list of items is long or when space is constrained.\"),\r\n                            SampleDo(\"Use shortened statements or single words as options.\"),\r\n                            SampleDo(\"Use a Dropdown when the selected option is more important than the alternatives (in contrast to radio buttons where all the choices are visible putting more emphasis on the other options).\")\r\n                        ),\r\n                        Stack().Width(40.percent()).Children(\r\n                            SampleSubTitle(\"Don't\"),\r\n                            SampleDo(\"Use if there are less than 7 options, use a ChoiceGroup instead.\")\r\n                        )\r\n                    )\r\n                ))\r\n                .Section(Stack().Children(\r\n                    SampleTitle(\"Usage\"),\r\n                    TextBlock(\"Basic Dropdowns\").Medium(),\r\n                    Stack().Width(40.percent()).Children(\r\n                        Label(\"Standard\").SetContent(Dropdown().Items(\r\n                            DropdownItem(\"1-1\").Selected(),\r\n                            DropdownItem(\"1-2\")\r\n                        ))\r\n                    ),\r\n                    Stack().Width(40.percent()).Children(\r\n                        Label(\"Standard with Headers\").SetContent(Dropdown().Items(\r\n                        DropdownItem(\"Header 1\").Header(),\r\n                        DropdownItem(\"1-1\"),\r\n                        DropdownItem(\"1-2\"),\r\n                        DropdownItem(\"1-3\"),\r\n                        DropdownItem(\"1-4\").Disabled(),\r\n                        DropdownItem(\"1-5\"),\r\n                        DropdownItem().Divider(),\r\n                        DropdownItem(\"Header 2\").Header(),\r\n                        DropdownItem(\"2-1\"),\r\n                        DropdownItem(\"2-2\"),\r\n                        DropdownItem(\"2-3\").Selected(),\r\n                        DropdownItem(\"2-4\"),\r\n                        DropdownItem(\"2-5\")\r\n                    )),\r\n                    Label(\"Multi-select with custom on-selected text\").SetContent(Dropdown().Multi().Items(\r\n                        DropdownItem(\"Header 1\").Header(),\r\n                        DropdownItem(\"1-1\", \"H1-1-1\"),\r\n                        DropdownItem(\"1-2\", \"H1-1-2\").Selected(),\r\n                        DropdownItem(\"1-3\", \"H1-1-3\"),\r\n                        DropdownItem(\"1-4\", \"H1-1-4\").Disabled(),\r\n                        DropdownItem(\"1-5\", \"H1-1-5\"),\r\n                        DropdownItem().Divider(),\r\n                        DropdownItem(\"Header 2\").Header(),\r\n                        DropdownItem(\"2-1\", \"H2-2-1\"),\r\n                        DropdownItem(\"2-2\", \"H2-2-2\"),\r\n                        DropdownItem(\"2-3\", \"H2-2-3\"),\r\n                        DropdownItem(\"2-4\", \"H2-2-4\").Selected(),\r\n                        DropdownItem(\"2-5\", \"H2-2-5\")\r\n                    )),\r\n                    Label(\"Validation\").SetContent(dropdownForValidationExample.Items(\r\n                        DropdownItem(\"Header 1\").Header(),\r\n                        DropdownItem(\"1-1\").Selected(),\r\n                        DropdownItem(\"1-2\"),\r\n                        DropdownItem(\"1-3\"),\r\n                        DropdownItem(\"1-4\").Disabled(),\r\n                        DropdownItem(\"1-5\"),\r\n                        DropdownItem().Divider(),\r\n                        DropdownItem(\"Header 2\").Header(),\r\n                        DropdownItem(\"2-1\"),\r\n                        DropdownItem(\"2-2\"),\r\n                        DropdownItem(\"2-3\"),\r\n                        DropdownItem(\"2-4\"),\r\n                        DropdownItem(\"2-5\")\r\n                    )),\r\n                    Label(\"Disabled\").SetContent(Dropdown().Disabled().Items(\r\n                        DropdownItem(\"Header 1\").Header(),\r\n                        DropdownItem(\"1-1\").Selected(),\r\n                        DropdownItem(\"1-2\"),\r\n                        DropdownItem(\"1-3\"),\r\n                        DropdownItem(\"1-4\").Disabled(),\r\n                        DropdownItem(\"1-5\"),\r\n                        DropdownItem().Divider(),\r\n                        DropdownItem(\"Header 2\").Header(),\r\n                        DropdownItem(\"2-1\"),\r\n                        DropdownItem(\"2-2\"),\r\n                        DropdownItem(\"2-3\"),\r\n                        DropdownItem(\"2-4\"),\r\n                        DropdownItem(\"2-5\")\r\n                    )),\r\n                    Label(\"Required\").SetContent(Dropdown().Required().Items(\r\n                        DropdownItem(\"Header 1\").Header(),\r\n                        DropdownItem(\"1-1\").Selected(),\r\n                        DropdownItem(\"1-2\"),\r\n                        DropdownItem(\"1-3\"),\r\n                        DropdownItem(\"1-4\").Disabled(),\r\n                        DropdownItem(\"1-5\"),\r\n                        DropdownItem().Divider(),\r\n                        DropdownItem(\"Header 2\").Header(),\r\n                        DropdownItem(\"2-1\"),\r\n                        DropdownItem(\"2-2\"),\r\n                        DropdownItem(\"2-3\"),\r\n                        DropdownItem(\"2-4\"),\r\n                        DropdownItem(\"2-5\")\r\n                    )),\r\n                    Label(\"No available items\").SetContent(Dropdown().Items(new Dropdown.Item[0])),\r\n                    Label(\"No available items with custom message\").SetContent(Dropdown(\"There's nothing to select, sorry!\").Items(new Dropdown.Item[0])),\r\n                    Label(\"Async 5 seconds delay (starts loading immediately)\").SetContent(StartLoadingAsyncDataImmediately(Dropdown().Items(GetItemsAsync))),\r\n                    Label(\"Async 5 seconds delay (will start loading when dropdown is opened)\").SetContent(Dropdown().Items(GetItemsAsync)),\r\n                    Label(\"Async 5 seconds delay that returns no items (starts loading immediately)\").SetContent(StartLoadingAsyncDataImmediately(Dropdown().Items(GetZeroItemsAsync))),\r\n                    Label(\"Async wait Google.com (need CORS)\").SetContent(Dropdown().Items(GetGoogleItemsAsync)))\r\n                )\r\n            );\r\n        }\r\n\r\n        private static Dropdown StartLoadingAsyncDataImmediately(Dropdown dropdown)\r\n        {\r\n            dropdown.LoadItemsAsync().FireAndForget();\r\n            return dropdown;\r\n        }\r\n\r\n        private async Task<Dropdown.Item[]> GetItemsAsync()\r\n        {\r\n            await Task.Delay(5000);\r\n\r\n            return new[]\r\n            {\r\n                DropdownItem(\"Header 1\").Header(),\r\n                DropdownItem(\"1-1\"),\r\n                DropdownItem(\"1-2\"),\r\n                DropdownItem(\"1-3\"),\r\n                DropdownItem(\"1-4\").Disabled(),\r\n                DropdownItem(\"1-5\"),\r\n                DropdownItem().Divider(),\r\n                DropdownItem(\"Header 2\").Header(),\r\n                DropdownItem(\"2-1\"),\r\n                DropdownItem(\"2-2\"),\r\n                DropdownItem(\"2-3\"),\r\n                DropdownItem(\"2-4\"),\r\n                DropdownItem(\"2-5\")\r\n            };\r\n        }\r\n\r\n        private async Task<Dropdown.Item[]> GetZeroItemsAsync()\r\n        {\r\n            await Task.Delay(5000);\r\n            return new Dropdown.Item[0];\r\n        }\r\n\r\n        private async Task<Dropdown.Item[]> GetGoogleItemsAsync()\r\n        {\r\n            try\r\n            {\r\n                await GetAsync(\"http://google.com\");\r\n            }\r\n            catch\r\n            {\r\n                await Task.Delay(1000);\r\n            }\r\n\r\n            return new[]\r\n            {\r\n                DropdownItem(\"Header 1\").Header(),\r\n                DropdownItem(\"1-1\"),\r\n                DropdownItem(\"1-2\"),\r\n                DropdownItem(\"1-3\"),\r\n                DropdownItem(\"1-4\").Disabled(),\r\n                DropdownItem(\"1-5\"),\r\n                DropdownItem().Divider(),\r\n                DropdownItem(\"Header 2\").Header(),\r\n                DropdownItem(\"2-1\"),\r\n                DropdownItem(\"2-2\"),\r\n                DropdownItem(\"2-3\"),\r\n                DropdownItem(\"2-4\"),\r\n                DropdownItem(\"2-5\")\r\n            };\r\n        }\r\n\r\n        public HTMLElement Render()\r\n        {\r\n            return _content.Render();\r\n        }\r\n\r\n        private static async Task<string> GetAsync(string url)\r\n        {\r\n            var xmlHttp = new XMLHttpRequest();\r\n            xmlHttp.open(\"GET\", url, true);\r\n\r\n            xmlHttp.setRequestHeader(\"Access-Control-Allow-Origin\", \"*\");\r\n\r\n            var tcs = new TaskCompletionSource<string>();\r\n\r\n            xmlHttp.onreadystatechange = (e) =>\r\n            {\r\n                if (xmlHttp.readyState == 0)\r\n                {\r\n                    tcs.SetException(new Exception(\"Request aborted\"));\r\n                }\r\n                else if (xmlHttp.readyState == 4)\r\n                {\r\n                    if (xmlHttp.status == 200 || xmlHttp.status == 201 || xmlHttp.status == 304)\r\n                    {\r\n                        tcs.SetResult(xmlHttp.responseText);\r\n                    }\r\n                    else tcs.SetException(new Exception(\"Request failed\"));\r\n                }\r\n            };\r\n\r\n            xmlHttp.send();\r\n\r\n            var tcsTask = tcs.Task;\r\n\r\n            while (true)\r\n            {\r\n                await Task.WhenAny(tcsTask, Task.Delay(150));\r\n\r\n                if (tcsTask.IsCompleted)\r\n                {\r\n                    if (tcsTask.IsFaulted)\r\n                        throw tcsTask.Exception;\r\n                    return tcsTask.Result;\r\n                }\r\n            }\r\n        }\r\n    }\r\n}";
                        case "EditableLabelSample": 
                            return "using System;\r\nusing Tesserae;\r\nusing static H5.Core.dom;\r\nusing static Tesserae.UI;\r\nusing static Tesserae.Tests.Samples.SamplesHelper;\r\n\r\nnamespace Tesserae.Tests.Samples\r\n{\r\n    public class EditableLabelSample : IComponent\r\n    {\r\n        private readonly IComponent _content;\r\n\r\n        public EditableLabelSample()\r\n        {\r\n            _content = SectionStack()\r\n                        .Title(SampleHeader(nameof(EditableLabelSample)))\r\n                        .Section(Stack()\r\n                                  .Children(SampleTitle(\"Overview\"),\r\n                                            TextBlock(\"Use for showing information that can be edited by users.\")))\r\n                      .Section(Stack()\r\n                                  .Children(SampleTitle(\"Best Practices\"),\r\n                                            Stack()\r\n                                               .Horizontal()\r\n                                               .Children(Stack()\r\n                                                         .Width(40.percent())\r\n                                                         .Children(SampleSubTitle(\"Do\"),\r\n                                                                  SampleDo(\"Use anywhere information can be edited easily by users.\")),\r\n                                                         Stack()\r\n                                                         .Width(40.percent())\r\n                                                         .Children(SampleSubTitle(\"Don't\"),\r\n                                                           SampleDont(\"Don\u2019t forget to register a OnSave() callback\")))))\r\n                      .Section(Stack().Children(\r\n                                                SampleTitle(\"Usage\"),\r\n                                                TextBlock(\"Label\").Medium(),\r\n                                                EditableLabel(\"You can click to edit me\"),\r\n                                                EditableLabel(\"You can also change the font-size\").Large(),\r\n                                                EditableLabel(\"and weight as a normal label\").Large().Bold(),\r\n                                                TextBlock(\"Text Area\").Medium(),\r\n                                                EditableArea(\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\\nUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\\nExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\").Width(300.px())\r\n                                               ));\r\n        }\r\n\r\n        public HTMLElement Render()\r\n        {\r\n            return _content.Render();\r\n        }\r\n    }\r\n}\r\n";
                        case "FileSelectorAndDropAreaSample": 
                            return "using Tesserae;\r\nusing static H5.Core.dom;\r\nusing static Tesserae.Tests.Samples.SamplesHelper;\r\nusing static Tesserae.UI;\r\n\r\nnamespace Tesserae.Tests.Samples\r\n{\r\n    public class FileSelectorAndDropAreaSample : IComponent\r\n    {\r\n        private readonly IComponent _content;\r\n        public FileSelectorAndDropAreaSample()\r\n        {\r\n            _content = SectionStack()\r\n            .Title(SampleHeader(nameof(FileSelectorAndDropAreaSample)))\r\n            .Section(Stack().Children(\r\n                SampleTitle(\"Overview\"),\r\n                TextBlock(\"Use the file selector to allow users to select a single file. Use the file dropdown area to allow drag-and-drop for one or multiple files.\")))\r\n            .Section(Stack().Children(\r\n                SampleTitle(\"Best Practices\"),\r\n                Stack().Horizontal().Children(\r\n                Stack().Width(40.percent()).Children(\r\n                    SampleSubTitle(\"Do\"),\r\n                    SampleDo(\"Filter files by supported types\"),\r\n                    SampleDo(\"Provide a message for the file drop area\"),\r\n                    SampleDo($\"Attach the {nameof(FileDropArea.OnFileDropped)} event handler\")\r\n                ),\r\n            Stack().Width(40.percent()).Children(\r\n                SampleSubTitle(\"Don't\"),\r\n                SampleDont(\"TODO\")))))\r\n                .Section(Stack().Children(\r\n                    SampleTitle(\"Usage\"),\r\n                    SampleSubTitle(\"File Selector\"),\r\n                    Label(\"Selected file size: \").Inline().SetContent(TextBlock(\"\").Var(out var size)),\r\n                    FileSelector().OnFileSelected((fs, e) => size.Text = fs.SelectedFile.size.ToString() + \" bytes\"),\r\n                    FileSelector().SetPlaceholder(\"You must select a zip file\").Required().SetAccepts(\".zip\").OnFileSelected((fs,e) => size.Text = fs.SelectedFile.size.ToString() + \" bytes\"),\r\n                    FileSelector().SetPlaceholder(\"Please select any image\").SetAccepts(\"image/*\").OnFileSelected((fs, e) => size.Text = fs.SelectedFile.size.ToString() + \" bytes\"),\r\n                    SampleSubTitle(\"File Drop Area\"),\r\n                    Label(\"Dropped Files: \").SetContent(Stack().Var(out var droppedFiles)),\r\n                    FileDropArea().OnFileDropped((s, e) => droppedFiles.Add(TextBlock(e.name).Small())).Multiple()\r\n                ));\r\n        }\r\n\r\n        public HTMLElement Render() => _content.Render();\r\n    }\r\n}";
                        case "FloatSample": 
                            return "using System;\r\nusing Tesserae;\r\nusing static H5.Core.dom;\r\nusing static Tesserae.UI;\r\nusing static Tesserae.Tests.Samples.SamplesHelper;\r\n\r\nnamespace Tesserae.Tests.Samples\r\n{\r\n    public class FloatSample : IComponent\r\n    {\r\n        private readonly IComponent _content;\r\n\r\n        public FloatSample()\r\n        {\r\n            _content = SectionStack()\r\n                .Title(SampleHeader(nameof(FloatSample)))\r\n                    .Section(Stack().Children(\r\n                        SampleTitle(\"Overview\"),\r\n                        TextBlock(\"Floats are used to create absolute-positioned overlays within other containers\"))\r\n                )\r\n                .Section(Stack().WidthStretch().Children(\r\n                    SampleTitle(\"Best Practices\"),\r\n                        Stack().WidthStretch().Horizontal().Children(\r\n                            Stack().WidthStretch().Children(\r\n                                SampleSubTitle(\"Do\"),\r\n                                SampleDo(\"Make sure you're not covering anything else under your container\")\r\n                            ),\r\n                            Stack().WidthStretch().Children(\r\n                                SampleSubTitle(\"Don't\"),\r\n                                SampleDont(\"Don't forget to add .Relative() to the parent Stack or Grid where you place a Float component!\")\r\n                            ))\r\n                ))\r\n                .Section(\r\n                    Stack().Children(\r\n                        SampleTitle(\"Usage\"),\r\n                        TextBlock(\"Possible Positions\").Medium(),\r\n                        Stack().Relative().Horizontal().WS().Height(400.px()).Children(\r\n                            Float(Button(\"TopLeft\"), Float.Position.TopLeft),\r\n                            Float(Button(\"TopMiddle\"), Float.Position.TopMiddle),\r\n                            Float(Button(\"TopRight\"), Float.Position.TopRight),\r\n                            Float(Button(\"LeftCenter\"), Float.Position.LeftCenter),\r\n                            Float(Button(\"Center\"), Float.Position.Center),\r\n                            Float(Button(\"RightCenter\"), Float.Position.RightCenter),\r\n                            Float(Button(\"BottomLeft\"), Float.Position.BottomLeft),\r\n                            Float(Button(\"BottonMiddle\"), Float.Position.BottonMiddle),\r\n                            Float(Button(\"BottomRight\"), Float.Position.BottomRight)\r\n                        )));\r\n        }\r\n\r\n        public HTMLElement Render()\r\n        {\r\n            return _content.Render();\r\n        }\r\n    }\r\n}\r\n";
                        case "HorizontalSeparatorSample": 
                            return "using System;\r\nusing Tesserae;\r\nusing static H5.Core.dom;\r\nusing static Tesserae.UI;\r\nusing static Tesserae.Tests.Samples.SamplesHelper;\r\n\r\nnamespace Tesserae.Tests.Samples\r\n{\r\n    public class HorizontalSeparatorSample : IComponent\r\n    {\r\n        private readonly IComponent _content;\r\n\r\n        public HorizontalSeparatorSample()\r\n        {\r\n            _content = SectionStack()\r\n            .Title(SampleHeader(nameof(HorizontalSeparatorSample)))\r\n            .Section(Stack().Children(\r\n                SampleTitle(\"Overview\"),\r\n                TextBlock(\"A separator visually separates content into groups.\"),\r\n                TextBlock(\"You can render content in the separator by specifying the component's children. The component's children can be plain text or a component like Icon. The content is center-aligned by default.\")))\r\n            .Section(Stack().Children(\r\n                SampleTitle(\"Best Practices\"),\r\n                Stack().Horizontal().Children(\r\n                Stack().Width(40.percent()).Children(\r\n                    SampleSubTitle(\"Do\"),\r\n                    SampleDo(\"Explain what is the group this separator introduces\"),\r\n                    SampleDo(\"Be short and concise.\")\r\n                    ),\r\n                Stack().Width(40.percent()).Children(\r\n                    SampleSubTitle(\"Don't\"),\r\n                    SampleDont(\"Use long group names\")))))\r\n            .Section(Stack().Children(\r\n                    SampleTitle(\"Usage\"),\r\n                    HorizontalSeparator(\"Center\"),\r\n                    HorizontalSeparator(\"Left\").Left(),\r\n                    HorizontalSeparator(\"Right\").Right(),\r\n                    SampleTitle(\"Custom Separators\"),\r\n                    HorizontalSeparator(Stack().Horizontal().Children(Icon(\"las la-plane\").AlignCenter().PaddingRight(8.px()), TextBlock(\"Custom Center\").SemiBold().MediumPlus().AlignCenter())).Primary(),\r\n                    HorizontalSeparator(Stack().Horizontal().Children(Icon(\"las la-plane\").AlignCenter().PaddingRight(8.px()), TextBlock(\"Custom Left\").SemiBold().MediumPlus().AlignCenter())).Primary().Left(),\r\n                    HorizontalSeparator(Stack().Horizontal().Children(Icon(\"las la-plane\").AlignCenter().PaddingRight(8.px()), TextBlock(\"Custom Right\").SemiBold().MediumPlus().AlignCenter())).Primary().Right()));\r\n        }\r\n\r\n        public HTMLElement Render()\r\n        {\r\n            return _content.Render();\r\n        }\r\n    }\r\n}\r\n";
                        case "InfiniteScrollingListSample": 
                            return "using System.Collections.Generic;\r\nusing System.Linq;\r\nusing System.Threading.Tasks;\r\nusing Tesserae;\r\nusing static Tesserae.Tests.Samples.SamplesHelper;\r\nusing static Tesserae.UI;\r\nusing static H5.Core.dom;\r\n\r\nnamespace Tesserae.Tests.Samples\r\n{\r\n    public class InfiniteScrollingListSample : IComponent\r\n    {\r\n        private readonly IComponent _content;\r\n\r\n        public InfiniteScrollingListSample()\r\n        {\r\n\r\n            var page = 1;\r\n            var pageGrid = 1;\r\n            _content = SectionStack().WidthStretch()\r\n               .Title(SampleHeader(nameof(InfiniteScrollingListSample)))\r\n               .Section(\r\n                    Stack()\r\n                       .Children(\r\n                            SampleTitle(\"Overview\"),\r\n                            TextBlock(\"List provides a base component for rendering paginates sets of items. \" +\r\n                                      \"It is agnostic of the tile component used, and selection \" +\r\n                                      \"management. These concerns can be layered separately.\")\r\n                               .PaddingBottom(16.px()),\r\n                            TextBlock(\"Performance is adequate for smaller lists, for large number of items use VirtualizedList.\")\r\n                               .PaddingBottom(16.px())))\r\n               .Section(\r\n                    Stack()\r\n                       .Children(\r\n                            SampleTitle(\"Usage\"),\r\n                            TextBlock(\"Basic List with VisibilitySensor\")\r\n                               .Medium()\r\n                               .PaddingBottom(16.px()),\r\n                            InfiniteScrollingList(GetSomeItems(20, 0, \" initial\"), async () => await GetSomeItemsAsync(20, page++)).Height(500.px()).PaddingBottom(32.px()),\r\n                            TextBlock(\"Basic Grid List with VisibilitySensor\")\r\n                               .Medium()\r\n                               .PaddingBottom(16.px()),\r\n                            InfiniteScrollingList(GetSomeItems(20, 0, \" initial\"), async () => await GetSomeItemsAsync(20, pageGrid++), 33.percent(), 33.percent(), 34.percent()).Height(500.px()).PaddingBottom(32.px())\r\n                        ));\r\n        }\r\n\r\n        public HTMLElement Render()\r\n        {\r\n            return _content.Render();\r\n        }\r\n\r\n        private IComponent[] GetSomeItems(int count, int page = -1, string txt = \"\")\r\n        {\r\n            var pageString = page > 0 ? page.ToString() : \"\";\r\n            return Enumerable\r\n               .Range(1, count)\r\n               .Select(number =>\r\n                {\r\n                    var card = Card(TextBlock($\"Lorem Ipsum {pageString} / {number}\" + txt).NonSelectable()).MinWidth(200.px());\r\n                    return card;\r\n                })\r\n               .ToArray();\r\n        }\r\n\r\n        private async Task<IComponent[]> GetSomeItemsAsync(int count, int page = -1, string txt = \"\")\r\n        {\r\n            await Task.Delay(200);\r\n            return GetSomeItems(count, page, txt);\r\n        }\r\n    }\r\n}";
                        case "ItemsListSample": 
                            return "using System.Collections.Generic;\r\nusing System.Linq;\r\nusing Tesserae;\r\nusing static Tesserae.Tests.Samples.SamplesHelper;\r\nusing static Tesserae.UI;\r\nusing static H5.Core.dom;\r\n\r\nnamespace Tesserae.Tests.Samples\r\n{\r\n    public class ItemsListSample : IComponent\r\n    {\r\n        private readonly IComponent _content;\r\n\r\n        public ItemsListSample()\r\n        {\r\n            var obsList = new ObservableList<IComponent>();\r\n\r\n            var vs = VisibilitySensor((v) =>\r\n            {\r\n                obsList.Remove(v);\r\n                obsList.AddRange(GetSomeItems(20));\r\n                v.Reset();\r\n                obsList.Add(v);\r\n            });\r\n\r\n            obsList.AddRange(GetSomeItems(10));\r\n            obsList.Add(vs);\r\n            _content = SectionStack().WidthStretch()\r\n                        .Title(SampleHeader(nameof(ItemsListSample)))\r\n                    .Section(\r\n                        Stack()\r\n                            .Children(\r\n                                SampleTitle(\"Overview\"),\r\n                                TextBlock(\"List provides a base component for rendering small sets of items. \" +\r\n                                          \"It is agnostic of the tile component used, and selection \" +\r\n                                          \"management. These concerns can be layered separately.\")\r\n                                    .PaddingBottom(16.px()),\r\n                                TextBlock(\"Performance is adequate for smaller lists, for large number of items use VirtualizedList.\")\r\n                                    .PaddingBottom(16.px())))\r\n                    .Section(\r\n                        Stack()\r\n                            .Children(\r\n                                SampleTitle(\"Usage\"),\r\n                                TextBlock(\"Basic List\")\r\n                                    .Medium()\r\n                                    .PaddingBottom(16.px()),\r\n                                ItemsList(GetSomeItems(10)).PaddingBottom(16.px()).Height(500.px()).PaddingBottom(32.px()),\r\n                                TextBlock(\"Basic List with columns\")\r\n                                    .Medium()\r\n                                    .PaddingBottom(16.px()),\r\n                                ItemsList(GetSomeItems(100), 25.percent(), 25.percent(), 25.percent(), 25 .percent()).Height(500.px()).PaddingBottom(32.px()),\r\n                                TextBlock(\"Basic List with VisibilitySensor\")\r\n                                    .Medium()\r\n                                    .PaddingBottom(16.px()),\r\n                                ItemsList(obsList, 25.percent(), 25.percent(), 25.percent(), 25.percent()).Height(500.px()).PaddingBottom(32.px()),\r\n                                TextBlock(\"Basic List with Empty List Message \")\r\n                                    .Medium()\r\n                                    .PaddingBottom(16.px()),\r\n                                ItemsList(new IComponent[0], 25.percent(), 25.percent(), 25.percent(), 25.percent())\r\n                                    .WithEmptyMessage(() => BackgroundArea(Card(TextBlock(\"Empty list\").Padding(16.px()))).WidthStretch().HeightStretch().MinHeight(100.px()))\r\n                                    .Height(500.px())));\r\n        }\r\n\r\n        public HTMLElement Render()\r\n        {\r\n            return _content.Render();\r\n        }\r\n\r\n        private IComponent[] GetSomeItems(int count)\r\n        {\r\n            return Enumerable\r\n                .Range(1, count)\r\n                .Select(number => Card(TextBlock($\"Lorem Ipsum {number}\").NonSelectable()).MinWidth(200.px()))\r\n                .ToArray();\r\n        }\r\n    }\r\n}\r\n";
                        case "LabelSample": 
                            return "using System;\r\nusing Tesserae;\r\nusing static H5.Core.dom;\r\nusing static Tesserae.UI;\r\nusing static Tesserae.Tests.Samples.SamplesHelper;\r\n\r\nnamespace Tesserae.Tests.Samples\r\n{\r\n    public class LabelSample : IComponent\r\n    {\r\n        private readonly IComponent _content;\r\n\r\n        public LabelSample()\r\n        {\r\n            _content = SectionStack()\r\n                        .Title(SampleHeader(nameof(LabelSample)))\r\n                        .Section(Stack().Children(\r\n                            SampleTitle(\"Overview\"),\r\n                            TextBlock(\"Labels give a name or title to a component or group of components. Labels should be in close proximity to the component or group they are paired with. Some components, such as TextField, Dropdown, or Toggle, already have Labels incorporated, but other components may optionally add a Label if it helps inform the user of the component\u2019s purpose.\")))\r\n                        .Section(Stack().Children(\r\n                            SampleTitle(\"Best Practices\"),\r\n                            Stack().Horizontal().Children(\r\n                            Stack().Width(40.percent()).Children(\r\n                                SampleSubTitle(\"Do\"),\r\n                                SampleDo(\"Use sentence casing, e.g. \u201cFirst name\u201d.\"),\r\n                                SampleDo(\"Be short and concise.\"),\r\n                                SampleDo(\"When adding a Label to components, use the text as a noun or short noun phrase.\")\r\n                                ),\r\n                        Stack().Width(40.percent()).Children(\r\n                            SampleSubTitle(\"Don't\"),\r\n                            SampleDo(\"Use Labels as instructional text, e.g. \u201cClick to get started\u201d.\"),\r\n                            SampleDo(\"Don\u2019t use full sentences or complex punctuation (colons, semicolons, etc.).\")))))\r\n                            .Section(Stack().Children(\r\n                                SampleTitle(\"Usage\"),\r\n                                Label(\"I'm Label\"),\r\n                                Label(\"I'm a disabled Label\").Disabled(),\r\n                                Label(\"I'm a required Label\").Required(),\r\n                                Label(\"I'm a primary Label\").Primary(),\r\n                                Label(\"I'm a secondary Label\").Secondary(),\r\n                                Label(\"I'm a tiny Label\").Regular().Tiny(),\r\n                                Label(\"A Label for An Input\").SetContent(TextBox()),\r\n\r\n                                TextBlock(\"Inline without auto-width\").Medium().PaddingTop(16.px()).PaddingBottom(8.px()),\r\n                                Stack().Children(\r\n                                    Label(\"Lbl\").Inline().SetContent(TextBox()),\r\n                                    Label(\"Label\").Inline().SetContent(TextBox()),\r\n                                    Label(\"Bigger Label\").Inline().SetContent(TextBox()),\r\n                                    Label(\"The Biggest Label\").Inline().SetContent(TextBox())\r\n                                ),\r\n\r\n                                TextBlock(\"Inline with auto-width\").Medium().PaddingTop(16.px()).PaddingBottom(8.px()),\r\n                                Stack().Children(\r\n                                    Label(\"Lbl\").Inline().AutoWidth().SetContent(TextBox()),\r\n                                    Label(\"Label\").Inline().AutoWidth().SetContent(TextBox()),\r\n                                    Label(\"Bigger Label\").Inline().AutoWidth().SetContent(TextBox()),\r\n                                    Label(\"The Biggest Label\").Inline().AutoWidth().SetContent(TextBox())\r\n                                ),\r\n\r\n                                TextBlock(\"Inline with auto-width, aligned right\").Medium().PaddingTop(16.px()).PaddingBottom(8.px()),\r\n                                Stack().Children(\r\n                                    Label(\"Lbl\").Inline().AutoWidth(alignRight:true).SetContent(TextBox()),\r\n                                    Label(\"Label\").Inline().AutoWidth(alignRight: true).SetContent(TextBox()),\r\n                                    Label(\"Bigger Label\").Inline().AutoWidth(alignRight: true).SetContent(TextBox()),\r\n                                    Label(\"The Biggest Label\").Inline().AutoWidth(alignRight: true).SetContent(TextBox())\r\n                                )\r\n\r\n                                ));\r\n        }\r\n\r\n        public HTMLElement Render()\r\n        {\r\n            return _content.Render();\r\n        }\r\n    }\r\n}\r\n";
                        case "LayerSample": 
                            return "using Tesserae;\r\nusing static H5.Core.dom;\r\nusing static Tesserae.Tests.Samples.SamplesHelper;\r\nusing static Tesserae.UI;\r\n\r\nnamespace Tesserae.Tests.Samples\r\n{\r\n    public class LayerSample : IComponent\r\n    {\r\n        private readonly IComponent _content;\r\n        public LayerSample()\r\n        {\r\n            var layer = Layer();\r\n            var layerHost = LayerHost();\r\n            _content = SectionStack()\r\n                        .Title(SampleHeader(nameof(LayerSample)))\r\n                        .Section(Stack().Children(\r\n                            SampleTitle(\"Overview\"),\r\n                            TextBlock(\"A Layer is a technical component that does not have specific Design guidance.\"),\r\n                            TextBlock(\"Layers are used to render content outside of a DOM tree, at the end of the document. This allows content to escape traditional boundaries caused by \\\"overflow: hidden\\\" css rules and keeps it on the top without using z-index rules. This is useful for example in ContextualMenu and Tooltip scenarios, where the content should always overlay everything else.\")))\r\n                        .Section(Stack().Children(\r\n                            SampleTitle(\"Usage\"),\r\n                            TextBlock(\"Basic layered content\").Medium(),\r\n                            layer.Content(Stack().Horizontal().Children(TextBlock(\"This is example layer content.\"),Toggle(), Toggle(), Toggle())),\r\n                                Toggle(\"Toggle Component Layer\").OnChange((s, e) => layer.IsVisible = s.IsChecked),\r\n                                TextBlock(\"Using LayerHost to control projection\").Medium(),\r\n                                Toggle(\"Show on Host\").OnChange((s, e) => layer.Host = s.IsChecked ? layerHost : null),\r\n                                layerHost));\r\n        }\r\n\r\n        public HTMLElement Render() => _content.Render();\r\n    }\r\n}";
                        case "LineAwesomeSample": 
                            return "using System;\r\nusing Tesserae;\r\nusing static H5.Core.dom;\r\nusing static Tesserae.UI;\r\nusing static Tesserae.Tests.Samples.SamplesHelper;\r\nusing System.Collections.Generic;\r\nusing System.Linq;\r\n\r\nnamespace Tesserae.Tests.Samples\r\n{\r\n    public class LineAwesomeSample : IComponent\r\n    {\r\n        private readonly IComponent _content;\r\n\r\n        public LineAwesomeSample()\r\n        {\r\n            //TODO: Add dropwdown to select icon weight\r\n\r\n            var searchAsYouType = TextBlock(\"search for icons\");\r\n            _content = SectionStack()\r\n            .Title(SampleHeader(nameof(LineAwesomeSample)))\r\n            .Section(Stack().Children(\r\n                SampleTitle(\"Overview\"),\r\n                TextBlock(\"Tesserae integrates the LineAwesome icons as part of the package, with an auto-generated strongly typed enum for them.\")))\r\n            .Section(Stack().Children(\r\n                SampleTitle(\"Best Practices\"),\r\n                Stack().Horizontal().Children(\r\n                Stack().Width(40.percent()).Children(\r\n                    SampleSubTitle(\"Do\"),\r\n                    SampleDo(\"TODO\")\r\n                ),\r\n                Stack().Width(40.percent()).Children(\r\n                    SampleSubTitle(\"Don't\"),\r\n                    SampleDont(\"TODO\")\r\n                )\r\n            )))\r\n            .Section(Stack().Children(\r\n                SampleTitle(\"Usage:\"),\r\n                TextBlock($\"enum {nameof(LineAwesome)}:\").Medium(),\r\n                SearchableList(GetAllIcons().ToArray(), 25.percent(), 25.percent(), 25.percent(), 25.percent()))).PaddingBottom(32.px()).MaxHeight(100.vh());\r\n        }\r\n\r\n        public HTMLElement Render()\r\n        {\r\n            return _content.Render();\r\n        }\r\n\r\n        private IEnumerable<IconItem> GetAllIcons()\r\n        {\r\n            var names = Enum.GetNames(typeof(LineAwesome));\r\n            LineAwesome[] values = (LineAwesome[])Enum.GetValues(typeof(LineAwesome));\r\n\r\n            for (int i = 0; i < values.Length; i++)\r\n            {\r\n                yield return new IconItem(values[i], names[i]);\r\n            }\r\n        }\r\n\r\n        private class IconItem : ISearchableItem\r\n        {\r\n            private readonly string _value;\r\n            private readonly IComponent component;\r\n            public IconItem(LineAwesome icon, string name)\r\n            {\r\n                name = ToValidName(name.Substring(3));\r\n                _value = name + \" \" + icon.ToString();\r\n                component = Stack().Horizontal().Children(Icon(icon, size: TextSize.Large).MinWidth(36.px()).AlignCenter(), TextBlock($\"{name}\").Title(icon.ToString()).Wrap().AlignCenter()).PaddingBottom(4.px());\r\n            }\r\n\r\n            public bool IsMatch(string searchTerm) => _value.Contains(searchTerm);\r\n\r\n            public IComponent Render() => component;\r\n        }\r\n\r\n\r\n        //Copy of the logic in the generator code, as we don't have the enum names anymore on  Enum.GetNames(typeof(LineAwesome))\r\n        private static string ToValidName(string icon)\r\n        {\r\n            var words = icon.Split(new char[] { '-' }, StringSplitOptions.RemoveEmptyEntries)\r\n                            .Select(i => i.Substring(0, 1).ToUpper() + i.Substring(1))\r\n                            .ToArray();\r\n\r\n            var name = string.Join(\"\", words);\r\n            if (char.IsDigit(name[0]))\r\n            {\r\n                return \"_\" + name;\r\n            }\r\n            else\r\n            {\r\n                return name;\r\n            }\r\n        }\r\n    }\r\n}\r\n";
                        case "ModalSample": 
                            return "using Tesserae;\r\nusing static H5.Core.dom;\r\nusing static Tesserae.Tests.Samples.SamplesHelper;\r\nusing static Tesserae.UI;\r\n\r\nnamespace Tesserae.Tests.Samples\r\n{\r\n    public class ModalSample : IComponent\r\n    {\r\n        private readonly IComponent _content;\r\n\r\n        public ModalSample()\r\n        {\r\n            var container = Raw();\r\n\r\n            Modal(\"Lorem Ipsum\")\r\n                .Var(out var modal)\r\n                .LightDismiss()\r\n                .Width(60.vw())\r\n                .Height(60.vh())\r\n                .SetFooter(TextBlock(\"This is a footer note\").SemiBold().MediumPlus())\r\n                .Content(Stack().Children(\r\n                            TextBlock(\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lorem nulla, malesuada ut sagittis sit amet, vulputate in leo. Maecenas vulputate congue sapien eu tincidunt. Etiam eu sem turpis. Fusce tempor sagittis nunc, ut interdum ipsum vestibulum non. Proin dolor elit, aliquam eget tincidunt non, vestibulum ut turpis. In hac habitasse platea dictumst. In a odio eget enim porttitor maximus. Aliquam nulla nibh, ullamcorper aliquam placerat eu, viverra et dui. Phasellus ex lectus, maximus in mollis ac, luctus vel eros. Vivamus ultrices, turpis sed malesuada gravida, eros ipsum venenatis elit, et volutpat eros dui et ante. Quisque ultricies mi nec leo ultricies mollis. Vivamus egestas volutpat lacinia. Quisque pharetra eleifend efficitur. \"),\r\n                            TextBlock(\"Mauris at nunc eget lectus lobortis facilisis et eget magna. Vestibulum venenatis augue sapien, rhoncus faucibus magna semper eget. Proin rutrum libero sagittis sapien aliquet auctor. Suspendisse tristique a magna at facilisis. Duis rhoncus feugiat magna in rutrum. Suspendisse semper, dolor et vestibulum lacinia, nunc felis malesuada ex, nec hendrerit justo ex et massa. Quisque quis mollis nulla. Nam commodo est ornare, rhoncus odio eu, pharetra tellus. Nunc sed velit mi.\"),\r\n                            TextBlock(\"Sed condimentum ultricies turpis convallis pharetra. Sed sagittis quam pharetra luctus porttitor. Cras vel consequat lectus. Sed nec fringilla urna, a aliquet libero. Aenean sed nisl purus. Vivamus vulputate felis et odio efficitur suscipit. Ut volutpat dictum lectus, ac rutrum massa accumsan at. Sed pharetra auctor finibus. In augue libero, commodo vitae nisi non, sagittis convallis ante. Phasellus malesuada eleifend mollis. Curabitur ultricies leo ac metus venenatis elementum.\"),\r\n                            TextBlock(\"Aenean egestas quam ut erat commodo blandit. Mauris ante nisl, pellentesque sed venenatis nec, aliquet sit amet enim. Praesent vitae diam non diam aliquet tristique non ut arcu. Pellentesque et ultrices eros. Fusce diam metus, mattis eu luctus nec, facilisis vel erat. Nam a lacus quis tellus gravida euismod. Nulla sed sem eget tortor cursus interdum. Sed vehicula tristique ultricies. Aenean libero purus, mollis quis massa quis, eleifend dictum massa. Fusce eu sapien sit amet odio lacinia placerat. Mauris varius risus sed aliquet cursus. Aenean lectus magna, tincidunt sit amet sodales a, volutpat ac leo. Morbi nisl sapien, tincidunt sit amet mauris quis, sollicitudin auctor est.\"),\r\n                            TextBlock(\"Nam id mi justo. Nam vehicula vulputate augue, ac pretium enim rutrum ultricies. Sed aliquet accumsan varius. Quisque ac auctor ligula. Fusce fringilla, odio et dignissim iaculis, est lacus ultrices risus, vitae condimentum enim urna eu nunc. In risus est, mattis non suscipit at, mattis ut ante. Maecenas consectetur urna vel erat maximus, non molestie massa consequat. Duis a feugiat nibh. Sed a hendrerit diam, a mattis est. In augue dolor, faucibus vel metus at, convallis rhoncus dui.\"),\r\n                            Label(\"Light Dismiss\").Inline().AutoWidth().SetContent(Toggle().OnChange((s, e) => modal.CanLightDismiss = s.IsChecked).Checked(modal.CanLightDismiss)),\r\n                            Label(\"Is draggable\").Inline().AutoWidth().SetContent(Toggle().OnChange((s, e) => modal.IsDraggable = s.IsChecked).Checked(modal.IsDraggable)),\r\n                            Label(\"Is dark overlay\").Inline().AutoWidth().SetContent(Toggle().OnChange((s, e) => modal.IsDark = s.IsChecked).Checked(modal.IsDark)),\r\n                            Label(\"Is non-blocking\").Inline().AutoWidth().SetContent(Toggle().OnChange((s, e) => modal.IsNonBlocking = s.IsChecked).Checked(modal.IsNonBlocking)),\r\n                            Label(\"Hide close button\").Inline().AutoWidth().SetContent(Toggle().OnChange((s, e) => modal.WillShowCloseButton = !s.IsChecked).Checked(!modal.WillShowCloseButton)),\r\n                            Label(\"Open a dialog from here\").Var(out var lbl).SetContent(Button(\"Open\").OnClick((s, e) => Dialog(\"Dialog over Modal\").Content(TextBlock(\"Hello World!\")).YesNo(() => lbl.Text = \"Yes\", () => lbl.Text = \"No\")))));\r\n\r\n            _content = SectionStack()\r\n                        .Title(SampleHeader(nameof(ModalSample)))\r\n                        .Section(Stack().Children(\r\n                            SampleTitle(\"Overview\"),\r\n                            TextBlock(\"Modals are temporary, modal UI overlay that generally provide contextual app information or require user confirmation/input, or can be used to advertise new app features. In some cases, Modals block interactions with the web page or application until being explicitly dismissed. They can be used for lightweight creation or edit tasks and simple management tasks, or for hosting heavier temporary content.\"),\r\n                            TextBlock(\"For usage requiring a quick choice from the user, Dialog may be a more appropriate control.\")))\r\n                        .Section(Stack().Children(\r\n                            SampleTitle(\"Best Practices\"),\r\n                            Stack().Horizontal().Children(\r\n                                Stack().Width(40.percent()).Children(\r\n                                    SampleSubTitle(\"Do\"),\r\n                                    SampleDo(\"Use Modals for actionable interactions, such as needing the user to provide information or change settings.\"),\r\n                                    SampleDo(\"When possible, try a non-blocking Modal before resorting to a blocking Modal.\"),\r\n                                    SampleDo(\"Always have at least one focusable element inside a Modal.\")),\r\n                            Stack().Width(40.percent()).Children(\r\n                                SampleSubTitle(\"Don't\"),\r\n                                SampleDont(\"Don\u2019t overuse Modals. In some cases they can be perceived as interrupting workflow, and too many can be a bad user experience.\")))))\r\n                        .Section(Stack().Children(\r\n                            SampleTitle(\"Usage\"),\r\n                            Button(\"Open Modal\").OnClick((s, e) => modal.Show()),\r\n                            Button(\"Open Modal from top right\").OnClick((s, e) => modal.ShowAt(fromRight: 16.px(), fromTop: 16.px())),\r\n                            Button(\"Open Modal with minimum size\").OnClick((s, e) => Modal().CenterContent().LightDismiss().Dark().Content(TextBlock(\"small content\").Tiny()).MinHeight(50.vh()).MinWidth(50.vw()).Show()),\r\n                            \r\n                            SampleTitle(\"Embedded Modal\"),\r\n                            Button(\"Open Modal Below\").OnClick((s, e) => container.Content(Modal(\"Embedded Modal\").CenterContent().LightDismiss().Dark().Content(TextBlock(\"hosted small content\").Tiny()).MinHeight(30.vh()).MinWidth(50.vw()).ShowEmbedded())),\r\n                            container\r\n                            ));\r\n        }\r\n\r\n        public HTMLElement Render()\r\n        {\r\n            return _content.Render();\r\n        }\r\n    }\r\n}";
                        case "OverflowSetSample": 
                            return "using System;\r\nusing Tesserae;\r\nusing static H5.Core.dom;\r\nusing static Tesserae.UI;\r\nusing static Tesserae.Tests.Samples.SamplesHelper;\r\n\r\nnamespace Tesserae.Tests.Samples\r\n{\r\n    public class OverflowSetSample : IComponent\r\n    {\r\n        private readonly IComponent _content;\r\n\r\n        public OverflowSetSample()\r\n        {\r\n            _content = SectionStack()\r\n            .Title(SampleHeader(nameof(OverflowSetSample)))\r\n            .Section(Stack().Children(\r\n                SampleTitle(\"Overview\"),\r\n                TextBlock(\"Breadcrumbs should be used as a navigational aid in your app or site. They indicate the current page\u2019s location within a hierarchy and help the user understand where they are in relation to the rest of that hierarchy. They also afford one-click access to higher levels of that hierarchy.\"),\r\n                TextBlock(\"Breadcrumbs are typically placed, in horizontal form, under the masthead or navigation of an experience, above the primary content area.\")))\r\n            .Section(Stack().Children(\r\n                SampleTitle(\"Best Practices\"),\r\n                Stack().Horizontal().Children(\r\n                Stack().Width(40.percent()).Children(\r\n                    SampleSubTitle(\"Do\"),\r\n                    SampleDo(\"Place Breadcrumbs at the top of a page, above a list of items, or above the main content of a page.\")\r\n                    ),\r\n            Stack().Width(40.percent()).Children(\r\n                SampleSubTitle(\"Don't\"),\r\n                SampleDont(\"Don't use Breadcrumbs as a primary way to navigate an app or site.\")))))\r\n                .Section(Stack().Children(\r\n                    SampleTitle(\"Usage\"),\r\n                    Label(\"Selected: \").SetContent(TextBlock().Var(out var msg)),\r\n                    TextBlock(\"All Visible\").Medium(),\r\n                    OverflowSet().PaddingTop(16.px()).PaddingBottom(16.px()).Items(\r\n                        Button(\"Folder 1\").Link().OnClick((s,e) => msg.Text(\"Folder 1\")),\r\n                        Button(\"Folder 2\").Link().OnClick((s, e) => msg.Text(\"Folder 2\")).Disabled(),\r\n                        Button(\"Folder 3\").Link().OnClick((s, e) => msg.Text(\"Folder 3\")),\r\n                        Button(\"Folder 4\").Link().OnClick((s, e) => msg.Text(\"Folder 4\")),\r\n                        Button(\"Folder 5\").Link().OnClick((s, e) => msg.Text(\"Folder 5\")),\r\n                        Button(\"Folder 6\").Link().OnClick((s, e) => msg.Text(\"Folder 6\"))),\r\n\r\n                    TextBlock(\"All Visible, Small\").Medium(),\r\n                    OverflowSet().Small().PaddingTop(16.px()).PaddingBottom(16.px()).Items(\r\n                        Button(\"Folder 1\").Link().OnClick((s, e) => msg.Text(\"Folder 1\")),\r\n                        Button(\"Folder 2\").Link().OnClick((s, e) => msg.Text(\"Folder 2\")).Disabled(),\r\n                        Button(\"Folder 3\").Link().OnClick((s, e) => msg.Text(\"Folder 3\")),\r\n                        Button(\"Folder 4\").Link().OnClick((s, e) => msg.Text(\"Folder 4\")),\r\n                        Button(\"Folder 5\").Link().OnClick((s, e) => msg.Text(\"Folder 5\")),\r\n                        Button(\"Folder 6\").Link().OnClick((s, e) => msg.Text(\"Folder 6\"))),\r\n\r\n                    TextBlock(\"Collapse 200px\").Medium(),\r\n                    OverflowSet().PaddingTop(16.px()).PaddingBottom(16.px()).MaxWidth(200.px()).Items(\r\n                        Button(\"Folder 1\").Link().SetIcon(\"las la-acorn\").OnClick((s, e) => msg.Text(\"Folder 1\")),\r\n                        Button(\"Folder 2\").Link().SetIcon(\"las la-corn\").OnClick((s, e) => msg.Text(\"Folder 2\")),\r\n                        Button(\"Folder 3\").Link().SetIcon(\"las la-bacon\").OnClick((s, e) => msg.Text(\"Folder 3\")),\r\n                        Button(\"Folder 4\").Link().SetIcon(\"las la-taco\").OnClick((s, e) => msg.Text(\"Folder 4\")),\r\n                        Button(\"Folder 5\").Link().SetIcon(\"las la-pie\").OnClick((s, e) => msg.Text(\"Folder 5\")),\r\n                        Button(\"Folder 6\").Link().SetIcon(\"las la-popcorn\").OnClick((s, e) => msg.Text(\"Folder 6\")))\r\n                    ,\r\n\r\n                    TextBlock(\"Collapse 200px, Small\").Medium(),\r\n                    OverflowSet().PaddingTop(16.px()).PaddingBottom(16.px()).Small().MaxWidth(200.px()).Items(\r\n                        Button(\"Folder 1\").Link().SetIcon(\"las la-acorn\").OnClick((s, e) => msg.Text(\"Folder 1\")),\r\n                        Button(\"Folder 2\").Link().SetIcon(\"las la-corn\").OnClick((s, e) => msg.Text(\"Folder 2\")),\r\n                        Button(\"Folder 3\").Link().SetIcon(\"las la-bacon\").OnClick((s, e) => msg.Text(\"Folder 3\")),\r\n                        Button(\"Folder 4\").Link().SetIcon(\"las la-taco\").OnClick((s, e) => msg.Text(\"Folder 4\")),\r\n                        Button(\"Folder 5\").Link().SetIcon(\"las la-pie\").OnClick((s, e) => msg.Text(\"Folder 5\")),\r\n                        Button(\"Folder 6\").Link().SetIcon(\"las la-popcorn\").OnClick((s, e) => msg.Text(\"Folder 6\")))\r\n                    ,\r\n                    TextBlock(\"Collapse 300px\").Medium(),\r\n                    OverflowSet().PaddingTop(16.px()).PaddingBottom(16.px()).MaxWidth(300.px()).Items(\r\n                        Button(\"Folder 1\").Link().OnClick((s, e) => msg.Text(\"Folder 1\")),\r\n                        Button(\"Folder 2\").Link().OnClick((s, e) => msg.Text(\"Folder 2\")),\r\n                        Button(\"Folder 3\").Link().OnClick((s, e) => msg.Text(\"Folder 3\")),\r\n                        Button(\"Folder 4\").Link().OnClick((s, e) => msg.Text(\"Folder 4\")),\r\n                        Button(\"Folder 5\").Link().OnClick((s, e) => msg.Text(\"Folder 5\")),\r\n                        Button(\"Folder 6\").Link().OnClick((s, e) => msg.Text(\"Folder 6\"))),\r\n\r\n                    TextBlock(\"Collapse 300px, from second, custom chevron\").Medium(),\r\n                    OverflowSet().PaddingTop(16.px()).PaddingBottom(16.px()).MaxWidth(300.px()).SetOverflowIndex(1).Items(\r\n                        Button(\"Folder 1\").Link().OnClick((s, e) => msg.Text(\"Folder 1\")),\r\n                        Button(\"Folder 2\").Link().OnClick((s, e) => msg.Text(\"Folder 2\")),\r\n                        Button(\"Folder 3\").Link().OnClick((s, e) => msg.Text(\"Folder 3\")),\r\n                        Button(\"Folder 4\").Link().OnClick((s, e) => msg.Text(\"Folder 4\")),\r\n                        Button(\"Folder 5\").Link().OnClick((s, e) => msg.Text(\"Folder 5\")),\r\n                        Button(\"Folder 6\").Link().OnClick((s, e) => msg.Text(\"Folder 6\")))\r\n\r\n                    ));\r\n        }\r\n\r\n        public HTMLElement Render()\r\n        {\r\n            return _content.Render();\r\n        }\r\n    }\r\n}\r\n";
                        case "PanelSample": 
                            return "using Tesserae;\r\nusing static H5.Core.dom;\r\nusing static Tesserae.Tests.Samples.SamplesHelper;\r\nusing static Tesserae.UI;\r\nusing Panel = Tesserae.Panel;\r\n\r\nnamespace Tesserae.Tests.Samples\r\n{\r\n    public class PanelSample : IComponent\r\n    {\r\n        private readonly IComponent _content;\r\n\r\n        public PanelSample()\r\n        {\r\n            var panel = Panel().LightDismiss();\r\n            panel.Content(\r\n                Stack().Children(\r\n                    TextBlock(\"Sample panel\").MediumPlus().SemiBold(),\r\n                    ChoiceGroup(\"Side:\").Choices(\r\n                        Choice(\"Far\").Selected().OnSelected(x => panel.Side = Panel.PanelSide.Far),\r\n                        Choice(\"Near\").OnSelected(x => panel.Side = Panel.PanelSide.Near)\r\n                    ),\r\n                    Toggle(\"Light Dismiss\").OnChange((s, e) => panel.CanLightDismiss = s.IsChecked).Checked(panel.CanLightDismiss),\r\n                    ChoiceGroup(\"Size:\").Choices(\r\n                        Choice(\"Small\").Selected().OnSelected(x => panel.Size = Panel.PanelSize.Small),\r\n                        Choice(\"Medium\").OnSelected(x => panel.Size = Panel.PanelSize.Medium),\r\n                        Choice(\"Large\").OnSelected(x => panel.Size = Panel.PanelSize.Large),\r\n                        Choice(\"LargeFixed\").OnSelected(x => panel.Size = Panel.PanelSize.LargeFixed),\r\n                        Choice(\"ExtraLarge\").OnSelected(x => panel.Size = Panel.PanelSize.ExtraLarge),\r\n                        Choice(\"FullWidth\").OnSelected(x => panel.Size = Panel.PanelSize.FullWidth)\r\n                    ),\r\n                    Toggle(\"Is non-blocking\").OnChange((s, e) => panel.IsNonBlocking = s.IsChecked).Checked(panel.IsNonBlocking),\r\n                    Toggle(\"Is dark overlay\").OnChange((s, e) => panel.IsDark = s.IsChecked).Checked(panel.IsDark),\r\n                    Toggle(\"Hide close button\").OnChange((s, e) => panel.ShowCloseButton = !s.IsChecked).Checked(!panel.ShowCloseButton)\r\n                    )).SetFooter(Stack().Horizontal().Children(Button(\"Footer Button 1\").Primary(), Button(\"Footer Button 2\")));\r\n\r\n            _content = SectionStack()\r\n                        .Title(SampleHeader(nameof(PanelSample)))\r\n                        .Section(Stack().Children(\r\n                            SampleTitle(\"Overview\"),\r\n                            TextBlock(\"Panels are modal UI overlays that provide contextual app information. They often request some kind of creation or management action from the user. Panels are paired with the Overlay component, also known as a Light Dismiss. The Overlay blocks interactions with the app view until dismissed either through clicking or tapping on the Overlay or by selecting a close or completion action within the Panel.\"),\r\n                            SampleSubTitle(\"Examples of experiences that use Panels\"),\r\n                            TextBlock(\"Member or group list creation or management\"),\r\n                            TextBlock(\"Document list creation or management\"),\r\n                            TextBlock(\"Permissions creation or management\"),\r\n                            TextBlock(\"Settings creation or management\"),\r\n                            TextBlock(\"Multi-field forms\")))\r\n                        .Section(Stack().Children(\r\n                            SampleTitle(\"Best Practices\"),\r\n                            Stack().Horizontal().Children(\r\n                            Stack().Width(40.percent()).Children(\r\n                                SampleSubTitle(\"Do\"),\r\n                                SampleDo(\"Use for self-contained experiences where the user does not need to interact with the app view to complete the task.\"),\r\n                                SampleDo(\"Use for complex creation, edit or management experiences.\"),\r\n                                SampleDo(\"Consider how the panel and its contained contents will scale across Fabric\u2019s responsive web breakpoints.\")\r\n                        ),\r\n                        Stack().Width(40.percent()).Children(\r\n                            SampleSubTitle(\"Don't\"),\r\n                            SampleDont(\"Don't use for experiences where the user needs to interact with the app view.\")))))\r\n                        .Section(Stack().Children(\r\n                            SampleTitle(\"Usage\"),\r\n                            Button(\"Open panel\").OnClick((s, e) => panel.Show())));\r\n        }\r\n\r\n        public HTMLElement Render()\r\n        {\r\n            return _content.Render();\r\n        }\r\n    }\r\n}\r\n";
                        case "PickerSample": 
                            return "using System;\r\nusing System.Collections.Generic;\r\nusing System.Linq;\r\nusing Tesserae;\r\nusing static H5.Core.dom;\r\nusing static Tesserae.UI;\r\nusing static Tesserae.Tests.Samples.SamplesHelper;\r\n\r\nnamespace Tesserae.Tests.Samples\r\n{\r\n    public class PickerSample : IComponent\r\n    {\r\n        private readonly IComponent _content;\r\n\r\n        public PickerSample()\r\n        {\r\n            _content =\r\n                SectionStack()\r\n                    .Title(SampleHeader(nameof(PickerSample)))\r\n                    .Section(\r\n                        Stack()\r\n                            .Children(\r\n                                SampleTitle(\"Overview\"),\r\n                                TextBlock(\"Pickers are used to pick recipients.\")))\r\n                    .Section(\r\n                        Stack()\r\n                            .Width(40.percent())\r\n                            .Children(\r\n                                SampleTitle(\"Usage\"),\r\n                                TextBlock(\"Picker with text suggestions and tag-like selections\")\r\n                                    .Medium()\r\n                                    .PaddingBottom(16.px()),\r\n                                Picker<PickerSampleItem>(suggestionsTitleText: \"Suggested Tags\").Items(GetPickerItems())\r\n                                    .PaddingBottom(32.px()),\r\n                                TextBlock(\"Picker with single selection\")\r\n                                    .Medium()\r\n                                    .PaddingBottom(16.px()),\r\n                                Picker<PickerSampleItem>(suggestionsTitleText: \"Suggested Tags\", maximumAllowedSelections:1).Items(GetPickerItems())\r\n                                    .PaddingBottom(32.px()),\r\n                                TextBlock(\"Picker with icon and text suggestions and component based selections\")\r\n                                    .Medium()\r\n                                    .PaddingBottom(16.px()),\r\n                                Picker<PickerSampleItemWithComponents>(suggestionsTitleText: \"Suggested Items\", renderSelectionsInline: false).Items(GetComponentPickerItems())));\r\n        }\r\n\r\n        public HTMLElement Render()\r\n        {\r\n            return _content.Render();\r\n        }\r\n\r\n        private PickerSampleItem[] GetPickerItems()\r\n        {\r\n            return new []\r\n            {\r\n                new PickerSampleItem(\"Bob\"),\r\n                new PickerSampleItem(\"BOB\"),\r\n                new PickerSampleItem(\"Donuts by J Dilla\"),\r\n                new PickerSampleItem(\"Donuts\"),\r\n                new PickerSampleItem(\"Coffee\"),\r\n                new PickerSampleItem(\"Chicken Coop\"),\r\n                new PickerSampleItem(\"Cherry Pie\"),\r\n                new PickerSampleItem(\"Chess\"),\r\n                new PickerSampleItem(\"Cooper\")\r\n            };\r\n        }\r\n\r\n        private PickerSampleItemWithComponents[] GetComponentPickerItems()\r\n        {\r\n            return new []\r\n            {\r\n                new PickerSampleItemWithComponents(\"Bob\", LineAwesome.Bomb),\r\n                new PickerSampleItemWithComponents(\"BOB\", LineAwesome.Blender),\r\n                new PickerSampleItemWithComponents(\"Donuts by J Dilla\", LineAwesome.Carrot),\r\n                new PickerSampleItemWithComponents(\"Donuts\", LineAwesome.CarBattery),\r\n                new PickerSampleItemWithComponents(\"Coffee\", LineAwesome.Coffee),\r\n                new PickerSampleItemWithComponents(\"Chicken Coop\", LineAwesome.Hamburger),\r\n                new PickerSampleItemWithComponents(\"Cherry Pie\", LineAwesome.ChartPie),\r\n                new PickerSampleItemWithComponents(\"Chess\", LineAwesome.Chess),\r\n                new PickerSampleItemWithComponents(\"Cooper\", LineAwesome.QuestionCircle)\r\n            };\r\n        }\r\n    }\r\n\r\n    public class PickerSampleItem : IPickerItem\r\n    {\r\n        public PickerSampleItem(string name)\r\n        {\r\n            Name = name;\r\n        }\r\n\r\n        public string Name { get; }\r\n\r\n        public bool IsSelected { get; set; }\r\n\r\n        public IComponent Render()\r\n        {\r\n            return TextBlock(Name);\r\n        }\r\n    }\r\n\r\n    public class PickerSampleItemWithComponents : IPickerItem\r\n    {\r\n        private readonly LineAwesome _icon;\r\n\r\n        public PickerSampleItemWithComponents(string name, LineAwesome icon)\r\n        {\r\n            Name = name;\r\n            _icon = icon;\r\n        }\r\n\r\n        public string Name { get; }\r\n\r\n        public bool IsSelected { get; set; }\r\n\r\n        public IComponent Render()\r\n        {\r\n            return Stack().Horizontal().AlignContent(ItemAlign.Center).Children(Icon(_icon).MinWidth(16.px()), TextBlock(Name));\r\n        }\r\n    }\r\n}\r\n";
                        case "PivotSample": 
                            return "using System;\r\nusing Tesserae;\r\nusing static H5.Core.dom;\r\nusing static Tesserae.UI;\r\nusing static Tesserae.Tests.Samples.SamplesHelper;\r\nusing System.Collections.Generic;\r\nusing System.Linq;\r\n\r\nnamespace Tesserae.Tests.Samples\r\n{\r\n    public class PivotSample : IComponent\r\n    {\r\n        private readonly IComponent content;\r\n\r\n        public PivotSample()\r\n        {\r\n            content = SectionStack()\r\n                     .Title(SampleHeader(nameof(PivotSample)))\r\n                     .Section(Stack().Children(\r\n                                  SampleTitle(\"Overview\"),\r\n                                  TextBlock(\"TODO\"),\r\n                                  TextBlock(\"Examples of experiences that use Panels\").MediumPlus()))\r\n                     .Section(Stack().Children(\r\n                                  SampleTitle(\"Best Practices\"),\r\n                                  Stack().Horizontal().Children(\r\n                                      Stack().Width(40.percent()).Children(\r\n                                          SampleSubTitle(\"Do\"),\r\n                                          SampleDo(\"TODO\")\r\n                                      ),\r\n                                      Stack().Width(40.percent()).Children(\r\n                                          SampleSubTitle(\"Don't\"),\r\n                                          SampleDont(\"TODO\")\r\n                                      )\r\n                                  )))\r\n                     .Section(Stack().Children(\r\n                                  SampleTitle(\"Usage\"),\r\n                                  SampleSubTitle(\"Cached vs. Not Cached Tabs\"),\r\n                                  Pivot().Pivot(\"tab1\", () => Button().SetText(\"Cached\").NoBorder().NoBackground().Link(),\r\n                                                () => TextBlock(DateTimeOffset.UtcNow.ToString()).Regular(), cached: true)\r\n                                         .Pivot(\"tab2\",                                                      () => Button().SetText(\"Not Cached\").SetIcon(\"las la-sync\").NoBorder().NoBackground().Link(),\r\n                                                () => TextBlock(DateTimeOffset.UtcNow.ToString()).Regular(), cached: false),\r\n                                  SampleSubTitle(\"Cached vs. Not Cached Tabs\"),\r\n                                  SampleSubTitle(\"Scroll with limited height\"),\r\n                                  Pivot().MaxHeight(500.px())\r\n                                         .Pivot(\"tab1\",                                                  () => Button().SetText(\"5 Items\").NoBorder().NoBackground().Link(),\r\n                                                () => ItemsList(GetSomeItems(5)).PaddingBottom(16.px()), cached: true)\r\n                                         .Pivot(\"tab2\",                                                   () => Button().SetText(\"10 Items\").NoBorder().NoBackground().Link(),\r\n                                                () => ItemsList(GetSomeItems(20)).PaddingBottom(16.px()), cached: true)\r\n                                         .Pivot(\"tab3\",                                                   () => Button().SetText(\"50 Items\").NoBorder().NoBackground().Link(),\r\n                                                () => ItemsList(GetSomeItems(50)).PaddingBottom(16.px()), cached: true)\r\n                                         .Pivot(\"tab4\",                                                    () => Button().SetText(\"100 Items\").NoBorder().NoBackground().Link(),\r\n                                                () => ItemsList(GetSomeItems(100)).PaddingBottom(16.px()), cached: true),\r\n                                  SampleSubTitle(\"Too many tabs (WIP)\"),\r\n                                  Pivot().MaxHeight(500.px()).MaxWidth(300.px())\r\n                                         .Pivot(\"tab1\",                                                  () => Button().SetText(\"5 Items\").NoBorder().NoBackground().Link().Ellipsis(),\r\n                                                () => ItemsList(GetSomeItems(5)).PaddingBottom(16.px()), cached: true)\r\n                                         .Pivot(\"tab2\",                                                   () => Button().SetText(\"10 Items\").NoBorder().NoBackground().Link().Ellipsis(),\r\n                                                () => ItemsList(GetSomeItems(20)).PaddingBottom(16.px()), cached: true)\r\n                                         .Pivot(\"tab3\",                                                   () => Button().SetText(\"50 Items\").NoBorder().NoBackground().Link().Ellipsis(),\r\n                                                () => ItemsList(GetSomeItems(50)).PaddingBottom(16.px()), cached: true)\r\n                                         .Pivot(\"tab4\",                                                    () => Button().SetText(\"100 Items\").NoBorder().NoBackground().Link().Ellipsis(),\r\n                                                () => ItemsList(GetSomeItems(100)).PaddingBottom(16.px()), cached: true)\r\n                                         .Pivot(\"tab5\",                                                  () => Button().SetText(\"5 Items\").NoBorder().NoBackground().Link().Ellipsis(),\r\n                                                () => ItemsList(GetSomeItems(5)).PaddingBottom(16.px()), cached: true)\r\n                                         .Pivot(\"tab6\",                                                   () => Button().SetText(\"10 Items\").NoBorder().NoBackground().Link().Ellipsis(),\r\n                                                () => ItemsList(GetSomeItems(20)).PaddingBottom(16.px()), cached: true)\r\n                                         .Pivot(\"tab7\",                                                   () => Button().SetText(\"50 Items\").NoBorder().NoBackground().Link().Ellipsis(),\r\n                                                () => ItemsList(GetSomeItems(50)).PaddingBottom(16.px()), cached: true)\r\n                                         .Pivot(\"tab8\",                                                    () => Button().SetText(\"100 Items\").NoBorder().NoBackground().Link().Ellipsis(),\r\n                                                () => ItemsList(GetSomeItems(100)).PaddingBottom(16.px()), cached: true)\r\n                              ));\r\n        }\r\n\r\n        public HTMLElement Render()\r\n        {\r\n            return content.Render();\r\n        }\r\n\r\n        private IComponent[] GetSomeItems(int count)\r\n        {\r\n            return Enumerable\r\n                  .Range(1, count)\r\n                  .Select(number => Card(TextBlock($\"Lorem Ipsum {number}\").NonSelectable()).MinWidth(200.px()))\r\n                  .ToArray();\r\n        }\r\n    }\r\n}";
                        case "ProgressIndicatorSample": 
                            return "using System;\r\nusing Tesserae;\r\nusing static H5.Core.dom;\r\nusing static Tesserae.UI;\r\nusing static Tesserae.Tests.Samples.SamplesHelper;\r\n\r\nnamespace Tesserae.Tests.Samples\r\n{\r\n    public class ProgressIndicatorSample : IComponent\r\n    {\r\n        private readonly IComponent _content;\r\n\r\n        public ProgressIndicatorSample()\r\n        {\r\n            _content = SectionStack()\r\n                .Title(SampleHeader(nameof(ProgressIndicatorSample)))\r\n                .Section(Stack().Children(\r\n                    SampleTitle(\"Overview\"),\r\n                    TextBlock(\r\n                        \"ProgressIndicators are used to show the completion status of an operation lasting more than 2 seconds. If the state of progress cannot be determined, use a Spinner instead. ProgressIndicators can appear in a new panel, a flyout, under the UI initiating the operation, or even replacing the initiating UI, as long as the UI can return if the operation is canceled or is stopped.\"))\r\n                )\r\n                .Section(Stack().WidthStretch().Children(\r\n                    SampleTitle(\"Best Practices\"),\r\n                    Stack().WidthStretch().Horizontal().Children(\r\n                        Stack().WidthStretch().Children(\r\n                            SampleSubTitle(\"Do\"),\r\n                            SampleDo(\"Use a ProgressIndicator when the total units to completion is known\"),\r\n                            SampleDo(\"Display operation description\"),\r\n                            SampleDo(\"Show text above and/or below the bar\"),\r\n                            SampleDo(\"Combine steps of a single operation into one bar\")\r\n                        ),\r\n                        Stack().WidthStretch().Children(\r\n                            SampleSubTitle(\"Don't\"),\r\n                            SampleDont(\"Use a ProgressIndicator when the total units to completion is indeterminate.\"),\r\n                            SampleDont(\"Show text to the right or left of the bar\"),\r\n                            SampleDont(\"Cause progress to \u201crewind\u201d to show new steps\")\r\n                        ))\r\n                ))\r\n                .Section(\r\n                    Stack().Children(\r\n                        SampleTitle(\"Usage\"),\r\n                        TextBlock(\"States\").Medium(),\r\n                        Label(\"Empty\").SetContent(ProgressIndicator().Progress(0).Width(400.px())).AlignCenter(),\r\n                        Label(\"30%\").SetContent(ProgressIndicator().Progress(30).Width(400.px())).AlignCenter(),\r\n                        Label(\"60%\").SetContent(ProgressIndicator().Progress(60).Width(400.px())).AlignCenter(),\r\n                        Label(\"Full\").SetContent(ProgressIndicator().Progress(100).Width(400.px())).AlignCenter(),\r\n                        Label(\"Indeterminate\").SetContent(ProgressIndicator().Indeterminated().Width(400.px())).AlignCenter()\r\n                    ));\r\n        }\r\n\r\n        public HTMLElement Render()\r\n        {\r\n            return _content.Render();\r\n        }\r\n    }\r\n}\r\n";
                        case "ProgressModalSample": 
                            return "using System;\r\nusing System.Threading.Tasks;\r\nusing Tesserae;\r\nusing static H5.Core.dom;\r\nusing static Tesserae.UI;\r\nusing static Tesserae.Tests.Samples.SamplesHelper;\r\nusing System.Threading;\r\n\r\nnamespace Tesserae.Tests.Samples\r\n{\r\n    public class ProgressModalSample : IComponent\r\n    {\r\n        private readonly IComponent _content;\r\n\r\n        public ProgressModalSample()\r\n        {\r\n            ProgressModal modal;\r\n\r\n            CancellationTokenSource cts;\r\n\r\n            float progress = 0;\r\n\r\n            void ProgressFrame(object a)\r\n            {\r\n                if (cts.IsCancellationRequested)\r\n                {\r\n                    modal.ProgressSpin().Message(\"Cancelling...\");\r\n                    Task.Delay(2000).ContinueWith(_ => modal.Hide()).FireAndForget();\r\n                    return;\r\n                }\r\n                progress++;\r\n\r\n                if (progress < 100)\r\n                {\r\n                    modal.Message($\"Processing {progress}%\").Progress(progress);\r\n                    window.setTimeout(ProgressFrame, 16);\r\n                }\r\n                else\r\n                {\r\n                    modal.Message(\"Finishing...\").ProgressIndeterminated();\r\n                    Task.Delay(5000).ContinueWith(_ => modal.Hide()).FireAndForget();\r\n                }\r\n            }\r\n\r\n            async Task PlayModal()\r\n            {\r\n                modal = ProgressModal().Title(\"Lorem Ipsum\");\r\n                cts = new CancellationTokenSource();\r\n                modal.WithCancel((b) => { b.Disabled(); cts.Cancel(); });\r\n                progress = 0;\r\n                modal.Message(\"Preparing to process...\").ProgressSpin().Show();\r\n                await Task.Delay(1500);\r\n                window.setTimeout(ProgressFrame, 16);\r\n            }\r\n\r\n            _content = SectionStack()\r\n                .Title(SampleHeader(nameof(ProgressModalSample)))\r\n                .Section(Stack().Children(\r\n                    SampleTitle(\"Overview\"),\r\n                    TextBlock(\r\n                        \"TODO\"))\r\n                )\r\n                .Section(Stack().Children(\r\n                    SampleTitle(\"Best Practices\"),\r\n                    Stack().Horizontal().Children(\r\n                        Stack().Children(\r\n                            SampleSubTitle(\"Do\"),\r\n                            SampleDo(\"TODO\")\r\n                        ),\r\n                        Stack().Children(\r\n                            SampleSubTitle(\"Don't\"),\r\n                            SampleDont(\"TODO\")\r\n                        ))\r\n                ))\r\n                .Section(\r\n                    Stack().Width(400.px()).Children(\r\n                        SampleTitle(\"Usage\"),\r\n                        Button(\"Open Modal\").OnClick((s, e) => PlayModal().FireAndForget())\r\n                    ));\r\n        }\r\n\r\n        public HTMLElement Render()\r\n        {\r\n            return _content.Render();\r\n        }\r\n    }\r\n}\r\n";
                        case "SearchableGroupedListSample": 
                            return "using System;\r\nusing System.Linq;\r\nusing Tesserae;\r\nusing static Tesserae.Tests.Samples.SamplesHelper;\r\nusing static Tesserae.UI;\r\nusing static H5.Core.dom;\r\n\r\nnamespace Tesserae.Tests.Samples\r\n{\r\n    public class SearchableGroupedListSample : IComponent\r\n    {\r\n        private readonly IComponent _content;\r\n\r\n        public SearchableGroupedListSample()\r\n        {\r\n            _content =\r\n                SectionStack()\r\n                    .WidthStretch()\r\n                    .Title(SampleHeader(nameof(SearchableGroupedListSample)))\r\n                    .Section(\r\n                        Stack()\r\n                            .Children(\r\n                                SampleTitle(\"Overview\"),\r\n                                TextBlock(\"This list provides a base component for implementing search over a known number of items.\" +\r\n                                          \"It is agnostic of the tile component used, and selection \" +\r\n                                          \"management. These concerns can be layered separately.\")\r\n                                    .PaddingBottom(16.px()),\r\n                                TextBlock(\"You need to implement ISearchableGroupedItem interface on the items, and specially the IsMatch method to enable searching on them\")))\r\n                    .Section(\r\n                        Stack()\r\n                            .Children(\r\n                                SampleTitle(\"Usage\"),\r\n                                TextBlock(\"Searchable Grouped List with No Results Message\").Medium().PaddingBottom(16.px()).PaddingTop(16.px()),\r\n                                SearchableGroupedList(GetItems(10), GroupedItemHeaderGenerator).PaddingBottom(32.px()).Height(500.px())\r\n                                    .WithNoResultsMessage(() => BackgroundArea(Card(TextBlock(\"No Results\").Padding(16.px()))).WidthStretch().HeightStretch().MinHeight(100.px())),\r\n                                TextBlock(\"Searchable Grouped List with extra commands\").Medium().PaddingBottom(16.px()).PaddingTop(16.px()),\r\n                                SearchableGroupedList(GetItems(10), GroupedItemHeaderGenerator).PaddingBottom(32.px()).Height(500.px()).AfterSearchBox(Button(\"Sample Button After\").Primary()).BeforeSearchBox(Button(\"Sample Button Before\").Link())\r\n                                    .WithNoResultsMessage(() => BackgroundArea(Card(TextBlock(\"No Results\").Padding(16.px()))).WidthStretch().HeightStretch().MinHeight(100.px())),\r\n                                TextBlock(\"Searchable Grouped List with Columns\").Medium().PaddingBottom(16.px()).PaddingTop(16.px()),\r\n                                SearchableGroupedList(GetItems(40), GroupedItemHeaderGenerator, 25.percent(), 25.percent(), 25.percent(), 25.percent()).Height(500.px())\r\n                                )).PaddingBottom(32.px());\r\n            \r\n            IComponent GroupedItemHeaderGenerator(string s) => HorizontalSeparator(TextBlock(s).Primary().SemiBold()).Left();\r\n        }\r\n\r\n        public HTMLElement Render() => _content.Render();\r\n\r\n        private SearchableGroupedListItem[] GetItems(int count)\r\n        {\r\n            return Enumerable\r\n                .Range(1, count)\r\n                .Select((number, index) =>\r\n                {\r\n                    var group = string.Empty;\r\n\r\n                    if (index % 2 == 0)\r\n                    {\r\n                        group = \"Group A\";\r\n                    }\r\n                    else if (index % 3 == 0)\r\n                    {\r\n                        group = \"Group B\";\r\n                    }\r\n                    else\r\n                    {\r\n                        group = \"Group C\";\r\n                    }\r\n\r\n                    return new SearchableGroupedListItem($\"Lorem Ipsum {number}\", group);\r\n                })\r\n                .ToArray();\r\n        }\r\n\r\n        private class SearchableGroupedListItem : ISearchableGroupedItem\r\n        {\r\n            private readonly string     _value;\r\n            private readonly IComponent _component;\r\n\r\n            public SearchableGroupedListItem(string value, string group)\r\n            {\r\n                _value     = value;\r\n                _component = Card(TextBlock(value).NonSelectable());\r\n\r\n                Group = group;\r\n            }\r\n\r\n            public bool IsMatch(string searchTerm) => _value.ToLower().Contains(searchTerm.ToLower()) || Group.ToLower().Contains(searchTerm.ToLower());\r\n\r\n            public string Group { get; }\r\n\r\n            public IComponent Render() => _component;\r\n        }\r\n    }\r\n}\r\n";
                        case "SearchableListSample": 
                            return "using System.Collections.Generic;\r\nusing System.Linq;\r\nusing Tesserae;\r\nusing static Tesserae.Tests.Samples.SamplesHelper;\r\nusing static Tesserae.UI;\r\nusing static H5.Core.dom;\r\n\r\nnamespace Tesserae.Tests.Samples\r\n{\r\n    public class SearchableListSample : IComponent\r\n    {\r\n        private readonly IComponent _content;\r\n\r\n        public SearchableListSample()\r\n        {\r\n            _content =\r\n                SectionStack()\r\n                    .WidthStretch()\r\n                    .Title(SampleHeader(nameof(SearchableListSample)))\r\n                    .Section(\r\n                        Stack()\r\n                            .Children(\r\n                                SampleTitle(\"Overview\"),\r\n                                TextBlock(\"This list provides a base component for implementing search over a known number of items.\" +\r\n                                          \"It is agnostic of the tile component used, and selection \" +\r\n                                          \"management. These concerns can be layered separately.\")\r\n                                    .PaddingBottom(16.px()),\r\n                                TextBlock(\"You need to implement ISearchableItem interface on the items, and specially the IsMatch method to enable searching on them\")))\r\n                    .Section(\r\n                        Stack()\r\n                            .Children(\r\n                                SampleTitle(\"Usage\"),\r\n                                TextBlock(\"Searchable List with No Results Message\").Medium().PaddingBottom(16.px()).PaddingTop(16.px()),\r\n                                SearchableList(GetItems(10)).PaddingBottom(32.px()).Height(500.px())\r\n                                    .WithNoResultsMessage(() => BackgroundArea(Card(TextBlock(\"No Results\").Padding(16.px()))).WidthStretch().HeightStretch().MinHeight(100.px())),\r\n                                TextBlock(\"Searchable List with extra commands\").Medium().PaddingBottom(16.px()).PaddingTop(16.px()),\r\n                                SearchableList(GetItems(10)).PaddingBottom(32.px()).Height(500.px()).AfterSearchBox(Button(\"Sample Button After\").Primary()).BeforeSearchBox(Button(\"Sample Button Before\").Link())\r\n                                    .WithNoResultsMessage(() => BackgroundArea(Card(TextBlock(\"No Results\").Padding(16.px()))).WidthStretch().HeightStretch().MinHeight(100.px())),\r\n                                TextBlock(\"Searchable List with Columns\").Medium().PaddingBottom(16.px()).PaddingTop(16.px()),\r\n                                SearchableList(GetItems(40), 25.percent(), 25.percent(), 25.percent(), 25.percent()).Height(500.px())\r\n                                )).PaddingBottom(32.px());\r\n        }\r\n\r\n        public HTMLElement Render()\r\n        {\r\n            return _content.Render();\r\n        }\r\n\r\n        private SearchableListItem[] GetItems(int count)\r\n        {\r\n            return Enumerable\r\n                .Range(1, count)\r\n                .Select(number => new SearchableListItem($\"Lorem Ipsum {number}\"))\r\n                .ToArray();\r\n\r\n        }\r\n\r\n        private class SearchableListItem : ISearchableItem\r\n        {\r\n            private readonly string _value;\r\n            private readonly IComponent _component;\r\n            public SearchableListItem(string value)\r\n            {\r\n                _value = value;\r\n                _component = Card(TextBlock(value).NonSelectable());\r\n            }\r\n\r\n            public bool IsMatch(string searchTerm) => _value.Contains(searchTerm);\r\n\r\n            public HTMLElement Render() => _component.Render();\r\n\r\n            IComponent ISearchableItem.Render() => _component;\r\n        }\r\n    }\r\n}\r\n";
                        case "SearchBoxSample": 
                            return "using System;\r\nusing Tesserae;\r\nusing static H5.Core.dom;\r\nusing static Tesserae.UI;\r\nusing static Tesserae.Tests.Samples.SamplesHelper;\r\n\r\nnamespace Tesserae.Tests.Samples\r\n{\r\n    public class SearchBoxSample : IComponent\r\n    {\r\n        private readonly IComponent _content;\r\n\r\n        public SearchBoxSample()\r\n        {\r\n            var searchAsYouType = TextBlock(\"start typing\");\r\n            _content = SectionStack()\r\n            .Title(SampleHeader(nameof(SearchBoxSample)))\r\n            .Section(Stack().Children(\r\n                SampleTitle(\"Overview\"),\r\n                TextBlock(\"SearchBoxes provide an input field for searching through content, allowing users to locate specific items within the website or app.\")))\r\n            .Section(Stack().Children(\r\n                SampleTitle(\"Best Practices\"),\r\n                Stack().Horizontal().Children(\r\n                Stack().Width(40.percent()).Children(\r\n                    SampleSubTitle(\"Do\"),\r\n                    SampleDo(\"Use placeholder text in the SearchBox to describe what users can search for.\"),\r\n                    SampleDo(\"Example: 'Search'; 'Search files'; 'Search site'\"),\r\n                    SampleDo(\"Once the user has clicked into the SearchBox but hasn\u2019t entered input yet, use 'hint text' to communicate search scope.\"),\r\n                    SampleDo(\"Examples: 'Try searching for a PDFs'; 'Search contacts list'; 'Type to find <content type> '\"),\r\n                    SampleDo(\"Use the Underlined SearchBox for CommandBars.\")\r\n                ),\r\n                Stack().Width(40.percent()).Children(\r\n                    SampleSubTitle(\"Don't\"),\r\n                    SampleDont(\"Don't leave the SearchBox blank because it's too ambiguous.\"),\r\n                    SampleDont(\"Don't have lengthy and unclear hint text. It should be used to clasify and set expectations.\"),\r\n                    SampleDont(\"Don't provide inaccurate matches or bad predictions, as it will make search seem unreliable and will result in user frustration.\"),\r\n                    SampleDont(\"Don\u2019t provide too much information or metadata in the suggestions list; it\u2019s intended to be lightweight.\"),\r\n                    SampleDont(\"Don't build a custom search control based on the default text box or any other control.\"),\r\n                    SampleDont(\"Don't use SearchBox if you cannot reliably provide accurate results.\")\r\n                )\r\n            )))\r\n            .Section(Stack().Children(\r\n                SampleTitle(\"Usage\"),\r\n                TextBlock(\"Basic TextBox\").Medium(),\r\n                Stack().Width(40.percent()).Children(\r\n                    Label(\"Default\").SetContent(SearchBox(\"Search\").OnSearch((s,e) => alert($\"Searched for {e}\"))),\r\n                    Label(\"Disabled\").Disabled().SetContent(SearchBox(\"Search\").Disabled()),\r\n                    Label(\"Underline\").SetContent(SearchBox(\"Search\").Underlined().OnSearch((s, e) => alert($\"Searched for {e}\"))),\r\n                    Label(\"Search as you type\").SetContent(SearchBox(\"Search\").Underlined().SearchAsYouType().OnSearch((s, e) => searchAsYouType.Text = $\"Searched for {e}\")),\r\n                    searchAsYouType,\r\n                    Label(\"Custom Icon\").Required().SetContent(SearchBox(\"Filter\").SetIcon(\"las la-filter\").OnSearch((s, e) => alert($\"Filter for {e}\"))),\r\n                    Label(\"No Icon\").SetContent(SearchBox(\"Search\").NoIcon().OnSearch((s, e) => alert($\"Searched for {e}\"))),\r\n                    Label(\"Fixed Width\").Required().SetContent(SearchBox(\"Small Search\").Width(200.px()).OnSearch((s, e) => alert($\"Searched for {e}\"))))));\r\n        }\r\n\r\n        public HTMLElement Render()\r\n        {\r\n            return _content.Render();\r\n        }\r\n    }\r\n}\r\n";
                        case "SectionStackSample": 
                            return "using System;\r\nusing Tesserae;\r\nusing static H5.Core.dom;\r\nusing static Tesserae.UI;\r\nusing static Tesserae.Tests.Samples.SamplesHelper;\r\n\r\nnamespace Tesserae.Tests.Samples\r\n{\r\n    public class SectionStackSample : IComponent\r\n    {\r\n        private readonly IComponent _content;\r\n\r\n        public SectionStackSample()\r\n        {\r\n            var stack = SectionStack();\r\n\r\n            _content = Stack().Children(SectionStack().Title(SampleHeader(nameof(SectionStackSample)))\r\n                                            .Section(Stack().Children(\r\n                                                    SampleTitle(\"Overview\"),\r\n                                                    TextBlock(\"A Session Stack is a container-type component that abstracts the implementation of a flexbox in order to define the layout of its children components.\")))\r\n                                            .Section(Stack().Children(\r\n                                                    SampleTitle(\"Usage\"),\r\n                                                    Label(\"Number of items:\").SetContent(Slider(5, 0, 10, 1).OnInput((s, e) => SetChildren(stack, s.Value))))),\r\n                                        stack);\r\n            SetChildren(stack, 5);\r\n        }\r\n\r\n        private void SetChildren(SectionStack stack, int count)\r\n        {\r\n            stack.Clear();\r\n            for (int i = 0; i < count; i++)\r\n            {\r\n                stack.Section(Stack().Children(\r\n                TextBlock($\"Section {i}\").MediumPlus().SemiBold(),\r\n                TextBlock(\"Wrap (Default)\").SmallPlus(),\r\n                TextBlock(\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\").Width(50.percent()),\r\n                TextBlock(\"No Wrap\").SmallPlus(),\r\n                TextBlock(\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\").NoWrap().Width(50.percent())\r\n                ));\r\n            }\r\n        }\r\n\r\n        public HTMLElement Render()\r\n        {\r\n            return _content.Render();\r\n        }\r\n    }\r\n}\r\n";
                        case "SliderSample": 
                            return "using System;\r\nusing Tesserae;\r\nusing static H5.Core.dom;\r\nusing static Tesserae.UI;\r\nusing static Tesserae.Tests.Samples.SamplesHelper;\r\n\r\nnamespace Tesserae.Tests.Samples\r\n{\r\n    public class SliderSample : IComponent\r\n    {\r\n        private readonly IComponent _content;\r\n\r\n        public SliderSample()\r\n        {\r\n            var value = new SettableObservable<int>(0);\r\n            var s1    = Slider(val: 0, min: 0, max: 100, step: 1).OnInput((s,  e) => value.Update(currVal => value.Value = s.Value));\r\n            var s2    = Slider(val: 0, min: 0, max: 100, step: 10).OnInput((s, e) => value.Update(currVal => value.Value = s.Value));\r\n            value.Observe(changedValue => s1.Value = changedValue);\r\n\r\n            _content = SectionStack()\r\n               .Title(SampleHeader(nameof(SliderSample)))\r\n               .Section(Stack().Children(\r\n                    SampleTitle(\"Overview\"),\r\n                    TextBlock(\"TODO\")\r\n//                TextBlock(\"ChoiceGroup emphasize all options equally, and that may draw more attention to the options than necessary. Consider using other controls, unless the options deserve extra attention from the user. For example, if the default option is recommended for most users in most situations, use a Dropdown component instead.\"),\r\n//                TextBlock(\"If there are only two mutually exclusive options, combine them into a single Checkbox or Toggle switch. For example, use a Checkbox for \\\"I agree\\\" instead of ChoiceGroup buttons for \\\"I agree\\\" and \\\"I don't agree.\\\"\")\r\n                ))\r\n               .Section(Stack().Children(\r\n                    SampleTitle(\"Best Practices\"),\r\n                    Stack().Horizontal().Children(\r\n                        Stack().Width(40.percent()).Children(\r\n                            SampleSubTitle(\"Do\"),\r\n                            SampleDo(\"TODO\")),\r\n                        Stack().Width(40.percent()).Children(\r\n                            SampleSubTitle(\"Don't\"),\r\n                            SampleDont(\"TODO\")))))\r\n               .Section(\r\n                    Stack().Children(\r\n                        SampleTitle(\"Usage\"),\r\n                        Label(\"Value\").Medium().SetContent(Defer(value, currentValue => TextBlock(currentValue.ToString()).AsTask())),\r\n                        Label(\"Default Slider (val: 0, min: 0, max: 100, step: 1)\").Medium().SetContent(s1),\r\n                        Label(\"Default Slider (val: 0, min: 0, max: 100, step: 10)\").Medium().SetContent(s2)\r\n                    ));\r\n        }\r\n\r\n        public HTMLElement Render()\r\n        {\r\n            return _content.Render();\r\n        }\r\n    }\r\n}";
                        case "SpinnerSample": 
                            return "using System;\r\nusing Tesserae;\r\nusing static H5.Core.dom;\r\nusing static Tesserae.UI;\r\nusing static Tesserae.Tests.Samples.SamplesHelper;\r\n\r\nnamespace Tesserae.Tests.Samples\r\n{\r\n    public class SpinnerSample : IComponent\r\n    {\r\n        private readonly IComponent _content;\r\n\r\n        public SpinnerSample()\r\n        {\r\n            _content = SectionStack()\r\n                .Title(SampleHeader(nameof(SpinnerSample)))\r\n                .Section(Stack().Children(\r\n                    SampleTitle(\"Overview\"),\r\n                    TextBlock(\r\n                        \"A Spinner is an outline of a circle which animates around itself indicating to the user that things are processing. A Spinner is shown when it's unsure how long a task will take making it the indeterminate version of a ProgressIndicator. They can be various sizes, located inline with content or centered. They generally appear after an action is being processed or committed. They are subtle and generally do not take up much space, but are transitions from the completed task.\"))\r\n                )\r\n                .Section(Stack().WidthStretch().Children(\r\n                    SampleTitle(\"Best Practices\"),\r\n                    Stack().WidthStretch().Horizontal().Children(\r\n                        Stack().WidthStretch().Children(\r\n                            SampleSubTitle(\"Do\"),\r\n                            SampleDo(\"Use a Spinner when a task is not immediate.\"),\r\n                            SampleDo(\"Use one Spinner at a time.\"),\r\n                            SampleDo(\"Descriptive verbs are appropriate under a Spinner to help the user understand what's happening. Ie: Saving, processing, updating.\"),\r\n                            SampleDo(\"Use a Spinner when confirming a change has been made or a task is being processed.\")\r\n                        ),\r\n                        Stack().WidthStretch().Children(\r\n                            SampleSubTitle(\"Don't\"),\r\n                            SampleDont(\"Don\u2019t use a Spinner when performing immediate tasks.\"),\r\n                            SampleDont(\"Don't show multiple Spinners at the same time.\"),\r\n                            SampleDont(\"Don't include more than a few words when paired with a Spinner.\")\r\n                        ))\r\n                ))\r\n                .Section(\r\n                    Stack().Width(400.px()).Children(\r\n                        SampleTitle(\"Usage\"),\r\n                        TextBlock(\"Spinner sizes\").Medium(),\r\n                        Label(\"Extra small spinner\").SetContent(Spinner().XSmall()).AlignCenter(),\r\n                        Label(\"Small spinner\").SetContent(Spinner().Small()).AlignCenter(),\r\n                        Label(\"Medium spinner\").SetContent(Spinner().Medium()).AlignCenter(),\r\n                        Label(\"Large spinner\").SetContent(Spinner().Large()).AlignCenter()\r\n                    ))\r\n                .Section(\r\n                    Stack().Width(400.px()).Children(\r\n                        TextBlock(\"Spinner label positioning\").Medium(),\r\n                        Label(\"Spinner with label positioned below\").SetContent(Spinner(\"I am definitely loading...\").Below()),\r\n                        Label(\"Spinner with label positioned above\").SetContent(Spinner(\"Seriously, still loading...\").Above()),\r\n                        Label(\"Spinner with label positioned to right\").SetContent(Spinner(\"Wait, wait...\").Right()),\r\n                        Label(\"Spinner with label positioned to left\").SetContent(Spinner(\"Nope, still loading...\").Left())\r\n                    ));\r\n        }\r\n\r\n        public HTMLElement Render()\r\n        {\r\n            return _content.Render();\r\n        }\r\n    }\r\n}\r\n";
                        case "StackSample": 
                            return "using System;\r\nusing Tesserae;\r\nusing static H5.Core.dom;\r\nusing static Tesserae.UI;\r\nusing static Tesserae.Tests.Samples.SamplesHelper;\r\n\r\nnamespace Tesserae.Tests.Samples\r\n{\r\n    public class StackSample : IComponent\r\n    {\r\n        private readonly IComponent _content;\r\n\r\n        public StackSample()\r\n        {\r\n            \r\n            var mainButton = Button(\"Some Text\").TextLeft().MinWidth(200.px()).Ellipsis().IconOnHover();\r\n            mainButton.Tooltip(\"Tooltip for the main Button\").SetIcon(LineAwesome.ChevronLeft, Theme.Primary.Background);\r\n\r\n            var otherButton = Button().Tooltip(\"Tooltip for the other Button\").SetIcon(LineAwesome.ThumbsDown, color: Theme.Danger.Background).Fade();\r\n            var hoverStack     = HStack().MaxWidth(500.px()).Children(mainButton, otherButton);\r\n            \r\n            var stack = Stack();\r\n            var countSlider = Slider(5, 0, 10, 1);\r\n            _content = SectionStack()\r\n            .Title(SampleHeader(nameof(StackSample)))\r\n            .Section(Stack().Children(\r\n                SampleTitle(\"Overview\"),\r\n                TextBlock(\"A Stack is a container-type component that abstracts the implementation of a flexbox in order to define the layout of its children components.\")))\r\n            .Section(Stack().Children(\r\n                SampleTitle(\"Usage\"),\r\n                Stack().Children(\r\n                    Stack().Horizontal().Children(\r\n                    Stack().Children(\r\n                    Label(\"Number of items:\").SetContent(countSlider.OnInput((s, e) => SetChildren(stack, s.Value))),\r\n                    Stack().Horizontal().Children(\r\n                    ChoiceGroup(\"Orientation:\").Horizontal().Choices(Choice(\"Vertical\").Selected(), Choice(\"Horizontal\"), Choice(\"Vertical Reverse\"), Choice(\"Horizontal Reverse\")).OnChange(\r\n                        (s, e) =>\r\n                        {\r\n                            if (s.SelectedOption.Text == \"Horizontal\")\r\n                                stack.Horizontal();\r\n                            else if (s.SelectedOption.Text == \"Vertical\")\r\n                                stack.Vertical();\r\n                            else if (s.SelectedOption.Text == \"Horizontal Reverse\")\r\n                                stack.HorizontalReverse();\r\n                            else if (s.SelectedOption.Text == \"Vertical Reverse\")\r\n                                stack.VerticalReverse();\r\n                        })\r\n                    )\r\n                    )\r\n                ),stack.HeightAuto())))\r\n               .Section(Stack().Children(SampleTitle(\"Advanced\"),\r\n                    Label(\"Stack with hover events\").SetContent(hoverStack\r\n                       .OnMouseOver((s, e) => otherButton.Show())\r\n                       .OnMouseOut((s,  e) => otherButton.Fade())\r\n                       .Children(mainButton.WS(), otherButton))));\r\n            SetChildren(stack, 5);\r\n        }\r\n\r\n        private void SetChildren(Stack stack, int count)\r\n        {\r\n            stack.Clear();\r\n            for (int i = 0; i < count; i++)\r\n            {\r\n                stack.Add(Button(i.ToString()));\r\n            }\r\n        }\r\n\r\n        public HTMLElement Render()\r\n        {\r\n            return _content.Render();\r\n        }\r\n    }\r\n}\r\n";
                        case "TextBlockSample": 
                            return "using System;\r\nusing Tesserae;\r\nusing static H5.Core.dom;\r\nusing static Tesserae.UI;\r\nusing static Tesserae.Tests.Samples.SamplesHelper;\r\n\r\nnamespace Tesserae.Tests.Samples\r\n{\r\n    public class TextBlockSample : IComponent\r\n    {\r\n        private readonly IComponent _content;\r\n\r\n        public TextBlockSample()\r\n        {\r\n            _content = SectionStack()\r\n                        .Title(SampleHeader(nameof(TextBlockSample)))\r\n                        .Section(Stack().Children(\r\n                            SampleTitle(\"Overview\"),\r\n                            TextBlock(\"Text is a component for displaying text. You can use Text to standardize text across your web app.\")))\r\n                        .Section(Stack().Children(\r\n                            SampleTitle(\"Usage\"),\r\n                            TextBlock(\"TextBox Ramp Example\").Medium(),\r\n                            Stack().Horizontal().Children(TextBlock(\"Variant\").Width(200.px()).SemiBold(), TextBlock(\"Example\").SemiBold()),\r\n                            Stack().Horizontal().Children(TextBlock(\"tiny\").Width(200.px()), TextBlock(\"The quick brown fox jumped over the lazy dog.\").Tiny()),\r\n                            Stack().Horizontal().Children(TextBlock(\"xSmall\").Width(200.px()), TextBlock(\"The quick brown fox jumped over the lazy dog.\").XSmall()),\r\n                            Stack().Horizontal().Children(TextBlock(\"small\").Width(200.px()), TextBlock(\"The quick brown fox jumped over the lazy dog.\").Small()),\r\n                            Stack().Horizontal().Children(TextBlock(\"smallPlus\").Width(200.px()), TextBlock(\"The quick brown fox jumped over the lazy dog.\").SmallPlus()),\r\n                            Stack().Horizontal().Children(TextBlock(\"medium\").Width(200.px()), TextBlock(\"The quick brown fox jumped over the lazy dog.\").Medium()),\r\n                            Stack().Horizontal().Children(TextBlock(\"mediumPlus\").Width(200.px()), TextBlock(\"The quick brown fox jumped over the lazy dog.\").MediumPlus()),\r\n                            Stack().Horizontal().Children(TextBlock(\"large\").Width(200.px()), TextBlock(\"The quick brown fox jumped over the lazy dog.\").Large()),\r\n                            Stack().Horizontal().Children(TextBlock(\"xLarge\").Width(200.px()), TextBlock(\"The quick brown fox jumped over the lazy dog.\").XLarge()),\r\n                            Stack().Horizontal().Children(TextBlock(\"xxLarge\").Width(200.px()), TextBlock(\"The quick brown fox jumped over the lazy dog.\").XXLarge()),\r\n                            Stack().Horizontal().Children(TextBlock(\"mega\").Width(200.px()), TextBlock(\"The quick brown fox jumped over the lazy dog.\").Mega()),\r\n                            TextBlock(\"TextBox Wrap Example\").Medium(),\r\n                            TextBlock(\"Wrap (Default)\").SmallPlus(),\r\n                            TextBlock(\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\").Width(50.percent()),\r\n                            TextBlock(\"No Wrap\").SmallPlus(),\r\n                            TextBlock(\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\").NoWrap().Width(50.percent())));\r\n        }\r\n\r\n        public HTMLElement Render()\r\n        {\r\n            return _content.Render();\r\n        }\r\n    }\r\n}\r\n";
                        case "TextBoxSample": 
                            return "using System;\r\nusing Tesserae;\r\nusing static H5.Core.dom;\r\nusing static Tesserae.UI;\r\nusing static Tesserae.Tests.Samples.SamplesHelper;\r\n\r\nnamespace Tesserae.Tests.Samples\r\n{\r\n    public class TextBoxSample : IComponent\r\n    {\r\n        private readonly IComponent _content;\r\n\r\n        public TextBoxSample()\r\n        {\r\n            _content = SectionStack()\r\n            .Title(SampleHeader(nameof(TextBoxSample)))\r\n            .Section(Stack().Children(\r\n                SampleTitle(\"Overview\"),\r\n                TextBlock(\"The TextBox component enables a user to type text into an app. The text displays on the screen in a simple, uniform format.\")))\r\n            .Section(Stack().Children(\r\n                SampleTitle(\"Best Practices\"),\r\n                Stack().Horizontal().Children(\r\n                Stack().Width(40.percent()).Children(\r\n                    SampleSubTitle(\"Do\"),\r\n                    SampleDo(\"Use the TextBox to accept data input on a form or page.\"),\r\n                    SampleDo(\"Label the TextBox with a helpful name.\"),\r\n                    SampleDo(\"Provide concise helper text that specifies what content is expected to be entered.\"),\r\n                    SampleDo(\"When part of a form, provide clear designations for which TextBox are required vs. optional.\"),\r\n                    SampleDo(\"Provide all appropriate methods for submitting provided data (e.g. dedicated \u2018Submit\u2019 button).\"),\r\n                    SampleDo(\"Provide all appropriate methods of clearing provided data (\u2018X\u2019 or something similar).\"),\r\n                    SampleDo(\"Allow for selection, copy and paste of field data.\"),\r\n                    SampleDo(\"Ensure that the TextBox is functional through use of mouse/keyboard or touch when available.\")\r\n                ),\r\n                Stack().Width(40.percent()).Children(\r\n                    SampleSubTitle(\"Don't\"),\r\n                    SampleDont(\"Don't use a TextBox to render basic copy as part of a body element of a page.\"),\r\n                    SampleDont(\"Don't provide an unlabeled TextBox and expect that users will know what to do with it.\"),\r\n                    SampleDont(\"Don't place a TextBox inline with body copy.\"),\r\n                    SampleDont(\"Don't be overly verbose with helper text.\"),\r\n                    SampleDont(\"Don't occlude the entry or allow entry when the active content is not visible.\")\r\n                )\r\n            )))\r\n            .Section(Stack().Children(\r\n                SampleTitle(\"Usage\"),\r\n                TextBlock(\"Basic TextBox\").Medium(),\r\n                Stack().Width(40.percent()).Children(\r\n                    Label(\"Standard\").SetContent(TextBox()),\r\n                    Label(\"Disabled\").Disabled().SetContent(TextBox(\"I am disabled\").Disabled()),\r\n                    Label(\"Read-only\").SetContent(TextBox(\"I am read-only\").ReadOnly()),\r\n                    Label(\"Password\").SetContent(TextBox(\"I am a password box\").Password()),\r\n                    Label(\"Required\").Required().SetContent(TextBox(\"\")),\r\n                    TextBox(\"\").Required(),\r\n                    Label(\"With error message\").SetContent(TextBox().Error(\"Error message\").IsInvalid()),\r\n                    Label(\"With placeholder\").SetContent(TextBox().SetPlaceholder(\"Please enter text here\")),\r\n                    Label(\"With validation\").SetContent(TextBox().Validation((tb) => tb.Text.Length == 0 ? \"Empty\" : null)),\r\n                    Label(\"With validation on type\").SetContent(TextBox().Validation(Validation.NonZeroPositiveInteger)),\r\n                    Label(\"Disabled with placeholder\").Disabled().SetContent(TextBox().SetPlaceholder(\"I am disabled\").Disabled()))));\r\n        }\r\n\r\n        public HTMLElement Render()\r\n        {\r\n            return _content.Render();\r\n        }\r\n    }\r\n}\r\n";
                        case "TextBreadcrumbsSample": 
                            return "using static H5.Core.dom;\r\nusing static Tesserae.UI;\r\nusing static Tesserae.Tests.Samples.SamplesHelper;\r\n\r\nnamespace Tesserae.Tests.Samples\r\n{\r\n    public class TextBreadcrumbsSample : IComponent\r\n    {\r\n        private readonly IComponent _content;\r\n\r\n        public TextBreadcrumbsSample()\r\n        {\r\n            _content = SectionStack()\r\n               .Title(SampleHeader(nameof(TextBreadcrumbsSample)))\r\n               .Section(Stack().Children(\r\n                    SampleTitle(\"Overview\"),\r\n                    TextBlock(\"TextBreadcrumbs should be used as a navigational aid in your app or site. They indicate the current page\u2019s location within a hierarchy and help the user understand where they are in relation to the rest of that hierarchy. They also afford one-click access to higher levels of that hierarchy.\"),\r\n                    TextBlock(\"TextBreadcrumbs are typically placed, in horizontal form, under the masthead or navigation of an experience, above the primary content area.\")))\r\n               .Section(Stack().Children(\r\n                    SampleTitle(\"Best Practices\"),\r\n                    Stack().Horizontal().Children(\r\n                        Stack().Width(40.percent()).Children(\r\n                            SampleSubTitle(\"Do\"),\r\n                            SampleDo(\"Place TextBreadcrumbs at the top of a page, above a list of items, or above the main content of a page.\")\r\n                        ),\r\n                        Stack().Width(40.percent()).Children(\r\n                            SampleSubTitle(\"Don't\"),\r\n                            SampleDont(\"Don't use TextBreadcrumbs as a primary way to navigate an app or site.\")))))\r\n               .Section(Stack().WS().Children(\r\n                    SampleTitle(\"Usage\"),\r\n                    Label(\"Selected: \").SetContent(TextBlock().Var(out var msg)),\r\n                    TextBlock(\"All Visible\").Medium(),\r\n                    TextBreadcrumbs().MaxWidth(100.percent()).PaddingTop(16.px()).PaddingBottom(16.px()).Items(\r\n                        TextBreadcrumb(\"Folder 1\").OnClick((s, e) => msg.Text(\"Folder 1\")),\r\n                        TextBreadcrumb(\"Folder 2\").OnClick((s, e) => msg.Text(\"Folder 2\")),\r\n                        TextBreadcrumb(\"Folder 3\").OnClick((s, e) => msg.Text(\"Folder 3\")),\r\n                        TextBreadcrumb(\"Folder 4\").OnClick((s, e) => msg.Text(\"Folder 4\")),\r\n                        TextBreadcrumb(\"Folder 4\").OnClick((s, e) => msg.Text(\"Folder 4\")),\r\n                        TextBreadcrumb(\"Folder 4\").OnClick((s, e) => msg.Text(\"Folder 4\")),\r\n                        TextBreadcrumb(\"Folder 4\").OnClick((s, e) => msg.Text(\"Folder 4\")),\r\n                        TextBreadcrumb(\"Folder 4\").OnClick((s, e) => msg.Text(\"Folder 4\")),\r\n                        TextBreadcrumb(\"Folder 4\").OnClick((s, e) => msg.Text(\"Folder 4\")),\r\n                        TextBreadcrumb(\"Folder 4\").OnClick((s, e) => msg.Text(\"Folder 4\")),\r\n                        TextBreadcrumb(\"Folder 4\").OnClick((s, e) => msg.Text(\"Folder 4\")),\r\n                        TextBreadcrumb(\"Folder 4\").OnClick((s, e) => msg.Text(\"Folder 4\")),\r\n                        TextBreadcrumb(\"Folder 4\").OnClick((s, e) => msg.Text(\"Folder 4\")),\r\n                        TextBreadcrumb(\"Folder 4\").OnClick((s, e) => msg.Text(\"Folder 4\")),\r\n                        TextBreadcrumb(\"Folder 4\").OnClick((s, e) => msg.Text(\"Folder 4\")),\r\n                        TextBreadcrumb(\"Folder 5\").OnClick((s, e) => msg.Text(\"Folder 5\")),\r\n                        TextBreadcrumb(\"Folder 6\").OnClick((s, e) => msg.Text(\"Folder 6\"))),\r\n                    TextBlock(\"All Visible, Small\").Medium(),\r\n                    TextBreadcrumbs().MaxWidth(100.percent()).PaddingTop(16.px()).PaddingBottom(16.px()).Items(\r\n                        TextBreadcrumb(\"Folder 1\").OnClick((s, e) => msg.Text(\"Folder 1\")),\r\n                        TextBreadcrumb(\"Folder 2\").OnClick((s, e) => msg.Text(\"Folder 2\")),\r\n                        TextBreadcrumb(\"Folder 3\").OnClick((s, e) => msg.Text(\"Folder 3\")),\r\n                        TextBreadcrumb(\"Folder 4\").OnClick((s, e) => msg.Text(\"Folder 4\")),\r\n                        TextBreadcrumb(\"Folder 5\").OnClick((s, e) => msg.Text(\"Folder 5\")),\r\n                        TextBreadcrumb(\"Folder 6\").OnClick((s, e) => msg.Text(\"Folder 6\"))),\r\n                    TextBlock(\"Collapse 200px\").Medium(),\r\n                    TextBreadcrumbs().MaxWidth(100.percent()).PaddingTop(16.px()).PaddingBottom(16.px()).MaxWidth(200.px()).Items(\r\n                        TextBreadcrumb(\"Folder 1\").OnClick((s, e) => msg.Text(\"Folder 1\")),\r\n                        TextBreadcrumb(\"Folder 2\").OnClick((s, e) => msg.Text(\"Folder 2\")),\r\n                        TextBreadcrumb(\"Folder 3\").OnClick((s, e) => msg.Text(\"Folder 3\")),\r\n                        TextBreadcrumb(\"Folder 4\").OnClick((s, e) => msg.Text(\"Folder 4\")),\r\n                        TextBreadcrumb(\"Folder 5\").OnClick((s, e) => msg.Text(\"Folder 5\")),\r\n                        TextBreadcrumb(\"Folder 6\").OnClick((s, e) => msg.Text(\"Folder 6\"))),\r\n                    TextBlock(\"Collapse 200px, Small\").Medium(),\r\n                    TextBreadcrumbs().MaxWidth(100.percent()).PaddingTop(16.px()).PaddingBottom(16.px()).MaxWidth(200.px()).Items(\r\n                        TextBreadcrumb(\"Folder 1\").OnClick((s, e) => msg.Text(\"Folder 1\")),\r\n                        TextBreadcrumb(\"Folder 2\").OnClick((s, e) => msg.Text(\"Folder 2\")),\r\n                        TextBreadcrumb(\"Folder 3\").OnClick((s, e) => msg.Text(\"Folder 3\")),\r\n                        TextBreadcrumb(\"Folder 4\").OnClick((s, e) => msg.Text(\"Folder 4\")),\r\n                        TextBreadcrumb(\"Folder 5\").OnClick((s, e) => msg.Text(\"Folder 5\")),\r\n                        TextBreadcrumb(\"Folder 6\").OnClick((s, e) => msg.Text(\"Folder 6\"))),\r\n                    TextBlock(\"Collapse 300px\").Medium(),\r\n                    TextBreadcrumbs().MaxWidth(100.percent()).PaddingTop(16.px()).PaddingBottom(16.px()).MaxWidth(300.px()).Items(\r\n                        TextBreadcrumb(\"Folder 1\").OnClick((s, e) => msg.Text(\"Folder 1\")),\r\n                        TextBreadcrumb(\"Folder 2\").OnClick((s, e) => msg.Text(\"Folder 2\")),\r\n                        TextBreadcrumb(\"Folder 3\").OnClick((s, e) => msg.Text(\"Folder 3\")),\r\n                        TextBreadcrumb(\"Folder 4\").OnClick((s, e) => msg.Text(\"Folder 4\")),\r\n                        TextBreadcrumb(\"Folder 5\").OnClick((s, e) => msg.Text(\"Folder 5\")),\r\n                        TextBreadcrumb(\"Folder 6\").OnClick((s, e) => msg.Text(\"Folder 6\"))),\r\n                    TextBlock(\"Collapse 300px, from second, custom chevron\").Medium(),\r\n                    TextBreadcrumbs().MaxWidth(100.percent()).PaddingTop(16.px()).PaddingBottom(16.px()).MaxWidth(300.px()).Items(\r\n                        TextBreadcrumb(\"Folder 1\").OnClick((s, e) => msg.Text(\"Folder 1\")),\r\n                        TextBreadcrumb(\"Folder 2\").OnClick((s, e) => msg.Text(\"Folder 2\")),\r\n                        TextBreadcrumb(\"Folder 3\").OnClick((s, e) => msg.Text(\"Folder 3\")),\r\n                        TextBreadcrumb(\"Folder 4\").OnClick((s, e) => msg.Text(\"Folder 4\")),\r\n                        TextBreadcrumb(\"Folder 5\").OnClick((s, e) => msg.Text(\"Folder 5\")),\r\n                        TextBreadcrumb(\"Folder 6\").OnClick((s, e) => msg.Text(\"Folder 6\")))\r\n                ));\r\n        }\r\n\r\n        public HTMLElement Render()\r\n        {\r\n            return _content.Render();\r\n        }\r\n    }\r\n}";
                        case "ThemeColorsSample": 
                            return "using System;\r\nusing System.Collections.Generic;\r\nusing static H5.Core.dom;\r\nusing static Tesserae.UI;\r\nusing static Tesserae.Tests.Samples.SamplesHelper;\r\n\r\nnamespace Tesserae.Tests.Samples\r\n{\r\n    public class ThemeColorsSample : IComponent\r\n    {\r\n        private IComponent _content;\r\n\r\n\r\n        public ThemeColorsSample()\r\n        {\r\n            _content = SectionStack()\r\n               .Title(SampleHeader(nameof(ThemeColorsSample)))\r\n               .Section(\r\n                    Stack().Children(\r\n                        DetailsList<ColorListItem>(\r\n                                DetailsListColumn(title: \"ThemeName\",        width: 120.px()),\r\n                                DetailsListColumn(title: \"Background\",       width: 160.px()),\r\n                                DetailsListColumn(title: \"Foreground\",       width: 160.px()),\r\n                                DetailsListColumn(title: \"Border\",           width: 160.px()),\r\n                                DetailsListColumn(title: \"BackgroundActive\", width: 160.px()),\r\n                                DetailsListColumn(title: \"BackgroundHover\",  width: 160.px()),\r\n                                DetailsListColumn(title: \"ForegroundActive\", width: 160.px()),\r\n                                DetailsListColumn(title: \"ForegroundHover\",  width: 160.px()))\r\n                           .Compact()\r\n                           .Height(500.px())\r\n                           .WithListItems(new[]\r\n                            {\r\n                                new ColorListItem(\"Default\"),\r\n                                new ColorListItem(\"Primary\"),\r\n                                new ColorListItem(\"Secondary\"),\r\n                                new ColorListItem(\"Success\"),\r\n                                new ColorListItem(\"Danger\")\r\n                            })\r\n                           .SortedBy(\"Name\")\r\n                    ));\r\n        }\r\n\r\n        public HTMLElement Render()\r\n        {\r\n            return _content.Render();\r\n        }\r\n\r\n\r\n        public class ColorListItem : IDetailsListItem<ColorListItem>\r\n        {\r\n            public string ThemeName { get; }\r\n\r\n            public static Dictionary<string, Dictionary<string, string>> Mapping = new Dictionary<string, Dictionary<string, string>>()\r\n            {\r\n                {\r\n                    \"Default\", new Dictionary<string, string>\r\n                    {\r\n                        {nameof(Theme.Default.Background), Theme.Default.Background},\r\n                        {nameof(Theme.Default.Foreground), Theme.Default.Foreground},\r\n                        {nameof(Theme.Default.Border), Theme.Default.Border},\r\n                        {nameof(Theme.Default.BackgroundActive), Theme.Default.BackgroundActive},\r\n                        {nameof(Theme.Default.BackgroundHover), Theme.Default.BackgroundHover},\r\n                        {nameof(Theme.Default.ForegroundActive), Theme.Default.ForegroundActive},\r\n                        {nameof(Theme.Default.ForegroundHover), Theme.Default.ForegroundHover},\r\n\r\n                    }\r\n                },\r\n                {\r\n                    \"Primary\", new Dictionary<string, string>\r\n                    {\r\n                        {nameof(Theme.Primary.Background), Theme.Primary.Background},\r\n                        {nameof(Theme.Primary.Foreground), Theme.Primary.Foreground},\r\n                        {nameof(Theme.Primary.Border), Theme.Primary.Border},\r\n                        {nameof(Theme.Primary.BackgroundActive), Theme.Primary.BackgroundActive},\r\n                        {nameof(Theme.Primary.BackgroundHover), Theme.Primary.BackgroundHover},\r\n                        {nameof(Theme.Primary.ForegroundActive), Theme.Primary.ForegroundActive},\r\n                        {nameof(Theme.Primary.ForegroundHover), Theme.Primary.ForegroundHover},\r\n                    }\r\n                },\r\n                {\r\n                    \"Secondary\", new Dictionary<string, string>()\r\n                    {\r\n                        {nameof(Theme.Secondary.Background), Theme.Secondary.Background},\r\n                        {nameof(Theme.Secondary.Foreground), Theme.Secondary.Foreground},\r\n//                {nameof(Theme.Secondary.Border), Theme.Secondary.Border},\r\n//                {nameof(Theme.Secondary.BackgroundActive), Theme.Secondary.BackgroundActive},\r\n//                {nameof(Theme.Secondary.BackgroundHover), Theme.Secondary.BackgroundHover},\r\n//                {nameof(Theme.Secondary.ForegroundActive), Theme.Secondary.ForegroundActive},\r\n//                {nameof(Theme.Secondary.ForegroundHover), Theme.Secondary.ForegroundHover},   \r\n                    }\r\n                },\r\n                {\r\n                    \"Danger\", new Dictionary<string, string>()\r\n                    {\r\n                        {nameof(Theme.Danger.Background), Theme.Danger.Background},\r\n                        {nameof(Theme.Danger.Foreground), Theme.Danger.Foreground},\r\n                        {nameof(Theme.Danger.Border), Theme.Danger.Border},\r\n                        {nameof(Theme.Danger.BackgroundActive), Theme.Danger.BackgroundActive},\r\n                        {nameof(Theme.Danger.BackgroundHover), Theme.Danger.BackgroundHover},\r\n                        {nameof(Theme.Danger.ForegroundActive), Theme.Danger.ForegroundActive},\r\n                        {nameof(Theme.Danger.ForegroundHover), Theme.Danger.ForegroundHover},\r\n                    }\r\n                },\r\n                {\r\n                    \"Success\", new Dictionary<string, string>\r\n                    {\r\n                        {nameof(Theme.Success.Background), Theme.Success.Background},\r\n                        {nameof(Theme.Success.Foreground), Theme.Success.Foreground},\r\n                        {nameof(Theme.Success.Border), Theme.Success.Border},\r\n                        {nameof(Theme.Success.BackgroundActive), Theme.Success.BackgroundActive},\r\n                        {nameof(Theme.Success.BackgroundHover), Theme.Success.BackgroundHover},\r\n                        {nameof(Theme.Success.ForegroundActive), Theme.Success.ForegroundActive},\r\n                        {nameof(Theme.Success.ForegroundHover), Theme.Success.ForegroundHover},\r\n                    }\r\n                }\r\n            };\r\n\r\n            public ColorListItem(string themeName)\r\n            {\r\n                ThemeName = themeName;\r\n            }\r\n\r\n\r\n            private static IComponent ColorSquare(string color)\r\n            {\r\n                if (string.IsNullOrWhiteSpace(color))\r\n                {\r\n                    return Raw(Div(_( styles: (s) =>\r\n                    {\r\n                        s.width     = \"50px\";\r\n                        s.height    = \"49px\";\r\n//                        s.boxShadow = \"1px 1px 1px 1px lightgrey\";\r\n                    })));\r\n                }\r\n\r\n                return Raw(Div(_(styles: (s) =>\r\n                {\r\n                    s.width           = \"50px\";\r\n                    s.height          = \"49px\";\r\n                    s.backgroundColor = color;\r\n                    s.color           = color;\r\n                    s.borderColor     = color;\r\n                    s.boxShadow       = \"1px 1px 1px 1px lightgrey\";\r\n                })));\r\n            }\r\n\r\n            public int CompareTo(ColorListItem other, string columnSortingKey)\r\n            {\r\n                return 0;\r\n            }\r\n\r\n            public bool EnableOnListItemClickEvent => false;\r\n\r\n            public void OnListItemClick(int listItemIndex)\r\n            {\r\n//                throw new NotImplementedException();\r\n                //TODO pius: pn click copy color to clipboard\r\n\r\n                Toast().Information(listItemIndex.ToString());\r\n            }\r\n\r\n            public IEnumerable<IComponent> Render(IList<IDetailsListColumn> columns, Func<IDetailsListColumn, Func<IComponent>, IComponent> createGridCellExpression)\r\n            {\r\n                yield return createGridCellExpression(columns[0], () => TextBlock(ThemeName));\r\n                yield return createGridCellExpression(columns[1], () => ColorSquare(Mapping[ThemeName].GetValueOrDefault(\"Background\",       \"\")));\r\n                yield return createGridCellExpression(columns[2], () => ColorSquare(Mapping[ThemeName].GetValueOrDefault(\"Foreground\",       \"\")));\r\n                yield return createGridCellExpression(columns[3], () => ColorSquare(Mapping[ThemeName].GetValueOrDefault(\"Border\",           \"\")));\r\n                yield return createGridCellExpression(columns[4], () => ColorSquare(Mapping[ThemeName].GetValueOrDefault(\"BackgroundActive\", \"\")));\r\n                yield return createGridCellExpression(columns[5], () => ColorSquare(Mapping[ThemeName].GetValueOrDefault(\"BackgroundHover\",  \"\")));\r\n                yield return createGridCellExpression(columns[6], () => ColorSquare(Mapping[ThemeName].GetValueOrDefault(\"ForegroundActive\", \"\")));\r\n                yield return createGridCellExpression(columns[7], () => ColorSquare(Mapping[ThemeName].GetValueOrDefault(\"ForegroundHover\",  \"\")));\r\n            }\r\n        }\r\n    }\r\n}";
                        case "TimelineSample": 
                            return "using System.Collections.Generic;\r\nusing System.Linq;\r\nusing Tesserae;\r\nusing static Tesserae.Tests.Samples.SamplesHelper;\r\nusing static Tesserae.UI;\r\nusing static H5.Core.dom;\r\n\r\nnamespace Tesserae.Tests.Samples\r\n{\r\n    public class TimelineSample : IComponent\r\n    {\r\n        private readonly IComponent _content;\r\n\r\n        public TimelineSample()\r\n        {\r\n            var obsList = new ObservableList<IComponent>();\r\n\r\n            var vs = VisibilitySensor((v) =>\r\n            {\r\n                obsList.Remove(v);\r\n                obsList.AddRange(GetSomeItems(20));\r\n                v.Reset();\r\n                obsList.Add(v);\r\n            });\r\n\r\n            obsList.AddRange(GetSomeItems(10));\r\n            obsList.Add(vs);\r\n            _content = SectionStack().WidthStretch()\r\n                        .Title(SampleHeader(nameof(TimelineSample)))\r\n                    .Section(\r\n                        Stack()\r\n                            .Children(\r\n                                SampleTitle(\"Overview\"),\r\n                                TextBlock(\"Timeline provides a base component for rendering vertical timelines. \" +\r\n                                          \"It is agnostic of the tile component used, and selection \" +\r\n                                          \"management. These concerns can be layered separately.\")\r\n                                    .PaddingBottom(16.px())))\r\n                    .Section(\r\n                        Stack()\r\n                            .Children(\r\n                                SampleTitle(\"Usage\"),\r\n                                TextBlock(\"Timeline\").Medium().PaddingBottom(16.px()),\r\n                                Timeline().Children(GetSomeItems(10)).PaddingBottom(16.px()).Height(500.px()).PaddingBottom(32.px()),\r\n\r\n                                TextBlock(\"Timeline with Max Width\").Medium().PaddingBottom(16.px()),\r\n                                Timeline().TimelineWidth(600.px()).Children(GetSomeItems(10)).PaddingBottom(16.px()).Height(500.px()).PaddingBottom(32.px()),\r\n\r\n                                TextBlock(\"Timeline Same Side\").Medium().PaddingBottom(16.px()),\r\n                                Timeline().SameSide().Children(GetSomeItems(10)).PaddingBottom(16.px()).Height(500.px()).PaddingBottom(32.px()),\r\n\r\n                                TextBlock(\"Timeline Same Side with Max Width\").Medium().PaddingBottom(16.px()),\r\n                                Timeline().TimelineWidth(600.px()).SameSide().Children(GetSomeItems(10)).PaddingBottom(16.px()).Height(500.px()).PaddingBottom(32.px())\r\n\r\n                                ));\r\n        }\r\n\r\n        public HTMLElement Render()\r\n        {\r\n            return _content.Render();\r\n        }\r\n\r\n        private IComponent[] GetSomeItems(int count)\r\n        {\r\n            return Enumerable\r\n                .Range(1, count)\r\n                .Select(number => TextBlock($\"Lorem Ipsum {number}\").NonSelectable())\r\n                .ToArray();\r\n        }\r\n    }\r\n}\r\n";
                        case "ToastSample": 
                            return "using System;\r\nusing Tesserae;\r\nusing static H5.Core.dom;\r\nusing static Tesserae.UI;\r\nusing static Tesserae.Tests.Samples.SamplesHelper;\r\n\r\nnamespace Tesserae.Tests.Samples\r\n{\r\n    public class ToastSample : IComponent\r\n    {\r\n        private readonly IComponent _content;\r\n\r\n        public ToastSample()\r\n        {\r\n            _content = SectionStack()\r\n                        .Title(SampleHeader(nameof(ToastSample)))\r\n                        .Section(Stack().WidthStretch().Children(\r\n                            SampleTitle(\"Overview\"),\r\n                            TextBlock(\"Toasts are used for short-lived notifications to users.\")))\r\n                        .Section(Stack().WidthStretch().Children(\r\n                            SampleTitle(\"Best Practices\"),\r\n                                SplitView().SplitInMiddle().Left(\r\n                                    Stack().WidthStretch().Children(\r\n                                        SampleSubTitle(\"Do\"),\r\n                                        SampleDo(\"Write short and recognizable messages\"),\r\n                                        SampleDo(\"Keep toasts long enough to be read, but not long enough to bother\")))\r\n                                    .Right(Stack().WidthStretch().Children(\r\n                                            SampleSubTitle(\"Don't\"),\r\n                                            SampleDont(\"Overload users with toasts.\")))))\r\n                        .Section(\r\n                            Stack().WidthStretch().Children(\r\n                                SampleTitle(\"Usage\"),\r\n                                SampleSubTitle(\"Toasts top-right (default)\"),\r\n                                Stack().Horizontal().Children(\r\n                                    Button().SetText(\"Info\").OnClick((s, e) => Toast().Information(\"Info!\")),\r\n                                    Button().SetText(\"Success\").OnClick((s, e) => Toast().Success(\"Success!\")),\r\n                                    Button().SetText(\"Warning\").OnClick((s, e) => Toast().Warning(\"Warning!\")),\r\n                                    Button().SetText(\"Error\").OnClick((s, e) => Toast().Error(\"Error!\"))),\r\n\r\n                                SampleSubTitle(\"Toasts top left\"),\r\n                                Stack().Horizontal().Children(\r\n                                    Button().SetText(\"Info\").OnClick((s, e) => Toast().TopLeft().Information(\"Info!\")),\r\n                                    Button().SetText(\"Success\").OnClick((s, e) => Toast().TopLeft().Success(\"Success!\")),\r\n                                    Button().SetText(\"Warning\").OnClick((s, e) => Toast().TopLeft().Warning(\"Warning!\")),\r\n                                    Button().SetText(\"Error\").OnClick((s, e) => Toast().TopLeft().Error(\"Error!\"))),\r\n\r\n                                SampleSubTitle(\"Toasts bottom right\"),\r\n                                Stack().Horizontal().Children(\r\n                                    Button().SetText(\"Info\").OnClick((s, e) => Toast().BottomRight().Information(\"Info!\")),\r\n                                    Button().SetText(\"Success\").OnClick((s, e) => Toast().BottomRight().Success(\"Success!\")),\r\n                                    Button().SetText(\"Warning\").OnClick((s, e) => Toast().BottomRight().Warning(\"Warning!\")),\r\n                                    Button().SetText(\"Error\").OnClick((s, e) => Toast().BottomRight().Error(\"Error!\"))),\r\n\r\n                                SampleSubTitle(\"Toasts bottom left\"),\r\n                                Stack().Horizontal().Children(\r\n                                    Button().SetText(\"Info\").OnClick((s, e) => Toast().BottomLeft().Information(\"Info!\")),\r\n                                    Button().SetText(\"Success\").OnClick((s, e) => Toast().BottomLeft().Success(\"Success!\")),\r\n                                    Button().SetText(\"Warning\").OnClick((s, e) => Toast().BottomLeft().Warning(\"Warning!\")),\r\n                                    Button().SetText(\"Error\").OnClick((s, e) => Toast().BottomLeft().Error(\"Error!\"))),\r\n\r\n                                SampleSubTitle(\"Toasts top center with title\"),\r\n                                Stack().Horizontal().Children(\r\n                                    Button().SetText(\"Info\").OnClick((s, e) => Toast().TopCenter().Information(\"This is a title\", \"Info!\")),\r\n                                    Button().SetText(\"Success\").OnClick((s, e) => Toast().TopCenter().Success(\"This is a title\", \"Success!\")),\r\n                                    Button().SetText(\"Warning\").OnClick((s, e) => Toast().TopCenter().Warning(\"This is a title\", \"Warning!\")),\r\n                                    Button().SetText(\"Error\").OnClick((s, e) => Toast().TopCenter().Error(\"This is a title\", \"Error!\"))),\r\n\r\n                                SampleSubTitle(\"Toasts top full with title\"),\r\n                                Stack().Horizontal().Children(\r\n                                    Button().SetText(\"Info\").OnClick((s, e) => Toast().TopFull().Information(\"This is a title\", \"Info!\")),\r\n                                    Button().SetText(\"Success\").OnClick((s, e) => Toast().TopFull().Success(\"This is a title\", \"Success!\")),\r\n                                    Button().SetText(\"Warning\").OnClick((s, e) => Toast().TopFull().Warning(\"This is a title\", \"Warning!\")),\r\n                                    Button().SetText(\"Error\").OnClick((s, e) => Toast().TopFull().Error(\"This is a title\", \"Error!\"))),\r\n\r\n                                SampleSubTitle(\"Toasts bottom center with title\"),\r\n                                Stack().Horizontal().Children(\r\n                                    Button().SetText(\"Info\").OnClick((s, e) => Toast().BottomCenter().Information(\"This is a title\", \"Info!\")),\r\n                                    Button().SetText(\"Success\").OnClick((s, e) => Toast().BottomCenter().Success(\"This is a title\", \"Success!\")),\r\n                                    Button().SetText(\"Warning\").OnClick((s, e) => Toast().BottomCenter().Warning(\"This is a title\", \"Warning!\")),\r\n                                    Button().SetText(\"Error\").OnClick((s, e) => Toast().BottomCenter().Error(\"This is a title\", \"Error!\"))),\r\n\r\n                                SampleSubTitle(\"Toasts bottom full with title\"),\r\n                                Stack().Horizontal().Children(\r\n                                    Button().SetText(\"Info\").OnClick((s, e) => Toast().BottomFull().Information(\"This is a title\", \"Info!\")),\r\n                                    Button().SetText(\"Success\").OnClick((s, e) => Toast().BottomFull().Success(\"This is a title\", \"Success!\")),\r\n                                    Button().SetText(\"Warning\").OnClick((s, e) => Toast().BottomFull().Warning(\"This is a title\", \"Warning!\")),\r\n                                    Button().SetText(\"Error\").OnClick((s, e) => Toast().BottomFull().Error(\"This is a title\", \"Error!\")))));\r\n        }\r\n\r\n        public HTMLElement Render()\r\n        {\r\n            return _content.Render();\r\n        }\r\n    }\r\n}\r\n";
                        case "ToggleSample": 
                            return "using System;\r\nusing Tesserae;\r\nusing static H5.Core.dom;\r\nusing static Tesserae.UI;\r\nusing static Tesserae.Tests.Samples.SamplesHelper;\r\n\r\nnamespace Tesserae.Tests.Samples\r\n{\r\n    public class ToggleSample : IComponent\r\n    {\r\n        private readonly IComponent _content;\r\n\r\n        public ToggleSample()\r\n        {\r\n            _content = SectionStack()\r\n                        .Title(SampleHeader(nameof(ToggleSample)))\r\n                        .Section(Stack().Children(\r\n                            SampleTitle(\"Overview\"),\r\n                            TextBlock(\"Toggles represent a physical switch that allows users to turn things on or off. Use Toggles to present users with two mutually exclusive options (like on/off), where choosing an option results in an immediate action. Use a Toggle for binary operations that take effect right after the user flips the Toggle. For example, use a Toggle to turn services or hardware components on or off. In other words, if a physical switch would work for the action, a Toggle is probably the best control to use.\"),\r\n                            TextBlock(\"Choosing between Toggle and Checkbox\").Medium(),\r\n                            TextBlock(\"For some actions, either a Toggle or a Checkbox might work. To decide which control would work better, follow these tips:\"),\r\n                            TextBlock(\"Use a Toggle for binary settings when changes become effective immediately after the user changes them.\"),\r\n                            TextBlock(\"In the above example, it's clear with the Toggle that the wireless is set to \\\"On.\\\" But with the Checkbox, the user needs to think about whether the wireless is on now or whether they need to check the box to turn wireless on.\"),\r\n                            TextBlock(\"Use a Checkbox when the user has to perform extra steps for changes to be effective. For example, if the user must click a \\\"Submit\\\", \\\"Next\\\", \\\"Ok\\\" button to apply changes, use a Checkbox.\")))\r\n                        .Section(Stack().Children(\r\n                            SampleTitle(\"Best Practices\"),\r\n                            Stack().Horizontal().Children(\r\n                            Stack().Width(40.percent()).Children(\r\n                            SampleSubTitle(\"Do\"),\r\n                            SampleDo(\"Only replace the On and Off labels if there are more specific labels for the setting. If there are short (3-4 characters) labels that represent binary opposites that are more appropriate for a particular setting, use them. \")\r\n                        ),\r\n                        Stack().Width(40.percent()).Children(\r\n                            SampleSubTitle(\"Don't\"),\r\n                            SampleDont(\"Don\u2019t use a Toggle if the user will have to do something else or go somewhere else in order to experience its effect. If any extra step is required for changes to be effective, you should use a checkbox and corresponding \\\"Apply\\\" button instead of a Toggle.\")\r\n                        )\r\n                        )))\r\n                        .Section(Stack().Children(\r\n                            SampleTitle(\"Usage\"),\r\n                            TextBlock(\"Basic Toggles\").Medium(),\r\n                            Label(\"Enabled and checked\").SetContent(Toggle().Checked()),\r\n                            Label(\"Enabled and unchecked\").SetContent(Toggle()),\r\n                            Label(\"Disabled and checked\").SetContent(Toggle().Checked().Disabled()),\r\n                            Label(\"Disabled and unchecked\").SetContent(Toggle().Disabled()),\r\n                            Label(\"With inline label\").Inline().SetContent(Toggle()),\r\n                            Label(\"Disabled with inline label\").Inline().SetContent(Toggle().Disabled()).Disabled(),\r\n                            Toggle(\"With inline label and without onText and offText\"),\r\n                            Toggle(\"Disabled with inline label and without onText and offText\").Disabled()));\r\n        }\r\n\r\n        public HTMLElement Render()\r\n        {\r\n            return _content.Render();\r\n        }\r\n    }\r\n}\r\n";
                        case "TutorialModalSample": 
                            return "using Tesserae;\r\nusing static H5.Core.dom;\r\nusing static Tesserae.Tests.Samples.SamplesHelper;\r\nusing static Tesserae.UI;\r\n\r\nnamespace Tesserae.Tests.Samples\r\n{\r\n    public class TutorialModalSample : IComponent\r\n    {\r\n        private readonly IComponent _content;\r\n\r\n        public TutorialModalSample()\r\n        {\r\n            var container = Raw();\r\n\r\n            _content = SectionStack()\r\n               .Title(SampleHeader(nameof(TutorialModalSample)))\r\n               .Section(Stack().Children(\r\n                    SampleTitle(\"Overview\"),\r\n                    TextBlock(\"Tutorial modals are used for processes where the user can be heavily guided, but still needs to enter data.\"),\r\n                    TextBlock(\"For usage requiring a quick choice from the user, Dialog may be a more appropriate control.\")))\r\n               .Section(Stack().Children(\r\n                    SampleTitle(\"Best Practices\"),\r\n                    Stack().Horizontal().Children(\r\n                        Stack().Width(40.percent()).Children(\r\n                            SampleSubTitle(\"Do\"),\r\n                            SampleDo(\"Use Modals for interactions where something is created and has multiple fields, such as creating a user.\"),\r\n                            SampleDo(\"Always have at least one focusable element inside a Modal.\")),\r\n                        Stack().Width(40.percent()).Children(\r\n                            SampleSubTitle(\"Don't\"),\r\n                            SampleDont(\"Don\u2019t overuse Tutorial Modals. In some cases they can be perceived as interrupting workflow, and too many can be a bad user experience.\")))))\r\n               .Section(Stack().Children(\r\n                    SampleTitle(\"Usage\"),\r\n                    Button(\"Open Tutorial Modal\").OnClick((s,       e) => SampleTutorialModal().Show()),\r\n                    Button(\"Open Large Tutorial Modal\").OnClick((s, e) => SampleTutorialModal().Height(90.vh()).Width(90.vw()).Show()),\r\n                    SampleTitle(\"Embedded Modal\"),\r\n                    Button(\"Open Modal Below\").OnClick((s, e) => container.Content(SampleTutorialModal().Border(\"#ffaf66\", 5.px()).ShowEmbedded())),\r\n                    container\r\n                ));\r\n        }\r\n\r\n        private static TutorialModal SampleTutorialModal()\r\n        {\r\n            return TutorialModal()\r\n               .Var(out var tutorialModal)\r\n               .SetTitle(\"This is a Tutorial Modal\")\r\n               .SetHelpText(\"Lorem ipsum dolor sit amet, consectetur adipiscing elit,<b> sed do </b> eiusmod tempor incididunt ut labore et dolore magna aliqua. \", treatAsHTML: true)\r\n               .SetImageSrc(\"./assets/img/box-img.svg\", 16.px())\r\n               .SetContent(\r\n                    VStack().S().ScrollY().Children(\r\n                        Label(\"Input 1\").SetContent(TextBox().SetPlaceholder(\"Enter your input here...\")),\r\n                        Label(\"Input 2\").SetContent(TextBox().SetPlaceholder(\"Enter your input here...\")),\r\n                        Label(\"Input 3\").SetContent(TextBox().SetPlaceholder(\"Enter your input here...\")),\r\n                        Label(\"Input 4\").SetContent(TextBox().SetPlaceholder(\"Enter your input here...\")),\r\n                        Label(\"Input 5\").SetContent(TextBox().SetPlaceholder(\"Enter your input here...\")),\r\n                        Label(\"Input 6\").SetContent(TextBox().SetPlaceholder(\"Enter your input here...\")),\r\n                        Label(\"Input 7\").SetContent(TextBox().SetPlaceholder(\"Enter your input here...\")),\r\n                        Label(\"Input 8\").SetContent(TextBox().SetPlaceholder(\"Enter your input here...\")),\r\n                        Label(\"Input 9\").SetContent(TextBox().SetPlaceholder(\"Enter your input here...\"))))\r\n               .SetFooterCommands(\r\n                    Button(\"Discard\").OnClick((_,        __) => tutorialModal.Hide()),\r\n                    Button(\"Save\").Primary().OnClick((_, __) => tutorialModal.Hide()));\r\n        }\r\n\r\n        public HTMLElement Render()\r\n        {\r\n            return _content.Render();\r\n        }\r\n    }\r\n}";
                        case "ValidatorSample": 
                            return "using Tesserae;\r\nusing static H5.Core.dom;\r\nusing static Tesserae.Tests.Samples.SamplesHelper;\r\nusing static Tesserae.UI;\r\n\r\nnamespace Tesserae.Tests.Samples\r\n{\r\n    public class ValidatorSample : IComponent\r\n    {\r\n        private readonly IComponent content;\r\n        public ValidatorSample()\r\n        {\r\n            var looksValidSoFar = TextBlock(\"?\");\r\n            var validator = Validator().OnValidation(validity => looksValidSoFar.Text = (validity == ValidationState.Invalid) ? \"Something is not ok \u274c\" : \"Everything is fine so far \u2714\");\r\n\r\n            // Note: The \"Required()\" calls on these components only marks them visually as being required - if they must have values then that must be accounted for in their Validation(..) logic\r\n            var textBoxThatMustBeNonEmpty = TextBox(\"\").Required();\r\n            var textBoxThatMustBePositiveInteger = TextBox(\"\").Required();\r\n            textBoxThatMustBeNonEmpty.Validation(tb => tb.Text.Length == 0 ? \"must enter a value\" : ((textBoxThatMustBeNonEmpty.Text == textBoxThatMustBePositiveInteger.Text) ? \"duplicated  values\" : null), validator);\r\n            textBoxThatMustBePositiveInteger.Validation(tb => Validation.NonZeroPositiveInteger(tb) ?? ((textBoxThatMustBeNonEmpty.Text == textBoxThatMustBePositiveInteger.Text) ? \"duplicated values\" : null), validator);\r\n\r\n            var preFilledTextBoxThatMustBePositiveIntegerWhoseValueIsValid = TextBox(\"123\").Required().Validation(Validation.NonZeroPositiveInteger, validator);\r\n            var preFilledTextBoxThatMustBePositiveIntegerWhoseValueIsNotValid = TextBox(\"xyz\").Required().Validation(Validation.NonZeroPositiveInteger, validator);\r\n\r\n            var dropdown = Dropdown().Items(DropdownItem(\"\"), DropdownItem(\"Item 1\"), DropdownItem(\"Item 2\")).Required().Validation(dd => string.IsNullOrWhiteSpace(dd.SelectedText) ? \"must select an item\" : null, validator);\r\n\r\n            content = SectionStack()\r\n                        .Title(SampleHeader(nameof(ValidatorSample)))\r\n                        .Section(Stack().Children(\r\n                            SampleTitle(\"Overview\"),\r\n                            TextBlock(\"The validator helper allows you to capture the state of multiple components registered on it.\")\r\n                        ))\r\n                        .Section(Stack().Children(\r\n                            SampleTitle(\"Best Practices\"),\r\n                            Stack().Horizontal().Children(\r\n                                Stack().Width(40.percent()).Children(\r\n                                    SampleSubTitle(\"Do\"),\r\n                                    SampleDo(\"Display useful validation warning messages to components for when the User has left them in an invalid state or when they have tried to submit a partially-populated form\")),\r\n                                Stack().Width(40.percent()).Children(\r\n                                    SampleSubTitle(\"Don't\"),\r\n                                    SampleDont(\"Display ALL validation warnings messages as soon as a form is rendered, give the User an opportunity to interact with it and enter valid values before shouting at them\")))\r\n                            )\r\n                        )\r\n                        .Section(\r\n                            Stack().Children(\r\n                                SampleTitle(\"Usage\"),\r\n                                TextBlock(\"Basic TextBox\").Medium(),\r\n                                Stack().Width(40.percent()).Padding(8.px()).Children(\r\n                                    Label(\"Non-empty\").SetContent(textBoxThatMustBeNonEmpty),\r\n                                    Label(\"Integer > 0 (must not match the value above)\").SetContent(textBoxThatMustBePositiveInteger),\r\n                                    Label(\"Pre-filled Integer > 0 (initially valid)\").SetContent(preFilledTextBoxThatMustBePositiveIntegerWhoseValueIsValid),\r\n                                    Label(\"Pre-filled Integer > 0 (initially invalid)\").SetContent(preFilledTextBoxThatMustBePositiveIntegerWhoseValueIsNotValid),\r\n                                    Label(\"Please select something\").SetContent(dropdown)\r\n                                ),\r\n                                TextBlock(\"Results Summary\").Medium(),\r\n                                Stack().Width(40.percent()).Padding(8.px()).Children(\r\n                                    Label(\"Validity (this only checks fields that User has interacted with so far)\").Inline().SetContent(looksValidSoFar),\r\n                                    Label(\"Test revalidation (will fail if repeated)\").SetContent(Button(\"Validate\").OnClick((s, b) => validator.Revalidate()))\r\n                                )\r\n                            )\r\n                        );\r\n\r\n            // 2020-09-16 DWR: The form here follows the pattern of not disabling the submit button (the \"Validate\" button in this case), so they can enter as much or as little of it as they want and then try to submit and if they\r\n            // have left required fields unfilled (or not corrected any pre-filled invalid values) then they will THEN be informed of it. But if we wanted to disable the form submit button until the form was known to be in a valid\r\n            // state then the \"AreCurrentValuesAllValid\" method can be called after the form is rendered and the button enabled state set accordingly and then updated after each ValidationOccured event.\r\n            console.log(\"Is form initially in a valid state: \" + validator.AreCurrentValuesAllValid());\r\n        }\r\n\r\n        public HTMLElement Render() => content.Render();\r\n    }\r\n}";
                        case "VirtualizedListSample": 
                            return "using System.Collections.Generic;\r\nusing System.Linq;\r\nusing Tesserae;\r\nusing static Tesserae.Tests.Samples.SamplesHelper;\r\nusing static Tesserae.UI;\r\nusing static H5.Core.dom;\r\n\r\nnamespace Tesserae.Tests.Samples\r\n{\r\n    public class VirtualizedListSample : IComponent\r\n    {\r\n        private readonly IComponent _content;\r\n\r\n        public VirtualizedListSample()\r\n        {\r\n            _content =\r\n                SectionStack()\r\n                    .Title(SampleHeader(nameof(VirtualizedListSample)))\r\n                    .Section(\r\n                        Stack()\r\n                            .Children(\r\n                                SampleTitle(\"Overview\"),\r\n                                TextBlock(\"List provides a base component for rendering large sets of items. \" +\r\n                                          \"It is agnostic of the tile component used, and selection \" +\r\n                                          \"management. These concerns can be layered separately.\")\r\n                                    .PaddingBottom(16.px()),\r\n                                TextBlock(\"Performance is important, and DOM content is expensive. Therefore, \" +\r\n                                          \"limit what you render. List applies this principle by using UI \" +\r\n                                          \"virtualization. Unlike a simple for loop that renders all items in \" +\r\n                                          \"a set, a List only renders a subset of items, and as you scroll around, \" +\r\n                                          \"the subset of rendered content is shifted. This gives a much \" +\r\n                                          \"better experience for large sets, especially when the \" +\r\n                                          \"per-item components are complex/render-intensive/network-intensive.\")\r\n                                    .PaddingBottom(16.px()),\r\n                                TextBlock(\"List breaks down the set of items passed in into pages. Only pages \" +\r\n                                          \"within a 'materialized window' are actually rendered. As that window \" +\r\n                                          \"changes due to scroll events, pages that fall outside that window are \" +\r\n                                          \"removed, and their layout space is remembered and pushed into spacer \" +\r\n                                          \"elements. This gives the user the experience of browsing massive amounts \" +\r\n                                          \"of content but only using a small number of actual elements. \" +\r\n                                          \"This gives the browser much less layout to resolve.\")))\r\n                    .Section(\r\n                        Stack()\r\n                            .Children(\r\n                                SampleTitle(\"Usage\"),\r\n                                TextBlock(\"Virtualized List\")\r\n                                    .Medium()\r\n                                    .PaddingBottom(16.px()),\r\n                                VirtualizedList().WithListItems(GetALotOfItems()).PaddingBottom(32.px()),\r\n                                TextBlock(\"Virtualized List with Empty List Message\")\r\n                                    .Medium()\r\n                                    .PaddingBottom(16.px()),\r\n                                VirtualizedList().WithEmptyMessage(() => TextBlock(\"No List Items\")).WithListItems(Enumerable.Empty<IComponent>())));\r\n        }\r\n\r\n        public HTMLElement Render()\r\n        {\r\n            return _content.Render();\r\n        }\r\n\r\n        private IEnumerable<SampleVirtualizedItem> GetALotOfItems()\r\n        {\r\n            return Enumerable\r\n                .Range(1, 5000)\r\n                .Select(number => new SampleVirtualizedItem($\"Lorem Ipsum {number}\"));\r\n        }\r\n\r\n        public sealed class SampleVirtualizedItem : IComponent\r\n        {\r\n            private readonly HTMLElement _innerElement;\r\n\r\n            public SampleVirtualizedItem(string text)\r\n            {\r\n                _innerElement =\r\n                    Div(_(text: text, styles: s =>\r\n                    {\r\n                        s.display = \"block\";\r\n                        s.textAlign = \"center\";\r\n                        s.height = \"63px\";\r\n                    }));\r\n            }\r\n\r\n            public HTMLElement Render() => _innerElement;\r\n        }\r\n    }\r\n}\r\n";
                        default: 
                            return "Missing sample code";
                    }
                }
            }
        }
    });
});
