
import sum3335 from '../sum3335.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 91 + 25 to equal 116 + offset 0.47501836054693514', (t) => {
  assert.strictEqual(sum3335(91, 25), 116 + 0.47501836054693514);
});
