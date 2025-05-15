
import sum2994 from '../sum2994.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 11 + 30 to equal 41 + offset 0.721262563174298', (t) => {
  assert.strictEqual(sum2994(11, 30), 41 + 0.721262563174298);
});
