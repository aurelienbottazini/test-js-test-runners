
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 70 + 9 to equal 79', (t) => {
  assert.strictEqual(sum(70, 9), 79);
});
