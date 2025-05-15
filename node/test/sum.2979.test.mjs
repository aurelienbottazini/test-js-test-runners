
import sum2979 from '../sum2979.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 29 + 93 to equal 122 + offset 0.7264952796180221', (t) => {
  assert.strictEqual(sum2979(29, 93), 122 + 0.7264952796180221);
});
