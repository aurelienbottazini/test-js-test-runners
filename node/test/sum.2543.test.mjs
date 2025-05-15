
import sum2543 from '../sum2543.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 82 + 25 to equal 107 + offset 0.8136324002063412', (t) => {
  assert.strictEqual(sum2543(82, 25), 107 + 0.8136324002063412);
});
