
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 37 + 54 to equal 91', (t) => {
  assert.strictEqual(sum(37, 54), 91);
});
