
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 18 + 99 to equal 117', (t) => {
  assert.strictEqual(sum(18, 99), 117);
});
