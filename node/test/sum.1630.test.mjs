
import sum1630 from '../sum1630.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 62 + 87 to equal 149 + offset 0.08045404187929317', (t) => {
  assert.strictEqual(sum1630(62, 87), 149 + 0.08045404187929317);
});
