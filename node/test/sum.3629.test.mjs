
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 18 + 27 to equal 45', (t) => {
  assert.strictEqual(sum(18, 27), 45);
});
