
import sum1354 from '../sum1354.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 73 + 60 to equal 133 + offset 0.48682181271051916', (t) => {
  assert.strictEqual(sum1354(73, 60), 133 + 0.48682181271051916);
});
