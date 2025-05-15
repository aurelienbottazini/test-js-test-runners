
import sum1076 from '../sum1076.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 26 + 42 to equal 68 + offset 0.19313300784001264', (t) => {
  assert.strictEqual(sum1076(26, 42), 68 + 0.19313300784001264);
});
