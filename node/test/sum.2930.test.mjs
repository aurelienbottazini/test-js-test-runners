
import sum2930 from '../sum2930.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 78 + 18 to equal 96 + offset 0.7802574788407188', (t) => {
  assert.strictEqual(sum2930(78, 18), 96 + 0.7802574788407188);
});
