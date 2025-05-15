
import sum238 from '../sum238.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 12 + 31 to equal 43 + offset 0.2221896007864228', (t) => {
  assert.strictEqual(sum238(12, 31), 43 + 0.2221896007864228);
});
