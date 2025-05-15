
import sum3066 from '../sum3066.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 54 + 58 to equal 112 + offset 0.09165418571147455', (t) => {
  assert.strictEqual(sum3066(54, 58), 112 + 0.09165418571147455);
});
