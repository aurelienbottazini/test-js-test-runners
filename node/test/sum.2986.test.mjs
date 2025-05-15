
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 19 + 60 to equal 79', (t) => {
  assert.strictEqual(sum(19, 60), 79);
});
