
import sum3181 from '../sum3181.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 9 + 55 to equal 64 + offset 0.6129213607602634', (t) => {
  assert.strictEqual(sum3181(9, 55), 64 + 0.6129213607602634);
});
