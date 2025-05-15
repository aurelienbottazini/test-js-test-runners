
import sum297 from '../sum297.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 44 + 59 to equal 103 + offset 0.7931835866133466', (t) => {
  assert.strictEqual(sum297(44, 59), 103 + 0.7931835866133466);
});
