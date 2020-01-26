const structure = [
    {
      'folder': true,
      'title': 'Films',
      'children': [
        {
          'title': 'Iron Man.avi'
        },
        {
          'folder': true,
          'title': 'Fantasy',
          'children': [
            {
              'title': 'The Lord of the Rings.avi'
            },
            {
              'folder': true,
              'title': 'New folder 1',
              'children': false
            }
          ]
        }
      ]
    },
    {
      'folder': true,
      'title': 'Documents',
      'children': [
        {
          'folder': true,
          'title': 'EPAM Homework answers',
          'children': null
        }
      ]
    }
];

const rootNode = document.getElementById('root');

function createTree(level) {
  let file = document.createElement('div');
  let textnode = document.createTextNode(level.title);
  let folder = document.createElement('div');
  let nameFolder = document.createElement('p');
  let subfolder = document.createElement('div');
  let empty = document.createElement('div');

  nameFolder.appendChild(textnode);
  folder.className += 'folder';
  nameFolder.className += 'folderName';
  subfolder.className += 'subfolder';
  folder.appendChild(nameFolder);
  empty.className += 'emptyMessage';
  empty.innerHTML += 'The folder is empty';

  if (level.folder) {
    if (level.children) {
      level.children.forEach((item) => {
 subfolder.appendChild(createTree(item)) 
}
        
      );
    } else {
 subfolder.appendChild(empty)
    }
    folder.appendChild(subfolder);
    return folder
  } else if (!level.folder && level.title){
    file.className += 'file';
    file.appendChild(textnode);
    folder.appendChild(file);
    return file
  }
  structure.forEach((item) => {
 rootNode.appendChild(createTree(item))
  });
  let folderz = document.getElementsByClassName('folderName');

  for(let l = 0; l < folderz.length; l++) {
    folderz[l].addEventListener('click',function(){
      this.classList.toggle('active');
      let clickedSubfolder = this.nextSibling;
      clickedSubfolder.classList.toggle('open');
    })
  }

}