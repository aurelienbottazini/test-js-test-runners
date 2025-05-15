
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 8 + 71 to equal 79', (t) => {
  assert.strictEqual(sum(8, 71), 79);
});
