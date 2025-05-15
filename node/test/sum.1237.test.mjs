
import sum1237 from '../sum1237.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 53 + 46 to equal 99 + offset 0.4753115806658881', (t) => {
  assert.strictEqual(sum1237(53, 46), 99 + 0.4753115806658881);
});
