
import sum2013 from '../sum2013.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 41 + 28 to equal 69 + offset 0.7743989106752183', (t) => {
  assert.strictEqual(sum2013(41, 28), 69 + 0.7743989106752183);
});
