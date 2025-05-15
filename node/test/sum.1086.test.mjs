
import sum1086 from '../sum1086.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 31 + 35 to equal 66 + offset 0.8470060596800888', (t) => {
  assert.strictEqual(sum1086(31, 35), 66 + 0.8470060596800888);
});
