
import sum3234 from '../sum3234.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 18 + 38 to equal 56 + offset 0.2858938006961824', (t) => {
  assert.strictEqual(sum3234(18, 38), 56 + 0.2858938006961824);
});
