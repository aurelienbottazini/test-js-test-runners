
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 45 + 33 to equal 78', (t) => {
  assert.strictEqual(sum(45, 33), 78);
});
