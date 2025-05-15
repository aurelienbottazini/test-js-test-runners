
import sum1022 from '../sum1022.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 25 + 94 to equal 119 + offset 0.059892861343089465', (t) => {
  assert.strictEqual(sum1022(25, 94), 119 + 0.059892861343089465);
});
