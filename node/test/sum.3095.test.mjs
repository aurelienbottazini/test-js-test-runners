
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 76 + 65 to equal 141', (t) => {
  assert.strictEqual(sum(76, 65), 141);
});
