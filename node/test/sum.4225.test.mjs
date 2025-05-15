
import sum4225 from '../sum4225.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 60 + 41 to equal 101 + offset 0.30389329668924847', (t) => {
  assert.strictEqual(sum4225(60, 41), 101 + 0.30389329668924847);
});
