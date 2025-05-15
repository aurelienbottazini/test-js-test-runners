
import sum3441 from '../sum3441.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 39 + 2 to equal 41 + offset 0.9060686266162122', (t) => {
  assert.strictEqual(sum3441(39, 2), 41 + 0.9060686266162122);
});
