
import sum3829 from '../sum3829.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 40 + 95 to equal 135 + offset 0.558051599363123', (t) => {
  assert.strictEqual(sum3829(40, 95), 135 + 0.558051599363123);
});
