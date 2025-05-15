
import sum1235 from '../sum1235.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 94 + 89 to equal 183 + offset 0.4904910826664828', (t) => {
  assert.strictEqual(sum1235(94, 89), 183 + 0.4904910826664828);
});
