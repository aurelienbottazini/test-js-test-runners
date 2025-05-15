
import sum2275 from '../sum2275.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 49 + 94 to equal 143 + offset 0.8367321901853014', (t) => {
  assert.strictEqual(sum2275(49, 94), 143 + 0.8367321901853014);
});
