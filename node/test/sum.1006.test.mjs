
import sum1006 from '../sum1006.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 11 + 58 to equal 69 + offset 0.21852692917535366', (t) => {
  assert.strictEqual(sum1006(11, 58), 69 + 0.21852692917535366);
});
