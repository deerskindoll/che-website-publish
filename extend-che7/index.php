<?php
  include '../includes/variables.php';

  // Define page title
  $pageTitle = 'Eclipse Che | Extend';
  // Define body class
  $bodyClass = 'technology';

  include '../includes/head.php';
  include '../includes/header.php';
?>


<div class="jumbotron">
  <div class="container-fluid">
    <h1>Extend</h1>
    <h3>Add plugins, build new workbenches or create complete custom cloud tools with Eclipse Che.</h3>
    <img alt="" class="img-responsive" src="../images/hero-technology@2x.png" />
  </div> <!-- /.container-fluid -->
</div> <!-- /.jumbotron -->

<div class="tech">
  <div class="container-fluid content">
    <h2>An Extensible, Customizable Platform</h2>
    <p><b></b></p>
    <p><b>Plugins</b>, to quickly add new capabilities to the IDE by leveraging a rich set of extension points compatible with VS Code. Plugins are isolated and provided their own dependencies packaged in containers.</p>
    <p><b>Workbenches</b>, to create pre-configured Che workspaces with dedicated set of tools, available on-demand.</p> 
    <p><b>Alternate IDEs</b>, to provide specialized tooling within Eclipse Che. Build your own based on Eclipse Theia, or pick popular ones like Jupyter.</p>
    <p><b>Marketplace</b>(comming soon), to easily distribute tools and custom IDEs to users which can be tried online without </p>
    <img alt="" class="img-responsive" src="../images/hero-home-technology.png" />

    <div class="row">
    
      <div class="col-md-4 col-sm-4">
        <h4>Programming Languages</h4>
        <p>Add and extend support for languages by relying on the Language Server Protocol.</p>
        <ul>
          <li>Extend Language Support</li>
          <li>Add New Completion Statements</li>
          <li>Customize Quick Info Tooltips</li>
        </ul>
      </div>

      <div class="col-md-4 col-sm-4">
        <h4>Debuggers</h4>
        <p>Extend debug capabilities with the Debug Adapter Protocol.</p>
        <ul>
          <li>Add New Debuggers</li>
          <li>S</li>
          <li></li>
        </ul>
      </div>

      <div class="col-md-4 col-sm-4">
        <h4>Tools Integration</h4>
        <p>Integrate your favorite tools and build tailored developer experiences.</p>
        <ul>
          <li>Linters</li>
          <li>Testing Tools</li>
          <li>Performance Tools</li>
        </ul>
      </div>
      

      <div class="clearfix"></div>

    </div> <!-- .row -->

    <div class="row">
      <div class="col-md-4 col-sm-4">
        <h4>Menus and Commands</h4>
        <p>Extend the different menus and commands to provided deProcesses injected into workspaces. Commands can automate actions like compile and previews.</p>
      </div>

      <div class="col-md-4 col-sm-4">
        <h4>Themes</h4>
        <p>Build custom themes Modify the runtime behavior of the workspace with code that runs in agents with access to projects.</p>
      </div>

      <div class="col-md-4 col-sm-4">
        <h4>Editor</h4>
        <p>Modify the behavior of the browser IDE with new views, actions, look, perspectives, and wizards.</p>
        <ul>
          <li><a href="../docs/ide-extensions-gwt.html" target="blank">Developing Extensions</a></li>
        </ul>
      </div>

      <div class="clearfix"></div>
    </div> <!-- .row -->

    <div class="row">
      <div class="col-md-4 col-sm-4">
        <h4>Keybindings</h4>
        <p>Software dynamically installed and run within a user's workspace.</p><ul>
        <ul>
          <li><a href="../docs/installers.html" target="blank">Workspace Agents</a></li>
        </ul>
      </div>
      
      <div class="col-md-4 col-sm-4">
        <h4>Assemblies</h4>
        <p>A re-packaging of Eclipse Che distributable as a new desktop IDE application or server.</p>
        <ul>
          <li><a href="../docs/assemblies.html" target="blank">Assembly Lifecycle</a></li>
        </ul>
      </div>

      <div class="col-md-4 col-sm-4">
        <h4>REST APIs</h4>
        <p>The Che server and each workspace has all services programmable through REST APIs.</p>
        <ul>
          <li><a href="../docs/rest-api.html" target="blank">Che REST APIs</a></li>
        </ul>
      </div>

      

      <div class="clearfix"></div>
    </div> <!-- .row -->


  </div> <!-- .container-fluid -->
</div> <!-- .tech -->

<hr class="gray">
<div class="container-fluid content">
    <h2>Who is Extending Che?</h2>

    <div class="row">
      <div class="col-md-4">
        <a href="<?php echo $rootPath; ?>/extend/codenvy/" target="_blank" style="text-decoration: none"><img src="../images/logo-extend-codenvy.png" style="height: 111px" alt="Codenvy"></a>
        <h3><a href="<?php echo $rootPath; ?>/extend/codenvy/" target="_blank">Codenvy</a></h3>
        <p>Cloud workspaces for development teams - think of it as "enterprise Che".</p>
      </div>

      <div class="col-md-4">
        <a href="<?php echo $rootPath; ?>/extend/silexica/" target="_blank"><img src="<?php echo $rootPath; ?>/images/logo-silexica@2x.png" style="height: 111px" class="img-responsive"></a>
        <h3><a href="<?php echo $rootPath; ?>/extend/silexica/" target="_blank">Silexica</a></h3>
        <p>Developer tooling for simplifying multicore platform development based on Che.</p>
      </div>

      <div class="col-md-4">
        <a href="<?php echo $rootPath; ?>/extend/sap/" target="_blank"><img src="../images/logo-extend-sap@2x.jpg" style="height: 111px" alt="Samsung"></a>
        <h3><a href="<?php echo $rootPath; ?>/extend/sap/" target="_blank">SAP IDE for HANA</a></h3>
        <p>A tailored development environment for SAP HANA based on Che.</p>
      </div>
    </div> <!-- .row -->

    <div class="row">
      <p>&nbsp;</p>
      <br>
      <h3 class="col-sm-12">More Case Studies</h3>

      <ul class="col-md-12">
        <li><a href="<?php echo $rootPath; ?>/extend/bitnami/">Bitnami integrates developer containers</a> with frameworks for Express, Laravel, Rails, and others.</li>
      </ul>

    </div> <!-- .row -->
  </div>
</div>

<?php include '../includes/footer.php'; ?>