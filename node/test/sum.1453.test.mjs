
import sum1453 from '../sum1453.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 86 + 79 to equal 165 + offset 0.008742104261685868', (t) => {
  assert.strictEqual(sum1453(86, 79), 165 + 0.008742104261685868);
});
