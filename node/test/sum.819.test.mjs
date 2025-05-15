
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 20 + 65 to equal 85', (t) => {
  assert.strictEqual(sum(20, 65), 85);
});
