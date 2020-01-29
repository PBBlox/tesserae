﻿using System;
using System.Threading;
using System.Threading.Tasks;
using Retyped;
using Tesserae.Components;
using static Retyped.dom;
using static Tesserae.UI;

namespace Tesserae.Tests.Samples
{
    public class DropdownSample : IComponent
    {
        private IComponent _content;

        public DropdownSample()
        {
            var d = Dropdown();
            _content = Stack().Children(
                TextBlock("Dropdown").XLarge(),
                TextBlock("Overview").MediumPlus(),
                TextBlock("A Dropdown is a list in which the selected item is always visible, and the others are visible on demand by clicking a drop-down button. They are used to simplify the design and make a choice within the UI. When closed, only the selected item is visible. When users click the drop-down button, all the options become visible. To change the value, users open the list and click another value or use the arrow keys (up and down) to select a new value."),
                TextBlock("Best Practices").MediumPlus(),
                Stack().Horizontal().Children(
                    Stack().WidthPercents(40).Children(
                        TextBlock("Do").Medium(),
                        TextBlock("Use a Dropdown when there are multiple choices that can be collapsed under one title. Or if the list of items is long or when space is constrained."),
                        TextBlock("Use shortened statements or single words as options."),
                        TextBlock("Use a Dropdown when the selected option is more important than the alternatives (in contrast to radio buttons where all the choices are visible putting more emphasis on the other options).")
                    ),
                    Stack().WidthPercents(40).Children(
                        TextBlock("Don't").Medium(),
                        TextBlock("Use if there are less than 7 options, use a ChoiceGroup instead.")
                    )
                ),
                TextBlock("Usage").MediumPlus(),
                TextBlock("Basic Dropdowns").Medium(),
                Stack().WidthPercents(40).Children(
                    Label("Standard").Content(Dropdown().Items(
                            DropdownItem("Header 1").Header(),
                            DropdownItem("1-1"),
                            DropdownItem("1-2"),
                            DropdownItem("1-3"),
                            DropdownItem("1-4").Disabled(),
                            DropdownItem("1-5"),
                            DropdownItem().Divider(),
                            DropdownItem("Header 2").Header(),
                            DropdownItem("2-1"),
                            DropdownItem("2-2"),
                            DropdownItem("2-3").Selected(),
                            DropdownItem("2-4"),
                            DropdownItem("2-5")
                        )),
                    Label("Multi-select").Content(Dropdown().Multi().Items(
                        DropdownItem("Header 1").Header(),
                        DropdownItem("1-1"),
                        DropdownItem("1-2").Selected(),
                        DropdownItem("1-3"),
                        DropdownItem("1-4").Disabled(),
                        DropdownItem("1-5"),
                        DropdownItem().Divider(),
                        DropdownItem("Header 2").Header(),
                        DropdownItem("2-1"),
                        DropdownItem("2-2"),
                        DropdownItem("2-3"),
                        DropdownItem("2-4").Selected(),
                        DropdownItem("2-5")
                    )),
                    Label("Validation").Content(d.Items(
                        DropdownItem("Header 1").Header(),
                        DropdownItem("1-1").Selected(),
                        DropdownItem("1-2"),
                        DropdownItem("1-3"),
                        DropdownItem("1-4").Disabled(),
                        DropdownItem("1-5"),
                        DropdownItem().Divider(),
                        DropdownItem("Header 2").Header(),
                        DropdownItem("2-1"),
                        DropdownItem("2-2"),
                        DropdownItem("2-3"),
                        DropdownItem("2-4"),
                        DropdownItem("2-5")
                    )),
                    Label("Disabled").Content(Dropdown().Disabled().Items(
                        DropdownItem("Header 1").Header(),
                        DropdownItem("1-1").Selected(),
                        DropdownItem("1-2"),
                        DropdownItem("1-3"),
                        DropdownItem("1-4").Disabled(),
                        DropdownItem("1-5"),
                        DropdownItem().Divider(),
                        DropdownItem("Header 2").Header(),
                        DropdownItem("2-1"),
                        DropdownItem("2-2"),
                        DropdownItem("2-3"),
                        DropdownItem("2-4"),
                        DropdownItem("2-5")
                    )),
                    Label("Required").Content(Dropdown().Required().Items(
                        DropdownItem("Header 1").Header(),
                        DropdownItem("1-1").Selected(),
                        DropdownItem("1-2"),
                        DropdownItem("1-3"),
                        DropdownItem("1-4").Disabled(),
                        DropdownItem("1-5"),
                        DropdownItem().Divider(),
                        DropdownItem("Header 2").Header(),
                        DropdownItem("2-1"),
                        DropdownItem("2-2"),
                        DropdownItem("2-3"),
                        DropdownItem("2-4"),
                        DropdownItem("2-5")
                    )),
                    Label("Async").Content(Dropdown().Items(GetItemsAsync))
                )
            );
            d.Attach((e, dd) =>
            {
                if (dd.SelectedItems.Length != 1 || dd.SelectedItems[0].Text != "1-1")
                {
                    dd.IsInvalid = true;
                    dd.Error = "Some error happens, need 1-1";
                }
                else dd.IsInvalid = false;
            }, Validation.Mode.OnInput);
        }

        private async Task<Dropdown.Item[]> GetItemsAsync()
        {
            // Sample async request
            try
            {
                await GetAsync("http://google.com");
            }
            catch { }

            return new[]
            {
                DropdownItem("Header 1").Header(),
                DropdownItem("1-1"),
                DropdownItem("1-2"),
                DropdownItem("1-3"),
                DropdownItem("1-4").Disabled(),
                DropdownItem("1-5"),
                DropdownItem().Divider(),
                DropdownItem("Header 2").Header(),
                DropdownItem("2-1"),
                DropdownItem("2-2"),
                DropdownItem("2-3"),
                DropdownItem("2-4"),
                DropdownItem("2-5")
            };
        }

        public HTMLElement Render()
        {
            return _content.Render();
        }

        private async Task<string> GetAsync(string url)
        {
            var xmlHttp = new XMLHttpRequest();
            xmlHttp.open("GET", url, true);

            xmlHttp.setRequestHeader("Access-Control-Allow-Origin", "*");

            var tcs = new TaskCompletionSource<string>();

            xmlHttp.onreadystatechange = (e) =>
            {
                if (xmlHttp.readyState == 0)
                {
                    tcs.SetException(new Exception("Request aborted"));
                }
                else if (xmlHttp.readyState == 4)
                {
                    if (xmlHttp.status == 200 || xmlHttp.status == 201 || xmlHttp.status == 304)
                    {
                        tcs.SetResult(xmlHttp.responseText);
                    }
                    else tcs.SetException(new Exception("Request failed"));
                }
            };

            xmlHttp.send();

            var tcsTask = tcs.Task;

            while (true)
            {
                await Task.WhenAny(tcsTask, Task.Delay(150));

                if (tcsTask.IsCompleted)
                {
                    if (tcsTask.IsFaulted)
                    {
                        throw tcsTask.Exception;
                    }
                    else
                    {
                        return tcsTask.Result;
                    }
                }
            }
        }
    }
}
