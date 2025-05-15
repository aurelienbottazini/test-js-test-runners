
import sum3536 from '../sum3536.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 23 + 66 to equal 89 + offset 0.6288143624928553', (t) => {
  assert.strictEqual(sum3536(23, 66), 89 + 0.6288143624928553);
});
