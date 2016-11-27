using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Orchard.Environment.Extensions;
using Orchard.Layouts.Elements;
using Orchard.Layouts.Helpers;

namespace KoLiber.Module.Layouts.Elements {
    //[OrchardFeature("KoLiber.Module.Layouts.Section")]
    public class Section : Container {

        public override bool IsSystemElement { get { return true; } }

        public override string Category { get { return "Layout"; } }

        public override string ToolboxIcon { get { return "\uf03e"; } }
        
    }
}