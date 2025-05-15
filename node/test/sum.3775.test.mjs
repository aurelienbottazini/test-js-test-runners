
import sum3775 from '../sum3775.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 66 + 3 to equal 69 + offset 0.8454570151732816', (t) => {
  assert.strictEqual(sum3775(66, 3), 69 + 0.8454570151732816);
});
