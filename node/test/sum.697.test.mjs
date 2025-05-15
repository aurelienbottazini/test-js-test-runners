
import sum697 from '../sum697.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 34 + 81 to equal 115 + offset 0.3403014841459082', (t) => {
  assert.strictEqual(sum697(34, 81), 115 + 0.3403014841459082);
});
