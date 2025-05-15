
import sum1227 from '../sum1227.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 82 + 14 to equal 96 + offset 0.3582568975323881', (t) => {
  assert.strictEqual(sum1227(82, 14), 96 + 0.3582568975323881);
});
