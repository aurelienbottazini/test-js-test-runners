
import sum4694 from '../sum4694.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 96 + 94 to equal 190 + offset 0.962657683326746', (t) => {
  assert.strictEqual(sum4694(96, 94), 190 + 0.962657683326746);
});
