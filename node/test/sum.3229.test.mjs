
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 42 + 20 to equal 62', (t) => {
  assert.strictEqual(sum(42, 20), 62);
});
