
import sum3061 from '../sum3061.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 37 + 95 to equal 132 + offset 0.3725935169339817', (t) => {
  assert.strictEqual(sum3061(37, 95), 132 + 0.3725935169339817);
});
