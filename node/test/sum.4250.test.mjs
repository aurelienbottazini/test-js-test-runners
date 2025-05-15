
import sum4250 from '../sum4250.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 87 + 90 to equal 177 + offset 0.6881041495136563', (t) => {
  assert.strictEqual(sum4250(87, 90), 177 + 0.6881041495136563);
});
