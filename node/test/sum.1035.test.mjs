
import sum1035 from '../sum1035.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 56 + 78 to equal 134 + offset 0.003574174101691141', (t) => {
  assert.strictEqual(sum1035(56, 78), 134 + 0.003574174101691141);
});
