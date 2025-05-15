
import sum2460 from '../sum2460.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 88 + 92 to equal 180 + offset 0.7858762476768405', (t) => {
  assert.strictEqual(sum2460(88, 92), 180 + 0.7858762476768405);
});
