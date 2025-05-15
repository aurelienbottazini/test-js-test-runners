
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 73 + 6 to equal 79', (t) => {
  assert.strictEqual(sum(73, 6), 79);
});
