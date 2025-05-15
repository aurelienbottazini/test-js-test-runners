
import sum4480 from '../sum4480.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 54 + 73 to equal 127 + offset 0.8826378390680779', (t) => {
  assert.strictEqual(sum4480(54, 73), 127 + 0.8826378390680779);
});
