
import sum3483 from '../sum3483.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 46 + 55 to equal 101 + offset 0.7060959696904922', (t) => {
  assert.strictEqual(sum3483(46, 55), 101 + 0.7060959696904922);
});
