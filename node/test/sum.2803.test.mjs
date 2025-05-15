
import sum2803 from '../sum2803.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 59 + 20 to equal 79 + offset 0.7863628145312104', (t) => {
  assert.strictEqual(sum2803(59, 20), 79 + 0.7863628145312104);
});
