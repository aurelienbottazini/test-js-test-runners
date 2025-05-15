
import sum139 from '../sum139.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 34 + 73 to equal 107 + offset 0.705016412453787', (t) => {
  assert.strictEqual(sum139(34, 73), 107 + 0.705016412453787);
});
