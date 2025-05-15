
import sum4131 from '../sum4131.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 37 + 66 to equal 103 + offset 0.8645018447804401', (t) => {
  assert.strictEqual(sum4131(37, 66), 103 + 0.8645018447804401);
});
