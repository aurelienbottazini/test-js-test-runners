
import sum3781 from '../sum3781.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 48 + 13 to equal 61 + offset 0.6872458750199348', (t) => {
  assert.strictEqual(sum3781(48, 13), 61 + 0.6872458750199348);
});
