
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 97 + 86 to equal 183', (t) => {
  assert.strictEqual(sum(97, 86), 183);
});
