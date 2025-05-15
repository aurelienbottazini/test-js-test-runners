
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 27 + 44 to equal 71', (t) => {
  assert.strictEqual(sum(27, 44), 71);
});
