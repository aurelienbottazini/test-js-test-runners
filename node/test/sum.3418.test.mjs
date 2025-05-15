
import sum3418 from '../sum3418.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 94 + 86 to equal 180 + offset 0.8356058111429281', (t) => {
  assert.strictEqual(sum3418(94, 86), 180 + 0.8356058111429281);
});
