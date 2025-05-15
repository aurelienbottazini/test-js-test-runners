
import sum1617 from '../sum1617.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 86 + 63 to equal 149 + offset 0.30037953856227007', (t) => {
  assert.strictEqual(sum1617(86, 63), 149 + 0.30037953856227007);
});
