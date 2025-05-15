
import sum4882 from '../sum4882.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 82 + 57 to equal 139 + offset 0.13186077829629506', (t) => {
  assert.strictEqual(sum4882(82, 57), 139 + 0.13186077829629506);
});
