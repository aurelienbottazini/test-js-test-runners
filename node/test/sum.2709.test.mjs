
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 18 + 48 to equal 66', (t) => {
  assert.strictEqual(sum(18, 48), 66);
});
