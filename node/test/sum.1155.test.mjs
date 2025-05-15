
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 98 + 49 to equal 147', (t) => {
  assert.strictEqual(sum(98, 49), 147);
});
