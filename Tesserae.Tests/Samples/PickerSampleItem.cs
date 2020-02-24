using Tesserae.Components;
using static Tesserae.UI;
using static Retyped.dom;

namespace Tesserae.Tests.Samples
{
    public class PickerSampleItem : IPickerItem
    {
        private HTMLElement _suggestionElement;
        private HTMLElement _selectionElement;
        private HTMLElement _removeSelectionElement;

        public PickerSampleItem(string name)
        {
            Name = name;
        }

        public string Name     { get; }

        public bool IsSelected { get; set; }

        public HTMLElement RenderSuggestion()
        {
            return _suggestionElement ?? (_suggestionElement = Span(_(text: Name)));
        }

        public (HTMLElement selectionElement, HTMLElement removeSelectionElement) RenderSelection()
        {
            if (_selectionElement == null)
            {
                _selectionElement       = Span(_(text: Name));
                _removeSelectionElement = I(LineAwesome.WindowClose);

                _selectionElement.appendChild(_removeSelectionElement);
            }

            return (_selectionElement, _removeSelectionElement);
        }
    }
}
