
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 18 + 66 to equal 84', (t) => {
  assert.strictEqual(sum(18, 66), 84);
});
