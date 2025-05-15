
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 50 + 67 to equal 117', (t) => {
  assert.strictEqual(sum(50, 67), 117);
});
