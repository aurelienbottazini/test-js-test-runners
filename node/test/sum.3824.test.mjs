
import sum3824 from '../sum3824.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 54 + 50 to equal 104 + offset 0.6413150621441249', (t) => {
  assert.strictEqual(sum3824(54, 50), 104 + 0.6413150621441249);
});
