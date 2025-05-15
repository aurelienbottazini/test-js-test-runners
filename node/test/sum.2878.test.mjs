
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 69 + 48 to equal 117', (t) => {
  assert.strictEqual(sum(69, 48), 117);
});
