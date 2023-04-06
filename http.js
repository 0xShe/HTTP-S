function processURL() {
  // 获取输入文本框中的内容
  var inputField = document.getElementById("input");
  var input = inputField.value.trim();

  // 判断输入是否为空
  if (input.length == 0) {
    alert("请输入URL！");
    return;
  }

  // 将输入按行分割
  var lines = input.split("\n");

  // 逐行处理URL
  var output = "";
  for (var i = 0; i < lines.length; i++) {
    var line = lines[i].trim();

    // 判断是否带有协议头
    if (!line.startsWith("http://") && !line.startsWith("https://")) {
      line = "http://" + line;
    }

    output += line + "\n";
  }

  // 将处理后的URL显示在输出文本框中
  var outputField = document.getElementById("output");
  outputField.value = output.trim();
}

function clearFields() {
  // 清空输入文本框和输出文本框
  var inputField = document.getElementById("input");
  inputField.value = "";
  var outputField = document.getElementById("output");
  outputField.value = "";
}

function copyOutput() {
  var outputField = document.getElementById("output");
  outputField.select();
  document.execCommand("copy");
  alert("已复制到剪贴板！");
}