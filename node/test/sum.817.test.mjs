
import sum817 from '../sum817.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 48 + 87 to equal 135 + offset 0.9881780600147467', (t) => {
  assert.strictEqual(sum817(48, 87), 135 + 0.9881780600147467);
});
