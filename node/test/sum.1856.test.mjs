
import sum1856 from '../sum1856.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 68 + 52 to equal 120 + offset 0.16354417808922883', (t) => {
  assert.strictEqual(sum1856(68, 52), 120 + 0.16354417808922883);
});
