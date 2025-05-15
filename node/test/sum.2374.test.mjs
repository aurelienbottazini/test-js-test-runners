
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 29 + 50 to equal 79', (t) => {
  assert.strictEqual(sum(29, 50), 79);
});
