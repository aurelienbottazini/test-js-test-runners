
import sum3551 from '../sum3551.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 67 + 12 to equal 79 + offset 0.7801607002357098', (t) => {
  assert.strictEqual(sum3551(67, 12), 79 + 0.7801607002357098);
});
