
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 17 + 75 to equal 92', (t) => {
  assert.strictEqual(sum(17, 75), 92);
});
