
import sum758 from '../sum758.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 69 + 97 to equal 166 + offset 0.1424904373406346', (t) => {
  assert.strictEqual(sum758(69, 97), 166 + 0.1424904373406346);
});
