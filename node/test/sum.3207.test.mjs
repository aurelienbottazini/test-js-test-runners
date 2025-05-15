
import sum3207 from '../sum3207.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 69 + 7 to equal 76 + offset 0.20860189973895216', (t) => {
  assert.strictEqual(sum3207(69, 7), 76 + 0.20860189973895216);
});
