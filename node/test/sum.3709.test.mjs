
import sum3709 from '../sum3709.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 80 + 1 to equal 81 + offset 0.0326267213263326', (t) => {
  assert.strictEqual(sum3709(80, 1), 81 + 0.0326267213263326);
});
