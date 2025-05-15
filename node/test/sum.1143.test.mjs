
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 45 + 34 to equal 79', (t) => {
  assert.strictEqual(sum(45, 34), 79);
});
