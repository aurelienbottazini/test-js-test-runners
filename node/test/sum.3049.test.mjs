
import sum3049 from '../sum3049.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 3 + 38 to equal 41 + offset 0.039584562735982876', (t) => {
  assert.strictEqual(sum3049(3, 38), 41 + 0.039584562735982876);
});
