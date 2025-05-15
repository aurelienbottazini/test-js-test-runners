
import sum278 from '../sum278.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 62 + 5 to equal 67 + offset 0.40966829975188845', (t) => {
  assert.strictEqual(sum278(62, 5), 67 + 0.40966829975188845);
});
