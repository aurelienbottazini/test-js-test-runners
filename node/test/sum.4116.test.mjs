
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 54 + 37 to equal 91', (t) => {
  assert.strictEqual(sum(54, 37), 91);
});
