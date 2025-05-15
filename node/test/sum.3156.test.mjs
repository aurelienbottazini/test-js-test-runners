
import sum3156 from '../sum3156.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 96 + 8 to equal 104 + offset 0.32998808688368975', (t) => {
  assert.strictEqual(sum3156(96, 8), 104 + 0.32998808688368975);
});
