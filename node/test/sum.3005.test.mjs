
import sum3005 from '../sum3005.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 18 + 95 to equal 113 + offset 0.08465514019293519', (t) => {
  assert.strictEqual(sum3005(18, 95), 113 + 0.08465514019293519);
});
