
import sum4116 from '../sum4116.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 17 + 9 to equal 26 + offset 0.9101478840750303', (t) => {
  assert.strictEqual(sum4116(17, 9), 26 + 0.9101478840750303);
});
