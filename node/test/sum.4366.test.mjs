
import sum4366 from '../sum4366.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 31 + 70 to equal 101 + offset 0.6203694928045927', (t) => {
  assert.strictEqual(sum4366(31, 70), 101 + 0.6203694928045927);
});
