
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 84 + 7 to equal 91', (t) => {
  assert.strictEqual(sum(84, 7), 91);
});
