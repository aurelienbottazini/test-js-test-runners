
import sum1429 from '../sum1429.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 12 + 56 to equal 68 + offset 0.9491633763281966', (t) => {
  assert.strictEqual(sum1429(12, 56), 68 + 0.9491633763281966);
});
