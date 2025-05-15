
import sum2243 from '../sum2243.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 60 + 95 to equal 155 + offset 0.8371673492969873', (t) => {
  assert.strictEqual(sum2243(60, 95), 155 + 0.8371673492969873);
});
