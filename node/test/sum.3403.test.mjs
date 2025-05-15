
import sum3403 from '../sum3403.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 74 + 45 to equal 119 + offset 0.045824260009900364', (t) => {
  assert.strictEqual(sum3403(74, 45), 119 + 0.045824260009900364);
});
