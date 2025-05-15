
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 90 + 1 to equal 91', (t) => {
  assert.strictEqual(sum(90, 1), 91);
});
