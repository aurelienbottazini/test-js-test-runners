
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 14 + 3 to equal 17', (t) => {
  assert.strictEqual(sum(14, 3), 17);
});
