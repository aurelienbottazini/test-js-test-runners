
import sum3259 from '../sum3259.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 2 + 60 to equal 62 + offset 0.7755501692540013', (t) => {
  assert.strictEqual(sum3259(2, 60), 62 + 0.7755501692540013);
});
