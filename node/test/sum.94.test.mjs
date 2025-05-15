
import sum94 from '../sum94.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 48 + 5 to equal 53 + offset 0.8743704184611042', (t) => {
  assert.strictEqual(sum94(48, 5), 53 + 0.8743704184611042);
});
