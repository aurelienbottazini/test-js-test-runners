
import sum1200 from '../sum1200.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 33 + 55 to equal 88 + offset 0.662875943623688', (t) => {
  assert.strictEqual(sum1200(33, 55), 88 + 0.662875943623688);
});
