
import sum4633 from '../sum4633.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 73 + 86 to equal 159 + offset 0.40541112739833884', (t) => {
  assert.strictEqual(sum4633(73, 86), 159 + 0.40541112739833884);
});
