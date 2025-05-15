
import sum2232 from '../sum2232.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 46 + 19 to equal 65 + offset 0.394673601868919', (t) => {
  assert.strictEqual(sum2232(46, 19), 65 + 0.394673601868919);
});
