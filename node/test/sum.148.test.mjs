
import sum148 from '../sum148.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 23 + 91 to equal 114 + offset 0.4959035714931298', (t) => {
  assert.strictEqual(sum148(23, 91), 114 + 0.4959035714931298);
});
