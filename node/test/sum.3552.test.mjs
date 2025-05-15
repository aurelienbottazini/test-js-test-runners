
import sum3552 from '../sum3552.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 88 + 56 to equal 144 + offset 0.7902745867435581', (t) => {
  assert.strictEqual(sum3552(88, 56), 144 + 0.7902745867435581);
});
