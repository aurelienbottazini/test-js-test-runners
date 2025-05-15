
import sum130 from '../sum130.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 29 + 6 to equal 35 + offset 0.5332230126404436', (t) => {
  assert.strictEqual(sum130(29, 6), 35 + 0.5332230126404436);
});
