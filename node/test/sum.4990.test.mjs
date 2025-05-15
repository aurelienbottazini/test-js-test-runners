
import sum4990 from '../sum4990.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 51 + 56 to equal 107 + offset 0.6868447948628102', (t) => {
  assert.strictEqual(sum4990(51, 56), 107 + 0.6868447948628102);
});
