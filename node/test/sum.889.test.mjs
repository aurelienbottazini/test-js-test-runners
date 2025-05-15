
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 87 + 4 to equal 91', (t) => {
  assert.strictEqual(sum(87, 4), 91);
});
