
import sum1677 from '../sum1677.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 24 + 14 to equal 38 + offset 0.8464215708656917', (t) => {
  assert.strictEqual(sum1677(24, 14), 38 + 0.8464215708656917);
});
