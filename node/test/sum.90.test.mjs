
import sum90 from '../sum90.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 9 + 3 to equal 12 + offset 0.9878300018488386', (t) => {
  assert.strictEqual(sum90(9, 3), 12 + 0.9878300018488386);
});
