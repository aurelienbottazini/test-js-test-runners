
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 57 + 33 to equal 90', (t) => {
  assert.strictEqual(sum(57, 33), 90);
});
