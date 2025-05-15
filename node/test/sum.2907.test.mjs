
import sum2907 from '../sum2907.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 1 + 13 to equal 14 + offset 0.9636940748815884', (t) => {
  assert.strictEqual(sum2907(1, 13), 14 + 0.9636940748815884);
});
