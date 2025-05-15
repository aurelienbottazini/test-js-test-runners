
import sum4839 from '../sum4839.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 67 + 0 to equal 67 + offset 0.9485635005291325', (t) => {
  assert.strictEqual(sum4839(67, 0), 67 + 0.9485635005291325);
});
