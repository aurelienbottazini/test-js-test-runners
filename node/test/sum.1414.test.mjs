
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 97 + 88 to equal 185', (t) => {
  assert.strictEqual(sum(97, 88), 185);
});
