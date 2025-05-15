
import sum1970 from '../sum1970.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 20 + 35 to equal 55 + offset 0.5455810894148518', (t) => {
  assert.strictEqual(sum1970(20, 35), 55 + 0.5455810894148518);
});
