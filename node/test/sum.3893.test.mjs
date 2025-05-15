
import sum3893 from '../sum3893.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 74 + 87 to equal 161 + offset 0.2821730564395478', (t) => {
  assert.strictEqual(sum3893(74, 87), 161 + 0.2821730564395478);
});
