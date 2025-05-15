
import sum4204 from '../sum4204.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 66 + 5 to equal 71 + offset 0.3700430373925935', (t) => {
  assert.strictEqual(sum4204(66, 5), 71 + 0.3700430373925935);
});
