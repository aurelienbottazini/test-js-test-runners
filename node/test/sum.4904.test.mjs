
import sum4904 from '../sum4904.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 42 + 8 to equal 50 + offset 0.8609166909446835', (t) => {
  assert.strictEqual(sum4904(42, 8), 50 + 0.8609166909446835);
});
