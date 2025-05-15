
import sum4957 from '../sum4957.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 43 + 54 to equal 97 + offset 0.06206010863112954', (t) => {
  assert.strictEqual(sum4957(43, 54), 97 + 0.06206010863112954);
});
