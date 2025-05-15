
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 35 + 44 to equal 79', (t) => {
  assert.strictEqual(sum(35, 44), 79);
});
