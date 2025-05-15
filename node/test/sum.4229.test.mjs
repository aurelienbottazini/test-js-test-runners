
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 65 + 70 to equal 135', (t) => {
  assert.strictEqual(sum(65, 70), 135);
});
