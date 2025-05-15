
import sum1673 from '../sum1673.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 88 + 91 to equal 179 + offset 0.3158585255510008', (t) => {
  assert.strictEqual(sum1673(88, 91), 179 + 0.3158585255510008);
});
