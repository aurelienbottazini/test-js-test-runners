
import sum1063 from '../sum1063.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 9 + 69 to equal 78 + offset 0.951873821134302', (t) => {
  assert.strictEqual(sum1063(9, 69), 78 + 0.951873821134302);
});
