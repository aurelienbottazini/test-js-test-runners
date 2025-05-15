
import sum2181 from '../sum2181.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 79 + 25 to equal 104 + offset 0.5223721354743617', (t) => {
  assert.strictEqual(sum2181(79, 25), 104 + 0.5223721354743617);
});
