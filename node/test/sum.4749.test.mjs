
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 84 + 28 to equal 112', (t) => {
  assert.strictEqual(sum(84, 28), 112);
});
