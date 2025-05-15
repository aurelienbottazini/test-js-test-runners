
import sum4621 from '../sum4621.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 95 + 56 to equal 151 + offset 0.8708105961608754', (t) => {
  assert.strictEqual(sum4621(95, 56), 151 + 0.8708105961608754);
});
