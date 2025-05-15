
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 57 + 97 to equal 154', (t) => {
  assert.strictEqual(sum(57, 97), 154);
});
