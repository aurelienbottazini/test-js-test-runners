
import sum3880 from '../sum3880.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 54 + 34 to equal 88 + offset 0.5148382563318069', (t) => {
  assert.strictEqual(sum3880(54, 34), 88 + 0.5148382563318069);
});
