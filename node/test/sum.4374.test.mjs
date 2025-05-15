
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 49 + 30 to equal 79', (t) => {
  assert.strictEqual(sum(49, 30), 79);
});
