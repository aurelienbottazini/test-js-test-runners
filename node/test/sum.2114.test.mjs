
import sum2114 from '../sum2114.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 39 + 7 to equal 46 + offset 0.3455615265637688', (t) => {
  assert.strictEqual(sum2114(39, 7), 46 + 0.3455615265637688);
});
