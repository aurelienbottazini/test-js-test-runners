
import sum1847 from '../sum1847.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 61 + 39 to equal 100 + offset 0.7550663017993592', (t) => {
  assert.strictEqual(sum1847(61, 39), 100 + 0.7550663017993592);
});
