
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 75 + 4 to equal 79', (t) => {
  assert.strictEqual(sum(75, 4), 79);
});
