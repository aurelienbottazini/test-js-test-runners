
import sum3919 from '../sum3919.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 14 + 32 to equal 46 + offset 0.8379537614586327', (t) => {
  assert.strictEqual(sum3919(14, 32), 46 + 0.8379537614586327);
});
