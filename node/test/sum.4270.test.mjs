
import sum4270 from '../sum4270.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 94 + 1 to equal 95 + offset 0.014968032521606167', (t) => {
  assert.strictEqual(sum4270(94, 1), 95 + 0.014968032521606167);
});
