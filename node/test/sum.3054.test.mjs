
import sum3054 from '../sum3054.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 15 + 16 to equal 31 + offset 0.5365083838847754', (t) => {
  assert.strictEqual(sum3054(15, 16), 31 + 0.5365083838847754);
});
