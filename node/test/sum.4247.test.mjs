
import sum4247 from '../sum4247.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 96 + 37 to equal 133 + offset 0.060711819299844594', (t) => {
  assert.strictEqual(sum4247(96, 37), 133 + 0.060711819299844594);
});
