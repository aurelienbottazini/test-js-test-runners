
import sum2030 from '../sum2030.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 27 + 98 to equal 125 + offset 0.794956141338431', (t) => {
  assert.strictEqual(sum2030(27, 98), 125 + 0.794956141338431);
});
