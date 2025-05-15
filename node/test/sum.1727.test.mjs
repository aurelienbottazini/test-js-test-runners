
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 72 + 69 to equal 141', (t) => {
  assert.strictEqual(sum(72, 69), 141);
});
