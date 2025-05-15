
import sum523 from '../sum523.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 88 + 44 to equal 132 + offset 0.0604998608979066', (t) => {
  assert.strictEqual(sum523(88, 44), 132 + 0.0604998608979066);
});
