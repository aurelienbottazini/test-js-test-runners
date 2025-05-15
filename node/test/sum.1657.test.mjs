
import sum1657 from '../sum1657.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 75 + 59 to equal 134 + offset 0.13882261047079614', (t) => {
  assert.strictEqual(sum1657(75, 59), 134 + 0.13882261047079614);
});
