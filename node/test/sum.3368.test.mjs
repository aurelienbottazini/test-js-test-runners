
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 62 + 7 to equal 69', (t) => {
  assert.strictEqual(sum(62, 7), 69);
});
