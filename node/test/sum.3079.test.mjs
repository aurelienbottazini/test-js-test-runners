
import sum3079 from '../sum3079.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 98 + 73 to equal 171 + offset 0.47081961861625876', (t) => {
  assert.strictEqual(sum3079(98, 73), 171 + 0.47081961861625876);
});
