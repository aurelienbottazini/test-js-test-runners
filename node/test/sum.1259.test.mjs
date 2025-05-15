
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 42 + 70 to equal 112', (t) => {
  assert.strictEqual(sum(42, 70), 112);
});
