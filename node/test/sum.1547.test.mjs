
import sum1547 from '../sum1547.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 69 + 37 to equal 106 + offset 0.775599250908382', (t) => {
  assert.strictEqual(sum1547(69, 37), 106 + 0.775599250908382);
});
