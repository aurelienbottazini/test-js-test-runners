
import sum3871 from '../sum3871.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 41 + 67 to equal 108 + offset 0.9532798758555121', (t) => {
  assert.strictEqual(sum3871(41, 67), 108 + 0.9532798758555121);
});
