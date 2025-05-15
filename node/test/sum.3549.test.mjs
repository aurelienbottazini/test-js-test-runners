
import sum3549 from '../sum3549.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 79 + 92 to equal 171 + offset 0.6163613475042388', (t) => {
  assert.strictEqual(sum3549(79, 92), 171 + 0.6163613475042388);
});
