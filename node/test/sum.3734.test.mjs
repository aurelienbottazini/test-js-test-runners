
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 27 + 3 to equal 30', (t) => {
  assert.strictEqual(sum(27, 3), 30);
});
