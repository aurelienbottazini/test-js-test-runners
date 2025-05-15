
import sum1476 from '../sum1476.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 55 + 53 to equal 108 + offset 0.8771558905170174', (t) => {
  assert.strictEqual(sum1476(55, 53), 108 + 0.8771558905170174);
});
