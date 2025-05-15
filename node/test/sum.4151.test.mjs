
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 57 + 27 to equal 84', (t) => {
  assert.strictEqual(sum(57, 27), 84);
});
