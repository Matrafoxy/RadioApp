const fs = require('fs');

// parse a list of radio stations found
const parseList = () => {
  const data = fs.readFileSync('/home/tudor/Downloads/Radio_full.m3u', {
    encoding: 'utf8',
    flag: 'r',
  });

  const radioList = [];
  const lines = data.split('\r\n');
  lines.shift();

  let name = '';
  let streamUri = '';
  let i = 0;
  lines.forEach((line) => {
    if (i % 2 === 0) {
      [null, name] = line.split(',');
    } else {
      streamUri = line;
    }

    if (name && streamUri) {
      radioList.push({
        name,
        streamUri,
      });
      name = '';
      streamUri = '';
    }
    i += 1;
  });
  fs.writeFile(
    './temp.json',
    JSON.stringify(radioList, null, 2),
    'utf8',
    (err) => {
      if (err) {
        return err;
      }
      return true;
    },
  );
};

parseList();
