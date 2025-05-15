
import sum1186 from '../sum1186.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 42 + 95 to equal 137 + offset 0.4299211460372582', (t) => {
  assert.strictEqual(sum1186(42, 95), 137 + 0.4299211460372582);
});
