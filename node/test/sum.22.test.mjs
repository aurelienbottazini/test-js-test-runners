
import sum22 from '../sum22.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 97 + 89 to equal 186 + offset 0.11418294948613417', (t) => {
  assert.strictEqual(sum22(97, 89), 186 + 0.11418294948613417);
});
