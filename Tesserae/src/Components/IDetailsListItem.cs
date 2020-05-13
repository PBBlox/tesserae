using System;
using System.Collections.Generic;
using static HTML.dom;

namespace Tesserae.Components
{
    public interface IDetailsListItem
    {
        bool EnableOnListItemClickEvent { get; }

        void OnListItemClick(int listItemIndex);

        IEnumerable<IComponent> Render(IList<IDetailsListColumn> columns, Func<IDetailsListColumn, Func<IComponent>, IComponent> createGridCellExpression);
    }

    public interface IDetailsListItem<in TDetailsListItem> : IDetailsListItem where TDetailsListItem : IDetailsListItem<TDetailsListItem>
    {
        int CompareTo(TDetailsListItem other, string columnSortingKey);
    }
}
