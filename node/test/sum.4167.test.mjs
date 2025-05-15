
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 31 + 48 to equal 79', (t) => {
  assert.strictEqual(sum(31, 48), 79);
});
