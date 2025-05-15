
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 71 + 8 to equal 79', (t) => {
  assert.strictEqual(sum(71, 8), 79);
});
