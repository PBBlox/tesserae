H5.assemblyVersion("Tesserae.Tests","2022.4.27706.0");
H5.assembly("Tesserae.Tests", function ($asm, globals) {
    "use strict";


    var $m = H5.setMetadata,
        $n = ["System","System.Collections.Generic","System.Threading.Tasks","Tesserae","Tesserae.Tests.Samples"];
    $m("Tesserae.Tests.App", function () { return {"att":1048960,"a":4,"s":true,"m":[{"a":1,"n":"Main","is":true,"t":8,"sn":"Main","rt":$n[0].Void},{"a":1,"n":"MainNav","is":true,"t":8,"pi":[{"n":"links","pt":$n[1].Dictionary$2(System.String,tss.Nav.NavLink),"ps":0},{"n":"navBar","pt":tss.Navbar,"ps":1},{"n":"sideBar","pt":tss.Sidebar,"ps":2}],"sn":"MainNav","rt":tss.IC,"p":[$n[1].Dictionary$2(System.String,tss.Nav.NavLink),tss.Navbar,tss.Sidebar]}]}; }, $n);
    $m("Tesserae.Tests.SamplesSourceCode", function () { return {"att":1048576,"a":4,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"GetCodeForSample","is":true,"t":8,"pi":[{"n":"sampleName","pt":$n[0].String,"ps":0}],"sn":"GetCodeForSample","rt":$n[0].String,"p":[$n[0].String]}]}; }, $n);
    $m("Tesserae.Tests.Samples.BreadcrumbSample", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Render","t":8,"sn":"Render","rt":HTMLElement},{"a":1,"n":"_content","t":4,"rt":tss.IC,"sn":"_content","ro":true}]}; }, $n);
    $m("Tesserae.Tests.Samples.ButtonSample", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Render","t":8,"sn":"Render","rt":HTMLElement},{"a":1,"n":"_content","t":4,"rt":tss.IC,"sn":"_content","ro":true}]}; }, $n);
    $m("Tesserae.Tests.Samples.CheckBoxSample", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Render","t":8,"sn":"Render","rt":HTMLElement},{"a":1,"n":"_content","t":4,"rt":tss.IC,"sn":"_content","ro":true}]}; }, $n);
    $m("Tesserae.Tests.Samples.ChoiceGroupSample", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Render","t":8,"sn":"Render","rt":HTMLElement},{"a":1,"n":"_content","t":4,"rt":tss.IC,"sn":"_content","ro":true}]}; }, $n);
    $m("Tesserae.Tests.Samples.ColorPickerSample", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Render","t":8,"sn":"Render","rt":HTMLElement},{"a":1,"n":"_content","t":4,"rt":tss.IC,"sn":"_content","ro":true}]}; }, $n);
    $m("Tesserae.Tests.Samples.ContextMenuSample", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Render","t":8,"sn":"Render","rt":HTMLElement},{"a":1,"n":"_content","t":4,"rt":tss.IC,"sn":"_content","ro":true}]}; }, $n);
    $m("Tesserae.Tests.Samples.DatePickerSample", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Render","t":8,"sn":"Render","rt":HTMLElement},{"a":1,"n":"_content","t":4,"rt":tss.IC,"sn":"_content","ro":true}]}; }, $n);
    $m("Tesserae.Tests.Samples.DateTimePickerSample", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Render","t":8,"sn":"Render","rt":HTMLElement},{"a":1,"n":"_content","t":4,"rt":tss.IC,"sn":"_content","ro":true}]}; }, $n);
    $m("Tesserae.Tests.Samples.DeferSample", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Render","t":8,"sn":"Render","rt":HTMLElement},{"a":1,"n":"SetChildren","t":8,"pi":[{"n":"stack","pt":tss.SectionStack,"ps":0},{"n":"count","pt":$n[0].Int32,"ps":1}],"sn":"SetChildren","rt":$n[0].Void,"p":[tss.SectionStack,$n[0].Int32]},{"a":1,"n":"content","t":4,"rt":tss.IC,"sn":"content","ro":true}]}; }, $n);
    $m("Tesserae.Tests.Samples.DetailsListSample", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"GetComponentDetailsListItems","t":8,"sn":"GetComponentDetailsListItems","rt":System.Array.type(Tesserae.Tests.Samples.DetailsListSampleItemWithComponents)},{"a":1,"n":"GetDetailsListItems","t":8,"pi":[{"n":"start","dv":1,"o":true,"pt":$n[0].Int32,"ps":0},{"n":"count","dv":100,"o":true,"pt":$n[0].Int32,"ps":1}],"sn":"GetDetailsListItems","rt":System.Array.type(Tesserae.Tests.Samples.DetailsListSampleFileItem),"p":[$n[0].Int32,$n[0].Int32]},{"a":1,"n":"GetDetailsListItemsAsync","t":8,"pi":[{"n":"start","dv":1,"o":true,"pt":$n[0].Int32,"ps":0},{"n":"count","dv":100,"o":true,"pt":$n[0].Int32,"ps":1}],"sn":"GetDetailsListItemsAsync","rt":$n[2].Task$1(System.Array.type(Tesserae.Tests.Samples.DetailsListSampleFileItem)),"p":[$n[0].Int32,$n[0].Int32]},{"a":2,"n":"Render","t":8,"sn":"Render","rt":HTMLElement},{"a":1,"n":"_content","t":4,"rt":tss.IC,"sn":"_content","ro":true}]}; }, $n);
    $m("Tesserae.Tests.Samples.DetailsListSampleFileItem", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[3].LineAwesome,$n[0].String,$n[0].DateTime,$n[0].String,$n[0].Double],"pi":[{"n":"fileIcon","pt":$n[3].LineAwesome,"ps":0},{"n":"fileName","pt":$n[0].String,"ps":1},{"n":"dateModified","pt":$n[0].DateTime,"ps":2},{"n":"modifiedBy","pt":$n[0].String,"ps":3},{"n":"fileSize","pt":$n[0].Double,"ps":4}],"sn":"ctor"},{"a":2,"n":"CompareTo","t":8,"pi":[{"n":"other","pt":$n[4].DetailsListSampleFileItem,"ps":0},{"n":"columnSortingKey","pt":$n[0].String,"ps":1}],"sn":"CompareTo","rt":$n[0].Int32,"p":[$n[4].DetailsListSampleFileItem,$n[0].String],"box":function ($v) { return H5.box($v, System.Int32);}},{"a":2,"n":"OnListItemClick","t":8,"pi":[{"n":"listItemIndex","pt":$n[0].Int32,"ps":0}],"sn":"OnListItemClick","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":2,"n":"Render","t":8,"pi":[{"n":"columns","pt":$n[1].IList$1(tss.IDetailsListColumn),"ps":0},{"n":"createGridCellExpression","pt":Function,"ps":1}],"sn":"Render","rt":$n[1].IEnumerable$1(tss.IC),"p":[$n[1].IList$1(tss.IDetailsListColumn),Function]},{"a":2,"n":"DateModified","t":16,"rt":$n[0].DateTime,"g":{"a":2,"n":"get_DateModified","t":8,"rt":$n[0].DateTime,"fg":"DateModified","box":function ($v) { return H5.box($v, System.DateTime, System.DateTime.format);}},"fn":"DateModified"},{"a":2,"n":"EnableOnListItemClickEvent","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_EnableOnListItemClickEvent","t":8,"rt":$n[0].Boolean,"fg":"EnableOnListItemClickEvent","box":function ($v) { return H5.box($v, System.Boolean, System.Boolean.toString);}},"fn":"EnableOnListItemClickEvent"},{"a":2,"n":"FileIcon","t":16,"rt":$n[3].LineAwesome,"g":{"a":2,"n":"get_FileIcon","t":8,"rt":$n[3].LineAwesome,"fg":"FileIcon","box":function ($v) { return H5.box($v, Tesserae.LineAwesome, System.Enum.toStringFn(Tesserae.LineAwesome));}},"fn":"FileIcon"},{"a":2,"n":"FileName","t":16,"rt":$n[0].String,"g":{"a":2,"n":"get_FileName","t":8,"rt":$n[0].String,"fg":"FileName"},"fn":"FileName"},{"a":2,"n":"FileSize","t":16,"rt":$n[0].Double,"g":{"a":2,"n":"get_FileSize","t":8,"rt":$n[0].Double,"fg":"FileSize","box":function ($v) { return H5.box($v, System.Double, System.Double.format, System.Double.getHashCode);}},"fn":"FileSize"},{"a":2,"n":"ModifiedBy","t":16,"rt":$n[0].String,"g":{"a":2,"n":"get_ModifiedBy","t":8,"rt":$n[0].String,"fg":"ModifiedBy"},"fn":"ModifiedBy"},{"a":1,"backing":true,"n":"<DateModified>k__BackingField","t":4,"rt":$n[0].DateTime,"sn":"DateModified","box":function ($v) { return H5.box($v, System.DateTime, System.DateTime.format);}},{"a":1,"backing":true,"n":"<FileIcon>k__BackingField","t":4,"rt":$n[3].LineAwesome,"sn":"FileIcon","box":function ($v) { return H5.box($v, Tesserae.LineAwesome, System.Enum.toStringFn(Tesserae.LineAwesome));}},{"a":1,"backing":true,"n":"<FileName>k__BackingField","t":4,"rt":$n[0].String,"sn":"FileName"},{"a":1,"backing":true,"n":"<FileSize>k__BackingField","t":4,"rt":$n[0].Double,"sn":"FileSize","box":function ($v) { return H5.box($v, System.Double, System.Double.format, System.Double.getHashCode);}},{"a":1,"backing":true,"n":"<ModifiedBy>k__BackingField","t":4,"rt":$n[0].String,"sn":"ModifiedBy"}]}; }, $n);
    $m("Tesserae.Tests.Samples.DetailsListSampleItemWithComponents", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"CompareTo","t":8,"pi":[{"n":"other","pt":$n[4].DetailsListSampleItemWithComponents,"ps":0},{"n":"columnSortingKey","pt":$n[0].String,"ps":1}],"sn":"CompareTo","rt":$n[0].Int32,"p":[$n[4].DetailsListSampleItemWithComponents,$n[0].String],"box":function ($v) { return H5.box($v, System.Int32);}},{"a":2,"n":"OnListItemClick","t":8,"pi":[{"n":"listItemIndex","pt":$n[0].Int32,"ps":0}],"sn":"OnListItemClick","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":2,"n":"Render","t":8,"pi":[{"n":"columns","pt":$n[1].IList$1(tss.IDetailsListColumn),"ps":0},{"n":"createGridCellExpression","pt":Function,"ps":1}],"sn":"Render","rt":$n[1].IEnumerable$1(tss.IC),"p":[$n[1].IList$1(tss.IDetailsListColumn),Function]},{"a":2,"n":"WithButton","t":8,"pi":[{"n":"button","pt":tss.Button,"ps":0}],"sn":"WithButton","rt":$n[4].DetailsListSampleItemWithComponents,"p":[tss.Button]},{"a":2,"n":"WithCheckBox","t":8,"pi":[{"n":"checkBox","pt":tss.ChecBox,"ps":0}],"sn":"WithCheckBox","rt":$n[4].DetailsListSampleItemWithComponents,"p":[tss.ChecBox]},{"a":2,"n":"WithChoiceGroup","t":8,"pi":[{"n":"choiceGroup","pt":tss.ChoiceGroup,"ps":0}],"sn":"WithChoiceGroup","rt":$n[4].DetailsListSampleItemWithComponents,"p":[tss.ChoiceGroup]},{"a":2,"n":"WithDropdown","t":8,"pi":[{"n":"dropdown","pt":tss.Dropdown,"ps":0}],"sn":"WithDropdown","rt":$n[4].DetailsListSampleItemWithComponents,"p":[tss.Dropdown]},{"a":2,"n":"WithIcon","t":8,"pi":[{"n":"icon","pt":$n[3].LineAwesome,"ps":0}],"sn":"WithIcon","rt":$n[4].DetailsListSampleItemWithComponents,"p":[$n[3].LineAwesome]},{"a":2,"n":"WithName","t":8,"pi":[{"n":"name","pt":$n[0].String,"ps":0}],"sn":"WithName","rt":$n[4].DetailsListSampleItemWithComponents,"p":[$n[0].String]},{"a":2,"n":"WithToggle","t":8,"pi":[{"n":"toggle","pt":tss.Toggle,"ps":0}],"sn":"WithToggle","rt":$n[4].DetailsListSampleItemWithComponents,"p":[tss.Toggle]},{"a":2,"n":"Button","t":16,"rt":tss.Button,"g":{"a":2,"n":"get_Button","t":8,"rt":tss.Button,"fg":"Button"},"s":{"a":1,"n":"set_Button","t":8,"p":[tss.Button],"rt":$n[0].Void,"fs":"Button"},"fn":"Button"},{"a":2,"n":"CheckBox","t":16,"rt":tss.ChecBox,"g":{"a":2,"n":"get_CheckBox","t":8,"rt":tss.ChecBox,"fg":"CheckBox"},"s":{"a":1,"n":"set_CheckBox","t":8,"p":[tss.ChecBox],"rt":$n[0].Void,"fs":"CheckBox"},"fn":"CheckBox"},{"a":2,"n":"ChoiceGroup","t":16,"rt":tss.ChoiceGroup,"g":{"a":2,"n":"get_ChoiceGroup","t":8,"rt":tss.ChoiceGroup,"fg":"ChoiceGroup"},"s":{"a":1,"n":"set_ChoiceGroup","t":8,"p":[tss.ChoiceGroup],"rt":$n[0].Void,"fs":"ChoiceGroup"},"fn":"ChoiceGroup"},{"a":2,"n":"Dropdown","t":16,"rt":tss.Dropdown,"g":{"a":2,"n":"get_Dropdown","t":8,"rt":tss.Dropdown,"fg":"Dropdown"},"s":{"a":1,"n":"set_Dropdown","t":8,"p":[tss.Dropdown],"rt":$n[0].Void,"fs":"Dropdown"},"fn":"Dropdown"},{"a":2,"n":"EnableOnListItemClickEvent","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_EnableOnListItemClickEvent","t":8,"rt":$n[0].Boolean,"fg":"EnableOnListItemClickEvent","box":function ($v) { return H5.box($v, System.Boolean, System.Boolean.toString);}},"fn":"EnableOnListItemClickEvent"},{"a":2,"n":"Icon","t":16,"rt":$n[3].LineAwesome,"g":{"a":2,"n":"get_Icon","t":8,"rt":$n[3].LineAwesome,"fg":"Icon","box":function ($v) { return H5.box($v, Tesserae.LineAwesome, System.Enum.toStringFn(Tesserae.LineAwesome));}},"s":{"a":1,"n":"set_Icon","t":8,"p":[$n[3].LineAwesome],"rt":$n[0].Void,"fs":"Icon"},"fn":"Icon"},{"a":2,"n":"Name","t":16,"rt":$n[0].String,"g":{"a":2,"n":"get_Name","t":8,"rt":$n[0].String,"fg":"Name"},"s":{"a":1,"n":"set_Name","t":8,"p":[$n[0].String],"rt":$n[0].Void,"fs":"Name"},"fn":"Name"},{"a":2,"n":"Toggle","t":16,"rt":tss.Toggle,"g":{"a":2,"n":"get_Toggle","t":8,"rt":tss.Toggle,"fg":"Toggle"},"s":{"a":1,"n":"set_Toggle","t":8,"p":[tss.Toggle],"rt":$n[0].Void,"fs":"Toggle"},"fn":"Toggle"},{"a":1,"backing":true,"n":"<Button>k__BackingField","t":4,"rt":tss.Button,"sn":"Button"},{"a":1,"backing":true,"n":"<CheckBox>k__BackingField","t":4,"rt":tss.ChecBox,"sn":"CheckBox"},{"a":1,"backing":true,"n":"<ChoiceGroup>k__BackingField","t":4,"rt":tss.ChoiceGroup,"sn":"ChoiceGroup"},{"a":1,"backing":true,"n":"<Dropdown>k__BackingField","t":4,"rt":tss.Dropdown,"sn":"Dropdown"},{"a":1,"backing":true,"n":"<Icon>k__BackingField","t":4,"rt":$n[3].LineAwesome,"sn":"Icon","box":function ($v) { return H5.box($v, Tesserae.LineAwesome, System.Enum.toStringFn(Tesserae.LineAwesome));}},{"a":1,"backing":true,"n":"<Name>k__BackingField","t":4,"rt":$n[0].String,"sn":"Name"},{"a":1,"backing":true,"n":"<Toggle>k__BackingField","t":4,"rt":tss.Toggle,"sn":"Toggle"}]}; }, $n);
    $m("Tesserae.Tests.Samples.DialogSample", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Render","t":8,"sn":"Render","rt":HTMLElement},{"a":1,"n":"_content","t":4,"rt":tss.IC,"sn":"_content","ro":true}]}; }, $n);
    $m("Tesserae.Tests.Samples.DropdownSample", function () { return {"att":1048833,"a":2,"m":[{"a":2,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"GetAsync","is":true,"t":8,"pi":[{"n":"url","pt":$n[0].String,"ps":0}],"sn":"GetAsync","rt":$n[2].Task$1(System.String),"p":[$n[0].String]},{"a":1,"n":"GetGoogleItemsAsync","t":8,"sn":"GetGoogleItemsAsync","rt":$n[2].Task$1(System.Array.type(tss.Dropdown.Item))},{"a":1,"n":"GetItemsAsync","t":8,"sn":"GetItemsAsync","rt":$n[2].Task$1(System.Array.type(tss.Dropdown.Item))},{"a":1,"n":"GetZeroItemsAsync","t":8,"sn":"GetZeroItemsAsync","rt":$n[2].Task$1(System.Array.type(tss.Dropdown.Item))},{"a":2,"n":"Render","t":8,"sn":"Render","rt":HTMLElement},{"a":1,"n":"StartLoadingAsyncDataImmediately","is":true,"t":8,"pi":[{"n":"dropdown","pt":tss.Dropdown,"ps":0}],"sn":"StartLoadingAsyncDataImmediately","rt":tss.Dropdown,"p":[tss.Dropdown]},{"a":1,"n":"_content","t":4,"rt":tss.IC,"sn":"_content","ro":true}]}; }, $n);
    $m("Tesserae.Tests.Samples.EditableLabelSample", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Render","t":8,"sn":"Render","rt":HTMLElement},{"a":1,"n":"_content","t":4,"rt":tss.IC,"sn":"_content","ro":true}]}; }, $n);
    $m("Tesserae.Tests.Samples.FileSelectorAndDropAreaSample", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Render","t":8,"sn":"Render","rt":HTMLElement},{"a":1,"n":"_content","t":4,"rt":tss.IC,"sn":"_content","ro":true}]}; }, $n);
    $m("Tesserae.Tests.Samples.FloatSample", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Render","t":8,"sn":"Render","rt":HTMLElement},{"a":1,"n":"_content","t":4,"rt":tss.IC,"sn":"_content","ro":true}]}; }, $n);
    $m("Tesserae.Tests.Samples.HorizontalSeparatorSample", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Render","t":8,"sn":"Render","rt":HTMLElement},{"a":1,"n":"_content","t":4,"rt":tss.IC,"sn":"_content","ro":true}]}; }, $n);
    $m("Tesserae.Tests.Samples.InfiniteScrollingListSample", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"GetSomeItems","t":8,"pi":[{"n":"count","pt":$n[0].Int32,"ps":0},{"n":"page","dv":-1,"o":true,"pt":$n[0].Int32,"ps":1},{"n":"txt","dv":"","o":true,"pt":$n[0].String,"ps":2}],"sn":"GetSomeItems","rt":System.Array.type(tss.IC),"p":[$n[0].Int32,$n[0].Int32,$n[0].String]},{"a":1,"n":"GetSomeItemsAsync","t":8,"pi":[{"n":"count","pt":$n[0].Int32,"ps":0},{"n":"page","dv":-1,"o":true,"pt":$n[0].Int32,"ps":1},{"n":"txt","dv":"","o":true,"pt":$n[0].String,"ps":2}],"sn":"GetSomeItemsAsync","rt":$n[2].Task$1(System.Array.type(tss.IC)),"p":[$n[0].Int32,$n[0].Int32,$n[0].String]},{"a":2,"n":"Render","t":8,"sn":"Render","rt":HTMLElement},{"a":1,"n":"_content","t":4,"rt":tss.IC,"sn":"_content","ro":true}]}; }, $n);
    $m("Tesserae.Tests.Samples.ItemsListSample", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"GetSomeItems","t":8,"pi":[{"n":"count","pt":$n[0].Int32,"ps":0}],"sn":"GetSomeItems","rt":System.Array.type(tss.IC),"p":[$n[0].Int32]},{"a":2,"n":"Render","t":8,"sn":"Render","rt":HTMLElement},{"a":1,"n":"_content","t":4,"rt":tss.IC,"sn":"_content","ro":true}]}; }, $n);
    $m("Tesserae.Tests.Samples.LabelSample", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Render","t":8,"sn":"Render","rt":HTMLElement},{"a":1,"n":"_content","t":4,"rt":tss.IC,"sn":"_content","ro":true}]}; }, $n);
    $m("Tesserae.Tests.Samples.LayerSample", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Render","t":8,"sn":"Render","rt":HTMLElement},{"a":1,"n":"_content","t":4,"rt":tss.IC,"sn":"_content","ro":true}]}; }, $n);
    $m("Tesserae.Tests.Samples.LineAwesomeSample", function () { return {"nested":[$n[4].LineAwesomeSample.IconItem],"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"GetAllIcons","t":8,"sn":"GetAllIcons","rt":$n[1].IEnumerable$1(Tesserae.Tests.Samples.LineAwesomeSample.IconItem)},{"a":2,"n":"Render","t":8,"sn":"Render","rt":HTMLElement},{"a":1,"n":"ToValidName","is":true,"t":8,"pi":[{"n":"icon","pt":$n[0].String,"ps":0}],"sn":"ToValidName","rt":$n[0].String,"p":[$n[0].String]},{"a":1,"n":"_content","t":4,"rt":tss.IC,"sn":"_content","ro":true}]}; }, $n);
    $m("Tesserae.Tests.Samples.LineAwesomeSample.IconItem", function () { return {"td":$n[4].LineAwesomeSample,"att":1048579,"a":1,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[3].LineAwesome,$n[0].String],"pi":[{"n":"icon","pt":$n[3].LineAwesome,"ps":0},{"n":"name","pt":$n[0].String,"ps":1}],"sn":"ctor"},{"a":2,"n":"IsMatch","t":8,"pi":[{"n":"searchTerm","pt":$n[0].String,"ps":0}],"sn":"IsMatch","rt":$n[0].Boolean,"p":[$n[0].String],"box":function ($v) { return H5.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"Render","t":8,"sn":"Render","rt":tss.IC},{"a":1,"n":"_value","t":4,"rt":$n[0].String,"sn":"_value","ro":true},{"a":1,"n":"component","t":4,"rt":tss.IC,"sn":"component","ro":true}]}; }, $n);
    $m("Tesserae.Tests.Samples.ModalSample", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Render","t":8,"sn":"Render","rt":HTMLElement},{"a":1,"n":"_content","t":4,"rt":tss.IC,"sn":"_content","ro":true}]}; }, $n);
    $m("Tesserae.Tests.Samples.OverflowSetSample", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Render","t":8,"sn":"Render","rt":HTMLElement},{"a":1,"n":"_content","t":4,"rt":tss.IC,"sn":"_content","ro":true}]}; }, $n);
    $m("Tesserae.Tests.Samples.PanelSample", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Render","t":8,"sn":"Render","rt":HTMLElement},{"a":1,"n":"_content","t":4,"rt":tss.IC,"sn":"_content","ro":true}]}; }, $n);
    $m("Tesserae.Tests.Samples.PickerSample", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"GetComponentPickerItems","t":8,"sn":"GetComponentPickerItems","rt":System.Array.type(Tesserae.Tests.Samples.PickerSampleItemWithComponents)},{"a":1,"n":"GetPickerItems","t":8,"sn":"GetPickerItems","rt":System.Array.type(Tesserae.Tests.Samples.PickerSampleItem)},{"a":2,"n":"Render","t":8,"sn":"Render","rt":HTMLElement},{"a":1,"n":"_content","t":4,"rt":tss.IC,"sn":"_content","ro":true}]}; }, $n);
    $m("Tesserae.Tests.Samples.PickerSampleItem", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[0].String],"pi":[{"n":"name","pt":$n[0].String,"ps":0}],"sn":"ctor"},{"a":2,"n":"Render","t":8,"sn":"Render","rt":tss.IC},{"a":2,"n":"IsSelected","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_IsSelected","t":8,"rt":$n[0].Boolean,"fg":"IsSelected","box":function ($v) { return H5.box($v, System.Boolean, System.Boolean.toString);}},"s":{"a":2,"n":"set_IsSelected","t":8,"p":[$n[0].Boolean],"rt":$n[0].Void,"fs":"IsSelected"},"fn":"IsSelected"},{"a":2,"n":"Name","t":16,"rt":$n[0].String,"g":{"a":2,"n":"get_Name","t":8,"rt":$n[0].String,"fg":"Name"},"fn":"Name"},{"a":1,"backing":true,"n":"<IsSelected>k__BackingField","t":4,"rt":$n[0].Boolean,"sn":"IsSelected","box":function ($v) { return H5.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"backing":true,"n":"<Name>k__BackingField","t":4,"rt":$n[0].String,"sn":"Name"}]}; }, $n);
    $m("Tesserae.Tests.Samples.PickerSampleItemWithComponents", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[0].String,$n[3].LineAwesome],"pi":[{"n":"name","pt":$n[0].String,"ps":0},{"n":"icon","pt":$n[3].LineAwesome,"ps":1}],"sn":"ctor"},{"a":2,"n":"Render","t":8,"sn":"Render","rt":tss.IC},{"a":2,"n":"IsSelected","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_IsSelected","t":8,"rt":$n[0].Boolean,"fg":"IsSelected","box":function ($v) { return H5.box($v, System.Boolean, System.Boolean.toString);}},"s":{"a":2,"n":"set_IsSelected","t":8,"p":[$n[0].Boolean],"rt":$n[0].Void,"fs":"IsSelected"},"fn":"IsSelected"},{"a":2,"n":"Name","t":16,"rt":$n[0].String,"g":{"a":2,"n":"get_Name","t":8,"rt":$n[0].String,"fg":"Name"},"fn":"Name"},{"a":1,"n":"_icon","t":4,"rt":$n[3].LineAwesome,"sn":"_icon","ro":true,"box":function ($v) { return H5.box($v, Tesserae.LineAwesome, System.Enum.toStringFn(Tesserae.LineAwesome));}},{"a":1,"backing":true,"n":"<IsSelected>k__BackingField","t":4,"rt":$n[0].Boolean,"sn":"IsSelected","box":function ($v) { return H5.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"backing":true,"n":"<Name>k__BackingField","t":4,"rt":$n[0].String,"sn":"Name"}]}; }, $n);
    $m("Tesserae.Tests.Samples.PivotSample", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"GetSomeItems","t":8,"pi":[{"n":"count","pt":$n[0].Int32,"ps":0}],"sn":"GetSomeItems","rt":System.Array.type(tss.IC),"p":[$n[0].Int32]},{"a":2,"n":"Render","t":8,"sn":"Render","rt":HTMLElement},{"a":1,"n":"content","t":4,"rt":tss.IC,"sn":"content","ro":true}]}; }, $n);
    $m("Tesserae.Tests.Samples.ProgressIndicatorSample", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Render","t":8,"sn":"Render","rt":HTMLElement},{"a":1,"n":"_content","t":4,"rt":tss.IC,"sn":"_content","ro":true}]}; }, $n);
    $m("Tesserae.Tests.Samples.ProgressModalSample", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Render","t":8,"sn":"Render","rt":HTMLElement},{"a":1,"n":"_content","t":4,"rt":tss.IC,"sn":"_content","ro":true}]}; }, $n);
    $m("Tesserae.Tests.Samples.SamplesHelper", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"SampleDo","is":true,"t":8,"pi":[{"n":"text","pt":$n[0].String,"ps":0}],"sn":"SampleDo","rt":tss.IC,"p":[$n[0].String]},{"a":2,"n":"SampleDont","is":true,"t":8,"pi":[{"n":"text","pt":$n[0].String,"ps":0}],"sn":"SampleDont","rt":tss.IC,"p":[$n[0].String]},{"a":2,"n":"SampleHeader","is":true,"t":8,"pi":[{"n":"sampleName","pt":$n[0].String,"ps":0}],"sn":"SampleHeader","rt":tss.IC,"p":[$n[0].String]},{"a":2,"n":"SampleSubTitle","is":true,"t":8,"pi":[{"n":"text","pt":$n[0].String,"ps":0}],"sn":"SampleSubTitle","rt":tss.IC,"p":[$n[0].String]},{"a":2,"n":"SampleTitle","is":true,"t":8,"pi":[{"n":"text","pt":$n[0].String,"ps":0}],"sn":"SampleTitle","rt":tss.IC,"p":[$n[0].String]}]}; }, $n);
    $m("Tesserae.Tests.Samples.SearchableGroupedListSample", function () { return {"nested":[$n[4].SearchableGroupedListSample.SearchableGroupedListItem],"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"GetItems","t":8,"pi":[{"n":"count","pt":$n[0].Int32,"ps":0}],"sn":"GetItems","rt":System.Array.type(Tesserae.Tests.Samples.SearchableGroupedListSample.SearchableGroupedListItem),"p":[$n[0].Int32]},{"a":2,"n":"Render","t":8,"sn":"Render","rt":HTMLElement},{"a":1,"n":"_content","t":4,"rt":tss.IC,"sn":"_content","ro":true}]}; }, $n);
    $m("Tesserae.Tests.Samples.SearchableGroupedListSample.SearchableGroupedListItem", function () { return {"td":$n[4].SearchableGroupedListSample,"att":1048579,"a":1,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[0].String,$n[0].String],"pi":[{"n":"value","pt":$n[0].String,"ps":0},{"n":"group","pt":$n[0].String,"ps":1}],"sn":"ctor"},{"a":2,"n":"IsMatch","t":8,"pi":[{"n":"searchTerm","pt":$n[0].String,"ps":0}],"sn":"IsMatch","rt":$n[0].Boolean,"p":[$n[0].String],"box":function ($v) { return H5.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"Render","t":8,"sn":"Render","rt":tss.IC},{"a":2,"n":"Group","t":16,"rt":$n[0].String,"g":{"a":2,"n":"get_Group","t":8,"rt":$n[0].String,"fg":"Group"},"fn":"Group"},{"a":1,"n":"_component","t":4,"rt":tss.IC,"sn":"_component","ro":true},{"a":1,"n":"_value","t":4,"rt":$n[0].String,"sn":"_value","ro":true},{"a":1,"backing":true,"n":"<Group>k__BackingField","t":4,"rt":$n[0].String,"sn":"Group"}]}; }, $n);
    $m("Tesserae.Tests.Samples.SearchableListSample", function () { return {"nested":[$n[4].SearchableListSample.SearchableListItem],"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"GetItems","t":8,"pi":[{"n":"count","pt":$n[0].Int32,"ps":0}],"sn":"GetItems","rt":System.Array.type(Tesserae.Tests.Samples.SearchableListSample.SearchableListItem),"p":[$n[0].Int32]},{"a":2,"n":"Render","t":8,"sn":"Render","rt":HTMLElement},{"a":1,"n":"_content","t":4,"rt":tss.IC,"sn":"_content","ro":true}]}; }, $n);
    $m("Tesserae.Tests.Samples.SearchableListSample.SearchableListItem", function () { return {"td":$n[4].SearchableListSample,"att":1048579,"a":1,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[0].String],"pi":[{"n":"value","pt":$n[0].String,"ps":0}],"sn":"ctor"},{"a":2,"n":"IsMatch","t":8,"pi":[{"n":"searchTerm","pt":$n[0].String,"ps":0}],"sn":"IsMatch","rt":$n[0].Boolean,"p":[$n[0].String],"box":function ($v) { return H5.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"Render","t":8,"sn":"Render","rt":HTMLElement},{"a":1,"n":"_component","t":4,"rt":tss.IC,"sn":"_component","ro":true},{"a":1,"n":"_value","t":4,"rt":$n[0].String,"sn":"_value","ro":true}]}; }, $n);
    $m("Tesserae.Tests.Samples.SearchBoxSample", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Render","t":8,"sn":"Render","rt":HTMLElement},{"a":1,"n":"_content","t":4,"rt":tss.IC,"sn":"_content","ro":true}]}; }, $n);
    $m("Tesserae.Tests.Samples.SectionStackSample", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Render","t":8,"sn":"Render","rt":HTMLElement},{"a":1,"n":"SetChildren","t":8,"pi":[{"n":"stack","pt":tss.SectionStack,"ps":0},{"n":"count","pt":$n[0].Int32,"ps":1}],"sn":"SetChildren","rt":$n[0].Void,"p":[tss.SectionStack,$n[0].Int32]},{"a":1,"n":"_content","t":4,"rt":tss.IC,"sn":"_content","ro":true}]}; }, $n);
    $m("Tesserae.Tests.Samples.SliderSample", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Render","t":8,"sn":"Render","rt":HTMLElement},{"a":1,"n":"_content","t":4,"rt":tss.IC,"sn":"_content","ro":true}]}; }, $n);
    $m("Tesserae.Tests.Samples.SpinnerSample", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Render","t":8,"sn":"Render","rt":HTMLElement},{"a":1,"n":"_content","t":4,"rt":tss.IC,"sn":"_content","ro":true}]}; }, $n);
    $m("Tesserae.Tests.Samples.StackSample", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Render","t":8,"sn":"Render","rt":HTMLElement},{"a":1,"n":"SetChildren","t":8,"pi":[{"n":"stack","pt":tss.S,"ps":0},{"n":"count","pt":$n[0].Int32,"ps":1}],"sn":"SetChildren","rt":$n[0].Void,"p":[tss.S,$n[0].Int32]},{"a":1,"n":"_content","t":4,"rt":tss.IC,"sn":"_content","ro":true}]}; }, $n);
    $m("Tesserae.Tests.Samples.TextBlockSample", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Render","t":8,"sn":"Render","rt":HTMLElement},{"a":1,"n":"_content","t":4,"rt":tss.IC,"sn":"_content","ro":true}]}; }, $n);
    $m("Tesserae.Tests.Samples.TextBoxSample", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Render","t":8,"sn":"Render","rt":HTMLElement},{"a":1,"n":"_content","t":4,"rt":tss.IC,"sn":"_content","ro":true}]}; }, $n);
    $m("Tesserae.Tests.Samples.TextBreadcrumbsSample", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Render","t":8,"sn":"Render","rt":HTMLElement},{"a":1,"n":"_content","t":4,"rt":tss.IC,"sn":"_content","ro":true}]}; }, $n);
    $m("Tesserae.Tests.Samples.ThemeColorsSample", function () { return {"nested":[$n[4].ThemeColorsSample.ColorListItem],"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Render","t":8,"sn":"Render","rt":HTMLElement},{"a":1,"n":"_content","t":4,"rt":tss.IC,"sn":"_content"}]}; }, $n);
    $m("Tesserae.Tests.Samples.ThemeColorsSample.ColorListItem", function () { return {"td":$n[4].ThemeColorsSample,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[0].String],"pi":[{"n":"themeName","pt":$n[0].String,"ps":0}],"sn":"ctor"},{"a":1,"n":"ColorSquare","is":true,"t":8,"pi":[{"n":"color","pt":$n[0].String,"ps":0}],"sn":"ColorSquare","rt":tss.IC,"p":[$n[0].String]},{"a":2,"n":"CompareTo","t":8,"pi":[{"n":"other","pt":$n[4].ThemeColorsSample.ColorListItem,"ps":0},{"n":"columnSortingKey","pt":$n[0].String,"ps":1}],"sn":"CompareTo","rt":$n[0].Int32,"p":[$n[4].ThemeColorsSample.ColorListItem,$n[0].String],"box":function ($v) { return H5.box($v, System.Int32);}},{"a":2,"n":"OnListItemClick","t":8,"pi":[{"n":"listItemIndex","pt":$n[0].Int32,"ps":0}],"sn":"OnListItemClick","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":2,"n":"Render","t":8,"pi":[{"n":"columns","pt":$n[1].IList$1(tss.IDetailsListColumn),"ps":0},{"n":"createGridCellExpression","pt":Function,"ps":1}],"sn":"Render","rt":$n[1].IEnumerable$1(tss.IC),"p":[$n[1].IList$1(tss.IDetailsListColumn),Function]},{"a":2,"n":"EnableOnListItemClickEvent","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_EnableOnListItemClickEvent","t":8,"rt":$n[0].Boolean,"fg":"EnableOnListItemClickEvent","box":function ($v) { return H5.box($v, System.Boolean, System.Boolean.toString);}},"fn":"EnableOnListItemClickEvent"},{"a":2,"n":"ThemeName","t":16,"rt":$n[0].String,"g":{"a":2,"n":"get_ThemeName","t":8,"rt":$n[0].String,"fg":"ThemeName"},"fn":"ThemeName"},{"a":2,"n":"Mapping","is":true,"t":4,"rt":$n[1].Dictionary$2(System.String,System.Collections.Generic.Dictionary$2(System.String,System.String)),"sn":"Mapping"},{"a":1,"backing":true,"n":"<ThemeName>k__BackingField","t":4,"rt":$n[0].String,"sn":"ThemeName"}]}; }, $n);
    $m("Tesserae.Tests.Samples.TimelineSample", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"GetSomeItems","t":8,"pi":[{"n":"count","pt":$n[0].Int32,"ps":0}],"sn":"GetSomeItems","rt":System.Array.type(tss.IC),"p":[$n[0].Int32]},{"a":2,"n":"Render","t":8,"sn":"Render","rt":HTMLElement},{"a":1,"n":"_content","t":4,"rt":tss.IC,"sn":"_content","ro":true}]}; }, $n);
    $m("Tesserae.Tests.Samples.ToastSample", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Render","t":8,"sn":"Render","rt":HTMLElement},{"a":1,"n":"_content","t":4,"rt":tss.IC,"sn":"_content","ro":true}]}; }, $n);
    $m("Tesserae.Tests.Samples.ToggleSample", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Render","t":8,"sn":"Render","rt":HTMLElement},{"a":1,"n":"_content","t":4,"rt":tss.IC,"sn":"_content","ro":true}]}; }, $n);
    $m("Tesserae.Tests.Samples.TutorialModalSample", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Render","t":8,"sn":"Render","rt":HTMLElement},{"a":1,"n":"SampleTutorialModal","is":true,"t":8,"sn":"SampleTutorialModal","rt":tss.TutorialModal},{"a":1,"n":"_content","t":4,"rt":tss.IC,"sn":"_content","ro":true}]}; }, $n);
    $m("Tesserae.Tests.Samples.ValidatorSample", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Render","t":8,"sn":"Render","rt":HTMLElement},{"a":1,"n":"content","t":4,"rt":tss.IC,"sn":"content","ro":true}]}; }, $n);
    $m("Tesserae.Tests.Samples.VirtualizedListSample", function () { return {"nested":[$n[4].VirtualizedListSample.SampleVirtualizedItem],"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"GetALotOfItems","t":8,"sn":"GetALotOfItems","rt":$n[1].IEnumerable$1(Tesserae.Tests.Samples.VirtualizedListSample.SampleVirtualizedItem)},{"a":2,"n":"Render","t":8,"sn":"Render","rt":HTMLElement},{"a":1,"n":"_content","t":4,"rt":tss.IC,"sn":"_content","ro":true}]}; }, $n);
    $m("Tesserae.Tests.Samples.VirtualizedListSample.SampleVirtualizedItem", function () { return {"td":$n[4].VirtualizedListSample,"att":1048834,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[0].String],"pi":[{"n":"text","pt":$n[0].String,"ps":0}],"sn":"ctor"},{"a":2,"n":"Render","t":8,"sn":"Render","rt":HTMLElement},{"a":1,"n":"_innerElement","t":4,"rt":HTMLElement,"sn":"_innerElement","ro":true}]}; }, $n);
});
