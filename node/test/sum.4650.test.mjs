
import sum4650 from '../sum4650.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 96 + 31 to equal 127 + offset 0.25319634658927415', (t) => {
  assert.strictEqual(sum4650(96, 31), 127 + 0.25319634658927415);
});
