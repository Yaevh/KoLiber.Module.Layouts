var LayoutEditor;
(function (LayoutEditor) {

    LayoutEditor.Section = function (data, contentType, htmlId, htmlClass, htmlStyle, isTemplated, rule, children) {
        var self = this;
        // Inherit from the Element base class.
        LayoutEditor.Element.call(self, "Section", data, htmlId, htmlClass, htmlStyle, isTemplated, rule);
        // Inherit from the Container base class.
        LayoutEditor.Container.call(self, ["Canvas", "Grid", "Content"], children);
        // This Section element is containable, which means it can be added to any container, including Sections.
        self.isContainable = true;

        self.hasEditor = false;
        // The element type name, which is sent back to the element editor controller when being edited.
        self.contentType = contentType;
        // The "layout-common-holder" CSS class is used by the layout editor to identify drop targets.
        self.dropTargetClass = "layout-common-holder";
        // Implements the toObject serialization function.
        // This is called when the layout is being serialized into JSON.
        var toObject = self.toObject; // Get a reference to the default implementation before we override it.
        self.toObject = function () {
            var result = toObject(); // Invoke the original (base) implementation.
            result.children = self.childrenToObject();
            return result;
        };
    };

    // Registers the factory function with the element factory.
    LayoutEditor.registerFactory("Section", function (value) {
        return new LayoutEditor.Section(
            value.data,
            value.contentType,
            value.htmlId,
            value.htmlClass,
            value.htmlStyle,
            value.isTemplated,
            value.rule,
            LayoutEditor.childrenFrom(value.children));
    });

})(LayoutEditor || (LayoutEditor = {}));
