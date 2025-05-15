
import sum3703 from '../sum3703.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 25 + 57 to equal 82 + offset 0.1605782486579731', (t) => {
  assert.strictEqual(sum3703(25, 57), 82 + 0.1605782486579731);
});
