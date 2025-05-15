
import sum396 from '../sum396.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 58 + 55 to equal 113 + offset 0.7335227282036412', (t) => {
  assert.strictEqual(sum396(58, 55), 113 + 0.7335227282036412);
});
