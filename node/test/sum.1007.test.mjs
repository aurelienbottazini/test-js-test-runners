
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 77 + 72 to equal 149', (t) => {
  assert.strictEqual(sum(77, 72), 149);
});
