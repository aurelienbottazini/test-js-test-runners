
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 22 + 27 to equal 49', (t) => {
  assert.strictEqual(sum(22, 27), 49);
});
