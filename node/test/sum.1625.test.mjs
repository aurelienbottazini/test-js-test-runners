
import sum1625 from '../sum1625.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 5 + 59 to equal 64 + offset 0.9522564907287344', (t) => {
  assert.strictEqual(sum1625(5, 59), 64 + 0.9522564907287344);
});
