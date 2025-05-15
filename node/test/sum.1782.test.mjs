
import sum1782 from '../sum1782.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 96 + 18 to equal 114 + offset 0.019664986262548534', (t) => {
  assert.strictEqual(sum1782(96, 18), 114 + 0.019664986262548534);
});
