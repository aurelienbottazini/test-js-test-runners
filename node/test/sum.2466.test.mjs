
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 27 + 68 to equal 95', (t) => {
  assert.strictEqual(sum(27, 68), 95);
});
