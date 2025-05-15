
import sum379 from '../sum379.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 82 + 92 to equal 174 + offset 0.11725785177330827', (t) => {
  assert.strictEqual(sum379(82, 92), 174 + 0.11725785177330827);
});
