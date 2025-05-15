
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 79 + 68 to equal 147', (t) => {
  assert.strictEqual(sum(79, 68), 147);
});
