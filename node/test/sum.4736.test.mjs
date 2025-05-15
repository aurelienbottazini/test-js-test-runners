
import sum4736 from '../sum4736.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 7 + 20 to equal 27 + offset 0.7999521395822164', (t) => {
  assert.strictEqual(sum4736(7, 20), 27 + 0.7999521395822164);
});
