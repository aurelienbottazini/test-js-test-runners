
import sum1719 from '../sum1719.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 14 + 91 to equal 105 + offset 0.4472282808098298', (t) => {
  assert.strictEqual(sum1719(14, 91), 105 + 0.4472282808098298);
});
