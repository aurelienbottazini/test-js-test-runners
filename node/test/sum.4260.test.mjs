
import sum4260 from '../sum4260.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 7 + 43 to equal 50 + offset 0.27649476874985723', (t) => {
  assert.strictEqual(sum4260(7, 43), 50 + 0.27649476874985723);
});
