
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 57 + 22 to equal 79', (t) => {
  assert.strictEqual(sum(57, 22), 79);
});
