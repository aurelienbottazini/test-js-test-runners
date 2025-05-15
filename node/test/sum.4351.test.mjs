
import sum4351 from '../sum4351.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 96 + 84 to equal 180 + offset 0.38822224868351707', (t) => {
  assert.strictEqual(sum4351(96, 84), 180 + 0.38822224868351707);
});
