
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 35 + 18 to equal 53', (t) => {
  assert.strictEqual(sum(35, 18), 53);
});
