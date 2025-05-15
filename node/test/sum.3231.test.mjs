
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 66 + 13 to equal 79', (t) => {
  assert.strictEqual(sum(66, 13), 79);
});
