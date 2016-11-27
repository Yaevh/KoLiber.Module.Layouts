using Orchard.UI.Resources;

namespace KoLiber.Module.Layouts.SmartGrid.ResourceManifests {
    public class SectionResourceManifest : IResourceManifestProvider {
        public void BuildManifests(ResourceManifestBuilder builder) {
            var manifest = builder.Add();
            manifest.DefineStyle("SectionElement").SetUrl("SectionElement.min.css", "SectionElement.css");
            manifest.DefineScript("SectionElement").SetUrl("SectionElement.min.js", "SectionElement.js").SetDependencies("Layouts.LayoutEditor");
        }
    }
}
