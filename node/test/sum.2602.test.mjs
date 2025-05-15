
import sum2602 from '../sum2602.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 4 + 33 to equal 37 + offset 0.6202141948232119', (t) => {
  assert.strictEqual(sum2602(4, 33), 37 + 0.6202141948232119);
});
