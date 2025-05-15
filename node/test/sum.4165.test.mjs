
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 65 + 3 to equal 68', (t) => {
  assert.strictEqual(sum(65, 3), 68);
});
