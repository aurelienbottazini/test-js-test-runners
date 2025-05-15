
import sum420 from '../sum420.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 57 + 92 to equal 149 + offset 0.40818179412442923', (t) => {
  assert.strictEqual(sum420(57, 92), 149 + 0.40818179412442923);
});
