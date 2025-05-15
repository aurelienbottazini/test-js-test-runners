
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 69 + 21 to equal 90', (t) => {
  assert.strictEqual(sum(69, 21), 90);
});
