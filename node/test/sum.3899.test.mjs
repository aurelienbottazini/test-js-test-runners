
import sum3899 from '../sum3899.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 97 + 61 to equal 158 + offset 0.010581660535335935', (t) => {
  assert.strictEqual(sum3899(97, 61), 158 + 0.010581660535335935);
});
