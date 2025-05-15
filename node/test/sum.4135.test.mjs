
import sum4135 from '../sum4135.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 12 + 95 to equal 107 + offset 0.8113069655733213', (t) => {
  assert.strictEqual(sum4135(12, 95), 107 + 0.8113069655733213);
});
