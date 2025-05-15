
import sum3867 from '../sum3867.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 47 + 64 to equal 111 + offset 0.589804802277687', (t) => {
  assert.strictEqual(sum3867(47, 64), 111 + 0.589804802277687);
});
