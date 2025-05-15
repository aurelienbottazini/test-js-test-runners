
import sum3496 from '../sum3496.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 55 + 69 to equal 124 + offset 0.7814732738146984', (t) => {
  assert.strictEqual(sum3496(55, 69), 124 + 0.7814732738146984);
});
