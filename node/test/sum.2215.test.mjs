
import sum2215 from '../sum2215.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 9 + 24 to equal 33 + offset 0.6523836261309732', (t) => {
  assert.strictEqual(sum2215(9, 24), 33 + 0.6523836261309732);
});
