
import sum1098 from '../sum1098.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 10 + 5 to equal 15 + offset 0.8589025489850451', (t) => {
  assert.strictEqual(sum1098(10, 5), 15 + 0.8589025489850451);
});
