
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 67 + 65 to equal 132', (t) => {
  assert.strictEqual(sum(67, 65), 132);
});
