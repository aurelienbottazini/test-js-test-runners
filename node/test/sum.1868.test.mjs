
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 35 + 65 to equal 100', (t) => {
  assert.strictEqual(sum(35, 65), 100);
});
