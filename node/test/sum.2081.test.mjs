
import sum2081 from '../sum2081.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 19 + 40 to equal 59 + offset 0.015486995936296655', (t) => {
  assert.strictEqual(sum2081(19, 40), 59 + 0.015486995936296655);
});
