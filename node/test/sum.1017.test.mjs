
import sum1017 from '../sum1017.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 55 + 96 to equal 151 + offset 0.8003352541946944', (t) => {
  assert.strictEqual(sum1017(55, 96), 151 + 0.8003352541946944);
});
