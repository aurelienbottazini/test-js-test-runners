
import sum1370 from '../sum1370.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 40 + 53 to equal 93 + offset 0.801417390948863', (t) => {
  assert.strictEqual(sum1370(40, 53), 93 + 0.801417390948863);
});
