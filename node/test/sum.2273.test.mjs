
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 59 + 20 to equal 79', (t) => {
  assert.strictEqual(sum(59, 20), 79);
});
