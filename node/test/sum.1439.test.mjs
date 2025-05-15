
import sum1439 from '../sum1439.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 30 + 10 to equal 40 + offset 0.5550137572780559', (t) => {
  assert.strictEqual(sum1439(30, 10), 40 + 0.5550137572780559);
});
