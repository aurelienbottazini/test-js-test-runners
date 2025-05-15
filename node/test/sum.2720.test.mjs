
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 39 + 40 to equal 79', (t) => {
  assert.strictEqual(sum(39, 40), 79);
});
