
import sum4955 from '../sum4955.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 11 + 18 to equal 29 + offset 0.08518662763047913', (t) => {
  assert.strictEqual(sum4955(11, 18), 29 + 0.08518662763047913);
});
