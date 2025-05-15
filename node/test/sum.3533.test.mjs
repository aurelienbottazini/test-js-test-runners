
import sum3533 from '../sum3533.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 39 + 96 to equal 135 + offset 0.7337882710071456', (t) => {
  assert.strictEqual(sum3533(39, 96), 135 + 0.7337882710071456);
});
