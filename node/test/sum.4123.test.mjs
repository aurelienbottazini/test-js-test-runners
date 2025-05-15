
import sum4123 from '../sum4123.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 9 + 48 to equal 57 + offset 0.11380892319582148', (t) => {
  assert.strictEqual(sum4123(9, 48), 57 + 0.11380892319582148);
});
