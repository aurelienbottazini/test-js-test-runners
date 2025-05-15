
import sum1812 from '../sum1812.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 9 + 92 to equal 101 + offset 0.49832147606836197', (t) => {
  assert.strictEqual(sum1812(9, 92), 101 + 0.49832147606836197);
});
