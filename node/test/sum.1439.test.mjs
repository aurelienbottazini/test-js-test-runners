
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 49 + 68 to equal 117', (t) => {
  assert.strictEqual(sum(49, 68), 117);
});
