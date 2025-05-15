
import sum102 from '../sum102.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 58 + 72 to equal 130 + offset 0.5783565909995476', (t) => {
  assert.strictEqual(sum102(58, 72), 130 + 0.5783565909995476);
});
