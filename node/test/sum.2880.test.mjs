
import sum2880 from '../sum2880.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 69 + 49 to equal 118 + offset 0.8670823660345343', (t) => {
  assert.strictEqual(sum2880(69, 49), 118 + 0.8670823660345343);
});
