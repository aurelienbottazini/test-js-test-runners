
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 16 + 27 to equal 43', (t) => {
  assert.strictEqual(sum(16, 27), 43);
});
