
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 18 + 61 to equal 79', (t) => {
  assert.strictEqual(sum(18, 61), 79);
});
