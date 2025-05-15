
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 17 + 65 to equal 82', (t) => {
  assert.strictEqual(sum(17, 65), 82);
});
