
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 81 + 27 to equal 108', (t) => {
  assert.strictEqual(sum(81, 27), 108);
});
