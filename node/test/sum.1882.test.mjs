
import sum1882 from '../sum1882.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 86 + 4 to equal 90 + offset 0.42889449158574966', (t) => {
  assert.strictEqual(sum1882(86, 4), 90 + 0.42889449158574966);
});
