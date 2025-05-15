
import sum2304 from '../sum2304.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 40 + 61 to equal 101 + offset 0.14900921166025205', (t) => {
  assert.strictEqual(sum2304(40, 61), 101 + 0.14900921166025205);
});
