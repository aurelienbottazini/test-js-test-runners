
import sum753 from '../sum753.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 26 + 63 to equal 89 + offset 0.9570340013229991', (t) => {
  assert.strictEqual(sum753(26, 63), 89 + 0.9570340013229991);
});
