
import sum3205 from '../sum3205.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 24 + 89 to equal 113 + offset 0.41744692530894023', (t) => {
  assert.strictEqual(sum3205(24, 89), 113 + 0.41744692530894023);
});
