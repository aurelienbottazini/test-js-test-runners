
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 91 + 4 to equal 95', (t) => {
  assert.strictEqual(sum(91, 4), 95);
});
