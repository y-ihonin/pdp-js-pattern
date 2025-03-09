class UIElement {
  render() {
    throw new Error("Method 'render()' must be implemented.");
  }
}

class WindowsButton extends UIElement {
  render() {
    console.log("Rendering Windows Button");
  }
}

class MacOSButton extends UIElement {
  render() {
    console.log("Rendering MacOS Button");
  }
}

class LinuxButton extends UIElement {
  render() {
    console.log("Rendering Linux Button");
  }
}

class WindowsCheckbox extends UIElement {
  render() {
    console.log("Rendering Windows Checkbox");
  }
}

class MacOSCheckbox extends UIElement {
  render() {
    console.log("Rendering MacOS Checkbox");
  }
}

class LinuxCheckbox extends UIElement {
  render() {
    console.log("Rendering Linux Checkbox");
  }
}

class WindowsTextbox extends UIElement {
  render() {
    console.log("Rendering Windows Textbox");
  }
}

class MacOSTextbox extends UIElement {
  render() {
    console.log("Rendering MacOS Textbox");
  }
}

class LinuxTextbox extends UIElement {
  render() {
    console.log("Rendering Linux Textbox");
  }
}

class UIFactory {
  createButton() {
    throw new Error("Method 'createButton()' must be implemented.");
  }
  createCheckbox() {
    throw new Error("Method 'createCheckbox()' must be implemented.");
  }
  createTextbox() {
    throw new Error("Method 'createTextbox()' must be implemented.");
  }
}

class WindowsFactory extends UIFactory {
  createButton() {
    return new WindowsButton();
  }
  createCheckbox() {
    return new WindowsCheckbox();
  }
  createTextbox() {
    return new WindowsTextbox();
  }
}

class MacOSFactory extends UIFactory {
  createButton() {
    return new MacOSButton();
  }
  createCheckbox() {
    return new MacOSCheckbox();
  }
  createTextbox() {
    return new MacOSTextbox();
  }
}

class LinuxFactory extends UIFactory {
  createButton() {
    return new LinuxButton();
  }
  createCheckbox() {
    return new LinuxCheckbox();
  }
  createTextbox() {
    return new LinuxTextbox();
  }
}

function getFactory(platform) {
  switch (platform.toLowerCase()) {
    case "windows":
      return new WindowsFactory();
    case "macos":
      return new MacOSFactory();
    case "linux":
      return new LinuxFactory();
    default:
      throw new Error("Unknown platform");
  }
}

const platform = "windows";
const factory = getFactory(platform);

const button = factory.createButton();
button.render();

const checkbox = factory.createCheckbox();
checkbox.render();

const textbox = factory.createTextbox();
textbox.render();
