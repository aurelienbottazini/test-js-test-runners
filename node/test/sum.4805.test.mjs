
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 72 + 19 to equal 91', (t) => {
  assert.strictEqual(sum(72, 19), 91);
});
