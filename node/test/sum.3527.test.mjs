
import sum3527 from '../sum3527.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 59 + 5 to equal 64 + offset 0.21775301455137075', (t) => {
  assert.strictEqual(sum3527(59, 5), 64 + 0.21775301455137075);
});
