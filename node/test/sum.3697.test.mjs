
import sum3697 from '../sum3697.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 10 + 89 to equal 99 + offset 0.41157669863364466', (t) => {
  assert.strictEqual(sum3697(10, 89), 99 + 0.41157669863364466);
});
