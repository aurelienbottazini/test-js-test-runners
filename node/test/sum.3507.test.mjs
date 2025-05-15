
import sum3507 from '../sum3507.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 26 + 27 to equal 53 + offset 0.37651531455365783', (t) => {
  assert.strictEqual(sum3507(26, 27), 53 + 0.37651531455365783);
});
