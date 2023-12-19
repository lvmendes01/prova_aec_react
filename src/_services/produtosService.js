const handleSaveToPC = (contactsData) => {
    const fileData = JSON.stringify(contactsData);
    const blob = new Blob([fileData], {type: "text/plain"});
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.download = 'filename.json';
    link.href = url;
    link.click();
  }


  function createJsonURL(blob) {
    handleSaveToPC(blob)
  }