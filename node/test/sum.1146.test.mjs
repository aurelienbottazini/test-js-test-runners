
import sum1146 from '../sum1146.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 19 + 42 to equal 61 + offset 0.9753158874695487', (t) => {
  assert.strictEqual(sum1146(19, 42), 61 + 0.9753158874695487);
});
