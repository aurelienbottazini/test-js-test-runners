
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 10 + 69 to equal 79', (t) => {
  assert.strictEqual(sum(10, 69), 79);
});
