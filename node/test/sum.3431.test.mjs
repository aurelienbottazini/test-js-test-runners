
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 92 + 25 to equal 117', (t) => {
  assert.strictEqual(sum(92, 25), 117);
});
