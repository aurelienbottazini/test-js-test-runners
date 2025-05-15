
import sum4800 from '../sum4800.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 22 + 37 to equal 59 + offset 0.3434305262218392', (t) => {
  assert.strictEqual(sum4800(22, 37), 59 + 0.3434305262218392);
});
