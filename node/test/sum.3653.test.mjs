
import sum3653 from '../sum3653.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 67 + 20 to equal 87 + offset 0.7297699240874137', (t) => {
  assert.strictEqual(sum3653(67, 20), 87 + 0.7297699240874137);
});
