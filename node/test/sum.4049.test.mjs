
import sum4049 from '../sum4049.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 94 + 8 to equal 102 + offset 0.38127035221230254', (t) => {
  assert.strictEqual(sum4049(94, 8), 102 + 0.38127035221230254);
});
