
import sum2127 from '../sum2127.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 89 + 90 to equal 179 + offset 0.9462605653027433', (t) => {
  assert.strictEqual(sum2127(89, 90), 179 + 0.9462605653027433);
});
