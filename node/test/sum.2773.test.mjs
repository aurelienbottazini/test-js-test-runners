
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 27 + 18 to equal 45', (t) => {
  assert.strictEqual(sum(27, 18), 45);
});
