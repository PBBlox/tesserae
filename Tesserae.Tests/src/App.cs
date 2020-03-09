﻿using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tesserae.Components;
using Tesserae.Tests.Samples;
using static Retyped.dom;
using static Tesserae.UI;

namespace Tesserae.Tests
{
    internal static class App
    {
        private static void Main()
        {
            var orderedComponents = new (string Name, IComponent Component)[]
            {
                ("Button", new ButtonSample()),
                ("CheckBox", new CheckBoxSample()),
                ("ChoiceGroup", new ChoiceGroupSample()),
                ("Dropdown", new DropdownSample()),
                ("Label", new LabelSample()),
                ("EditableLabel", new EditableLabelSample()),
                ("HorizontalSeparator", new HorizontalSeparatorSample()),
                ("TextBox", new TextBoxSample()),
                ("SearchBox", new SearchBoxSample()),
                ("Toggle", new ToggleSample()),
                ("Spinner", new SpinnerSample()),
                ("ProgressIndicator", new ProgressIndicatorSample()),
                ("Dialog", new DialogSample()),
                ("Modal", new ModalSample()),
                ("Panel", new PanelSample()),
                ("ContextMenu", new ContextMenuSample()),
                ("ProgressModal", new ProgressModalSample()),
                ("ItemsList", new ItemsListSample()),
                ("VirtualizedList", new VirtualizedListSample()),
                ("SearchableList", new SearchableListSample()),
                ("DetailsList", new DetailsListSample()),
                ("Picker", new PickerSample()),
                ("Layer", new LayerSample()),
                ("Stack", new StackSample()),
                ("SectionStack", new SectionStackSample()),
                ("TextBlock", new TextBlockSample()),
                ("Validator", new ValidatorSample()),
                ("OverflowSet", new OverflowSetSample()),
                ("Breadcrumb", new BreadcrumbSample()),
                ("Pivot", new PivotSample()),
                ("Defer", new DeferSample()),
                ("Toast", new ToastSample()),
                ("LineAwesomeIcons", new LineAwesomeSample()),
                ("FileSelector", new FileSelectorAndDropAreaSample())
            };

            var components = orderedComponents.ToDictionary(c => c.Name, c => c.Component);

            var sideBar = Sidebar();

            var navBar = Navbar().SetTop(Stack().Horizontal()
                                          .WidthStretch()
                                          .HeightStretch()
                                          .Children(SearchBox("Search for a template").WidthStretch().Underlined()));

            var currentPage = new SettableObservable<string>();

            var deferedPage = Defer(currentPage, (curPage) => ShowPage(curPage).AsTask());
            
            navBar.SetContent(deferedPage);

            sideBar.IsVisible = false;
            navBar.IsVisible  = false;

            document.body.appendChild(sideBar.Brand(SidebarItem("... meow", "las la-cat").Large().NonSelectable())
                                              .Add(SidebarItem("Colorful sidebar", "las la-tint").OnSelect((s) => sideBar.IsLight = false).Selected())
                                              .Add(SidebarItem("Light sidebar", "las la-tint-slash").OnSelect((s) => sideBar.IsLight = true))
                                              .Add(SidebarItem("Always Open", "las la-arrow-to-right").OnSelect((s) => sideBar.IsAlwaysOpen= true))
                                              .Add(SidebarItem("Open on Hover", "las la-arrows-alt-h").OnSelect((s) => sideBar.IsAlwaysOpen = false))
                                              .Add(SidebarItem("Small sidebar", "las la-minus-square").OnSelect((s) => sideBar.Width = Components.Sidebar.Size.Small))
                                              .Add(SidebarItem("Medium sidebar", "las la-square").OnSelect((s) => sideBar.Width = Components.Sidebar.Size.Medium))
                                              .Add(SidebarItem("Large sidebar", "las la-plus-square").OnSelect((s) => sideBar.Width = Components.Sidebar.Size.Large))
                                              .SetContent(navBar)
                                              .Render());

            document.body.style.overflow = "hidden";

            Router.Register("home", "/", p => currentPage.Value = null);
            
            foreach (var (name, component) in orderedComponents)
            {
                Router.Register(name, ToRoute(name), p => currentPage.Value = name);
            }

            Router.Initialize();
            Router.Refresh((err, state) => Router.Navigate(window.location.hash, reload: false));

            string ToRoute(string name) => "/view/" + name;

            IComponent ShowPage(string route)
            {
                if (route is null || !components.ContainsKey(route))
                {
                    route = components.Keys.First();
                }

                Router.Replace($"#/view/{route}");

                var component = components[route];

                var links = orderedComponents.ToDictionary(c => c.Name, c => NavLink(c.Name).SelectedIf(c.Name == route).OnSelected((s, e) => { console.log("Route to " + c.Name); Router.Navigate("#" + ToRoute(c.Name)); }));

                var page = new SplitView().Left(Stack().Stretch().Children(MainNav(links, navBar, sideBar, route)).InvisibleScroll(), background: Theme.Default.Background)
                                          .LeftIsSmaller(SizeMode.Pixels, 300)
                                          .HeightStretch();

                page.Right(Stack().Stretch().Children(component.WidthStretch()).InvisibleScroll(), background: Theme.Secondary.Background);
                return page;
            }
        }

        private static IComponent MainNav(Dictionary<string, Nav.NavLink> links, Navbar navBar, Sidebar sideBar, string selectedRoute)
        {
            return Stack().Padding(16.px()).NoShrink().MinHeightStretch()
                          .Children(TextBlock("Tesserae Samples").MediumPlus().SemiBold().AlignCenter(),
                                    Nav().InlineContent(Label("Theme").Inline().SetContent(Toggle("Light", "Dark").Checked().OnChange((t, e) => { if (t.IsChecked) { Theme.Light(); } else { Theme.Dark(); } })))
                                         .InlineContent(Label("Navbar").Inline().SetContent(Toggle("Show", "Hidden").OnChange((t, e) => { navBar.IsVisible = t.IsChecked; })))
                                         .InlineContent(Label("Sidebar").Inline().SetContent(Toggle("Show", "Hidden").OnChange((t, e) => { sideBar.IsVisible = t.IsChecked; })))
                                         .Links(NavLink("Basic Inputs").Expanded()
                                                                       .SmallPlus()
                                                                       .SemiBold()
                                                                       .Links(links["Button"],
                                                                              links["CheckBox"],
                                                                              links["ChoiceGroup"],
                                                                              links["Dropdown"] ,
                                                                              links["Label"],
                                                                              links["EditableLabel"],
                                                                              links["TextBox"] ,
                                                                              links["SearchBox"] ,
                                                                              links["Toggle"],
                                                                              links["Picker"]),
                                                NavLink("Progress").Expanded()
                                                                   .SmallPlus()
                                                                   .SemiBold()
                                                                   .Links(links["Spinner"],
                                                                          links["ProgressIndicator"]),
                                                NavLink("Surfaces").Expanded()
                                                                   .SmallPlus()
                                                                   .SemiBold()
                                                                   .Links(links["Dialog"],
                                                                          links["Modal"],
                                                                          links["Panel"],
                                                                          links["ContextMenu"]),
                                                NavLink("Utilities").Expanded()
                                                                    .SmallPlus()
                                                                    .SemiBold()
                                                                    .Links(links["Layer"]       ,
                                                                           links["Stack"]       ,
                                                                           links["HorizontalSeparator"],
                                                                           links["SectionStack"],
                                                                           links["TextBlock"]   ,
                                                                           links["Validator"]   ,
                                                                           links["Breadcrumb"]  ,
                                                                           links["OverflowSet"]  ,
                                                                           links["Pivot"],
                                                                           links["Defer"],
                                                                           links["Toast"],
                                                                           links["FileSelector"],
                                                                           links["LineAwesomeIcons"],
                                                                           links["ProgressModal"]),
                                                NavLink("Collections").Expanded()
                                                                      .SmallPlus()
                                                                      .SemiBold()
                                                                        .Links(links["ItemsList"],
                                                                               links["VirtualizedList"],
                                                                               links["SearchableList"],
                                                                               links["DetailsList"]),
                                                NavLink("Nav Sample").Expanded()
                                                                     .SmallPlus()
                                                                     .SemiBold()
                                                                     .Links(NavLink("Level 1").Links(NavLink("Level 2").Links(NavLink("Level 3").Links(NavLink("Level 4")))),
                                                                            NavLink("Level 1").Links(NavLink("Level 2").Links(NavLink("Level 3").Links(NavLink("Level 4")))),
                                                                            NavLink("Async 1").LinksAsync(async () => { await Task.Delay(500); return new[] { NavLink("Level 2").Links(NavLink("Level 3").Links(NavLink("Level 4"))) }; })
                                                ))
                                         .InlineContent(Link("https://www.curiosity.ai", TextBlock("by curiosity.ai").XSmall().Primary().AlignEnd())
            ));
        }
    }
}