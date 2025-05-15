
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 72 + 18 to equal 90', (t) => {
  assert.strictEqual(sum(72, 18), 90);
});
