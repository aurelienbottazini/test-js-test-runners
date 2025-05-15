
import sum4936 from '../sum4936.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 62 + 21 to equal 83 + offset 0.061358642635580996', (t) => {
  assert.strictEqual(sum4936(62, 21), 83 + 0.061358642635580996);
});
