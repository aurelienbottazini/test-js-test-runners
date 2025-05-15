
import sum625 from '../sum625.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 37 + 47 to equal 84 + offset 0.6958610510769786', (t) => {
  assert.strictEqual(sum625(37, 47), 84 + 0.6958610510769786);
});
