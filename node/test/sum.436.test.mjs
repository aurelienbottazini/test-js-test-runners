
import sum436 from '../sum436.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 11 + 56 to equal 67 + offset 0.4044691273864599', (t) => {
  assert.strictEqual(sum436(11, 56), 67 + 0.4044691273864599);
});
