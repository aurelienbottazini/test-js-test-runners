
import sum3534 from '../sum3534.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 71 + 67 to equal 138 + offset 0.6172805448165415', (t) => {
  assert.strictEqual(sum3534(71, 67), 138 + 0.6172805448165415);
});
