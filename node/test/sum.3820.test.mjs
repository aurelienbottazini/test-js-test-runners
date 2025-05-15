
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 37 + 80 to equal 117', (t) => {
  assert.strictEqual(sum(37, 80), 117);
});
