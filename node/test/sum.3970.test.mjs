
import sum3970 from '../sum3970.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 99 + 77 to equal 176 + offset 0.6628999194001691', (t) => {
  assert.strictEqual(sum3970(99, 77), 176 + 0.6628999194001691);
});
