
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 57 + 76 to equal 133', (t) => {
  assert.strictEqual(sum(57, 76), 133);
});
