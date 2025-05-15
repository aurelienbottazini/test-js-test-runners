
import sum2883 from '../sum2883.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 85 + 51 to equal 136 + offset 0.5338247803987122', (t) => {
  assert.strictEqual(sum2883(85, 51), 136 + 0.5338247803987122);
});
