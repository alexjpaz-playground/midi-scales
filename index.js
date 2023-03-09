const MidiWriter = require('midi-writer-js');

const track = new MidiWriter.Track();

track.addEvent([
		new MidiWriter.NoteEvent({pitch: ['C3'], duration: '1'}),
  new MidiWriter.NoteEvent({pitch: [
    'C3',
    'D3',
    'E3',
    'F3',
    'G3',
    'A3',
    'B3',
    'C4',
    'B3',
    'A3',
    'G3',
    'F3',
    'E3',
    'D3',
    'C3',
  ], duration: '4'}),

		new MidiWriter.NoteEvent({pitch: ['C3'], duration: '1'}),
], function(event, index) {
    return {sequential: true};
  }
);

const write = new MidiWriter.Writer(track);

const fs = require('fs');

const content = 'Some content!';

try {
  fs.writeFileSync('./test.mid', write.buildFile());
  // file written successfully
} catch (err) {
  console.error(err);
}
