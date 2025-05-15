
import sum4930 from '../sum4930.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 58 + 31 to equal 89 + offset 0.055700038743508595', (t) => {
  assert.strictEqual(sum4930(58, 31), 89 + 0.055700038743508595);
});
