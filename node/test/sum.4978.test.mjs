
import sum4978 from '../sum4978.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 69 + 88 to equal 157 + offset 0.5401524120066878', (t) => {
  assert.strictEqual(sum4978(69, 88), 157 + 0.5401524120066878);
});
