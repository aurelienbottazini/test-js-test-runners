
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 27 + 17 to equal 44', (t) => {
  assert.strictEqual(sum(27, 17), 44);
});
