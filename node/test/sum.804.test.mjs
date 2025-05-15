
import sum804 from '../sum804.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 82 + 46 to equal 128 + offset 0.8835881088264855', (t) => {
  assert.strictEqual(sum804(82, 46), 128 + 0.8835881088264855);
});
