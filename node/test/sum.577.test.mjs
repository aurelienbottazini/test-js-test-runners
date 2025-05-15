
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 21 + 69 to equal 90', (t) => {
  assert.strictEqual(sum(21, 69), 90);
});
