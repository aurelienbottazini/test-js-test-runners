
import sum2834 from '../sum2834.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 44 + 34 to equal 78 + offset 0.19096185066719062', (t) => {
  assert.strictEqual(sum2834(44, 34), 78 + 0.19096185066719062);
});
