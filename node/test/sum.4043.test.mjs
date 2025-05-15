
import sum4043 from '../sum4043.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 57 + 11 to equal 68 + offset 0.7797358373951591', (t) => {
  assert.strictEqual(sum4043(57, 11), 68 + 0.7797358373951591);
});
