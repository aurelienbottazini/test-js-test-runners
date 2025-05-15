
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 52 + 65 to equal 117', (t) => {
  assert.strictEqual(sum(52, 65), 117);
});
