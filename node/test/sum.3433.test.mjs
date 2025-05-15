
import sum3433 from '../sum3433.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 18 + 73 to equal 91 + offset 0.1369974244840888', (t) => {
  assert.strictEqual(sum3433(18, 73), 91 + 0.1369974244840888);
});
