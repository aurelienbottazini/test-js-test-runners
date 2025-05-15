
import sum4530 from '../sum4530.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 37 + 4 to equal 41 + offset 0.130321555862967', (t) => {
  assert.strictEqual(sum4530(37, 4), 41 + 0.130321555862967);
});
