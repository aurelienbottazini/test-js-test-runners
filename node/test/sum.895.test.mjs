
import sum895 from '../sum895.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 10 + 93 to equal 103 + offset 0.6266506065870928', (t) => {
  assert.strictEqual(sum895(10, 93), 103 + 0.6266506065870928);
});
