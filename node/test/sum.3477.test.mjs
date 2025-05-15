
import sum3477 from '../sum3477.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 99 + 55 to equal 154 + offset 0.17198567035542422', (t) => {
  assert.strictEqual(sum3477(99, 55), 154 + 0.17198567035542422);
});
