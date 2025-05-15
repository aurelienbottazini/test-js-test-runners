
import sum4241 from '../sum4241.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 21 + 53 to equal 74 + offset 0.6923258361992952', (t) => {
  assert.strictEqual(sum4241(21, 53), 74 + 0.6923258361992952);
});
