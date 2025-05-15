
import sum3013 from '../sum3013.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 22 + 32 to equal 54 + offset 0.9936010567825534', (t) => {
  assert.strictEqual(sum3013(22, 32), 54 + 0.9936010567825534);
});
