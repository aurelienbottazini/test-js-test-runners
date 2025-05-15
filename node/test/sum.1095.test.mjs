
import sum1095 from '../sum1095.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 73 + 66 to equal 139 + offset 0.2181131997729442', (t) => {
  assert.strictEqual(sum1095(73, 66), 139 + 0.2181131997729442);
});
