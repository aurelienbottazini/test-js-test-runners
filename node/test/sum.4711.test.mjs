
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 50 + 29 to equal 79', (t) => {
  assert.strictEqual(sum(50, 29), 79);
});
