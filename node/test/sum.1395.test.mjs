
import sum1395 from '../sum1395.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 82 + 12 to equal 94 + offset 0.23799941667491453', (t) => {
  assert.strictEqual(sum1395(82, 12), 94 + 0.23799941667491453);
});
