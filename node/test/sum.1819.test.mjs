
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 65 + 65 to equal 130', (t) => {
  assert.strictEqual(sum(65, 65), 130);
});
