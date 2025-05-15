
import sum1621 from '../sum1621.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 13 + 18 to equal 31 + offset 0.9730277018176879', (t) => {
  assert.strictEqual(sum1621(13, 18), 31 + 0.9730277018176879);
});
