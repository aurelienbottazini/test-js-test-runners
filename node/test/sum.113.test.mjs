
import sum113 from '../sum113.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 31 + 62 to equal 93 + offset 0.9280470894213261', (t) => {
  assert.strictEqual(sum113(31, 62), 93 + 0.9280470894213261);
});
