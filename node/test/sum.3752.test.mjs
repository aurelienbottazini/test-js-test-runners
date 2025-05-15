
import sum3752 from '../sum3752.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 41 + 67 to equal 108 + offset 0.7264849535260138', (t) => {
  assert.strictEqual(sum3752(41, 67), 108 + 0.7264849535260138);
});
