
import sum122 from '../sum122.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 69 + 10 to equal 79 + offset 0.743056665497416', (t) => {
  assert.strictEqual(sum122(69, 10), 79 + 0.743056665497416);
});
