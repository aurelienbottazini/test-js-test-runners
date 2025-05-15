
import sum3118 from '../sum3118.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 53 + 42 to equal 95 + offset 0.9585108832085509', (t) => {
  assert.strictEqual(sum3118(53, 42), 95 + 0.9585108832085509);
});
