
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 97 + 57 to equal 154', (t) => {
  assert.strictEqual(sum(97, 57), 154);
});
