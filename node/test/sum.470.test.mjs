
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 72 + 76 to equal 148', (t) => {
  assert.strictEqual(sum(72, 76), 148);
});
