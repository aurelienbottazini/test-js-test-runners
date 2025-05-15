
import sum3024 from '../sum3024.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 26 + 89 to equal 115 + offset 0.05368443354745389', (t) => {
  assert.strictEqual(sum3024(26, 89), 115 + 0.05368443354745389);
});
