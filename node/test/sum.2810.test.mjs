
import sum2810 from '../sum2810.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 54 + 60 to equal 114 + offset 0.15198102141225345', (t) => {
  assert.strictEqual(sum2810(54, 60), 114 + 0.15198102141225345);
});
