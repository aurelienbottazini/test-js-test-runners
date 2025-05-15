
import sum3698 from '../sum3698.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 16 + 57 to equal 73 + offset 0.47983071293984947', (t) => {
  assert.strictEqual(sum3698(16, 57), 73 + 0.47983071293984947);
});
