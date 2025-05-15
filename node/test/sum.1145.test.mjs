
import sum1145 from '../sum1145.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 64 + 32 to equal 96 + offset 0.44145375782020835', (t) => {
  assert.strictEqual(sum1145(64, 32), 96 + 0.44145375782020835);
});
