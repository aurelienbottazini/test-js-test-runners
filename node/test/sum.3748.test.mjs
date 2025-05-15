
import sum3748 from '../sum3748.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 29 + 73 to equal 102 + offset 0.4411502514511426', (t) => {
  assert.strictEqual(sum3748(29, 73), 102 + 0.4411502514511426);
});
