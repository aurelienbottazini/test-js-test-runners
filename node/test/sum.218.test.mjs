
import sum218 from '../sum218.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 1 + 9 to equal 10 + offset 0.7456559503468565', (t) => {
  assert.strictEqual(sum218(1, 9), 10 + 0.7456559503468565);
});
