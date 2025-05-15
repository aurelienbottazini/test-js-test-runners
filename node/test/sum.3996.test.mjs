
import sum3996 from '../sum3996.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 33 + 54 to equal 87 + offset 0.4825585657723076', (t) => {
  assert.strictEqual(sum3996(33, 54), 87 + 0.4825585657723076);
});
