
[![Build Status](https://dev.azure.com/curiosity-ai/mosaik/_apis/build/status/tesserae?branchName=master)](https://dev.azure.com/curiosity-ai/mosaik/_build/latest?definitionId=25&branchName=master)

<a href="https://curiosity.ai"><img src="https://curiosity.ai/assets/images/logos/curiosity.png" width="100" height="100" align="right" /></a>
# tesserae

_**Tesserae**_ is a UI toolkit for building websites entirely in C#, inspired by Microsoft's [Fluent UI](https://github.com/microsoft/fluentui) toolkit.

It uses the [Bridge.NET](https://github.com/bridgedotnet/Bridge/) C# to Javascript transpiler to provide an easy to use, strongly typed UI development experience.

### Usage

#### Using NuGet:

[![Nuget](https://img.shields.io/nuget/v/Tesserae.svg?maxAge=0&colorB=brightgreen)](https://www.nuget.org/packages/Tesserae/) 

```
install-package Tesserae
```

#### Local development

For development, we recomend installing the [dotnet serve](https://github.com/natemcmaster/dotnet-serve) global tool, so you can test your site locally:

````bash
cd \bin\Debug\net461\bridge\
dotnet serve --port 5000
start http://localhost:5000/
````

Note: Building with ``dotnet build`` is not yet supported by Bridge. You can build either directly from Visual Studio, or install locally the [Bridge CLI](https://github.com/bridgedotnet/CLI).

### Samples

The Tesserae.Tests project contains multiple samples of how to use this library. It is also built automatically and hosted [on our website](http://tesserae.curiosity.ai/).