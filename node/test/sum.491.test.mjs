
import sum491 from '../sum491.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 98 + 53 to equal 151 + offset 0.6969109478716503', (t) => {
  assert.strictEqual(sum491(98, 53), 151 + 0.6969109478716503);
});
